import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Sparkles,
  Phone,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Palette,
  Layout,
  Maximize2,
} from 'lucide-react';
import { DesignConsultationButton } from '@/components/DesignAndBuildButtons';

export const metadata: Metadata = {
  title: 'Customized Home Interiors in Hyderabad | Anjani Infra',
  description:
    '100% customized modular interiors for living rooms, kitchens, bedrooms, partitions, and dining spaces. Direct factory pricing, German machinery, and 10-year warranty.',
  keywords: [
    'Customized Interiors Hyderabad',
    'Custom Modular Furniture Hyderabad',
    'Personalized Home Interiors Hyderabad',
    'Anjani Infra Customized',
  ],
  alternates: {
    canonical: 'https://www.anjaniinfrap.com/customized-interiors',
  },
};

const categoryTiles = [
  {
    title: 'LIVING',
    titleColor: 'text-white',
    span: 'col-span-12',
    image: '/category-living.jpg',
    height: 'h-64 sm:h-80 md:h-[380px]',
    href: '/products/living-room',
  },
  {
    title: 'BEDROOM',
    titleColor: 'text-white',
    span: 'col-span-12 sm:col-span-5',
    image: '/category-bedroom.jpg',
    height: 'h-72 sm:h-96 md:h-[420px]',
    href: '/products/bedroom',
  },
  {
    title: 'PARTITION',
    titleColor: 'text-white',
    span: 'col-span-12 sm:col-span-3',
    image: '/category-partition.jpg',
    height: 'h-72 sm:h-96 md:h-[420px]',
    href: '/products/decorative-units',
  },
  {
    title: 'DINING',
    titleColor: 'text-white',
    span: 'col-span-12 sm:col-span-4',
    image: '/category-dining.jpg',
    height: 'h-72 sm:h-96 md:h-[420px]',
    href: '/products/dining-room',
  },
  {
    title: 'KITCHEN',
    titleColor: 'text-white',
    span: 'col-span-12 sm:col-span-7',
    image: '/category-kitchen.jpg',
    height: 'h-64 sm:h-80 md:h-[380px]',
    href: '/products/kitchen',
  },
  {
    title: 'KIDS ROOM',
    titleColor: 'text-white',
    span: 'col-span-12 sm:col-span-5',
    image: '/category-kids-room.jpg',
    height: 'h-64 sm:h-80 md:h-[380px]',
    href: '/products/kids-room',
  },
];

const whyCustomizedPoints = [
  'Creating rather than accepting what is available ensures maximum satisfaction of users.',
  'Clients have the opportunity to choose their preferred style, materials and decor.',
  'Interaction between designer and client at each phase till finalization ensures scope for improvement to meet the objectives of customized home interiors.',
  'Clients get to select accessories and fittings and create cabinets accordingly.',
  'Enhance storage capabilities and make the most of difficult spaces.',
  'Enables you to have furniture with a suitable color that blends with your color scheme.',
  'Plan and modify interior works as per budget. Clients get to study the estimate and drawings and alter plans during the design stage as per budget.',
];

