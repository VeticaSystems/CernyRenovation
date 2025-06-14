
import { Shield } from 'lucide-react';

const TrustIndicators = () => {
  return (
    <div className="space-y-6">
      {/* Trust Badges */}
      <div className="bg-gradient-to-r from-cerny-orange/10 to-cerny-navy/10 p-4 rounded-lg">
        <h3 className="font-semibold text-light-purple mb-3 flex items-center">
          <Shield className="w-5 h-5 mr-2 text-cerny-orange" />
          Why Choose Cerny?
        </h3>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-cerny-orange rounded-full mr-2"></div>
            <span className="text-tenorite">Licensed & Insured</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-cerny-orange rounded-full mr-2"></div>
            <span className="text-tenorite">13+ Years Experience</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-cerny-orange rounded-full mr-2"></div>
            <span className="text-tenorite">100+ Happy Clients</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-cerny-orange rounded-full mr-2"></div>
            <span className="text-tenorite">Free Consultations</span>
          </div>
        </div>
      </div>
      {/* Awards section has been removed as requested */}
    </div>
  );
};

export default TrustIndicators;
