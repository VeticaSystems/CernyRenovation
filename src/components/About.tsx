
import { Award, Users, Shield, CheckCircle } from 'lucide-react';
import Testimonials from './Testimonials';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section with Gradient Background */}
      <section className="relative bg-gradient-to-br from-light-purple/10 via-white to-cerny-orange/5 py-20">
        <div className="container max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-light-purple font-montserrat mb-6 animate-fade-in">
              About Cerny Remodeling
            </h1>
            <p className="text-xl text-tenorite font-montserrat max-w-3xl mx-auto leading-relaxed">
              Transforming Northern Virginia homes with expert craftsmanship, innovative design, and unwavering commitment to quality since 2011.
            </p>
          </div>
        </div>
      </section>

      {/* Josef's Profile Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-white to-cerny-light-gray rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
              {/* Photo */}
              <div className="flex-shrink-0 flex justify-center lg:block mb-8 lg:mb-0">
                <div className="w-64 h-80 rounded-2xl overflow-hidden bg-black">
                  <img
                    src="/lovable-uploads/4eb5d1b7-5c12-4617-95b8-73cf65f4e36b.png"
                    alt="Josef Cerny, Founder & Lead Technician"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Bio Content */}
              <div className="lg:flex-1">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-light-purple font-montserrat mb-2">
                    Josef Cerny
                  </h2>
                  <p className="text-cerny-orange font-semibold text-lg mb-4">
                    Founder & Lead Technician
                  </p>
                </div>

                {/* Credentials */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-light-purple/10 px-4 py-2 rounded-full">
                    <Award className="w-4 h-4 text-light-purple" />
                    <span className="text-sm font-medium text-light-purple">B.A. Electrical Engineering</span>
                  </div>
                  <div className="flex items-center gap-2 bg-cerny-orange/10 px-4 py-2 rounded-full">
                    <Shield className="w-4 h-4 text-cerny-orange" />
                    <span className="text-sm font-medium text-cerny-orange">Certified Mold Remediation</span>
                  </div>
                </div>

                <p className="font-montserrat text-tenorite leading-relaxed text-lg">
                  Josef brings over six years of specialized experience in remodeling, construction, and electrical systems. With his B.A. in Electrical Engineering from the University of Maryland and certification as a Mold Remediation Technician (IAQA Certificate #00948), Josef's hands-on background spans electrical installation, maintenance, and oversight across residential, commercial, and industrial projects. Fluent in English and Czech, he approaches every home with a deep understanding of how buildings work—ensuring quality from the foundation to the final detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-gradient-to-br from-cerny-light-gray to-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-light-purple font-montserrat mb-8">
                Our Story
              </h2>
              <div className="space-y-6">
                <p className="text-tenorite font-montserrat leading-relaxed">
                  Since opening our doors in 2011, Cerny Home Remodeling has transformed over a hundred Northern Virginia residences into spaces our clients truly love. As a fully licensed, bonded, and insured team, we bring peace of mind—and a relentless commitment to quality—to every renovation we undertake.
                </p>
                <p className="text-tenorite font-montserrat leading-relaxed">
                  Whether you're dreaming of a modern kitchen overhaul, a spa-inspired bathroom retreat, or a complete home refresh, our website makes it easy to get started: book a personalized consultation, explore our comprehensive list of services, and flip through our photo gallery for design inspiration.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-light-purple/20 to-cerny-orange/20 rounded-3xl p-8 text-center">
                <Users className="w-16 h-16 text-light-purple mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-light-purple font-montserrat mb-4">
                  Our Mission
                </h3>
                <p className="text-tenorite font-montserrat leading-relaxed">
                  At Cerny, we believe your home should reflect your lifestyle and aspirations. Let us show you how our expertise, creative vision, and attention to detail can bring your project to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-light-purple font-montserrat mb-16">
            Why Choose Cerny?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-cerny-orange to-cerny-orange-dark text-white rounded-2xl w-20 h-20 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow mb-6">
                <span className="text-3xl font-bold">13+</span>
              </div>
              <h3 className="font-bold text-light-purple mb-3 text-xl font-montserrat">Years Experience</h3>
              <p className="text-tenorite font-montserrat">Serving Northern Virginia since 2011 with expertise and dedication</p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-cerny-orange to-cerny-orange-dark text-white rounded-2xl w-20 h-20 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow mb-6">
                <span className="text-3xl font-bold">100+</span>
              </div>
              <h3 className="font-bold text-light-purple mb-3 text-xl font-montserrat">Homes Transformed</h3>
              <p className="text-tenorite font-montserrat">Happy families living in beautiful, functional spaces</p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-cerny-orange to-cerny-orange-dark text-white rounded-2xl w-20 h-20 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-light-purple mb-3 text-xl font-montserrat">Licensed & Insured</h3>
              <p className="text-tenorite font-montserrat">Fully bonded for your complete peace of mind</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-light-purple to-cerny-orange">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white font-montserrat mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-white/90 font-montserrat text-lg mb-8 leading-relaxed">
            Discover why homeowners across Northern Virginia trust Cerny to make their remodeling dreams a reality.
          </p>
          <button className="bg-white text-light-purple px-8 py-4 rounded-full font-semibold font-montserrat hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Your Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
