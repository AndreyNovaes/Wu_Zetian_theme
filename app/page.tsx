import Hero from './components/Hero';
import TimelineSection from './components/TimelineSection';
import AchievementsSection from './components/AchievementsSection';
import ImageGallery from './components/ImageGallery';
import LegacySection from './components/LegacySection';
import Footer from './components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TimelineSection />
      <AchievementsSection />
      <ImageGallery />
      <LegacySection />
      <Footer />
    </main>
  );
}
