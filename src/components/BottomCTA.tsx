
import { Phone } from 'lucide-react';

const BottomCTA = () => {
  return (
    <div className="text-center mt-12">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold mb-2 text-cerny-navy">
          Need to speak with someone right away?
        </h3>
        <p className="text-gray-600 mb-4">
          Call us now for immediate assistance and to schedule your free consultation
        </p>
        <a 
          href="tel:5551234567"
          className="inline-flex items-center bg-cerny-orange hover:bg-cerny-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          <Phone className="w-5 h-5 mr-2" />
          Call (555) 123-4567
        </a>
      </div>
    </div>
  );
};

export default BottomCTA;
