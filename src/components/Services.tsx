
const services = [
  {
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    title: 'Kitchen Renovation',
    description: 'Complete kitchen transformations with custom cabinets, countertops, and modern appliances.',
    link: '#kitchen'
  },
  {
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400',
    title: 'Bathroom Renovation',
    description: 'Full bathroom remodels with modern fixtures, tiling, and luxury finishes.',
    link: '#bathroom'
  },
  {
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400',
    title: 'Painting Services',
    description: 'Professional interior and exterior painting with premium paints and expert techniques.',
    link: '#painting'
  },
  {
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400',
    title: 'Tile Services',
    description: 'Expert tile installation for floors, walls, backsplashes, and bathroom surfaces.',
    link: '#tile'
  },
  {
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400',
    title: 'Fencing',
    description: 'Custom fencing solutions for privacy, security, and aesthetic enhancement of your property.',
    link: '#fencing'
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400',
    title: 'Decking and Patio',
    description: 'Beautiful outdoor living spaces with custom decks, patios, and entertainment areas.',
    link: '#decking'
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-white py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-light-purple font-montserrat">
          Our Core Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
