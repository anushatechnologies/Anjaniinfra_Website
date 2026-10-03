'use client';

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { QuickQuoteModal } from './QuickQuoteModal';

interface ServicesQuoteButtonProps {
  label?: string;
  className?: string;
}

export function ServicesQuoteButton({
  label = 'Request EPC Proposal',
  className = 'inline-flex items-center gap-2 px-6 py-3 bg-[#C5A059] hover:bg-[#b08e4d] text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg transition shadow-lg'
}: ServicesQuoteButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={className}>
        <span>{label}</span>
        <ArrowRight className="w-4 h-4" />
      </button>

      <QuickQuoteModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
