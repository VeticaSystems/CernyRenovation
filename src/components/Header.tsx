
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
    <header className="fixed top-0 left-0 w-full bg-white/60 backdrop-blur-md z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3"
          >
            <img
              src="/lovable-uploads/41ee2dcb-962e-4495-8167-791b4e2f8fd9.png"
              alt="Cerny Remodeling"
              className="h-12 w-auto filter drop-shadow-lg"
            />
            <span className="text-xl font-semibold text-gray-900">
              Cerny Remodeling
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              About Us
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors">
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
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Featured Projects
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-gray-800 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-2 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-gray-900 transition-colors">About Us</Link>
              <div>
                <span className="block text-gray-700 mb-2">Services</span>
                <div className="ml-4 flex flex-col space-y-2">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.name}
                      to={s.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
              <a href="#featured-projects" className="text-gray-700 hover:text-gray-900 transition-colors">Featured Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">Contact Us</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
