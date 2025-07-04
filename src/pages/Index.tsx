
import { useState } from "react";
import { Link } from "react-router-dom";
import ProcessSection from '../components/ProcessSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

// Nav items for header
const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Featured Projects", href: "/projects" },
  { name: "Contact Us", href: "/contact" },
];

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-black">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/75 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-24">
          {/* Logo in header only */}
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/efb50f74-e1b0-4253-a619-8ab8490e82e2.png"
              alt="Cerny Remodeling – Insured & Licensed"
              className="h-20 md:h-24 w-auto"
              draggable={false}
            />
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-white text-lg font-medium hover:text-green-300 transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          {/* Mobile Nav */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 text-white"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Open menu"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <rect y="5" width="24" height="2" rx="1" fill="currentColor" />
              <rect y="11" width="24" height="2" rx="1" fill="currentColor" />
              <rect y="17" width="24" height="2" rx="1" fill="currentColor" />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden bg-black/90 py-6 px-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-3 text-white text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen flex items-center justify-center">
        {/* Bright, uncropped house image - hero */}
        <img
          src="/lovable-uploads/cerny-hero-FULL-bright.png"
          alt="Beautiful home entrance"
          className="absolute inset-0 w-full h-full object-contain bg-black"
          style={{
            objectPosition: "center center",
            zIndex: 0,
          }}
          draggable={false}
        />
      </section>

      {/* REST OF PAGE SECTIONS */}
      <main>
        <ProcessSection />
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
