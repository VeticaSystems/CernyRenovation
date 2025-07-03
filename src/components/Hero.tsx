import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative flex items-center justify-center w-full"
      style={{ 
        height: 'calc(100vh - 4rem)',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
      }}
    >
      {/* Hero Background Image */}
      <img
        src="/lovable-uploads/074251b5-6a3f-461d-a1c3-523ebce91a73.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0, objectPosition: 'center 25%' }}
      />
      {/* Gradient Overlay for Readability */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent" 
        style={{ zIndex: 1 }}
      ></div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full text-center px-4 pt-24">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl">
          Transform Your Home Today
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
          Expert Design · Build · Remodel
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/survey"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Get Free Quote
          </Link>
          <a
            href="#featured-projects"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg text-lg font-semibold transition-colors backdrop-blur-sm"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;