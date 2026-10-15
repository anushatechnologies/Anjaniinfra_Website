import React from 'react';
import type { Metadata } from 'next';
import { projectsData, ProjectItem } from '@/data/projects';
import { ProjectsClientView } from '@/components/ProjectsClientView';
import { supabase } from '@/lib/supabaseClient';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Landmark Projects & Turnkey Portfolio | Anjani Infra Hyderabad',
  description:
    'Explore our completed turnkey projects including One Oak Sky Villa at Gandipet, luxury duplex penthouses, high-rise civil superstructures, and high-performance facades.',
  keywords: [
    'One Oak Sky Villa Gandipet',
    'Gandipet Luxury Penthouse Interior',
    'Anjani Infra Projects',
    'Civil Construction Portfolio Hyderabad',
    'Turnkey Interior Fitout Hyderabad'
  ],
  alternates: {
    canonical: 'https://www.anjaniinfrap.com/projects',
  },
};

async function getLiveProjects(): Promise<ProjectItem[]> {
  try {
    const { data: dbProjects, error } = await supabase
      .from('projects')
      .select('*')
      .order('display_order', { ascending: true });

    if (!error && Array.isArray(dbProjects) && dbProjects.length > 0) {
      const mappedDb = dbProjects.map((p: any) => {
        const local = projectsData.find(
          (lp) => lp.id.toString() === p.id?.toString() || lp.slug === p.slug
        );
        // Replace slide cover images with high-definition architectural renders
        const isCover = p.image_url?.includes('page_01.jpg') || !p.image_url;
        return {
          id: typeof p.id === 'number' ? p.id : (local?.id || parseInt(p.id) || 1),
          slug: p.slug || local?.slug,
          name: p.name || p.title || local?.name || 'Project',
          location: p.location || local?.location || 'Hyderabad',
          type: p.type || local?.type || 'Interior Architecture',
          area: p.area || local?.area || '',
          category: local?.category || p.category || 'Interior Architecture',
          featured: p.is_featured ?? p.featured ?? local?.featured ?? false,
          image: isCover && local?.image ? local.image : (p.image_url || p.image || local?.image || ''),
          client: p.client || local?.client || 'Private Client',
          year: p.year || local?.year || '2026',
          description: local?.description || p.description || '',
          specs: local?.specs || (Array.isArray(p.specs) ? p.specs : []),
          gallery: Array.isArray(p.gallery) ? p.gallery : (local?.gallery || []),
          beforeAfter: local?.beforeAfter || p.before_after,
          floorPlans: local?.floorPlans || p.floor_plans,
        };
      });

      // Strictly retain only the curated projects present in projectsData
      const allowedSlugs = new Set(projectsData.map((lp) => lp.slug));
      const filteredDb = mappedDb.filter((p) => p.slug && allowedSlugs.has(p.slug));
      const dbSlugs = new Set(filteredDb.map((p) => p.slug));
      const missingLocal = projectsData.filter((lp) => !dbSlugs.has(lp.slug));
      return [...filteredDb, ...missingLocal];
    }
  } catch (err) {
    console.warn('[Supabase] Warning fetching live projects:', err);
  }

  return projectsData;
}

export default async function ProjectsPortfolioPage() {
  const projects = await getLiveProjects();
  return (
    <React.Suspense fallback={<div className="min-h-screen bg-[#F6F4EE]" />}>
      <ProjectsClientView projects={projects} />
    </React.Suspense>
  );
}
