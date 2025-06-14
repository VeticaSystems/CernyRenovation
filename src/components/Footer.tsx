
const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto flex flex-col items-center px-4">
        <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start md:space-x-24 max-w-3xl">
          {/* Contact Us */}
          <div className="mb-10 md:mb-0 text-center md:text-left">
            <h4 className="text-2xl font-extrabold mb-3 text-white font-montserrat drop-shadow">
              Contact Us
            </h4>
            <p className="text-lg mb-1 font-semibold text-white">
              Phone:{' '}
              <span className="whitespace-nowrap font-bold text-cerny-orange">
                (555) 123-4567
              </span>
            </p>
            <p className="text-lg break-all font-semibold text-white">
              Email:{' '}
              <span className="font-bold text-cerny-orange">
                info@cernyremodeling.com
              </span>
            </p>
          </div>

          {/* Connect & Verify */}
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-extrabold mb-3 text-white font-montserrat drop-shadow">
              Connect &amp; Verify
            </h4>
            <p className="text-lg font-bold text-green-400 drop-shadow-lg tracking-wide">
              Licensed &amp; Insured &#10003;
            </p>
          </div>
        </div>

        <div className="mt-12 w-full text-center">
          <p className="text-base text-white tracking-wide font-semibold">
            © 2025 Cerny Remodeling LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
