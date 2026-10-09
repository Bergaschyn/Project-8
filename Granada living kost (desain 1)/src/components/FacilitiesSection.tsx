import React from "react";

const FacilitiesSection = () => {
  const facilities = [
    {
      // 1. Ikon AC (Monitor/Pendingin)
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 22h12M12 18v4M4 3h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2z"
          />
        </svg>
      ),
      title: "AC Setiap Kamar",
      description: "Pendingin ruangan untuk kenyamanan maksimal",
    },
    {
      // 2. Ikon WiFi High Speed
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
          />
        </svg>
      ),
      title: "WiFi High Speed",
      description: "Internet cepat hingga 100 Mbps untuk work from home",
    },
    {
      // 3. Ikon Smart Door Lock (Kunci)
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 11-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H3.75v-2.25A2.25 2.25 0 013 17.25V15c0-.345.079-.672.221-.964L9.155 8.11c.365-.365.92-.493 1.408-.34A6 6 0 0121.75 8.25z"
          />
        </svg>
      ),
      title: "Smart Door Lock",
      description: "Akses pintar dengan password atau fingerprint",
    },
    {
      // 4. Ikon Security 24 Jam (Kamera CCTV)
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      ),
      title: "Security 24 Jam",
      description: "Pemantauan keamanan sepanjang waktu",
    },
    {
      // 5. Ikon Water Heater (Api)
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
          />
        </svg>
      ),
      title: "Water Heater",
      description: "Beberapa Kamar Ada Air panas tersedia setiap saat",
    },
    {
      // 6. Ikon Dapur Bersama (Gedung/Ruangan)
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
          />
        </svg>
      ),
      title: "Dapur Bersama",
      description: "Dapur lengkap untuk memasak sendiri",
    },
    {
      // 7. Ikon Sistem One Gate Access (Box/Gate)
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-10.5v10.5"
          />
        </svg>
      ),
      title: "Sistem One Gate Access",
      description: "Keamanan maksimal dengan satu pintu masuk utama",
    },
    {
      // 8. Ikon Cafe & Co-Working Space (Rumah)
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
      title: "Cafe & Co-Working Space",
      description: "Ruang santai dan kerja dengan kopi berkualitas",
    },
  ];

  return (
    <section
      id="fasilitas"
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#022A5B]/5 to-transparent rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[#022A5B] font-semibold text-sm tracking-wider uppercase mb-4">
            Fasilitas Lengkap
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-['Poppins']">
            Semua Yang Anda{" "}
            <span className="inline-block text-[#022A5B]">Butuhkan</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Kami menyediakan fasilitas lengkap untuk memastikan kenyamanan dan
            produktivitas Anda selama tinggal di Granada Living.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-[#022A5B]/30 hover:shadow-xl hover:shadow-[#37A0FF]/5 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Box Pembungkus Ikon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f8f4e8] to-[#fef9ef] text-[#022A5B] flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-[#022A5B] group-hover:to-[#37A0FF] group-hover:text-white transition-all duration-500">
                {facility.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 font-['Poppins'] mb-2 group-hover:text-[#022A5B] transition-colors">
                {facility.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
