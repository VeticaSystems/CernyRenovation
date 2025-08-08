
import ContactInfo from './ContactInfo';
import QuoteForm from './QuoteForm';

const ContactForm = () => {
  return (
    <section id="contact" className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20 px-4">
      <div className="container max-w-7xl mx-auto">
        {/* Hero section with centered content */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white font-montserrat mb-6 leading-tight">
            Let's Build Something
            <span className="block text-yellow-400">Amazing Together</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your space? Our expert team is here to bring your vision to life. 
            Get started with a free consultation and personalized quote tailored to your project.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column - Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
                Get In Touch
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                We're here to answer your questions and help you get started on your remodeling journey.
              </p>
              <ContactInfo />
            </div>
            
            {/* Trust indicators */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
                  <div className="text-blue-100 text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
                  <div className="text-blue-100 text-sm">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">24hr</div>
                  <div className="text-blue-100 text-sm">Response Time</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Quote Form */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-6">
              <h3 className="text-2xl font-bold text-slate-800 text-center font-montserrat">
                Get Your Free Quote
              </h3>
              <p className="text-slate-700 text-center mt-2">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>
            <div className="p-6">
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
