'use client';

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export interface ProcessStep {
  id: string;
  name: string;
  description: string;
}

interface CompanyProcessTabsProps {
  steps: ProcessStep[];
}

export function CompanyProcessTabs({ steps }: CompanyProcessTabsProps) {
  const [activeStep, setActiveStep] = useState<string>('execution');
  const selectedStepData = steps.find(s => s.id === activeStep) || steps[3];

  return (
    <div className="space-y-8">
      {/* 5 Process Arrow Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
        {steps.map((step) => {
          const isActive = activeStep === step.id;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 shadow-sm cursor-pointer ${
                isActive
                  ? 'bg-[#132B3E] text-white ring-2 ring-[#C5A059]'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              <span>{step.name}</span>
              <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-[#C5A059]' : 'text-gray-400'}`} />
            </button>
          );
        })}
      </div>

      {/* Selected Step Description Box */}
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm text-center">
        <h3 className="text-lg sm:text-xl font-bold text-[#132B3E] mb-3">
          {selectedStepData.name}
        </h3>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          {selectedStepData.description}
        </p>
      </div>
    </div>
  );
}
