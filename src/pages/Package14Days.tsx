import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DayItinerary from '../components/DayItinerary';
import BookingForm from '../components/BookingForm';
import { Dialog, DialogContent, DialogTitle } from '../components/ui/dialog';
import { MapPin, Calendar, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DAYS = 14;
const vehicleTiers = [
  { label: "Hatchback", rate: 70, emoji: "🚗" },
  { label: "Sedan",   rate: 80, emoji: "🚙" },
  { label: "SUV",     rate: 120, emoji: "🚐" },
];

const Package14Days = () => {
  const navigate = useNavigate();
  const [mapPreviewOpen, setMapPreviewOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  const openBooking = () => setBookingOpen(true);

  const detailedItinerary = [
    {
      day: 1,
      title: "Arrival in Colombo",
      location: "Colombo City",
      theme: "Urban Discovery",
      activities: [
        { time: "10:00 AM", title: "Airport Welcome", description: "Meet your guide and luxury transfer", location: "Bandaranaike International Airport", type: "transport" as const, image: "/package images/images.jpg", details: "Your driver-guide meets you in the arrivals hall and stays with you for the full fortnight. The air-conditioned run into Colombo is your first look at the island — coconut palms along the roadside, king coconut stalls, and tuk-tuks threading through the traffic." },
        { time: "2:00 PM", title: "City Orientation Tour", description: "Explore Colombo's highlights and hidden gems", location: "Colombo Historic District", type: "sightseeing" as const, highlights: ["Independence Memorial", "Red Mosque", "Lotus Tower"], image: "/package images/img1.png", details: "Colombo layers a thousand years of trade into a few square kilometres. You will see the carved stone lions of the Independence Memorial, the candy-striped brickwork of the Red Mosque in the middle of Pettah's market lanes, and the Lotus Tower rising 350 metres over the skyline." }
      ]
    },
    {
      day: 2,
      title: "Colombo to Sigiriya",
      location: "Cultural Triangle",
      theme: "Ancient Heritage",
      distance: "170km",
      activities: [
        { time: "8:00 AM", title: "Journey to Cultural Triangle", description: "Scenic drive through authentic Sri Lanka", location: "Highway Route", type: "transport" as const, image: "/package images/images.jpg", details: "The road north leaves the coast behind and opens into the dry-zone interior: flooded paddy fields, ancient irrigation tanks glinting between the trees, and villages where the day's rice is spread out to dry by the roadside." },
        { time: "12:00 PM", title: "Dambulla Golden Temple", description: "UNESCO World Heritage cave complex", location: "Dambulla", type: "sightseeing" as const, highlights: ["Ancient Frescoes", "Buddha Statues", "Cave Temples"], image: "/package images/ss.jpg", details: "Carved into a towering granite outcrop, Dambulla shelters five cave sanctuaries holding more than 150 Buddha statues beneath ceilings painted continuously for two thousand years. The short climb to the entrance is rewarded with a sweeping view across the Cultural Triangle plains." }
      ]
    },
    {
      day: 3,
      title: "Sigiriya & Polonnaruwa",
      location: "Ancient Cities",
      theme: "Archaeological",
      activities: [
        { time: "5:30 AM", title: "Sigiriya Rock Climb", description: "Sunrise ascent of the ancient rock fortress", location: "Sigiriya Rock", type: "activity" as const, highlights: ["Lion's Paws", "Frescoes", "Summit Views"], image: "/package images/aaaaaa.jpg", details: "King Kasyapa built his capital on top of a 200-metre column of rock in the 5th century. The climb passes his frescoes of bare-shouldered court women, the mirror-polished wall scrawled with 1,000-year-old graffiti, and the giant lion's paws guarding the final staircase — with the whole palace laid out in outline at the summit." },
        { time: "2:00 PM", title: "Polonnaruwa Ancient City", description: "Explore medieval capital ruins", location: "Polonnaruwa", type: "sightseeing" as const, highlights: ["Gal Vihara", "Royal Palace", "Lotus Pond"], image: "/package images/images.jpg", details: "Sri Lanka's second capital was at its height in the 12th century, and its ruins are compact enough to explore by bicycle. The masterpiece is Gal Vihara, four colossal Buddhas cut from a single granite face — the 14-metre reclining figure among the finest stone carving in Asia." }
      ]
    },
    {
      day: 4,
      title: "Sigiriya to Kandy",
      location: "Hill Capital",
      theme: "Cultural Heritage",
      distance: "95km",
      activities: [
        { time: "9:00 AM", title: "Spice Garden Visit", description: "Learn about Ceylon spices and Ayurveda", location: "Matale", type: "sightseeing" as const, highlights: ["Cinnamon", "Cardamom", "Traditional Medicine"], image: "/package images/images.jpg", details: "Matale's spice gardens are the reason European fleets came looking for this island. A grower walks you between the plants — peeling a strip of true cinnamon bark, crushing a cardamom pod, pointing out vanilla vines twisting up the shade trees — and explains the Ayurvedic use of each." },
        { time: "4:00 PM", title: "Kandy City Tour", description: "Explore the last royal capital", location: "Kandy", type: "sightseeing" as const, highlights: ["Temple of Tooth", "Royal Palace", "Kandy Lake"], image: "/package images/a.jpg", details: "Kandy held out as an independent kingdom until 1815, and it still feels like a capital. You will visit the Temple of the Sacred Tooth Relic during the evening drumming ceremony, walk the old palace quarter, and circle the lake the last king had dug in 1807." }
      ]
    },
    {
      day: 5,
      title: "Kandy to Nuwara Eliya",
      location: "Tea Country",
      theme: "Hill Country",
      distance: "80km",
      activities: [
        { time: "9:00 AM", title: "Tea Plantation Tour", description: "Experience Ceylon tea culture and processing", location: "Tea Estate", type: "sightseeing" as const, highlights: ["Tea Plucking", "Factory Tour", "Tasting Session"], image: "/package images/ww.jpg", details: "You walk the terraced slopes with the pluckers, who take only the top two leaves and a bud, then follow the leaf indoors through withering troughs, rolling machines and wood-fired driers. The tasting at the end sets the grades side by side, from delicate high-grown pekoe to the strong broken leaf that makes proper morning tea." },
        { time: "2:00 PM", title: "Hill Country Drive", description: "Scenic journey through misty mountains", location: "Hill Roads", type: "transport" as const, image: "/package images/rr.jpg", details: "The climb to Nuwara Eliya is one of the great drives in Asia — hairpin bends through tea slopes clipped like green cushions, waterfalls dropping straight onto the road, and cloud rolling through the valleys below you. Bring a layer; at 1,900 metres the evenings genuinely turn cold." }
      ]
    },
    {
      day: 6,
      title: "Nuwara Eliya Exploration",
      location: "Little England",
      theme: "Colonial Heritage",
      activities: [
        { time: "9:00 AM", title: "Gregory Lake & Victoria Park", description: "Enjoy the cool hill station atmosphere", location: "Nuwara Eliya City", type: "activity" as const, highlights: ["Boating", "Gardens", "Colonial Architecture"], image: "/package images/dd.jpg", details: "The British built Nuwara Eliya to feel like home, and it still does — mock-Tudor bungalows, a racecourse, hedges and rose beds. You can take a boat or swan pedalo out on Gregory Lake, then walk Victoria Park, which is one of the best birding spots in the hills." },
        { time: "2:00 PM", title: "Strawberry Farm Visit", description: "Fresh mountain agriculture experience", location: "Local Farm", type: "activity" as const, image: "/package images/cv.jpg", details: "The cool highland climate lets Sri Lanka grow crops that fail everywhere else on the island — strawberries, leeks, carrots and cabbages. You can pick your own and have them served with cream, or take a fresh milkshake for the road." }
      ]
    },
    {
      day: 7,
      title: "Nuwara Eliya to Yala",
      location: "Wildlife Country",
      theme: "Nature Transition",
      distance: "200km",
      activities: [
        { time: "8:00 AM", title: "Journey to Yala", description: "Drive from cool hills to tropical lowlands", location: "Trans-island Route", type: "transport" as const, image: "/package images/images.jpg", details: "In a single morning you drop from cold mountain air at 1,900 metres to the hot scrub country of the southeast. The route passes Ella Gap, the thundering Ravana Falls and terraced paddy, with the temperature climbing steadily the whole way down." },
        { time: "3:00 PM", title: "Safari Lodge Check-in", description: "Settle into wildlife accommodation", location: "Yala Safari Lodge", type: "activity" as const, image: "/package images/images.jpg", details: "Your lodge sits on the edge of the park, where elephants sometimes cross the boundary at dusk and peacocks roost noisily in the trees. Afternoons are for the pool and an early night before the 5am safari call." }
      ]
    },
    {
      day: 8,
      title: "Yala Safari Experience",
      location: "Yala National Park",
      theme: "Wildlife Adventure",
      activities: [
        { time: "5:30 AM", title: "Morning Safari", description: "Prime time for leopard and elephant spotting", location: "Yala Block 1", type: "activity" as const, highlights: ["Leopards", "Elephants", "Bears", "Birds"], image: "/package images/tt.jpg", details: "Block 1 holds one of the densest leopard populations anywhere on earth, and first light is when they are still moving on the tracks. Between sightings the park delivers elephant, sloth bear, spotted deer, crocodiles in the waterholes and painted storks working the lagoons." },
        { time: "3:30 PM", title: "Evening Safari", description: "Golden hour wildlife photography", location: "Yala Block 2", type: "activity" as const, highlights: ["Sunset", "Nocturnal Animals", "Photography"], image: "/package images/bb.jpg", details: "The afternoon drive runs into the golden hour, when the scrub turns copper and animals come down to drink. This is the best light of the day for photography, and the drive back out often turns up the nocturnal species stirring — civets, hares and the occasional fishing cat." }
      ]
    },
    {
      day: 9,
      title: "Yala to Galle",
      location: "Southern Coast",
      theme: "Coastal Transition",
      distance: "180km",
      activities: [
        { time: "8:00 AM", title: "Coastal Journey", description: "Drive to historic southern coast", location: "Southern Highway", type: "transport" as const, image: "/package images/qq.jpg", details: "The coast road west runs past salt pans, fishing villages and long empty beaches, with stops possible at the blowhole at Hummanaya or the great white dagoba at Tissamaharama on the way out." },
        { time: "1:00 PM", title: "Galle Fort Arrival", description: "Check into heritage accommodation", location: "Galle Fort", type: "activity" as const, image: "/package images/nn.jpg", details: "You stay inside the fort walls in a restored Dutch merchant's house — thick lime-washed walls, a shaded inner courtyard, polished satinwood floors and ceiling fans turning slowly overhead." }
      ]
    },
    {
      day: 10,
      title: "Galle Fort Exploration",
      location: "Galle Fort",
      theme: "Colonial Heritage",
      activities: [
        { time: "9:00 AM", title: "Fort Walking Tour", description: "Explore Dutch colonial architecture", location: "Galle Fort", type: "sightseeing" as const, highlights: ["Dutch Church", "Lighthouse", "Ramparts", "Museums"], image: "/package images/cc.jpg", details: "Built by the Portuguese and massively rebuilt by the Dutch in 1663, Galle Fort is the best-preserved European sea fortress in Asia and still a living neighbourhood. You will walk the grid of gabled streets past the Dutch Reformed Church with its floor of old tombstones, the 1848 lighthouse, and a full circuit of the ramparts above the sea." },
        { time: "2:00 PM", title: "Craft & Gem Shopping", description: "Browse local artisan workshops", location: "Fort Streets", type: "activity" as const, image: "/package images/images.jpg", details: "The fort's small streets hold the best shopping of the trip: hand-loomed cotton and batik, Ceylon tea and cinnamon packed for travel, carved masks, and gem dealers where you can watch sapphires being cut and polished in the back room." }
      ]
    },
    {
      day: 11,
      title: "Beach & Water Sports",
      location: "Unawatuna Bay",
      theme: "Beach Activities",
      activities: [
        { time: "9:00 AM", title: "Unawatuna Beach", description: "Golden sandy beach relaxation", location: "Unawatuna", type: "activity" as const, highlights: ["Swimming", "Snorkeling", "Beach Games"], image: "/package images/aa.jpg", details: "Unawatuna is a sheltered crescent of pale sand protected by a reef, which keeps the water calm enough for easy swimming and clear enough to snorkel straight off the beach. Palms lean out over the sand and the shallows stay warm all day." },
        { time: "2:00 PM", title: "Water Sports", description: "Surfing, diving, and boat trips", location: "Beach Center", type: "activity" as const, image: "/package images/ee.jpg", details: "The bay is a good place to learn — gentle beach breaks for a first surf lesson, dive sites on the reef and on a nearby wreck, and glass-bottom boats out to the turtles that feed just offshore." }
      ]
    },
    {
      day: 12,
      title: "Mirissa & Whale Watching",
      location: "Mirissa Bay",
      theme: "Marine Life",
      activities: [
        { time: "6:00 AM", title: "Whale Watching Tour", description: "Blue whale and dolphin spotting", location: "Mirissa Harbor", type: "activity" as const, highlights: ["Blue Whales", "Sperm Whales", "Dolphins"], image: "/package images/images.jpg", details: "The continental shelf drops away steeply just off Mirissa, which brings blue whales — the largest animal that has ever lived — within a couple of hours of the harbour. Boats leave at first light for the calmest sea, and pods of spinner dolphins several hundred strong often escort you out." },
        { time: "2:00 PM", title: "Coconut Tree Hill", description: "Iconic palm tree viewpoint", location: "Mirissa Hill", type: "sightseeing" as const, image: "/package images/images.jpg", details: "A narrow headland crowded with leaning coconut palms, dropping straight into the surf on three sides. It is the most photographed spot on the south coast, and late afternoon gives the best light on the water." }
      ]
    },
    {
      day: 13,
      title: "Southern Coast Exploration",
      location: "South Coast",
      theme: "Coastal Discovery",
      activities: [
        { time: "9:00 AM", title: "Stilt Fishermen", description: "Traditional fishing methods", location: "Weligama", type: "sightseeing" as const, highlights: ["Traditional Fishing", "Photo Opportunities"], image: "/package images/images.jpg", details: "Stilt fishing began here during the food shortages of the 1940s: a single pole planted in the reef, a crossbar to perch on, and a line dropped into water too shallow for boats to disturb. Early morning and late afternoon are when the poles are actually worked." },
        { time: "12:00 PM", title: "Snake Island", description: "Small temple island exploration", location: "Snake Island", type: "activity" as const, image: "/package images/images.jpg", details: "A tiny rocky island a short wade or boat-ride off Mirissa beach, topped by a small shrine and a lighthouse. The scramble up takes ten minutes and the view back along the whole curve of the bay is worth it." }
      ]
    },
    {
      day: 14,
      title: "Departure Day",
      location: "Airport Transfer",
      theme: "Farewell",
      distance: "150km",
      activities: [
        { time: "9:00 AM", title: "Final Beach Moments", description: "Last tropical memories", location: "Beach", type: "activity" as const, image: "/package images/b.jpg", details: "No alarm on the last morning — a long breakfast, a final swim in the Indian Ocean and time to sort through two weeks of photographs before the bags go in the car." },
        { time: "12:00 PM", title: "Departure Transfer", description: "Journey to Colombo Airport", location: "Airport Route", type: "transport" as const, image: "/package images/images.jpg", details: "The southern expressway makes the airport run straightforward — around three hours from the coast, with the last of the paddy fields and coconut estates going past the window. Your guide stays with you until you are checked in." }
      ]
    }
  ];

  return (
    <div className="min-h-screen pb-20 lg:pb-0">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-12 lg:py-0 lg:h-96 bg-gradient-to-r from-orange-300 to-red-400">
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-center">
              <div className="text-white text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
                  Complete Sri Lanka
                </h1>
                <p className="text-xl md:text-2xl mb-4">
                  14 Days of Ultimate Discovery
                </p>

                {/* Vehicle Tier Pricing */}
                <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 mb-4 inline-block text-left">
                  <p className="text-white/70 text-xs uppercase tracking-wider mb-2">Vehicle Options</p>
                  <div className="space-y-1">
                    {vehicleTiers.map((tier) => (
                      <div key={tier.label} className="flex items-center justify-between gap-6 text-sm">
                        <span className="flex items-center gap-1.5">
                          <span>{tier.emoji}</span>
                          <span className="font-medium">{tier.label}</span>
                          <span className="text-white/60">${tier.rate}/day</span>
                        </span>
                        <span className="font-bold">${tier.rate * DAYS} total</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="flex items-center"><Calendar className="w-5 h-5 mr-2" /><span>14 Days</span></div>
                  <div className="flex items-center"><Users className="w-5 h-5 mr-2" /><span>As Much As You Like</span></div>
                  <div className="flex items-center"><MapPin className="w-5 h-5 mr-2" /><span>8 Cities</span></div>
                </div>

                <button
                  onClick={openBooking}
                  className="mt-6 sm:mt-8 px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow duration-300 w-full sm:w-auto"
                >
                  Book Now
                </button>
              </div>

              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={() => setMapPreviewOpen(true)}
                  className="w-full max-w-xs sm:max-w-sm h-40 sm:h-48 md:h-56 lg:w-80 lg:h-60 rounded-2xl shadow-2xl overflow-hidden border-4 border-white/20 bg-white/10 cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <img
                    src="/package images/new14.png"
                    alt="14-day Complete Sri Lanka route map"
                    className="w-full h-full object-contain"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Package Details */}
        <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
          <div className="container mx-auto px-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 font-poppins bg-gradient-to-r from-[#d4af37] to-[#e53e3e] bg-clip-text text-transparent">
                Complete 14-Day Journey
              </h2>
              <DayItinerary days={detailedItinerary} packageColor="accent" />
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Route Map Preview */}
      <Dialog open={mapPreviewOpen} onOpenChange={setMapPreviewOpen}>
        <DialogContent className="max-w-3xl p-2 sm:p-2 bg-background/95 backdrop-blur-sm">
          <DialogTitle className="sr-only">14-day Complete Sri Lanka route map</DialogTitle>
          <img
            src="/package images/new14.png"
            alt="14-day Complete Sri Lanka route map"
            className="w-full max-h-[80vh] object-contain rounded-lg"
          />
        </DialogContent>
      </Dialog>

      {/* Sticky mobile booking bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t bg-white/95 backdrop-blur px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
        <button
          onClick={openBooking}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold shadow-lg active:scale-[0.99] transition-transform"
        >
          Book Now
        </button>
      </div>

      {/* Booking Form */}
      <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
        <DialogContent className="w-[calc(100vw-1rem)] sm:w-full max-w-2xl p-0 gap-0 max-h-[92vh] overflow-hidden rounded-lg">
          <DialogTitle className="sr-only">Book the Complete Sri Lanka package</DialogTitle>
          <div className="max-h-[92vh] overflow-y-auto overscroll-contain">
            <BookingForm
              packageName="Complete Sri Lanka"
              packagePrice={`From $${vehicleTiers[0].rate * DAYS}`}
              packageDuration="14 Days"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Package14Days;