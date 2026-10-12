import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projectsData } from '@/data/projects';
import { ProjectDetailClientView } from '@/components/ProjectDetailClientView';

interface Props {
  params: { id: string };
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id.toString(),
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projectsData.find(
    (p) => p.id.toString() === params.id || (p.slug && p.slug === params.id)
  );

  if (!project) {
    return {
      title: 'Project Not Found | Anjani Infra',
    };
  }

  return {
    title: `${project.name} | ${project.location} | Anjani Infra`,
    description: project.description.slice(0, 160),
    openGraph: {
      title: `${project.name} - Anjani Infra`,
      description: project.description,
      images: [{ url: project.image }],
    },
  };
}

export default function ProjectDetailsPage({ params }: Props) {
  const project = projectsData.find(
    (p) => p.id.toString() === params.id || (p.slug && p.slug === params.id)
  );

  if (!project) {
    notFound();
  }

  return <ProjectDetailClientView project={project} />;
}
