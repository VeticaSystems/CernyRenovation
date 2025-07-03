
import { MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-6">      
      <div className="flex items-center space-x-4">
        <div className="bg-yellow-400 text-slate-800 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
          <MapPin className="w-6 h-6" />
        </div>
        <div>
          <p className="font-semibold text-white text-lg">Service Area</p>
          <p className="text-blue-100 text-lg">Northern VA and DC</p>
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
