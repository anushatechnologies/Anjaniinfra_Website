'use client';

import React, { useState } from 'react';
import {
  Calculator,
  Building2,
  Hammer,
  Palette,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  Sparkle
} from 'lucide-react';
import { QuickQuoteModal } from './QuickQuoteModal';

export function CostEstimator() {
  const [areaSqFt, setAreaSqFt] = useState<number>(25000);
  const [selectedScope, setSelectedScope] = useState<'TURNKEY' | 'CIVIL' | 'INTERIOR' | 'EXTERIOR'>('TURNKEY');
  const [qualityTier, setQualityTier] = useState<'EXECUTIVE' | 'PREMIUM' | 'LUXURY'>('PREMIUM');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Rate multipliers per sq.ft in INR
  const rateMatrix = {
    TURNKEY: { EXECUTIVE: 1800, PREMIUM: 2600, LUXURY: 3800 },
    CIVIL: { EXECUTIVE: 950, PREMIUM: 1400, LUXURY: 2100 },
    INTERIOR: { EXECUTIVE: 750, PREMIUM: 1200, LUXURY: 1950 },
    EXTERIOR: { EXECUTIVE: 350, PREMIUM: 650, LUXURY: 1100 },
  };

  const currentRate = rateMatrix[selectedScope][qualityTier];
  const totalEstimate = areaSqFt * currentRate;

  const scopeLabels = {
    TURNKEY: 'Turnkey Design & Build (Full Scope)',
    CIVIL: 'Civil Superstructure & Structural Framework',
    INTERIOR: 'Luxury Interior Fitout & Millwork',
    EXTERIOR: 'Exterior Facade, Curtain Wall & ACP',
  };

  const formatINR = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(val / 100000).toFixed(2)} Lakhs`;
  };

  return (
    <div className="bg-[#1A374D] text-white rounded-3xl p-6 lg:p-10 shadow-2xl border border-[#2B5573]/80 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2B5573]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#2B5573] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#DFBA73] border border-[#C5A059]/30 text-[10px] font-extrabold uppercase tracking-widest mb-2">
              <Calculator className="w-3.5 h-3.5" /> Instant Construction Cost Estimator
            </div>
            <h3 className="text-2xl lg:text-3xl font-serif font-bold text-[#FCF9EB]">
              Calculate Project Investment
            </h3>
            <p className="text-xs text-[#FCF9EB]/70 mt-1 max-w-xl">
              Get an instant BOQ cost benchmark tailored to your built-up area, contracting discipline, and architectural quality standards.
            </p>
          </div>

          <div className="bg-[#2B5573]/60 backdrop-blur-md p-4 rounded-2xl border border-[#C5A059]/40 text-right shrink-0">
            <div className="text-[10px] uppercase font-extrabold text-[#C5A059] tracking-widest">Estimated Investment</div>
            <div className="text-3xl lg:text-4xl font-serif font-extrabold text-[#FCF9EB] font-mono mt-0.5">
              {formatINR(totalEstimate)}
            </div>
            <div className="text-[10px] text-[#FCF9EB]/60 font-mono mt-0.5">
              ₹{currentRate.toLocaleString('en-IN')} / Sq.Ft.
            </div>
          </div>
        </div>

        {/* Form Inputs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Controls (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* 1. Area Slider */}
            <div className="bg-[#2B5573]/30 p-5 rounded-2xl border border-[#2B5573]/60 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-[#FCF9EB] uppercase tracking-wider flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#C5A059]" /> 1. Select Built-up Area (Sq.Ft.)
                </label>
                <div className="text-lg font-mono font-black text-[#DFBA73] bg-[#1A374D] px-3 py-1 rounded-xl border border-[#C5A059]/40">
                  {areaSqFt.toLocaleString('en-IN')} <span className="text-xs font-normal text-white/60">Sq.Ft.</span>
                </div>
              </div>
              <input
                type="range"
                min={5000}
                max={250000}
                step={2500}
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(Number(e.target.value))}
                className="w-full h-2.5 bg-[#1A374D] rounded-lg appearance-none cursor-pointer accent-[#C5A059]"
              />
              <div className="flex justify-between text-[10px] font-mono text-white/50">
                <span>5,000 Sq.Ft (Boutique)</span>
                <span>50,000 Sq.Ft</span>
                <span>150,000 Sq.Ft</span>
                <span>250,000 Sq.Ft (Mega Complex)</span>
              </div>
            </div>

            {/* 2. Scope Pills */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#FCF9EB] uppercase tracking-wider block">
                2. Contracting Scope & Discipline
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { key: 'TURNKEY', title: 'Turnkey EPC Design & Build', icon: Building2, desc: 'Full Civil + Interior + Facade' },
                  { key: 'CIVIL', title: 'Civil RCC Superstructure', icon: Hammer, desc: 'Heavy RCC, Slabs & Foundation' },
                  { key: 'INTERIOR', title: 'Luxury Interior Fitout', icon: Palette, desc: 'Millwork, Joinery & Acoustics' },
                  { key: 'EXTERIOR', title: 'Facade & Glazing Envelopes', icon: Sparkles, desc: 'Curtain Wall, SSG & ACP' },
                ].map((s) => (
                  <button
                    key={s.key}
                    type="button"
                    onClick={() => setSelectedScope(s.key as any)}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      selectedScope === s.key
                        ? 'bg-[#C5A059] text-[#1A374D] border-white shadow-lg font-bold'
                        : 'bg-[#2B5573]/40 border-[#2B5573]/80 text-[#FCF9EB] hover:bg-[#2B5573]/70'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-bold text-xs">
                      <s.icon className="w-4 h-4 shrink-0" />
                      <span>{s.title}</span>
                    </div>
                    <p className={`text-[10px] mt-1 ${selectedScope === s.key ? 'text-[#1A374D]/80 font-medium' : 'text-white/60'}`}>
                      {s.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Quality Tier */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#FCF9EB] uppercase tracking-wider block">
                3. Architectural Quality & Spec Tier
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { key: 'EXECUTIVE', label: 'Executive Standard', tag: 'A-Grade Commercial' },
                  { key: 'PREMIUM', label: 'Luxury Premium', tag: 'MNC Campus Grade' },
                  { key: 'LUXURY', label: 'Ultra-Luxury Signature', tag: 'Iconic Landmark' },
                ].map((t) => (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() => setQualityTier(t.key as any)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      qualityTier === t.key
                        ? 'bg-[#FCF9EB] text-[#1A374D] border-[#C5A059] font-bold shadow-md'
                        : 'bg-[#2B5573]/40 border-[#2B5573]/80 text-white/80 hover:bg-[#2B5573]/70'
                    }`}
                  >
                    <div className="text-xs font-extrabold">{t.label}</div>
                    <div className={`text-[9px] mt-0.5 ${qualityTier === t.key ? 'text-[#1A374D]/80 font-semibold' : 'text-white/50'}`}>
                      {t.tag}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Summary Card (4 cols) */}
          <div className="lg:col-span-4 bg-[#2B5573]/50 p-6 rounded-3xl border border-[#C5A059]/30 flex flex-col justify-between space-y-6">
            <div>
              <div className="text-xs font-serif font-bold text-[#C5A059] uppercase tracking-widest mb-3">
                Specification Summary
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between pb-2 border-b border-[#2B5573]">
                  <span className="text-white/60">Built-up Area:</span>
                  <span className="font-mono font-bold text-white">{areaSqFt.toLocaleString()} Sq.Ft</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-[#2B5573]">
                  <span className="text-white/60">Contracting Scope:</span>
                  <span className="font-bold text-[#DFBA73] truncate max-w-[140px] text-right">{selectedScope}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-[#2B5573]">
                  <span className="text-white/60">Quality Tier:</span>
                  <span className="font-bold text-white">{qualityTier}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-[#2B5573]">
                  <span className="text-white/60">Base Rate:</span>
                  <span className="font-mono font-bold text-emerald-400">₹{currentRate}/sq.ft</span>
                </div>
              </div>

              <div className="mt-5 p-3 rounded-xl bg-[#1A374D] border border-[#2B5573] text-[11px] text-white/80 space-y-1.5">
                <div className="flex items-center gap-1.5 text-[#DFBA73] font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" /> Guarantee Included
                </div>
                <p className="text-[10px] text-white/60 leading-relaxed">
                  Includes 10-Year Structural Guarantee, Digital MB Audits, and Zero-Delay Commitment.
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="w-full py-3.5 rounded-xl bg-[#C5A059] hover:bg-[#d5b069] text-[#1A374D] text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              Get Official BOQ Proposal <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* Quote Modal with Pre-filled Data */}
      <QuickQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialData={{
          scope: scopeLabels[selectedScope],
          area: areaSqFt,
          tier: qualityTier,
          estCost: formatINR(totalEstimate),
        }}
      />
    </div>
  );
}
