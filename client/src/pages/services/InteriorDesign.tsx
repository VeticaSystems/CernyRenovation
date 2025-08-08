
import interiorImage from '@assets/generated_images/Thoughtful_interior_design_showcase_bf83a16d.png';

const InteriorDesign = () => (
  <main className="container mx-auto pt-32 pb-12 px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-purple-600 mb-8 font-montserrat text-center">Interior Design</h1>
      
      {/* Service Image */}
      <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
        <img 
          src={interiorImage} 
          alt="Thoughtful interior design showcase" 
          className="w-full h-80 object-cover"
        />
      </div>

      {/* Service Description */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-500/20">
        <p className="text-xl text-gray-600 font-montserrat leading-relaxed text-center">
          "Bring your vision to life with thoughtful design. We create beautiful, functional interiors that reflect your taste and make every room feel like home."
        </p>
      </div>
    </div>
  </main>
);

export default InteriorDesign;
