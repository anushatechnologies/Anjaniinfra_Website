import { redirect } from 'next/navigation';

export default function BlogSlugRedirectPage({ params }: { params: { slug: string } }) {
  redirect(`/blogs/${params.slug}`);
}
