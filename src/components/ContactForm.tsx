
import ContactInfo from './ContactInfo';
import QuoteForm from './QuoteForm';

const ContactForm = () => {
  return (
    <section id="contact" className="bg-cerny-light-gray py-10 px-2 sm:px-4">
      <div className="container max-w-7xl mx-auto">
        {/* Centered heading and subtext */}
        <div className="mb-10 flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-light-purple font-montserrat mb-2 sm:mb-4 leading-tight drop-shadow">
            Get Your FREE Consultation &amp; Quote
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-tenorite max-w-2xl">
            Transform your vision into reality. Our experts will provide a detailed project assessment and personalized quote at no cost to you. Fill out our detailed form below and receive a comprehensive quote within 24 hours. All consultations are completely free with no obligation.
          </p>
        </div>
        {/* Responsive: stack on mobile, side-by-side on lg */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center gap-8">
          {/* Contact info side panel */}
          <div className="lg:w-1/3 w-full mb-6 lg:mb-0">
            <ContactInfo />
          </div>
          {/* Quote Form */}
          <div className="lg:w-2/3 w-full">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

