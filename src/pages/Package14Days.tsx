import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DayItinerary from '../components/DayItinerary';
import BookingForm from '../components/BookingForm';
import AnimatedMap from '../components/AnimatedMap';
import { MapPin, Calendar, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Package14Days = () => {
  const navigate = useNavigate();

  // Destinations for the animated map
  const destinations = [
    { name: 'Colombo', x: 25, y: 75, order: 1 },
    { name: 'Sigiriya', x: 50, y: 35, order: 2 },
    { name: 'Dambulla', x: 45, y: 40, order: 3 },
    { name: 'Kandy', x: 40, y: 55, order: 4 },
    { name: 'Nuwara Eliya', x: 45, y: 65, order: 5 },
    { name: 'Ella', x: 55, y: 70, order: 6 },
    { name: 'Yala', x: 70, y: 80, order: 7 },
    { name: 'Galle', x: 30, y: 85, order: 8 }
  ];

  const detailedItinerary = [
    {
      day: 1,
      title: "Arrival in Colombo",
      location: "Colombo City", 
      theme: "Urban Discovery",
      activities: [
        {
          time: "10:00 AM",
          title: "Airport Welcome",
          description: "Meet your guide and luxury transfer",
          location: "BIA Airport",
          type: "transport" as const
        },
        {
          time: "2:00 PM", 
          title: "City Orientation Tour",
          description: "Explore Colombo's highlights and hidden gems",
          location: "Colombo Historic District",
          type: "sightseeing" as const,
          highlights: ["Independence Memorial", "Red Mosque", "Lotus Tower"]
        }
      ],
      accommodation: "5-star Colombo City Hotel",
      meals: ["Lunch", "Welcome Dinner"]
    },
    {
      day: 2,
      title: "Colombo to Sigiriya", 
      location: "Cultural Triangle",
      theme: "Ancient Heritage",
      distance: "170km",
      activities: [
        {
          time: "8:00 AM",
          title: "Journey to Cultural Triangle",
          description: "Scenic drive through authentic Sri Lanka", 
          location: "Highway Route",
          type: "transport" as const
        },
        {
          time: "12:00 PM",
          title: "Dambulla Golden Temple",
          description: "UNESCO World Heritage cave complex",
          location: "Dambulla", 
          type: "sightseeing" as const,
          highlights: ["Ancient Frescoes", "Buddha Statues", "Cave Temples"]
        }
      ],
      accommodation: "Heritage Resort with Sigiriya Views",
      meals: ["Breakfast", "Lunch", "Dinner"]
    },
    {
      day: 3,
      title: "Sigiriya & Polonnaruwa",
      location: "Ancient Cities",
      theme: "Archaeological",
      activities: [
        {
          time: "5:30 AM",
          title: "Sigiriya Rock Climb",
          description: "Sunrise ascent of the ancient rock fortress",
          location: "Sigiriya Rock",
          type: "activity" as const,
          highlights: ["Lion's Paws", "Frescoes", "Summit Views"]
        },
        {
          time: "2:00 PM",
          title: "Polonnaruwa Ancient City",
          description: "Explore medieval capital ruins",
          location: "Polonnaruwa",
          type: "sightseeing" as const,
          highlights: ["Gal Vihara", "Royal Palace", "Lotus Pond"]
        }
      ],
      accommodation: "Heritage Resort with Sigiriya Views",
      meals: ["Breakfast", "Lunch", "Dinner"]
    },
    {
      day: 4,
      title: "Sigiriya to Kandy",
      location: "Hill Capital",
      theme: "Cultural Heritage",
      distance: "95km",
      activities: [
        {
          time: "9:00 AM",
          title: "Spice Garden Visit", 
          description: "Learn about Ceylon spices and Ayurveda",
          location: "Matale",
          type: "sightseeing" as const,
          highlights: ["Cinnamon", "Cardamom", "Traditional Medicine"]
        },
        {
          time: "4:00 PM",
          title: "Kandy City Tour",
          description: "Explore the last royal capital",
          location: "Kandy",
          type: "sightseeing" as const,
          highlights: ["Temple of Tooth", "Royal Palace", "Kandy Lake"]
        }
      ],
      accommodation: "Boutique Hill Country Hotel",
      meals: ["Breakfast", "Lunch", "Dinner"]
    },
    {
      day: 5,
      title: "Kandy to Nuwara Eliya",
      location: "Tea Country",
      theme: "Hill Country",
      distance: "80km",
      activities: [
        {
          time: "9:00 AM",
          title: "Tea Plantation Tour",
          description: "Experience Ceylon tea culture and processing",
          location: "Tea Estate",
          type: "sightseeing" as const,
          highlights: ["Tea Plucking", "Factory Tour", "Tasting Session"]
        },
        {
          time: "2:00 PM",
          title: "Hill Country Drive",
          description: "Scenic journey through misty mountains",
          location: "Hill Roads",
          type: "transport" as const
        }
      ],
      accommodation: "Colonial Tea Estate Bungalow",
      meals: ["Breakfast", "Lunch", "Dinner"]
    },
    {
      day: 6,
      title: "Nuwara Eliya Exploration",
      location: "Little England",
      theme: "Colonial Heritage",
      activities: [
        {
          time: "9:00 AM",
          title: "Gregory Lake & Victoria Park",
          description: "Enjoy the cool hill station atmosphere",
          location: "Nuwara Eliya City",
          type: "activity" as const,
          highlights: ["Boating", "Gardens", "Colonial Architecture"]
        },
        {
          time: "2:00 PM",
          title: "Strawberry Farm Visit",
          description: "Fresh mountain agriculture experience",
          location: "Local Farm",
          type: "activity" as const
        }
      ],
      accommodation: "Hill Country Hotel",
      meals: ["Breakfast", "Lunch", "Dinner"]
    },
    {
      day: 7,
      title: "Nuwara Eliya to Yala",
      location: "Wildlife Country",
      theme: "Nature Transition",
      distance: "200km",
      activities: [
        {
          time: "8:00 AM",
          title: "Journey to Yala",
          description: "Drive from cool hills to tropical lowlands",
          location: "Trans-island Route",
          type: "transport" as const
        },
        {
          time: "3:00 PM",
          title: "Safari Lodge Check-in",
          description: "Settle into wildlife accommodation",
          location: "Yala Safari Lodge",
          type: "accommodation" as const
        }
      ],
      accommodation: "Luxury Safari Lodge",
      meals: ["Breakfast", "Lunch", "Dinner"]
    },
    {
      day: 8,
      title: "Yala Safari Experience",
      location: "Yala National Park",
      theme: "Wildlife Adventure",
      activities: [
        {
          time: "5:30 AM",
          title: "Morning Safari",
          description: "Prime time for leopard and elephant spotting",
          location: "Yala Block 1",
          type: "activity" as const,
          highlights: ["Leopards", "Elephants", "Bears", "Birds"]
        },
        {
          time: "3:30 PM",
          title: "Evening Safari",
          description: "Golden hour wildlife photography",
          location: "Yala Block 2",
          type: "activity" as const,
          highlights: ["Sunset", "Nocturnal Animals", "Photography"]
        }
      ],
      accommodation: "Luxury Safari Lodge",
      meals: ["Breakfast", "Lunch", "Dinner"]
    },
    {
      day: 9,
      title: "Yala to Galle",
      location: "Southern Coast",
      theme: "Coastal Transition",
      distance: "180km",
      activities: [
        {
          time: "8:00 AM",
          title: "Coastal Journey",
          description: "Drive to historic southern coast",
          location: "Southern Highway",
          type: "transport" as const
        },
        {
          time: "1:00 PM",
          title: "Galle Fort Arrival",
          description: "Check into heritage accommodation",
          location: "Galle Fort",
          type: "accommodation" as const
        }
      ],
      accommodation: "Fort Heritage Hotel",
      meals: ["Breakfast", "Lunch", "Dinner"]
    },
    {
      day: 10,
      title: "Galle Fort Exploration",
      location: "Galle Fort",
      theme: "Colonial Heritage",
      activities: [
        {
          time: "9:00 AM",
          title: "Fort Walking Tour",
          description: "Explore Dutch colonial architecture",
          location: "Galle Fort",
          type: "sightseeing" as const,
          highlights: ["Dutch Church", "Lighthouse", "Ramparts", "Museums"]
        },
        {
          time: "2:00 PM",
          title: "Craft & Gem Shopping",
          description: "Browse local artisan workshops",
          location: "Fort Streets",
          type: "activity" as const
        }
      ],
      accommodation: "Fort Heritage Hotel",
      meals: ["Breakfast", "Lunch", "Dinner"]
    },
    {
      day: 11,
      title: "Beach & Water Sports",
      location: "Unawatuna Bay",
      theme: "Beach Activities",
      activities: [
        {
          time: "9:00 AM",
          title: "Unawatuna Beach",
          description: "Golden sandy beach relaxation",
          location: "Unawatuna",
          type: "activity" as const,
          highlights: ["Swimming", "Snorkeling", "Beach Games"]
        },
        {
          time: "2:00 PM",
          title: "Water Sports",
          description: "Surfing, diving, and boat trips",
          location: "Beach Center",
          type: "activity" as const
        }
      ],
      accommodation: "Beachfront Resort",
      meals: ["Breakfast", "Lunch", "Dinner"]
    },
    {
      day: 12,
      title: "Mirissa & Whale Watching",
      location: "Mirissa Bay",
      theme: "Marine Life",
      activities: [
        {
          time: "6:00 AM",
          title: "Whale Watching Tour",
          description: "Blue whale and dolphin spotting",
          location: "Mirissa Harbor",
          type: "activity" as const,
          highlights: ["Blue Whales", "Sperm Whales", "Dolphins"]
        },
        {
          time: "2:00 PM",
          title: "Coconut Tree Hill",
          description: "Iconic palm tree viewpoint",
          location: "Mirissa Hill",
          type: "sightseeing" as const
        }
      ],
      accommodation: "Ocean View Resort",
      meals: ["Breakfast", "Lunch", "Dinner"]
    },
    {
      day: 13,
      title: "Southern Coast Exploration",
      location: "South Coast",
      theme: "Coastal Discovery",
      activities: [
        {
          time: "9:00 AM",
          title: "Stilt Fishermen",
          description: "Traditional fishing methods",
          location: "Weligama",
          type: "sightseeing" as const,
          highlights: ["Traditional Fishing", "Photo Opportunities"]
        },
        {
          time: "12:00 PM",
          title: "Snake Island",
          description: "Small temple island exploration",
          location: "Snake Island",
          type: "activity" as const
        }
      ],
      accommodation: "Coastal Resort",
      meals: ["Breakfast", "Lunch", "Dinner"]
    },
    {
      day: 14,
      title: "Departure Day",
      location: "Airport Transfer",
      theme: "Farewell",
      distance: "150km",
      activities: [
        {
          time: "9:00 AM",
          title: "Final Beach Moments",
          description: "Last tropical memories",
          location: "Beach",
          type: "activity" as const
        },
        {
          time: "12:00 PM",
          title: "Departure Transfer",
          description: "Journey to Colombo Airport",
          location: "Airport Route",
          type: "transport" as const
        }
      ],
      accommodation: "N/A - Departure",
      meals: ["Breakfast", "Farewell Lunch"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-accent to-primary">
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
              <div className="text-white">
                <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-4">
                  Complete Sri Lanka
                </h1>
                <p className="text-xl md:text-2xl mb-6">14 Days of Ultimate Discovery</p>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>14 Days</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    <span>2-12 People</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>8 Cities</span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <AnimatedMap destinations={destinations} className="h-full min-h-[300px]" />
              </div>
            </div>
          </div>
        </section>

        {/* Package Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-foreground mb-6 font-poppins">
                  Complete 14-Day Journey
                </h2>
                <DayItinerary days={detailedItinerary} packageColor="accent" />
              </div>

              <div className="lg:col-span-1">
                <BookingForm 
                  packageName="Complete Sri Lanka"
                  packagePrice="$1,599"
                  packageDuration="14 Days"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Package14Days;