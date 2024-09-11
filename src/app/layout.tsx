'use client'

import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from "./contexts/AuthContext";

const nunito = Nunito({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="Pt-BR">
      <body className={nunito.className}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            {children}
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
