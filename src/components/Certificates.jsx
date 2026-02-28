import { useEffect, useState } from "react";

const certificateItems = [
  {
    title: "React Certification",
    issuer: "Meta",
    image: "/React.jpeg",
  },
  {
    title: "JavaScript Course",
    issuer: "Udemy",
    image: "/javascript.jpeg",
  },
  {
    title: "Node.js Course",
    issuer: "Udemy",
    image: "/Node js.jpg",
  },
];

export default function Certificates() {
  const [activeIndex, setActiveIndex] = useState(null);

  const isOpen = activeIndex !== null;

  const openCarousel = (index) => setActiveIndex(index);
  const closeCarousel = () => setActiveIndex(null);

  const showPrev = () => {
    setActiveIndex((current) =>
      current === null
        ? 0
        : (current - 1 + certificateItems.length) % certificateItems.length
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === null ? 0 : (current + 1) % certificateItems.length
    );
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeCarousel();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const activeItem = activeIndex !== null ? certificateItems[activeIndex] : null;

  return (
    <section className="p-8 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Certificates</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certificateItems.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => openCarousel(index)}
            className="group overflow-hidden rounded-xl border border-[#cfd6e6] bg-white/70 text-left hover:border-[#1f2947]/50 transition shadow-sm"
          >
            <div className="aspect-[4/3] overflow-hidden bg-[#dfe5f0]">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-[#5a627f] mt-1">{item.issuer}</p>
            </div>
          </button>
        ))}
      </div>

      {isOpen && activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeCarousel}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeCarousel}
              className="absolute -top-12 right-0 text-white/80 hover:text-white text-2xl leading-none"
              aria-label="Close certificate preview"
            >
              ×
            </button>

            <img
              src={activeItem.image}
              alt={activeItem.title}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />

            <button
              type="button"
              onClick={showPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white px-3 py-2 rounded-md"
              aria-label="Previous certificate"
            >
              {"<"}
            </button>
            <button
              type="button"
              onClick={showNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white px-3 py-2 rounded-md"
              aria-label="Next certificate"
            >
              {">"}
            </button>

            <div className="mt-4 text-center">
              <p className="font-semibold text-white">{activeItem.title}</p>
              <p className="text-sm text-slate-300">{activeItem.issuer}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
