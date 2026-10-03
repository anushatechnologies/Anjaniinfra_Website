import BlogDetailPage, { generateMetadata } from '../../blogs/[slug]/page';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export { generateMetadata };
export default BlogDetailPage;

