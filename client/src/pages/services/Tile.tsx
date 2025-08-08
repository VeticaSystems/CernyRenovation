
import tileImage from '@assets/generated_images/Professional_tile_installation_work_c2a7b9c6.png';

const Tile = () => (
  <main className="container mx-auto pt-32 pb-12 px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-purple-600 mb-8 font-montserrat text-center">Tile Services</h1>
      
      {/* Service Image */}
      <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
        <img 
          src={tileImage} 
          alt="Professional tile installation work showcase" 
          className="w-full h-80 object-cover"
        />
      </div>

      {/* Service Description */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-500/20">
        <p className="text-xl text-gray-600 font-montserrat leading-relaxed text-center">
          "From timeless classics to bold patterns, our expert tile work adds style, durability, and a touch of luxury to any room in your home."
        </p>
      </div>
    </div>
  </main>
);

export default Tile;
