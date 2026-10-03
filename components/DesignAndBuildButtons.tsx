'use client';

import React, { useState } from 'react';
import { ConsultationModal } from './ConsultationModal';
import { InteriorEstimateModal } from './InteriorEstimateModal';

export function DesignConsultationButton({
  label,
  className,
}: {
  label: string;
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
          'px-7 py-3.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] font-black text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all hover:scale-105 cursor-pointer'
        }
      >
        {label}
      </button>
      <ConsultationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export function DesignEstimateButton({
  label,
  className,
}: {
  label: string;
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
          'px-7 py-3.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] font-black text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all hover:scale-105 cursor-pointer'
        }
      >
        {label}
      </button>
      <InteriorEstimateModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
