import React from 'react';
import type { Metadata } from 'next';
import KidsRoomProductClient from '@/components/products/KidsRoomProductClient';

export const metadata: Metadata = {
  title: 'Custom Kids Bedroom Interiors, Bunk Beds & Study Units Hyderabad | Anjani Infra',
  description:
    'Creative, ergonomic, and safe kids bedroom furniture, bunk beds, study tables, and colorful wardrobes custom-built in our automated factory in Hyderabad.',
  keywords: [
    'Kids Bedroom Interior Hyderabad',
    'Kids Study Table Hyderabad',
    'Custom Bunk Bed Hyderabad',
    'Children Room Furniture Hyderabad',
  ],
  alternates: {
    canonical: 'https://www.anjaniinfrap.com/products/kids-room',
  },
};

export default function KidsRoomPage() {
  return <KidsRoomProductClient />;
}