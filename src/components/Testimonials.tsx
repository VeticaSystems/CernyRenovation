
const testimonials = [
  {
    quote: "Cerny Remodeling exceeded our expectations from start to finish. The process was transparent, the team was professional, and the results are stunning.",
    name: "Ava R.",
    role: "Homeowner, Arlington VA",
    image: "/lovable-uploads/189e3b45-c630-4fe9-aa80-3331fea44733.png",
  },
  {
    quote: "Every step was handled with care and expertise. We recommend them to anyone who wants quality craftsmanship.",
    name: "David S.",
    role: "Condo Owner, DC",
    image: "/lovable-uploads/224b9135-74c3-45e8-92e1-df55fbcc6c62.png",
  },
];

const Testimonials = () => (
  <section className="w-full py-24 bg-gradient-to-t from-gray-100 via-white to-gray-50">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">What Our Clients Say</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((t, i) => (
          <div key={i}
            className="w-full sm:w-[380px] bg-white/80 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center backdrop-blur-md transition hover:scale-105"
          >
            <img src={t.image} alt={t.name}
              className="h-16 w-16 rounded-full object-cover border-4 border-purple-200 mb-4 shadow"
            />
            <blockquote className="text-xl italic text-gray-700 mb-4">"{t.quote}"</blockquote>
            <div className="text-purple-700 font-semibold">{t.name}</div>
            <div className="text-gray-500 text-sm">{t.role}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;

