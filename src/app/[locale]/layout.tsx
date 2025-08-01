// app/[locale]/layout.tsx
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'
import Providers from '@/components/Providers'

const locales = ['en', 'tr'] as const

type Props = {
  children: ReactNode
  params: { locale: string }
}

export default async function LocaleLayout({ children, params }: Props) {
  const locale = params.locale

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound()
  }

  const messages = (await import(`../../../messages/${locale}.json`)).default

  return (
    <Providers locale={locale} messages={messages}>
      {children}
    </Providers>
  )
}
