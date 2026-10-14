import React from 'react';
import type { Metadata } from 'next';
import { ContactHeroBanner } from '@/components/ContactHeroBanner';

export const metadata: Metadata = {
  title: 'Contact Us | Anjani Infra Projects | Jayabheri The Summit Hyderabad',
  description:
    'Contact Anjani Infra Projects. Corporate HQ at Block-C, Jayabheri The Summit, Nanakramguda Service Road, Narsingi, Hyderabad. Call +91 98480 88998 or email anjaniinfra4@gmail.com.',
  keywords: [
    'Anjani Infra Projects',
    'Anjani Infra Narsingi',
    'Jayabheri The Summit Narsingi',
    'Anjani Infra Contact',
    'Interior Showroom Hyderabad',
    'Design and Build Hyderabad Contact',
  ],
  alternates: {
    canonical: 'https://www.anjaniinfrap.com/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* ──────────────── Hero Banner ──────────────── */}
      <ContactHeroBanner />
    </main>
  );
}
