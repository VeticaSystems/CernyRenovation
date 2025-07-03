import { Eye, Palette, FileText, Settings, Star } from 'lucide-react';

const ProcessSection = () => {
  const processSteps = [
    {
      number: "01",
      title: "Vision",
      description: "We listen to your ideas and understand your needs to capture your unique vision for the space.",
      icon: Eye
    },
    {
      number: "02", 
      title: "Concept",
      description: "Our team develops creative design concepts that bring your vision to life with style and functionality.",
      icon: Palette
    },
    {
      number: "03",
      title: "Planning", 
      description: "Detailed planning and technical drawings ensure every aspect is carefully considered before we begin.",
      icon: FileText
    },
    {
      number: "04",
      title: "Mobilization",
      description: "Our skilled craftsmen get to work, transforming your space with precision and attention to detail.",
      icon: Settings
    },
    {
      number: "05",
      title: "Reveal",
      description: "We reveal your beautifully transformed space, exceeding expectations and bringing joy to your home.",
      icon: Star
    }
  ];

  return (
    <section className="py-20 bg-white">
      {/* Hero Image Section */}
      <div className="relative h-96 mb-20 overflow-hidden">
        <img 
          src="/lovable-uploads/932fcad4-4edd-4383-8ce1-aad8d00a1509.png" 
          alt="Architectural design sketch" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-light-purple/80 to-cerny-orange/60"></div>
      </div>

      {/* Process Steps */}
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-light-purple font-montserrat mb-4">
            How We Operate
          </h3>
          <p className="text-xl text-tenorite font-montserrat max-w-2xl mx-auto">
            Every project follows our time-tested methodology, ensuring quality results and a smooth experience from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={step.number}
                className="relative group hover:transform hover:scale-105 transition-all duration-300"
              >
                {/* Connecting line for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-light-purple to-cerny-orange z-10"></div>
                )}
                
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group-hover:shadow-xl transition-shadow h-full">
                  {/* Number Badge */}
                  <div className="relative mb-6">
                    <div className="bg-gradient-to-r from-light-purple to-cerny-orange text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg">
                      <span className="text-xl font-bold font-montserrat">{step.number}</span>
                    </div>
                    {/* Icon */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center border-2 border-cerny-orange">
                      <IconComponent className="w-4 h-4 text-cerny-orange" />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-light-purple font-montserrat mb-4">
                      {step.title}
                    </h4>
                    <p className="text-tenorite font-montserrat leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;