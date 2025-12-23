import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { ImageCarousel } from '@/components/image-carousel';
import { WhyChooseMe } from '@/components/why-choose-me';
import { StatsSection } from '@/components/stats-section';
import { StructuredData } from '@/components/structured-data';

export default function Home() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <StatsSection />
        <WhyChooseMe />
        <ImageCarousel />
      </main>
      <Footer />
    </>
  );
}
