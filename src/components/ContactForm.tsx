
import ContactInfo from './ContactInfo';
import QuoteForm from './QuoteForm';

const ContactForm = () => {
  return (
    <section id="contact" className="bg-cerny-light-gray py-10 px-2 sm:px-2">
      <div className="container max-w-7xl mx-auto">
        {/* Main Heading + Description - mobile first: column, then row on large */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8">
          <div className="w-full lg:w-2/5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-light-purple font-montserrat mb-2 sm:mb-4 text-left leading-tight drop-shadow">
              Get Your FREE Consultation &amp; Quote
            </h2>
          </div>
          <div className="w-full lg:w-3/5">
            <p className="text-base sm:text-lg lg:text-xl text-tenorite max-w-2xl text-left">
              Transform your vision into reality. Our experts will provide a detailed project assessment and personalized quote at no cost to you.
              Fill out our detailed form below and receive a comprehensive quote within 24 hours. All consultations are completely free with no obligation.
            </p>
          </div>
        </div>
        {/* Mobile first: stack contact + form; grid on large  */}
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Contact info is on top on mobile, left on desktop */}
          <div className="order-1 lg:order-none lg:col-span-1">
            <ContactInfo />
          </div>
          {/* Quote form fills width on mobile, right side on desktop */}
          <div className="order-2 lg:order-none lg:col-span-2">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
