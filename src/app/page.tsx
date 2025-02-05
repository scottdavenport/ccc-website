import Hero from '@/components/home/Hero';
import SponsorCarousel from '@/components/sponsors/SponsorCarousel';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SponsorCarousel />
    </main>
  );
}
