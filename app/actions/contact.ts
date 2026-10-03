'use server';

import { revalidatePath } from 'next/cache';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

export interface ConsultationSubmission {
  name: string;
  phone: string;
  email?: string;
  location?: string;
  propertyType?: string;
  budget?: string;
  notes?: string;
}

export async function submitConsultationAction(data: ConsultationSubmission) {
  try {
    if (!data.name || !data.phone) {
      return { success: false, message: 'Name and Phone number are required' };
    }

    console.log('[Next.js Server Action] New Consultation Lead Received:', {
      ...data,
      timestamp: new Date().toISOString(),
    });

    // Save lead into Supabase
    try {
      const { error: dbError } = await supabaseAdmin
        .from('consultation_requests')
        .insert({
          full_name: data.name,
          phone: data.phone,
          email: data.email || null,
          property_type: data.propertyType || null,
          property_location: data.location || null,
          message: data.notes || data.budget ? `Budget: ${data.budget || 'N/A'}. ${data.notes || ''}` : null,
          status: 'new',
        });

      if (dbError) {
        console.warn('[Supabase] Warning inserting into consultation_requests:', dbError.message);
      }
    } catch (err: any) {
      console.warn('[Supabase] Error saving lead to database:', err.message);
    }

    revalidatePath('/');
    return {
      success: true,
      message: 'Thank you! Our senior interior designer will call you within 24 hours.',
    };
  } catch (error: any) {
    return { success: false, message: error.message || 'Submission failed' };
  }
}

export async function submitEstimateAction(data: any) {
  try {
    console.log('[Next.js Server Action] New Estimate Calculation Received:', {
      ...data,
      timestamp: new Date().toISOString(),
    });

    // Save estimate lead into Supabase
    try {
      const { error: dbError } = await supabaseAdmin
        .from('cost_estimates')
        .insert({
          floor_plan: data.bhk || data.floorPlan || '3 BHK',
          carpet_area: data.sqft ? `${data.sqft} sq.ft` : null,
          scope_of_work: data.services || data.scope || [],
          package_type: data.package || 'Custom',
          customer_name: data.name || data.fullName || 'Anonymous Lead',
          customer_phone: data.phone || data.mobile || 'Not provided',
          customer_email: data.email || null,
          estimated_amount: typeof data.total === 'number' ? data.total : null,
          status: 'pending',
        });

      if (dbError) {
        console.warn('[Supabase] Warning inserting into cost_estimates:', dbError.message);
      }
    } catch (err: any) {
      console.warn('[Supabase] Error saving estimate to database:', err.message);
    }

    return {
      success: true,
      message: 'Estimate calculated! Our design consultant will share your detailed BOQ.',
    };
  } catch (error: any) {
    return { success: false, message: error.message || 'Failed to submit estimate' };
  }
}
