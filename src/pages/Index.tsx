
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import FeedbackFishWidget from '../components/FeedbackFishWidget';

const Index = () => {
  return (
    <div className="min-h-screen font-montserrat">
      <Header />
      
      <main className="pt-20">
        <HeroCarousel />
        <Services />
        <About />
        <Testimonials />
        <ContactForm />
      </main>
      
      <Footer />
      <FeedbackFishWidget />
    </div>
  );
};

export default Index;
