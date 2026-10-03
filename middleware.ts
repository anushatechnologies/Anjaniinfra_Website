import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect legacy /admin traffic directly to the standalone Admin Portal
  if (pathname.startsWith('/admin')) {
    const adminUrl = process.env.NEXT_PUBLIC_ADMIN_PORTAL_URL || 'http://localhost:3003';
    return NextResponse.redirect(new URL(adminUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
