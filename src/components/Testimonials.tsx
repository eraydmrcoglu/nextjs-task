'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';

type Locale = 'tr' | 'en';

const testimonials = [
  {
    image:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
    name: 'Briar Martin',
    handle: '@neilstellar',
    date: {
      tr: '20 Nisan 2025',
      en: 'April 20, 2025',
    },
    text: {
      tr: 'Radiant ile rakiplerimizi kolayca geride bırakabildik.',
      en: 'Radiant made undercutting all of our competitors an absolute breeze.',
    },
  },
  {
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
    name: 'Avery Johnson',
    handle: '@averywrites',
    date: {
      tr: '10 Mayıs 2025',
      en: 'May 10, 2025',
    },
    text: {
      tr: 'Kaliteyi ve hızlı teslimatı çok sevdim. Şiddetle tavsiye ederim!',
      en: 'I loved the quality and the fast delivery. Highly recommended!',
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200',
    name: 'Jordan Lee',
    handle: '@jordantalks',
    date: {
      tr: '5 Haziran 2025',
      en: 'June 5, 2025',
    },
    text: {
      tr: 'Beklentilerimin ötesine geçti. Harika bir tasarım!',
      en: 'This product exceeded my expectations. Great design!',
    },
  },
];

function TestimonialCard({
  item,
  locale,
}: {
  item: (typeof testimonials)[0];
  locale: Locale;
}) {
  return (
    <div className="p-4 rounded-xl mx-4 shadow-md hover:shadow-lg transition-all duration-300 w-72 shrink-0 bg-white dark:bg-zinc-900">
      <div className="flex gap-3 items-center mb-3">
        <Image
          src={item.image}
          alt={item.name}
          width={44}
          height={44}
          className="rounded-full object-cover"
        />
        <div>
          <p className="font-medium text-zinc-800 dark:text-white">
            {item.name}
          </p>
          <span className="text-xs text-zinc-500">{item.handle}</span>
        </div>
      </div>
      <p className="text-sm text-zinc-700 dark:text-zinc-300">
        {item.text[locale]}
      </p>
      <div className="text-xs text-zinc-400 mt-4">{item.date[locale]}</div>
    </div>
  );
}

export default function Testimonials() {
  const locale = useLocale() as Locale;

  return (
    <>
      <style>
        {`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee {
          animation: scroll 30s linear infinite;
        }
        .marquee-reverse {
          animation-direction: reverse;
        }
      `}
      </style>

      <section className="py-20 bg-muted">
        <h2 className="text-3xl font-bold text-center mb-10 text-zinc-800 dark:text-white">
          {locale === 'tr' ? 'Müşteri Yorumları' : 'Customer Reviews'}
        </h2>

        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-muted to-transparent z-10"></div>
          <div className="flex w-fit min-w-[200%] space-x-4 marquee">
            {[...testimonials, ...testimonials].map((item, index) => (
              <TestimonialCard key={index} item={item} locale={locale} />
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-muted to-transparent z-10"></div>
        </div>

        <div className="overflow-hidden relative mt-6">
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-muted to-transparent z-10"></div>
          <div className="flex w-fit min-w-[200%] space-x-4 marquee marquee-reverse">
            {[...testimonials, ...testimonials].map((item, index) => (
              <TestimonialCard key={index + 100} item={item} locale={locale} />
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-muted to-transparent z-10"></div>
        </div>
      </section>
    </>
  );
}
