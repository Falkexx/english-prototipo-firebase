import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import React from 'react';
import RootLayoutClient from '../../layout'; // Componente de layout no lado do cliente

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Obtém as mensagens de acordo com o locale atual no lado do servidor
  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider messages={messages}>
      {/* Passa o children para o layout no lado do cliente */}
      <RootLayoutClient locale={locale}>
        {children}
      </RootLayoutClient>
    </NextIntlClientProvider>
  );
}
