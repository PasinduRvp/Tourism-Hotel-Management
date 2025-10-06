import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  MapPin, 
  Clock, 
  Camera, 
  Utensils, 
  Car, 
  ChevronDown, 
  ChevronUp,
  ArrowDown,
  Star,
  Mountain,
  Waves,
  TreePine
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Activity {
  time: string;
  title: string;
  description: string;
  location: string;
  type: 'transport' | 'sightseeing' | 'meal' | 'activity' | 'accommodation';
  icon?: React.ReactNode;
  highlights?: string[];
}

interface DayData {
  day: number;
  title: string;
  location: string;
  theme: string;
  activities: Activity[];
  accommodation: string;
  meals: string[];
  distance?: string;
  travelTime?: string;
}

interface DayItineraryProps {
  days: DayData[];
  packageColor?: 'primary' | 'accent' | 'success';
}

const getActivityIcon = (type: string) => {
  switch (type) {
    case 'transport': return <Car className="w-4 h-4" />;
    case 'sightseeing': return <Camera className="w-4 h-4" />;
    case 'meal': return <Utensils className="w-4 h-4" />;
    case 'activity': return <Mountain className="w-4 h-4" />;
    case 'accommodation': return <Star className="w-4 h-4" />;
    default: return <MapPin className="w-4 h-4" />;
  }
};

