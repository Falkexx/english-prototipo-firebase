import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import React from "react";
import RootLayoutClient from "../../layout"; // Componente de layout no lado do cliente
import { SubscriptionProvider } from "@/contexts/SubscribtionPayment";
import { QueryClient, QueryClientProvider } from 'react-query';


export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages({locale});

  return (
    <SubscriptionProvider>
      <NextIntlClientProvider messages={messages}>
        {/* Passa o children para o layout no lado do cliente */}
        <RootLayoutClient locale={locale}>{children}</RootLayoutClient>
      </NextIntlClientProvider>
    </SubscriptionProvider>
  );
}
