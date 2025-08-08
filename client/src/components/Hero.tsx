import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative flex items-center justify-center w-full"
      style={{ 
        height: 'calc(100vh - 6rem)',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        marginTop: '6rem'
      }}
    >
      {/* Hero Background Image - positioned to showcase walkway and entrance */}
      <img
        src="/hero-house.png"
        alt="Beautiful walkway and entrance showcasing Cerny Remodeling craftsmanship"
        className="absolute inset-0 w-full h-full object-contain"
        style={{ zIndex: 0 }}
      />
      {/* Gradient Overlay for Readability */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent" 
        style={{ zIndex: 1 }}
      ></div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full text-center px-4 pt-24">
        {/* Company Logo/Name */}
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white font-montserrat drop-shadow-2xl">
            CERNY
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-white font-montserrat drop-shadow-xl">
            REMODELING
          </h2>
        </div>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-white font-medium mb-8 max-w-3xl drop-shadow-lg">
          Transforming Northern Virginia homes with expert craftsmanship and superior quality
        </p>
        
        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/survey" 
            className="bg-cerny-orange hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 shadow-xl"
          >
            Get Free Estimate
          </Link>
          <Link 
            to="/about" 
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-800 font-bold py-4 px-8 rounded-lg transition-colors duration-300"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;