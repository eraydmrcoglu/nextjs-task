import Footer from '@/components/layout/Footer';
import ProductGrid from '@/components/products/ProductGrid';
import HeroSection from '@/components/sections/HeroSection';
import Promotional from '@/components/sections/Promotional';
import Testimonials from '@/components/sections/Testimonials';
import {getTranslations} from 'next-intl/server';
 
export default async function HomePage() {
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