'use client';

import React, { useState } from 'react';
import { Building2, MapPin, Phone, Mail, FileText, Send, Clock, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Hyderabad / Telangana',
    scope: 'Turnkey Design & Build',
    area: 25000,
    notes: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Direct Frontend Real Email Dispatch via FormSubmit Activated Token API
    try {
      await fetch('https://formsubmit.co/ajax/fcf0758fc720a7973aa59acb5232d497', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Contact Inquiry: ${formData.name} (${formData.scope})`,
          _template: 'table',
          _captcha: 'false',
          'Client Name': formData.name,
          'Phone / WhatsApp': formData.phone,
          'Client Email': formData.email || 'N/A',
          'Site Location / City': formData.city,
          'Contracting Scope': formData.scope,
          'Built-Up Area': `${formData.area} Sq.Ft.`,
          'Project Notes': formData.notes || 'Standard Architectural Consultation Request'
        })
      });
    } catch (apiErr) {
      console.log('FormSubmit API dispatch note:', apiErr);
    }



    const emailSubject = encodeURIComponent(`Contact Inquiry: ${formData.name} (${formData.scope})`);
    const emailBody = encodeURIComponent(
      `ANJANI INFRA CONTACT INQUIRY\n` +
      `===========================\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email || 'N/A'}\n` +
      `City: ${formData.city}\n` +
      `Scope: ${formData.scope}\n` +
      `Area: ${formData.area} Sq.Ft.\n` +
      `Notes: ${formData.notes}\n`
    );

    try {
      window.location.href = `mailto:anjaniinfra4@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    } catch (err) {
      console.log('Mailto dispatched:', err);
    }

    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#F6F4EE] text-[#383735] pb-24">
      {/* Hero Banner */}
      <section className="bg-[#1A374D] text-white py-20 px-5 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#C5A059] text-[10px] font-extrabold uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5" /> Corporate Inquiries & Site Inspection
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black leading-tight text-white max-w-3xl">
            Contact Anjani Infra Projects
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
            Reach out to our principal engineering team for BOQ estimates, site visits, structural tenders, and architectural proposals.
          </p>
        </div>
      </section>

      {/* Contact Info & Form Grid */}
      <section className="max-w-7xl mx-auto px-5 lg:px-12 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* HQ Details Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-[#BFBFBF]/60 shadow-md space-y-6">
            <h2 className="text-2xl font-serif font-black text-[#1A374D]">Corporate Headquarters</h2>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#FCF9EB] border border-[#C5A059]/30">
                <MapPin className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[9px] uppercase font-bold text-[#C5A059]">Official HQ Address</div>
                  <div className="font-serif font-bold text-[#1A374D] text-sm leading-snug mt-0.5">
                    BLOCK-C, FLAT NO.1604, JAYABHERI THE SUMMIT, NANAKRAMGUDA SERVICE ROAD, NARSINGI, HYDERABAD, TELANGANA - 500075
                  </div>
                  <div className="text-[10px] text-[#383735]/70 mt-1 font-mono font-bold">State Code: 36</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#FCF9EB] border border-[#C5A059]/30">
                <Phone className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[9px] uppercase font-bold text-[#C5A059]">Direct Hotline</div>
                  <div className="font-mono font-bold text-[#1A374D] text-sm mt-0.5">+91 83888 99999</div>
                  <div className="text-[10px] text-[#383735]/70">Mon - Sat: 9:00 AM - 7:30 PM</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#FCF9EB] border border-[#C5A059]/30">
                <Mail className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[9px] uppercase font-bold text-[#C5A059]">Project Inquiries Email</div>
                  <div className="font-bold text-[#1A374D] text-sm mt-0.5">anjaniinfra4@gmail.com</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#1A374D] text-white space-y-1">
                <div className="text-[9px] uppercase font-bold text-[#C5A059]">GSTIN / Registration</div>
                <div className="font-mono font-bold text-sm">36BKIPS0586G1ZT</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-[#BFBFBF]/60 shadow-md">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <Send className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#1A374D]">Inquiry Email Sent!</h3>
              <p className="text-sm text-[#383735]/80 max-w-md mx-auto">
                Thank you <span className="font-bold text-[#1A374D]">{formData.name}</span>. Your details have been dispatched to <span className="font-bold text-[#C5A059]">anjaniinfra4@gmail.com</span>. Our lead estimator will contact you shortly at <span className="font-mono font-bold">{formData.phone}</span>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-[#1A374D] text-white text-xs font-bold uppercase tracking-wider"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h3 className="text-2xl font-serif font-bold text-[#1A374D]">Send Direct Project Inquiry</h3>
                <p className="text-xs text-[#383735]/70 mt-1">
                  Fill out the form below to initiate an official project inquiry or site inspection schedule.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-bold text-[#1A374D] mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FCF9EB] border border-[#BFBFBF] font-medium text-[#383735] focus:outline-none focus:border-[#1A374D]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#1A374D] mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98100 XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FCF9EB] border border-[#BFBFBF] font-medium text-[#383735] focus:outline-none focus:border-[#1A374D]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#1A374D] mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FCF9EB] border border-[#BFBFBF] font-medium text-[#383735] focus:outline-none focus:border-[#1A374D]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#1A374D] mb-1">Site Location / City</label>
                  <input
                    type="text"
                    placeholder="Hyderabad / Gurugram"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FCF9EB] border border-[#BFBFBF] font-medium text-[#383735] focus:outline-none focus:border-[#1A374D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1A374D] mb-1">Project Details & Notes</label>
                <textarea
                  rows={4}
                  placeholder="Describe your project built-up area, deadline, and architectural requirements..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FCF9EB] border border-[#BFBFBF] text-xs font-medium text-[#383735] focus:outline-none focus:border-[#1A374D]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#1A374D] hover:bg-[#2B5573] text-white text-xs font-extrabold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <span>Submit Inquiry & Send Email</span>
                <Send className="w-4 h-4 text-[#C5A059]" />
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