export default function CustomizedInteriorsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* ───────────────────────────────────────────────────────────── */}
      {/* 1. HERO BANNER */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[360px] sm:h-[460px] lg:h-[540px] bg-zinc-900 overflow-hidden">
        <img
          src="/customized-interiors-hero.jpg"
          alt="Customized Home Interiors - Anjani Infra Contemporary Apartment Living"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20 flex flex-col items-center justify-center p-4 text-center">
          <span className="text-[#C5A059] text-xs sm:text-sm font-bold tracking-widest uppercase mb-2 drop-shadow">
            100% Tailored to Your Floor Plan
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-wider drop-shadow-2xl">
            CUSTOMIZED HOME INTERIORS
          </h1>
          <p className="text-xs sm:text-base text-gray-200 mt-3 max-w-2xl font-light drop-shadow">
            Transforming every corner of your home with precision German joinery, personalized spatial planning, and direct factory craftsmanship
          </p>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 2. INTRODUCTORY PARAGRAPHS */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-[1100px] mx-auto text-center space-y-6">
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900 uppercase font-sans">
          Tailored Luxury for Modern Indian Living
        </h2>
        <div className="text-sm sm:text-base text-gray-700 leading-relaxed space-y-4 text-justify sm:text-center">
          <p>
            Anjani Infra offers custom made furniture for houses and apartments in Hyderabad, Banjara Hills, Gachibowli, Tellapur, Kompally, and surrounding regions. If you are looking for contemporary interior design, we are here to provide the most suitable solutions.
          </p>
          <p>
            Anjani Infra is capable of delivering the best results through creative designers and our own modern production line. We design and deliver custom made furniture as per the plan and requirements. This includes modular kitchen with accessories, custom wardrobe designs with sliding/hinged shutters, soft-closing drawer units, dining tables, sofa sets, living room display units, bedroom furniture, false ceilings, partition designs, and complete customized home interior solutions.
          </p>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 3. CATEGORY MOSAIC GRID */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="pb-16 sm:pb-24 px-4 sm:px-8 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 gap-4 sm:gap-6">
          {categoryTiles.map((tile, idx) => (
            <Link
              key={idx}
              href={tile.href}
              className={`${tile.span} ${tile.height} relative rounded-xl overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-300 block`}
            >
              <img
                src={tile.image}
                alt={`${tile.title} Customized Interior by Anjani Infra`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 sm:p-8">
                <div className="flex items-center justify-between w-full">
                  <h3 className={`text-2xl sm:text-3xl font-black uppercase tracking-wider ${tile.titleColor}`}>
                    {tile.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#C5A059] group-hover:text-[#132B3E] transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 4. WHY CUSTOMIZED HOME INTERIORS */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 h-[380px] sm:h-[500px] rounded-lg overflow-hidden shadow-xl border border-gray-200 group">
              <img
                src="/customized-home-kitchen.jpg"
                alt="Why Customized Home Interiors - Integrated Open Kitchen and Dining Area"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 font-sans leading-tight">
                Why Customized Home Interiors?
              </h2>

              <ul className="space-y-3.5 text-sm text-gray-700 leading-relaxed">
                {whyCustomizedPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#C5A059] shrink-0 mt-2" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <DesignConsultationButton label="Get 100% Customized Interiors" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 5. GIVE A PERSONALIZED TOUCH TO YOUR DREAM HOME */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#FAF9FA] border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 font-sans leading-tight">
                Give a Personalized Touch to Your Dream Home
              </h2>

              <p className="text-sm text-gray-700 leading-relaxed">
                We bring customization to your fingertips, from the initial consultation through the end process; our team of interior designers will provide you with all the support and advice so you get a personalized touch in your dream home. Over the years, we have worked with 14000+ clients and we provide interior design and furnishing services, which are more than just about styles and finishes. Anjani Infra provides you a fully bespoke service on home interior design to your brief. All our products are custom made from the finest materials. With respect for the past and an eye on the future, our high level of machinery and quality checks help you realize your dream home interiors with fully customized products and quality.
              </p>

              <div>
                <DesignConsultationButton
                  label="Reach Our Expert Designer"
                  className="px-7 py-3.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] font-black text-xs uppercase tracking-wider rounded-lg shadow-md transition-all hover:scale-105 cursor-pointer"
                />
              </div>
            </div>

            <div className="lg:col-span-6 h-[360px] sm:h-[480px] rounded-lg overflow-hidden shadow-xl border border-gray-200 group">
              <img
                src="/personalized-dream-home.jpg"
                alt="Personalized Dream Home Interior with Double-Height Ceiling and Curved Velvet Seating"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 6. PROJECT HANDOVER SECTION */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-7">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 font-sans leading-tight">
                Project Handover
              </h2>

              <ul className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059] shrink-0 mt-2" />
                  <span>
                    We are totally committed to on-time &amp; accurate completion of every project.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059] shrink-0 mt-2" />
                  <span>
                    Our team ensures no debris, noise or disturbance is caused and also guarantees the safety or welfare of the surrounding neighbors.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059] shrink-0 mt-2" />
                  <span>
                    Our team will leave your site only after getting the satisfaction report.
                  </span>
                </li>
              </ul>

              <div>
                <DesignConsultationButton
                  label="Deal Directly with the Company"
                  className="px-7 py-3.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] font-black text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all hover:scale-105 cursor-pointer"
                />
              </div>
            </div>

            <div className="lg:col-span-6 h-[380px] sm:h-[480px] rounded-lg overflow-hidden shadow-xl border border-gray-200 group">
              <img
                src="/project-handover-interior.jpg"
                alt="Project Handover - Anjani Infra Lead Presenting Keys to Homeowners in Completed Luxury Interior"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
