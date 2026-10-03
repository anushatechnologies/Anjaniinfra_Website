'use client';

import React, { useState } from 'react';
import { HeroCarousel, HeroSlide } from './HeroCarousel';
import { InteriorEstimateModal } from './InteriorEstimateModal';
import { ConsultationModal } from './ConsultationModal';
import { FloatingActions } from './FloatingActions';

interface HomeInteractiveHubProps {
  slides: HeroSlide[];
}

export function HomeInteractiveHub({ slides }: HomeInteractiveHubProps) {
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <>
      <FloatingActions
        onOpenEstimate={() => setIsEstimateOpen(true)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      <InteriorEstimateModal
        isOpen={isEstimateOpen}
        onClose={() => setIsEstimateOpen(false)}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      <HeroCarousel
        slides={slides}
        onOpenEstimate={() => setIsEstimateOpen(true)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />
    </>
  );
}
