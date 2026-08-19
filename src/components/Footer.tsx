import React from "react";
import { MapPin, Phone, Mail, Globe, Heart } from "lucide-react";

/**
 * lucide-react deprecated its brand icons, so the three social marks are
 * inlined here using lucide's own paths — same rendering, no deprecation.
 */
const brandIconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...brandIconProps} {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...brandIconProps} {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...brandIconProps} {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

/**
 * Fixed particle layout. Previously generated with Math.random() on every
 * render, which reshuffled the particles on each re-render and tripped
 * Sonar's PRNG rule; these values are purely decorative.
 */
const PARTICLES = [
  { id: "p1", left: 6, top: 18, duration: 21, delay: 0.4 },
  { id: "p2", left: 14, top: 72, duration: 27, delay: 2.1 },
  { id: "p3", left: 23, top: 35, duration: 18, delay: 1.3 },
  { id: "p4", left: 31, top: 88, duration: 31, delay: 3.4 },
  { id: "p5", left: 38, top: 11, duration: 24, delay: 0.9 },
  { id: "p6", left: 45, top: 57, duration: 29, delay: 4.2 },
  { id: "p7", left: 52, top: 26, duration: 16, delay: 1.8 },
  { id: "p8", left: 59, top: 81, duration: 33, delay: 2.7 },
  { id: "p9", left: 66, top: 43, duration: 20, delay: 0.2 },
  { id: "p10", left: 73, top: 68, duration: 26, delay: 3.9 },
  { id: "p11", left: 79, top: 15, duration: 22, delay: 1.1 },
  { id: "p12", left: 85, top: 92, duration: 34, delay: 4.6 },
  { id: "p13", left: 90, top: 49, duration: 19, delay: 2.4 },
  { id: "p14", left: 95, top: 30, duration: 28, delay: 0.7 },
  { id: "p15", left: 3, top: 61, duration: 25, delay: 3.1 },
];

const Footer = () => {
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
        {PARTICLES.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-gradient-to-r from-[#d4af37] to-[#e53e3e] rounded-full opacity-20"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animation: `float ${particle.duration}s infinite ease-in-out ${particle.delay}s`,
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
                ].map((item) => (
                  <div key={item.text} className="flex items-center group">
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
                  { name: "Facebook", icon: FacebookIcon, href: "#" },
                  { name: "Instagram", icon: InstagramIcon, href: "#" },
                  { name: "Twitter", icon: TwitterIcon, href: "#" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
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
                      href="https://portfolio-sj49.vercel.app/"
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