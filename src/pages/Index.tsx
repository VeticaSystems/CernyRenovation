
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-montserrat bg-gray-50">
      <Header />
      
      <main className="pt-16">
        <HeroCarousel />
        <Services />
        <About />
        <Testimonials />
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
