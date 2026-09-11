'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Users,
  Award,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Building2,
  Phone,
  ArrowRight,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { FloatingActions } from '@/components/FloatingActions';
import { InteriorEstimateModal } from '@/components/InteriorEstimateModal';
import { ConsultationModal } from '@/components/ConsultationModal';
import { DiscountModal } from '@/components/DiscountModal';

const processSteps = [
  {
    id: 'consultation',
    name: 'Consultation',
    description:
      'Our expert interior consultants meet with you to understand your lifestyle, floor plan, functional needs, and budget to structure the optimal interior project roadmap.',
  },
  {
    id: 'design',
    name: 'Interior Design',
    description:
      'Designers play the most important role of understanding the requirements and putting them into a practical plan. Each branch has expert full time designers who make use of their experience in providing most suitable products in complete co-operation with clients.',
  },
  {
    id: 'production',
    name: 'Production',
    description:
      'All woodwork and modular cabinetry are crafted in our own 350,000 sq. ft automated factory using state-of-the-art German machinery, ensuring micrometric precision and flawless finishes.',
  },
  {
    id: 'execution',
    name: 'Execution',
    description:
      'Installation team starts execution at site immediately after delivery of materials, under the continuous supervision of experienced project engineers to guarantee clean, on-time fitment within 40 working days.',
  },
  {
    id: 'service',
    name: 'After Sales Service',
    description:
      'We stand firmly behind our craftsmanship with an industry-leading 10-year comprehensive warranty and dedicated lifelong customer service support.',
  },
];

