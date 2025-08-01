'use client';

import { useDispatch, useSelector } from 'react-redux';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import type { Locale } from '@/data/products';
import { toggleFavorite } from '@/store/slices/favoritesSlice';
import { RootState } from '@/store';

type Props = {
  product: {
    id: number;
    image: string;
    translations: Record<Locale, { name: string; description: string }>;
    price: number;
    currency: 'TRY' | 'GBP';
  };
  locale: Locale;
};

export default function ProductCard({ product, locale }: Props) {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.ids);
  const isFavorited = favorites.includes(product.id);

  const translation = product.translations[locale];
  const formattedPrice = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: product.currency,
  }).format(product.price);

  return (
    <div
      key={product.id}
      className="group bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col transform hover:-translate-y-1 hover:scale-[1.01]"
    >
      <div className="relative w-full h-72 overflow-hidden">
        <Image
          src={product.image}
          alt={translation.name}
          fill
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <button
          onClick={() => dispatch(toggleFavorite(product.id))}
          className="absolute top-3 right-3 z-10 bg-white dark:bg-zinc-700 p-2 rounded-full shadow-md hover:scale-110 transition"
        >
          <Heart
            className={`w-5 h-5 transition ${
              isFavorited ? 'text-red-500 fill-red-500' : 'text-zinc-500'
            }`}
          />
        </button>
      </div>

      <div className="p-5 flex flex-col justify-between flex-grow space-y-3">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white line-clamp-1">
          {translation.name}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-300 line-clamp-2">
          {translation.description}
        </p>
        <p className="text-base font-bold text-black dark:text-white mt-auto">
          {formattedPrice}
        </p>
      </div>
    </div>
  );
}
