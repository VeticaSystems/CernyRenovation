const Hero = () => (
  <section
    className="relative flex items-center justify-center w-full"
    style={{ minHeight: 'calc(100vh - 6rem)' }} // header is h-24 = 6rem
  >
    <img
      src="/lovable-uploads/074251b5-6a3f-461d-a1c3-523ebce91a73.png"
      alt=""
      className="absolute inset-0 w-full h-full object-cover object-center"
      style={{ zIndex: 0 }}
      draggable={false}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent" style={{ zIndex: 1 }}></div>
    <div className="relative z-10 flex flex-col items-center justify-center w-full text-center px-4 pt-24">
      <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-xl mb-6">
        From Vision to Reality
      </h1>
      <p className="text-2xl md:text-3xl font-light text-white/90 drop-shadow max-w-2xl mx-auto mb-8">
        Our proven 5-step process ensures your remodeling project exceeds expectations.
      </p>
      <a href="#contact" className="bg-purple-700 hover:bg-purple-800 rounded-full px-10 py-4 font-semibold text-xl text-white shadow-lg transition">
        Start Your Project
      </a>
    </div>
  </section>
);

export default Hero;