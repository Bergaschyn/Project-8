import { useState } from "react";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "/images/hero-kost.png",
      alt: "Cafe & Co-Working Space",
      category: "Social Space",
    },
    {
      src: "/images/Kamar Premium.jpeg",
      alt: "Premium Suite",
      category: "Room",
    },
    {
      src: "/images/Picture_Interior_4.jpeg",
      alt: "Smart Door Lock",
      category: "Secure",
    },
    {
      src: "/images/Sharing Pantry.jpeg",
      alt: "Sharing Pantry",
      category: "Facility",
    },
    {
      src: "/images/Outdoor Area.jpeg",
      alt: "Outdoor Area",
      category: "Outdoor",
    },
    {
      src: "/images/Kamar Eko (2).jpeg",
      alt: "Economy Room",
      category: "Room",
    },
  ];

  return (
    <section
      id="galeri"
      className="py-24 lg:py-32 bg-[#1a1a2e] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#022A5B]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#022A5B]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[#E8C97A] font-semibold text-sm tracking-wider uppercase mb-4">
            Galeri Foto
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-['Poppins']">
            Lihat Sendiri{" "}
            <span className="inline-block text-[#FFFF]">Kemewahannya</span>
          </h2>
          <p className="text-white/60 text-lg">
            Jelajahi setiap sudut Granada Living Kost dan rasakan kenyamanan
            yang kami tawarkan.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  index === 0 ? "h-[400px] md:h-full" : "h-48 md:h-56"
                }`}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content on Hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block px-3 py-1 bg-[#022A5B]/90 text-white text-xs rounded-full mb-2">
                  {image.category}
                </span>
                <h4 className="text-white font-semibold font-['Poppins']">
                  {image.alt}
                </h4>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-100 scale-75">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-[85vh] object-contain rounded-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
