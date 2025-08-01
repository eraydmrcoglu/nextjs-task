'use client';

import { useLocale } from 'next-intl';
import { products } from '@/constants/products';
import type { Locale } from '@/constants/products';
import ProductCard from './ProductCard';

export default function ProductGrid() {
  const locale = useLocale() as Locale;

  const filteredProducts = products.filter((product) => {
    if (locale === 'tr') return product.currency === 'TRY';
    if (locale === 'en') return product.currency === 'GBP';
    return false;
  });

  return (
    <section className="py-16 px-6 md:px-12 bg-background">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
        {locale === 'tr' ? 'Popüler Ürünler' : 'Popular Products'}
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} locale={locale} />
        ))}
      </div>
    </section>
  );
}