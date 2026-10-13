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
      return dbProjects.map((p: any) => {
        const local = projectsData.find(
          (lp) => lp.id.toString() === p.id?.toString() || lp.slug === p.slug
        );
        return {
          id: typeof p.id === 'number' ? p.id : (local?.id || parseInt(p.id) || 1),
          slug: p.slug || local?.slug,
          name: p.name || p.title || local?.name || 'Project',
          location: p.location || local?.location || 'Hyderabad',
          type: p.type || local?.type || 'Interior Architecture',
          area: p.area || local?.area || '',
          category: p.category || local?.category || 'Interior Architecture',
          featured: p.is_featured ?? p.featured ?? local?.featured ?? false,
          image: p.image_url || p.image || local?.image || '',
          client: p.client || local?.client || 'Private Client',
          year: p.year || local?.year || '2026',
          description: p.description || local?.description || '',
          specs: Array.isArray(p.specs) ? p.specs : (local?.specs || []),
          gallery: Array.isArray(p.gallery) ? p.gallery : (local?.gallery || []),
          beforeAfter: p.before_after || local?.beforeAfter,
          floorPlans: p.floor_plans || local?.floorPlans,
        };
      });
    }
  } catch (err) {
    console.warn('[Supabase] Warning fetching live projects:', err);
  }

  return projectsData;
}

export default async function ProjectsPortfolioPage() {
  const projects = await getLiveProjects();
  return <ProjectsClientView projects={projects} />;
}
