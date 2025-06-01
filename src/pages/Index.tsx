
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-montserrat">
      <Header />
      
      <main className="pt-20">
        <HeroCarousel />
        <Services />
        <Portfolio />
        <Testimonials />
        <CTABanner />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
