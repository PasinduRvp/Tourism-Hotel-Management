import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Globe,
  Heart,
  Code,
  Palette,
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
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-[#d4af37]/20 to-[#e53e3e]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-[#e53e3e]/30 to-[#d4af37]/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-amber-200/20 to-[#d4af37]/20 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute top-3/4 left-1/4 w-24 h-24 bg-gradient-to-r from-[#e53e3e]/20 to-amber-200/20 rounded-full blur-2xl animate-pulse delay-1500"></div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-[#d4af37] to-[#e53e3e] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${15 + Math.random() * 20}s infinite ease-in-out ${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-[#d4af37]/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:translate-y-[-5px]">
              <h3 className="text-2xl font-bold font-poppins mb-4 bg-gradient-to-r from-[#d4af37] to-[#e53e3e] bg-clip-text text-transparent">
                CEYLON HOLIDAY TRIP
              </h3>
              <p className="text-gray-600 mb-6 max-w-md font-light leading-relaxed">
                Your trusted partner for authentic Sri Lankan experiences. Led by
                Mr. A in the United Kingdom and Mr. Wimukthi in Sri Lanka, our
                agency connects travelers from the UK to the heart of the island.
                Together, we craft unforgettable journeys that capture the true
                spirit, culture, and beauty of the Pearl of the Indian Ocean.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Globe className="w-4 h-4 mr-1 text-[#e53e3e]" />
                  <span>Global Tourism Services</span>
                </div>
                <div className="w-1 h-1 bg-[#d4af37] rounded-full"></div>
                <div className="flex items-center text-sm text-gray-500">
                  <Heart className="w-4 h-4 mr-1 text-[#e53e3e]" />
                  <span>Since 2015</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-[#d4af37]/20 shadow-2xl h-full hover:shadow-3xl transition-all duration-500 hover:translate-y-[-5px]">
              <h4 className="text-lg font-semibold font-poppins mb-4 text-[#e53e3e]">
                Explore
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Tour Packages", href: "/packages" },
                  { name: "Photo Gallery", href: "/gallery" },
                  { name: "About Us", href: "/about" },
                  { name: "Build Your Trip", href: "/customize-package" },
                  { name: "Testimonials", href: "/testimonials" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-[#e53e3e] transition-all duration-300 hover:translate-x-2 flex items-center group"
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#d4af37] to-[#e53e3e] rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-[#d4af37]/20 shadow-2xl h-full hover:shadow-3xl transition-all duration-500 hover:translate-y-[-5px]">
              <h4 className="text-lg font-semibold font-poppins mb-4 text-[#e53e3e]">
                Get In Touch
              </h4>
              <div className="space-y-4 mb-6">
                {[
                  {
                    icon: MapPin,
                    text: "UK & Sri Lanka",
                    href: "https://www.google.com/maps/place/Colombo,+Sri+Lanka",
                    external: true,
                  },
                  {
                    icon: Phone,
                    text: "0447460511586",
                    href: "tel:+447460511586",
                  },
                  {
                    icon: Mail,
                    text: "ceylonholidaytrip@gmail.com",
                    href: "mailto:ceylonholidaytrip@gmail.com",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="bg-gradient-to-r from-[#d4af37] to-[#e53e3e] p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : "_self"}
                      rel={item.external ? "noopener noreferrer" : ""}
                      className="text-gray-600 hover:text-[#e53e3e] transition-colors duration-300 text-sm"
                    >
                      {item.text}
                    </a>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Twitter, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-white/60 p-2 rounded-lg text-gray-600 hover:text-[#e53e3e] hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg border border-[#d4af37]/20 group"
                  >
                    <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Combined Developer Credit & Bottom Bar */}
        <div className="mt-12">
          <div className="bg-gradient-to-r from-[#d4af37]/10 to-[#e53e3e]/10 rounded-2xl p-6 border border-[#d4af37]/20 backdrop-blur-lg">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              {/* Copyright Section */}
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
                <div className="flex items-center space-x-2">
                  <p className="text-gray-600 text-sm font-medium">
                    © 2025 CEYLON HOLIDAY TRIP
                  </p>
                  <div className="w-1 h-1 bg-[#d4af37] rounded-full hidden sm:block"></div>
                  <p className="text-gray-600 text-sm">
                    All rights reserved.
                  </p>
                </div>
              </div>

              {/* Developer Credit */}
              <div className="flex items-center space-x-4">
                <div className="hidden lg:block w-px h-8 bg-gradient-to-b from-transparent via-[#d4af37] to-transparent"></div>
                <div className="flex items-center space-x-3">
                  
                  <div className="text-right">
                    <p className="text-xs text-gray-500 mb-1">Designed & Developed by</p>
                    <a
                      href="https://www.pasinduvidanapathirana.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <p className="text-sm font-semibold bg-gradient-to-r from-[#d4af37] to-[#e53e3e] bg-clip-text text-transparent group-hover:from-[#e53e3e] group-hover:to-[#d4af37] transition-all duration-300">
                        Pasindu Vidanapathirana
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(120deg);
          }
          66% {
            transform: translateY(5px) rotate(240deg);
          }
        }
        
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(212, 175, 55, 0.15),
                      0 10px 30px -10px rgba(229, 62, 62, 0.1),
                      0 0 0 1px rgba(212, 175, 55, 0.05);
        }
        
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -15px rgba(212, 175, 55, 0.2),
                      0 20px 40px -15px rgba(229, 62, 62, 0.15),
                      0 0 30px -5px rgba(212, 175, 55, 0.1),
                      0 0 0 1px rgba(212, 175, 55, 0.1);
        }
      `}</style>
    </footer>
  );
};

export default Footer;