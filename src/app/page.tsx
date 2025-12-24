import Hero from '@/components/Hero';
import LetterCard from '@/components/LetterCard';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <LetterCard />
      <Footer />
    </main>
  );
}
