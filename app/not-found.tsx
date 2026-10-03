import Link from 'next/link';
import { ArrowLeft, Home, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-[#0c151e] text-white px-6 py-20">
      <div className="max-w-lg w-full text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          Page Not Found
        </div>

        <h1 className="text-7xl font-extrabold text-[#C5A059] font-serif">404</h1>

        <h2 className="text-2xl font-bold tracking-tight text-white">
          The Living Space You&apos;re Looking for Doesn&apos;t Exist
        </h2>

        <p className="text-sm text-gray-400 leading-relaxed">
          The architectural plan or page you requested might have been moved, renamed, or is temporarily unavailable. Let us guide you back to our luxury portfolio.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A059] hover:bg-[#b08e4d] text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg transition shadow-lg"
          >
            <Home className="w-4 h-4" />
            Back to Homepage
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider rounded-lg border border-white/20 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  );
}
