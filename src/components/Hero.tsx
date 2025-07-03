import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative flex items-center justify-center w-full"
      style={{ minHeight: 'calc(100vh - 6rem)' }}
    >
      {/* Hero Background Image */}
      <img
        src="/lovable-uploads/b27b4e29-6e0e-48ef-9c88-60280ab017a8.png"
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
        <Link
          to="/survey"
          className="relative group overflow-hidden bg-purple-600 px-8 py-4 rounded-full text-white font-semibold shadow-lg transition-all hover:bg-purple-700 font-montserrat"
        >
          <span className="relative z-10">Leave Feedback</span>
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 via-green-400 to-purple-500 opacity-0 group-hover:opacity-30 transition-all"></span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;