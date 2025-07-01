
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    title: 'Kitchen Renovation',
    description: 'Complete kitchen transformations with custom cabinets, countertops, and modern appliances.',
    link: '/services/kitchen'
  },
  {
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400',
    title: 'Bathroom Renovation',
    description: 'Full bathroom remodels with modern fixtures, tiling, and luxury finishes.',
    link: '/services/bathroom'
  },
  {
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400',
    title: 'Painting Services',
    description: 'Professional interior and exterior painting with premium paints and expert techniques.',
    link: '/services/painting'
  },
  {
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400',
    title: 'Tile Services',
    description: 'Expert tile installation for floors, walls, backsplashes, and bathroom surfaces.',
    link: '/services/tile'
  },
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
    title: 'Basement Renovation',
    description: 'Transform your basement into a functional living space with expert renovation services.',
    link: '/services/basements'
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400',
    title: 'Home Additions',
    description: 'Expand your living space with custom home additions designed to your specifications.',
    link: '/services/additions'
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-zinc-900 py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-light-purple font-montserrat">
          Attention to Detail at Every Step
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden shadow-xl flex flex-col transition-all duration-300 hover:scale-[1.025] hover:border-cerny-orange"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="flex flex-col flex-1 justify-between p-5">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-light-purple font-montserrat">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed font-montserrat">
                    {service.description}
                  </p>
                </div>
                <Link to={service.link} className="mt-auto block">
                  <Button
                    variant="outline"
                    className="w-full justify-between border-cerny-orange text-cerny-orange hover:bg-cerny-orange hover:text-white transition-colors font-semibold text-sm rounded-lg py-1.5 h-auto"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
