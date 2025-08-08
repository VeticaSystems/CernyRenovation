
import { Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-cerny-navy text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-8">
        {/* Brand/Logo */}
        <div className="text-3xl font-extrabold tracking-tight mb-4 md:mb-0">
          Cerny Remodeling
        </div>
        
        {/* Navigation Links */}
        <nav className="flex flex-wrap gap-8 text-lg font-semibold">
          <Link to="/" className="hover:text-cerny-orange transition-colors">Home</Link>
          <Link to="/about" className="hover:text-cerny-orange transition-colors">About</Link>
          <a href="#contact" className="hover:text-cerny-orange transition-colors">Services</a>
          <a href="#contact" className="hover:text-cerny-orange transition-colors">Contact</a>
        </nav>
      </div>
      
      {/* Divider */}
      <div className="border-t border-white/20 my-8" />
      
      {/* Contact Info, Legal + Socials */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between items-center gap-6">
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row gap-6 text-sm">
          <div className="text-center sm:text-left">
            <span className="text-white/80">Phone: </span>
            <span className="font-semibold text-orange-400">703.861.7039</span>
          </div>
          <div className="text-center sm:text-left">
            <span className="text-white/80">Email: </span>
            <span className="font-semibold text-orange-400">info@cernyremodeling.com</span>
          </div>
          <div className="text-center sm:text-left">
            <span className="font-semibold text-green-400">Licensed - Bonded - Insured</span>
          </div>
        </div>
        
        {/* Legal + Socials */}
        <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-white/60">
          <div>&copy; 2013 Cerny Home Remodeling LLC</div>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="transition-colors hover:text-cerny-orange"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={20} strokeWidth={2} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="transition-colors hover:text-cerny-orange"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
