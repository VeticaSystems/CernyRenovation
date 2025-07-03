
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import ProcessSection from '../components/ProcessSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-montserrat bg-white">
      <Header />
      
      <main>
        <HeroCarousel />
        <ProcessSection />
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
