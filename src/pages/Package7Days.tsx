import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DayItinerary from "../components/DayItinerary";
import BookingForm from "../components/BookingForm";
import AnimatedMap from "../components/AnimatedMap";
import { MapPin, Calendar, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Package7Days = () => {
  const navigate = useNavigate();

  // Destinations for the animated map
  const destinations = [
    { name: "Colombo", x: 25, y: 75, order: 1 },
    { name: "Dambulla", x: 45, y: 40, order: 2 },
    { name: "Sigiriya", x: 50, y: 35, order: 3 },
    { name: "Kandy", x: 40, y: 55, order: 4 },
    { name: "Nuwara Eliya", x: 45, y: 65, order: 5 },
  ];

  const detailedItinerary = [
    {
      day: 1,
      title: "Arrival in Colombo",
      location: "Colombo City",
      theme: "Arrival & City",
      distance: "35km from Airport",
      travelTime: "1 hour",
      activities: [
        {
          time: "10:00 AM",
          title: "Airport Pickup",
          description: "Meet your guide and transfer to hotel",
          location: "Bandaranaike International Airport",
          type: "transport" as const,
        },
        {
          time: "12:00 PM",
          title: "Hotel Check-in & Lunch",
          description: "Settle in and enjoy traditional Sri Lankan lunch",
          location: "Colombo City Hotel",
          type: "meal" as const,
        },
        {
          time: "2:30 PM",
          title: "Colombo City Tour",
          description: "Explore Independence Square, National Museum",
          location: "Colombo Historic District",
          type: "sightseeing" as const,
          highlights: [
            "Independence Square",
            "National Museum",
            "Pettah Market",
          ],
        },
        {
          time: "5:00 PM",
          title: "Galle Face Green",
          description: "Sunset walk along the oceanfront promenade",
          location: "Galle Face Green",
          type: "activity" as const,
          highlights: ["Ocean Views", "Street Food", "Sunset"],
        },
        {
          time: "7:00 PM",
          title: "Welcome Dinner",
          description: "Traditional Sri Lankan cuisine introduction",
          location: "Local Restaurant",
          type: "meal" as const,
        },
      ],
      accommodation: "4-star Colombo City Hotel",
      meals: ["Lunch", "Dinner"],
    },
    {
      day: 2,
      title: "Colombo to Sigiriya",
      location: "Sigiriya & Dambulla",
      theme: "Ancient Heritage",
      distance: "170km",
      travelTime: "3.5 hours",
      activities: [
        {
          time: "7:00 AM",
          title: "Early Breakfast & Departure",
          description: "Check out and begin journey to Cultural Triangle",
          location: "Hotel Restaurant",
          type: "meal" as const,
        },
        {
          time: "8:00 AM",
          title: "Drive to Sigiriya",
          description: "Scenic drive through Sri Lankan countryside",
          location: "Highway Route",
          type: "transport" as const,
        },
        {
          time: "12:00 PM",
          title: "Dambulla Cave Temple",
          description: "Explore the Golden Temple and cave complex",
          location: "Dambulla",
          type: "sightseeing" as const,
          highlights: ["Cave Paintings", "Buddha Statues", "Mountain Views"],
        },
        {
          time: "2:00 PM",
          title: "Local Lunch",
          description: "Authentic rice and curry meal",
          location: "Dambulla Restaurant",
          type: "meal" as const,
        },
        {
          time: "3:30 PM",
          title: "Check-in Sigiriya",
          description: "Settle into heritage hotel with rock views",
          location: "Sigiriya Hotel",
          type: "accommodation" as const,
        },
        {
          time: "5:00 PM",
          title: "Village Tour",
          description: "Traditional village life experience",
          location: "Local Village",
          type: "activity" as const,
          highlights: [
            "Bullock Cart Ride",
            "Traditional Cooking",
            "Local Crafts",
          ],
        },
      ],
      accommodation: "Heritage Hotel with Sigiriya Rock View",
      meals: ["Breakfast", "Lunch", "Dinner"],
    },
    {
      day: 3,
      title: "Sigiriya Rock Fortress",
      location: "Sigiriya",
      theme: "Ancient Wonder",
      activities: [
        {
          time: "5:30 AM",
          title: "Early Start",
          description: "Light breakfast before the climb",
          location: "Hotel",
          type: "meal" as const,
        },
        {
          time: "6:00 AM",
          title: "Sigiriya Rock Climb",
          description: "Ascend the ancient rock fortress at sunrise",
          location: "Sigiriya Rock",
          type: "activity" as const,
          highlights: [
            "Frescoes",
            "Mirror Wall",
            "Summit Palace",
            "360° Views",
          ],
        },
        {
          time: "9:00 AM",
          title: "Royal Gardens",
          description: "Explore the water gardens and landscape design",
          location: "Sigiriya Base",
          type: "sightseeing" as const,
        },
        {
          time: "11:00 AM",
          title: "Rest & Brunch",
          description: "Recover with refreshments and local fruits",
          location: "Garden Cafe",
          type: "meal" as const,
        },
        {
          time: "1:00 PM",
          title: "Pidurangala Rock",
          description: "Alternative viewpoint for Sigiriya photos",
          location: "Pidurangala",
          type: "activity" as const,
          highlights: ["Photography", "Hiking", "Rock Views"],
        },
        {
          time: "4:00 PM",
          title: "Ayurvedic Spa",
          description: "Traditional healing and relaxation",
          location: "Hotel Spa",
          type: "activity" as const,
        },
      ],
      accommodation: "Heritage Hotel with Sigiriya Rock View",
      meals: ["Breakfast", "Brunch", "Dinner"],
    },
    {
      day: 4,
      title: "Sigiriya to Kandy",
      location: "Kandy via Spice Garden",
      theme: "Spices & Culture",
      distance: "95km",
      travelTime: "2.5 hours",
      activities: [
        {
          time: "8:00 AM",
          title: "Breakfast & Check-out",
          description: "Final breakfast with rock views",
          location: "Hotel Restaurant",
          type: "meal" as const,
        },
        {
          time: "9:00 AM",
          title: "Spice Garden Visit",
          description: "Learn about Sri Lankan spices and cultivation",
          location: "Matale Spice Garden",
          type: "sightseeing" as const,
          highlights: ["Cinnamon", "Cardamom", "Vanilla", "Ayurvedic Plants"],
        },
        {
          time: "11:00 AM",
          title: "Continue to Kandy",
          description: "Drive through hill country landscapes",
          location: "Hill Country Route",
          type: "transport" as const,
        },
        {
          time: "1:00 PM",
          title: "Kandy Arrival & Lunch",
          description: "Check-in and local cuisine",
          location: "Kandy City Hotel",
          type: "meal" as const,
        },
        {
          time: "3:00 PM",
          title: "Kandy Lake Walk",
          description: "Peaceful stroll around the sacred lake",
          location: "Kandy Lake",
          type: "activity" as const,
        },
        {
          time: "5:00 PM",
          title: "Temple of the Tooth",
          description: "Visit the sacred Buddhist temple",
          location: "Temple of the Sacred Tooth Relic",
          type: "sightseeing" as const,
          highlights: ["Sacred Relic", "Evening Ceremony", "Architecture"],
        },
        {
          time: "7:00 PM",
          title: "Cultural Dance Show",
          description: "Traditional Kandyan dancing performance",
          location: "Cultural Center",
          type: "activity" as const,
        },
      ],
      accommodation: "Boutique Hotel overlooking Kandy Lake",
      meals: ["Breakfast", "Lunch", "Dinner"],
    },
    {
      day: 5,
      title: "Kandy Exploration",
      location: "Kandy & Surroundings",
      theme: "Gardens & Culture",
      activities: [
        {
          time: "8:00 AM",
          title: "Breakfast at Hotel",
          description: "Start day with continental breakfast",
          location: "Hotel Restaurant",
          type: "meal" as const,
        },
        {
          time: "9:00 AM",
          title: "Royal Botanical Gardens",
          description: "Explore Peradeniya's world-famous gardens",
          location: "Peradeniya",
          type: "sightseeing" as const,
          highlights: [
            "Orchid House",
            "Giant Bamboo",
            "Medicinal Plants",
            "Avenue of Royal Palms",
          ],
        },
        {
          time: "12:00 PM",
          title: "Garden Picnic Lunch",
          description: "Enjoy lunch surrounded by nature",
          location: "Botanical Gardens",
          type: "meal" as const,
        },
        {
          time: "2:00 PM",
          title: "Tea Factory Visit",
          description: "Learn about Ceylon tea production",
          location: "Local Tea Factory",
          type: "sightseeing" as const,
          highlights: ["Tea Processing", "Tasting Session", "Factory Tour"],
        },
        {
          time: "4:00 PM",
          title: "Kandy City Shopping",
          description: "Browse local markets and gem shops",
          location: "Kandy Market Square",
          type: "activity" as const,
        },
        {
          time: "6:00 PM",
          title: "Sunset Viewpoint",
          description: "Panoramic views of Kandy city",
          location: "Arthur's Seat",
          type: "activity" as const,
        },
      ],
      accommodation: "Boutique Hotel overlooking Kandy Lake",
      meals: ["Breakfast", "Lunch", "Dinner"],
    },
    {
      day: 6,
      title: "Kandy to Galle",
      location: "Galle Fort",
      theme: "Colonial Coast",
      distance: "220km",
      travelTime: "4 hours",
      activities: [
        {
          time: "7:00 AM",
          title: "Early Breakfast",
          description: "Hearty breakfast before coastal journey",
          location: "Hotel Restaurant",
          type: "meal" as const,
        },
        {
          time: "8:00 AM",
          title: "Departure to Galle",
          description: "Scenic drive to the southern coast",
          location: "Highway to Coast",
          type: "transport" as const,
        },
        {
          time: "12:00 PM",
          title: "Coastal Lunch Stop",
          description: "Fresh seafood by the ocean",
          location: "Coastal Restaurant",
          type: "meal" as const,
        },
        {
          time: "2:00 PM",
          title: "Galle Fort Arrival",
          description: "Check-in to heritage hotel in the fort",
          location: "Galle Fort",
          type: "accommodation" as const,
        },
        {
          time: "3:00 PM",
          title: "Fort Walking Tour",
          description: "Explore Dutch colonial architecture",
          location: "Galle Fort",
          type: "sightseeing" as const,
          highlights: [
            "Dutch Church",
            "Lighthouse",
            "Ramparts",
            "Colonial Buildings",
          ],
        },
        {
          time: "5:30 PM",
          title: "Sunset at Ramparts",
          description: "Watch sunset from historic fort walls",
          location: "Fort Ramparts",
          type: "activity" as const,
        },
        {
          time: "7:00 PM",
          title: "Fort Dining",
          description: "Dinner at historic restaurant",
          location: "Fort Restaurant",
          type: "meal" as const,
        },
      ],
      accommodation: "Heritage Hotel within Galle Fort",
      meals: ["Breakfast", "Lunch", "Dinner"],
    },
    {
      day: 7,
      title: "Departure Day",
      location: "Galle to Airport",
      theme: "Beach & Farewell",
      distance: "150km",
      travelTime: "3 hours",
      activities: [
        {
          time: "8:00 AM",
          title: "Leisurely Breakfast",
          description: "Final breakfast with ocean views",
          location: "Hotel Terrace",
          type: "meal" as const,
        },
        {
          time: "9:30 AM",
          title: "Beach Time",
          description: "Relax on Unawatuna Beach",
          location: "Unawatuna Beach",
          type: "activity" as const,
          highlights: ["Swimming", "Beach Walk", "Final Photos"],
        },
        {
          time: "11:30 AM",
          title: "Last-minute Shopping",
          description: "Purchase souvenirs and local crafts",
          location: "Galle Fort Shops",
          type: "activity" as const,
        },
        {
          time: "1:00 PM",
          title: "Farewell Lunch",
          description: "Final Sri Lankan meal",
          location: "Beachside Restaurant",
          type: "meal" as const,
        },
        {
          time: "2:30 PM",
          title: "Departure Transfer",
          description: "Journey to Colombo Airport",
          location: "Airport Transfer",
          type: "transport" as const,
        },
        {
          time: "6:00 PM",
          title: "Airport Arrival",
          description: "Check-in for international departure",
          location: "Bandaranaike International Airport",
          type: "transport" as const,
        },
      ],
      accommodation: "N/A - Departure Day",
      meals: ["Breakfast", "Lunch"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section - Increased height with square video */}
        <section className="relative h-96 bg-gradient-to-r from-primary to-emerald-200">
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-center">
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
                  Cultural Triangle
                </h1>
                <p className="text-xl md:text-2xl mb-6">
                  7 Days of Heritage & Culture
                </p>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>7 Days</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    <span>As Much As You Like</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>5 Cities</span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex justify-center">
                <div className="w-80 h-60 rounded-2xl shadow-2xl overflow-hidden">
                  <video
                    src="/map7.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
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
                  Detailed Day-by-Day Journey
                </h2>
                <DayItinerary days={detailedItinerary} packageColor="primary" />
              </div>

              <div className="lg:col-span-1">
                <BookingForm
                  packageName="Cultural Triangle"
                  packagePrice="$899"
                  packageDuration="7 Days"
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

export default Package7Days;