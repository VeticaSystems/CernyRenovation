
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
    <header className="fixed top-0 left-0 w-full bg-white backdrop-blur-sm shadow-lg z-50 border-b border-gray-100">
      <div className="container max-w-6xl mx-auto px-6">
        <nav className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <img 
              src="/lovable-uploads/e60193fb-5df7-49a0-bdbf-0c7a1f6126b2.png" 
              alt="Cerny Remodeling Logo" 
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />
            <div className="text-2xl font-bold text-slate-800 font-montserrat group-hover:text-blue-600 transition-colors">
              Cerny Remodeling
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="font-semibold text-slate-700 hover:text-blue-600 transition-colors text-sm uppercase tracking-wide">
              Home
            </a>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="font-semibold text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1 text-sm uppercase tracking-wide">
                Services
                <ChevronDown size={14} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-xl z-50 rounded-lg">
                {serviceLinks.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link 
                      to={service.href} 
                      className="font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors px-4 py-3 cursor-pointer text-sm"
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <a href="#featured-projects" className="font-semibold text-slate-700 hover:text-blue-600 transition-colors text-sm uppercase tracking-wide">
              Featured Projects
            </a>
            <a href="#about" className="font-semibold text-slate-700 hover:text-blue-600 transition-colors text-sm uppercase tracking-wide">
              About
            </a>
            <a href="#contact" className="font-semibold text-slate-700 hover:text-blue-600 transition-colors text-sm uppercase tracking-wide">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-2 pt-4">
            <div className="flex flex-col gap-4">
              <a href="#" className="font-semibold text-slate-700 hover:text-blue-600 transition-colors text-sm uppercase tracking-wide">
                Home
              </a>
              
              {/* Mobile Services Menu */}
              <div className="flex flex-col">
                <span className="font-semibold text-slate-700 mb-2 text-sm uppercase tracking-wide">Services</span>
                <div className="flex flex-col gap-2 ml-4">
                  {serviceLinks.map((service) => (
                    <Link 
                      key={service.name}
                      to={service.href} 
                      className="font-medium text-slate-600 hover:text-blue-600 transition-colors text-sm"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <a href="#featured-projects" className="font-semibold text-slate-700 hover:text-blue-600 transition-colors text-sm uppercase tracking-wide">
                Featured Projects
              </a>
              <a href="#about" className="font-semibold text-slate-700 hover:text-blue-600 transition-colors text-sm uppercase tracking-wide">
                About
              </a>
              <a href="#contact" className="font-semibold text-slate-700 hover:text-blue-600 transition-colors text-sm uppercase tracking-wide">
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
