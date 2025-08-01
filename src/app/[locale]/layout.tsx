import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import '../globals.css';
import Providers from '@/components/Providers';

export const metadata: Metadata = {
  title: 'Task',
  description: 'Multilingual product landing page',
};

const locales = ['en', 'tr'];

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="antialiased">
        <Providers locale={locale} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
