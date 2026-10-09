import React from "react";

const LocationSection = () => {
  const nearbyPlaces = [
    {
      name: "Kawasan Industri Karawang",
      distance: "10 menit",
      icon: "factory",
    },
    {
      name: "Pusat Perbelanjaan Karawang",
      distance: "5 menit",
      icon: "shopping",
    },
    { name: "Stasiun Kereta Api", distance: "10 menit", icon: "train" },
    { name: "RSUD Karawang", distance: "5 menit", icon: "hospital" },
    {
      name: "Universitas Singaperbangsa",
      distance: "6 menit",
      icon: "school",
    },
    {
      name: "Universitas Buana Perjuangan Karawang",
      distance: "5 menit",
      icon: "school",
    },
    { name: "Gerbang Tol Karawang Barat", distance: "5 menit", icon: "road" },
  ];

  // 1. Bagian ganti SVG di dalam fungsi getIcon
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "factory":
        return (
          <svg
            className="w-5 h-5 text-[#022A5B]"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 16.5h1.5M13.5 16.5H15m-10.5 0h1.5m13.5 0h1.5"
            />
          </svg>
        );
      case "shopping":
        return (
          <svg
            className="w-5 h-5 text-[#022A5B]"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        );
      case "train":
        return (
          <svg
            className="w-5 h-5 text-[#022A5B]"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-12v12m.008-12h-.008M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "hospital":
        return (
          <svg
            className="w-5 h-5 text-[#022A5B]"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h3.375m0 0h3.375m-3.375 0V7.125m0 3.375v3.375M2.25 12a9.75 9.75 0 1 1 19.5 0 9.75 9.75 0 0 1-19.5 0Z"
            />
          </svg>
        );
      case "school":
        return (
          <svg
            className="w-5 h-5 text-[#022A5B]"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.174L10.75 4.2a1.25 1.25 0 011.5 0l6.49 5.974M4.26 10.174A1.246 1.246 0 003 11.23v2.89c0 .53.284 1.02.747 1.283L11.25 19.5a1.25 1.25 0 001.5 0l7.503-4.097a1.246 1.246 0 00.747-1.283v-2.89a1.247 1.247 0 00-1.26-1.056M4.26 10.174L12 13.25l7.74-3.076M12 13.25v6.25"
            />
          </svg>
        );
      case "road":
        return (
          <svg
            className="w-5 h-5 text-[#022A5B]"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 6.75V15m6-12v12m.503 3.126a5.5 5.5 0 11-11.006 0 5.5 5.5 0 0111.006 0zM3.22 3.22a.75.75 0 011.06 0l16.5 16.5a.75.75 0 11-1.06 1.06L3.22 4.28a.75.75 0 010-1.06z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="lokasi"
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[#022A5B] font-semibold text-sm tracking-wider uppercase mb-4">
            Lokasi Strategis
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-['Poppins']">
            Di Jantung{" "}
            <span className="inline-block text-[#022A5B]">Karawang</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Lokasi kami sangat strategis, dekat dengan berbagai fasilitas
            penting dan kawasan industri terbesar di Indonesia.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Map */}
          <div className="lg:col-span-3 relative rounded-3xl overflow-hidden shadow-xl shadow-gray-200 h-[400px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.3456981990416!2d107.28271149999999!3d-6.321610399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699d0059041cd1%3A0xe99608c8396e6fac!2sRukos%20Granada%20Living%20Kost!5e1!3m2!1sid!2sid!4v1779265949134!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Granada Living Kost"
              className="w-full h-full"
            />

            {/* Map Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5 shadow-xl max-w-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#022A5B] to-[#37A0FF] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
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
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 font-['Poppins']">
                    Alamat Lengkap
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Jl. Pintu Aer Wadas No.19, Wadas, Kec. Telukjambe Timur,
                    Kabupaten Karawang, Jawa Barat 41361.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Nearby Places */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xl font-bold text-gray-900 font-['Poppins'] mb-6">
              Dekat Dari:
            </h3>

            {/* 2. Mengubah bagian layout item list agar pas dengan gambar */}
            {nearbyPlaces.map((place, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-2xl bg-[#f8f9fa] border border-gray-50 hover:bg-white hover:shadow-lg hover:shadow-gray-100 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  {/* Sisi Kiri: Ikon Kotak & Judul */}
                  <div className="w-12 h-12 rounded-xl bg-[#022A5B]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#022A5B]/10 transition-colors">
                    {getIcon(place.icon)}
                  </div>
                  <h4 className="font-bold text-gray-800 font-['Poppins'] text-sm leading-snug">
                    {place.name}
                  </h4>
                </div>

                {/* Sisi Kanan: Badge Waktu */}
                <span className="px-4 py-1.5 bg-[#022A5B]/5 text-[#022A5B] text-xs font-semibold rounded-full whitespace-nowrap">
                  {place.distance}
                </span>
              </div>
            ))}

            {/* CTA */}
            <a
              href="https://maps.app.goo.gl/V8eZG7huX1dUKFys6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 w-full py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              Buka di Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
