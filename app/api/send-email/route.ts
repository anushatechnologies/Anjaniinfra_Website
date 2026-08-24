import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, city, scope, area, notes } = body;

    // Send email via direct public mail relay (FormSubmit / Web3Forms direct backend POST)
    const emailPayload = {
      _subject: `New Architectural Proposal Inquiry: ${name} (${scope})`,
      _template: 'table',
      _captcha: 'false',
      'Client Name': name,
      'Phone / WhatsApp': phone,
      'Client Email': email || 'N/A',
      'Site Location / City': city,
      'Contracting Scope': scope,
      'Built-Up Area': `${area} Sq.Ft.`,
      'Project Notes': notes || 'Standard Consultation & BOQ Quote Request'
    };

    // Forward to email relay
    await fetch('https://formsubmit.co/ajax/anjaniinfra4@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(emailPayload)
    });

    return NextResponse.json({ success: true, message: 'Email dispatched successfully to anjaniinfra4@gmail.com' });
  } catch (error) {
    console.error('API send-email error:', error);
    return NextResponse.json({ success: false, message: 'Failed to dispatch email' }, { status: 500 });
  }
}
