
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
    <header className="fixed top-0 left-0 w-full bg-gray-50 backdrop-blur-sm shadow-sm z-50 border-b border-gray-200">
      <div className="container max-w-6xl mx-auto px-6">
        <nav className="flex justify-between items-center py-3">
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <img 
              src="/lovable-uploads/e60193fb-5df7-49a0-bdbf-0c7a1f6126b2.png" 
              alt="Cerny Remodeling Logo" 
              className="h-8 w-auto transition-transform group-hover:scale-105"
            />
            <div className="text-xl font-bold text-gray-900 font-montserrat group-hover:text-gray-700 transition-colors">
              Cerny Remodeling
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="font-semibold text-gray-900 hover:text-gray-600 transition-colors text-sm">
              Home
            </a>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="font-semibold text-gray-900 hover:text-gray-600 transition-colors flex items-center gap-1 text-sm">
                Services
                <ChevronDown size={14} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg z-50">
                {serviceLinks.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link 
                      to={service.href} 
                      className="font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-50 transition-colors px-3 py-2 cursor-pointer text-sm"
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <a href="#about" className="font-semibold text-gray-900 hover:text-gray-600 transition-colors text-sm">
              About
            </a>
            <a href="#contact" className="font-semibold text-gray-900 hover:text-gray-600 transition-colors text-sm">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 mt-2 pt-4">
            <div className="flex flex-col gap-4">
              <a href="#" className="font-semibold text-gray-900 hover:text-gray-600 transition-colors text-sm">
                Home
              </a>
              
              {/* Mobile Services Menu */}
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900 mb-2 text-sm">Services</span>
                <div className="flex flex-col gap-2 ml-4">
                  {serviceLinks.map((service) => (
                    <Link 
                      key={service.name}
                      to={service.href} 
                      className="font-medium text-gray-700 hover:text-gray-600 transition-colors text-sm"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <a href="#about" className="font-semibold text-gray-900 hover:text-gray-600 transition-colors text-sm">
                About
              </a>
              <a href="#contact" className="font-semibold text-gray-900 hover:text-gray-600 transition-colors text-sm">
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
