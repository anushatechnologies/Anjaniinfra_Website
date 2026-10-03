import React from 'react';
import type { Metadata } from 'next';
import LivingRoomProductClient from '@/components/products/LivingRoomProductClient';

export const metadata: Metadata = {
  title: 'Luxury Living Room Interiors & TV Media Units Hyderabad | Anjani Infra',
  description:
    'Transform your living space with bespoke TV entertainment units, sofa suites, foyer paneling, and Italian marble accents. 35-40 day delivery in Hyderabad.',
  keywords: [
    'Living Room Interior Hyderabad',
    'TV Unit Design Hyderabad',
    'Foyer Paneling Hyderabad',
    'Modern Living Room Hyderabad',
  ],
  alternates: {
    canonical: 'https://www.anjaniinfrap.com/products/living-room',
  },
};

export default function LivingRoomPage() {
  return <LivingRoomProductClient />;
}