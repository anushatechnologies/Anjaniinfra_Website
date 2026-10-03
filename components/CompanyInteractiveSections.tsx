'use client';

import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { DiscountModal } from './DiscountModal';
import { ConsultationModal } from './ConsultationModal';

export interface ProcessStep {
  id: string;
  name: string;
  description: string;
}

export function CompanyProcessSection({ steps }: { steps: ProcessStep[] }) {
  const [activeStep, setActiveStep] = useState<string>('execution');
  const selectedStepData = steps.find((s) => s.id === activeStep) || steps[3];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 font-sans mb-14">
          Just One Company for <br className="sm:hidden" />
          Interior Design, Production &amp; Implementation
        </h2>

        {/* Connected Process Diagram with 5 Circles */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="hidden sm:block absolute top-1/2 left-10 right-10 h-[2px] bg-gray-200 -translate-y-1/2 z-0" />
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-4 relative z-10">
            {steps.map((step) => {
              const isActive = activeStep === step.id;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(step.id)}
                  className="flex flex-col items-center cursor-pointer group bg-transparent border-0 outline-none"
                >
                  <div
                    className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center p-3 text-center transition-all duration-300 shadow-md ${
                      isActive
                        ? 'bg-[#132B3E] text-white scale-105 ring-4 ring-[#C5A059]/40 shadow-xl border-2 border-[#C5A059]'
                        : 'bg-white text-gray-800 border-2 border-gray-200 hover:border-[#C5A059] hover:scale-102'
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-bold leading-tight">
                      {step.name}
                    </span>
                  </div>
                  {isActive && (
                    <div className="mt-3 text-[#C5A059] text-lg font-bold animate-bounce">
                      ↓
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Description Card */}
        <div className="max-w-3xl mx-auto bg-gray-50 border border-[#C5A059]/30 rounded-2xl p-6 sm:p-10 shadow-sm text-center mb-12 animate-fade-in">
          <h3 className="text-lg sm:text-xl font-bold text-[#132B3E] mb-3">
            {selectedStepData.name}
          </h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            {selectedStepData.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-sm text-gray-600 leading-relaxed text-justify sm:text-center pt-4 border-t border-gray-100">
          It is not only by adopting proper systems but also with effective coordination of teams that we fulfill our promises to clients. Our interior consultants and designers are experts in cost estimation, understanding possibilities and providing acceptable solutions within the budget. With its own most modern production line, we ensure timely delivery of custom-made furniture. In addition, our responsible projects team at each branch location ensures the completion and handover of each interior project within a specific schedule.
        </div>
      </div>
    </section>
  );
}

export function CompanyDiscountButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] font-black text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all transform hover:scale-105 cursor-pointer"
      >
        <Sparkles className="w-4 h-4 text-[#132B3E]" />
        <span>Reach Us to Avail 30% Discount</span>
      </button>
      <DiscountModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export function CompanyConsultationButton({
  label = 'Discuss Your Requirements',
  className,
}: {
  label?: string;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={
          className ||
          'px-7 py-3.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] font-black text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all transform hover:scale-105 cursor-pointer'
        }
      >
        {label}
      </button>
      <ConsultationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
