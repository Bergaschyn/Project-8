import { useState, useEffect } from "react";
import logo from "/images/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#beranda" },
    { name: "Tentang", href: "#tentang" },
    { name: "Fasilitas", href: "#fasilitas" },
    { name: "Tipe Kamar", href: "#kamar" },
    { name: "Galeri", href: "#galeri" },
    { name: "Lokasi", href: "#lokasi" },
    { name: "Testimoni", href: "#testimoni" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#beranda" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#022A5B] to-[#37A0FF] flex items-center justify-center shadow-lg shadow-[#D4A853]/20 group-hover:shadow-[#D4A853]/40 transition-all duration-300 overflow-hidden p-1">
              <img
                src="/images/LOGO GLK-GOLD.png"
                alt="Granada Living Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="hidden sm:block">
              <span
                className={`text-lg font-semibold font-['Poppins'] transition-colors ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Granada
              </span>

              <span
                className={`text-lg font-light ml-1 transition-colors ${
                  isScrolled ? "text-[#022A5B]" : "text-[#E8C97A]"
                }`}
              >
                Living Kost
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-[#37A0FF] relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[#D4A853] after:transition-all hover:after:w-full ${
                  isScrolled ? "text-gray-700" : "text-white/90"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/628561765716?text=Halo%20Granada%20Living%20Kost%2C%20saya%20ingin%20booking%20kamar"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gradient-to-r from-[#022A5B] to-[#37A0FF] text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-[#D4A853]/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Booking Sekarang
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4 animate-fade-in-up">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-[#022A5B] font-medium py-2 px-4 rounded-lg hover:bg-[#022A5B]/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="https://wa.me/628561765716?text=Halo%20Granada%20Living%20Kost%2C%20saya%20ingin%20booking%20kamar"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-6 py-3 bg-gradient-to-r from-[#022A5B] to-[#37A0FF] text-white text-center font-semibold rounded-full hover:shadow-lg transition-all"
              >
                Booking Sekarang
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
