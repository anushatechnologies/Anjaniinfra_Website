import React from 'react';
import type { Metadata } from 'next';
import DecorativeUnitsProductClient from '@/components/products/DecorativeUnitsProductClient';

export const metadata: Metadata = {
  title: 'Decorative Partitions, Mandir Pooja Units & Foyer Consoles | Anjani Infra',
  description:
    'Artistic CNC partitions, fluted wooden room dividers, sacred teakwood pooja mandir units, and designer foyer storage custom manufactured across Hyderabad.',
  keywords: [
    'Decorative Partition Units Hyderabad',
    'Pooja Mandir Interior Hyderabad',
    'Room Divider Wood Hyderabad',
    'Foyer Shoe Cabinet Hyderabad',
  ],
  alternates: {
    canonical: 'https://www.anjaniinfrap.com/products/decorative-units',
  },
};

export default function DecorativeUnitsPage() {
  return <DecorativeUnitsProductClient />;
}