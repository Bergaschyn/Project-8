import { useState } from "react";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Andi Pratama",
      role: "Karyawan PT. Astra",
      avatar: "👨‍💼",
      rating: 5,
      text: "Sudah 1 tahun tinggal di Granada Living dan sangat puas! Fasilitas lengkap, keamanan terjaga, dan lokasinya dekat dengan tempat kerja. Paling suka dengan WiFi-nya yang cepat banget untuk WFH.",
      date: "2 minggu lalu",
    },
    {
      name: "Siti Nurhaliza",
      role: "Mahasiswa Universitas Singaperbangsa",
      avatar: "👩‍🎓",
      rating: 5,
      text: "Kost paling nyaman yang pernah saya tempati! Kamarnya bersih, modern, dan harganya worth it banget. Staff-nya juga ramah dan responsif kalau ada kendala.",
      date: "1 bulan lalu",
    },
    {
      name: "Budi Santoso",
      role: "Profesional Muda",
      avatar: "👨‍💻",
      rating: 5,
      text: "Dari awat cari kost di Karawang langsung jatuh hati sama Granada Living. Design-nya aesthetic banget, kayak hotel bintang 3! Smart door lock-nya juga bikin merasa aman.",
      date: "1 bulan lalu",
    },
    {
      name: "Rina Wulandari",
      role: "Guru SMA Negeri 1 Karawang",
      avatar: "👩‍🏫",
      rating: 5,
      text: "Sebagai wanita single, safety adalah prioritas utama. Di Granada Living saya merasa sangat aman dengan CCTV 24 jam dan akses pintar. Highly recommended untuk cewek-cewek!",
      date: "2 bulan lalu",
    },
    {
      name: "Dimas Aditya",
      role: "Staff IT - Kawasaki Plant",
      avatar: "🧑‍🔧",
      rating: 5,
      text: "Lokasi super strategis! Cuma 5 menit ke kawasan industri. Bangun pagi masih bisa sar santai sebelum berangkat kerja. Parkirannya juga luas dan aman.",
      date: "3 bulan lalu",
    },
  ];

  return (
    <section
      id="testimoni"
      className="py-24 lg:py-32 bg-gradient-to-b from-[#f8f9fa] to-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#022A5B]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[#022A5B] font-semibold text-sm tracking-wider uppercase mb-4">
            Testimoni
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-['Poppins']">
            Apa Kata{" "}
            <span className="inline-block text-[#022A5B]">Penghuni</span> Kami?
          </h2>
          <p className="text-gray-600 text-lg">
            Lebih dari 500+ penghuni telah mempercayakan hunian mereka kepada
            kami.
          </p>

          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-[#37A0FF]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-900 font-['Poppins']">
                4.9/5
              </span>
              <span className="text-gray-500 ml-2">(500+ reviews)</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group p-8 rounded-3xl transition-all duration-500 ${
                index === 0
                  ? "bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white lg:col-span-2 lg:row-span-2"
                  : "bg-white border border-gray-100 hover:border-[#37A0FF]/30 hover:shadow-xl hover:-translate-y-1"
              }`}
            >
              {/* Quote Icon */}
              <div
                className={`mb-6 ${index === 0 ? "text-[#37A0FF]" : "text-[#37A0FF]"}`}
              >
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                </svg>
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${index === 0 ? "text-[#37A0FF]" : "text-[#37A0FF]"}`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p
                className={`${index === 0 ? "text-white/80 text-lg leading-relaxed" : "text-gray-600 leading-relaxed"} mb-8`}
              >
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-current/10">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                    index === 0 ? "bg-white/10" : "bg-[#f8f9fa]"
                  }`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <h4
                    className={`font-semibold font-['Poppins'] ${index === 0 ? "text-white" : "text-gray-900"}`}
                  >
                    {testimonial.name}
                  </h4>
                  <p
                    className={`text-sm ${index === 0 ? "text-white/60" : "text-gray-500"}`}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Date (only for featured) */}
              {index === 0 && (
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-[#022A5B]/20 rounded-full">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs text-white/80">
                    Featured Review • {testimonial.date}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
