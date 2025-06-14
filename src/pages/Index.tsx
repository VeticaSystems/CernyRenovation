
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import Services from '../components/Services';
import About from '../components/About';
// Removed Portfolio import
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-montserrat">
      <Header />
      
      <main className="pt-20">
        <HeroCarousel />
        <Services />
        <About />
        {/* Portfolio section removed */}
        <Testimonials />
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

