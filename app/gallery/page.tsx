import React from 'react';
import type { Metadata } from 'next';
import { GalleryClientView } from '@/components/GalleryClientView';

export const metadata: Metadata = {
  title: 'Interior Design Gallery & Project Handover Photos | Anjani Infra Hyderabad',
  description:
    'Explore 100+ actual photographs and cinematic video walkthroughs of luxury modular kitchens, master bedrooms, living rooms, and turnkey project handovers across Hyderabad.',
  keywords: [
    'Interior Design Gallery Hyderabad',
    'Living Room Interior Photos Hyderabad',
    'Modular Kitchen Photos Hyderabad',
    'Villa Interior Video Tour Hyderabad',
    'Anjani Infra Portfolio',
  ],
  alternates: {
    canonical: 'https://www.anjaniinfrap.com/gallery',
  },
};

export default function GalleryPage() {
  return <GalleryClientView />;
}