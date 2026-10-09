import heroImage from "/images/hero-kost.png";

const HeroSection = () => {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center overflow-visible"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Granada Living Kost - Interior Modern"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/95 via-[#1a1a2e]/80 to-[#1a1a2e]/40" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#022A5B]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#022A5B]/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              Kamar Tersedia • Booking Sekarang
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl sm:text-5xl lg:text-[85px] font-bold italic text-white leading-[1.05] tracking-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Rumah Kost{" "}
            <span className="text-gradient-gold inline-block pb-2 pr-4">
              Eksklusif
            </span>
            <br />
            di Pusat Kota&nbsp;Karawang
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Temukan pengalaman tinggal yang berbeda di Granada Living Kost.
            Fasilitas lengkap, lokasi strategis dekat kawasan industri, dan
            desain modern yang membuat Anda nyaman.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="https://wa.me/628561765716?text=Halo%20Granada%20Living%20Kost%2C%20saya%20ingin%20booking%20kamar"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#022A5B] to-[#37A0FF] text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-[#D4A853]/30 hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5 -.669 -.51 -.173 -.008 -.371 -.01 -.57 -.01 -.198 0 -.52 .074 -.792 .372 -.272 .297 -1.04 1.016 -1.04 2.479 0 1.462 1.065 2.875 1.213 3.074 .149 .１９８ ２．０９６ ３．２ ５．０７７ ４．４８７ .７０９ .３０６ １．２６２ .４８９ １．６９４ .６２５ .７１２ .２２７ １．３６ .１９５ １．８７１ .１１８ .５７１ -.０８５ １．７５８ -.７１９ ２．００６ -１．４１３ .２４８ -.６９４ .２４８ -１．２８９ .１７３ -１．４１３ -.０７４ -.１２４ -.２７２ -.１９８ -.５７ -.３４７" />
              </svg>
              Booking Sekarang
            </a>

            <a
              href="#kamar"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
            >
              Lihat Tipe Kamar
            </a>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white">
                250+
              </div>
              <div className="text-white/60 text-sm mt-1">Unit Kamar</div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-bold text-[#D4A853]">
                98%
              </div>
              <div className="text-white/60 text-sm mt-1">
                Kepuasan Penghuni
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white">
                24/7
              </div>
              <div className="text-white/60 text-sm mt-1">Keamanan</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
