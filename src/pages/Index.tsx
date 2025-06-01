
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import Services from '../components/Services';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-montserrat">
      <Header />
      
      <main className="pt-20">
        <HeroCarousel />
        <Services />
        <About />
        <Portfolio />
        <Testimonials />
        <ContactForm />
        <CTABanner />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
