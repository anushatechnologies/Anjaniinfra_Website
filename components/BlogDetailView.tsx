'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Search,
  ChevronRight,
  Calendar,
  Clock,
  User,
  Share2,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Phone,
  MessageCircle,
  Mail,
  Copy,
  Check
} from 'lucide-react';
import { BlogArticle, BLOG_CATEGORIES, getPopularBlogs, getRelatedBlogs } from '@/data/blogs';
import { InteriorEstimateModal } from './InteriorEstimateModal';

interface BlogDetailViewProps {
  article: BlogArticle;
}

export function BlogDetailView({ article }: BlogDetailViewProps) {
  const router = useRouter();
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  const relatedPosts = getRelatedBlogs(article.slug, article.category, 2);
  const popularPosts = getPopularBlogs(3);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/blogs?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleCategoryClick = (categoryName: string) => {
    router.push(`/blogs?category=${encodeURIComponent(categoryName)}`);
  };

  const handleShare = (platform: string) => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const title = article.title;

    switch (platform) {
      case 'whatsapp':
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' - ' + url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        if (typeof navigator !== 'undefined' && navigator.clipboard) {
          navigator.clipboard.writeText(url);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }
        break;
    }
  };

  return (
    <div className="bg-white min-h-screen text-gray-900 pb-20">
      <InteriorEstimateModal
        isOpen={isEstimateOpen}
        onClose={() => setIsEstimateOpen(false)}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200/80 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1340px] mx-auto flex items-center gap-2 text-xs text-gray-500 font-medium overflow-x-auto no-scrollbar">
          <Link href="/" className="hover:text-[#2B5573] transition-colors shrink-0">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <Link href="/blogs" className="hover:text-[#2B5573] transition-colors shrink-0">
            Blogs
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <span className="text-[#C5A059] font-semibold truncate max-w-[300px] sm:max-w-[500px]">
            {article.title}
          </span>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14">
          
          {/* ──────────────── Left Column: Article Content Matching Screenshots 2, 3, 4 ──────────────── */}
          <article className="lg:col-span-8">
            
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-gray-900 leading-tight tracking-tight mb-3">
              {article.title}
            </h1>

            {/* Date & Meta Info matching Screenshot 2 */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-[13px] text-[#773b6f] font-semibold mb-6">
              <span>{article.formattedDate || article.date}</span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-500 font-normal flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                {article.readTime || '5 min read'}
              </span>
              <span className="text-gray-300">•</span>
              <button
                onClick={() => handleCategoryClick(article.category)}
                className="text-[#132B3E] hover:text-[#C5A059] transition-colors bg-amber-50/70 border border-amber-200/60 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider"
              >
                {article.category}
              </button>
            </div>

            {/* Intro Paragraphs Matching Screenshot 2 */}
            <div className="space-y-4 text-gray-700 leading-relaxed text-[15px] sm:text-base font-normal">
              {article.introParagraphs.map((para, idx) => (
                <p key={idx} className="text-justify sm:text-left">
                  {para}
                </p>
              ))}
            </div>

            {/* Featured Image Matching Screenshot 2 & 3 */}
            <div className="my-8 rounded-lg overflow-hidden border border-gray-100 shadow-sm bg-gray-50">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-auto max-h-[520px] object-cover"
              />
            </div>

            {/* Formatted Sections Matching Screenshot 3 & 4 */}
            <div className="space-y-8">
              {article.sections.map((section, sIdx) => (
                <div key={sIdx} className="space-y-4">
                  {section.heading && (
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 pt-2 tracking-tight">
                      {section.heading}
                    </h2>
                  )}

                  {section.subheading && (
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 tracking-tight">
                      {section.subheading}
                    </h3>
                  )}

                  {section.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className="text-gray-700 leading-relaxed text-[15px] sm:text-base text-justify sm:text-left">
                      {para}
                    </p>
                  ))}

                  {/* Bullet Points if present */}
                  {section.bulletPoints && section.bulletPoints.length > 0 && (
                    <div className="bg-amber-50/50 border border-amber-100/80 rounded-lg p-5 my-4 space-y-2.5">
                      {section.bulletPoints.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-1" />
                          <span className="text-xs sm:text-[14px] text-gray-800 leading-relaxed">
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Mid-Article Section Image */}
                  {section.image && (
                    <div className="my-6 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                      <img
                        src={section.image}
                        alt={section.imageCaption || section.heading || 'Interior details'}
                        className="w-full h-auto max-h-[460px] object-cover"
                      />
                      {section.imageCaption && (
                        <p className="text-center text-xs text-gray-500 py-2 bg-gray-50 italic">
                          {section.imageCaption}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Conclusion & Anjani Infra Design Banner */}
            {article.conclusion && (
              <div className="mt-10 p-6 sm:p-8 bg-gradient-to-br from-[#132B3E] to-[#1E3E5B] text-white rounded-xl shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#DFBA73] text-[11px] font-bold uppercase tracking-wider border border-[#C5A059]/40">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Anjani Infra Guaranteed Quality</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                    Planning Your Dream Home Interiors in Hyderabad?
                  </h3>
                  <p className="text-xs sm:text-[14px] text-gray-300 leading-relaxed">
                    {article.conclusion}
                  </p>
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setIsEstimateOpen(true)}
                      className="px-6 py-2.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] font-black text-xs uppercase tracking-wider rounded-lg shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
                    >
                      <span>Get Free 3D Design & Estimate</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                      href="tel:+918388899999"
                      className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-lg border border-white/20 transition-all inline-flex items-center gap-2"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Call Our Expert</span>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Social Share & Copy Link */}
            <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-2">
                <Share2 className="w-4 h-4 text-[#C5A059]" />
                <span>Share this article:</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleShare('whatsapp')}
                  className="px-3.5 py-1.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold rounded-md flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer"
                  title="Share on WhatsApp"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleShare('facebook')}
                  className="px-3.5 py-1.5 bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-bold rounded-md flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer"
                  title="Share on Facebook"
                >
                  <span>Facebook</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleShare('twitter')}
                  className="px-3.5 py-1.5 bg-[#1DA1F2] hover:bg-[#0c85d0] text-white text-xs font-bold rounded-md flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer"
                  title="Share on Twitter"
                >
                  <span>Twitter</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleShare('copy')}
                  className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-md flex items-center gap-1.5 transition-colors cursor-pointer border border-gray-200"
                  title="Copy link"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-gray-500" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Related Articles Section */}
            {relatedPosts.length > 0 && (
              <div className="mt-14 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 tracking-tight">
                  Related Articles
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {relatedPosts.map((rel) => (
                    <div
                      key={rel.id}
                      className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow"
                    >
                      <div>
                        <div className="h-44 overflow-hidden bg-gray-100">
                          <img
                            src={rel.image}
                            alt={rel.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4 space-y-2">
                          <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-wider">
                            {rel.category}
                          </span>
                          <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#2B5573] transition-colors leading-snug line-clamp-2">
                            {rel.title}
                          </h4>
                          <p className="text-xs text-gray-500 line-clamp-2">
                            {rel.excerpt}
                          </p>
                        </div>
                      </div>
                      <div className="p-4 pt-0">
                        <Link
                          href={`/blogs/${rel.slug}`}
                          className="px-4 py-1.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] text-xs font-bold rounded inline-flex items-center gap-1.5 transition-all shadow-sm"
                        >
                          <span>Read More</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Back to all blogs button */}
            <div className="mt-10">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#132B3E] hover:text-[#C5A059] transition-colors py-2 px-4 rounded border border-gray-200 hover:border-[#C5A059]"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Blogs</span>
              </Link>
            </div>

          </article>

          {/* ──────────────── Right Column: Sidebar Matching Screenshot 2, 3, 4 ──────────────── */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* 1. Search Box Matching Screenshot 2 */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">Search</h3>
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="text"
                  placeholder="Search here"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2.5 pr-10 text-xs border border-gray-300 rounded focus:outline-none focus:border-[#C5A059] text-gray-800 placeholder-gray-400 bg-white shadow-sm"
                />
                <button
                  type="submit"
                  aria-label="Search"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#C5A059] transition-colors cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* 2. Categories List Matching Screenshot 2, 3, 4 */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">Categories</h3>
              <ul className="divide-y divide-gray-100 text-xs text-gray-700">
                {BLOG_CATEGORIES.map((cat) => {
                  const isCurrent = article.category.toLowerCase() === cat.toLowerCase();
                  return (
                    <li key={cat}>
                      <button
                        type="button"
                        onClick={() => handleCategoryClick(cat)}
                        className={`w-full text-left py-2.5 hover:text-[#2B5573] hover:pl-1 transition-all flex items-center justify-between cursor-pointer ${
                          isCurrent ? 'text-[#132B3E] font-bold pl-1' : ''
                        }`}
                      >
                        <span>{cat}</span>
                        <ChevronRight className={`w-3 h-3 ${isCurrent ? 'text-[#C5A059]' : 'text-gray-300'}`} />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* 3. Free Estimate Button Matching Screenshot 2, 3, 4 */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsEstimateOpen(true)}
                className="w-full py-3.5 px-6 bg-[#773b6f] hover:bg-[#642d5d] text-white font-bold text-sm uppercase tracking-wider rounded-lg shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 group hover:shadow-lg"
              >
                <span>Free Estimate</span>
                <Sparkles className="w-4 h-4 text-[#DFBA73] group-hover:rotate-12 transition-transform" />
              </button>
            </div>

            {/* 4. Most Popular Post Widget Matching Screenshot 1 & 5 */}
            <div className="space-y-4 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">Most Popular Post</h3>
              
              {popularPosts.map((pop) => (
                <div
                  key={pop.id}
                  className="bg-white border border-gray-200 rounded-lg p-3.5 shadow-sm space-y-3 hover:border-gray-300 transition-colors"
                >
                  <Link href={`/blogs/${pop.slug}`} className="block rounded overflow-hidden h-36 bg-gray-100 group">
                    <img
                      src={pop.image}
                      alt={pop.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>

                  <div className="space-y-1">
                    <Link
                      href={`/blogs/${pop.slug}`}
                      className="text-xs font-bold text-gray-900 leading-snug hover:text-[#2B5573] transition-colors block line-clamp-2"
                    >
                      {pop.title}
                    </Link>
                    <div className="text-[11px] text-gray-500">{pop.date}</div>
                  </div>

                  <Link
                    href={`/blogs/${pop.slug}`}
                    className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] text-[11px] font-black rounded transition-all shadow-sm"
                  >
                    Read More
                  </Link>
                </div>
              ))}
            </div>

            {/* Quick Contact Box */}
            <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700">
                Need Help With Interiors?
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Connect with our senior interior consultants for personalized layout planning and cost estimations.
              </p>
              <div className="space-y-2 pt-1">
                <a
                  href="tel:+918388899999"
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-[#132B3E] hover:bg-[#1d3d57] text-white text-xs font-bold rounded transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Call +91 83888 99999</span>
                </a>
                <a
                  href="https://wa.me/918388899999?text=Hi%20Anjani%20Infra,%20I%20would%20like%20to%20know%20more%20about%20interior%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold rounded transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Designer</span>
                </a>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
