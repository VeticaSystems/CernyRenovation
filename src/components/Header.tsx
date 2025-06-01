
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="container max-w-6xl mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <div className="flex flex-col items-center">
            <img 
              src="/lovable-uploads/e60193fb-5df7-49a0-bdbf-0c7a1f6126b2.png" 
              alt="Cerny Remodeling Logo" 
              className="h-12 w-auto mb-1"
            />
            <div className="text-xl font-bold text-cerny-navy font-montserrat">
              Cerny Remodeling
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="font-semibold text-gray-700 hover:text-cerny-navy transition-colors">
              Home
            </a>
            <a href="#services" className="font-semibold text-gray-700 hover:text-cerny-navy transition-colors">
              Services
            </a>
            <a href="#portfolio" className="font-semibold text-gray-700 hover:text-cerny-navy transition-colors">
              Portfolio
            </a>
            <a href="#about" className="font-semibold text-gray-700 hover:text-cerny-navy transition-colors">
              About
            </a>
            <a href="#contact" className="font-semibold text-gray-700 hover:text-cerny-navy transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-4">
              <a href="#" className="font-semibold text-gray-700 hover:text-cerny-navy transition-colors">
                Home
              </a>
              <a href="#services" className="font-semibold text-gray-700 hover:text-cerny-navy transition-colors">
                Services
              </a>
              <a href="#portfolio" className="font-semibold text-gray-700 hover:text-cerny-navy transition-colors">
                Portfolio
              </a>
              <a href="#about" className="font-semibold text-gray-700 hover:text-cerny-navy transition-colors">
                About
              </a>
              <a href="#contact" className="font-semibold text-gray-700 hover:text-cerny-navy transition-colors">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
