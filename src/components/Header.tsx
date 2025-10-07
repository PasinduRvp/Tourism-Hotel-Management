import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleNavigation = (path, sectionId) => {
    if (location.pathname !== "/" && sectionId) {
      navigate("/");
      setTimeout(() => scrollToSection(sectionId), 100);
    } else if (sectionId) {
      scrollToSection(sectionId);
    } else {
      navigate(path);
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: "Home", action: () => navigate("/") },
    { label: "Packages", action: () => navigate("/packages") },
    { label: "Gallery", action: () => navigate("/gallery") },
    { label: "About", action: () => navigate("/about") },
    { label: "Contact", action: () => navigate("/contact") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-lg shadow-lg border-b border-gray-200/50"
          : "bg-gradient-to-b from-black/30 to-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => navigate("/")}
          >
            <img
              src="/CHT_LOGO.png"
              alt="CEYLON HOLIDAY TRIP Logo"
              className="w-12 h-12 object-contain group-hover:scale-105 transition-transform"
            />
            <div>
              <h1
                className={`text-xl font-bold transition-colors ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                CEYLON HOLIDAY TRIP
              </h1>
              <p
                className={`text-xs font-medium transition-colors ${
                  isScrolled ? "text-gray-600" : "text-white/90"
                }`}
              >
                SRI LANKA
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className={`font-medium transition-all duration-200 hover:scale-105 relative group ${
                  isScrolled
                    ? "text-gray-900 hover:text-blue-600"
                    : "text-white hover:text-white/95"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-blue-600" : "bg-white"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Glass Theme Phone Button */}
            <button
              onClick={() => window.location.href = "tel:+94771234567"}
              className={`flex items-center bg-white/40 space-x-2 px-4 py-2 rounded-xl backdrop-blur-md border transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? "bg-white/80 border-gray-300/50 text-gray-700 hover:bg-white hover:shadow-lg"
                  : "bg-white/20 border-white/30 text-white hover:bg-white/30 hover:shadow-lg"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+94 77 123 4567</span>
            </button>

            <Button
              onClick={() => {
                navigate("/customize-package");
                setIsOpen(false);
              }}
              className="w-40 px-0 py-4 bg-gradient-to-r from-[#d4af37] to-[#e53e3e] 
              hover:from-[#d4af37] hover:to-[#e53e3e] text-white font-semibold text-sm 
              rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
            >
              Plan Your Trip
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-gray-700 hover:bg-white/60"
                : "text-white hover:bg-white/20"
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[500px] opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/50 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200/50 p-4 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="block w-full text-left py-3 px-4 text-gray-900 
                hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all 
                duration-200 font-medium hover:translate-x-2"
              >
                {item.label}
              </button>
            ))}

            <div className="border-t border-gray-200 pt-4 mt-2">
              {/* Glass Theme Phone Button for Mobile */}
              <button
                onClick={() => window.location.href = "tel:+94771234567"}
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 mb-3 
                bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-md 
                border border-gray-300/50 text-gray-700 rounded-xl 
                transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+94 77 123 4567</span>
              </button>

              <Button
                onClick={() => {
                  navigate("/customize-package");
                  setIsOpen(false);
                }}
                className="w-full py-4 text-lg bg-gradient-to-r from-[#d4af37] to-[#e53e3e] 
                hover:from-[#e53e3e] hover:to-[#d4af37] text-white font-semibold 
                rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
              >
                Plan Your Trip
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;