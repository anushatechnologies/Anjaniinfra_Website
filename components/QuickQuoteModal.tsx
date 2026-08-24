'use client';

import React, { useState } from 'react';
import { X, Building2, Send, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    scope?: string;
    area?: number;
    tier?: string;
    estCost?: string;
  };
}

export function QuickQuoteModal({ isOpen, onClose, initialData }: QuickQuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: initialData?.scope || 'Turnkey Design & Build',
    areaSqFt: initialData?.area || 25000,
    city: 'Hyderabad / Telangana',
    notes: initialData?.estCost ? `Estimated Budget: ${initialData.estCost}` : '',
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 1. Direct Frontend Real Email Dispatch via FormSubmit Activated Token API
    try {
      await fetch('https://formsubmit.co/ajax/fcf0758fc720a7973aa59acb5232d497', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Architectural Proposal Inquiry: ${formData.name} (${formData.projectType})`,
          _template: 'table',
          _captcha: 'false',
          'Client Name': formData.name,
          'Phone / WhatsApp': formData.phone,
          'Client Email': formData.email || 'N/A',
          'Site Location / City': formData.city,
          'Contracting Scope': formData.projectType,
          'Built-Up Area': `${formData.areaSqFt} Sq.Ft.`,
          'Project Notes': formData.notes || 'Standard Consultation & BOQ Quote Request'
        })
      });
    } catch (apiErr) {
      console.log('Frontend FormSubmit mail dispatch note:', apiErr);
    }



    // 3. Direct Mailto Fallback Launcher
    const emailSubject = encodeURIComponent(`Architectural Proposal Inquiry: ${formData.name} (${formData.projectType})`);
    const emailBody = encodeURIComponent(
      `ANJANI INFRA - PROJECT INQUIRY DETAILS\n` +
      `======================================\n` +
      `Full Name: ${formData.name}\n` +
      `Phone / WhatsApp: ${formData.phone}\n` +
      `Email Address: ${formData.email || 'N/A'}\n` +
      `Site Location / City: ${formData.city}\n` +
      `Scope Category: ${formData.projectType}\n` +
      `Approx. Built-Up Area: ${formData.areaSqFt} Sq.Ft.\n` +
      `Notes / Specs: ${formData.notes || 'None'}\n\n` +
      `Sent via Anjani Infra Official Marketing Website\n` +
      `Direct Hotline: +91 83888 99999 | GSTIN: 36BKIPS0586G1ZT`
    );

    const mailtoUrl = `mailto:anjaniinfra4@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    try {
      window.location.href = mailtoUrl;
    } catch (err) {
      console.log('Mailto trigger executed:', err);
    }

    setLoading(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div
        className="bg-[#F6F4EE] border border-[#BFBFBF] rounded-3xl w-full max-w-2xl p-6 lg:p-8 shadow-2xl relative animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 h-9 w-9 bg-[#BFBFBF]/40 hover:bg-[#2B5573] hover:text-white rounded-full flex items-center justify-center text-[#2B5573] transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-6 space-y-6 text-[#1A374D]">
            {/* Header Badge */}
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold uppercase tracking-widest border border-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Inquiry Dispatched • Our Team Will Contact You Soon</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#1A374D]">
                Inquiry Dispatched Successfully!
              </h3>
              <p className="text-xs text-[#383735]/80 max-w-md mx-auto">
                Thank you <span className="font-bold text-[#1A374D]">{formData.name}</span>. Your architectural project details have been formatted and dispatched directly to our lead engineering office.
              </p>
            </div>

            {/* Complete Submitted Mail & Project Specs Box */}
            <div className="bg-[#1A374D] text-white p-5 sm:p-6 rounded-2xl shadow-xl space-y-4 border border-[#2B5573]">
              <div className="flex items-center justify-between border-b border-white/20 pb-3">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#C5A059]">
                  <Mail className="w-4 h-4" /> Submitted Inquiry Details
                </div>
                <div className="text-[10px] font-mono font-bold text-white/60">
                  REF #{Math.floor(100000 + Math.random() * 900000)}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="space-y-0.5">
                  <div className="text-[9px] uppercase font-bold text-white/50">Target Recipient</div>
                  <div className="font-bold text-[#C5A059]">anjaniinfra4@gmail.com</div>
                </div>

                <div className="space-y-0.5">
                  <div className="text-[9px] uppercase font-bold text-white/50">Client Name</div>
                  <div className="font-bold text-white">{formData.name}</div>
                </div>

                <div className="space-y-0.5">
                  <div className="text-[9px] uppercase font-bold text-white/50">Phone / WhatsApp</div>
                  <div className="font-mono font-bold text-white">{formData.phone}</div>
                </div>

                <div className="space-y-0.5">
                  <div className="text-[9px] uppercase font-bold text-white/50">Client Email</div>
                  <div className="font-bold text-white truncate">{formData.email || 'Not Provided'}</div>
                </div>

                <div className="space-y-0.5">
                  <div className="text-[9px] uppercase font-bold text-white/50">Site Location</div>
                  <div className="font-bold text-white">{formData.city}</div>
                </div>

                <div className="space-y-0.5">
                  <div className="text-[9px] uppercase font-bold text-white/50">Contracting Scope</div>
                  <div className="font-bold text-[#C5A059]">{formData.projectType}</div>
                </div>

                <div className="space-y-0.5">
                  <div className="text-[9px] uppercase font-bold text-white/50">Built-Up Area</div>
                  <div className="font-bold text-white">{formData.areaSqFt} Sq.Ft.</div>
                </div>

                <div className="space-y-0.5 sm:col-span-2 border-t border-white/10 pt-2 mt-1">
                  <div className="text-[9px] uppercase font-bold text-white/50">Project Specifications / Notes</div>
                  <div className="text-[11px] text-white/90 italic">{formData.notes || 'Standard Architectural Consultation & Site Inspection'}</div>
                </div>
              </div>
            </div>

            {/* Engineering Contact Guarantee Notice */}
            <div className="p-4 rounded-2xl bg-[#FCF9EB] border border-[#C5A059]/40 text-xs text-[#383735]/90 space-y-1">
              <div className="font-bold text-[#1A374D] flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A059]" /> Our Engineering Team Will Contact You Shortly
              </div>
              <p className="text-[11px] text-[#383735]/80 leading-relaxed">
                Our Lead Principal Estimator is reviewing your <span className="font-bold">{formData.areaSqFt} Sq.Ft.</span> specifications and will reach out to <span className="font-mono font-bold text-[#1A374D]">{formData.phone}</span> within 2 to 24 business hours with an official BOQ cost benchmark.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  const emailSubject = encodeURIComponent(`Architectural Proposal Inquiry: ${formData.name} (${formData.projectType})`);
                  const emailBody = encodeURIComponent(
                    `ANJANI INFRA - PROJECT INQUIRY DETAILS\n` +
                    `======================================\n` +
                    `Full Name: ${formData.name}\n` +
                    `Phone / WhatsApp: ${formData.phone}\n` +
                    `Email Address: ${formData.email || 'N/A'}\n` +
                    `Site Location / City: ${formData.city}\n` +
                    `Scope Category: ${formData.projectType}\n` +
                    `Approx. Built-Up Area: ${formData.areaSqFt} Sq.Ft.\n` +
                    `Notes / Specs: ${formData.notes || 'None'}\n\n` +
                    `Sent via Anjani Infra Official Marketing Website\n` +
                    `Direct Hotline: +91 83888 99999 | GSTIN: 36BKIPS0586G1ZT`
                  );
                  window.location.href = `mailto:anjaniinfra4@gmail.com?subject=${emailSubject}&body=${emailBody}`;
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#C5A059] text-slate-950 text-xs font-extrabold uppercase tracking-wider hover:bg-[#d5b069] transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Mail className="w-4 h-4" /> Open Email Client Again
              </button>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#1A374D] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#2B5573] transition-colors"
              >
                Return to Website
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#C5A059] mb-1">
                <Building2 className="w-3.5 h-3.5" /> Project Consultation & Official Quote
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#2B5573]">Request Architectural Proposal</h3>
              <p className="text-xs text-[#383735]/70 mt-1">
                Fill in your project details to receive a BOQ cost estimate & site visit schedule from Anjani Infra.
              </p>
            </div>

            {initialData?.estCost && (
              <div className="p-3 bg-[#FCF9EB] rounded-xl border border-[#C5A059]/40 text-xs flex items-center justify-between">
                <span className="font-semibold text-[#383735]">Selected Scope & Estimate:</span>
                <span className="font-mono font-bold text-[#2B5573]">{initialData.scope} • {initialData.estCost}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#383735] mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#BFBFBF] text-xs font-medium text-[#383735] focus:outline-none focus:border-[#2B5573]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#383735] mb-1">Phone / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98100 XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#BFBFBF] text-xs font-medium text-[#383735] focus:outline-none focus:border-[#2B5573]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#383735] mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#BFBFBF] text-xs font-medium text-[#383735] focus:outline-none focus:border-[#2B5573]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#383735] mb-1">Site Location / City</label>
                <input
                  type="text"
                  placeholder="e.g. Cyber City, Gurugram"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#BFBFBF] text-xs font-medium text-[#383735] focus:outline-none focus:border-[#2B5573]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#383735] mb-1">Scope Category</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#BFBFBF] text-xs font-bold text-[#383735] focus:outline-none focus:border-[#2B5573]"
                >
                  <option value="TURNKEY">Turnkey Design & Build (Civil + Interior + Facade)</option>
                  <option value="CIVIL">Civil Structural Engineering & Superstructure</option>
                  <option value="INTERIOR">Luxury Corporate / Residential Interior Fitout</option>
                  <option value="FACADE">Exterior Curtain Wall & ACP Facade Glazing</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#383735] mb-1">Approx. Built-Up Area (Sq.Ft)</label>
                <input
                  type="number"
                  value={formData.areaSqFt}
                  onChange={(e) => setFormData({ ...formData, areaSqFt: Number(e.target.value) })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#BFBFBF] text-xs font-medium text-[#383735] focus:outline-none focus:border-[#2B5573]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#383735] mb-1">Additional Project Specifications / Notes</label>
              <textarea
                rows={3}
                placeholder="Mention specific requirements like completion deadline, preferred materials, or architect drawings status..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#BFBFBF] text-xs font-medium text-[#383735] focus:outline-none focus:border-[#2B5573]"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <div className="text-[11px] text-[#383735]/60 flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#2B5573]" /> Direct Hotline: +91 8388899999
              </div>
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-[#2B5573] hover:bg-[#1A374D] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all"
              >
                <span>Submit Inquiry</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
