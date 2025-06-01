
const CTABanner = () => {
  return (
    <section className="bg-cerny-navy text-white text-center py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 font-montserrat">
          Ready to Transform Your Space?
        </h2>
        <p className="text-xl mb-8 text-gray-300">
          Contact us today for a free in-home estimate. Let's bring your vision to life.
        </p>
        <a
          href="#quote"
          className="inline-block bg-cerny-orange text-cerny-navy px-8 py-4 rounded font-semibold text-lg hover:bg-cerny-orange-dark hover:text-white transition-colors"
        >
          Request a Quote
        </a>
      </div>
    </section>
  );
};

export default CTABanner;
