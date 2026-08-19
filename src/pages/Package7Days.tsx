import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DayItinerary from "../components/DayItinerary";
import BookingForm from "../components/BookingForm";
import { Dialog, DialogContent, DialogTitle } from "../components/ui/dialog";
import { MapPin, Calendar, Users } from "lucide-react";

const DAYS = 7;
const vehicleTiers = [
  { label: "Hatchback", rate: 70, emoji: "🚗" },
  { label: "Sedan",   rate: 80, emoji: "🚙" },
  { label: "SUV",     rate: 120, emoji: "🚐" },
];

const Package7Days = () => {
  const [mapPreviewOpen, setMapPreviewOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  const openBooking = () => setBookingOpen(true);

  const detailedItinerary = [
    {
      day: 1,
      title: "Arrival in Colombo",
      location: "Colombo City",
      theme: "Arrival & City",
      distance: "35km from Airport",
      travelTime: "1 hour",
      activities: [
        { time: "10:00 AM", title: "Airport Pickup", description: "Meet your guide and transfer to hotel", location: "Bandaranaike International Airport", type: "transport" as const, image: "/package images/images (1).jpg", details: "Your driver-guide is waiting in the arrivals hall the moment you clear customs, and from there the tour is entirely yours. The 35km run down to Colombo is your first taste of the island — coconut palms crowding the roadside, fruit stalls stacked with king coconut, and tuk-tuks threading through the traffic." },
        { time: "12:00 PM", title: "Hotel Check-in & Lunch", description: "Settle in and enjoy traditional Sri Lankan lunch", location: "Colombo City Hotel", type: "meal" as const, image: "/package images/images.jpg", details: "Drop your bags, take a cool shower, and come down to your first proper rice and curry. Expect a mound of red rice ringed by half a dozen small dishes — dhal, jackfruit, beetroot, coconut sambol and a fiery fish curry — the meal that defines Sri Lankan home cooking." },
        { time: "2:30 PM", title: "Colombo City Tour", description: "Explore Independence Square, National Museum", location: "Colombo Historic District", type: "sightseeing" as const, highlights: ["Independence Square", "National Museum", "Pettah Market"], image: "/package images/img1.png", details: "Colombo wears its layered history in the open. You will walk beneath the carved stone lions of Independence Square, browse the colonial-era galleries of the National Museum, then plunge into Pettah, a grid of market streets where each lane is given over to a single trade." },
        { time: "5:00 PM", title: "Galle Face Green", description: "Sunset walk along the oceanfront promenade", location: "Galle Face Green", type: "activity" as const, highlights: ["Ocean Views", "Street Food", "Sunset"], image: "/package images/images (2).jpg", details: "A half-kilometre ribbon of lawn between the city and the Indian Ocean, Galle Face fills every evening with kite sellers, families and carts frying isso wade. Stay until the sun drops into the sea and the skyline lights up behind you." },
        { time: "7:00 PM", title: "Welcome Dinner", description: "Traditional Sri Lankan cuisine introduction", location: "Local Restaurant", type: "meal" as const, image: "/package images/images (3).jpg", details: "Your first dinner is a proper introduction to the island's kitchen: lacy hoppers with a runny egg in the centre, kottu roti clattering off the griddle, and curries mellowed with coconut milk, curry leaf and cinnamon." },
      ],
    },
    {
      day: 2,
      title: "Colombo to Sigiriya",
      location: "Sigiriya & Dambulla",
      theme: "Ancient Heritage",
      distance: "170km",
      travelTime: "3.5 hours",
      activities: [
        { time: "7:00 AM", title: "Early Breakfast & Departure", description: "Check out and begin journey to Cultural Triangle", location: "Hotel Restaurant", type: "meal" as const, image: "/package images/images.jpg", details: "An early start beats the Colombo traffic, so breakfast is served the moment the kitchen opens — fresh papaya and pineapple, string hoppers with coconut sambol, and strong Ceylon tea to see you off." },
        { time: "8:00 AM", title: "Drive to Sigiriya", description: "Scenic drive through Sri Lankan countryside", location: "Highway Route", type: "transport" as const, image: "/package images/yy.png", details: "The road north leaves the coastal bustle behind and opens into the dry-zone interior: flooded paddy fields, ancient irrigation tanks glinting between the trees, and villages where the day's rice is spread out to dry by the roadside. Your guide will stop wherever the view or a fruit stall demands it." },
        { time: "12:00 PM", title: "Dambulla Cave Temple", description: "Explore the Golden Temple and cave complex", location: "Dambulla", type: "sightseeing" as const, highlights: ["Cave Paintings", "Buddha Statues", "Mountain Views"], image: "/package images/ss.jpg", details: "Carved into a towering granite outcrop, Dambulla shelters five cave sanctuaries holding more than 150 Buddha statues and ceiling frescoes painted continuously for two thousand years. The short climb to the entrance is rewarded with a sweeping view over the Cultural Triangle plains." },
        { time: "2:00 PM", title: "Local Lunch", description: "Authentic rice and curry meal", location: "Dambulla Restaurant", type: "meal" as const, image: "/package images/images (3).jpg", details: "Lunch is a village-style rice and curry spread, cooked in clay pots over firewood the way the dry zone has always done it. The vegetables come from the surrounding fields and the sambols carry a genuine kick." },
        { time: "3:30 PM", title: "Check-in Sigiriya", description: "Settle into heritage hotel with rock views", location: "Sigiriya Hotel", type: "activity" as const, image: "/package images/aaaaaa.jpg", details: "Your hotel sits within sight of Sigiriya rock, and the terrace looks straight out at the fortress that you will climb at dawn tomorrow. Afternoons here are for the pool, a cold drink, and watching the rock change colour as the light shifts." },
        { time: "5:00 PM", title: "Village Tour", description: "Traditional village life experience", location: "Local Village", type: "activity" as const, highlights: ["Bullock Cart Ride", "Traditional Cooking", "Local Crafts"], image: "/package images/images (4).jpg", details: "A working village opens its doors for the afternoon: you will ride in a bullock cart along the bund of the tank, cross the water by catamaran, and sit in a mud-walled kitchen while lunch is ground on a stone and cooked over an open hearth." },
      ],
    },
    {
      day: 3,
      title: "Sigiriya Rock Fortress",
      location: "Sigiriya",
      theme: "Ancient Wonder",
      activities: [
        { time: "5:30 AM", title: "Early Start", description: "Light breakfast before the climb", location: "Hotel", type: "meal" as const, image: "/package images/images.jpg", details: "A deliberately light breakfast — tea, fruit and toast — because you are climbing 1,200 steps within the hour. Going up at first light means cool air, soft photographic light and the site largely to yourselves." },
        { time: "6:00 AM", title: "Sigiriya Rock Climb", description: "Ascend the ancient rock fortress at sunrise", location: "Sigiriya Rock", type: "activity" as const, highlights: ["Frescoes", "Mirror Wall", "Summit Palace", "360° Views"], image: "/package images/images (5).jpg", details: "King Kasyapa built his capital on top of a 200-metre column of rock in the 5th century, and the ascent still passes his frescoes of bare-shouldered court women, the mirror-polished wall scrawled with 1,000-year-old graffiti, and the giant lion's paws that guard the final staircase. The summit is a whole palace in outline — throne, bathing pool and terraces — with the jungle running flat to the horizon on every side." },
        { time: "9:00 AM", title: "Royal Gardens", description: "Explore the water gardens and landscape design", location: "Sigiriya Base", type: "sightseeing" as const, image: "/package images/images (6).jpg", details: "The gardens at the foot of the rock are among the oldest surviving landscaped gardens in the world, laid out on a strict symmetrical plan. The fountains, fed by underground channels cut fifteen centuries ago, still spout after heavy rain." },
        { time: "11:00 AM", title: "Rest & Brunch", description: "Recover with refreshments and local fruits", location: "Garden Cafe", type: "meal" as const, image: "/package images/cv.jpg", details: "A shaded table, a tall glass of king coconut water and a plate of cut mango, papaya and rambutan — exactly what the legs need after the climb." },
        { time: "1:00 PM", title: "Pidurangala Rock", description: "Alternative viewpoint for Sigiriya photos", location: "Pidurangala", type: "activity" as const, highlights: ["Photography", "Hiking", "Rock Views"], image: "/package images/images (7).jpg", details: "Pidurangala is the rock next door, and the reason to climb it is simple: it is the only place you can photograph Sigiriya itself, rising whole out of the jungle. The last stretch is a scramble over boulders past a reclining Buddha, and the summit is a wide, flat slab made for sitting." },
        { time: "4:00 PM", title: "Ayurvedic Spa", description: "Traditional healing and relaxation", location: "Hotel Spa", type: "activity" as const, image: "/package images/images (8).jpg", details: "Ayurveda has been practised on this island for well over two thousand years. Your treatment begins with warm herbal oils pressed into the shoulders and legs, followed by a steam bath scented with lemongrass — a well-judged end to a day spent on staircases." },
      ],
    },
    {
      day: 4,
      title: "Sigiriya to Kandy",
      location: "Kandy via Spice Garden",
      theme: "Spices & Culture",
      distance: "95km",
      travelTime: "2.5 hours",
      activities: [
        { time: "8:00 AM", title: "Breakfast & Check-out", description: "Final breakfast with rock views", location: "Hotel Restaurant", type: "meal" as const, image: "/package images/images.jpg", details: "One last breakfast on the terrace with Sigiriya filling the view, before the road turns south and the flat dry zone gives way to hills." },
        { time: "9:00 AM", title: "Spice Garden Visit", description: "Learn about Sri Lankan spices and cultivation", location: "Matale Spice Garden", type: "sightseeing" as const, highlights: ["Cinnamon", "Cardamom", "Vanilla", "Ayurvedic Plants"], image: "/package images/images (9).jpg", details: "Matale's spice gardens are the reason European fleets came looking for this island in the first place. A grower walks you between the plants — peeling a strip of true cinnamon bark, crushing a cardamom pod, pointing out vanilla vines twisting up the shade trees — and explains the Ayurvedic use of each." },
        { time: "11:00 AM", title: "Continue to Kandy", description: "Drive through hill country landscapes", location: "Hill Country Route", type: "transport" as const, image: "/package images/images (10).jpg", details: "The road begins to climb in earnest here, winding through terraced smallholdings and stands of areca palm. The air cools noticeably as you approach Kandy, which sits in a bowl of hills at 500 metres." },
        { time: "1:00 PM", title: "Kandy Arrival & Lunch", description: "Check-in and local cuisine", location: "Kandy City Hotel", type: "meal" as const, image: "/package images/images (3).jpg", details: "Check in above the lake, then lunch on hill-country cooking — gently spiced curries, fresh green jackfruit, and mallung of finely chopped greens with scraped coconut." },
        { time: "3:00 PM", title: "Kandy Lake Walk", description: "Peaceful stroll around the sacred lake", location: "Kandy Lake", type: "activity" as const, image: "/package images/images (11).jpg", details: "The last king of Kandy had this lake dug in 1807, and the low white parapet running around it is still known as the Cloud Wall. It is a flat, shaded circuit of about three kilometres, with monitor lizards basking on the bank and pelicans working the shallows." },
        { time: "5:00 PM", title: "Temple of the Tooth", description: "Visit the sacred Buddhist temple", location: "Temple of the Sacred Tooth Relic", type: "sightseeing" as const, highlights: ["Sacred Relic", "Evening Ceremony", "Architecture"], image: "/package images/tf.png", details: "The Sri Dalada Maligawa houses a tooth of the Buddha, the single most venerated object in the country and once the emblem of the right to rule. You will arrive for the evening thevava, when drummers and horn players sound the ceremony and the inner chamber is opened to a slow queue of pilgrims carrying lotus flowers." },
        { time: "7:00 PM", title: "Cultural Dance Show", description: "Traditional Kandyan dancing performance", location: "Cultural Center", type: "activity" as const, image: "/package images/images (12).jpg", details: "An hour of Kandyan dance in full silver headdress and beaded chest plates, driven by the double-headed geta bera drum. The finale moves outdoors for fire-eating and a walk across a bed of glowing coals." },
      ],
    },
    {
      day: 5,
      title: "Kandy Exploration",
      location: "Kandy & Surroundings",
      theme: "Gardens & Culture",
      activities: [
        { time: "8:00 AM", title: "Breakfast at Hotel", description: "Start day with continental breakfast", location: "Hotel Restaurant", type: "meal" as const, image: "/package images/images.jpg", details: "A relaxed start with the mist still lifting off the lake — eggs to order, tropical fruit, and a pot of high-grown Ceylon tea picked a few valleys from where you are sitting." },
        { time: "9:00 AM", title: "Royal Botanical Gardens", description: "Explore Peradeniya's world-famous gardens", location: "Peradeniya", type: "sightseeing" as const, highlights: ["Orchid House", "Giant Bamboo", "Medicinal Plants", "Avenue of Royal Palms"], image: "/package images/images (13).jpg", details: "Sixty hectares in a loop of the Mahaweli river, laid out by the British in 1821 on the site of a royal pleasure garden. The set pieces are the orchid house, the avenue of cabbage palms, a Javan fig whose canopy covers 2,500 square metres on its own, and a grove of giant bamboo that grows a foot a day." },
        { time: "12:00 PM", title: "Garden Picnic Lunch", description: "Enjoy lunch surrounded by nature", location: "Botanical Gardens", type: "meal" as const, image: "/package images/images (14).jpg", details: "Lunch is spread out on the lawns under the big trees, with fruit bats hanging in noisy colonies overhead and troops of macaques keeping a close eye on proceedings." },
        { time: "2:00 PM", title: "Tea Factory Visit", description: "Learn about Ceylon tea production", location: "Local Tea Factory", type: "sightseeing" as const, highlights: ["Tea Processing", "Tasting Session", "Factory Tour"], image: "/package images/images (15).jpg", details: "You follow the leaf through the whole process — withering troughs, rolling machines, oxidation beds and the wood-fired driers that fill the building with a warm malty smell. A tasting at the end sets the grades side by side, from delicate high-grown orange pekoe to the strong broken leaf that makes proper morning tea." },
        { time: "4:00 PM", title: "Kandy City Shopping", description: "Browse local markets and gem shops", location: "Kandy Market Square", type: "activity" as const, image: "/package images/images (16).jpg", details: "The covered municipal market is stacked with spices, dried fish and pyramids of unfamiliar fruit, while the surrounding streets hold batik workshops, brass and the gem dealers Sri Lanka is known for — sapphires above all." },
        { time: "6:00 PM", title: "Sunset Viewpoint", description: "Panoramic views of Kandy city", location: "Arthur's Seat", type: "activity" as const, image: "/package images/images (17).jpg", details: "A short drive up the ridge brings you to the classic view of Kandy: the lake, the golden roof of the Temple of the Tooth and the whole town cupped in its ring of hills, best seen as the light goes orange and the evening drums start up below." },
      ],
    },
    {
      day: 6,
      title: "Kandy to Galle",
      location: "Galle Fort",
      theme: "Colonial Coast",
      distance: "220km",
      travelTime: "4 hours",
      activities: [
        { time: "7:00 AM", title: "Early Breakfast", description: "Hearty breakfast before coastal journey", location: "Hotel Restaurant", type: "meal" as const, image: "/package images/images.jpg", details: "A full breakfast before a long driving day — string hoppers, egg hoppers, seeni sambol and enough tea to get you down to the coast in good spirits." },
        { time: "8:00 AM", title: "Departure to Galle", description: "Scenic drive to the southern coast", location: "Highway to Coast", type: "transport" as const, image: "/package images/images (18).jpg", details: "The run south drops you out of the hills and onto the southern expressway, trading tea slopes for rubber plantations and then for the first flash of the Indian Ocean through the palms." },
        { time: "12:00 PM", title: "Coastal Lunch Stop", description: "Fresh seafood by the ocean", location: "Coastal Restaurant", type: "meal" as const, image: "/package images/images (19).jpg", details: "Lunch is whatever came in on the morning boats — seer fish grilled over coals, prawns in a red devilled sauce, or crab curry eaten properly with your hands — at a table close enough to the water to hear it." },
        { time: "2:00 PM", title: "Galle Fort Arrival", description: "Check-in to heritage hotel in the fort", location: "Galle Fort", type: "activity" as const, image: "/package images/images (21).jpg", details: "You stay inside the fort walls in a restored merchant's house: thick lime-washed walls, a shaded inner courtyard, polished satinwood floors and ceiling fans turning slowly over the beds." },
        { time: "3:00 PM", title: "Fort Walking Tour", description: "Explore Dutch colonial architecture", location: "Galle Fort", type: "sightseeing" as const, highlights: ["Dutch Church", "Lighthouse", "Ramparts", "Colonial Buildings"], image: "/package images/images (20).jpg", details: "Built by the Portuguese and massively rebuilt by the Dutch in 1663, Galle Fort is the best-preserved European sea fortress in Asia and still a living neighbourhood. You will walk the grid of gabled streets past the Dutch Reformed Church with its floor of old tombstones, the 1848 lighthouse, and courtyards now given over to jewellers, bookshops and cafes." },
        { time: "5:30 PM", title: "Sunset at Ramparts", description: "Watch sunset from historic fort walls", location: "Fort Ramparts", type: "activity" as const, image: "/package images/images (22).jpg", details: "The ramparts are where the whole town gathers at dusk — cricket games on the grass, couples along the wall, and local boys throwing themselves off the bastion into the sea below as the sun goes down behind the lighthouse." },
        { time: "7:00 PM", title: "Fort Dining", description: "Dinner at historic restaurant", location: "Fort Restaurant", type: "meal" as const, image: "/package images/images.jpg", details: "Dinner in a 300-year-old Dutch townhouse, where the kitchen puts southern seafood alongside colonial-era recipes: lamprais baked in banana leaf, black pork curry, and a wobbling wedge of wattalappam to finish." },
      ],
    },
    {
      day: 7,
      title: "Departure Day",
      location: "Galle to Airport",
      theme: "Beach & Farewell",
      distance: "150km",
      travelTime: "3 hours",
      activities: [
        { time: "8:00 AM", title: "Leisurely Breakfast", description: "Final breakfast with ocean views", location: "Hotel Terrace", type: "meal" as const, image: "/package images/images (23).jpg", details: "No alarm on the last morning. Breakfast runs long on the terrace, with the sea breeze coming over the ramparts and a final pot of Ceylon tea in front of you." },
        { time: "9:30 AM", title: "Beach Time", description: "Relax on Unawatuna Beach", location: "Unawatuna Beach", type: "activity" as const, highlights: ["Swimming", "Beach Walk", "Final Photos"], image: "/package images/aa (2).jpg", details: "Unawatuna is a sheltered crescent of pale sand a few minutes from the fort, protected by a reef that keeps the water calm enough for easy swimming. Palms lean out over the beach and the shallows are warm all the way in — a last hour in the Indian Ocean before the flight." },
        { time: "11:30 AM", title: "Last-minute Shopping", description: "Purchase souvenirs and local crafts", location: "Galle Fort Shops", type: "activity" as const, image: "/package images/images (24).jpg", details: "The fort's small streets are the best shopping of the trip: hand-loomed cotton and batik, Ceylon tea and cinnamon packed for travel, carved masks, and the gem shops where you can watch stones being cut in the back room." },
        { time: "1:00 PM", title: "Farewell Lunch", description: "Final Sri Lankan meal", location: "Beachside Restaurant", type: "meal" as const, image: "/package images/images (25).jpg", details: "One more rice and curry with your feet more or less in the sand, and a chance to thank the guide who has driven you across the island over the past week." },
        { time: "2:30 PM", title: "Departure Transfer", description: "Journey to Colombo Airport", location: "Airport Transfer", type: "transport" as const, image: "/package images/images (26).jpg", details: "The southern expressway makes the airport run straightforward — roughly three hours from the coast, with the last of the paddy fields and coconut estates going past the window." },
        { time: "6:00 PM", title: "Airport Arrival", description: "Check-in for international departure", location: "Bandaranaike International Airport", type: "transport" as const, image: "/package images/sl.png", details: "Your guide sees you through to the terminal and stays until you are checked in. There is duty-free tea, cashews and arrack inside if you want to take a little more of the island home." },
      ],
    },
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
                  Cultural Triangle
                </h1>
                <p className="text-xl md:text-2xl mb-4">
                  7 Days of Heritage & Culture
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
                  <div className="flex items-center"><Calendar className="w-5 h-5 mr-2" /><span>7 Days</span></div>
                  <div className="flex items-center"><Users className="w-5 h-5 mr-2" /><span>As Much As You Like</span></div>
                  <div className="flex items-center"><MapPin className="w-5 h-5 mr-2" /><span>5 Cities</span></div>
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
                    src="/package images/new7.png"
                    alt="7-day Cultural Triangle route map"
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
                Detailed Day-by-Day Journey
              </h2>
              <DayItinerary days={detailedItinerary} packageColor="primary" />
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Route Map Preview */}
      <Dialog open={mapPreviewOpen} onOpenChange={setMapPreviewOpen}>
        <DialogContent className="max-w-3xl p-2 sm:p-2 bg-background/95 backdrop-blur-sm">
          <DialogTitle className="sr-only">7-day Cultural Triangle route map</DialogTitle>
          <img
            src="/package images/new7.png"
            alt="7-day Cultural Triangle route map"
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
          <DialogTitle className="sr-only">Book the Cultural Triangle package</DialogTitle>
          <div className="max-h-[92vh] overflow-y-auto overscroll-contain">
            <BookingForm
              packageName="Cultural Triangle"
              packagePrice={`From $${vehicleTiers[0].rate * DAYS}`}
              packageDuration="7 Days"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Package7Days;