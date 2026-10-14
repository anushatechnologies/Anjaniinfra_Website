'use client';

import React, { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Don't show custom cursor on touch devices
    if (window.matchMedia('(hover: none)').matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = target.closest('a, button, input, select, textarea, [data-interactive="true"], .interactive');
      setIsHovering(!!isInteractive);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', checkHover, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', checkHover);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Follower Circle */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[99999] hidden md:block will-change-transform"
        style={{
          transform: `translate3d(${position.x - 12}px, ${position.y - 12}px, 0) scale(${isHovering ? 2.2 : 1})`,
          transition: 'transform 0.15s cubic-bezier(0.2, 0, 0.2, 1)',
        }}
      >
        <div
          className={`w-6 h-6 rounded-full border transition-all duration-200 ${
            isHovering
              ? 'border-white bg-[#c9a96e]/15'
              : 'border-[#c9a96e] bg-transparent'
          }`}
        />
      </div>

      {/* Center Dot */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[100000] hidden md:block will-change-transform"
        style={{
          transform: `translate3d(${position.x - 2}px, ${position.y - 2}px, 0)`,
        }}
      >
        <div className="w-1 h-1 rounded-full bg-[#c9a96e]" />
      </div>
    </>
  );
}
