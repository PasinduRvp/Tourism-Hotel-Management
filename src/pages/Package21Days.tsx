import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DayItinerary from '../components/DayItinerary';
import BookingForm from '../components/BookingForm';
import AnimatedMap from '../components/AnimatedMap';
import { MapPin, Calendar, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Package21Days = () => {
  const navigate = useNavigate();

  // Destinations for the animated map
  const destinations = [
    { name: 'Colombo', x: 25, y: 75, order: 1 },
    { name: 'Anuradhapura', x: 35, y: 25, order: 2 },
    { name: 'Sigiriya', x: 50, y: 35, order: 3 },
    { name: 'Kandy', x: 40, y: 55, order: 4 },
    { name: 'Nuwara Eliya', x: 45, y: 65, order: 5 },
    { name: 'Ella', x: 55, y: 70, order: 6 },
    { name: 'Yala', x: 70, y: 80, order: 7 },
    { name: 'Galle', x: 30, y: 85, order: 8 },
    { name: 'Bentota', x: 28, y: 82, order: 9 }
  ];

  const detailedItinerary = [
    {
      day: 1,
      title: "Grand Arrival in Colombo",
      location: "Colombo City",
      theme: "Urban Discovery",
      distance: "35km from Airport",
      travelTime: "1 hour",
      activities: [
        {
          time: "10:00 AM",
          title: "VIP Airport Reception",
          description: "Luxury meet & greet with traditional welcome",
          location: "Bandaranaike International Airport",
          type: "transport" as const
        },
        {
          time: "12:00 PM",
          title: "Premium Hotel Check-in",
          description: "Settle into luxury accommodation with city views",
          location: "5-Star Colombo Hotel",
          type: "accommodation" as const
        },
        {
          time: "2:00 PM",
          title: "Colombo Heritage Tour",
          description: "Explore colonial and modern landmarks",
          location: "Colombo Historic District",
          type: "sightseeing" as const,
          highlights: ["Independence Memorial", "Red Mosque", "Lotus Tower", "Galle Face Green"]
        },
        {
          time: "6:00 PM",
          title: "Sunset at Galle Face",
          description: "Evening stroll along the oceanfront",
          location: "Galle Face Green",
          type: "activity" as const
        },
        {
          time: "7:30 PM",
          title: "Welcome Feast",
          description: "Authentic Sri Lankan cuisine introduction",
          location: "Rooftop Restaurant",
          type: "meal" as const
        }
      ],
      accommodation: "5-Star Luxury Colombo Hotel",
      meals: ["Lunch", "Welcome Dinner"]
    },
    {
      day: 2,
      title: "Journey to Ancient Anuradhapura",
      location: "Ancient Capital",
      theme: "Buddhist Heritage",
      distance: "205km",
      travelTime: "4 hours",
      activities: [
        {
          time: "7:00 AM",
          title: "Early Departure",
          description: "Comfortable journey to ancient kingdom",
          location: "Highway Route",
          type: "transport" as const
        },
        {
          time: "12:00 PM",
          title: "Anuradhapura Sacred City",
          description: "Explore 2,500-year-old Buddhist sites",
          location: "Anuradhapura Archaeological Park",
          type: "sightseeing" as const,
          highlights: ["Sri Maha Bodhi Tree", "Ruwanwelisaya Stupa", "Abhayagiri Monastery"]
        },
        {
          time: "4:00 PM",
          title: "Heritage Hotel Check-in",
          description: "Traditional accommodation near ancient sites",
          location: "Anuradhapura Heritage Resort",
          type: "accommodation" as const
        },
        {
          time: "6:00 PM",
          title: "Sunset Meditation",
          description: "Peaceful evening at sacred sites",
          location: "Temple Grounds",
          type: "activity" as const
        }
      ],
      accommodation: "Heritage Resort Anuradhapura",
      meals: ["Breakfast", "Lunch", "Dinner"]
    },
    {
      day: 3,
      title: "Anuradhapura to Sigiriya",
      location: "Rock Fortress",
      theme: "Ancient Wonder",
      distance: "60km",
      travelTime: "1.5 hours",
      activities: [
        {
          time: "8:00 AM",
          title: "Temple Complex Tour",
          description: "Final exploration of ancient monasteries",
          location: "Jetavanaramaya",
          type: "sightseeing" as const,
          highlights: ["Ancient Stupas", "Monastery Ruins", "Archaeological Museum"]
        },
        {
          time: "11:00 AM",
          title: "Transfer to Sigiriya",
          description: "Scenic drive through countryside",
          location: "Cultural Triangle Route",
          type: "transport" as const
        },
        {
          time: "1:00 PM",
          title: "Sigiriya Village Experience",
          description: "Traditional lunch and cultural immersion",
          location: "Local Village",
          type: "activity" as const,
          highlights: ["Traditional Cooking", "Village Walk", "Local Crafts"]
        },
        {
          time: "3:00 PM",
          title: "Rock Resort Check-in",
          description: "Accommodation with Sigiriya views",
          location: "Heritage Hotel Sigiriya",
          type: "accommodation" as const
        },
        {
          time: "5:00 PM",
          title: "Sunset from Pidurangala",
          description: "Alternative viewpoint for Sigiriya photography",
          location: "Pidurangala Rock",
          type: "activity" as const
        }
      ],
      accommodation: "Heritage Hotel with Sigiriya Views",
      meals: ["Breakfast", "Village Lunch", "Dinner"]
    },
    {
      day: 4,
      title: "Sigiriya Rock Fortress",
      location: "Ancient Rock Palace",
      theme: "Archaeological Marvel",
      activities: [
        {
          time: "5:30 AM",
          title: "Early Start for Sigiriya",
          description: "Light breakfast before the legendary climb",
          location: "Hotel Restaurant",
          type: "meal" as const
        },
        {
          time: "6:00 AM",
          title: "Sigiriya Rock Climb",
          description: "Ascend the 5th-century rock fortress at sunrise",
          location: "Sigiriya Rock",
          type: "activity" as const,
          highlights: ["Lion's Paws", "Frescoes", "Mirror Wall", "Summit Palace", "360° Views"]
        },
        {
          time: "9:30 AM",
          title: "Royal Gardens Exploration",
          description: "Discover ancient landscape architecture",
          location: "Sigiriya Water Gardens",
          type: "sightseeing" as const,
          highlights: ["Water Features", "Boulder Gardens", "Terraced Gardens"]
        },
        {
          time: "11:30 AM",
          title: "Recovery Brunch",
          description: "Refreshments with fresh tropical fruits",
          location: "Garden Cafe",
          type: "meal" as const
        },
        {
          time: "2:00 PM",
          title: "Dambulla Cave Temple",
          description: "Golden Temple and sacred cave complex",
          location: "Dambulla",
          type: "sightseeing" as const,
          highlights: ["Cave Paintings", "Buddha Statues", "Mountain Views"]
        },
        {
          time: "5:00 PM",
          title: "Ayurvedic Spa Experience",
          description: "Traditional healing and relaxation",
          location: "Hotel Spa",
          type: "activity" as const
        }
      ],
      accommodation: "Heritage Hotel with Rock Views",
      meals: ["Breakfast", "Brunch", "Dinner"]
    },
    {
      day: 5,
      title: "Cultural Triangle to Kandy",
      location: "Hill Capital Journey",
      theme: "Spices & Sacred Sites",
      distance: "95km",
      travelTime: "2.5 hours",
      activities: [
        {
          time: "8:00 AM",
          title: "Breakfast & Departure",
          description: "Final breakfast with rock views",
          location: "Hotel Restaurant",
          type: "meal" as const
        },
        {
          time: "9:30 AM",
          title: "Spice Garden Discovery",
          description: "Learn about Ceylon spices and Ayurvedic plants",
          location: "Matale Spice Garden",
          type: "sightseeing" as const,
          highlights: ["Cinnamon", "Cardamom", "Vanilla", "Traditional Medicine"]
        },
        {
          time: "11:30 AM",
          title: "Journey to Kandy",
          description: "Scenic drive through hill country",
          location: "Hill Country Route",
          type: "transport" as const
        },
        {
          time: "1:30 PM",
          title: "Kandy Arrival & Lunch",
          description: "Check-in and traditional hill country cuisine",
          location: "Boutique Kandy Hotel",
          type: "meal" as const
        },
        {
          time: "3:30 PM",
          title: "Kandy Lake Circuit",
          description: "Peaceful walk around the sacred lake",
          location: "Kandy Lake",
          type: "activity" as const
        },
        {
          time: "5:00 PM",
          title: "Temple of the Sacred Tooth",
          description: "Visit the most sacred Buddhist site",
          location: "Temple of the Sacred Tooth Relic",
          type: "sightseeing" as const,
          highlights: ["Sacred Relic", "Evening Ceremony", "Architecture"]
        },
        {
          time: "7:00 PM",
          title: "Kandyan Cultural Show",
          description: "Traditional dancing and fire performances",
          location: "Cultural Center",
          type: "activity" as const
        }
      ],
      accommodation: "Boutique Hotel overlooking Kandy Lake",
      meals: ["Breakfast", "Lunch", "Dinner"]
    },
    {
      day: 6,
      title: "Kandy Royal Botanical Gardens",
      location: "Peradeniya Gardens",
      theme: "Natural Wonder",
      activities: [
        {
          time: "8:00 AM",
          title: "Garden Breakfast",
          description: "Continental breakfast with garden views",
          location: "Hotel Terrace",
          type: "meal" as const
        },
        {
          time: "9:00 AM",
          title: "Royal Botanical Gardens",
          description: "Explore one of Asia's finest botanical collections",
          location: "Peradeniya",
          type: "sightseeing" as const,
          highlights: ["Orchid House", "Giant Bamboo", "Medicinal Plants", "Avenue of Royal Palms"]
        },
        {
          time: "12:00 PM",
          title: "Garden Picnic Lunch",
          description: "Outdoor dining surrounded by nature",
          location: "Botanical Gardens",
          type: "meal" as const
        },
        {
          time: "2:30 PM",
          title: "Tea Factory Experience",
          description: "Learn about world-famous Ceylon tea",
          location: "Local Tea Factory",
          type: "sightseeing" as const,
          highlights: ["Tea Processing", "Tasting Session", "Factory Tour"]
        },
        {
          time: "4:30 PM",
          title: "Kandy Market & Shopping",
          description: "Browse local crafts and precious gems",
          location: "Kandy Central Market",
          type: "activity" as const
        },
        {
          time: "6:30 PM",
          title: "Sunset Viewpoint",
          description: "Panoramic views over Kandy valley",
          location: "Arthur's Seat",
          type: "activity" as const
        }
      ],
      accommodation: "Boutique Hotel overlooking Kandy Lake",
      meals: ["Breakfast", "Picnic Lunch", "Dinner"]
    },
    {
      day: 7,
      title: "Kandy to Nuwara Eliya",
      location: "Little England",
      theme: "Colonial Hill Station",
      distance: "80km",
      travelTime: "2.5 hours",
      activities: [
        {
          time: "8:00 AM",
          title: "Hill Country Departure",
          description: "Journey into the cool mountains",
          location: "Scenic Mountain Route",
          type: "transport" as const
        },
        {
          time: "10:30 AM",
          title: "Tea Plantation Walk",
          description: "Walk among emerald tea fields",
          location: "Pedro Tea Estate",
          type: "activity" as const,
          highlights: ["Tea Plucking", "Plantation Views", "Tea Tasting"]
        },
        {
          time: "12:30 PM",
          title: "Hill Station Arrival",
          description: "Check-in to colonial-style accommodation",
          location: "Nuwara Eliya",
          type: "accommodation" as const
        },
        {
          time: "2:00 PM",
          title: "Little England Tour",
          description: "Explore the colonial architecture and gardens",
          location: "Nuwara Eliya Town",
          type: "sightseeing" as const,
          highlights: ["Victoria Park", "Golf Course", "Post Office", "Colonial Buildings"]
        },
        {
          time: "4:00 PM",
          title: "Lake Gregory Activities",
          description: "Boating and lakeside relaxation",
          location: "Lake Gregory",
          type: "activity" as const
        },
        {
          time: "6:00 PM",
          title: "Strawberry Farm Visit",
          description: "Fresh mountain agriculture experience",
          location: "Local Strawberry Farm",
          type: "activity" as const
        }
      ],
      accommodation: "Colonial Tea Estate Bungalow",
      meals: ["Breakfast", "Lunch", "Dinner"]
    },
    {
      day: 8,
      title: "Nuwara Eliya to Ella",
      location: "Scenic Train Journey",
      theme: "Railway Adventure",
      distance: "65km",
      travelTime: "3 hours by train",
      activities: [
        {
          time: "7:00 AM",
          title: "Early Breakfast",
          description: "Hearty meal before the famous train ride",
          location: "Hotel Restaurant",
          type: "meal" as const
        },
        {
          time: "8:30 AM",
          title: "World's Most Beautiful Train Ride",
          description: "Journey through tea country on historic railway",
          location: "Nanu Oya to Ella",
          type: "transport" as const,
          highlights: ["Mountain Views", "Tea Plantations", "Waterfalls", "Tunnels"]
        },
        {
          time: "12:00 PM",
          title: "Ella Town Arrival",
          description: "Check-in to mountain retreat",
          location: "Ella Hill Station",
          type: "accommodation" as const
        },
        {
          time: "2:00 PM",
          title: "Nine Arches Bridge",
          description: "Visit the iconic railway viaduct",
          location: "Demodara",
          type: "sightseeing" as const,
          highlights: ["Architecture", "Train Spotting", "Photography"]
        },
        {
          time: "4:00 PM",
          title: "Little Adam's Peak Hike",
          description: "Easy trek with stunning valley views",
          location: "Little Adam's Peak",
          type: "activity" as const
        },
        {
          time: "6:30 PM",
          title: "Sunset Viewing",
          description: "Golden hour over Ella Gap",
          location: "Ella Rock Viewpoint",
          type: "activity" as const
        }
      ],
      accommodation: "Mountain View Hotel Ella",
      meals: ["Breakfast", "Lunch", "Dinner"]
    },
    {
      day: 9,
      title: "Ella Rock & Ravana Falls",
      location: "Ella Adventures",
      theme: "Mountain Hiking",
      activities: [
        {
          time: "5:30 AM",
          title: "Sunrise Hike Preparation",
          description: "Light breakfast and gear check",
          location: "Hotel",
          type: "meal" as const
        },
        {
          time: "6:00 AM",
          title: "Ella Rock Summit Hike",
          description: "Challenging trek to panoramic viewpoint",
          location: "Ella Rock",
          type: "activity" as const,
          highlights: ["Summit Views", "Photography", "Mountain Flora"]
        },
        {
          time: "10:00 AM",
          title: "Rest & Recovery",
          description: "Breakfast and relaxation after the hike",
          location: "Mountain Cafe",
          type: "meal" as const
        },
        {
          time: "12:00 PM",
          title: "Ravana Falls Excursion",
          description: "Visit the legendary waterfall",
          location: "Ravana Falls",
          type: "sightseeing" as const,
          highlights: ["Waterfall", "Swimming", "Legend Stories"]
        },
        {
          time: "2:30 PM",
          title: "Local Village Tour",
          description: "Experience authentic hill country life",
          location: "Ella Village",
          type: "activity" as const
        },
        {
          time: "5:00 PM",
          title: "Zip Lining Adventure",
          description: "Thrilling ride through the valley",
          location: "Flying Ravana",
          type: "activity" as const
        }
      ],
      accommodation: "Mountain View Hotel Ella",
      meals: ["Breakfast", "Lunch", "Dinner"]
    },
    {
      day: 10,
      title: "Ella to Yala National Park",
      location: "Wildlife Safari Base",
      theme: "Nature Transition",
      distance: "130km",
      travelTime: "3 hours",
      activities: [
        {
          time: "8:00 AM",
          title: "Mountain Farewell",
          description: "Departure from cool highlands",
          location: "Hill Country Route",
          type: "transport" as const
        },
        {
          time: "11:30 AM",
          title: "Buduruwagala Rock Temple",
          description: "Ancient rock carvings en route",
          location: "Buduruwagala",
          type: "sightseeing" as const,
          highlights: ["Rock Sculptures", "Buddhist Art", "Ancient History"]
        },
        {
          time: "1:00 PM",
          title: "Wildlife Lodge Arrival",
          description: "Check-in to safari accommodation",
          location: "Yala Safari Lodge",
          type: "accommodation" as const
        },
        {
          time: "3:30 PM",
          title: "First Safari Experience",
          description: "Introduction to Yala's wildlife",
          location: "Yala National Park Block 1",
          type: "activity" as const,
          highlights: ["Leopards", "Elephants", "Birds", "Landscape"]
        },
        {
          time: "7:00 PM",
          title: "Safari Lodge Dinner",
          description: "Wildlife-themed dining experience",
          location: "Lodge Restaurant",
          type: "meal" as const
        }
      ],
      accommodation: "Luxury Safari Lodge",
      meals: ["Breakfast", "Lunch", "Dinner"]
    },
    {
      day: 11,
      title: "Full Day Yala Safari",
      location: "Yala National Park",
      theme: "Wildlife Photography",
      activities: [
        {
          time: "5:00 AM",
          title: "Dawn Safari Departure",
          description: "Early morning when animals are most active",
          location: "Yala Block 1",
          type: "activity" as const,
          highlights: ["Leopard Tracking", "Elephant Herds", "Sloth Bears", "Crocodiles"]
        },
        {
          time: "9:00 AM",
          title: "Safari Breakfast",
          description: "Bush breakfast in the wilderness",
          location: "Park Viewpoint",
          type: "meal" as const
        },
        {
          time: "10:30 AM",
          title: "Wildlife Photography Workshop",
          description: "Professional tips for wildlife photography",
          location: "Various Park Locations",
          type: "activity" as const
        },
        {
          time: "1:00 PM",
          title: "Lodge Rest Period",
          description: "Midday break during hot hours",
          location: "Safari Lodge",
          type: "accommodation" as const
        },
        {
          time: "3:30 PM",
          title: "Evening Game Drive",
          description: "Golden hour safari experience",
          location: "Yala Block 2",
          type: "activity" as const,
          highlights: ["Sunset Views", "Nocturnal Prep", "Bird Watching"]
        },
        {
          time: "7:30 PM",
          title: "Safari Stories Dinner",
          description: "Share the day's wildlife encounters",
          location: "Lodge",
          type: "meal" as const
        }
      ],
      accommodation: "Luxury Safari Lodge",
      meals: ["Breakfast", "Bush Breakfast", "Lunch", "Dinner"]
    },
    {
      day: 12,
      title: "Yala to Galle",
      location: "Southern Coast",
      theme: "Coastal Transition",
      distance: "150km",
      travelTime: "3.5 hours",
      activities: [
        {
          time: "7:00 AM",
          title: "Final Safari & Departure",
          description: "Last wildlife viewing before coastal journey",
          location: "Yala to Coast Route",
          type: "transport" as const
        },
        {
          time: "11:00 AM",
          title: "Blow Hole Natural Wonder",
          description: "Spectacular coastal rock formation",
          location: "Hummanaya Blow Hole",
          type: "sightseeing" as const,
          highlights: ["Natural Phenomenon", "Ocean Views", "Photography"]
        },
        {
          time: "1:00 PM",
          title: "Coastal Lunch",
          description: "Fresh seafood by the ocean",
          location: "Beachside Restaurant",
          type: "meal" as const
        },
        {
          time: "3:00 PM",
          title: "Galle Fort Arrival",
          description: "Check-in to historic fort accommodation",
          location: "Galle Fort",
          type: "accommodation" as const
        },
        {
          time: "4:30 PM",
          title: "Fort Orientation Walk",
          description: "First exploration of Dutch colonial heritage",
          location: "Galle Fort Ramparts",
          type: "sightseeing" as const,
          highlights: ["Dutch Architecture", "Lighthouse", "Ocean Views"]
        },
        {
          time: "6:30 PM",
          title: "Sunset at Fort Walls",
          description: "Golden hour on historic ramparts",
          location: "Fort Ramparts",
          type: "activity" as const
        }
      ],
      accommodation: "Heritage Hotel within Galle Fort",
      meals: ["Breakfast", "Coastal Lunch", "Dinner"]
    },
    {
      day: 13,
      title: "Galle Fort Heritage",
      location: "Dutch Colonial City",
      theme: "Historical Architecture",
      activities: [
        {
          time: "8:00 AM",
          title: "Fort Heritage Breakfast",
          description: "Colonial-style breakfast in historic setting",
          location: "Fort Hotel",
          type: "meal" as const
        },
        {
          time: "9:00 AM",
          title: "Galle Fort Walking Tour",
          description: "Comprehensive exploration of UNESCO site",
          location: "Galle Fort",
          type: "sightseeing" as const,
          highlights: ["Dutch Reformed Church", "Maritime Museum", "Clock Tower", "Dutch Hospital"]
        },
        {
          time: "12:00 PM",
          title: "Artisan Workshop Visits",
          description: "Meet local craftspeople and artists",
          location: "Fort Streets",
          type: "activity" as const,
          highlights: ["Gem Cutting", "Lace Making", "Wood Carving"]
        },
        {
          time: "2:00 PM",
          title: "Fort Shopping & Galleries",
          description: "Browse boutiques and art galleries",
          location: "Pedlar Street",
          type: "activity" as const
        },
        {
          time: "4:00 PM",
          title: "Unawatuna Beach Relaxation",
          description: "Golden sandy beach just outside the fort",
          location: "Unawatuna",
          type: "activity" as const,
          highlights: ["Swimming", "Beach Walk", "Coconut Water"]
        },
        {
          time: "7:00 PM",
          title: "Historic Fort Dining",
          description: "Fine dining in colonial ambiance",
          location: "Fort Restaurant",
          type: "meal" as const
        }
      ],
      accommodation: "Heritage Hotel within Galle Fort",
      meals: ["Breakfast", "Lunch", "Dinner"]
    },
    {
      day: 14,
      title: "Whale Watching & Mirissa",
      location: "Mirissa Bay",
      theme: "Marine Life",
      distance: "45km",
      travelTime: "1 hour",
      activities: [
        {
          time: "5:30 AM",
          title: "Early Start for Whales",
          description: "Transfer to Mirissa harbor",
          location: "Mirissa",
          type: "transport" as const
        },
        {
          time: "6:30 AM",
          title: "Whale Watching Expedition",
          description: "Search for blue whales and dolphins",
          location: "Indian Ocean",
          type: "activity" as const,
          highlights: ["Blue Whales", "Sperm Whales", "Dolphins", "Sea Turtles"]
        },
        {
          time: "11:00 AM",
          title: "Fisherman's Breakfast",
          description: "Fresh catch breakfast by the harbor",
          location: "Mirissa Harbor",
          type: "meal" as const
        },
        {
          time: "1:00 PM",
          title: "Coconut Tree Hill",
          description: "Iconic palm tree viewpoint",
          location: "Mirissa Hill",
          type: "sightseeing" as const,
          highlights: ["Photography", "Ocean Views", "Palm Trees"]
        },
        {
          time: "3:00 PM",
          title: "Beach Resort Check-in",
          description: "Luxury beachfront accommodation",
          location: "Mirissa Beach Resort",
          type: "accommodation" as const
        },
        {
          time: "4:00 PM",
          title: "Beach Activities",
          description: "Swimming, surfing, and beach games",
          location: "Mirissa Beach",
          type: "activity" as const
        },
        {
          time: "7:00 PM",
          title: "Seafood Beach Dinner",
          description: "Fresh ocean cuisine with waves soundtrack",
          location: "Beachfront Restaurant",
          type: "meal" as const
        }
      ],
      accommodation: "Luxury Beach Resort Mirissa",
      meals: ["Breakfast", "Fresh Fish Lunch", "Seafood Dinner"]
    },
    {
      day: 15,
      title: "Southern Coast Exploration",
      location: "Coastal Villages",
      theme: "Traditional Life",
      activities: [
        {
          time: "8:00 AM",
          title: "Tropical Breakfast",
          description: "Fresh fruits and local specialties",
          location: "Beach Resort",
          type: "meal" as const
        },
        {
          time: "9:30 AM",
          title: "Stilt Fishermen Experience",
          description: "Learn traditional fishing methods",
          location: "Weligama",
          type: "activity" as const,
          highlights: ["Traditional Fishing", "Photo Opportunities", "Cultural Exchange"]
        },
        {
          time: "11:30 AM",
          title: "Snake Island Temple",
          description: "Small island temple accessible by foot",
          location: "Snake Island",
          type: "sightseeing" as const
        },
        {
          time: "1:00 PM",
          title: "Local Village Lunch",
          description: "Home-cooked meal with local family",
          location: "Fishing Village",
          type: "meal" as const
        },
        {
          time: "3:00 PM",
          title: "Turtle Hatchery Visit",
          description: "Conservation efforts for sea turtles",
          location: "Kosgoda",
          type: "activity" as const,
          highlights: ["Baby Turtles", "Conservation", "Release Program"]
        },
        {
          time: "5:00 PM",
          title: "Madu River Safari",
          description: "Mangrove ecosystem boat tour",
          location: "Madu River",
          type: "activity" as const,
          highlights: ["Mangroves", "Bird Watching", "Fish Spa"]
        }
      ],
      accommodation: "Luxury Beach Resort Mirissa",
      meals: ["Breakfast", "Village Lunch", "Dinner"]
    },
    {
      day: 16,
      title: "Mirissa to Bentota",
      location: "Golden Coast",
      theme: "Beach Paradise",
      distance: "70km",
      travelTime: "2 hours",
      activities: [
        {
          time: "9:00 AM",
          title: "Coastal Drive",
          description: "Scenic journey along the southern coast",
          location: "Southern Coastal Highway",
          type: "transport" as const
        },
        {
          time: "11:30 AM",
          title: "Beach Resort Arrival",
          description: "Check-in to luxury beachfront resort",
          location: "Bentota Beach Resort",
          type: "accommodation" as const
        },
        {
          time: "1:00 PM",
          title: "Welcome Lunch",
          description: "Beachside dining with ocean views",
          location: "Resort Restaurant",
          type: "meal" as const
        },
        {
          time: "3:00 PM",
          title: "Water Sports Introduction",
          description: "Jet skiing, windsurfing, and parasailing",
          location: "Bentota Beach",
          type: "activity" as const,
          highlights: ["Water Sports", "Beach Activities", "Ocean Fun"]
        },
        {
          time: "5:30 PM",
          title: "Bentota River Cruise",
          description: "Sunset boat ride through mangroves",
          location: "Bentota River",
          type: "activity" as const
        },
        {
          time: "7:30 PM",
          title: "Beachfront Barbecue",
          description: "Grilled seafood dinner on the sand",
          location: "Beach",
          type: "meal" as const
        }
      ],
      accommodation: "Luxury Bentota Beach Resort",
      meals: ["Breakfast", "Lunch", "Beach Barbecue"]
    },
    {
      day: 17,
      title: "Bentota Water Adventures",
      location: "Water Sports Capital",
      theme: "Ocean Activities",
      activities: [
        {
          time: "8:00 AM",
          title: "Energizing Breakfast",
          description: "Healthy breakfast for active day",
          location: "Resort Restaurant",
          type: "meal" as const
        },
        {
          time: "9:00 AM",
          title: "Deep Sea Fishing",
          description: "Half-day fishing expedition",
          location: "Indian Ocean",
          type: "activity" as const,
          highlights: ["Sport Fishing", "Ocean Views", "Fresh Catch"]
        },
        {
          time: "1:00 PM",
          title: "Fresh Catch Lunch",
          description: "Prepare and enjoy your morning's catch",
          location: "Beach Grill",
          type: "meal" as const
        },
        {
          time: "3:00 PM",
          title: "Scuba Diving Experience",
          description: "Underwater exploration for beginners",
          location: "Coral Reef",
          type: "activity" as const,
          highlights: ["Coral Reefs", "Tropical Fish", "Underwater World"]
        },
        {
          time: "5:00 PM",
          title: "Beach Spa Treatment",
          description: "Relaxing massage with ocean sounds",
          location: "Beach Spa",
          type: "activity" as const
        },
        {
          time: "7:00 PM",
          title: "Sunset Cocktails",
          description: "Tropical drinks with golden hour views",
          location: "Beach Bar",
          type: "activity" as const
        }
      ],
      accommodation: "Luxury Bentota Beach Resort",
      meals: ["Breakfast", "Fresh Catch Lunch", "Dinner"]
    },
    {
      day: 18,
      title: "Cultural Immersion Day",
      location: "Local Communities",
      theme: "Authentic Experiences",
      activities: [
        {
          time: "8:30 AM",
          title: "Village Breakfast",
          description: "Traditional breakfast with local family",
          location: "Village Home",
          type: "meal" as const
        },
        {
          time: "10:00 AM",
          title: "Cinnamon Plantation Tour",
          description: "Learn about spice cultivation and processing",
          location: "Local Plantation",
          type: "sightseeing" as const,
          highlights: ["Cinnamon Harvesting", "Spice Processing", "Traditional Methods"]
        },
        {
          time: "12:00 PM",
          title: "Traditional Cooking Class",
          description: "Learn to prepare authentic Sri Lankan dishes",
          location: "Village Kitchen",
          type: "activity" as const,
          highlights: ["Curry Preparation", "Rice & Curry", "Traditional Techniques"]
        },
        {
          time: "2:00 PM",
          title: "Feast Your Creations",
          description: "Enjoy the meal you prepared",
          location: "Village Home",
          type: "meal" as const
        },
        {
          time: "4:00 PM",
          title: "Traditional Craft Workshop",
          description: "Learn local handicrafts and arts",
          location: "Artisan Center",
          type: "activity" as const,
          highlights: ["Mask Making", "Batik Painting", "Wood Carving"]
        },
        {
          time: "6:30 PM",
          title: "Cultural Performance",
          description: "Traditional dance and music show",
          location: "Village Center",
          type: "activity" as const
        }
      ],
      accommodation: "Luxury Bentota Beach Resort",
      meals: ["Village Breakfast", "Cooking Class Lunch", "Dinner"]
    },
    {
      day: 19,
      title: "Hidden Gems Discovery",
      location: "Off-beaten Path",
      theme: "Secret Locations",
      activities: [
        {
          time: "8:00 AM",
          title: "Adventure Breakfast",
          description: "Hearty breakfast for exploration day",
          location: "Resort",
          type: "meal" as const
        },
        {
          time: "9:00 AM",
          title: "Brief Garden Visit",
          description: "Landscaped garden by famous architect",
          location: "Brief Garden",
          type: "sightseeing" as const,
          highlights: ["Garden Design", "Sculpture", "Peaceful Setting"]
        },
        {
          time: "11:00 AM",
          title: "Moonstone Mines",
          description: "Visit traditional gem mining operations",
          location: "Meetiyagoda",
          type: "sightseeing" as const,
          highlights: ["Gem Mining", "Moonstone", "Local Industry"]
        },
        {
          time: "1:00 PM",
          title: "Local Gem Museum",
          description: "Learn about Sri Lankan precious stones",
          location: "Gem Museum",
          type: "sightseeing" as const
        },
        {
          time: "3:00 PM",
          title: "Secret Beach Discovery",
          description: "Hidden cove known only to locals",
          location: "Secret Beach",
          type: "activity" as const,
          highlights: ["Private Beach", "Snorkeling", "Photography"]
        },
        {
          time: "5:30 PM",
          title: "Fisherman's Village Tour",
          description: "Authentic fishing community experience",
          location: "Fishing Village",
          type: "activity" as const
        }
      ],
      accommodation: "Luxury Bentota Beach Resort",
      meals: ["Breakfast", "Local Lunch", "Farewell Dinner"]
    },
    {
      day: 20,
      title: "Final Relaxation & Reflection",
      location: "Beach Paradise",
      theme: "Peaceful Farewell",
      activities: [
        {
          time: "9:00 AM",
          title: "Lazy Beach Breakfast",
          description: "Leisurely meal with ocean views",
          location: "Beachfront",
          type: "meal" as const
        },
        {
          time: "10:30 AM",
          title: "Free Beach Time",
          description: "Personal time for swimming and relaxation",
          location: "Bentota Beach",
          type: "activity" as const,
          highlights: ["Swimming", "Sunbathing", "Beach Walk"]
        },
        {
          time: "1:00 PM",
          title: "Farewell Lunch",
          description: "Final taste of Sri Lankan coastal cuisine",
          location: "Resort Restaurant",
          type: "meal" as const
        },
        {
          time: "3:00 PM",
          title: "Spa & Wellness",
          description: "Rejuvenating treatments before departure",
          location: "Resort Spa",
          type: "activity" as const
        },
        {
          time: "5:00 PM",
          title: "Sunset Photography",
          description: "Capture final memories of paradise",
          location: "Beach",
          type: "activity" as const
        },
        {
          time: "7:00 PM",
          title: "Celebration Dinner",
          description: "Toast to an incredible journey",
          location: "Fine Dining Restaurant",
          type: "meal" as const
        }
      ],
      accommodation: "Luxury Bentota Beach Resort",
      meals: ["Breakfast", "Farewell Lunch", "Celebration Dinner"]
    },
    {
      day: 21,
      title: "Departure Day",
      location: "Journey Home",
      theme: "Fond Farewell",
      distance: "100km to Airport",
      travelTime: "2.5 hours",
      activities: [
        {
          time: "8:00 AM",
          title: "Final Breakfast",
          description: "Last meal overlooking the Indian Ocean",
          location: "Resort Terrace",
          type: "meal" as const
        },
        {
          time: "10:00 AM",
          title: "Last Minute Shopping",
          description: "Purchase final souvenirs and gifts",
          location: "Resort Boutique",
          type: "activity" as const
        },
        {
          time: "11:30 AM",
          title: "Check-out & Departure",
          description: "Farewell to Sri Lankan hospitality",
          location: "Resort",
          type: "accommodation" as const
        },
        {
          time: "12:00 PM",
          title: "Scenic Airport Transfer",
          description: "Final views of beautiful Sri Lanka",
          location: "Coastal Highway",
          type: "transport" as const
        },
        {
          time: "2:30 PM",
          title: "Airport Arrival",
          description: "Check-in for international departure",
          location: "Bandaranaike International Airport",
          type: "transport" as const
        },
        {
          time: "4:00 PM",
          title: "Departure Lounge",
          description: "Final moments in paradise",
          location: "Airport Lounge",
          type: "transport" as const
        }
      ],
      accommodation: "N/A - Departure Day",
      meals: ["Breakfast", "Airport Snacks"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-purple to-secondary">
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
              <div className="text-white">
                <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-4">
                  Ultimate Sri Lanka
                </h1>
                <p className="text-xl md:text-2xl mb-6">21 Days of Complete Discovery</p>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>21 Days</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    <span>2-10 People</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>9 Cities</span>
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
                  Complete 21-Day Adventure
                </h2>
                <DayItinerary days={detailedItinerary} packageColor="primary" />
              </div>

              <div className="lg:col-span-1">
                <BookingForm 
                  packageName="Ultimate Sri Lanka"
                  packagePrice="$2,999"
                  packageDuration="21 Days"
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

export default Package21Days;