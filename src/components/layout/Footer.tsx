'use client';

import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="w-full border-t bg-background text-foreground py-10">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 text-center">
        <div className="text-lg font-semibold tracking-wide">Task</div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Task — {t('allRightsReserved')}
        </p>

        <div className="flex items-center justify-center gap-5 mt-2">
          <Link href="https://facebook.com" target="_blank">
            <Facebook className="h-5 w-5 hover:text-primary transition" />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <Instagram className="h-5 w-5 hover:text-primary transition" />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <Twitter className="h-5 w-5 hover:text-primary transition" />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <Linkedin className="h-5 w-5 hover:text-primary transition" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
