'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/store';
import { NextIntlClientProvider } from 'next-intl';
import Header from './Header';

export default function Providers({
  children,
  messages,
  locale,
}: {
  children: ReactNode;
  messages: any;
  locale: string;
}) {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}
