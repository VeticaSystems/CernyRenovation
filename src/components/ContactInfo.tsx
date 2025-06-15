import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
      <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-light-purple">Contact Information</h3>
      <div className="space-y-4">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="bg-cerny-orange text-white rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <p className="font-semibold text-light-purple">Call Now</p>
            <a href="tel:6512784835" className="text-cerny-orange hover:underline text-sm sm:text-base">
              (651) 278-4835
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="bg-cerny-orange text-white rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <p className="font-semibold text-light-purple">Email Us</p>
            <a href="mailto:info@cernyremodeling.com" className="text-cerny-orange hover:underline text-sm sm:text-base">
              info@cernyremodeling.com
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="bg-cerny-orange text-white rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <p className="font-semibold text-light-purple">Service Area</p>
            <p className="text-tenorite text-sm sm:text-base">Northern Virginia</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="bg-cerny-orange text-white rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <p className="font-semibold text-light-purple">Business Hours</p>
            <p className="text-tenorite text-sm sm:text-base">Mon-Fri: 8AM-6PM</p>
            <p className="text-tenorite text-sm sm:text-base">Sat: 9AM-4PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
