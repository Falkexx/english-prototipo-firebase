import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { parseCookies } from 'nookies';
import createIntlMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// Middleware de internacionalização do next-intl
const intlMiddleware = createIntlMiddleware(routing);

// Middleware personalizado para verificar autenticação
export function middleware(req: NextRequest) {
    // Executa a lógica do middleware de internacionalização
    const intlResponse = intlMiddleware(req);
    if (intlResponse) {
        // Se o intlMiddleware já retornar uma resposta (ex: redirecionamento), não continue
        return intlResponse;
    }
    
    // Verifica se o token de autenticação está presente
    const cookies = req.cookies.get('nextauth.token');
    
    if (!cookies) {
        // Redireciona para a página de login se o token não estiver presente
        return NextResponse.redirect(new URL('/', req.url));
    }
    
    // Permite o acesso à página se o token estiver presente
    return NextResponse.next();
}

// Combina as rotas protegidas com as rotas internacionalizadas
export const config = {
    matcher: [
        '/', // Página inicial
        '/(pt|en)/:path*', // Internacionalização
        '/Home/:path*', '/Profile/:path*', '/PaymentPage/:path*', '/RankingPage/:path*', 
        '/Conquests/:path*', '/EditProfile/:path*', '/Recheck/:path*'
    ]
};
