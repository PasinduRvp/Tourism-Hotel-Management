import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription');
  };

  return (
    <footer id="contact" className="bg-gradient-to-br from-foreground to-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold font-poppins mb-4">
              Sri Lanka Tourism
            </h3>
            <p className="text-white/80 mb-6 max-w-md">
              Your trusted partner for authentic Sri Lankan experiences. 
              Led by Dr. Menaka Ambeypitiya, we create unforgettable journeys 
              that showcase the true essence of the Pearl of the Indian Ocean.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-accent" />
                <span className="text-white/90">Colombo, Sri Lanka</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-accent" />
                <span className="text-white/90">+94 77 123 4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-accent" />
                <span className="text-white/90">info@srilanka-tours.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/packages" className="text-white/80 hover:text-accent transition-colors">Tour Packages</a></li>
              <li><a href="/gallery" className="text-white/80 hover:text-accent transition-colors">Gallery</a></li>
              <li><a href="/about" className="text-white/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="/customizer" className="text-white/80 hover:text-accent transition-colors">Build Your Trip</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-4">Stay Updated</h4>
            <p className="text-white/80 mb-4 text-sm">
              Get the latest travel tips and exclusive offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input 
                type="email" 
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button type="submit" className="w-full btn-primary">
                Send
              </Button>
            </form>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white/70 hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © 2024 Sri Lanka Tourism. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/70 hover:text-accent text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/70 hover:text-accent text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;