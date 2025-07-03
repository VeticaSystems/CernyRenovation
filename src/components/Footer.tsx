
import { Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col items-center px-4">
        <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start md:space-x-16 max-w-2xl">
          {/* Contact Us */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h4 className="text-lg font-bold mb-2 text-white">
              Contact Us
            </h4>
            <p className="text-sm mb-1 text-white">
              Phone:{" "}
              <span className="whitespace-nowrap font-semibold text-cerny-orange">
                (651) 278-4835
              </span>
            </p>
            <p className="text-sm break-all text-white">
              Email:{" "}
              <span className="font-semibold text-cerny-orange">
                info@cernyremodeling.com
              </span>
            </p>
          </div>

          {/* Connect & Verify */}
          <div className="text-center flex flex-col items-center">
            <h4 className="text-lg font-bold mb-2 text-white">
              Connect &amp; Verify
            </h4>
            <p className="text-sm font-semibold text-green-400 mb-3">
              Licensed &amp; Insured &#10003;
            </p>
            {/* Social Icons */}
            <div className="flex items-center justify-center gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="transition-transform hover:scale-110 hover:text-cerny-orange text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={24} strokeWidth={2} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="transition-transform hover:scale-110 hover:text-cerny-orange text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 w-full text-center space-y-1">
          <p className="text-sm text-white">
            © 2025 Cerny Remodeling LLC. All rights reserved.
          </p>
          <Link
            to="/survey"
            className="inline-block text-cerny-orange font-semibold underline underline-offset-2 hover:text-cerny-orange-dark transition-colors text-sm"
          >
            Leave Detailed Feedback
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
