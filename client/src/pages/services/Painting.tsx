
import paintingImage from '@assets/generated_images/Professional_painting_service_showcase_1d6fd844.png';

const Painting = () => (
  <main className="container mx-auto pt-32 pb-12 px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-purple-600 mb-8 font-montserrat text-center">Painting Services</h1>
      
      {/* Service Image */}
      <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
        <img 
          src={paintingImage} 
          alt="Professional painting service showcase" 
          className="w-full h-80 object-cover"
        />
      </div>

      {/* Service Description */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-500/20">
        <p className="text-xl text-gray-600 font-montserrat leading-relaxed text-center">
          "A fresh coat of paint can do wonders. We deliver flawless finishes and vibrant colors that breathe new life into your home — inside and out."
        </p>
      </div>
    </div>
  </main>
);

export default Painting;
