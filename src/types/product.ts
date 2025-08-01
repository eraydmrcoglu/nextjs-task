import { Locale } from '@/types/locale'

export interface Product {
  id: number
  image: string
  translations: Record<Locale, {
    name: string
    description: string
  }>
  price: number
  currency: 'TRY' | 'GBP'
}