import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
export { default } from 'next-auth/middleware';

// This function can be marked `async` if using `await` inside
export async function middleware(req) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const url = req.nextUrl;

    if (!token && url.pathname !== '/sign-in' && url.pathname !== '/signup') {
        // Delay redirection
        await new Promise((resolve) => setTimeout(resolve, 100));
        return NextResponse.redirect(new URL('/sign-in', req.url));
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
