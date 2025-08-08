
import additionImage from '@assets/generated_images/Seamless_home_addition_construction_bcbcef0c.png';

const Additions = () => (
  <main className="container mx-auto pt-32 pb-12 px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-purple-600 mb-8 font-montserrat text-center">Home Additions</h1>
      
      {/* Service Image */}
      <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
        <img 
          src={additionImage} 
          alt="Seamless home addition construction showcase" 
          className="w-full h-80 object-cover"
        />
      </div>

      {/* Service Description */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-500/20">
        <p className="text-xl text-gray-600 font-montserrat leading-relaxed text-center">
          "Need more room to live, work, or play? Our seamless home additions expand your space while blending perfectly with your home's style."
        </p>
      </div>
    </div>
  </main>
);

export default Additions;
