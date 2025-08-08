
import React from "react";

// Only use images that are actually present in /public/lovable-uploads/
const gallery = [
  {
    src: "/lovable-uploads/224b9135-74c3-45e8-92e1-df55fbcc6c62.png",
    label: "Wood Deck with Patio",
  },
  {
    src: "/lovable-uploads/49700280-9e5d-468c-b2dd-d17bd12abef2.png",
    label: "Deck Surface & Railing",
  },
  {
    src: "/lovable-uploads/4eb5d1b7-5c12-4617-95b8-73cf65f4e36b.png",
    label: "Composite Deck Boards",
  },
  {
    src: "/lovable-uploads/5c3adc8d-2724-424a-909d-990f9100f555.png",
    label: "Deck at Dusk",
  },
  {
    src: "/lovable-uploads/73b44247-0967-4f9f-882f-4b9e4a0a7b37.png",
    label: "Multi-Level Deck",
  },
  {
    src: "/lovable-uploads/b0b02fa0-da09-4b0b-868d-e7c065c47d5b.png",
    label: "Finished Backyard Deck",
  },
  {
    src: "/lovable-uploads/b27b4e29-6e0e-48ef-9c88-60280ab017a8.png",
    label: "Deck Steps & Rail",
  },
  {
    src: "/lovable-uploads/e60193fb-5df7-49a0-bdbf-0c7a1f6126b2.png",
    label: "Modern Outdoor Patio",
  },
];

// Placeholder image for any that fail to load
const placeholder =
  "https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=facearea&w=720&h=400&q=80";

const Decking = () => (
  <main className="container mx-auto pt-32 pb-12 px-4">
    <h1 className="text-3xl font-bold text-light-purple mb-6 font-montserrat">
      Decking & Patio Portfolio
    </h1>
    <p className="text-xl mb-8 text-tenorite">
      Explore recent deck and patio projects—from framing, composite installations, to beautiful outdoor kitchens and custom railing!
    </p>
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
        {gallery.map((item, idx) => (
          <div
            key={item.src}
            className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden border border-zinc-100 hover:shadow-xl transition"
          >
            <img
              src={item.src}
              alt={item.label}
              className="w-full h-56 object-cover object-center"
              loading={idx > 2 ? "lazy" : "eager"}
              onError={e => {
                const target = e.currentTarget as HTMLImageElement;
                target.src = placeholder;
              }}
            />
            <div className="p-3">
              <div className="text-base font-semibold text-cerny-orange mb-1">
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    <p className="mt-10 text-tenorite text-center text-lg">
      Interested in transforming your outdoor space?{" "}
      <span className="font-semibold text-light-purple">
        Contact us for a free consultation!
      </span>
    </p>
  </main>
);

export default Decking;
