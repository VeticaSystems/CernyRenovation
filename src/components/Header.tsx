
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
    <header className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md z-50 overflow-visible">
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-5"
          >
            <img
              src="/lovable-uploads/1fe912af-59c7-4030-b831-43177f765994.png"
              alt="Cerny Remodeling"
              className="h-32 w-auto -my-4 filter drop-shadow-[0_4px_16px_rgba(0,64,0,0.18)]"
            />
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-white/80 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-white/80 transition-colors"
            >
              About Us
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-white hover:text-white/80 transition-colors">
                Services <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-md min-w-[180px]">
                {serviceLinks.map((s) => (
                  <DropdownMenuItem key={s.name} asChild>
                    <Link
                      to={s.href}
                      className="block w-full px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                    >
                      {s.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <a
              href="#featured-projects"
              className="text-white hover:text-white/80 transition-colors"
            >
              Featured Projects
            </a>
            <a
              href="#contact"
              className="text-white hover:text-white/80 transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-2 border-t border-white/20 pt-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-white/80 transition-colors">Home</Link>
              <Link to="/about" className="text-white hover:text-white/80 transition-colors">About Us</Link>
              <div>
                <span className="block text-white mb-2">Services</span>
                <div className="ml-4 flex flex-col space-y-2">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.name}
                      to={s.href}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
              <a href="#featured-projects" className="text-white hover:text-white/80 transition-colors">Featured Projects</a>
              <a href="#contact" className="text-white hover:text-white/80 transition-colors">Contact Us</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
