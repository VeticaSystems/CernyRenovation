
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProcessSection from '../components/ProcessSection';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-montserrat bg-white">
      <Header />
      
      <main>
        <Hero />
        <ProcessSection />
        <Testimonials />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
