
import fencingImage from '@assets/generated_images/Quality_residential_fencing_installation_297b5ed0.png';

const Fencing = () => (
  <main className="container mx-auto pt-32 pb-12 px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-purple-600 mb-8 font-montserrat text-center">Fencing</h1>
      
      {/* Service Image */}
      <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
        <img 
          src={fencingImage} 
          alt="Quality residential fencing installation showcase" 
          className="w-full h-80 object-cover"
        />
      </div>

      {/* Service Description */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-500/20">
        <p className="text-xl text-gray-600 font-montserrat leading-relaxed text-center">
          "Define your space with style and security. Our fencing solutions combine strength, beauty, and lasting quality to enhance your property's curb appeal."
        </p>
      </div>
    </div>
  </main>
);

export default Fencing;
