const steps = [
  {
    title: "Vision & Discovery",
    desc: "On-site session to assess your space, inspirations, and goals. You get a clear project roadmap.",
    icon: "🔎",
  },
  {
    title: "Concept Activation",
    desc: "We craft a custom package with 3D renderings and mood boards, tailored to your style.",
    icon: "🎨",
  },
  {
    title: "Scope & Planning",
    desc: "Transparent scope, itemized cost, and timeline—no surprises down the line.",
    icon: "📋",
  },
  {
    title: "Build & Quality",
    desc: "Our expert crew builds, with weekly progress and strict quality checks.",
    icon: "🛠️",
  },
  {
    title: "Reveal & Celebrate",
    desc: "Final walk-through, touch-ups, and a celebratory handoff to your dream space.",
    icon: "🎉",
  },
];

const ProcessSection = () => (
  <section className="py-20 bg-white">
    {/* Hero Image Section */}
    <div className="relative h-96 mb-20 overflow-hidden">
      <img 
        src="/lovable-uploads/932fcad4-4edd-4383-8ce1-aad8d00a1509.png" 
        alt="Architectural design sketch" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-5xl md:text-6xl font-bold font-montserrat mb-4">
            From Vision to Reality
          </h2>
          <p className="text-xl md:text-2xl font-montserrat max-w-3xl mx-auto px-4">
            Our proven 5-step process ensures your remodeling project exceeds expectations
          </p>
        </div>
      </div>
    </div>

    {/* Process Steps */}
    <div className="relative w-full py-12 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-bold text-center mb-10 text-gray-800">Our 5-Step Process</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {steps.map((step, i) => (
            <div key={step.title}
              className="w-full sm:w-[320px] bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition hover:scale-105"
            >
              <span className="text-4xl mb-3">{step.icon}</span>
              <h4 className="text-2xl font-semibold text-purple-700 mb-2">{step.title}</h4>
              <p className="text-gray-700 text-lg">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);


export default ProcessSection;