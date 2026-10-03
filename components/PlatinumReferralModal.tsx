'use client';

import React, { useState } from 'react';
import { ArrowRight, Sparkles, X } from 'lucide-react';

export function PlatinumReferralButton({
  label = 'Submit Referral Now',
  className,
}: {
  label?: string;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [referrerName, setReferrerName] = useState('');
  const [referrerPhone, setReferrerPhone] = useState('');
  const [friendName, setFriendName] = useState('');
  const [friendPhone, setFriendPhone] = useState('');
  const [projectLocation, setProjectLocation] = useState('');

  const handleWhatsAppReferral = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = `Hello Anjani Infra,\nI would like to submit a referral under the Platinum Membership Rewards Program.\n\n*My Details (Referrer):*\n• Name: ${referrerName}\n• Phone: ${referrerPhone}\n\n*Referral Details (Friend / Family):*\n• Name: ${friendName}\n• Phone: ${friendPhone}\n• Location / Floor Plan: ${projectLocation || 'Hyderabad'}\n\nPlease contact them and keep me updated on the ₹25,000 reward status.`;
    const waUrl = `https://wa.me/919848088998?text=${encodeURIComponent(waText)}`;
    if (typeof window !== 'undefined') {
      window.open(waUrl, '_blank');
    }
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={
          className ||
          'px-6 py-3 rounded-full bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] font-black text-xs uppercase tracking-wider shadow-lg transition-transform hover:scale-105 cursor-pointer flex items-center gap-2'
        }
      >
        <span>{label}</span>
        <ArrowRight className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-gray-100 flex flex-col relative animate-scale-in">
            {/* Header */}
            <div className="bg-[#132B3E] text-white px-6 py-4 flex items-center justify-between border-b-2 border-[#C5A059]">
              <div>
                <h3 className="text-base sm:text-lg font-bold flex items-center gap-2">
                  <span>Submit Referral Details</span>
                  <Sparkles className="w-4 h-4 text-[#C5A059]" />
                </h3>
                <p className="text-xs text-amber-100/80">
                  Earn up to ₹25,000 upon confirmation
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleWhatsAppReferral} className="p-6 space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1">
                  1. Your Information (Referrer)
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name *"
                    value={referrerName}
                    onChange={(e) => setReferrerName(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C5A059]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Your Phone / WhatsApp *"
                    value={referrerPhone}
                    onChange={(e) => setReferrerPhone(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1">
                  2. Referral Information (Friend / Family Member)
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <input
                    type="text"
                    required
                    placeholder="Friend's Full Name *"
                    value={friendName}
                    onChange={(e) => setFriendName(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C5A059]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Friend's Mobile / WhatsApp *"
                    value={friendPhone}
                    onChange={(e) => setFriendPhone(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1">
                  3. Project / Apartment Location (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 3BHK at My Home Bhooja / Kokapet / Financial District"
                  value={projectLocation}
                  onChange={(e) => setProjectLocation(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Submit Referral via WhatsApp (+91 98480 88998)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-gray-400 text-center">
                We respect privacy. Your referral will be contacted strictly regarding interior design.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
