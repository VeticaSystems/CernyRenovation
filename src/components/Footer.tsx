
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cerny-orange font-montserrat">
              Contact Us
            </h4>
            <ul className="space-y-2">
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@cernyremodeling.com</li>
              <li>Address: 123 Main St, Anytown, USA</li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cerny-orange font-montserrat">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cerny-orange font-montserrat">
              Our Services
            </h4>
            <ul className="space-y-2">
              <li><a href="#kitchen" className="hover:text-white transition-colors">Kitchen Remodeling</a></li>
              <li><a href="#bathroom" className="hover:text-white transition-colors">Bathroom Remodel</a></li>
              <li><a href="#additions" className="hover:text-white transition-colors">Home Additions</a></li>
              <li><a href="#outdoor" className="hover:text-white transition-colors">Outdoor Living</a></li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cerny-orange font-montserrat">
              Connect & Verify
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Houzz</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><span className="text-green-400">Licensed & Insured ✓</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm">
            © 2025 Cerny Remodeling LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
