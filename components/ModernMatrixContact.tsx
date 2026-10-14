'use client';

import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight, Clock, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';

export function ModernMatrixContact() {
  const whatsappBaseUrl = 'https://wa.me/919848088998';

  const quickPrompts = [
    {
      label: '🏡 Book Free Site Visit',
      message: 'Hello Anjani Infra, I would like to schedule a complimentary site visit in Hyderabad for my property.',
    },
    {
      label: '📐 Share Floor Plan & Mood Board',
      message: 'Hi Anjani Infra, I have an architectural floor plan and would like a 3D design concept mood board.',
    },
    {
      label: '💰 Request Itemized BOQ Estimate',
      message: 'Hello, I would like an itemized turnkey interior estimate and BOQ quotation for my residence.',
    },
    {
      label: '🏢 Corporate / Office Fitout',
      message: 'Hi Anjani Infra, I am looking for corporate office turnkey interior execution in Hyderabad.',
    },
  ];

  const handlePromptClick = (msg: string) => {
    if (typeof window !== 'undefined') {
      window.open(`${whatsappBaseUrl}?text=${encodeURIComponent(msg)}`, '_blank');
    }
  };

  return (
    <section id="contact-form" className="py-24 sm:py-32 bg-[#0a0a0a] text-[#e8e4de] border-t border-white/5 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="mm-eyebrow">DIRECT VIP CONSULTATION</div>
            <h2 className="mm-title !mb-4">
              Let&apos;s bring your <br />
              <em>vision</em> to life.
            </h2>
            <p className="text-sm sm:text-base text-[#d1ccc4] font-light leading-relaxed">
              Skip the long forms. Connect directly with our senior interior architects and project directors for instant consultations, complimentary site visits, and photorealistic 3D concepts.
            </p>

            <div className="space-y-5 pt-4">
              
              {/* Direct Phone */}
              <div className="flex items-start gap-4 p-4 rounded bg-[#141414] border border-white/10 hover:border-[#c9a96e]/40 transition-colors">
                <div className="w-10 h-10 rounded border border-[#c9a96e]/30 flex items-center justify-center shrink-0 bg-[#0a0a0a]">
                  <Phone className="w-4 h-4 text-[#c9a96e]" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#999999]">DIRECT DESIGN DESK</div>
                  <a href="tel:+919848088998" className="text-base text-[#fafaf8] hover:text-[#c9a96e] transition-colors font-medium">
                    +91 98480 88998
                  </a>
                  <p className="text-[11px] text-[#999999] mt-0.5">Mon – Sat: 9:30 AM – 8:00 PM IST</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded bg-[#141414] border border-white/10 hover:border-[#c9a96e]/40 transition-colors">
                <div className="w-10 h-10 rounded border border-[#c9a96e]/30 flex items-center justify-center shrink-0 bg-[#0a0a0a]">
                  <Mail className="w-4 h-4 text-[#c9a96e]" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#999999]">STUDIO INQUIRIES</div>
                  <a href="mailto:anjaniinfra4@gmail.com" className="text-base text-[#fafaf8] hover:text-[#c9a96e] transition-colors font-medium">
                    anjaniinfra4@gmail.com
                  </a>
                  <p className="text-[11px] text-[#999999] mt-0.5">24-hour response guarantee</p>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-start gap-4 p-4 rounded bg-[#141414] border border-white/10 hover:border-[#c9a96e]/40 transition-colors">
                <div className="w-10 h-10 rounded border border-[#c9a96e]/30 flex items-center justify-center shrink-0 bg-[#0a0a0a]">
                  <MapPin className="w-4 h-4 text-[#c9a96e]" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#999999]">EXPERIENCE STUDIO</div>
                  <p className="text-xs sm:text-sm text-[#fafaf8] leading-relaxed">
                    BLOCK-C, FLAT NO.1604, JAYABHERI THE SUMMIT,<br />
                    NANAKRAMGUDA SERVICE ROAD, NARSINGI, HYDERABAD
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Direct VIP Connect Hub */}
          <div className="lg:col-span-7 bg-[#141414] border border-white/10 p-6 sm:p-10 space-y-6">
            
            {/* VIP Header Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs uppercase tracking-[0.25em] text-[#c9a96e] font-sans font-medium">
                    PRINCIPAL ARCHITECT DESK ONLINE
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#fafaf8] mt-1.5">
                  Direct VIP Connect Hub
                </h3>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-[#c9a96e]/30 bg-[#0a0a0a] text-[11px] text-[#c9a96e]">
                <Clock className="w-3.5 h-3.5" />
                <span>AVG. RESPONSE: &lt; 15 MINS</span>
              </div>
            </div>

            {/* Quick Consultation Request Prompts */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-[0.2em] text-[#999999] font-medium block">
                Select your requirement for instant 1-tap connection:
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {quickPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handlePromptClick(prompt.message)}
                    className="p-3.5 rounded bg-[#0a0a0a] border border-white/10 hover:border-[#c9a96e] hover:bg-[#1a1a1a] text-left transition-all duration-200 group flex items-center justify-between"
                  >
                    <span className="text-xs text-[#fafaf8] group-hover:text-[#c9a96e] font-medium transition-colors">
                      {prompt.label}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#999999] group-hover:text-[#c9a96e] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              {/* WhatsApp VIP Button */}
              <a
                href={`${whatsappBaseUrl}?text=Hello%20Anjani%20Infra%2C%20I%20would%20like%20to%20consult%20with%20your%20design%20desk%20regarding%20my%20property.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mm-btn mm-btn-filled py-4 text-xs tracking-[0.2em] flex items-center justify-center gap-2.5 font-medium shadow-xl"
              >
                <span>CHAT ON WHATSAPP</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Direct Phone Call Button */}
              <a
                href="tel:+919848088998"
                className="mm-btn py-4 text-xs tracking-[0.2em] flex items-center justify-center gap-2.5 font-medium hover:border-[#c9a96e]"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>CALL +91 98480 88998</span>
              </a>

            </div>

            {/* Google Maps Directions Bar */}
            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Jayabheri+The+Summit+Nanakramguda+Narsingi+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-4 rounded bg-[#0a0a0a] border border-white/10 hover:border-[#c9a96e]/60 flex items-center justify-between transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#c9a96e]/10 border border-[#c9a96e]/30 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#c9a96e]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#fafaf8] font-medium group-hover:text-[#c9a96e] transition-colors">
                      Visit Our Experience Studio in Narsingi
                    </div>
                    <div className="text-[11px] text-[#999999]">
                      Jayabheri The Summit &bull; Get instant driving directions
                    </div>
                  </div>
                </div>

                <div className="text-xs text-[#c9a96e] flex items-center gap-1 font-medium tracking-wider">
                  <span className="hidden sm:inline">OPEN MAPS</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            </div>

            {/* Complimentary Guarantees Bar */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center sm:text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c9a96e] shrink-0" />
                <span className="text-[11px] text-[#d1ccc4]">Free Site Inspection</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c9a96e] shrink-0" />
                <span className="text-[11px] text-[#d1ccc4]">Photorealistic 3D Concept</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c9a96e] shrink-0" />
                <span className="text-[11px] text-[#d1ccc4]">Transparent BOQ Pricing</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
