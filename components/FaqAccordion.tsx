'use client';

import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { ConsultationModal } from './ConsultationModal';

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqList: FAQItem[];
}

export function FaqAccordion({ faqList }: FaqAccordionProps) {
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
    <>
      <div className="space-y-3.5 sm:space-y-4">
        {faqList.map((faq) => {
          const isOpen = openItems.includes(faq.id);
          return (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-gray-300 shadow-xs"
            >
              <button
                type="button"
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

      {/* Bottom CTA Section */}
      <div className="mt-12 sm:mt-14 flex flex-col items-center justify-center text-center space-y-4">
        <button
          type="button"
          onClick={() => setIsConsultationModalOpen(true)}
          className="px-8 py-3.5 rounded-xl bg-[#643264] hover:bg-[#522552] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all hover:scale-[1.02] cursor-pointer"
        >
          Contact a Design Consultant for More Details
        </button>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-gray-600">
          <span className="text-gray-400">Have an urgent query?</span>
          <a
            href="https://wa.me/919848088998?text=Hi%20Anjani%20Infra%2C%20I%20have%20a%20question%20regarding%20home%20interiors%20in%20Hyderabad."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#25D366] hover:text-[#20bd5a]"
          >
            <div className="w-4 h-4 rounded-full bg-[#25D366] flex items-center justify-center text-white">
              <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </div>
            <span>WhatsApp (+91 98480 88998)</span>
          </a>
          <span className="text-gray-300">•</span>
          <a
            href="tel:+919848088998"
            className="text-[#132B3E] hover:text-[#C5A059] flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Call Us Directly (+91 98480 88998)</span>
          </a>
        </div>
      </div>

      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </>
  );
}
