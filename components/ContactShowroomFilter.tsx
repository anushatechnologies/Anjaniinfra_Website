'use client';

import React, { useState } from 'react';
import { Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import { InteriorEstimateModal } from './InteriorEstimateModal';

export interface Showroom {
  id: string;
  area: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  mapUrl: string;
}

interface ContactShowroomFilterProps {
  showrooms: Showroom[];
}

export function ContactShowroomFilter({ showrooms }: ContactShowroomFilterProps) {
  const [selectedArea, setSelectedArea] = useState<string>('ALL');
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);

  const areas = Array.from(new Set(showrooms.map((s) => s.area)));

  const filteredShowrooms =
    selectedArea === 'ALL'
      ? showrooms
      : showrooms.filter((s) => s.area === selectedArea);

  return (
    <>
      <InteriorEstimateModal
        isOpen={isEstimateOpen}
        onClose={() => setIsEstimateOpen(false)}
      />

      {/* State / City Tab Bar */}
      <div className="mt-12 mb-10 border-b border-gray-200">
        <div className="flex items-center justify-center gap-2 sm:gap-6 overflow-x-auto no-scrollbar pb-3">
          <button
            type="button"
            onClick={() => setSelectedArea('ALL')}
            className={`px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-widest transition-all relative ${
              selectedArea === 'ALL'
                ? 'text-[#132B3E] font-bold'
                : 'text-gray-400 hover:text-gray-700'
            }`}
          >
            TELANGANA (ALL HYDERABAD)
            {selectedArea === 'ALL' && (
              <div className="absolute bottom-[-13px] left-0 right-0 h-[3px] bg-[#C5A059]" />
            )}
          </button>

          {areas.map((area) => (
            <button
              type="button"
              key={area}
              onClick={() => setSelectedArea(area)}
              className={`px-3 py-2 text-xs sm:text-sm font-bold uppercase tracking-widest transition-all relative whitespace-nowrap ${
                selectedArea === area
                  ? 'text-[#132B3E] font-bold'
                  : 'text-gray-400 hover:text-gray-700'
              }`}
            >
              {area}
              {selectedArea === area && (
                <div className="absolute bottom-[-13px] left-0 right-0 h-[3px] bg-[#C5A059]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Showrooms Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredShowrooms.map((showroom) => (
          <div
            key={showroom.id}
            className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight group-hover:text-[#2B5573] transition-colors">
                {showroom.name}
              </h3>

              <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed min-h-[64px]">
                {showroom.address}
              </p>

              <div className="pt-2 space-y-2 text-xs text-gray-600 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <a
                    href={`tel:${showroom.phone.replace(/\s+/g, '')}`}
                    className="font-semibold text-gray-800 hover:text-[#C5A059]"
                  >
                    {showroom.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <a
                    href={`mailto:${showroom.email}`}
                    className="truncate hover:text-[#C5A059] transition-colors"
                  >
                    {showroom.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  <span>{showroom.hours}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
              <a
                href={showroom.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-[#2B5573] hover:underline flex items-center gap-0.5 uppercase tracking-wider"
              >
                <span>Directions</span>
                <ChevronRight className="w-3 h-3" />
              </a>

              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/919848088998?text=${encodeURIComponent(
                    `Hi Anjani Infra, I would like to visit your ${showroom.name} experience centre.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-[11px] font-bold uppercase tracking-wider rounded transition-colors"
                >
                  WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => setIsEstimateOpen(true)}
                  className="px-3 py-1.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] text-[11px] font-black uppercase tracking-wider rounded transition-all shadow cursor-pointer"
                >
                  Book Visit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export function ContactEstimateButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-block px-8 sm:px-12 py-3.5 sm:py-4 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] text-xs sm:text-sm font-black uppercase tracking-wider rounded-md transition-all shadow-lg hover:scale-105 cursor-pointer"
      >
        Start Planning Your Home Interiors Now
      </button>
      <InteriorEstimateModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
