// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { parseCookies } from 'nookies';

export function middleware(req: NextRequest) {
    const cookies = req.cookies.get('nextauth.token');

    // Se o token não estiver presente, redireciona para a página de login
    if (!cookies) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    // Permite o acesso à página se o token estiver presente
    return NextResponse.next();
}

// Define quais caminhos a middleware deve proteger
export const config = {
    matcher: ['/Home/:path*', '/Profile/:path*', '/PaymentPage/:path*', '/RankingPage/:path*', '/Conquests/:path*', '/EditProfile/:path*'], // Protege todas as rotas dentro de /Home
};
