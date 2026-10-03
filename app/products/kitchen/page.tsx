import React from 'react';
import type { Metadata } from 'next';
import KitchenProductClient from '@/components/products/KitchenProductClient';

export const metadata: Metadata = {
  title: 'Custom Modular Kitchens in Hyderabad | Island, L-Shape, Parallel | Anjani Infra',
  description:
    'Explore 100% customized modular kitchen designs by Anjani Infra in Hyderabad. Premium Island, L-Shape, U-Shape, and Parallel layouts with German Blum/Hettich fittings and 10-year warranty.',
  keywords: [
    'Modular Kitchen Hyderabad',
    'Island Kitchen Designs Hyderabad',
    'L Shaped Modular Kitchen Hyderabad',
    'Parallel Kitchen Hyderabad',
    'Acrylic Modular Kitchen Hyderabad',
  ],
  alternates: {
    canonical: 'https://www.anjaniinfrap.com/products/kitchen',
  },
};

export default function KitchenPage() {
  return <KitchenProductClient />;
}