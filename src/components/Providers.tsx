'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '@/store'
import { NextIntlClientProvider } from 'next-intl'
import Header from './layout/Header'

type Props = {
  children: ReactNode
  messages: Record<string, any>
  locale: string
}

export default function Providers({ children, messages, locale }: Props) {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
          timeZone={locale === 'tr' ? 'Europe/Istanbul' : 'Europe/London'}
        >
          <Header />
          {children}
        </NextIntlClientProvider>
      </ThemeProvider>
    </ReduxProvider>
  )
}
