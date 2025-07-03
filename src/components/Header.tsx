
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
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 border-b border-gray-100">
      <div className="container max-w-7xl mx-auto px-6">
        <nav className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <img 
              src="/lovable-uploads/b9583cff-a331-4a7d-b6c4-04b100bb437a.png" 
              alt="Cerny Remodeling Logo" 
              className="h-7 w-auto"
            />
            <span className="text-lg font-medium text-gray-800">
              Cerny Remodeling
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About Us
            </Link>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
                Services
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg z-50 rounded-md min-w-[180px]">
                {serviceLinks.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link 
                      to={service.href} 
                      className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors px-4 py-2 cursor-pointer block w-full"
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <a href="#featured-projects" className="text-gray-700 hover:text-blue-600 transition-colors">
              Featured Projects
            </a>
            
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-800 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About Us
              </Link>
              
              {/* Mobile Services Menu */}
              <div className="flex flex-col">
                <span className="text-gray-700 mb-2">Services</span>
                <div className="flex flex-col space-y-2 ml-4">
                  {serviceLinks.map((service) => (
                    <Link 
                      key={service.name}
                      to={service.href} 
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <a href="#featured-projects" className="text-gray-700 hover:text-blue-600 transition-colors">
                Featured Projects
              </a>
              
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
