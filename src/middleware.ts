import { notFound } from 'next/navigation';
import { supabase } from '@/services/supabase';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const cookieStore = request.cookies;
    const token = cookieStore.get('__AUTH')?.value;
    if (!token || token === 'null') return  NextResponse.redirect(new URL('/login', request.url));

    const isInvalid = await supabase.auth
      .getUser(token)
      .then((res) => (res.error ? true : false))
      .catch(() => true);
    if (isInvalid) {
      cookieStore.delete('__AUTH');
      return NextResponse.rewrite(new URL('/login', request.url));
    }
  }
}

export const config = {
  matcher: ['/admin/:path*', '/admin'],
}