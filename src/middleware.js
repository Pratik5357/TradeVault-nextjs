import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
export { default } from 'next-auth/middleware';

// This function can be marked `async` if using `await` inside
export async function middleware(req) {
    const token = await getToken({ req });
    const url = req.nextUrl;
    

    if (token) {
        if (url.pathname === '/sign-in' || url.pathname === '/signup') {
            return NextResponse.redirect(new URL('/book', req.url));
        }
    } else {
        if (url.pathname !== '/sign-in' && url.pathname !== '/signup') {
            return NextResponse.redirect(new URL('/sign-in', req.url));
        }
    }

    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/sign-in',
        '/signup',
        '/book',
        '/trade',
    ],
};