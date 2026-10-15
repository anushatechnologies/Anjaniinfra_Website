import { redirect } from 'next/navigation';

export default function VillasPage() {
  redirect('/projects?category=villas');
}
