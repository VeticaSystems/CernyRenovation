
import kitchenImage from '@assets/generated_images/Modern_kitchen_renovation_showcase_2eebd9d9.png';

const Kitchen = () => (
  <main className="container mx-auto pt-32 pb-12 px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-purple-600 mb-8 font-montserrat text-center">Kitchen Renovation</h1>
      
      {/* Service Image */}
      <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
        <img 
          src={kitchenImage} 
          alt="Modern kitchen renovation showcase" 
          className="w-full h-80 object-cover"
        />
      </div>

      {/* Service Description */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-500/20">
        <p className="text-xl text-gray-600 font-montserrat leading-relaxed text-center">
          "Turn the heart of your home into a showstopper. From custom cabinetry to modern layouts, we create kitchens that blend beauty, function, and your personal style."
        </p>
      </div>
    </div>
  </main>
);

export default Kitchen;
