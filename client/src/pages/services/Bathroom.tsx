
import bathroomImage from '@assets/generated_images/Spa-inspired_bathroom_renovation_1b5e980a.png';

const Bathroom = () => (
  <main className="container mx-auto pt-32 pb-12 px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-purple-600 mb-8 font-montserrat text-center">Bathroom Renovation</h1>
      
      {/* Service Image */}
      <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
        <img 
          src={bathroomImage} 
          alt="Spa-inspired bathroom renovation showcase" 
          className="w-full h-80 object-cover"
        />
      </div>

      {/* Service Description */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-500/20">
        <p className="text-xl text-gray-600 font-montserrat leading-relaxed text-center">
          "Transform your bathroom into a personal oasis. Whether it's a spa-inspired retreat or a sleek modern space, we bring your vision to life with expert craftsmanship."
        </p>
      </div>
    </div>
  </main>
);

export default Bathroom;
