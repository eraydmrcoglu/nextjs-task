'use client';

import { useTranslations } from 'next-intl';
import { X } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Promotional() {
  const t = useTranslations('Promotional');

  return (
    <section className="max-w-5xl mx-auto my-12 overflow-hidden rounded-xl border bg-card shadow-lg">
      <div className="grid md:grid-cols-2">
        <div className="relative w-full h-[420px] md:h-[520px]">
          <Image
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/promotional/image.png"
            alt={t('imageAlt')}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative flex flex-col justify-center px-6 py-10 md:p-12 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold leading-snug">
            <span className="text-primary">{t('titleHighlight')}</span> {t('titleRest')}
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base">
            {t('description')}
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Button className="px-6 py-2">
              {t('checkButton')}
            </Button>
            <Button variant="ghost" className="text-sm text-muted-foreground">
              {t('declineButton')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
