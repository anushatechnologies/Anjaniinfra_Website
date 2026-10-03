'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface TestimonialItem {
  name: string;
  location: string;
  text: string;
  image: string;
}

interface TestimonialsClientSectionProps {
  pages: TestimonialItem[][];
}

export function TestimonialsClientSection({ pages }: TestimonialsClientSectionProps) {
  const [activePage, setActivePage] = useState(0);

  if (!pages || pages.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 bg-[#FAF9FA] border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 text-center">
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900 uppercase font-sans mb-14">
          <span className="text-[#C5A059]">14000+</span> SATISFIED CUSTOMERS
        </h2>

        {/* Testimonial Cards Row */}
        <div className="relative overflow-hidden min-h-[300px]">
          <div
            key={activePage}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-start transition-all duration-500 ease-in-out animate-fade-in"
          >
            {pages[activePage].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="relative mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="w-8 h-8 rounded-full bg-[#132B3E] text-[#C5A059] flex items-center justify-center font-serif text-sm absolute bottom-0 right-1 shadow-md border border-[#C5A059]/40">
                    &ldquo;
                  </div>
                </div>
                <h4 className="font-bold text-sm sm:text-base text-[#2B5573]">{item.name}</h4>
                <p className="text-[11px] text-[#C5A059] font-semibold mt-0.5">{item.location}</p>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed max-w-[200px]">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <button
            onClick={() => setActivePage(prev => (prev === 0 ? pages.length - 1 : prev - 1))}
            className="w-8 h-8 rounded-full bg-white hover:bg-[#132B3E] hover:text-white border border-gray-300 flex items-center justify-center text-gray-600 transition-all shadow-sm cursor-pointer"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {pages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActivePage(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activePage === index ? 'w-7 h-2.5 bg-[#C5A059] shadow-sm' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setActivePage(prev => (prev + 1) % pages.length)}
            className="w-8 h-8 rounded-full bg-white hover:bg-[#132B3E] hover:text-white border border-gray-300 flex items-center justify-center text-gray-600 transition-all shadow-sm cursor-pointer"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
