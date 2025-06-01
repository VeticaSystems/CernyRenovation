
const portfolioItems = [
  {
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    title: 'Kitchen Before & After',
    category: 'Kitchen'
  },
  {
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400',
    title: 'Bathroom Transformation',
    category: 'Bathroom'
  },
  {
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400',
    title: 'Outdoor Living Space',
    category: 'Outdoor'
  },
  {
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400',
    title: 'Master Suite Addition',
    category: 'Addition'
  },
  {
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    title: 'Modern Kitchen Remodel',
    category: 'Kitchen'
  },
  {
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400',
    title: 'Luxury Bathroom',
    category: 'Bathroom'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-cerny-light-gray py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-cerny-navy font-montserrat">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300">
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center">
                    <h3 className="font-semibold text-lg font-montserrat">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
