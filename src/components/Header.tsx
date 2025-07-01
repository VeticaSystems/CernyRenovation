
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const serviceLinks = [
    { name: 'Kitchen', href: '/services/kitchen' },
    { name: 'Bathroom', href: '/services/bathroom' },
    { name: 'Basements', href: '/services/basements' },
    { name: 'Additions', href: '/services/additions' },
    { name: 'Interior Design', href: '/services/interior-design' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/98 backdrop-blur-sm shadow-md z-50">
      <div className="container max-w-6xl mx-auto px-4">
        <nav className="flex justify-between items-center py-2">
          <Link to="/" className="flex flex-col items-center group cursor-pointer">
            <img 
              src="/lovable-uploads/e60193fb-5df7-49a0-bdbf-0c7a1f6126b2.png" 
              alt="Cerny Remodeling Logo" 
              className="h-10 w-auto mb-1 transition-transform group-hover:scale-105"
            />
            <div className="text-lg font-bold text-light-purple font-montserrat group-hover:text-purple-800 transition-colors">
              Cerny Remodeling
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="font-semibold text-tenorite hover:text-light-purple transition-colors">
              Home
            </a>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="font-semibold text-tenorite hover:text-light-purple transition-colors flex items-center gap-1">
                Services
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg">
                {serviceLinks.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link 
                      to={service.href} 
                      className="font-medium text-tenorite hover:text-light-purple hover:bg-gray-50 transition-colors px-3 py-2 cursor-pointer"
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <a href="#portfolio" className="font-semibold text-tenorite hover:text-light-purple transition-colors">
              Portfolio
            </a>
            <a href="#about" className="font-semibold text-tenorite hover:text-light-purple transition-colors">
              About
            </a>
            <a href="#contact" className="font-semibold text-tenorite hover:text-light-purple transition-colors">
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
          <div className="md:hidden pb-3">
            <div className="flex flex-col gap-3">
              <a href="#" className="font-semibold text-tenorite hover:text-light-purple transition-colors">
                Home
              </a>
              
              {/* Mobile Services Menu */}
              <div className="flex flex-col">
                <span className="font-semibold text-tenorite mb-2">Services</span>
                <div className="flex flex-col gap-2 ml-4">
                  {serviceLinks.map((service) => (
                    <Link 
                      key={service.name}
                      to={service.href} 
                      className="font-medium text-tenorite hover:text-light-purple transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <a href="#portfolio" className="font-semibold text-tenorite hover:text-light-purple transition-colors">
                Portfolio
              </a>
              <a href="#about" className="font-semibold text-tenorite hover:text-light-purple transition-colors">
                About
              </a>
              <a href="#contact" className="font-semibold text-tenorite hover:text-light-purple transition-colors">
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
