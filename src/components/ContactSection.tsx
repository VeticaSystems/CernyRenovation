const ContactSection = () => (
  <section id="contact" className="relative w-full py-24 bg-gradient-to-b from-purple-50 via-white to-purple-100">
    <div className="container mx-auto px-6">
      <div className="max-w-2xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-10 backdrop-blur-lg flex flex-col items-center">
        <h2 className="text-4xl font-bold text-purple-700 mb-4 text-center">Let's Start Your Project</h2>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Ready for your transformation? Get in touch for a complimentary consultation or ask any questions below.
        </p>
        <form className="w-full flex flex-col gap-6">
          <input
            className="rounded-lg border border-gray-300 px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Your Name"
            required
          />
          <input
            className="rounded-lg border border-gray-300 px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Your Email"
            type="email"
            required
          />
          <textarea
            className="rounded-lg border border-gray-300 px-5 py-3 text-lg min-h-[120px] focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Tell us about your project…"
            required
          />
          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-800 text-white rounded-full px-8 py-4 font-semibold text-lg shadow-lg transition"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8 text-center text-gray-500">
          Or call us at <a href="tel:555-555-5555" className="underline text-purple-700 font-semibold">555-555-5555</a>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;