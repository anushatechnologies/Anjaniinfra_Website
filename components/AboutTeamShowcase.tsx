'use client';

import React from 'react';
import { Award, Briefcase, Sparkles, Users } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  designation: string;
  specialty: string;
  experience: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 'founder',
    name: 'Ar. K. Anjani Kumar',
    designation: 'Founder & Principal Architect',
    specialty: 'Master Planning & Architectural Vision',
    experience: '15+ Yrs',
    image: '/team/founder-anjani.jpg'
  },
  {
    id: 'interior-head',
    name: 'Ar. Sowmya Reddy',
    designation: 'Head of Interior Architecture',
    specialty: 'Luxury Residential & Villa Styling',
    experience: '12+ Yrs',
    image: '/team/head-interior-sowmya.jpg'
  },
  {
    id: 'project-director',
    name: 'Rajesh Varma',
    designation: 'Senior Project Director',
    specialty: 'Turnkey Execution & Site Handover',
    experience: '14+ Yrs',
    image: '/team/director-rajesh.jpg'
  },
  {
    id: 'factory-head',
    name: 'Vikram Sharma',
    designation: 'Head of Joinery & Engineering',
    specialty: 'Automated Factory & German Joinery',
    experience: '10+ Yrs',
    image: '/team/head-joinery-vikram.jpg'
  }
];

export function AboutTeamShowcase() {
  return (
    <div className="w-full space-y-4">
      {/* Top Header Strip */}
      <div className="flex items-center justify-between pb-1 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#c9a96e] animate-pulse" />
          <span className="text-[11px] font-sans font-bold tracking-[0.25em] uppercase text-[#c9a96e]">
            OUR LEADERSHIP &amp; EXPERT TEAM
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-sans tracking-wider uppercase text-[#d6d3cd]">
          <Users className="w-3 h-3 text-[#c9a96e]" />
          <span>100+ IN-HOUSE</span>
        </div>
      </div>

      {/* 2x2 Team Grid: Photos + Designations with Crystal Clarity (2 Profiles per row on mobile & desktop) */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="group relative rounded-xl overflow-hidden bg-[#121212] border border-white/15 hover:border-[#c9a96e] transition-all duration-300 shadow-xl flex flex-col hover:shadow-[0_0_25px_rgba(201,169,110,0.35)] hover:-translate-y-0.5"
          >
            {/* Top Photo: Crisp Portrait */}
            <div className="relative aspect-[4/3.8] w-full overflow-hidden bg-black">
              <img
                src={member.image}
                alt={`${member.name} - ${member.designation}`}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 brightness-100 contrast-105"
              />
              {/* Subtle gradient overlay to enhance bottom separation */}
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent" />

              {/* Experience Badge Top Right */}
              <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 px-1.5 py-0.5 sm:px-2 rounded-full bg-black/80 border border-[#c9a96e]/40 backdrop-blur-md text-[8px] sm:text-[9px] font-sans font-semibold tracking-wider text-[#c9a96e] shadow-md">
                {member.experience}
              </div>
            </div>

            {/* Bottom Info Plate: High-Contrast Clear Typography */}
            <div className="p-2.5 sm:p-4 bg-[#121212] border-t border-white/10 flex flex-col justify-between flex-1 group-hover:bg-[#181818] transition-colors">
              <div>
                {/* Designation in Gold */}
                <span className="text-[9px] sm:text-[11px] font-sans font-bold tracking-[0.14em] sm:tracking-[0.18em] uppercase text-[#c9a96e] block leading-tight truncate">
                  {member.designation}
                </span>

                {/* Name */}
                <h3 className="font-serif text-sm sm:text-lg font-semibold text-[#fafaf8] group-hover:text-[#c9a96e] transition-colors mt-0.5 sm:mt-1 leading-snug line-clamp-1">
                  {member.name}
                </h3>

                {/* Specialty */}
                <p className="text-[10px] sm:text-[11px] text-[#b8b3ab] font-sans mt-0.5 sm:mt-1 line-clamp-1">
                  {member.specialty}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Trust & Factory Metric Bar */}
      <div className="pt-2">
        <div className="p-3.5 rounded-xl bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-white/[0.04] border border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#d6d3cd]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#c9a96e] shrink-0" />
            <span className="font-sans text-[11px] tracking-wide">
              Dedicated site supervisors, architects &amp; German machinery technicians on every project.
            </span>
          </div>
          <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#c9a96e] uppercase shrink-0">
            TURNKEY EXCELLENCE
          </span>
        </div>
      </div>
    </div>
  );
}
