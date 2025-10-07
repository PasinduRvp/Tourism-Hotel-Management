import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Color palette from your logo
  const colors = {
    primary: "#1a365d", // Deep blue
    secondary: "#d4af37", // Golden yellow
    accent: "#e53e3e", // Warm red
    light: "#f7fafc",
    dark: "#2d3748",
  };

  const destinations = [
    {
      image: "/b.jpg",
    },
    {
      image: "/bb.jpg",
    },
    {
      image: "/bbb.jpg",
    },
    {
      image: "/aaaaa.jpg",
    },
  ];

  const [currentDestination, setCurrentDestination] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.4;
        heroRef.current.style.transform = `translateY(${parallax}px) scale(${
          1 + scrolled * 0.0002
        })`;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentDestination((prev) => (prev + 1) % destinations.length);
        setIsTransitioning(false);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, [destinations.length]);

  const scrollToPackages = () => {
    const packagesSection = document.getElementById("packages");
    packagesSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const goToDestination = (index: number) => {
    if (index !== currentDestination) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentDestination(index);
        setIsTransitioning(false);
      }, 500);
    }
  };

  const nextDestination = () => {
    goToDestination((currentDestination + 1) % destinations.length);
  };

  const prevDestination = () => {
    goToDestination(
      currentDestination === 0
        ? destinations.length - 1
        : currentDestination - 1
    );
  };

  const currentDest = destinations[currentDestination];

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Animated Background */}
      <div
        ref={heroRef}
        className={cn(
          "absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 transition-all duration-1000 ease-out",
          isTransitioning && "scale-105 blur-xs"
        )}
        style={{
          backgroundImage: `url(${currentDest.image})`,
          transform: `translateX(${mousePosition.x * 0.5}px) translateY(${
            mousePosition.y * 0.5
          }px)`,
        }}
      />

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />

      {/* Animated Particles */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Content - Left aligned */}
      <div className="relative z-10 flex items-center h-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-left w-full max-w-2xl">
          <div
            className={cn(
              "transition-all duration-700 ease-out transform",
              isTransitioning
                ? "opacity-0 translate-y-8 blur-sm"
                : "opacity-100 translate-y-0 blur-0"
            )}
          >
            {/* Website Name - Responsive font sizes */}
            <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="font-openSans bg-gradient-to-r from-white via-[#d4af37] to-[#e53e3e] bg-clip-text text-transparent">
                CEYLON HOLIDAY TRIP
              </span>
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl font-semibold italic text-white/90 mb-6 sm:mb-8 max-w-lg leading-relaxed 
              backdrop-blur-sm bg-black/20 rounded-lg p-3 sm:p-4 border-l-4 border-[#d4af37]"
            >
              Discover unforgettable journeys to the world's most breathtaking
              destinations. Your dream vacation is just one click away.
            </p>

            {/* Enhanced CTA Buttons - Stack on mobile, row on larger screens */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 items-start sm:items-center">
              <Link to="/packages" className="w-full sm:w-auto">
                <Button className="relative overflow-hidden group bg-gradient-to-r from-[#d4af37] to-[#e53e3e] hover:from-[#e7e6e2] hover:to-[#835858] text-white font-semibold px-6 sm:px-8 py-4 sm:py-5 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl border-0 w-full sm:w-auto">
                  <span className="relative z-10 flex items-center justify-center sm:justify-start">
                    Explore Packages
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#e53e3e] to-[#d4af37] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </Button>
              </Link>

              <Link to="/contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="bg-white/40 backdrop-blur-lg border-white/50 text-white hover:bg-white hover:text-[#1a365d] px-6 py-4 sm:py-5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation Controls - Smaller on mobile */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 sm:gap-6">
        <div className="flex gap-2 sm:gap-3 bg-white/10 backdrop-blur-lg rounded-full p-1 sm:p-2 border border-white/20">
          {destinations.map((_, index) => (
            <button
              key={index}
              onClick={() => goToDestination(index)}
              className={cn(
                "relative rounded-full transition-all duration-500 group",
                index === currentDestination
                  ? "w-8 sm:w-12 bg-gradient-to-r from-[#d4af37] to-[#e53e3e]"
                  : "w-2 sm:w-3 bg-white/40 hover:bg-white/60"
              )}
              style={{
                height: index === currentDestination ? "8px" : "8px",
              }}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm bg-black/20">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-gradient-to-b from-[#d4af37] to-[#e53e3e] rounded-full mt-2"
          />
        </div>
      </motion.div>

      

      {/* Add CSS for float animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0) translateX(0);
            }
            50% {
              transform: translateY(-20px) translateX(10px);
            }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          /* Extra small screen breakpoint */
          @media (max-width: 475px) {
            .xs\\:block {
              display: block;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;