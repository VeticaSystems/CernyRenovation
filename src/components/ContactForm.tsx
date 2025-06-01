
import ContactInfo from './ContactInfo';
import QuoteForm from './QuoteForm';
import BottomCTA from './BottomCTA';
import TrustIndicators from './TrustIndicators';

const ContactForm = () => {
  return (
    <section id="contact" className="bg-cerny-light-gray py-16">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-light-purple font-montserrat">
            Get Your FREE Consultation & Quote
          </h2>
          <p className="text-lg text-tenorite max-w-2xl mx-auto">
            Transform your vision into reality. Our experts will provide a detailed project assessment and personalized quote at no cost to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side - Contact info & Trust indicators */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <ContactInfo />
              <TrustIndicators />
            </div>
          </div>

          {/* Right side - Enhanced Form */}
          <div className="lg:col-span-2">
            <QuoteForm />
          </div>
        </div>

        <BottomCTA />
      </div>
    </section>
  );
};

export default ContactForm;