const DayItinerary: React.FC<DayItineraryProps> = ({ days, packageColor = 'primary' }) => {
  const [expandedDays, setExpandedDays] = useState<Set<number>>(new Set([1]));
  const [activeDay, setActiveDay] = useState<number>(1);
  const [animatingDay, setAnimatingDay] = useState<number | null>(null);
  const [journeyProgress, setJourneyProgress] = useState<number>(0);
  const dayRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Calculate journey progress based on active day
  useEffect(() => {
    const progress = (activeDay / days.length) * 100;
    setJourneyProgress(progress);
  }, [activeDay, days.length]);

  const toggleDay = (dayNumber: number) => {
    setAnimatingDay(dayNumber);
    const newExpanded = new Set(expandedDays);
    if (expandedDays.has(dayNumber)) {
      newExpanded.delete(dayNumber);
    } else {
      newExpanded.add(dayNumber);
      setActiveDay(dayNumber);
    }
    setExpandedDays(newExpanded);
    
    // Clear animation state after transition
    setTimeout(() => setAnimatingDay(null), 500);
  };

  const scrollToDay = (dayNumber: number) => {
    const dayElement = dayRefs.current[dayNumber - 1];
    if (dayElement) {
      // Add smooth scroll with easing
      dayElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
      setActiveDay(dayNumber);
      setAnimatingDay(dayNumber);
      
      if (!expandedDays.has(dayNumber)) {
        setTimeout(() => toggleDay(dayNumber), 300);
      }
      
      setTimeout(() => setAnimatingDay(null), 800);
    }
  };

  const colorClasses = {
    primary: 'border-primary text-primary bg-primary/10',
    accent: 'border-accent text-accent bg-accent/10', 
    success: 'border-success text-success bg-success/10'
  };

  return (
    <div className="space-y-8">
      {/* Journey Progress Bar */}
      <div className="relative mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Journey Progress</h3>
          <span className="text-sm text-muted-foreground">
            Day {activeDay} of {days.length}
          </span>
        </div>
        <div className="relative h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className={cn(
              "absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out",
              `bg-gradient-to-r from-${packageColor} to-${packageColor}/60`
            )}
            style={{ width: `${journeyProgress}%` }}
          />
          <div 
            className={cn(
              "absolute top-0 h-full w-4 rounded-full opacity-80 transition-all duration-1000 ease-out",
              `bg-${packageColor} shadow-lg animate-pulse`
            )}
            style={{ left: `calc(${journeyProgress}% - 8px)` }}
          />
        </div>
      </div>

      {/* Day Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 p-6 bg-gradient-to-r from-muted/30 to-muted/10 rounded-xl backdrop-blur-sm">
        <h3 className="text-lg font-semibold mb-4 w-full flex items-center">
          <MapPin className="w-5 h-5 mr-2" />
          Quick Navigation
        </h3>
        {days.map((day, index) => (
          <Button
            key={day.day}
            variant={activeDay === day.day ? "default" : "outline"}
            size="sm"
            onClick={() => scrollToDay(day.day)}
            className={cn(
              "relative transition-all duration-300 hover-scale group overflow-hidden",
              activeDay === day.day && [
                colorClasses[packageColor],
                "shadow-lg transform scale-105"
              ],
              animatingDay === day.day && "animate-pulse"
            )}
            style={{ 
              animationDelay: `${index * 50}ms`,
              transitionDelay: `${index * 25}ms`
            }}
          >
            <span className="relative z-10">Day {day.day}</span>
            {activeDay === day.day && (
              <div className={cn(
                "absolute inset-0 opacity-20 transition-all duration-500",
                `bg-gradient-to-r from-${packageColor}/0 via-${packageColor}/40 to-${packageColor}/0`
              )} />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Button>
        ))}
      </div>

      {/* Days Timeline */}
      <div className="relative">
        {/* Animated Connecting Line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-muted via-muted-foreground/20 to-muted rounded-full" />
        <div 
          className={cn(
            "absolute left-8 top-0 w-1 rounded-full transition-all duration-1000 ease-out",
            `bg-gradient-to-b from-${packageColor} via-accent to-success`
          )}
          style={{ height: `${journeyProgress}%` }}
        />
        
        {/* Traveling car indicator */}
        <div 
          className={cn(
            "absolute left-5 w-6 h-6 rounded-full bg-white border-2 border-white flex items-center justify-center transition-all duration-1000 ease-out z-20 shadow-lg",
            `text-${packageColor}`
          )}
          style={{ 
            top: `calc(${journeyProgress}% - 12px)`,
            boxShadow: `0 0 20px hsl(var(--${packageColor})/0.6)`
          }}
        >
          <Car className="w-4 h-4" />
        </div>
        
        {days.map((day, index) => (
          <div 
            key={day.day} 
            ref={(el) => dayRefs.current[day.day - 1] = el}
            className={cn(
              "relative mb-12 transition-all duration-500",
              activeDay >= day.day ? "animate-fade-in" : "opacity-50 translate-y-4",
              animatingDay === day.day && "animate-pulse"
            )}
            style={{ 
              animationDelay: `${index * 150}ms`,
              transitionDelay: `${index * 100}ms`
            }}
          >
            {/* Day Connector Location Icon with enhanced animations */}
            <div className={cn(
              "absolute left-5 w-7 h-7 rounded-full border-3 bg-background z-10 transition-all duration-500 hover:scale-125 cursor-pointer flex items-center justify-center",
              expandedDays.has(day.day) 
                ? [
                    `border-${packageColor} shadow-lg`,
                    "animate-pulse scale-110"
                  ]
                : activeDay >= day.day
                ? `border-${packageColor}/60 shadow-md`
                : "border-muted-foreground/30",
              day.day === activeDay && [
                "ring-4 ring-white/50",
                `shadow-2xl shadow-${packageColor}/40`
              ]
            )}
            onClick={() => scrollToDay(day.day)}
            style={{
              boxShadow: expandedDays.has(day.day) 
                ? `0 0 25px hsl(var(--${packageColor})/0.4), 0 0 50px hsl(var(--${packageColor})/0.2)` 
                : undefined
            }}
            >
              <MapPin className={cn(
                "w-4 h-4 transition-colors duration-300",
                expandedDays.has(day.day) || activeDay >= day.day
                  ? `text-${packageColor}`
                  : "text-muted-foreground"
              )} />
            </div>

            {/* Day Card with enhanced animations */}
            <div className="ml-20">
              <Card className={cn(
                "tourism-card cursor-pointer transition-all duration-500 hover-scale group relative overflow-hidden",
                expandedDays.has(day.day) && [
                  "ring-2 shadow-elegant transform scale-[1.02]",
                  `ring-${packageColor}/30 shadow-${packageColor}/10`
                ],
                activeDay === day.day && "border-primary/50",
                animatingDay === day.day && "animate-scale-in"
              )}>
                <CardHeader 
                  className="pb-4"
                  onClick={() => toggleDay(day.day)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={cn(
                        "relative w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl transition-all duration-500 group-hover:scale-110",
                        `bg-gradient-to-br from-${packageColor} to-${packageColor}/80`,
                        expandedDays.has(day.day) && [
                          "scale-125 shadow-2xl animate-pulse",
                          `shadow-${packageColor}/50`
                        ],
                        activeDay === day.day && "ring-4 ring-white/30"
                      )}
                      style={{
                        boxShadow: expandedDays.has(day.day) 
                          ? `0 10px 30px hsl(var(--${packageColor})/0.4)` 
                          : `0 5px 15px hsl(var(--${packageColor})/0.2)`
                      }}
                      >
                        <span className="relative z-10">{day.day}</span>
                        <div className={cn(
                          "absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                          `bg-gradient-to-r from-white/20 to-transparent`
                        )} />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-poppins">{day.title}</CardTitle>
                        <div className="flex items-center text-muted-foreground mt-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{day.location}</span>
                          {day.distance && (
                            <>
                              <span className="mx-2">•</span>
                              <Car className="w-4 h-4 mr-1" />
                              <span className="text-sm">{day.distance}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className="text-xs">
                        {day.theme}
                      </Badge>
                      {expandedDays.has(day.day) ? (
                        <ChevronUp className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                </CardHeader>

                {/* Expanded Day Content with staggered animations */}
                {expandedDays.has(day.day) && (
                  <CardContent className="pt-0 animate-fade-in overflow-hidden">
                    {/* Background gradient overlay */}
                    <div className={cn(
                      "absolute inset-0 opacity-5 pointer-events-none",
                      `bg-gradient-to-br from-${packageColor}/20 to-transparent`
                    )} />
                    <div className="space-y-6">
                      {/* Activities Timeline */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg flex items-center">
                          <Clock className="w-5 h-5 mr-2 text-primary" />
                          Daily Schedule
                        </h4>
                        {day.activities.map((activity, actIndex) => (
                          <div 
                            key={actIndex} 
                            className={cn(
                              "flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover-scale group relative overflow-hidden",
                              "bg-gradient-to-r from-muted/20 to-muted/10 hover:from-muted/40 hover:to-muted/20",
                              "border border-muted/20 hover:border-primary/20"
                            )}
                            style={{ 
                              animationDelay: `${actIndex * 100}ms`,
                              animation: expandedDays.has(day.day) ? 'fade-in 0.5s ease-out' : 'none'
                            }}
                          >
                            {/* Hover gradient effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            <div className="flex-shrink-0">
                              <div className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center text-white text-sm",
                                `bg-${packageColor}/80`
                              )}>
                                {getActivityIcon(activity.type)}
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h5 className="font-semibold text-foreground">{activity.title}</h5>
                                <span className="text-sm text-muted-foreground bg-background px-2 py-1 rounded">
                                  {activity.time}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">{activity.description}</p>
                              <div className="flex items-center mt-2 text-xs text-muted-foreground">
                                <MapPin className="w-3 h-3 mr-1" />
                                {activity.location}
                              </div>
                              {activity.highlights && (
                                <div className="flex flex-wrap gap-1 mt-2">
                                  {activity.highlights.map((highlight, hIndex) => (
                                    <Badge key={hIndex} variant="outline" className="text-xs">
                                      {highlight}
                                    </Badge>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Day Summary */}
                      <div className="grid md:grid-cols-2 gap-4 p-4 bg-gradient-to-r from-muted/30 to-muted/10 rounded-lg">
                        <div>
                          <h5 className="font-semibold text-sm mb-2 flex items-center">
                            <Star className="w-4 h-4 mr-1 text-accent" />
                            Accommodation
                          </h5>
                          <p className="text-sm text-muted-foreground">{day.accommodation}</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-sm mb-2 flex items-center">
                            <Utensils className="w-4 h-4 mr-1 text-accent" />
                            Meals Included
                          </h5>
                          <div className="flex flex-wrap gap-1">
                            {day.meals.map((meal, mIndex) => (
                              <Badge key={mIndex} variant="secondary" className="text-xs">
                                {meal}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            </div>

            {/* Enhanced Connecting Arrow with journey flow */}
            {index < days.length - 1 && (
              <div className="flex justify-center my-8 relative">
                <div className={cn(
                  "relative w-12 h-12 rounded-full flex items-center justify-center text-red transition-all duration-500 hover-scale group cursor-pointer",
                  `bg-gradient-to-br from-${packageColor}/70 to-${packageColor}/50`,
                  "shadow-lg hover:shadow-xl animate-pulse",
                  activeDay > day.day && "animate-bounce"
                )}
                onClick={() => scrollToDay(day.day + 1)}
                style={{
                  boxShadow: `0 8px 25px hsl(var(--${packageColor})/0.3)`,
                  animation: activeDay > day.day 
                    ? 'bounce 2s infinite, pulse 2s infinite' 
                    : 'pulse 3s infinite'
                }}
                >
                  <ArrowDown className={cn(
                    "w-5 h-5 transition-transform duration-300 group-hover:translate-y-1",
                    activeDay > day.day && "animate-bounce"
                  )} />
                  
                  {/* Ripple effect */}
                  <div className={cn(
                    "absolute inset-0 rounded-full border-2 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500",
                    `border-${packageColor}/30`
                  )} />
                  
                  {/* Next day preview tooltip */}
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-background/90 backdrop-blur-sm px-3 py-1 rounded-lg border text-xs text-foreground whitespace-nowrap">
                      Next: {days[day.day]?.title}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayItinerary;