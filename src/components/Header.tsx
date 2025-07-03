
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
    <header className="fixed top-0 left-0 w-full bg-white/60 backdrop-blur-lg z-50 shadow-md">
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/c57fd54a-9f9f-4ed9-99e3-adc6ef35bdb6.png"
              alt="Cerny Remodeling"
              className="h-24 w-auto filter drop-shadow-[0_4px_24px_rgba(0,128,64,0.22)]"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-10">
            <Link to="/" className="text-lg text-gray-800 hover:text-purple-700 transition">
              Home
            </Link>
            <Link to="/about" className="text-lg text-gray-800 hover:text-purple-700 transition">
              About Us
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-lg text-gray-800 hover:text-purple-700 transition">
                Services <ChevronDown size={18} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-lg min-w-[180px]">
                {serviceLinks.map((s) => (
                  <DropdownMenuItem key={s.name} asChild>
                    <Link
                      to={s.href}
                      className="block w-full px-4 py-2 text-gray-700 hover:text-purple-700 hover:bg-gray-50 transition"
                    >
                      {s.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="#featured-projects" className="text-lg text-gray-800 hover:text-purple-700 transition">
              Projects
            </a>
            <a href="#contact" className="text-lg text-gray-800 hover:text-purple-700 transition">
              Contact
            </a>
          </div>

          <button
            className="lg:hidden text-gray-800 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-2 border-t border-gray-200 pt-4 bg-white/95 rounded-b-xl shadow-xl">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-lg text-gray-800 hover:text-purple-700 transition">Home</Link>
              <Link to="/about" className="text-lg text-gray-800 hover:text-purple-700 transition">About Us</Link>
              <div>
                <span className="block text-gray-700 mb-2">Services</span>
                <div className="ml-4 flex flex-col space-y-2">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.name}
                      to={s.href}
                      className="text-gray-600 hover:text-purple-700 transition"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
              <a href="#featured-projects" className="text-lg text-gray-800 hover:text-purple-700 transition">Projects</a>
              <a href="#contact" className="text-lg text-gray-800 hover:text-purple-700 transition">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
