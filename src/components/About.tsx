const About = () => {
  return (
    <section id="about" className="bg-white py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-light-purple font-montserrat">
          About Us
        </h2>
        {/* Josef Cerny Profile Section */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-8 mb-8">
          {/* Photo */}
          <div className="flex-shrink-0 flex justify-center md:block mb-6 md:mb-0">
            <img
              src="/lovable-uploads/e64fa29f-881d-4449-9202-974683b06dfa.png"
              alt="Josef Cerny, Founder & Lead Technician"
              className="w-40 h-40 object-cover rounded-lg border border-gray-200 shadow-md"
            />
          </div>
          {/* Bio */}
          <div className="md:flex-1 flex flex-col justify-center">
            <div>
              <h3 className="font-bold text-light-purple font-montserrat text-lg mb-2">
                Josef Cerny, Founder &amp; Lead Technician
              </h3>
              <p className="font-montserrat text-sm text-tenorite mb-2 leading-relaxed">
                Josef Cerny is the founder of Cerny Remodeling and brings over six years of specialized experience in remodeling, construction, and electrical systems. He holds a B.A. in Electrical Engineering from the University of Maryland and is a certified Mold Remediation Technician (IAQA Certificate #00948). Josef&rsquo;s hands-on background includes electrical installation, maintenance, and oversight across residential, commercial, and industrial projects. Fluent in English and Czech, he approaches every home with a deep understanding of how buildings work—ensuring quality from the foundation to the final detail.
              </p>
            </div>
          </div>
        </div>
        {/* Existing Company Description */}
        <div className="prose prose-lg max-w-none text-tenorite font-montserrat text-sm leading-relaxed mb-12">
          <p className="mb-6">
            Since opening our doors in 2011, Cerny Home Remodeling has transformed over a hundred Northern Virginia residences into spaces our clients truly love. As a fully licensed, bonded, and insured team, we bring peace of mind—and a relentless commitment to quality—to every renovation we undertake.
          </p>
          <p className="mb-6">
            Whether you're dreaming of a modern kitchen overhaul, a spa-inspired bathroom retreat, or a complete home refresh, our website makes it easy to get started: book a personalized consultation, explore our comprehensive list of services, and flip through our photo gallery for design inspiration. You'll also find candid reviews from real clients who've experienced firsthand our dedication to craftsmanship, clear communication, and on-time delivery.
          </p>
          <p className="mb-0">
            At Cerny, we believe your home should reflect your lifestyle and aspirations. Let us show you how our expertise, creative vision, and attention to detail can bring your project to life. Dive in, get inspired, and discover why homeowners across Northern Virginia trust Cerny to make their remodeling dreams a reality.
          </p>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          <div className="text-center">
            <div className="bg-cerny-orange text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">13+</span>
            </div>
            <h3 className="font-semibold text-light-purple mb-2">Years Experience</h3>
            <p className="text-tenorite text-xs">Serving Northern Virginia since 2011</p>
          </div>
          <div className="text-center">
            <div className="bg-cerny-orange text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">100+</span>
            </div>
            <h3 className="font-semibold text-light-purple mb-2">Homes Transformed</h3>
            <p className="text-tenorite text-xs">Happy families in beautiful spaces</p>
          </div>
          <div className="text-center">
            <div className="bg-cerny-orange text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">✓</span>
            </div>
            <h3 className="font-semibold text-light-purple mb-2">Licensed & Insured</h3>
            <p className="text-tenorite text-xs">Fully bonded for your peace of mind</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
