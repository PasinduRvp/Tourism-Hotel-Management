import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription");
  };

  return (
    <footer
      id="contact"
      className="relative bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 text-gray-800 overflow-hidden"
    >
      {/* Animated Mist Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-[#d4af37]/20 to-[#e53e3e]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-[#e53e3e]/30 to-[#d4af37]/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-amber-200/20 to-[#d4af37]/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-[#d4af37]/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:translate-y-[-5px]">
              <h3 className="text-2xl font-bold font-poppins mb-4 bg-gradient-to-r from-[#d4af37] to-[#e53e3e] bg-clip-text text-transparent">
                Sri Lanka Tourism
              </h3>
              <p className="text-gray-600 mb-6 max-w-md font-light leading-relaxed">
                Your trusted partner for authentic Sri Lankan experiences. Led by
                Mr. A in the United Kingdom and Mr. Wimukthi in Sri Lanka, our
                agency connects travelers from the UK to the heart of the island.
                Together, we craft unforgettable journeys that capture the true
                spirit, culture, and beauty of the Pearl of the Indian Ocean.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-[#d4af37]/20 shadow-2xl h-full hover:shadow-3xl transition-all duration-500 hover:translate-y-[-5px]">
              <h4 className="text-lg font-semibold font-poppins mb-4 text-[#e53e3e]">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/packages"
                    className="text-gray-600 hover:text-[#e53e3e] transition-all duration-300 hover:translate-x-2 flex items-center group"
                  >
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#d4af37] to-[#e53e3e] rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    Tour Packages
                  </a>
                </li>
                <li>
                  <a
                    href="/gallery"
                    className="text-gray-600 hover:text-[#e53e3e] transition-all duration-300 hover:translate-x-2 flex items-center group"
                  >
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#d4af37] to-[#e53e3e] rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-600 hover:text-[#e53e3e] transition-all duration-300 hover:translate-x-2 flex items-center group"
                  >
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#d4af37] to-[#e53e3e] rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/customize-package"
                    className="text-gray-600 hover:text-[#e53e3e] transition-all duration-300 hover:translate-x-2 flex items-center group"
                  >
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#d4af37] to-[#e53e3e] rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    Build Your Trip
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-[#d4af37]/20 shadow-2xl h-full hover:shadow-3xl transition-all duration-500 hover:translate-y-[-5px]">
              <h4 className="text-lg font-semibold font-poppins mb-4 text-[#e53e3e]">
                Contact Info
              </h4>
              <div className="space-y-3 mb-6">
                <div className="flex items-center group">
                  <div className="bg-gradient-to-r from-[#d4af37] to-[#e53e3e] p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <a
                    href="https://www.google.com/maps/place/Colombo,+Sri+Lanka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#e53e3e] transition-colors duration-300"
                  >
                    UK & Sri Lanka
                  </a>
                </div>
                <div className="flex items-center group">
                  <div className="bg-gradient-to-r from-[#d4af37] to-[#e53e3e] p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <a
                    href="tel:+94771234567"
                    className="text-gray-600 hover:text-[#e53e3e] transition-colors duration-300"
                  >
                    +94 77 123 4567
                  </a>
                </div>
                <div className="flex items-center group">
                  <div className="bg-gradient-to-r from-[#d4af37] to-[#e53e3e] p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <a
                    href="mailto:ceylonholidaytrip@gmail.com"
                    className="text-gray-600 hover:text-[#e53e3e] transition-colors duration-300"
                  >
                    ceylonholidaytrip@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="bg-white/60 p-2 rounded-lg text-gray-600 hover:text-[#e53e3e] hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg border border-[#d4af37]/20"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="bg-white/60 p-2 rounded-lg text-gray-600 hover:text-[#e53e3e] hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg border border-[#d4af37]/20"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="bg-white/60 p-2 rounded-lg text-gray-600 hover:text-[#e53e3e] hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg border border-[#d4af37]/20"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#d4af37]/30 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-600 text-sm">© 2025 CEYLON HOLIDAY TRIP</p>
          <div className="mx-4 hidden md:block text-[#e53e3e]">|</div>
          <p className="text-gray-600 text-sm">All rights reserved.</p>
        </div>
      </div>

      {/* Add CSS for 3D shadows and animations */}
      <style >{`
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(212, 175, 55, 0.15),
                      0 10px 30px -10px rgba(229, 62, 62, 0.1);
        }
        
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -15px rgba(212, 175, 55, 0.2),
                      0 20px 40px -15px rgba(229, 62, 62, 0.15),
                      0 0 30px -5px rgba(212, 175, 55, 0.1);
        }
      `}</style>
    </footer>
  );
};

export default Footer;