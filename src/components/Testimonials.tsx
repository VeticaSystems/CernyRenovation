
const testimonials = [
  {
    quote: "Cerny Remodeling took our outdated kitchen and made it the heart of our home. Professional, on-time, and exceeded all expectations.",
    author: "Jane D.",
    location: "Anytown"
  },
  {
    quote: "The attention to detail and quality of work was outstanding. Our new bathroom feels like a luxury spa retreat.",
    author: "Mike R.",
    location: "Hometown"
  },
  {
    quote: "From design to completion, the team was incredible. They truly listened to our vision and brought it to life.",
    author: "Sarah L.",
    location: "Cityville"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-light-purple font-montserrat">
          What Clients Are Saying
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <div className="bg-cerny-light-gray p-6 rounded-lg mb-4">
                <p className="text-tenorite italic leading-relaxed mb-4">
                  "{testimonial.quote}"
                </p>
              </div>
              <span className="font-semibold text-light-purple">
                – {testimonial.author}, {testimonial.location}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
