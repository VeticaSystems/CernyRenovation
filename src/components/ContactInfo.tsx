
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="bg-yellow-400 text-slate-800 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
          <Phone className="w-6 h-6" />
        </div>
        <div>
          <p className="font-semibold text-white text-lg">Call Now</p>
          <a href="tel:6512784835" className="text-yellow-400 hover:text-yellow-300 transition-colors text-lg font-medium">
            (651) 278-4835
          </a>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="bg-yellow-400 text-slate-800 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
          <Mail className="w-6 h-6" />
        </div>
        <div>
          <p className="font-semibold text-white text-lg">Email Us</p>
          <a href="mailto:info@cernyremodeling.com" className="text-yellow-400 hover:text-yellow-300 transition-colors text-lg font-medium">
            info@cernyremodeling.com
          </a>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="bg-yellow-400 text-slate-800 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
          <MapPin className="w-6 h-6" />
        </div>
        <div>
          <p className="font-semibold text-white text-lg">Service Area</p>
          <p className="text-blue-100 text-lg">Northern Virginia</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="bg-yellow-400 text-slate-800 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
          <Clock className="w-6 h-6" />
        </div>
        <div>
          <p className="font-semibold text-white text-lg">Business Hours</p>
          <p className="text-blue-100">Mon-Fri: 8AM-6PM</p>
          <p className="text-blue-100">Sat: 9AM-4PM</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
