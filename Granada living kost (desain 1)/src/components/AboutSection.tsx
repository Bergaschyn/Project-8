const AboutSection = () => {
  const highlights = [
    {
      icon: (
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
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      title: "Bangunan Modern",
      description:
        "Desain arsitektur kontemporer dengan material berkualitas tinggi",
    },
    {
      icon: (
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Keamanan 24 Jam",
      description: "CCTV, Smart Door Lock, One Gate System dan Security",
    },
    {
      icon: (
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
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Lokasi Strategis",
      description:
        "Dekat Kawasan Industri, Kawasan Kampus, pusat Perbelanjaan, dan Rumah Sakit",
    },
  ];

  return (
    <section
      id="tentang"
      className="py-24 lg:py-32 bg-gradient-to-b from-white to-[#f8f9fa] relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#022A5B]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-[#022A5B] font-semibold text-sm tracking-wider uppercase mb-4">
              Tentang Kami
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 font-['Poppins']">
              Mengapa Memilih{" "}
              <span className="text-gradient-gold">Granada Living?</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              <strong className="text-gray-900">Granada Living Kost</strong>{" "}
              adalah pilihan hunian eksklusif untuk profesional muda, karyawan
              industri, dan mahasiswa yang menginginkan kenyamanan maksimal
              dengan harga terjangkau.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              Didirikan dengan visi memberikan pengalaman tinggal yang berbeda,
              Granada Living menggabungkan desain modern, teknologi smart home,
              dan lokasi strategis di jantung Karawang. Setiap detail dirancang
              untuk kenyamanan dan produktivitas Anda.
            </p>

            {/* Highlights */}
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#022A5B] to-[#37A0FF] text-white flex items-center justify-center shadow-lg shadow-[#D4A853]/20 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 font-['Poppins'] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-200">
              <img
                src="/images/Kamar-Premium (2).jpeg"
                alt="Interior Granada Living Kost"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              {/* Floating Card */}
              <div className="absolute bottom-1 left-6 right-6 glass rounded-2xl p-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#022A5B] to-[#37A0FF] flex items-center justify-center text-white">
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-blue font-bold text-xl font-['Poppins']">
                      Terpercaya
                    </div>
                    <div className="text-blue/80 text-sm">
                      Lebih dari 500+ penghuni puas
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#022A5B]/30 rounded-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#022A5B]/10 rounded-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
