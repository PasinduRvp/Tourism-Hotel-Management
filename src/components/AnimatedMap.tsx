import React, { useEffect, useState } from 'react';
import { Car, MapPin } from 'lucide-react';

interface Destination {
  name: string;
  x: number; // percentage from left
  y: number; // percentage from top
  order: number;
}

interface AnimatedMapProps {
  destinations: Destination[];
  className?: string;
}

const AnimatedMap: React.FC<AnimatedMapProps> = ({ destinations, className = "" }) => {
  const [carPosition, setCarPosition] = useState({ x: 0, y: 0, rotation: 0 });
  const [currentDestination, setCurrentDestination] = useState(0);

  // Accurate Sri Lanka map outline based on real geography
  const sriLankaPath = "M85 10 L100 8 L115 10 L130 15 L145 22 L158 30 L168 40 L175 52 L180 65 L182 78 L183 92 L182 106 L179 120 L174 133 L167 145 L158 156 L147 165 L134 172 L120 177 L105 180 L90 181 L75 180 L61 177 L48 172 L36 165 L26 156 L18 145 L12 133 L8 120 L6 106 L7 92 L9 78 L13 65 L19 52 L27 40 L37 30 L49 22 L62 15 L75 10 L85 10 Z";

  useEffect(() => {
    if (destinations.length === 0) return;

    const sortedDestinations = [...destinations].sort((a, b) => a.order - b.order);
    let destinationIndex = 0;

    const animateCar = () => {
      const current = sortedDestinations[destinationIndex];
      const next = sortedDestinations[(destinationIndex + 1) % sortedDestinations.length];
      
      setCurrentDestination(destinationIndex);
      
      // Calculate rotation angle
      const dx = next.x - current.x;
      const dy = next.y - current.y;
      const rotation = Math.atan2(dy, dx) * 180 / Math.PI;
      
      setCarPosition({
        x: current.x,
        y: current.y,
        rotation
      });

      destinationIndex = (destinationIndex + 1) % sortedDestinations.length;
    };

    // Initial position
    animateCar();
    
    // Animate every 3 seconds
    const interval = setInterval(animateCar, 3000);
    
    return () => clearInterval(interval);
  }, [destinations]);

  if (destinations.length === 0) return null;

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Full Sri Lanka Map - Prominent Display */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 180 200"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Map Shadow/Glow */}
        <defs>
          <filter id="mapGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Main Map Shape */}
        <path
          d={sriLankaPath}
          fill="rgba(255,255,255,0.2)"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="2"
          filter="url(#mapGlow)"
          className="drop-shadow-lg"
        />
        
        {/* Map Border Highlight */}
        <path
          d={sriLankaPath}
          fill="none"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="1"
          strokeDasharray="5,5"
          className="animate-pulse"
        />
      </svg>

      {/* Destinations - Main Focus */}
      {destinations.map((destination, index) => (
        <div
          key={destination.name}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
          style={{
            left: `${destination.x}%`,
            top: `${destination.y}%`,
          }}
        >
          <div className={`transition-all duration-700 ${
            index === currentDestination ? 'scale-150' : 'scale-110'
          }`}>
            <div className="relative">
              {/* Destination Glow Effect */}
              <div className={`absolute inset-0 rounded-full blur-sm ${
                index === currentDestination 
                  ? 'bg-yellow-400/60 animate-pulse' 
                  : 'bg-white/20'
              }`} style={{ width: '32px', height: '32px', left: '-4px', top: '-4px' }} />
              
              {/* Main Pin */}
              <div className={`relative w-6 h-6 rounded-full flex items-center justify-center ${
                index === currentDestination 
                  ? 'bg-yellow-400 text-primary shadow-lg shadow-yellow-400/50 animate-bounce' 
                  : 'bg-white/90 text-primary shadow-lg'
              }`}>
                <MapPin className="w-4 h-4" />
              </div>
              
              {/* Destination Label */}
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <span className={`text-sm font-semibold px-3 py-1.5 rounded-full shadow-lg transition-all duration-500 ${
                  index === currentDestination
                    ? 'bg-white text-primary scale-110 shadow-xl'
                    : 'bg-white/90 text-primary/80'
                }`}>
                  {destination.name}
                </span>
              </div>
              
              {/* Current Destination Indicator */}
              {index === currentDestination && (
                <div className="absolute -inset-2 border-2 border-yellow-400 rounded-full animate-ping opacity-75" />
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Animated Car */}
      <div
        className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-[2800ms] ease-in-out"
        style={{
          left: `${carPosition.x}%`,
          top: `${carPosition.y}%`,
          transform: `translate(-50%, -50%) rotate(${carPosition.rotation}deg)`,
        }}
      >
        <div className="bg-white/90 rounded-full p-2 shadow-lg">
          <Car className="w-5 h-5 text-primary" />
        </div>
      </div>

      {/* Route Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
        {destinations.map((destination, index) => {
          const nextDestination = destinations[(index + 1) % destinations.length];
          return (
            <line
              key={`route-${index}`}
              x1={destination.x}
              y1={destination.y}
              x2={nextDestination.x}
              y2={nextDestination.y}
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="0.5"
              strokeDasharray="2,2"
              className="animate-pulse"
            />
          );
        })}
      </svg>

      {/* Package Info Overlay */}
      <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-3">
        <div className="text-white text-sm">
          <div className="font-semibold">{destinations.length} Destinations</div>
          <div className="text-xs opacity-80">Follow the journey</div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedMap;