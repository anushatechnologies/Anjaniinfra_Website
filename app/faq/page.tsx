'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  Phone,
  Plus,
  Minus,
  CheckCircle2,
  ShieldCheck,
  Clock,
  ArrowRight,
  MessageCircle,
  HelpCircle
} from 'lucide-react';
import { ConsultationModal } from '@/components/ConsultationModal';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    id: 1,
    question: "I have a new 3-bedroom House/Apartment. Can Anjani Infra do the complete home interiors for me?",
    answer:
      "Yes. We do complete home interior works which includes modular kitchens, living-dining areas, decorative partition units, designer false ceilings, and bedrooms with customized wardrobes for luxury houses and apartments across Hyderabad."
  },
  {
    id: 2,
    question: "This is my first time working with an interior designer. How do we get started?",
    answer:
      "Getting started is seamless and complimentary. You can connect with our team via WhatsApp, phone, or visit our Hyderabad Experience Showroom with your floor plan. Our senior interior architect will understand your requirements, explain design concepts, show live material samples, and provide an initial 3D concept layout with transparent estimate."
  },
  {
    id: 3,
    question: "If I hire an interior designer, how do I go about implementing the project?",
    answer:
      "Once the 3D drawings and itemized BOQ are approved by you, our automated factory begins precision manufacturing. Our dedicated site engineers and execution team handle everything turnkey—civil adjustments, electrical, plumbing, modular fitment, false ceilings, and painting—ensuring a completely hassle-free handover."
  },
  {
    id: 4,
    question: "How long will it take for your interior design company to complete the project?",
    answer:
      "We guarantee completion and handover within 35 to 40 working days from the date of final 3D design sign-off and site handover, backed by our strict on-time delivery commitment."
  },
  {
    id: 5,
    question: "Do you undertake commercial as well as residential interior projects?",
    answer:
      "Yes. In addition to luxury residential villas and apartments, Anjani Infra undertakes turnkey commercial projects, corporate office fitouts, executive boardrooms, retail showrooms, and hospitality interiors across Telangana."
  },
  {
    id: 6,
    question: "How much will a complete home interior project cost?",
    answer:
      "The investment depends on your floor plan size (2BHK, 3BHK, 4BHK, Villa) and choice of materials and finishes. Our transparent packages start from ₹6.37 Lac* for 2BHK and ₹7.95 Lac* for 3BHK up to ultra-luxury bespoke finishes with zero hidden costs."
  },
  {
    id: 7,
    question: "Why should someone go for customized interior design?",
    answer:
      "Customized interior design maximizes your space utilization, aligns ergonomics to your family's daily lifestyle, offers superior German hardware durability, and reflects your personal aesthetic rather than standard off-the-shelf mass furniture."
  },
  {
    id: 8,
    question: "Where do you get your furniture and fixtures from?",
    answer:
      "All modular cabinetry, wardrobes, and woodwork are precision-crafted in our own state-of-the-art automated manufacturing factory using imported German CNC machinery and certified boiling-water-proof (BWP/BWR) calibrated ply, paired with top-tier hardware from Hettich, Hafele, and Blum."
  },
  {
    id: 9,
    question: "Where do you offer Home Interior design?",
    answer:
      "We offer comprehensive interior design services across Hyderabad and Telangana—including Jubilee Hills, Banjara Hills, Gachibowli, Hitec City, Kokapet, Narsingi, Financial District, Tellapur, Kompally, and LB Nagar."
  },
  {
    id: 10,
    question: "How much of my personal time would I need to invest in an interior design project?",
    answer:
      "Very little. After 2 to 3 collaborative design sessions to finalize your 3D renders and material palette, our turnkey project managers handle all daily coordination, factory production, site work, and quality audits, keeping you updated via weekly digital progress reports."
  },
  {
    id: 11,
    question: "Do you provide after-sales support? How many years of warranty do you provide?",
    answer:
      "Yes, absolutely. Anjani Infra provides an industry-leading comprehensive 10-year warranty on modular woodwork along with lifelong service support and prompt customer care."
  },
  {
    id: 12,
    question: "Can you start my home interior design project immediately?",
    answer:
      "Yes. Once you connect with our team and share your floor plan, our designers can commence your 2D layout and 3D design phase immediately, even while your apartment or villa is under civil construction."
  },
  {
    id: 13,
    question: "Can I meet an interior designer at the Anjani Infra experience center?",
    answer:
      "Yes, you are warmly invited to visit our premium Experience Showrooms in Jubilee Hills and Narsingi, Hyderabad. You can touch and feel actual modular kitchens, walk-in wardrobes, hardware finishes, and consult directly with our senior designers."
  },
  {
    id: 14,
    question: "How Do I Make Sure that My Home Interior Project Will be Completed as Required?",
    answer:
      "Every Anjani Infra project is governed by an itemized Bill of Quantities (BOQ), approved 3D photorealistic renders, a structured milestone-based agreement, and stringent 75-point quality check audits at every milestone prior to handover."
  }
];

export default function FAQPage() {
  // First item open by default like in user's screenshot
  const [openItems, setOpenItems] = useState<number[]>([1]);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const toggleItem = (id: number) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter((item) => item !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* ──────────────── 1. Hero Banner matching Screenshot 1 ──────────────── */}
      <section className="relative h-[360px] sm:h-[440px] md:h-[500px] w-full overflow-hidden bg-gray-900">
        <Image
          src="/faq-bedroom-hero.jpg"
          alt="Frequently Asked Questions - Anjani Infra Home Interiors"
          fill
          priority
          className="object-cover object-center brightness-90"
        />
        {/* Subtle Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="max-w-2xl space-y-2 sm:space-y-3 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white tracking-tight leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-serif text-[#DFBA73] font-normal tracking-wide">
              We are always glad to answer
            </p>
            <div className="pt-2 flex items-center gap-3">
              <span className="w-12 h-1 bg-[#C5A059] rounded-full" />
              <p className="text-xs sm:text-sm text-gray-200">
                Everything you need to know about designing your dream home in Hyderabad
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ──────────────── 2. FAQ Accordion Section matching Screenshots 1-4 ──────────────── */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-black font-serif text-[#132B3E] tracking-tight">
              FAQ&apos;s
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Click any question below to expand detailed information about our process, pricing, and warranties.
            </p>
          </div>

          {/* Accordion List matching user screenshots */}
          <div className="space-y-3.5 sm:space-y-4">
            {faqList.map((faq) => {
              const isOpen = openItems.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-gray-300 shadow-xs"
                >
                  {/* Question Header */}
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full text-left p-4 sm:p-5 bg-white hover:bg-gray-50/70 transition-colors flex items-center justify-between gap-4 cursor-pointer group"
                  >
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                      <span className="text-sm sm:text-base font-bold text-[#643264] shrink-0 mt-0.5 sm:mt-0 select-none">
                        {faq.id}.
                      </span>
                      <span className="text-xs sm:text-sm md:text-[15px] font-semibold text-gray-900 group-hover:text-[#132B3E] leading-snug">
                        {faq.question}
                      </span>
                    </div>

                    <div className="shrink-0 text-gray-600 group-hover:text-gray-900 p-1">
                      {isOpen ? (
                        <span className="text-lg font-bold leading-none select-none">—</span>
                      ) : (
                        <span className="text-lg font-bold leading-none select-none">+</span>
                      )}
                    </div>
                  </button>

                  {/* Answer Body */}
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 bg-white border-t border-gray-100 animate-fade-in">
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-7 sm:pl-8">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ──────────────── 3. Bottom CTA Section matching Screenshot 4 ──────────────── */}
          <div className="mt-12 sm:mt-14 flex flex-col items-center justify-center text-center space-y-4">
            
            <button
              onClick={() => setIsConsultationModalOpen(true)}
              className="px-8 py-3.5 rounded-xl bg-[#643264] hover:bg-[#522552] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all hover:scale-[1.02] cursor-pointer"
            >
              Contact a Design Consultant for More Details
            </button>

            {/* Direct Instant Channels */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-gray-600">
              <span className="text-gray-400">Have an urgent query?</span>
              <a
                href="https://wa.me/918388899999?text=Hi%20Anjani%20Infra%2C%20I%20have%20a%20question%20regarding%20home%20interiors%20in%20Hyderabad."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#25D366] hover:text-[#20bd5a]"
              >
                <div className="w-4 h-4 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                  <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </div>
                <span>WhatsApp (+91 83888 99999)</span>
              </a>
              <span className="text-gray-300">•</span>
              <a
                href="tel:+918388899999"
                className="text-[#132B3E] hover:text-[#C5A059] flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Call Us Directly (+91 83888 99999)</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />

    </div>
  );
}
