
import React from "react";

// Only use images that are actually present in /public/lovable-uploads/
const gallery = [
  {
    src: "/lovable-uploads/3d8297ed-de0f-4769-9c80-ec6b84d11468.png",
    label: "Framing: Deck Construction",
  },
  {
    src: "/lovable-uploads/591963a2-7fa2-49c2-930e-234f5b1cc0eb.png",
    label: "Composite Decking & Stairs",
  },
  {
    src: "/lovable-uploads/7dbd9d7e-1859-4040-854d-a28f032b7cae.png",
    label: "Finished Deck with Railing",
  },
  {
    src: "/lovable-uploads/cc3b3aa6-1b25-40a6-b5b9-c41d4ea9c5f1.png",
    label: "Multi-Level Deck Design",
  },
  {
    src: "/lovable-uploads/d9cefeb0-a43c-4443-beb4-2461a9176f62.png",
    label: "Railing & Step Detail",
  },
  {
    src: "/lovable-uploads/dc51bccb-86ca-4e33-8c29-d56bb6d176ea.png",
    label: "Outdoor Kitchen/Bar Space",
  },
  {
    src: "/lovable-uploads/e0a917d6-e6f2-429a-8b5d-bfed8419653a.png",
    label: "Modern Cable Railing",
  },
  {
    src: "/lovable-uploads/e1baca51-0bb7-4e97-b9bb-6c37a897f1e6.png",
    label: "Deck Overlooking Yard",
  },
  {
    src: "/lovable-uploads/ef9797bf-3491-4e70-8120-73c87a388526.png",
    label: "Under-Deck Storage",
  },
  {
    src: "/lovable-uploads/f9ea4e7b-db47-4ad0-bdb9-1b09cf1a7d4d.png",
    label: "Patio with Seating Area",
  },
];

// Placeholder image for any that fail to load
const placeholder =
  "https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=facearea&w=720&h=400&q=80";

const Decking = () => (
  <main className="container mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold text-light-purple mb-6 font-montserrat">Decking & Patio Portfolio</h1>
    <p className="text-xl mb-8 text-tenorite">
      Explore recent deck and patio projects—from framing, composite installations, to beautiful outdoor kitchens and custom railing!
    </p>
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
        {gallery.map((item, idx) => (
          <div key={item.src} className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden border border-zinc-100 hover:shadow-xl transition">
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
              <div className="text-base font-semibold text-cerny-orange mb-1">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
    <p className="mt-10 text-tenorite text-center text-lg">
      Interested in transforming your outdoor space? <span className="font-semibold text-light-purple">Contact us for a free consultation!</span>
    </p>
  </main>
);

export default Decking;
