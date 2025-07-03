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
        paddingTop: '6rem'
      }}
    >
      {/* Hero Background Image - positioned to showcase walkway and entrance */}
      <img
        src="/lovable-uploads/c57fd54a-9f9f-4ed9-99e3-adc6ef35bdb6.png"
        alt="Beautiful home entrance showcasing Cerny Remodeling craftsmanship"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0, objectPosition: 'center center' }}
      />
      {/* Gradient Overlay for Readability */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent" 
        style={{ zIndex: 1 }}
      ></div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full text-center px-4 pt-24">
      </div>
    </section>
  );
};

export default Hero;