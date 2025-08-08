
import { Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="text-center lg:text-left">
            <div className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
              Cerny Home Remodeling
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Transforming Northern Virginia homes with expert craftsmanship since 2013
            </p>
          </div>

          {/* Contact Information */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-bold mb-6 text-orange-400">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="text-gray-300">Phone:</span>
                <a href="tel:703.861.7039" className="font-semibold text-orange-400 hover:text-orange-300 transition-colors">
                  703.861.7039
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="text-gray-300">Email:</span>
                <a href="mailto:info@cernyremodeling.com" className="font-semibold text-orange-400 hover:text-orange-300 transition-colors">
                  info@cernyremodeling.com
                </a>
              </div>
            </div>
          </div>

          {/* Navigation & Credentials */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-bold mb-6 text-orange-400">Quick Links</h3>
            <nav className="space-y-3 mb-6">
              <div><Link to="/" className="text-gray-300 hover:text-orange-400 transition-colors">Home</Link></div>
              <div><Link to="/about" className="text-gray-300 hover:text-orange-400 transition-colors">About Us</Link></div>
              <div><a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors">Services</a></div>
              <div><a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors">Contact</a></div>
            </nav>
            
            {/* Credentials Badge */}
            <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-4">
              <div className="font-bold text-green-400 text-center">
                Licensed • Bonded • Insured
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-gray-400 text-center sm:text-left">
              © 2013 Cerny Home Remodeling LLC. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="bg-gray-700 hover:bg-orange-500 p-3 rounded-full transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={18} strokeWidth={2} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="bg-gray-700 hover:bg-orange-500 p-3 rounded-full transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
