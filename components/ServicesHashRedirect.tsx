'use client';

import { useEffect } from 'react';

export function ServicesHashRedirect() {
  useEffect(() => {
    const handleHash = () => {
      const hash = typeof window !== 'undefined' ? window.location.hash : '';
      const hashRoutes: Record<string, string> = {
        '#turnkey-interiors': '/turnkey-interior-projects',
        '#residential-architecture': '/luxury-residential-villa-architecture',
        '#commercial-workplaces': '/corporate-commercial-workplaces',
        '#modular-kitchens-wardrobes': '/modular-kitchens-wardrobes',
        '#mep-lighting-ceilings': '/mep-lighting-acoustical-ceilings',
        '#safety-ehs': '/safety-ehs',
      };
      if (hash && hashRoutes[hash]) {
        window.location.replace(hashRoutes[hash]);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return null;
}
