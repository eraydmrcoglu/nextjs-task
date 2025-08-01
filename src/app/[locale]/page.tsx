import { getTranslations } from 'next-intl/server';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import Promotional from '@/components/Promotional';

export default async function Home() {
  const t = await getTranslations('Home');

  return (
    <main>
      <HeroSection />
      <ProductGrid />
      <Testimonials />
      <Promotional />
      <Footer />
    </main>
  );
}
