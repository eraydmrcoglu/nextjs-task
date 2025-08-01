'use client';

import { useTranslations } from 'next-intl';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { removeFavorite } from '@/store/slices/favoritesSlice';
import Image from 'next/image';
import { X } from 'lucide-react';

type ProductType = {
  id: number;
  image: string;
  currency: string;
  price: number;
  translations: Record<string, { name: string }>;
};

type FavoriteDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  locale: string;
  products: ProductType[];
};

export default function FavoriteDrawer({
  isOpen,
  onClose,
  locale,
  products,
}: FavoriteDrawerProps) {
  const t = useTranslations('Favorites');
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.ids);

  const favoriteProducts = products.filter((p: ProductType) =>
    favorites.includes(p.id),
  );

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[320px] bg-white dark:bg-zinc-900 shadow-lg z-[999] transform transition-transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-bold">{t('title')}</h2>
        <button onClick={onClose}>
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-60px)]">
        {favoriteProducts.length === 0 ? (
          <p className="text-sm text-zinc-500">{t('empty')}</p>
        ) : (
          favoriteProducts.map((product: ProductType) => (
            <div
              key={product.id}
              className="flex gap-3 items-center relative border p-2 rounded-lg"
            >
              <Image
                src={product.image}
                alt={product.translations[locale]?.name ?? 'Product'}
                width={50}
                height={50}
                className="rounded object-cover"
              />
              <div className="flex flex-col text-sm">
                <span className="font-medium">
                  {product.translations[locale]?.name}
                </span>
                <span className="text-xs text-zinc-500">
                  {new Intl.NumberFormat(locale, {
                    style: 'currency',
                    currency: product.currency,
                  }).format(product.price)}
                </span>
              </div>
              <button
                onClick={() => dispatch(removeFavorite(product.id))}
                className="absolute top-1 right-1 text-zinc-400 hover:text-red-600 transition"
                title={t('remove')}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
