'use client';

import React, { useState } from 'react';
import { MessageSquare, Phone, Mail, X, Send, CheckCircle2, ChevronRight, Sparkles, User, ArrowRight } from 'lucide-react';

interface FloatingActionsProps {
  onOpenEstimate?: () => void;
  onOpenConsultation?: () => void;
}

export function FloatingActions({ onOpenEstimate, onOpenConsultation }: FloatingActionsProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatStep, setChatStep] = useState<'welcome' | 'form' | 'sent'>('welcome');
  const [chatMessage, setChatMessage] = useState('');
  const [chatName, setChatName] = useState('');
  const [chatPhone, setChatPhone] = useState('');

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waMessage = `Hello Anjani Infra,\nI would like an interior design consultation.\n\n*Name:* ${chatName}\n*Phone:* ${chatPhone}\n*Requirement:* ${chatMessage}`;
    const waUrl = `https://wa.me/918388899999?text=${encodeURIComponent(waMessage)}`;
    if (typeof window !== 'undefined') {
      window.open(waUrl, '_blank');
    }
    setChatStep('sent');
    setTimeout(() => {
      // Auto close or reset after 4s
      setTimeout(() => {
        setIsChatOpen(false);
        setChatStep('welcome');
        setChatMessage('');
      }, 3000);
    }, 500);
  };

  return (
    <>
      {/* ──────────────── Sticky Right-Side Action Bar ──────────────── */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-end gap-2.5 pointer-events-none">
        
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918388899999?text=Hi%20Anjani%20Infra%2C%20I%20am%20interested%20in%20home%20interiors%20for%20my%20flat%2Fvilla%20in%20Hyderabad."
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-3 py-2.5 rounded-l-xl shadow-lg transition-transform hover:-translate-x-1 duration-200 group text-xs font-semibold"
          title="Chat on WhatsApp (+91 83888 99999)"
        >
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </div>
          <span className="hidden sm:inline">Whatsapp</span>
        </a>

        {/* Email Button */}
        <a
          href="mailto:anjaniinfra4@gmail.com?subject=Interior%20Design%20Inquiry%20-%20Anjani%20Infra&body=Hello%20Anjani%20Infra%2C%0A%0AI%20am%20interested%20in%20an%20interior%20design%20consultation%20for%20my%20property%20in%20Hyderabad.%0A%0APlease%20contact%20me%20with%20more%20details."
          className="pointer-events-auto flex items-center gap-2 bg-[#2B5573] hover:bg-[#1A374D] text-white px-3 py-2.5 rounded-l-xl shadow-lg transition-transform hover:-translate-x-1 duration-200 group text-xs font-semibold"
          title="Send an Email (anjaniinfra4@gmail.com)"
        >
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <Mail className="w-4 h-4 text-white" />
          </div>
          <span className="hidden sm:inline">Send Mail</span>
        </a>

        {/* Free Estimate Tab Button */}
        <button
          onClick={onOpenEstimate}
          className="pointer-events-auto mt-1 flex items-center gap-2 bg-[#132B3E] hover:bg-[#0F2231] text-white border-l-2 border-[#C5A059] px-4 py-3 rounded-l-xl shadow-xl transition-all hover:-translate-x-1 duration-200 font-bold text-xs tracking-wider uppercase cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-[#C5A059] animate-pulse" />
          <span>Free Estimate</span>
        </button>

      </div>

      {/* ──────────────── Bottom Right Floating Live Chat ──────────────── */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
        
        {/* Speech Bubble Prompt */}
        {!isChatOpen && (
          <div 
            onClick={() => setIsChatOpen(true)}
            className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-200 flex items-center gap-3 animate-fade-in group relative"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping absolute -top-1 -right-1" />
            <div className="w-2 h-2 rounded-full bg-emerald-500 absolute -top-0.5 -right-0.5" />
            <div>
              <p className="text-xs font-bold text-gray-900 leading-tight">We&apos;re Online!</p>
              <p className="text-[11px] text-gray-600 leading-tight">Live Chat With Our Designer.</p>
            </div>
            {/* Small triangle arrow at bottom right */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-b border-r border-gray-200 transform rotate-45" />
          </div>
        )}

        {/* Round Chat Bubble Trigger */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-14 h-14 rounded-full bg-[#132B3E] hover:bg-[#0F2231] border-2 border-[#C5A059]/40 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer relative"
          aria-label="Open Live Chat"
        >
          {isChatOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageSquare className="w-6 h-6" />
              <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
            </>
          )}
        </button>

        {/* Interactive Chat Popup Window */}
        {isChatOpen && (
          <div className="w-[340px] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col animate-scale-in mb-2">
            
            {/* Header */}
            <div className="bg-[#132B3E] text-white p-4 flex items-center justify-between border-b border-[#C5A059]/30">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/20 border border-[#C5A059] flex items-center justify-center text-white font-bold text-base">
                    A
                  </div>
                  <span className="w-3 h-3 bg-emerald-400 border-2 border-[#132B3E] rounded-full absolute bottom-0 right-0" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white leading-tight">Anjani Infra Expert</h4>
                  <p className="text-[11px] text-[#C5A059]">Online • Typically replies in 2 mins</p>
                </div>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="text-white/80 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-gray-50 max-h-[360px] overflow-y-auto space-y-3">
              
              {/* Agent Bubble */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#132B3E] text-[#C5A059] border border-[#C5A059]/40 text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                  A
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-none p-3 shadow-sm text-xs text-gray-800 space-y-1 max-w-[85%]">
                  <p className="font-semibold text-[#132B3E]">Namaste! Welcome to Anjani Infra Hyderabad 🙏</p>
                  <p>Are you looking for complete interior design woodwork or package offers for your new apartment or villa?</p>
                </div>
              </div>

              {chatStep === 'welcome' && (
                <div className="space-y-2 pt-1 pl-9">
                  <p className="text-[11px] text-gray-500 font-medium">Quick options:</p>
                  <div className="flex flex-col gap-1.5">
                    <button
                      onClick={() => {
                        if (onOpenEstimate) onOpenEstimate();
                        setIsChatOpen(false);
                      }}
                      className="text-left px-3 py-2 bg-white hover:bg-amber-50/60 border border-amber-200 text-[#132B3E] rounded-xl text-xs font-semibold transition-colors flex items-center justify-between group"
                    >
                      <span>Get Instant Free Cost Estimate</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#C5A059]" />
                    </button>
                    <button
                      onClick={() => {
                        if (onOpenConsultation) onOpenConsultation();
                        setIsChatOpen(false);
                      }}
                      className="text-left px-3 py-2 bg-white hover:bg-amber-50/60 border border-amber-200 text-[#132B3E] rounded-xl text-xs font-semibold transition-colors flex items-center justify-between group"
                    >
                      <span>Book Free Designer Consultation</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#C5A059]" />
                    </button>
                    <button
                      onClick={() => setChatStep('form')}
                      className="text-left px-3 py-2 bg-[#132B3E] text-white rounded-xl text-xs font-semibold hover:bg-[#0F2231] transition-colors flex items-center justify-between"
                    >
                      <span>Type a Custom Message</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" />
                    </button>
                  </div>
                </div>
              )}

              {chatStep === 'form' && (
                <form onSubmit={handleChatSubmit} className="space-y-2.5 pt-1 pl-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={chatName}
                    onChange={(e) => setChatName(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#C5A059] bg-white"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number (WhatsApp) *"
                    value={chatPhone}
                    onChange={(e) => setChatPhone(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#C5A059] bg-white"
                  />
                  <textarea
                    rows={2}
                    required
                    placeholder="Describe your floor plan / requirement..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#C5A059] bg-white resize-none"
                  />
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setChatStep('welcome')}
                      className="px-3 py-2 text-xs text-gray-500 hover:text-gray-700 bg-gray-200 rounded-lg"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-3 py-2 bg-[#C5A059] hover:bg-[#DFBA73] text-[#132B3E] text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send to Designer</span>
                    </button>
                  </div>
                </form>
              )}

              {chatStep === 'sent' && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center space-y-2 animate-fade-in">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <p className="text-xs font-bold text-emerald-900">Message Received!</p>
                  <p className="text-[11px] text-emerald-700">
                    Thank you {chatName}. Our senior designer will message or call you shortly on WhatsApp.
                  </p>
                </div>
              )}

            </div>

            {/* Footer Notice */}
            <div className="px-4 py-2 bg-white border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-400">
              <span>🔒 100% Privacy Guaranteed</span>
              <span>40 Working Days Guarantee</span>
            </div>

          </div>
        )}

      </div>
    </>
  );
}
