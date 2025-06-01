
const services = [
  {
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    title: 'Kitchen Remodeling',
    description: 'Custom cabinets, quartz countertops, and energy-efficient lighting designed for your lifestyle.',
    link: '#kitchen'
  },
  {
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400',
    title: 'Bathroom Remodel',
    description: 'Modern fixtures, spa-like finishes, and smart storage solutions for your home.',
    link: '#bathroom'
  },
  {
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400',
    title: 'Home Additions',
    description: 'Seamless expansions and custom extensions to increase living space and home value.',
    link: '#additions'
  },
  {
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400',
    title: 'Outdoor Living',
    description: 'Beautiful decks, patios, and outdoor spaces that extend your home\'s comfort outside.',
    link: '#outdoor'
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-white py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-light-purple font-montserrat">
          Our Core Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-cerny-card-gray rounded-lg overflow-hidden shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-light-purple font-montserrat">
                  {service.title}
                </h3>
                <p className="text-tenorite mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className="text-cerny-orange font-semibold text-sm hover:text-cerny-orange-dark transition-colors"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