export default function CompanyPage() {
  const [activeStep, setActiveStep] = useState<string>('execution');
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isDiscountModalOpen, setIsDiscountModalOpen] = useState(false);

  const selectedStepData =
    processSteps.find((s) => s.id === activeStep) || processSteps[3];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      
      {/* Floating Action Controls */}
      <FloatingActions
        onOpenEstimate={() => setIsEstimateOpen(true)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      <InteriorEstimateModal
        isOpen={isEstimateOpen}
        onClose={() => setIsEstimateOpen(false)}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      <DiscountModal
        isOpen={isDiscountModalOpen}
        onClose={() => setIsDiscountModalOpen(false)}
      />

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 1. HERO BANNER: TEAM OF 1600+ EMPLOYEES */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[380px] sm:h-[480px] lg:h-[580px] bg-zinc-900 overflow-hidden">
        <img
          src="/anjani-company-team.jpg"
          alt="Anjani Infra Team of 1600+ Architects & Interior Designers in Hyderabad"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 flex flex-col items-center justify-center p-4 text-center">
          <span className="text-[#C5A059] text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 drop-shadow">
            Architects • Interior Designers • Project Engineers
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white uppercase tracking-wider drop-shadow-2xl text-center">
            TEAM OF 1600+ EMPLOYEES
          </h1>
          <p className="text-xs sm:text-base text-gray-200 mt-3 max-w-2xl font-light drop-shadow">
            A passionate in-house workforce dedicated to crafting flawless custom home interiors across Hyderabad
          </p>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 2. WELCOME TO D'LIFE INTERIORS */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-[1100px] mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900 uppercase font-sans mb-2">
          WELCOME TO <span className="text-[#132B3E]">ANJANI INFRA</span>
        </h2>
        
        <p className="text-lg sm:text-xl font-bold text-[#C5A059] mb-8 tracking-wide">
          #DreamBuildGrow
        </p>

        <div className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify sm:text-center space-y-4">
          <p>
            Anjani Infra Projects is Hyderabad&apos;s premier Design &amp; Build EPC enterprise and luxury interior design firm specializing in 100% customized modular furniture, high-end living spaces, and commercial fitouts.
          </p>
          <p>
            Here, the direct-to-consumer model avoids all intermediaries, delivering maximum value with zero compromise on precision engineering. Durability of materials, stringent ISO-certified procedures, and a passionate team of architects and project engineers ensure seamless execution from blueprint to handover.
          </p>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 3. BEST INTERIOR DESIGN COMPANY IN INDIA */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#FAF9FA] border-t border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Image (6 cols) */}
            <div className="lg:col-span-6 h-[340px] sm:h-[440px] rounded-lg overflow-hidden shadow-xl border border-gray-200 group">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
                alt="Dining Room and Kitchen Interior with Wall Clock and Modern Lighting"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Right Text (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 uppercase font-sans leading-tight">
                Best Interior Design Company in Hyderabad
              </h2>

              <div className="text-sm text-gray-700 leading-relaxed space-y-4">
                <p>
                  Anjani Infra delivers customized luxury interiors and turnkey EPC fitouts across{' '}
                  <span className="text-[#2B5573] hover:text-[#C5A059] font-semibold underline cursor-pointer">Hyderabad</span>,{' '}
                  <span className="text-[#2B5573] hover:text-[#C5A059] font-semibold underline cursor-pointer">Banjara Hills</span>,{' '}
                  <span className="text-[#2B5573] hover:text-[#C5A059] font-semibold underline cursor-pointer">Gachibowli</span>,{' '}
                  <span className="text-[#2B5573] hover:text-[#C5A059] font-semibold underline cursor-pointer">Hitec City</span>,{' '}
                  <span className="text-[#2B5573] hover:text-[#C5A059] font-semibold underline cursor-pointer">Narsingi</span>,{' '}
                  <span className="text-[#2B5573] hover:text-[#C5A059] font-semibold underline cursor-pointer">Kompally</span>,{' '}
                  <span className="text-[#2B5573] hover:text-[#C5A059] font-semibold underline cursor-pointer">Bangalore</span> &amp;{' '}
                  <span className="text-[#2B5573] hover:text-[#C5A059] font-semibold underline cursor-pointer">Pune</span>.
                </p>
                <p>
                  With state-of-the-art factories, specialized project managers, and dedicated teams, we deliver 100% customized interiors tailored to each client&apos;s unique lifestyle.
                </p>
              </div>

              <div>
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="px-7 py-3.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] font-black text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all transform hover:scale-105 cursor-pointer"
                >
                  Discuss Your Requirements
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 4. JUST ONE COMPANY FOR INTERIOR DESIGN, PRODUCTION & IMPLEMENTATION */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 text-center">
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 font-sans mb-14">
            Just One Company for <br className="sm:hidden" />
            Interior Design, Production &amp; Implementation
          </h2>

          {/* Connected Process Diagram with 5 Circles */}
          <div className="relative max-w-4xl mx-auto mb-12">
            
            {/* Horizontal Line Connector */}
            <div className="hidden sm:block absolute top-1/2 left-10 right-10 h-[2px] bg-gray-200 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-4 relative z-10">
              {processSteps.map((step) => {
                const isActive = activeStep === step.id;
                return (
                  <div
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className="flex flex-col items-center cursor-pointer group"
                  >
                    <div
                      className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center p-3 text-center transition-all duration-300 shadow-md ${
                        isActive
                          ? 'bg-[#132B3E] text-white scale-105 ring-4 ring-[#C5A059]/40 shadow-xl border-2 border-[#C5A059]'
                          : 'bg-white text-gray-800 border-2 border-gray-200 hover:border-[#C5A059] hover:scale-102'
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-bold leading-tight">
                        {step.name}
                      </span>
                    </div>

                    {/* Downward indicator arrow for active step */}
                    {isActive && (
                      <div className="mt-3 text-[#C5A059] text-lg font-bold animate-bounce">
                        ↓
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* Active Step Description Card (Matching Screenshot 4 & 5) */}
          <div className="max-w-3xl mx-auto bg-gray-50 border border-[#C5A059]/30 rounded-2xl p-6 sm:p-10 shadow-sm text-center mb-12 animate-fade-in">
            <h3 className="text-lg sm:text-xl font-bold text-[#132B3E] mb-3">
              {selectedStepData.name}
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {selectedStepData.description}
            </p>
          </div>

          {/* Summary Narrative at the bottom of the section */}
          <div className="max-w-4xl mx-auto text-sm text-gray-600 leading-relaxed text-justify sm:text-center pt-4 border-t border-gray-100">
            It is not only by adopting proper systems but also with effective coordination of teams that we fulfill our promises to clients. Our interior consultants and designers are experts in cost estimation, understanding possibilities and providing acceptable solutions within the budget. With its own most modern production line, we ensure timely delivery of custom-made furniture. In addition, our responsible projects team at each branch location ensures the completion and handover of each interior project within a specific schedule.
          </div>

        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 5. LARGE, FULLY EQUIPPED MODULAR FURNITURE FACTORIES */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#FAF9FA] border-t border-gray-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900 font-sans">
            Large, Fully Equipped Modular Furniture Factories
          </h2>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify sm:text-center">
            Our factory is well equipped with state-of-the-art German machinery and periodical improvements to meet modern furnishing trends. Anjani Infra has 350,000 square feet factory space to process and assemble{' '}
            <span className="text-[#2B5573] hover:text-[#C5A059] underline font-semibold cursor-pointer">modular kitchen</span>{' '}
            and other furniture as per the design. Systematic manufacturing and assembling procedures ensure the best output to match the drawings. Similarly, factory managers schedule the works as per the date of execution and site status. Managers, supervisors, and technicians, in each process, strive to give the best result in complete co-operation.
          </p>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 6. BUY DIRECT FROM FACTORY (PRICE COMPARISON CHART) */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-t border-gray-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Box: BUY DIRECT FROM FACTORY (5 cols) */}
            <div className="md:col-span-5 bg-white border border-[#C5A059]/40 p-8 sm:p-10 rounded-2xl shadow-sm text-center flex flex-col items-center justify-center space-y-2">
              <span className="text-xl sm:text-2xl font-black text-gray-900 tracking-wider">
                BUY DIRECT <span className="font-normal text-gray-700">FROM</span>
              </span>
              <span className="text-3xl sm:text-4xl font-black text-[#132B3E] tracking-tight">
                ANJANI INFRA
              </span>
              <span className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                FACTORY
              </span>
              
              <div className="my-3 bg-[#132B3E] border-2 border-[#C5A059] text-[#C5A059] px-6 py-2.5 rounded-lg w-full max-w-[240px]">
                <span className="text-2xl sm:text-3xl font-black tracking-tight">
                  GET 30%
                </span>
              </div>

              <span className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                LESS THAN
              </span>
              <span className="text-lg sm:text-xl font-bold text-gray-700 tracking-wider">
                RETAIL OUTLETS
              </span>
            </div>

            {/* Right: Bar Chart Comparison (7 cols) */}
            <div className="md:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-end justify-center gap-10 sm:gap-16 h-[260px] pb-6 pt-4 border-b border-l border-gray-300 relative pl-10">
                
                {/* Y-Axis Label & Numbers */}
                <div className="absolute left-2 top-0 bottom-6 flex flex-col justify-between text-xs text-gray-500 font-semibold items-center">
                  <span>5</span>
                  <span>4</span>
                  <span>3</span>
                  <span>2</span>
                  <span>1</span>
                </div>
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                  PRICE &uarr;
                </div>

                {/* Bar 1: Imported / Retail Products (Height 5/5) */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 sm:w-24 h-[200px] bg-[#333333] rounded-t-sm shadow-md transition-all hover:opacity-90 relative group">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
                      100%
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-700 text-center max-w-[130px] leading-tight">
                    Imported or Ready Made Products
                  </span>
                </div>

                {/* Bar 2: Anjani Direct Custom Made (Height 3.5/5 -> 30% lower!) */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 sm:w-24 h-[140px] bg-[#C5A059] rounded-t-sm shadow-md transition-all hover:bg-[#b59049] relative group">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-[#132B3E] opacity-0 group-hover:opacity-100 transition-opacity">
                      -30%
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#132B3E] text-center max-w-[130px] leading-tight">
                    Anjani Infra Custom-Made Products
                  </span>
                </div>

              </div>
            </div>

          </div>

          {/* CTA Button Below Chart */}
          <div className="text-center mt-10">
            <button
              onClick={() => setIsDiscountModalOpen(true)}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] font-black text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all transform hover:scale-105 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#132B3E]" />
              <span>Reach Us to Avail 30% Discount</span>
            </button>
          </div>

        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 7. EASILY ACCESSIBLE BRANCH LOCATIONS */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#FAF9FA] border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 font-sans leading-tight">
                Easily Accessible Branch Locations
              </h2>

              <p className="text-sm text-gray-700 leading-relaxed">
                At Anjani Infra, we take pride in our commitment to providing exceptional service to our clients. With experience centres strategically located across Hyderabad and major hubs, we ensure that our services are easily accessible to customers. We understand the importance of accessibility in delivering a seamless customer experience, and our extensive experience centres enable us to efficiently serve clients across the region. You can trust us to transform your spaces into stunning, personalised interiors that reflect your unique style and vision.
              </p>

              <div>
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="px-7 py-3 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] font-black text-xs uppercase tracking-wider rounded-lg shadow-md transition-all transform hover:scale-105 cursor-pointer"
                >
                  View Our Branch Locations
                </button>
              </div>
            </div>

            {/* Right Image (6 cols) */}
            <div className="lg:col-span-6 h-[320px] sm:h-[420px] rounded-xl overflow-hidden shadow-xl border border-gray-200 group">
              <img
                src="/anjani-branch-showroom.jpg"
                alt="Anjani Infra Luxury Home Interior Experience Centre & Showroom in Hyderabad"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

          </div>

        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 8. CUSTOMER SUPPORT & AFTER SALES SERVICE */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900 font-sans">
            Customer Support &amp; After Sales Service
          </h2>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify sm:text-center max-w-4xl mx-auto">
            We understand and ensure durable furniture for each client and maintain a long term relationship. Being the top interior designers and contractors, we are committed to provide exceptional service to our clients. Our products come with a 10-year warranty. In addition, our dedicated customer care team provides reliable, consistent customer care service making it easy for clients to contact us in case of any questions, comments, or concerns. It is with professionalism and teamwork that we are able to provide the best quality interiors, furnishing, and after-sales service. Our attitude in customer service helps us maintain the reputation of the most reliable home interior design company in India.
          </p>

          <div className="pt-4">
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="px-8 py-3.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] font-black text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all transform hover:scale-105 cursor-pointer"
            >
              Meet Our Design Consultant
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
