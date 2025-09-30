import React, { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, MapPin, Play, ChevronLeft, ChevronRight, Star, Clock, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import sigiriyaHero from '@/assets/sigiriya-hero.jpg';
import kandyHero from '@/assets/kandy-hero.jpg';
import ellaHero from '@/assets/ella-hero.jpg';
import galleHero from '@/assets/galle-hero.jpg';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Color palette from your logo
  const colors = {
    primary: '#1a365d', // Deep blue
    secondary: '#d4af37', // Golden yellow
    accent: '#e53e3e', // Warm red
    light: '#f7fafc',
    dark: '#2d3748',
  };

  const destinations = [
    { 
      name: "Sigiriya", 
      region: "Central Province", 
      title: "ANCIENT ROCK FORTRESS",
      description: "Marvel at the magnificent ruins of this 5th-century royal citadel, perched atop a 200-meter high rock column.",
      image: sigiriyaHero,
      activities: ["Rock Climbing", "Photography", "Historical Tours"],
      rating: 4.9,
      duration: "2 Days",
      bestSeason: "Jan-Apr"
    },
    { 
      name: "Kandy", 
      region: "Central Province", 
      title: "CULTURAL CAPITAL",
      description: "Experience the spiritual heart of Sri Lanka with the sacred Temple of the Tooth and traditional Kandyan dances.",
      image: kandyHero,
      activities: ["Temple Visits", "Cultural Shows", "Royal Botanical Gardens"],
      rating: 4.7,
      duration: "3 Days",
      bestSeason: "Year Round"
    },
    { 
      name: "Ella", 
      region: "Uva Province", 
      title: "HILL COUNTRY PARADISE",
      description: "Journey through emerald tea plantations and witness breathtaking views from Little Adam's Peak.",
      image: ellaHero,
      activities: ["Hiking", "Train Rides", "Tea Plantation Tours"],
      rating: 4.8,
      duration: "2 Days",
      bestSeason: "Dec-Mar"
    },
    { 
      name: "Galle", 
      region: "Southern Province", 
      title: "COLONIAL FORTRESS",
      description: "Wander through cobblestone streets within Dutch colonial walls overlooking the Indian Ocean.",
      image: galleHero,
      activities: ["Fort Tours", "Beach Walks", "Shopping"],
      rating: 4.6,
      duration: "1 Day",
      bestSeason: "Nov-Apr"
    }
  ];

  const [currentDestination, setCurrentDestination] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.4;
        heroRef.current.style.transform = `translateY(${parallax}px) scale(${1 + scrolled * 0.0002})`;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentDestination(prev => (prev + 1) % destinations.length);
        setIsTransitioning(false);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, [destinations.length]);

  const scrollToPackages = () => {
    const packagesSection = document.getElementById('packages');
    packagesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
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
    goToDestination(currentDestination === 0 ? destinations.length - 1 : currentDestination - 1);
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
          transform: `translateX(${mousePosition.x * 0.5}px) translateY(${mousePosition.y * 0.5}px)`
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
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between h-full px-4 max-w-7xl mx-auto">
        {/* Enhanced Main Content */}
        <div ref={contentRef} className="text-left max-w-2xl">
          <div className={cn(
            "transition-all duration-700 ease-out transform", 
            isTransitioning ? "opacity-0 translate-y-8 blur-sm" : "opacity-100 translate-y-0 blur-0"
          )}>
            {/* Location Badge */}
            <div className="flex items-center mb-6 group">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#d4af37] to-[#e53e3e] flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 rounded-full bg-[#d4af37] opacity-20 animate-ping group-hover:animate-none"></div>
              </div>
              <div>
                <span className="text-sm font-semibold text-white/90 font-poppins uppercase tracking-wider block">
                  {currentDest.region}
                </span>
                <span className="text-xs text-[#d4af37] font-medium">Currently Exploring</span>
              </div>
            </div>
            
            {/* Title with Gradient */}
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 font-poppins leading-tight">
              <span className="bg-gradient-to-r from-white via-white to-[#d4af37] bg-clip-text text-transparent">
                {currentDest.title.split(' ')[0]}
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#d4af37] to-[#e53e3e] bg-clip-text text-transparent">
                {currentDest.title.split(' ').slice(1).join(' ')}
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-lg font-light drop-shadow-lg">
              {currentDest.description}
            </p>
            
            {/* Enhanced Activity Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {currentDest.activities.map((activity, index) => (
                <span 
                  key={index}
                  className="px-4 py-3 bg-white/10 backdrop-blur-lg rounded-xl text-sm font-medium text-white/90 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                >
                  <span className="relative z-10">{activity}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/50 to-[#d4af37]/50 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </span>
              ))}
            </div>
            
            {/* Destination Stats */}
            <div className="flex gap-6 mb-8">
              <div className="flex items-center gap-2 text-white/80">
                <Star className="w-5 h-5 text-[#d4af37]" />
                <span className="font-semibold">{currentDest.rating}</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Clock className="w-5 h-5 text-[#1a365d]" />
                <span className="font-medium">{currentDest.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Users className="w-5 h-5 text-[#e53e3e]" />
                <span className="font-medium">Best: {currentDest.bestSeason}</span>
              </div>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex gap-4 items-center">
              <Button 
                onClick={scrollToPackages}
                className="relative overflow-hidden group bg-gradient-to-r from-[#1a365d] to-[#2d3748] hover:from-[#d4af37] hover:to-[#e53e3e] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl border-0"
              >
                <span className="relative z-10 flex items-center">
                  Explore Packages
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37] to-[#e53e3e] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Button>
              
              <Button 
                variant="outline"
                className="bg-white/10 backdrop-blur-lg border-white/30 text-white hover:bg-white hover:text-[#1a365d] px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 group"
              >
                <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Watch Story
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Destination Cards */}
        <div className="hidden lg:flex flex-col gap-4 max-w-xs">
          {destinations.map((destination, index) => (
            <div 
              key={destination.name}
              onClick={() => goToDestination(index)}
              className={cn(
                "relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ease-out group border-2 backdrop-blur-sm",
                index === currentDestination 
                  ? "scale-105 shadow-2xl border-[#d4af37]" 
                  : "scale-100 hover:scale-102 shadow-lg border-white/20 hover:border-white/40"
              )}
              style={{
                height: index === currentDestination ? '180px' : '140px',
              }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${destination.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              
              {/* Active Indicator */}
              {index === currentDestination && (
                <div className="absolute top-4 right-4">
                  <div className="w-4 h-4 bg-[#e53e3e] rounded-full animate-pulse shadow-lg ring-2 ring-white" />
                </div>
              )}
              
              <div className="absolute bottom-4 left-4 right-4 transform transition-transform duration-300 group-hover:translate-y-1">
                <h3 className={cn(
                  "font-bold text-lg font-poppins transition-colors duration-300",
                  index === currentDestination ? "text-[#d4af37]" : "text-white group-hover:text-[#d4af37]"
                )}>
                  {destination.name}
                </h3>
                <p className="text-white/80 text-sm">
                  {destination.region}
                </p>
                <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Star className="w-3 h-3 text-[#d4af37]" />
                  <span className="text-xs text-white/90">{destination.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Enhanced Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-6">
        <button 
          onClick={prevDestination}
          className="group w-14 h-14 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white hover:bg-[#1a365d] hover:border-[#1a365d] transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
        </button>
        
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
                height: index === currentDestination ? '12px' : '12px',
              }}
            >
              {index === currentDestination && (
                <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white whitespace-nowrap">
                  {destinations[index].name}
                </span>
              )}
            </button>
          ))}
        </div>
        
        <button 
          onClick={nextDestination}
          className="group w-14 h-14 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white hover:bg-[#1a365d] hover:border-[#1a365d] transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Enhanced Destination Counter */}
      <div className="absolute bottom-8 right-8 text-white/80 backdrop-blur-lg bg-white/10 rounded-2xl p-4 border border-white/20">
        <div className="text-center">
          <span className="text-4xl font-bold bg-gradient-to-r from-white to-[#d4af37] bg-clip-text text-transparent">
            {String(currentDestination + 1).padStart(2, '0')}
          </span>
          <span className="text-lg text-white/70 block">
            /{String(destinations.length).padStart(2, '0')}
          </span>
          <div className="w-12 h-0.5 bg-gradient-to-r from-[#d4af37] to-[#e53e3e] rounded-full mt-2 mx-auto" />
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
    </section>
  );
};



export default Hero;