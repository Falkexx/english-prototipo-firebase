'use client';

import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import '../src/globals.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './contexts/AuthContext';

// Configura a fonte Nunito
const nunito = Nunito({ subsets: ['latin'] });

const queryClient = new QueryClient();

export default function RootLayoutClient({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  return (
    <html lang={locale}>
      <body className={nunito.className}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>{children}</AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
