
import { Star, Shield, Award, Users } from 'lucide-react';

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

      {/* Social Proof */}
      <div className="text-center p-4 bg-gray-50 rounded-lg">
        <div className="flex justify-center items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="ml-2 text-sm font-semibold text-tenorite">4.9/5</span>
        </div>
        <p className="text-sm text-tenorite">Based on 50+ verified reviews</p>
      </div>

      {/* Urgency Element */}
      <div className="bg-cerny-orange/10 border border-cerny-orange/20 p-4 rounded-lg">
        <div className="flex items-center mb-2">
          <Users className="w-5 h-5 text-cerny-orange mr-2" />
          <span className="font-semibold text-light-purple">Limited Availability</span>
        </div>
        <p className="text-sm text-tenorite">
          Only 3 consultation slots available this month. Book your free quote today!
        </p>
      </div>

      {/* Awards */}
      <div className="text-center">
        <div className="flex justify-center items-center mb-2">
          <Award className="w-5 h-5 text-cerny-orange mr-2" />
          <span className="font-semibold text-light-purple">Award-Winning Team</span>
        </div>
        <p className="text-sm text-tenorite">Northern Virginia's Top Remodeling Company 2023</p>
      </div>
    </div>
  );
};

export default TrustIndicators;
