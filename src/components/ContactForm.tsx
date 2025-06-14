
import ContactInfo from './ContactInfo';
import QuoteForm from './QuoteForm';

const ContactForm = () => {
  return (
    <section id="contact" className="bg-cerny-light-gray py-16">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side - Contact info */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            <ContactInfo />
          </div>

          {/* Right side - Main Form Section */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Landscape heading + description */}
            <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
              <div className="lg:w-2/5 w-full">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-light-purple font-montserrat mb-4 lg:mb-0 text-left lg:text-left leading-tight drop-shadow">
                  Get Your FREE Consultation &amp; Quote
                </h2>
              </div>
              <div className="lg:w-3/5 w-full">
                <p className="text-lg lg:text-xl text-tenorite max-w-2xl text-left">
                  Transform your vision into reality. Our experts will provide a detailed project assessment and personalized quote at no cost to you. Fill out our detailed form below and receive a comprehensive quote within 24 hours. All consultations are completely free with no obligation.
                </p>
              </div>
            </div>
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
