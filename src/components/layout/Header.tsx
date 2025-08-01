'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { useTheme } from 'next-themes';
import { useSelector } from 'react-redux';
import { Moon, Sun, Heart } from 'lucide-react';
import { useLocale } from 'next-intl';
import { RootState } from '@/store';
import { Button } from '@/components/ui/button';
import FavoriteDrawer from '@/components/layout/FavoriteDrawer';
import { products } from '@/constants/products';

const locales = [
  { code: 'tr', flag: '/flags/tr.svg', alt: 'Türkçe' },
  { code: 'en', flag: '/flags/en.svg', alt: 'English' },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { theme, setTheme } = useTheme();
  const favorites = useSelector((state: RootState) => state.favorites.ids);
  const favoriteCount = favorites.length;
  const locale = useLocale();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const currentLocale = pathname.split('/')[1];

  const handleLocaleChange = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    startTransition(() => {
      router.replace(newPath);
    });
  };

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 border-b shadow-md bg-background text-foreground">
      <h1 className="text-xl font-extrabold tracking-wide">Task</h1>

      <div className="flex items-center gap-4">
        <button onClick={() => setDrawerOpen(true)} className="relative">
          <Heart className="w-6 h-6 text-red-500" />
          {favoriteCount > 0 && (
            <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
              {favoriteCount}
            </span>
          )}
        </button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label="Toggle Theme"
          className="w-10 h-10 rounded-xl border border-input shadow-sm hover:shadow-md transition-all bg-muted hover:bg-accent"
        >
          {theme === 'dark' ? (
            <Sun className="text-yellow-500" size={22} />
          ) : (
            <Moon className="text-blue-600" size={22} />
          )}
        </Button>

        {locales
          .filter((loc) => loc.code !== currentLocale)
          .map((loc) => (
            <Button
              key={loc.code}
              variant="ghost"
              size="icon"
              onClick={() => handleLocaleChange(loc.code)}
              aria-label={loc.alt}
              className="p-1 hover:scale-110 transition-transform"
            >
              <img
                src={loc.flag}
                alt={loc.alt}
                width={28}
                height={28}
                className="rounded-full border object-cover"
                style={{ aspectRatio: '1 / 1' }}
              />
            </Button>
          ))}
      </div>

      <FavoriteDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        locale={locale}
        products={products}
      />
    </header>
  );
}
