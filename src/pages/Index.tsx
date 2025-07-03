
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProcessSection from '../components/ProcessSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-montserrat bg-white">
      <Header />
      
      <main>
        <Hero />
        <ProcessSection />
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
