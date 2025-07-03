
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-montserrat bg-white">
      <Header />
      
      <main className="pt-14">
        <HeroCarousel />
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
