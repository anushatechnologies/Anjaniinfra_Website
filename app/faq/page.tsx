import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { FaqAccordion, FAQItem } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ) | Home Interiors Hyderabad | Anjani Infra',
  description:
    'Got questions about home interior design in Hyderabad? Find answers on 40-day delivery, 10-year warranty, pricing per sq.ft, factory manufacturing, and site execution.',
  keywords: [
    'Interior Design FAQs Hyderabad',
    'Home Interior Cost Hyderabad',
    'Interior Warranty Hyderabad',
    'Anjani Infra Questions',
  ],
  alternates: {
    canonical: 'https://www.anjaniinfrap.com/faq',
  },
};

const faqList: FAQItem[] = [
  {
    id: 1,
    question:
      'I have a new 3-bedroom House/Apartment. Can Anjani Infra do the complete home interiors for me?',
    answer:
      'Yes. We do complete home interior works which includes modular kitchens, living-dining areas, decorative partition units, designer false ceilings, and bedrooms with customized wardrobes for luxury houses and apartments across Hyderabad.',
  },
  {
    id: 2,
    question:
      'This is my first time working with an interior designer. How do we get started?',
    answer:
      'Getting started is seamless and complimentary. You can connect with our team via WhatsApp, phone, or visit our Hyderabad Experience Showroom with your floor plan. Our senior interior architect will understand your requirements, explain design concepts, show live material samples, and provide an initial 3D concept layout with transparent estimate.',
  },
  {
    id: 3,
    question:
      'If I hire an interior designer, how do I go about implementing the project?',
    answer:
      'Once the 3D drawings and itemized BOQ are approved by you, our automated factory begins precision manufacturing. Our dedicated site engineers and execution team handle everything turnkey—civil adjustments, electrical, plumbing, modular fitment, false ceilings, and painting—ensuring a completely hassle-free handover.',
  },
  {
    id: 4,
    question:
      'How long will it take for your interior design company to complete the project?',
    answer:
      'We guarantee completion and handover within 35 to 40 working days from the date of final 3D design sign-off and site handover, backed by our strict on-time delivery commitment.',
  },
  {
    id: 5,
    question:
      'Do you undertake commercial as well as residential interior projects?',
    answer:
      'Yes. In addition to luxury residential villas and apartments, Anjani Infra undertakes turnkey commercial projects, corporate office fitouts, executive boardrooms, retail showrooms, and hospitality interiors across Telangana.',
  },
  {
    id: 6,
    question: 'How much will a complete home interior project cost?',
    answer:
      'The investment depends on your floor plan size (2BHK, 3BHK, 4BHK, Villa) and choice of materials and finishes. Our transparent packages start from ₹6.37 Lac* for 2BHK and ₹7.95 Lac* for 3BHK up to ultra-luxury bespoke finishes with zero hidden costs.',
  },
  {
    id: 7,
    question: 'Why should someone go for customized interior design?',
    answer:
      'Customized interior design maximizes your space utilization, aligns ergonomics to your family\'s daily lifestyle, offers superior German hardware durability, and reflects your personal aesthetic rather than standard off-the-shelf mass furniture.',
  },
  {
    id: 8,
    question: 'Where do you get your furniture and fixtures from?',
    answer:
      'All modular cabinetry, wardrobes, and woodwork are precision-crafted in our own state-of-the-art automated manufacturing factory using imported German CNC machinery and certified boiling-water-proof (BWP/BWR) calibrated ply, paired with top-tier hardware from Hettich, Hafele, and Blum.',
  },
  {
    id: 9,
    question: 'Where do you offer Home Interior design?',
    answer:
      'We offer comprehensive interior design services across Hyderabad and Telangana—including Jubilee Hills, Banjara Hills, Gachibowli, Hitec City, Kokapet, Narsingi, Financial District, Tellapur, Kompally, and LB Nagar.',
  },
  {
    id: 10,
    question:
      'How much of my personal time would I need to invest in an interior design project?',
    answer:
      'Very little. After 2 to 3 collaborative design sessions to finalize your 3D renders and material palette, our turnkey project managers handle all daily coordination, factory production, site work, and quality audits, keeping you updated via weekly digital progress reports.',
  },
  {
    id: 11,
    question:
      'Do you provide after-sales support? How many years of warranty do you provide?',
    answer:
      'Yes, absolutely. Anjani Infra provides an industry-leading comprehensive 10-year warranty on modular woodwork along with lifelong service support and prompt customer care.',
  },
  {
    id: 12,
    question: 'Can you start my home interior design project immediately?',
    answer:
      'Yes. Once you connect with our team and share your floor plan, our designers can commence your 2D layout and 3D design phase immediately, even while your apartment or villa is under civil construction.',
  },
  {
    id: 13,
    question:
      'Can I meet an interior designer at the Anjani Infra experience center?',
    answer:
      'Yes, you are warmly invited to visit our premium Experience Showrooms in Jubilee Hills and Narsingi, Hyderabad. You can touch and feel actual modular kitchens, walk-in wardrobes, hardware finishes, and consult directly with our senior designers.',
  },
  {
    id: 14,
    question:
      'How Do I Make Sure that My Home Interior Project Will be Completed as Required?',
    answer:
      'Every Anjani Infra project is governed by an itemized Bill of Quantities (BOQ), approved 3D photorealistic renders, a structured milestone-based agreement, and stringent 75-point quality check audits at every milestone prior to handover.',
  },
];

export default function FAQPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqList.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ──────────────── 1. Hero Banner ──────────────── */}
      <section className="relative h-[360px] sm:h-[440px] md:h-[500px] w-full overflow-hidden bg-gray-900">
        <Image
          src="/faq-bedroom-hero.jpg"
          alt="Frequently Asked Questions - Anjani Infra Home Interiors"
          fill
          priority
          className="object-cover object-center brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="max-w-2xl space-y-2 sm:space-y-3 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white tracking-tight leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-serif text-[#DFBA73] font-normal tracking-wide">
              We are always glad to answer
            </p>
            <div className="pt-2 flex items-center gap-3">
              <span className="w-12 h-1 bg-[#C5A059] rounded-full" />
              <p className="text-xs sm:text-sm text-gray-200">
                Everything you need to know about designing your dream home in Hyderabad
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 2. FAQ Accordion Section ──────────────── */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-black font-serif text-[#132B3E] tracking-tight">
              FAQ&apos;s
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Click any question below to expand detailed information about our process, pricing, and warranties.
            </p>
          </div>

          <FaqAccordion faqList={faqList} />
        </div>
      </section>
    </div>
  );
}
