
const testimonials = [
  {
    quote: `We have worked with Josef and Cerny Remodeling for several years. They have done multiple projects for us including: rebuilding our crumbling chimney, fixing our cement stairs that were pulling apart, installing a sump pump and refinishing the basement—which included moving the washer and dryer, moving the plumbing and the bathroom and tiling the floor. He is currently working on the kitchen. His focus is always on doing the job correctly and with great attention to detail. We have been very pleased with the results and will be continuing to use his company for our remodeling needs. I highly recommend this company.`,
    author: "Ellen Jenkins"
  },
  {
    quote: `For the past five years Josef has done a variety of interior remodeling projects for me in the kitchen, living room and bathroom. He does excellent work and is extremely conscientious. Josef excels at being able to visualize solutions to projects as well as alternative solutions. I would not hesitate in recommending Cerny Remodeling.`,
    author: "Danny Hall"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-light-purple font-montserrat">
          What Clients Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <div className="bg-cerny-light-gray p-6 rounded-lg mb-4">
                <p className="text-tenorite italic leading-relaxed mb-4">
                  "{testimonial.quote}"
                </p>
              </div>
              <span className="font-semibold text-light-purple">
                – {testimonial.author}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

