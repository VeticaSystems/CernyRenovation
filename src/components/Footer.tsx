
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-16">
      <div className="container mx-auto flex flex-col items-center px-4">
        <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start md:space-x-24 max-w-3xl">
          {/* Contact Us */}
          <div className="mb-10 md:mb-0 text-center md:text-left">
            <h4 className="text-2xl font-semibold mb-3 text-white font-montserrat">Contact Us</h4>
            <p className="text-lg text-gray-300 mb-1">
              Phone: <span className="whitespace-nowrap">(555) 123-4567</span>
            </p>
            <p className="text-lg text-gray-300 break-all">
              Email: info@cernyremodeling.com
            </p>
          </div>

          {/* Connect & Verify */}
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-semibold mb-3 text-white font-montserrat">
              Connect &amp; Verify
            </h4>
            <p className="text-lg text-green-400 font-medium whitespace-nowrap">
              Licensed &amp; Insured &#10003;
            </p>
          </div>
        </div>

        <div className="mt-12 w-full text-center">
          <p className="text-base text-gray-400 tracking-wide">
            © 2025 Cerny Remodeling LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

