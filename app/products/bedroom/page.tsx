import React from 'react';
import type { Metadata } from 'next';
import BedroomProductClient from '@/components/products/BedroomProductClient';

export const metadata: Metadata = {
  title: 'Master Bedroom Interiors & Custom Wardrobes Hyderabad | Anjani Infra',
  description:
    'Luxury master bedroom suites, sliding wardrobes, guest bedrooms, and dressing consoles custom designed and manufactured for Hyderabad homes. 10-year warranty.',
  keywords: [
    'Master Bedroom Interior Hyderabad',
    'Custom Wardrobes Hyderabad',
    'Sliding Wardrobes Hyderabad',
    'Bedroom Furniture Hyderabad',
  ],
  alternates: {
    canonical: 'https://www.anjaniinfrap.com/products/bedroom',
  },
};

export default function BedroomPage() {
  return <BedroomProductClient />;
}