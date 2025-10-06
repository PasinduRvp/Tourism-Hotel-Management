import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

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

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between h-full px-4 max-w-7xl mx-auto">
        {/* Enhanced Main Content */}
        <div className="text-left max-w-2xl">
          <div
            className={cn(
              "transition-all duration-700 ease-out transform",
              isTransitioning
                ? "opacity-0 translate-y-8 blur-sm"
                : "opacity-100 translate-y-0 blur-0"
            )}
          >
            {/* Website Name */}
            <h1 className="text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-[#d4af37] to-[#e53e3e] bg-clip-text text-transparent">
                CEYLON HOLIDAY TRIP
              </span>
            </h1>

            {/* Short Description */}
            <p className="text-xl text-white/90 mb-8 max-w-lg leading-relaxed backdrop-blur-sm bg-black/20 rounded-lg p-4 border-l-4 border-[#d4af37]">
              Discover unforgettable journeys to the world's most breathtaking
              destinations. Your dream vacation is just one click away.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex gap-6 items-center">
              <Link to="/packages">
              <Button
                className="relative overflow-hidden group bg-gradient-to-r from-[#1a365d] to-[#2d3748] hover:from-[#d4af37] hover:to-[#e53e3e] text-white font-semibold px-8 py-5 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl border-0"
              >
                <span className="relative z-10 flex items-center">
                  Explore Packages
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37] to-[#e53e3e] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Button>
              </Link>

              <Link to="/contact">
                <Button
                  variant="outline"
                  className="bg-white/10 backdrop-blur-lg border-white/30 text-white hover:bg-white hover:text-[#1a365d] px-6 py-5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 group"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-6">
        <div className="flex gap-3 bg-white/10 backdrop-blur-lg rounded-full p-2 border border-white/20">
          {destinations.map((_, index) => (
            <button
              key={index}
              onClick={() => goToDestination(index)}
              className={cn(
                "relative rounded-full transition-all duration-500 group",
                index === currentDestination
                  ? "w-12 bg-gradient-to-r from-[#d4af37] to-[#e53e3e]"
                  : "w-3 bg-white/40 hover:bg-white/60"
              )}
              style={{
                height: index === currentDestination ? "12px" : "12px",
              }}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-8 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs font-medium uppercase tracking-wider rotate-90 origin-center whitespace-nowrap mb-12">
            Scroll to Explore
          </span>
          <div className="w-0.5 h-12 bg-gradient-to-b from-[#d4af37] to-transparent rounded-full animate-bounce" />
        </div>
      </div>

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
        `}
      </style>
    </section>
  );
};

export default Hero;
