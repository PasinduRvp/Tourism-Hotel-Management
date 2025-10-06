import React, { useEffect, useState, useRef, useMemo } from 'react';
import { Car, MapPin } from 'lucide-react';

interface Destination {
  name: string;
  x: number;
  y: number;
  order: number;
}

interface AnimatedMapProps {
  destinations: Destination[];
  className?: string;
}

const AnimatedMap: React.FC<AnimatedMapProps> = ({ destinations, className = "" }) => {
  const [currentDestination, setCurrentDestination] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carRef = useRef<HTMLDivElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const sortedDestinations = useMemo(
    () => [...destinations].sort((a, b) => a.order - b.order),
    [destinations]
  );

  useEffect(() => {
    if (sortedDestinations.length === 0 || !carRef.current) return;

    const initial = sortedDestinations[0];
    if (carRef.current) {
      carRef.current.style.left = `${initial.x}%`;
      carRef.current.style.top = `${initial.y}%`;
    }
    setCurrentDestination(0);
  }, [sortedDestinations]);

  const animateToDestination = (targetIndex: number) => {
    if (isAnimating || targetIndex < 0 || targetIndex >= sortedDestinations.length || targetIndex === currentDestination) return;

    setIsAnimating(true);

    const fromIndex = currentDestination;
    const currentPos = sortedDestinations[fromIndex];
    const targetPos = sortedDestinations[targetIndex];

    const dx = targetPos.x - currentPos.x;
    const dy = targetPos.y - currentPos.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const duration = Math.max(1500, distance * 30);

    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      const currentX = currentPos.x + dx * eased;
      const currentY = currentPos.y + dy * eased;

      if (carRef.current) {
        carRef.current.style.left = `${currentX}%`;
        carRef.current.style.top = `${currentY}%`;
        
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        carRef.current.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCurrentDestination(targetIndex);
        setIsAnimating(false);
      }
    };

    animate();
  };

  const handleNext = () => {
    animateToDestination(currentDestination + 1);
  };

  const handlePrev = () => {
    animateToDestination(currentDestination - 1);
  };

  if (sortedDestinations.length === 0) return null;

  return (
    <div 
      ref={mapContainerRef}
      className={`relative w-full h-full overflow-hidden bg-gray-100 ${className}`}
    >
      {/* Background Map Image */}
      <img 
        src="https://www.stepmap.com/map/Colombo-Sigiriya-Dambulla-Kandy-Nuwera-Eliya-Galle-Colombo-1682753.png"
        alt="Sri Lanka Map"
        className="absolute inset-0 w-full h-full object-contain"
      />

      {/* Route Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
        {sortedDestinations.map((destination, index) => {
          if (index >= sortedDestinations.length - 1 || index >= currentDestination) return null;
          const nextDestination = sortedDestinations[index + 1];

          return (
            <line
              key={`route-${index}`}
              x1={`${destination.x}%`}
              y1={`${destination.y}%`}
              x2={`${nextDestination.x}%`}
              y2={`${nextDestination.y}%`}
              stroke="#14B8A6"
              strokeWidth="2"
              strokeDasharray="5,5"
              strokeOpacity="0.6"
            />
          );
        })}
      </svg>

      {/* Destinations */}
      {sortedDestinations.map((destination, index) => (
        <div
          key={destination.name}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${destination.x}%`,
            top: `${destination.y}%`,
            zIndex: 20,
          }}
        >
          <div className={`transition-all duration-300 ${index === currentDestination ? 'scale-125' : 'scale-100'}`}>
            <div className="relative w-8 h-8 flex items-center justify-center rounded-full bg-teal-500 text-white shadow-lg">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 whitespace-nowrap">
              <span className={`text-xs font-medium px-2 py-1 rounded-full bg-white/90 text-teal-600 shadow-md transition-all ${
                index === currentDestination ? 'bg-white font-semibold' : ''
              }`}>
                {destination.name}
              </span>
            </div>
          </div>
        </div>
      ))}

      {/* Animated Car */}
      <div
        ref={carRef}
        className="absolute w-10 h-10 flex items-center justify-center bg-teal-600 rounded-full shadow-xl text-white transition-transform"
        style={{
          transform: 'translate(-50%, -50%)',
          zIndex: 30,
        }}
      >
        <Car className="w-6 h-6" />
      </div>

      {/* Package Info */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg text-teal-900" style={{ zIndex: 40 }}>
        <div className="text-sm font-semibold">
          Step {currentDestination + 1} of {sortedDestinations.length}: {sortedDestinations[currentDestination].name}
        </div>
        <div className="text-xs text-gray-600">Exploring Sri Lanka</div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 right-4 flex space-x-2" style={{ zIndex: 40 }}>
        <button 
          onClick={handlePrev} 
          disabled={isAnimating || currentDestination === 0} 
          className="px-4 py-2 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Previous
        </button>
        <button 
          onClick={handleNext} 
          disabled={isAnimating || currentDestination === sortedDestinations.length - 1} 
          className="px-4 py-2 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
};

// Demo with correctly aligned coordinates for the specific map
const App = () => {
  return (
    <div className="w-full h-screen p-4 bg-gray-50">
      <AnimatedMap 
        destinations={[
          { name: 'Colombo', x: 48, y: 73, order: 1 },
          { name: 'Sigiriya', x: 56, y: 40, order: 2 },
          { name: 'Dambulla', x: 54, y: 45, order: 3 },
          { name: 'Kandy', x: 53, y: 58, order: 4 },
          { name: 'Nuwara Eliya', x: 56, y: 65, order: 5 },
          { name: 'Galle', x: 50, y: 82, order: 6 },
          { name: 'Colombo', x: 48, y: 73, order: 7 },
        ]}
        className="w-full h-full rounded-xl shadow-2xl"
      />
    </div>
  );
};

export default App;