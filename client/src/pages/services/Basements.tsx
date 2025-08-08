
import basementImage from '@assets/generated_images/Finished_basement_family_room_renovation_27a55a16.png';

const Basements = () => (
  <main className="container mx-auto pt-32 pb-12 px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-purple-600 mb-8 font-montserrat text-center">Basement Renovation</h1>
      
      {/* Service Image */}
      <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
        <img 
          src={basementImage} 
          alt="Finished basement family room renovation showcase" 
          className="w-full h-80 object-cover"
        />
      </div>

      {/* Service Description */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-500/20">
        <p className="text-xl text-gray-600 font-montserrat leading-relaxed text-center">
          "Unlock the hidden potential of your home. From cozy family rooms to entertainment hubs, we turn unused basements into inviting, functional living spaces."
        </p>
      </div>
    </div>
  </main>
);

export default Basements;
