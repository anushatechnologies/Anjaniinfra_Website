'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { BeforeAfterPair } from '@/data/projects';
import { Sparkles, MoveHorizontal, Eye, CheckCircle2, Layers, ZoomIn } from 'lucide-react';

interface BeforeAfterSliderProps {
  pairs: BeforeAfterPair[];
  initialPairIndex?: number;
}

export function BeforeAfterSlider({ pairs, initialPairIndex = 0 }: BeforeAfterSliderProps) {
  const [selectedPairIndex, setSelectedPairIndex] = useState(initialPairIndex);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const [viewMode, setViewMode] = useState<'slider' | 'before' | 'after'>('slider');
  const containerRef = useRef<HTMLDivElement>(null);

  const activePair = pairs[selectedPairIndex] || pairs[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(0, Math.min(rect.width, x));
    const pct = (clamped / rect.width) * 100;
    setSliderPosition(pct);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  if (!activePair) return null;

  return (
    <div className="space-y-6">
      {/* Pair Selector Tabs */}
      {pairs.length > 1 && (
        <div className="flex flex-wrap items-center gap-2.5 pb-2">
          {pairs.map((p, idx) => {
            const isSelected = idx === selectedPairIndex;
            return (
              <button
                key={p.id}
                onClick={() => {
                  setSelectedPairIndex(idx);
                  setSliderPosition(50);
                  setViewMode('slider');
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#1A374D] text-[#C5A059] shadow-md border border-[#C5A059]/40'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                <Layers className={`w-3.5 h-3.5 ${isSelected ? 'text-[#C5A059]' : 'text-slate-400'}`} />
                <span>{p.roomName}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${isSelected ? 'bg-[#C5A059]/20 text-[#C5A059]' : 'bg-slate-100 text-slate-500'}`}>
                  {p.floor}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Main Interactive Comparison Card */}
      <div className="bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 relative group">
        
        {/* Top Controls Header Bar */}
        <div className="bg-slate-900/90 backdrop-blur px-5 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-white font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059] animate-pulse" />
            <span className="font-bold text-[#C5A059] uppercase tracking-wider text-[11px] font-sans">
              Interactive Transformation Viewer
            </span>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <span className="text-slate-300 text-[11px] hidden sm:inline">
              Drag slider left or right to compare
            </span>
          </div>

          {/* Quick Toggle View Modes */}
          <div className="inline-flex rounded-xl bg-slate-800/80 p-1 border border-slate-700/60 text-[11px] font-semibold text-slate-300">
            <button
              onClick={() => setViewMode('before')}
              className={`px-3 py-1 rounded-lg transition-all ${
                viewMode === 'before' ? 'bg-[#C5A059] text-slate-950 font-bold shadow-xs' : 'hover:text-white'
              }`}
            >
              Before Only
            </button>
            <button
              onClick={() => setViewMode('slider')}
              className={`px-3 py-1 rounded-lg transition-all ${
                viewMode === 'slider' ? 'bg-[#C5A059] text-slate-950 font-bold shadow-xs' : 'hover:text-white'
              }`}
            >
              Split Slider
            </button>
            <button
              onClick={() => setViewMode('after')}
              className={`px-3 py-1 rounded-lg transition-all ${
                viewMode === 'after' ? 'bg-[#C5A059] text-slate-950 font-bold shadow-xs' : 'hover:text-white'
              }`}
            >
              After Only
            </button>
          </div>
        </div>

        {/* Viewport Frame */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => setIsDragging(false)}
          className="relative w-full h-[360px] sm:h-[480px] lg:h-[580px] select-none overflow-hidden cursor-ew-resize bg-slate-900"
        >
          {/* AFTER Image (Full background layer) */}
          <img
            src={activePair.afterImage}
            alt={activePair.afterLabel || 'After Transformation'}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* BEFORE Image (Clipped overlay layer) */}
          {viewMode !== 'after' && (
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none transition-all duration-75"
              style={{
                width: viewMode === 'before' ? '100%' : `${sliderPosition}%`,
              }}
            >
              <img
                src={activePair.beforeImage}
                alt={activePair.beforeLabel || 'Before State'}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                  maxWidth: 'none',
                }}
              />
              <div className="absolute inset-0 bg-slate-950/10 pointer-events-none" />
            </div>
          )}

          {/* Floating Badges */}
          {viewMode === 'slider' && (
            <>
              {/* Before Badge (Left) */}
              <div className="absolute top-4 left-4 z-20 pointer-events-none">
                <div className="px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur border border-white/20 text-white text-[11px] font-bold tracking-wide shadow-lg flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  <span>{activePair.beforeLabel || 'BEFORE'}</span>
                </div>
              </div>

              {/* After Badge (Right) */}
              <div className="absolute top-4 right-4 z-20 pointer-events-none">
                <div className="px-3 py-1.5 rounded-full bg-[#C5A059] text-slate-950 text-[11px] font-extrabold tracking-wide shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                  <span>{activePair.afterLabel || 'AFTER: BESPOKE HANDOVER'}</span>
                </div>
              </div>
            </>
          )}

          {viewMode === 'before' && (
            <div className="absolute top-4 left-4 z-20 pointer-events-none">
              <div className="px-3.5 py-1.5 rounded-full bg-rose-600 text-white text-xs font-bold tracking-wide shadow-lg">
                {activePair.beforeLabel || 'BEFORE'}
              </div>
            </div>
          )}

          {viewMode === 'after' && (
            <div className="absolute top-4 right-4 z-20 pointer-events-none">
              <div className="px-3.5 py-1.5 rounded-full bg-[#C5A059] text-slate-950 text-xs font-extrabold tracking-wide shadow-lg flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                <span>{activePair.afterLabel || 'AFTER: BESPOKE HANDOVER'}</span>
              </div>
            </div>
          )}

          {/* Draggable Divider Handle Line */}
          {viewMode === 'slider' && (
            <div
              className="absolute top-0 bottom-0 z-30 pointer-events-none flex items-center justify-center -translate-x-1/2"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Vertical line */}
              <div className="w-[3px] h-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]" />

              {/* Circular Draggable Button */}
              <div className="absolute h-11 w-11 rounded-full bg-[#C5A059] text-slate-950 shadow-2xl flex items-center justify-center border-2 border-white pointer-events-auto cursor-ew-resize hover:scale-110 active:scale-95 transition-transform">
                <MoveHorizontal className="w-5 h-5 stroke-[2.5]" />
              </div>
            </div>
          )}

          {/* Bottom Caption Pill */}
          <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none">
            <div className="p-3 sm:p-4 rounded-2xl bg-slate-950/85 backdrop-blur border border-white/15 text-white max-w-2xl">
              <div className="text-[10px] sm:text-xs font-extrabold text-[#C5A059] uppercase tracking-wider mb-0.5">
                {activePair.floor} • {activePair.roomName}
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                {activePair.description}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
