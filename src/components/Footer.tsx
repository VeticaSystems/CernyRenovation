
const Footer = () => (
  <footer className="w-full bg-gradient-to-r from-purple-700 to-green-600 text-white py-8">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-3">
        <img
          src="/lovable-uploads/c57fd54a-9f9f-4ed9-99e3-adc6ef35bdb6.png"
          alt="Cerny Remodeling"
          className="h-10 w-auto filter drop-shadow-lg"
        />
        <span className="text-lg font-semibold tracking-wide">Cerny Remodeling</span>
      </div>
      <div className="text-sm opacity-80 text-center md:text-right">
        &copy; {new Date().getFullYear()} Cerny Remodeling. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
