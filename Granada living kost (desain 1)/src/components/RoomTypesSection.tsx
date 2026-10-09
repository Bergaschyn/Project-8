import { useState } from "react";

const RoomTypesSection = () => {
  const [activeRoom, setActiveRoom] = useState<number | null>(null);

  const roomTypes = [
    {
      name: "Economy Room",
      price: "1.800.000",
      period: "/bulan",
      image: "/images/Kamar Eko (2).jpeg",
      size: "8,7 m²",
      description:
        "Kamar compact yang nyaman untuk Anda yang mengutamakan fungsionalitas. Cocok untuk mahasiswa atau karyawan baru.",
      features: [
        "Kasur Ukuran 90x200",
        "AC 1 PK",
        "WiFi",
        "Kamar Mandi Private",
        "Meja Kerja",
        "Lemari Pakaian",
        "Sharing Pantry",
      ],
      popular: false,
    },
    {
      name: "Standard Room",
      price: "2.000.000",
      period: "/bulan",
      image: "/images/Kamar Normal (2).jpeg",
      size: "9,5 m²",
      description:
        "Pilihan favorit dengan ruang yang lebih luas dan desain modern. Ideal untuk profesional muda.",
      features: [
        "Kasur Ukuran 90x200",
        "AC 1 PK",
        "WiFi",
        "Kamar Mandi Private",
        "Meja Kerja",
        "Lemari Pakaian",
        "Area Outdoor",
        "Sharing Pantry",
      ],
      popular: true,
    },
    {
      name: "Premium Suite",
      price: "2.100.000",
      period: "/bulan",
      image: "/images/Kamar-Premium (2).jpeg",
      size: "11,2 m²",
      description:
        "Pengalaman tinggal premium dengan ruang ekstra luas dan fasilitas lengkap. Untuk Anda yang menginginkan yang terbaik.",
      features: [
        "AC 1 PK",
        "WiFi",
        "Kamar Mandi Private",
        "Meja Kerja",
        "Lemari Pakaian",
        "Area Outdoor",
        "Sharing Pantry",
        ,
      ],
      popular: false,
    },
  ];

  return (
    <section
      id="kamar"
      className="py-24 lg:py-32 bg-gradient-to-b from-[#f8f9fa] to-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-l from-[#022A5B]/5 to-transparent rounded-full translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[#022A5B] font-semibold text-sm tracking-wider uppercase mb-4">
            Tipe Kamar
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-['Poppins']">
            Pilih Kamar{" "}
            <span className="inline-block text-[#022A5B]">Idaman</span> Anda
          </h2>
          <p className="text-gray-600 text-lg">
            Tersedia berbagai tipe kamar yang dapat disesuaikan dengan kebutuhan
            dan budget Anda.
          </p>
        </div>

        {/* Room Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {roomTypes.map((room, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl overflow-hidden bg-white transition-all duration-500 hover:-translate-y-3 ${
                activeRoom === index
                  ? "ring-2 ring-[#022A5B] shadow-2xl shadow-[#37A0FF]/20"
                  : "shadow-xl shadow-gray-100"
              }`}
              onMouseEnter={() => setActiveRoom(index)}
              onMouseLeave={() => setActiveRoom(null)}
            >
              {/* Popular Badge */}
              {room.popular && (
                <div className="absolute top-5 left-5 z-20 px-4 py-1.5 bg-gradient-to-r from-[#022A5B] to-[#37A0FF] text-white text-xs font-semibold rounded-full shadow-lg">
                  ⭐ Paling Populer
                </div>
              )}

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={`${room.name} - Granada Living Kost`}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    activeRoom === index ? "scale-110" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Size Badge */}
                <div className="absolute bottom-4 left-5 glass-dark px-3 py-1.5 rounded-full">
                  <span className="text-white text-sm font-medium">
                    {room.size}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-xl font-bold text-gray-900 font-['Poppins'] mb-2 group-hover:text-[#022A5B] transition-colors">
                  {room.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold text-[#022A5B] font-['Poppins']">
                    Rp{room.price}
                  </span>
                  <span className="text-gray-500">{room.period}</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {room.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {room.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-gray-700"
                    >
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0"
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
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={`https://wa.me/628561765716?text=Halo%20Granada%20Living%20Kost%2C%20saya%20ingin%20booking%20kamar%20${encodeURIComponent(room.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-4 text-center font-semibold rounded-xl transition-all duration-300 ${
                    activeRoom === index
                      ? "bg-gradient-to-r from-[#022A5B] to-[#37A0FF] text-white shadow-lg shadow-[#022A5B]/30"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  Booking {room.name}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-gray-500 mt-12 text-sm">
          * Harga sudah termasuk Air, dan WiFi. Tersedia opsi pembayaran
          Bulanan, 3 Bulan, 6 Bulan, 1 Tahun (diskon khusus).
        </p>
      </div>
    </section>
  );
};

export default RoomTypesSection;
