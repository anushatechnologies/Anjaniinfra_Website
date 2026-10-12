import React from 'react';
import type { Metadata } from 'next';
import { projectsData } from '@/data/projects';
import { ProjectsClientView } from '@/components/ProjectsClientView';

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

export default function ProjectsPortfolioPage() {
  return <ProjectsClientView projects={projectsData} />;
}
