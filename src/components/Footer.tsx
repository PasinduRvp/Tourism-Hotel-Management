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
      className="bg-gradient-to-br from-foreground to-primary text-white"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold font-poppins mb-4">
              Sri Lanka Tourism
            </h3>
            <p className="text-white/80 mb-6 max-w-md font-thin">
              Your trusted partner for authentic Sri Lankan experiences. Led by
              Mr. A in the United Kingdom and Mr. Wimukthi in Sri Lanka, our
              agency connects travelers from the UK to the heart of the island.
              Together, we craft unforgettable journeys that capture the true
              spirit, culture, and beauty of the Pearl of the Indian Ocean.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/packages"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Tour Packages
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/customize-package"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Build Your Trip
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-4">
              Contact Info
            </h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-white" />
                <a
                  href="https://www.google.com/maps/place/Colombo,+Sri+Lanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-accent transition-colors"
                >
                  Colombo, Sri Lanka
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-white" />
                <a
                  href="tel:+94771234567"
                  className="text-white/90 hover:text-accent transition-colors"
                >
                  +94 77 123 4567
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-white" />
                <a
                  href="mailto:ceylonholidaytrip@gmail.com"
                  className="text-white/90 hover:text-accent transition-colors"
                >
                  ceylonholidaytrip@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/70 hover:text-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-accent transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-white/70 text-sm">© 2025 CEYLON HOLIDAY TRIP</p>
          <div className="mx-4 hidden md:block">|</div>
          <p className="text-white/70 text-sm">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
