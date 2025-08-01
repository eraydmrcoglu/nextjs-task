export type Locale = 'tr' | 'en';

type Product = {
  id: number;
  image: string;
  translations: Record<Locale, { name: string; description: string }>;
  price: number;
  currency: 'TRY' | 'GBP';
};

export const products: Product[] = [
  {
    id: 1,
    image: '/images/product1.jpg',
    translations: {
      tr: {
        name: 'Ahşap Takı Kutusu',
        description: 'El yapımı, doğal ahşap takı kutusu.',
      },
      en: {
        name: 'Wooden Jewelry Box',
        description: 'Handcrafted wooden jewelry box.',
      },
    },
    price: 250,
    currency: 'TRY',
  },
  {
    id: 2,
    image: '/images/product2.jpg',
    translations: {
      tr: {
        name: 'Minimalist Poster',
        description: 'Modern minimalist duvar posteri.',
      },
      en: {
        name: 'Minimalist Poster',
        description: 'Modern minimalist wall art.',
      },
    },
    price: 30,
    currency: 'GBP',
  },
  {
    id: 3,
    image: '/images/product3.jpg',
    translations: {
      tr: {
        name: 'Dekoratif Mum',
        description: 'El yapımı soya wax dekoratif mum.',
      },
      en: {
        name: 'Decorative Candle',
        description: 'Handmade soy wax decorative candle.',
      },
    },
    price: 180,
    currency: 'TRY',
  },
  {
    id: 4,
    image: '/images/product4.jpg',
    translations: {
      tr: {
        name: 'Vintage Defter',
        description: 'Kraft kapaklı, elde dikilmiş vintage defter.',
      },
      en: {
        name: 'Vintage Notebook',
        description: 'Kraft cover, hand-stitched vintage notebook.',
      },
    },
    price: 22,
    currency: 'GBP',
  },
  {
    id: 5,
    image: '/images/product5.jpg',
    translations: {
      tr: {
        name: 'El Yapımı Magnet',
        description: 'Buzdolabı için renkli el yapımı magnet.',
      },
      en: {
        name: 'Handmade Magnet',
        description: 'Colorful handmade fridge magnet.',
      },
    },
    price: 75,
    currency: 'TRY',
  },
  {
    id: 6,
    image: '/images/product6.jpg',
    translations: {
      tr: {
        name: 'Seramik Vazo',
        description: 'El yapımı seramik dekoratif vazo.',
      },
      en: {
        name: 'Ceramic Vase',
        description: 'Handmade decorative ceramic vase.',
      },
    },
    price: 45,
    currency: 'GBP',
  },
];
