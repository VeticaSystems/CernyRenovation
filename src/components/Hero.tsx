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
      }}
    >
      {/* Hero Background Image */}
      <img
        src="/lovable-uploads/d5083c45-0d5b-48e2-96cb-47de0fc72cfd.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ zIndex: 0 }}
      />
      {/* Gradient Overlay for Readability */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent" 
        style={{ zIndex: 1 }}
      ></div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full text-center px-4 pt-24">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-6 font-montserrat">
          From Vision to Reality
        </h1>
      </div>
    </section>
  );
};

export default Hero;