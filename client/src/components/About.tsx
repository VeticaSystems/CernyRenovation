
import { Award, Users, Shield, CheckCircle } from 'lucide-react';
import Testimonials from './Testimonials';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section with Gradient Background */}
      <section className="relative bg-gradient-to-br from-purple-600/20 via-orange-500/10 to-white py-20 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-600/20 rounded-full blur-2xl"></div>
        <div className="container max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent font-montserrat mb-6 animate-fade-in">
              About Cerny Remodeling
            </h1>
            <p className="text-xl text-gray-600 font-montserrat max-w-3xl mx-auto leading-relaxed">
              Transforming Northern Virginia homes with expert craftsmanship, innovative design, and unwavering commitment to quality since 2011.
            </p>
          </div>
        </div>
      </section>

      {/* Josef's Profile Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-white via-gray-100 to-purple-600/5 rounded-3xl p-8 md:p-12 shadow-2xl border border-orange-500/20 relative overflow-hidden">
            {/* Accent decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500/30 to-transparent rounded-bl-3xl"></div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
              {/* Photo */}
              <div className="flex-shrink-0 flex justify-center lg:block mb-8 lg:mb-0">
                <div className="w-64 h-80 rounded-2xl overflow-hidden bg-black">
                  <img
                    src="/lovable-uploads/faf81f32-e2b0-43f9-b48b-843f10b994d2.png"
                    alt="Josef Cerny, Founder & Lead Technician"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Bio Content */}
              <div className="lg:flex-1">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-purple-600 font-montserrat mb-2">
                    Josef Cerny
                  </h2>
                  <p className="text-orange-500 font-semibold text-lg mb-4">
                    Founder & Lead Technician
                  </p>
                </div>

                {/* Credentials */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-purple-600/10 px-4 py-2 rounded-full">
                    <Award className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-medium text-purple-600">B.A. Electrical Engineering</span>
                  </div>
                  <div className="flex items-center gap-2 bg-orange-500/10 px-4 py-2 rounded-full">
                    <Shield className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-medium text-orange-500">Certified Mold Remediation</span>
                  </div>
                </div>

                <p className="font-montserrat text-gray-600 leading-relaxed text-lg">
                  Josef brings over six years of specialized experience in remodeling, construction, and electrical systems. With his B.A. in Electrical Engineering from the University of Maryland and certification as a Mold Remediation Technician (IAQA Certificate #00948), Josef's hands-on background spans electrical installation, maintenance, and oversight across residential, commercial, and industrial projects. Fluent in English and Czech, he approaches every home with a deep understanding of how buildings work—ensuring quality from the foundation to the final detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-white to-purple-600/5 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-16 h-16 bg-orange-500 rounded-full"></div>
          <div className="absolute bottom-32 right-32 w-12 h-12 bg-purple-600 rounded-full"></div>
          <div className="absolute top-40 right-20 w-8 h-8 bg-orange-500 rounded-full"></div>
        </div>
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-purple-600 font-montserrat mb-8">
                Our Story
              </h2>
              <div className="space-y-6">
                <p className="text-gray-600 font-montserrat leading-relaxed">
                  Since opening our doors in 2011, Cerny Home Remodeling has transformed over a hundred Northern Virginia residences into spaces our clients truly love. As a fully licensed, bonded, and insured team, we bring peace of mind—and a relentless commitment to quality—to every renovation we undertake.
                </p>
                <p className="text-gray-600 font-montserrat leading-relaxed">
                  Whether you're dreaming of a modern kitchen overhaul, a spa-inspired bathroom retreat, or a complete home refresh, our website makes it easy to get started: book a personalized consultation, explore our comprehensive list of services, and flip through our photo gallery for design inspiration.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600/30 via-orange-500/20 to-purple-600/30 rounded-3xl p-8 text-center shadow-xl border border-orange-500/30 relative overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-500/40 rounded-full blur-sm"></div>
                <Users className="w-16 h-16 text-purple-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-purple-600 font-montserrat mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 font-montserrat leading-relaxed">
                  At Cerny, we believe your home should reflect your lifestyle and aspirations. Let us show you how our expertise, creative vision, and attention to detail can bring your project to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-100/50 to-white relative">
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent"></div>
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-purple-600 font-montserrat mb-16">
            Why Choose Cerny?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-500 text-white rounded-2xl w-20 h-20 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="text-3xl font-bold relative z-10">13+</span>
              </div>
              <h3 className="font-bold text-purple-600 mb-3 text-xl font-montserrat">Years Experience</h3>
              <p className="text-gray-600 font-montserrat">Serving Northern Virginia since 2011 with expertise and dedication</p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-purple-600 via-purple-600/80 to-purple-600 text-white rounded-2xl w-20 h-20 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="text-3xl font-bold relative z-10">100+</span>
              </div>
              <h3 className="font-bold text-purple-600 mb-3 text-xl font-montserrat">Homes Transformed</h3>
              <p className="text-gray-600 font-montserrat">Happy families living in beautiful, functional spaces</p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-orange-500 via-purple-600 to-orange-500 text-white rounded-2xl w-20 h-20 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Shield className="w-8 h-8 relative z-10" />
              </div>
              <h3 className="font-bold text-purple-600 mb-3 text-xl font-montserrat">Licensed & Insured</h3>
              <p className="text-gray-600 font-montserrat">Fully bonded for your complete peace of mind</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-orange-500">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white font-montserrat mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-white/90 font-montserrat text-lg mb-8 leading-relaxed">
            Discover why homeowners across Northern Virginia trust Cerny to make their remodeling dreams a reality.
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold font-montserrat hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Your Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
