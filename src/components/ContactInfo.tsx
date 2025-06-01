
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-light-purple">Contact Information</h3>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="bg-cerny-orange text-white rounded-full w-10 h-10 flex items-center justify-center">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <p className="font-semibold text-light-purple">Call Now</p>
            <a href="tel:5551234567" className="text-cerny-orange hover:underline">
              (555) 123-4567
            </a>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="bg-cerny-orange text-white rounded-full w-10 h-10 flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <p className="font-semibold text-light-purple">Email Us</p>
            <a href="mailto:info@cernyremodeling.com" className="text-cerny-orange hover:underline">
              info@cernyremodeling.com
            </a>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="bg-cerny-orange text-white rounded-full w-10 h-10 flex items-center justify-center">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <p className="font-semibold text-light-purple">Service Area</p>
            <p className="text-tenorite">Northern Virginia</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="bg-cerny-orange text-white rounded-full w-10 h-10 flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <p className="font-semibold text-light-purple">Business Hours</p>
            <p className="text-tenorite">Mon-Fri: 8AM-6PM</p>
            <p className="text-tenorite">Sat: 9AM-4PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
