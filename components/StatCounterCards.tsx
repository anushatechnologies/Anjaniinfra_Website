'use client';

import React, { useEffect, useRef, useState } from 'react';

interface StatItem {
  id: string;
  target: number;
  suffix: string;
  title: string;
  subtitle: string;
}

const stats: StatItem[] = [
  {
    id: 'turnkey',
    target: 100,
    suffix: '+',
    title: 'Turnkey Projects',
    subtitle: 'Delivered across Hyderabad'
  },
  {
    id: 'experience',
    target: 10,
    suffix: '+',
    title: 'Years Experience',
    subtitle: 'Industry excellence'
  },
  {
    id: 'ontime',
    target: 100,
    suffix: '%',
    title: 'On-Time Delivery',
    subtitle: 'Strict adherence to timeline'
  },
  {
    id: 'warranty',
    target: 10,
    suffix: '-Yr',
    title: 'Warranty Support',
    subtitle: 'Complete peace of mind'
  }
];

export function StatCounterCards({ className = 'grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6' }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1800; // 1.8 seconds smooth animation
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic for a polished premium feel
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setCounts(
        stats.map((stat) => Math.round(stat.target * easeProgress))
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [hasAnimated]);

  return (
    <div ref={containerRef} className={className}>
      {stats.map((stat, idx) => (
        <div
          key={stat.id}
          className="relative p-6 sm:p-8 rounded-xl bg-[#161616] border border-white/15 hover:border-[#c9a96e]/70 transition-all duration-300 shadow-lg hover:shadow-[0_12px_32px_rgba(201,169,110,0.14)] hover:-translate-y-1 group overflow-hidden"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#c9a96e]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#c9a96e]/20 transition-all duration-500" />
          
          {/* Top Decorative Gold Accent Line */}
          <div className="w-6 h-0.5 bg-gradient-to-r from-[#c9a96e] to-transparent mb-4 group-hover:w-12 transition-all duration-500" />

          {/* Metric Number with Metallic Shimmer Gradient & Crisp Modern Sans */}
          <div className="flex items-baseline font-sans font-extrabold tracking-tight tabular-nums select-none">
            <span className="text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-br from-[#fff2d6] via-[#c9a96e] to-[#a8874d] bg-clip-text text-transparent drop-shadow-sm group-hover:scale-105 transition-transform duration-300">
              {counts[idx]}
            </span>
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#dfc698] ml-1">
              {stat.suffix}
            </span>
          </div>

          {/* Metric Titles */}
          <div className="text-xs uppercase tracking-[0.2em] text-[#fafaf8] mt-4 font-semibold group-hover:text-[#c9a96e] transition-colors">
            {stat.title}
          </div>
          <p className="text-xs text-[#d6d3cd] mt-1.5 font-normal leading-relaxed">
            {stat.subtitle}
          </p>
        </div>
      ))}
    </div>
  );
}
