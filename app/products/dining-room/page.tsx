import React from 'react';
import type { Metadata } from 'next';
import DiningRoomProductClient from '@/components/products/DiningRoomProductClient';

export const metadata: Metadata = {
  title: 'Custom Dining Room Interiors & Crockery Units Hyderabad | Anjani Infra',
  description:
    'Customized 6-seater and 8-seater dining tables, glass crockery display cabinets, bar counters, and prayer mandir integrations for Hyderabad residences.',
  keywords: [
    'Dining Room Interior Hyderabad',
    'Crockery Unit Design Hyderabad',
    'Dining Table Hyderabad',
    'Bar Counter Interior Hyderabad',
  ],
  alternates: {
    canonical: 'https://www.anjaniinfrap.com/products/dining-room',
  },
};

export default function DiningRoomPage() {
  return <DiningRoomProductClient />;
}