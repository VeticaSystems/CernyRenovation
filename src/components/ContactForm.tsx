
import ContactInfo from './ContactInfo';
import QuoteForm from './QuoteForm';
import BottomCTA from './BottomCTA';
import TrustIndicators from './TrustIndicators';

const ContactForm = () => {
  return (
    <section id="contact" className="bg-cerny-light-gray py-16">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side - Heading, Contact info & Trust indicators */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-4 text-light-purple font-montserrat text-center">
                  Get Your FREE Consultation &amp; Quote
                </h2>
                <p className="text-lg text-tenorite max-w-2xl mx-auto text-center">
                  Transform your vision into reality. Our experts will provide a detailed project assessment and personalized quote at no cost to you. Fill out our detailed form below and receive a comprehensive quote within 24 hours. All consultations are completely free with no obligation.
                </p>
              </div>
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

