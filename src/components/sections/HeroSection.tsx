'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  const t = useTranslations('Hero');

  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://cdn.pixabay.com/photo/2021/11/22/20/20/online-6817350_1280.jpg"
          alt="Product background"
          fill
          style={{ objectFit: 'cover', opacity: 0.8 }}
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="text-center px-4 max-w-3xl">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('title')}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-6 text-white/90 drop-shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {t('subtitle')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Button
            size="lg"
            variant="default"
            className="bg-white text-black hover:bg-gray-100"
          >
            {t('cta')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
