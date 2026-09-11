'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  Phone,
  ArrowRight,
  Share2,
  Gift,
  Award,
  Users,
  CheckCircle2,
  ShieldCheck,
  Coins,
  X,
  MessageCircle,
  HelpCircle
} from 'lucide-react';

export default function PlatinumMembershipPage() {
  const [isReferralModalOpen, setIsReferralModalOpen] = useState(false);
  const [referrerName, setReferrerName] = useState('');
  const [referrerPhone, setReferrerPhone] = useState('');
  const [friendName, setFriendName] = useState('');
  const [friendPhone, setFriendPhone] = useState('');
  const [projectLocation, setProjectLocation] = useState('');

  const handleWhatsAppReferral = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = `Hello Anjani Infra,\nI would like to submit a referral under the Platinum Membership Rewards Program.\n\n*My Details (Referrer):*\n• Name: ${referrerName}\n• Phone: ${referrerPhone}\n\n*Referral Details (Friend / Family):*\n• Name: ${friendName}\n• Phone: ${friendPhone}\n• Location / Floor Plan: ${projectLocation || 'Hyderabad'}\n\nPlease contact them and keep me updated on the ₹25,000 reward status.`;
    const waUrl = `https://wa.me/918388899999?text=${encodeURIComponent(waText)}`;
    if (typeof window !== 'undefined') {
      window.open(waUrl, '_blank');
    }
    setIsReferralModalOpen(false);
  };

  const directWhatsAppUrl = `https://wa.me/918388899999?text=${encodeURIComponent(
    `Hello Anjani Infra,\nI would like to share a friend/family referral for home interior design under the Platinum Membership Program.\n\n*Referrer Name:*\n*Referrer Phone:*\n*Friend Name:*\n*Friend Phone:*\n*Property Location:*`
  )}`;

  return (
    <div className="bg-white min-h-screen">
      
      {/* ──────────────── 1. Hero Section ──────────────── */}
      <section className="relative h-[380px] sm:h-[460px] md:h-[520px] w-full overflow-hidden bg-gray-900">
        <Image
          src="/platinum-membership-hero.jpg"
          alt="Anjani Infra Platinum Membership Rewards"
          fill
          priority
          className="object-cover object-center brightness-90"
        />
        {/* Luxury Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Hero Content matching Screenshot 1 */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="max-w-2xl space-y-3 sm:space-y-4 animate-fade-in">
            
            {/* Top Tag */}
            <div className="inline-flex items-center gap-2">
              <span className="text-white text-xs sm:text-sm md:text-base font-serif tracking-[0.25em] uppercase font-semibold border-b-2 border-[#C5A059] pb-1">
                PLATINUM MEMBERSHIP
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-white tracking-tight leading-[1.1]">
              Earn <span className="text-[#DFBA73]">Rewards</span>
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal max-w-xl">
              Refer your friends and family to Anjani Infra for bespoke luxury interiors and receive cash rewards, premium vouchers, and exclusive club privileges.
            </p>

            {/* Quick Action Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsReferralModalOpen(true)}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] font-black text-xs uppercase tracking-wider shadow-lg transition-transform hover:scale-105 cursor-pointer flex items-center gap-2"
              >
                <span>Submit Referral Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+918388899999"
                className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>+91 83888 99999</span>
              </a>
            </div>

          </div>
        </div>
      </section>


      {/* ──────────────── 2. Main Offer Card Section (Screenshot 2) ──────────────── */}
      <section className="py-12 sm:py-16 bg-[#FAFAF8] border-b border-gray-100 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            
            {/* Subtle background coin/star accent */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-50 rounded-full blur-3xl pointer-events-none" />

            {/* Left Box: Earn up to ₹25,000 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
              <div className="flex items-center gap-2 text-[#C5A059] mb-1">
                <Sparkles className="w-6 h-6 fill-[#C5A059]" />
                <span className="text-xs font-black uppercase tracking-widest text-[#132B3E]">Official Referral Incentive</span>
              </div>

              <div className="flex items-baseline gap-1">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#132B3E] font-serif tracking-tight">
                  Earn <span className="font-sans font-bold text-3xl sm:text-4xl text-gray-600">up to</span>
                </h2>
              </div>
              <div className="text-4xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-[#C5A059] via-[#DFBA73] to-[#B89243] bg-clip-text text-transparent font-serif tracking-tight">
                ₹25,000<span className="text-2xl text-gray-500 font-sans">*</span>
              </div>
              <p className="text-xs text-gray-500 font-medium pt-1">
                Per successful residential interior project confirmed in Hyderabad
              </p>
            </div>

            {/* Right Box: Framed Callout Box with Yellow L-Corner Accent (Exact match to Screenshot 2) */}
            <div className="relative max-w-md w-full p-6 sm:p-7 bg-[#FFFDF9] rounded-2xl border border-amber-200/70 shadow-sm">
              {/* Corner accent decoration */}
              <div className="absolute top-2 right-2 w-6 h-6 border-t-3 border-r-3 border-[#C5A059] rounded-tr-md" />
              
              <h3 className="text-base sm:text-lg font-bold text-[#132B3E] leading-snug">
                Refer your friends and families to get rewarded!
              </h3>
              
              <div className="mt-3 pt-3 border-t border-amber-100 flex items-baseline gap-1.5">
                <span className="text-xs text-gray-600">Receive up to</span>
                <strong className="text-base font-black text-[#132B3E]">Rs 25,000</strong>
                <span className="text-xs text-gray-600">in Cash / Gift Vouchers</span>
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px] text-gray-400">
                <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Instant Account Credit
                </span>
                <span>*T&amp;C Apply</span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ──────────────── 3. "Here's how" Workflow Section (Screenshot 2 & 3) ──────────────── */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Card Container */}
          <div className="bg-[#EBF0F5]/70 rounded-3xl p-6 sm:p-10 border border-[#D5E1ED] shadow-sm">
            
            {/* Section Title matching Screenshot 2 */}
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#132B3E] mb-6 sm:mb-8">
              Here&apos;s how
            </h2>

            {/* Step List matching Screenshot 2 & 3 */}
            <div className="space-y-6 sm:space-y-7">
              
              {/* Item 1 */}
              <div className="flex items-start gap-4">
                <div className="text-[#132B3E] text-lg sm:text-xl font-black shrink-0 mt-0.5 select-none">
                  ➤
                </div>
                <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-medium">
                  Share with us the contact information of friends and families who are looking for interior design services.
                </p>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4">
                <div className="text-[#132B3E] text-lg sm:text-xl font-black shrink-0 mt-0.5 select-none">
                  ➤
                </div>
                <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-medium">
                  Once shared, our Client Relations Team will contact the referral to determine their interior requirements.
                </p>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-4">
                <div className="text-[#132B3E] text-lg sm:text-xl font-black shrink-0 mt-0.5 select-none">
                  ➤
                </div>
                <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-medium">
                  When the project is confirmed, you&apos;ll receive up to <strong className="text-[#132B3E]">Rs 25,000</strong> as a token of appreciation for the referral shared.
                </p>
              </div>

              {/* Item 4 - Silver Envoy Partnership */}
              <div id="silver-envoy" className="flex items-start gap-4 pt-2 border-t border-[#D5E1ED]/70">
                <div className="text-[#132B3E] text-lg sm:text-xl font-black shrink-0 mt-0.5 select-none">
                  ➤
                </div>
                <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-medium">
                  Clients who share a minimum of three leads can register as <strong className="text-[#C5A059]">Silver Envoy Partners</strong> and get eligible for <strong className="text-[#132B3E]">3% benefit</strong> on the fourth lead onwards.
                </p>
              </div>

            </div>

          </div>

          {/* ──────────────── 4. Action Section matching Screenshot 3 ──────────────── */}
          <div className="mt-10 flex flex-col items-center justify-center text-center">
            
            {/* Primary Submit Button */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => setIsReferralModalOpen(true)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#643264] hover:bg-[#522552] text-white font-bold text-sm tracking-wide shadow-md transition-all hover:shadow-lg hover:scale-[1.02] cursor-pointer"
              >
                Submit Now
              </button>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>WhatsApp Referral</span>
              </a>
            </div>

            {/* Vertical Divider matching Screenshot 3 */}
            <div className="flex flex-col items-center my-4">
              <div className="w-[1px] h-6 bg-gray-300" />
              <span className="text-xs font-semibold text-gray-500 py-1">Or</span>
              <div className="w-[1px] h-6 bg-gray-300" />
            </div>

            {/* Call & Share Now matching Screenshot 3 (Using Our Number +91 83888 99999) */}
            <div className="text-center space-y-1">
              <p className="text-sm font-semibold text-[#643264]">
                Call &amp; Share Now
              </p>
              <a
                href="tel:+918388899999"
                className="inline-block text-2xl sm:text-3xl font-extrabold text-gray-900 hover:text-[#C5A059] transition-colors tracking-tight font-sans"
              >
                (+91) 83888 99999
              </a>
              <p className="text-xs text-gray-500 pt-0.5">
                (To know your referral status you can call or WhatsApp us on the same number)
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ──────────────── 5. Platinum & Silver Envoy Club Highlights ──────────────── */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#C5A059]">Program Privileges</span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#132B3E] mt-1">
              Why Join the Platinum Network?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-[#C5A059]/40 transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#C5A059] flex items-center justify-center font-bold">
                <Coins className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-[#132B3E]">Guaranteed Cash Payouts</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Direct NEFT bank transfer or luxury Amazon / Tanishq gift vouchers credited promptly upon project contract execution.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-[#C5A059]/40 transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#643264] flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-[#132B3E]">Silver Envoy 3% Commission</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Unlock elevated partner status from your 4th successful referral onwards, receiving a lucrative 3% revenue commission on total order value.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-[#C5A059]/40 transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#132B3E] flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-[#132B3E]">Dedicated Concierge</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Personal Relationship Manager assigned to your referrals ensuring priority 3D design slots, VIP factory tours, and white-glove service.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ──────────────── 6. Referral Modal ──────────────── */}
      {isReferralModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-gray-100 flex flex-col relative animate-scale-in">
            
            {/* Header */}
            <div className="bg-[#132B3E] text-white px-6 py-4 flex items-center justify-between border-b-2 border-[#C5A059]">
              <div>
                <h3 className="text-base sm:text-lg font-bold flex items-center gap-2">
                  <span>Submit Referral Details</span>
                  <Sparkles className="w-4 h-4 text-[#C5A059]" />
                </h3>
                <p className="text-xs text-amber-100/80">Earn up to ₹25,000 upon confirmation</p>
              </div>
              <button
                onClick={() => setIsReferralModalOpen(false)}
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

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Submit Referral via WhatsApp (+91 83888 99999)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-gray-400 text-center">
                We respect privacy. Your referral will be contacted strictly regarding interior design.
              </p>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}
