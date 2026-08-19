import React, { useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DayItinerary from '../components/DayItinerary';
import BookingForm from '../components/BookingForm';
import AnimatedMap from '../components/AnimatedMap';
import { Dialog, DialogContent, DialogTitle } from '../components/ui/dialog';
import { MapPin, Calendar, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DAYS = 21;
const vehicleTiers = [
  { label: "Hatchback", rate: 70, emoji: "🚗" },
  { label: "Sedan",   rate: 80, emoji: "🚙" },
  { label: "SUV",     rate: 120, emoji: "🚐" },
];

const Package21Days = () => {
  const navigate = useNavigate();
  const bookingFormRef = useRef<HTMLDivElement>(null);
  const [mapPreviewOpen, setMapPreviewOpen] = useState(false);

  const scrollToBooking = () => {
    bookingFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
        { time: "10:00 AM", title: "VIP Airport Reception", description: "Luxury meet & greet with traditional welcome", location: "Bandaranaike International Airport", type: "transport" as const, image: "/package images/images.jpg", details: "You are met inside the terminal with a traditional welcome — a garland of jasmine and a king coconut to drink — and walked straight to a waiting air-conditioned vehicle. Your driver-guide stays with you for the entire three weeks." },
        { time: "12:00 PM", title: "Premium Hotel Check-in", description: "Settle into luxury accommodation with city views", location: "5-Star Colombo Hotel", type: "activity" as const, image: "/package images/images.jpg", details: "Your first night is spent high above Colombo, with the Indian Ocean on one side and the city's ragged skyline on the other. Time to shower, sleep off the flight and let the jet lag settle before the afternoon tour." },
        { time: "2:00 PM", title: "Colombo Heritage Tour", description: "Explore colonial and modern landmarks", location: "Colombo Historic District", type: "sightseeing" as const, highlights: ["Independence Memorial", "Red Mosque", "Lotus Tower", "Galle Face Green"], image: "/package images/img1.png", details: "Colombo layers a thousand years of trade into a few square kilometres. You will see the carved stone lions of the Independence Memorial, the candy-striped brickwork of the Red Mosque buried in Pettah's market lanes, and the Lotus Tower rising 350 metres over it all." },
        { time: "6:00 PM", title: "Sunset at Galle Face", description: "Evening stroll along the oceanfront", location: "Galle Face Green", type: "activity" as const, image: "/package images/aa (2).jpg", details: "A half-kilometre ribbon of lawn between the city and the sea, Galle Face fills every evening with kite sellers, families and carts frying isso wade. Stay until the sun drops into the water and the skyline lights up behind you." },
        { time: "7:30 PM", title: "Welcome Feast", description: "Authentic Sri Lankan cuisine introduction", location: "Rooftop Restaurant", type: "meal" as const, image: "/package images/images.jpg", details: "Dinner on a rooftop with the whole city spread out below: lacy hoppers with a runny egg centre, kottu roti clattering off the griddle, and curries mellowed with coconut milk, curry leaf and cinnamon." }
      ]
    },
    {
      day: 2,
      title: "Journey to Ancient Anuradhapura",
      location: "Ancient Capital",
      theme: "Buddhist Heritage",
      distance: "205km",
      travelTime: "4 hours",
      activities: [
        { time: "7:00 AM", title: "Early Departure", description: "Comfortable journey to ancient kingdom", location: "Highway Route", type: "transport" as const, image: "/package images/images.jpg", details: "An early start beats the Colombo traffic. The road north opens into the dry-zone interior — flooded paddy fields, ancient irrigation tanks glinting between the trees, and villages where the day's rice is spread out to dry by the roadside." },
        { time: "12:00 PM", title: "Anuradhapura Sacred City", description: "Explore 2,500-year-old Buddhist sites", location: "Anuradhapura Archaeological Park", type: "sightseeing" as const, highlights: ["Sri Maha Bodhi Tree", "Ruwanwelisaya Stupa", "Abhayagiri Monastery"], image: "/package images/mm.jpg", details: "Anuradhapura was the island's capital for over a thousand years and is still a living pilgrimage site. At its heart stands the Sri Maha Bodhi, grown from a cutting of the tree the Buddha sat under and tended continuously since 288 BC — the oldest documented tree on earth — surrounded by white dagobas that were among the tallest structures in the ancient world." },
        { time: "4:00 PM", title: "Heritage Hotel Check-in", description: "Traditional accommodation near ancient sites", location: "Anuradhapura Heritage Resort", type: "activity" as const, image: "/package images/hhhh.jpg", details: "Your hotel sits close to the archaeological park, built low among the trees in a style that borrows from the old monastery architecture. Monkeys in the garden and peacocks calling at dusk come as standard." },
        { time: "6:00 PM", title: "Sunset Meditation", description: "Peaceful evening at sacred sites", location: "Temple Grounds", type: "activity" as const, image: "/package images/gh.jpg", details: "As the heat goes out of the day, pilgrims dressed in white arrive with lotus buds and oil lamps, and the chanting starts up around the stupas. Sitting quietly on the warm stone in that light is the closest thing this trip offers to time travel." }
      ]
    },
    {
      day: 3,
      title: "Anuradhapura to Sigiriya",
      location: "Rock Fortress",
      theme: "Ancient Wonder",
      distance: "60km",
      travelTime: "1.5 hours",
      activities: [
        { time: "8:00 AM", title: "Temple Complex Tour", description: "Final exploration of ancient monasteries", location: "Jetavanaramaya", type: "sightseeing" as const, highlights: ["Ancient Stupas", "Monastery Ruins", "Archaeological Museum"], image: "/package images/te.jpg", details: "Jetavanaramaya was raised in the 3rd century from an estimated 93 million bricks, and for centuries only the pyramids at Giza stood taller. The surrounding ruins — refectories, bathing pools, carved moonstones and guardstones — show how a monastery of five thousand monks actually ran." },
        { time: "11:00 AM", title: "Transfer to Sigiriya", description: "Scenic drive through countryside", location: "Cultural Triangle Route", type: "transport" as const, image: "/package images/si.jpg", details: "A short, easy run southeast through classic dry-zone country: tanks fringed with lotus, egrets stalking the shallows, and the occasional wild elephant warning sign that is entirely serious." },
        { time: "1:00 PM", title: "Sigiriya Village Experience", description: "Traditional lunch and cultural immersion", location: "Local Village", type: "activity" as const, highlights: ["Traditional Cooking", "Village Walk", "Local Crafts"], image: "/package images/gs.jpg", details: "A working village opens its doors for the afternoon: a bullock cart along the bund of the tank, a catamaran across the water, and a mud-walled kitchen where lunch is ground on a stone and cooked over an open hearth in clay pots." },
        { time: "3:00 PM", title: "Rock Resort Check-in", description: "Accommodation with Sigiriya views", location: "Heritage Hotel Sigiriya", type: "activity" as const, image: "/package images/images (25).jpg", details: "The terrace looks straight out at the fortress you will climb at dawn tomorrow. Afternoons here are for the pool, a cold drink, and watching the rock change colour as the light moves across it." },
        { time: "5:00 PM", title: "Sunset from Pidurangala", description: "Alternative viewpoint for Sigiriya photography", location: "Pidurangala Rock", type: "activity" as const, image: "/package images/su.jpg", details: "Pidurangala is the rock next door, and the reason to climb it is simple: it is the only place you can photograph Sigiriya itself, rising whole out of the jungle. The last stretch is a scramble over boulders past a reclining Buddha, onto a wide flat summit made for watching the sun go down." }
      ]
    },
    {
      day: 4,
      title: "Sigiriya Rock Fortress",
      location: "Ancient Rock Palace",
      theme: "Archaeological Marvel",
      activities: [
        { time: "5:30 AM", title: "Early Start for Sigiriya", description: "Light breakfast before the legendary climb", location: "Hotel Restaurant", type: "meal" as const, image: "/package images/aaaaaa.jpg", details: "A deliberately light breakfast — tea, fruit and toast — because you are climbing 1,200 steps within the hour. Going up at first light means cool air, soft photographic light and the site largely to yourselves." },
        { time: "6:00 AM", title: "Sigiriya Rock Climb", description: "Ascend the 5th-century rock fortress at sunrise", location: "Sigiriya Rock", type: "activity" as const, highlights: ["Lion's Paws", "Frescoes", "Mirror Wall", "Summit Palace", "360° Views"], image: "/package images/sd.jpg", details: "King Kasyapa built his capital on top of a 200-metre column of rock in the 5th century, and the ascent still passes his frescoes of bare-shouldered court women, the mirror-polished wall scrawled with 1,000-year-old graffiti, and the giant lion's paws that guard the final staircase. The summit is a whole palace in outline — throne, bathing pool and terraces — with jungle running flat to the horizon on every side." },
        { time: "9:30 AM", title: "Royal Gardens Exploration", description: "Discover ancient landscape architecture", location: "Sigiriya Water Gardens", type: "sightseeing" as const, highlights: ["Water Features", "Boulder Gardens", "Terraced Gardens"], image: "/package images/sr.jpg", details: "The gardens at the foot of the rock are among the oldest surviving landscaped gardens in the world, laid out on a strict symmetrical plan in three distinct zones. The fountains, fed by underground channels cut fifteen centuries ago, still spout after heavy rain." },
        { time: "11:30 AM", title: "Recovery Brunch", description: "Refreshments with fresh tropical fruits", location: "Garden Cafe", type: "meal" as const, image: "/package images/cv.jpg", details: "A shaded table, a tall glass of king coconut water and a plate of cut mango, papaya and rambutan — exactly what the legs need after 1,200 steps." },
        { time: "2:00 PM", title: "Dambulla Cave Temple", description: "Golden Temple and sacred cave complex", location: "Dambulla", type: "sightseeing" as const, highlights: ["Cave Paintings", "Buddha Statues", "Mountain Views"], image: "/package images/ss.jpg", details: "Carved into a towering granite outcrop, Dambulla shelters five cave sanctuaries holding more than 150 Buddha statues beneath ceilings painted continuously for two thousand years. The short climb to the entrance is rewarded with a sweeping view back across the plains to Sigiriya." },
        { time: "5:00 PM", title: "Ayurvedic Spa Experience", description: "Traditional healing and relaxation", location: "Hotel Spa", type: "activity" as const, image: "/package images/yu.webp", details: "Ayurveda has been practised on this island for well over two thousand years. Your treatment begins with warm herbal oils pressed into the shoulders and legs, followed by a steam bath scented with lemongrass — a well-judged end to a day spent on staircases." }
      ]
    },
    {
      day: 5,
      title: "Cultural Triangle to Kandy",
      location: "Hill Capital Journey",
      theme: "Spices & Sacred Sites",
      distance: "95km",
      travelTime: "2.5 hours",
      activities: [
        { time: "8:00 AM", title: "Breakfast & Departure", description: "Final breakfast with rock views", location: "Hotel Restaurant", type: "meal" as const, image: "/package images/images (3).jpg", details: "One last breakfast on the terrace with Sigiriya filling the view, before the road turns south and the flat dry zone begins to give way to hills." },
        { time: "9:30 AM", title: "Spice Garden Discovery", description: "Learn about Ceylon spices and Ayurvedic plants", location: "Matale Spice Garden", type: "sightseeing" as const, highlights: ["Cinnamon", "Cardamom", "Vanilla", "Traditional Medicine"], image: "/package images/images (9).jpg", details: "Matale's spice gardens are the reason European fleets came looking for this island in the first place. A grower walks you between the plants — peeling a strip of true cinnamon bark, crushing a cardamom pod, pointing out vanilla vines twisting up the shade trees — and explains the Ayurvedic use of each." },
        { time: "11:30 AM", title: "Journey to Kandy", description: "Scenic drive through hill country", location: "Hill Country Route", type: "transport" as const, image: "/package images/a.jpg", details: "The road climbs in earnest here, winding through terraced smallholdings and stands of areca palm. The air cools noticeably as you approach Kandy, which sits in a bowl of hills at 500 metres." },
        { time: "1:30 PM", title: "Kandy Arrival & Lunch", description: "Check-in and traditional hill country cuisine", location: "Boutique Kandy Hotel", type: "meal" as const, image: "/package images/images.jpg", details: "Check in above the lake, then lunch on hill-country cooking — gently spiced curries, fresh green jackfruit, and mallung of finely chopped greens with scraped coconut." },
        { time: "3:30 PM", title: "Kandy Lake Circuit", description: "Peaceful walk around the sacred lake", location: "Kandy Lake", type: "activity" as const, image: "/package images/images (11).jpg", details: "The last king of Kandy had this lake dug in 1807, and the low white parapet around it is still known as the Cloud Wall. It is a flat, shaded circuit of about three kilometres, with monitor lizards basking on the bank and pelicans working the shallows." },
        { time: "5:00 PM", title: "Temple of the Sacred Tooth", description: "Visit the most sacred Buddhist site", location: "Temple of the Sacred Tooth Relic", type: "sightseeing" as const, highlights: ["Sacred Relic", "Evening Ceremony", "Architecture"], image: "/package images/a.jpg", details: "The Sri Dalada Maligawa houses a tooth of the Buddha, the most venerated object in the country and once the emblem of the right to rule. You arrive for the evening thevava, when drummers and horn players sound the ceremony and the inner chamber opens to a slow queue of pilgrims carrying lotus flowers." },
        { time: "7:00 PM", title: "Kandyan Cultural Show", description: "Traditional dancing and fire performances", location: "Cultural Center", type: "activity" as const, image: "/package images/images (12).jpg", details: "An hour of Kandyan dance in full silver headdress and beaded chest plates, driven by the double-headed geta bera drum. The finale moves outdoors for fire-eating and a walk across a bed of glowing coals." }
      ]
    },
    {
      day: 6,
      title: "Kandy Royal Botanical Gardens",
      location: "Peradeniya Gardens",
      theme: "Natural Wonder",
      activities: [
        { time: "8:00 AM", title: "Garden Breakfast", description: "Continental breakfast with garden views", location: "Hotel Terrace", type: "meal" as const, image: "/package images/images (3).jpg", details: "A relaxed start with the mist still lifting off the lake — eggs to order, tropical fruit, and a pot of high-grown Ceylon tea picked a few valleys from where you are sitting." },
        { time: "9:00 AM", title: "Royal Botanical Gardens", description: "Explore one of Asia's finest botanical collections", location: "Peradeniya", type: "sightseeing" as const, highlights: ["Orchid House", "Giant Bamboo", "Medicinal Plants", "Avenue of Royal Palms"], image: "/package images/hh.jpg", details: "Sixty hectares in a loop of the Mahaweli river, laid out by the British in 1821 on the site of a royal pleasure garden. The set pieces are the orchid house, the avenue of cabbage palms, a Javan fig whose canopy alone covers 2,500 square metres, and a grove of giant bamboo that grows a foot a day." },
        { time: "12:00 PM", title: "Garden Picnic Lunch", description: "Outdoor dining surrounded by nature", location: "Botanical Gardens", type: "meal" as const, image: "/package images/lk.jpg", details: "Lunch is spread out on the lawns under the big trees, with fruit bats hanging in noisy colonies overhead and troops of macaques keeping a close eye on proceedings." },
        { time: "2:30 PM", title: "Tea Factory Experience", description: "Learn about world-famous Ceylon tea", location: "Local Tea Factory", type: "sightseeing" as const, highlights: ["Tea Processing", "Tasting Session", "Factory Tour"], image: "/package images/images (15).jpg", details: "You follow the leaf through the whole process — withering troughs, rolling machines, oxidation beds and the wood-fired driers that fill the building with a warm malty smell. The tasting sets the grades side by side, from delicate high-grown orange pekoe to the strong broken leaf that makes proper morning tea." },
        { time: "4:30 PM", title: "Kandy Market & Shopping", description: "Browse local crafts and precious gems", location: "Kandy Central Market", type: "activity" as const, image: "/package images/images (24).jpg", details: "The covered municipal market is stacked with spices, dried fish and pyramids of unfamiliar fruit, while the surrounding streets hold batik workshops, brass, and the gem dealers Sri Lanka is known for — sapphires above all." },
        { time: "6:30 PM", title: "Sunset Viewpoint", description: "Panoramic views over Kandy valley", location: "Arthur's Seat", type: "activity" as const, image: "/package images/ks.jpg", details: "A short drive up the ridge gives the classic view of Kandy: the lake, the golden roof of the Temple of the Tooth and the whole town cupped in its ring of hills, best seen as the light goes orange and the evening drums start below." }
      ]
    },
    {
      day: 7,
      title: "Kandy to Nuwara Eliya",
      location: "Little England",
      theme: "Colonial Hill Station",
      distance: "80km",
      travelTime: "2.5 hours",
      activities: [
        { time: "8:00 AM", title: "Hill Country Departure", description: "Journey into the cool mountains", location: "Scenic Mountain Route", type: "transport" as const, image: "/package images/aaaa.jpg", details: "The climb to Nuwara Eliya is one of the great drives in Asia — hairpin bends through tea slopes clipped like green cushions, waterfalls dropping straight onto the road, and cloud rolling through the valleys below you." },
        { time: "10:30 AM", title: "Tea Plantation Walk", description: "Walk among emerald tea fields", location: "Pedro Tea Estate", type: "activity" as const, highlights: ["Tea Plucking", "Plantation Views", "Tea Tasting"], image: "/package images/images (15).jpg", details: "Pedro Estate has been working these slopes since 1885, and you walk the terraces with the pluckers, who take only the top two leaves and a bud into the sacks on their backs. The factory tour ends with a tasting of what those same fields produced." },
        { time: "12:30 PM", title: "Hill Station Arrival", description: "Check-in to colonial-style accommodation", location: "Nuwara Eliya", type: "activity" as const, image: "/package images/ww.jpg", details: "At 1,900 metres the air is genuinely cold, and the hotels here lean into it — log fires, wing-backed chairs, hot water bottles slipped into the beds at turndown. Bring a warm layer; this is the one place on the island you will want it." },
        { time: "2:00 PM", title: "Little England Tour", description: "Explore the colonial architecture and gardens", location: "Nuwara Eliya Town", type: "sightseeing" as const, highlights: ["Victoria Park", "Golf Course", "Post Office", "Colonial Buildings"], image: "/package images/le.jpg", details: "The British built Nuwara Eliya to feel like home and it still does: mock-Tudor bungalows, hedges and rose beds, an 18-hole golf course from 1889, and a red-brick post office with a clock tower that would not look out of place in Surrey." },
        { time: "4:00 PM", title: "Lake Gregory Activities", description: "Boating and lakeside relaxation", location: "Lake Gregory", type: "activity" as const, image: "/package images/lg.jpg", details: "The lake was dammed in the 1870s as a colonial recreation ground and is still used that way — swan pedalos and speedboats on the water, ponies along the shore, and food carts selling hot corn against the chill." },
        { time: "6:00 PM", title: "Strawberry Farm Visit", description: "Fresh mountain agriculture experience", location: "Local Strawberry Farm", type: "activity" as const, image: "/package images/st.jpg", details: "The cool highland climate lets Sri Lanka grow crops that fail everywhere else on the island — strawberries, leeks, carrots and cabbages. Pick your own and have them served with cream, or take a fresh milkshake for the road." }
      ]
    },
    {
      day: 8,
      title: "Nuwara Eliya to Ella",
      location: "Scenic Train Journey",
      theme: "Railway Adventure",
      distance: "65km",
      travelTime: "3 hours by train",
      activities: [
        { time: "7:00 AM", title: "Early Breakfast", description: "Hearty meal before the famous train ride", location: "Hotel Restaurant", type: "meal" as const, image: "/package images/images (3).jpg", details: "A full breakfast in front of the fire before the train — the carriages have no catering worth the name, though vendors selling wade and hot tea will work the aisle at every stop." },
        { time: "8:30 AM", title: "World's Most Beautiful Train Ride", description: "Journey through tea country on historic railway", location: "Nanu Oya to Ella", type: "transport" as const, highlights: ["Mountain Views", "Tea Plantations", "Waterfalls", "Tunnels"], image: "/package images/ww.jpg", details: "Built by the British to bring tea down from the hills, this blue train grinds along at 25km/h through tea terraces, cloud forest and a string of hand-cut tunnels, with the doors left open the whole way. It is routinely called the most beautiful rail journey in the world, and three hours of hanging out of the doorway will tell you why." },
        { time: "12:00 PM", title: "Ella Town Arrival", description: "Check-in to mountain retreat", location: "Ella Hill Station", type: "activity" as const, image: "/package images/et.jpg", details: "Ella is one long main street of cafes and guesthouses wedged into a gap in the mountains, warmer than Nuwara Eliya and considerably more relaxed. Your room looks straight down the valley through the Ella Gap." },
        { time: "2:00 PM", title: "Nine Arches Bridge", description: "Visit the iconic railway viaduct", location: "Demodara", type: "sightseeing" as const, highlights: ["Architecture", "Train Spotting", "Photography"], image: "/package images/aaaa.jpg", details: "Built in 1921 from solid stone and cement without a gram of steel — wartime shortages meant there was none to be had — this 91-metre viaduct curves across a jungle gorge on nine great arches. Check the timetable and stand back as the train comes through." },
        { time: "4:00 PM", title: "Little Adam's Peak Hike", description: "Easy trek with stunning valley views", location: "Little Adam's Peak", type: "activity" as const, image: "/package images/images (27).jpg", details: "A gentle 45-minute walk through tea fields and up a stepped path, and by some distance the best view-to-effort ratio in the hill country. From the top you look across at Ella Rock and straight down the gap towards the southern plains." },
        { time: "6:30 PM", title: "Sunset Viewing", description: "Golden hour over Ella Gap", location: "Ella Rock Viewpoint", type: "activity" as const, image: "/package images/su.jpg", details: "On a clear evening the Ella Gap opens all the way to the coast, and the light going down through the valley turns the whole thing gold before the mist closes it in again." }
      ]
    },
    {
      day: 9,
      title: "Ella Rock & Ravana Falls",
      location: "Ella Adventures",
      theme: "Mountain Hiking",
      activities: [
        { time: "5:30 AM", title: "Sunrise Hike Preparation", description: "Light breakfast and gear check", location: "Hotel", type: "meal" as const, image: "/package images/sh.jpg", details: "Tea, toast and fruit in the dark, plus a check of shoes and water bottles. Ella Rock is a real hike rather than a stroll, and starting in the cool makes all the difference." },
        { time: "6:00 AM", title: "Ella Rock Summit Hike", description: "Challenging trek to panoramic viewpoint", location: "Ella Rock", type: "activity" as const, highlights: ["Summit Views", "Photography", "Mountain Flora"], image: "/package images/er.jpg", details: "The route starts along the railway sleepers, cuts through a tea estate and then climbs steeply through eucalyptus forest for about two hours. The summit is an open grassy shoulder with a sheer drop on one side and the entire Ella Gap laid out below — often above a sea of cloud at that hour." },
        { time: "10:00 AM", title: "Rest & Recovery", description: "Breakfast and relaxation after the hike", location: "Mountain Cafe", type: "meal" as const, image: "/package images/images (3).jpg", details: "A proper second breakfast once you are back down — curd and treacle, fresh fruit, eggs and as much coffee as the morning warrants." },
        { time: "12:00 PM", title: "Ravana Falls Excursion", description: "Visit the legendary waterfall", location: "Ravana Falls", type: "sightseeing" as const, highlights: ["Waterfall", "Swimming", "Legend Stories"], image: "/package images/gg.jpg", details: "Twenty-five metres of water dropping in a broad fan right beside the road, with pools at the base cold enough to be a genuine shock. Local legend holds that King Ravana hid the abducted Princess Sita in the caves behind the falls — a story straight out of the Ramayana." },
        { time: "2:30 PM", title: "Local Village Tour", description: "Experience authentic hill country life", location: "Ella Village", type: "activity" as const, image: "/package images/images (3).jpg", details: "Away from the main street, Ella is still a farming village of vegetable plots, cinnamon peelers and small tea holdings. You will walk the back lanes with a local guide and be invited in for tea more than once." },
        { time: "5:00 PM", title: "Zip Lining Adventure", description: "Thrilling ride through the valley", location: "Flying Ravana", type: "activity" as const, image: "/package images/zz.jpg", details: "Half a kilometre of steel cable strung across the valley, ridden in tandem at up to 80km/h with nothing but tea fields a long way beneath your feet. It lasts under a minute and is the fastest way anyone has found to see Ella." }
      ]
    },
    {
      day: 10,
      title: "Ella to Yala National Park",
      location: "Wildlife Safari Base",
      theme: "Nature Transition",
      distance: "130km",
      travelTime: "3 hours",
      activities: [
        { time: "8:00 AM", title: "Mountain Farewell", description: "Departure from cool highlands", location: "Hill Country Route", type: "transport" as const, image: "/package images/zc.jpg", details: "In a single morning you drop from cold mountain air to the hot scrub country of the southeast. The road down through the Ella Gap loses more than a kilometre of altitude, and you will be reaching for the air conditioning long before the bottom." },
        { time: "11:30 AM", title: "Buduruwagala Rock Temple", description: "Ancient rock carvings en route", location: "Buduruwagala", type: "sightseeing" as const, highlights: ["Rock Sculptures", "Buddhist Art", "Ancient History"], image: "/package images/bu.jpg", details: "Seven colossal figures cut in relief into a sheer rock face in the 10th century, the central standing Buddha rising 15 metres. Traces of the original stucco and orange pigment still cling to the stone, and the site is quiet enough that you may well have it to yourselves." },
        { time: "1:00 PM", title: "Wildlife Lodge Arrival", description: "Check-in to safari accommodation", location: "Yala Safari Lodge", type: "activity" as const, image: "/package images/www.jpg", details: "Your lodge sits on the edge of the park, where elephants sometimes cross the boundary at dusk and peacocks roost noisily in the trees above the rooms." },
        { time: "3:30 PM", title: "First Safari Experience", description: "Introduction to Yala's wildlife", location: "Yala National Park Block 1", type: "activity" as const, highlights: ["Leopards", "Elephants", "Birds", "Landscape"], image: "/package images/tt.jpg", details: "An afternoon drive to get your eye in: Block 1 is a mosaic of thorn scrub, rock outcrops and lagoons, and even a first outing usually turns up elephant, spotted deer, crocodiles and enough birdlife to keep the guide talking. Leopards are the headline act, and this block holds one of the densest populations on earth." },
        { time: "7:00 PM", title: "Safari Lodge Dinner", description: "Wildlife-themed dining experience", location: "Lodge Restaurant", type: "meal" as const, image: "/package images/images.jpg", details: "Dinner is served outdoors under the trees, with the night sounds of the park coming in from the dark — and a very early start to keep in mind." }
      ]
    },
    {
      day: 11,
      title: "Full Day Yala Safari",
      location: "Yala National Park",
      theme: "Wildlife Photography",
      activities: [
        { time: "5:00 AM", title: "Dawn Safari Departure", description: "Early morning when animals are most active", location: "Yala Block 1", type: "activity" as const, highlights: ["Leopard Tracking", "Elephant Herds", "Sloth Bears", "Crocodiles"], image: "/package images/bb.jpg", details: "You are through the gate as it opens, which is when leopards are still moving on the tracks and the alarm calls of deer and langur give them away. Sloth bears come out for the ripe palu fruit, elephant herds cross in family groups, and crocodiles lie motionless at the edge of every waterhole." },
        { time: "9:00 AM", title: "Safari Breakfast", description: "Bush breakfast in the wilderness", location: "Park Viewpoint", type: "meal" as const, image: "/package images/images (3).jpg", details: "The jeep pulls up at a permitted viewpoint over the lagoon and breakfast comes out of the cool box — sandwiches, boiled eggs, fruit and hot tea, eaten standing up with binoculars still round your neck." },
        { time: "10:30 AM", title: "Wildlife Photography Workshop", description: "Professional tips for wildlife photography", location: "Various Park Locations", type: "activity" as const, image: "/package images/ws.jpg", details: "Your tracker walks you through what actually works from a moving jeep: shutter speeds for animals in low light, where to sit for a clean background, how to read alarm calls, and why patience at one waterhole beats chasing radio reports across the park." },
        { time: "1:00 PM", title: "Lodge Rest Period", description: "Midday break during hot hours", location: "Safari Lodge", type: "activity" as const, image: "/package images/dd.jpg", details: "Nothing moves in Yala at midday, animals included. Lunch, the pool and a couple of hours horizontal are the sensible response before heading back out." },
        { time: "3:30 PM", title: "Evening Game Drive", description: "Golden hour safari experience", location: "Yala Block 2", type: "activity" as const, highlights: ["Sunset Views", "Nocturnal Prep", "Bird Watching"], image: "/package images/wn.jpg", details: "Block 2 is quieter than Block 1 and runs down to the coast, where the scrub turns copper in the late light and animals come down to drink. This is the best hour of the day for photography, and the drive out often turns up the nocturnal species stirring." },
        { time: "7:30 PM", title: "Safari Stories Dinner", description: "Share the day's wildlife encounters", location: "Lodge", type: "meal" as const, image: "/package images/images.jpg", details: "Dinner under the stars, comparing photographs and counting up what the day produced — and hearing from the trackers about the sightings that got away." }
      ]
    },
    {
      day: 12,
      title: "Yala to Galle",
      location: "Southern Coast",
      theme: "Coastal Transition",
      distance: "150km",
      travelTime: "3.5 hours",
      activities: [
        { time: "7:00 AM", title: "Final Safari & Departure", description: "Last wildlife viewing before coastal journey", location: "Yala to Coast Route", type: "transport" as const, image: "/package images/vb.jpg", details: "A short last drive through the park on the way to the gate — often the most productive one, since the tracks are empty and the animals have not yet gone to shade. Then the road turns west along the coast." },
        { time: "11:00 AM", title: "Blow Hole Natural Wonder", description: "Spectacular coastal rock formation", location: "Hummanaya Blow Hole", type: "sightseeing" as const, highlights: ["Natural Phenomenon", "Ocean Views", "Photography"], image: "/package images/hu.jpg", details: "Hummanaya is the second largest blowhole in the world. Swell forces into a narrow sea cave and fires a column of spray up to 25 metres through the rock above, roughly every fifteen minutes — higher and more violent when the sea is running." },
        { time: "1:00 PM", title: "Coastal Lunch", description: "Fresh seafood by the ocean", location: "Beachside Restaurant", type: "meal" as const, image: "/package images/cl.jpg", details: "Lunch is whatever came in on the morning boats — seer fish grilled over coals, prawns in a red devilled sauce, or crab curry eaten properly with your hands — at a table close enough to the water to hear it." },
        { time: "3:00 PM", title: "Galle Fort Arrival", description: "Check-in to historic fort accommodation", location: "Galle Fort", type: "activity" as const, image: "/package images/nn.jpg", details: "You stay inside the fort walls in a restored Dutch merchant's house: thick lime-washed walls, a shaded inner courtyard, polished satinwood floors and ceiling fans turning slowly over the beds." },
        { time: "4:30 PM", title: "Fort Orientation Walk", description: "First exploration of Dutch colonial heritage", location: "Galle Fort Ramparts", type: "sightseeing" as const, highlights: ["Dutch Architecture", "Lighthouse", "Ocean Views"], image: "/package images/gw.jpg", details: "A first loop of the ramparts to get your bearings — bastion by bastion, past the 1848 lighthouse and the old Dutch gate with the VOC coat of arms still cut into the stone above it." },
        { time: "6:30 PM", title: "Sunset at Fort Walls", description: "Golden hour on historic ramparts", location: "Fort Ramparts", type: "activity" as const, image: "/package images/aaa.jpg", details: "The ramparts are where the whole town gathers at dusk — cricket games on the grass, couples along the wall, and local boys throwing themselves off the bastion into the sea as the sun goes down behind the lighthouse." }
      ]
    },
    {
      day: 13,
      title: "Galle Fort Heritage",
      location: "Dutch Colonial City",
      theme: "Historical Architecture",
      activities: [
        { time: "8:00 AM", title: "Fort Heritage Breakfast", description: "Colonial-style breakfast in historic setting", location: "Fort Hotel", type: "meal" as const, image: "/package images/images.jpg", details: "Breakfast in the courtyard under a frangipani tree — fresh papaya with lime, curd and kithul treacle, egg hoppers made to order, and a pot of tea before the streets warm up." },
        { time: "9:00 AM", title: "Galle Fort Walking Tour", description: "Comprehensive exploration of UNESCO site", location: "Galle Fort", type: "sightseeing" as const, highlights: ["Dutch Reformed Church", "Maritime Museum", "Clock Tower", "Dutch Hospital"], image: "/package images/nn.jpg", details: "Built by the Portuguese and massively rebuilt by the Dutch in 1663, Galle Fort is the best-preserved European sea fortress in Asia and still a living neighbourhood. The morning covers the Dutch Reformed Church with its floor of old tombstones, the maritime museum in a 17th-century warehouse, the 1883 clock tower and the arcaded Dutch Hospital now full of cafes." },
        { time: "12:00 PM", title: "Artisan Workshop Visits", description: "Meet local craftspeople and artists", location: "Fort Streets", type: "activity" as const, highlights: ["Gem Cutting", "Lace Making", "Wood Carving"], image: "/package images/gj.jpg", details: "Behind the shopfronts the fort still works as a craft town. You will watch sapphires cut and polished on a spinning lap, see beeru lace worked on a pillow by hand — a technique the Portuguese brought four centuries ago — and meet carvers working in local satinwood and ebony." },
        { time: "2:00 PM", title: "Fort Shopping & Galleries", description: "Browse boutiques and art galleries", location: "Pedlar Street", type: "activity" as const, image: "/package images/ff.jpg", details: "Pedlar Street and the lanes off it hold the best shopping of the trip: hand-loomed cotton and batik, Ceylon tea and cinnamon packed for travel, antique maps, and small galleries showing contemporary Sri Lankan painting." },
        { time: "4:00 PM", title: "Unawatuna Beach Relaxation", description: "Golden sandy beach just outside the fort", location: "Unawatuna", type: "activity" as const, highlights: ["Swimming", "Beach Walk", "Coconut Water"], image: "/package images/aa.jpg", details: "Unawatuna is a sheltered crescent of pale sand ten minutes from the fort, protected by a reef that keeps the water calm enough for easy swimming. Palms lean out over the beach and the shallows stay warm until sunset." },
        { time: "7:00 PM", title: "Historic Fort Dining", description: "Fine dining in colonial ambiance", location: "Fort Restaurant", type: "meal" as const, image: "/package images/images (3).jpg", details: "Dinner in a 300-year-old Dutch townhouse, where the kitchen sets southern seafood alongside colonial-era recipes: lamprais baked in banana leaf, black pork curry, and a wobbling wedge of wattalappam to finish." }
      ]
    },
    {
      day: 14,
      title: "Whale Watching & Mirissa",
      location: "Mirissa Bay",
      theme: "Marine Life",
      distance: "45km",
      travelTime: "1 hour",
      activities: [
        { time: "5:30 AM", title: "Early Start for Whales", description: "Transfer to Mirissa harbor", location: "Mirissa", type: "transport" as const, image: "/package images/wf.jpg", details: "Boats leave at first light because the sea is calmest then and the whales are close in. It is a short transfer along the dark coast road, with the fishing fleet already unloading when you reach the harbour." },
        { time: "6:30 AM", title: "Whale Watching Expedition", description: "Search for blue whales and dolphins", location: "Indian Ocean", type: "activity" as const, highlights: ["Blue Whales", "Sperm Whales", "Dolphins", "Sea Turtles"], image: "/package images/we.jpg", details: "The continental shelf drops away steeply just off Mirissa, which brings blue whales — the largest animal that has ever lived, up to 30 metres long — within a couple of hours of the harbour. Sperm whales, spinner dolphin pods several hundred strong and sea turtles are all regular sightings on the same trip." },
        { time: "11:00 AM", title: "Fisherman's Breakfast", description: "Fresh catch breakfast by the harbor", location: "Mirissa Harbor", type: "meal" as const, image: "/package images/fb.jpg", details: "Breakfast at the harbour once you are back on solid ground: fish curry with red rice, sambol and hot tea, eaten while the day's catch is auctioned off a few metres away." },
        { time: "1:00 PM", title: "Coconut Tree Hill", description: "Iconic palm tree viewpoint", location: "Mirissa Hill", type: "sightseeing" as const, highlights: ["Photography", "Ocean Views", "Palm Trees"], image: "/package images/b.jpg", details: "A narrow headland crowded with leaning coconut palms, dropping straight into the surf on three sides. It is the most photographed spot on the south coast, and the walk out to the point takes about ten minutes from the road." },
        { time: "3:00 PM", title: "Beach Resort Check-in", description: "Luxury beachfront accommodation", location: "Mirissa Beach Resort", type: "activity" as const, image: "/package images/bs.jpg", details: "Your room opens more or less onto the sand, with the bay curving away in both directions and the sound of the surf running through the whole stay." },
        { time: "4:00 PM", title: "Beach Activities", description: "Swimming, surfing, and beach games", location: "Mirissa Beach", type: "activity" as const, image: "/package images/ee.jpg", details: "Mirissa has a gentle beach break at one end that is ideal for a first surf lesson, and calm swimming water at the other. Boards, body-boards and instructors are all available on the sand." },
        { time: "7:00 PM", title: "Seafood Beach Dinner", description: "Fresh ocean cuisine with waves soundtrack", location: "Beachfront Restaurant", type: "meal" as const, image: "/package images/images (3).jpg", details: "Tables go out onto the sand at dusk and you choose from the day's catch laid out on ice — tuna, snapper, prawns, cuttlefish and crab — grilled over coals with lime and chilli while the tide comes in." }
      ]
    },
    {
      day: 15,
      title: "Southern Coast Exploration",
      location: "Coastal Villages",
      theme: "Traditional Life",
      activities: [
        { time: "8:00 AM", title: "Tropical Breakfast", description: "Fresh fruits and local specialties", location: "Beach Resort", type: "meal" as const, image: "/package images/images.jpg", details: "Breakfast on the terrace with the sea in front of you — papaya, pineapple, wood-apple juice, string hoppers with coconut sambol, and curd with kithul treacle poured over the top." },
        { time: "9:30 AM", title: "Stilt Fishermen Experience", description: "Learn traditional fishing methods", location: "Weligama", type: "activity" as const, highlights: ["Traditional Fishing", "Photo Opportunities", "Cultural Exchange"], image: "/package images/ri.jpg", details: "Stilt fishing began here during the food shortages of the 1940s: a single pole planted in the reef, a crossbar to perch on, and a line dropped into water too shallow for boats to disturb. The fishermen will hand you the pole and let you try it, which is harder than it looks." },
        { time: "11:30 AM", title: "Snake Island Temple", description: "Small island temple accessible by foot", location: "Snake Island", type: "sightseeing" as const, image: "/package images/srr.jpg", details: "A tiny rocky island a short wade off Mirissa beach when the tide is out, topped by a small shrine and a lighthouse. The scramble up takes ten minutes and the view back along the whole curve of the bay is the reward." },
        { time: "1:00 PM", title: "Local Village Lunch", description: "Home-cooked meal with local family", location: "Fishing Village", type: "meal" as const, image: "/package images/images (25).jpg", details: "Lunch in a family home in a working fishing village — rice and curry cooked in clay pots over firewood, with the coconut scraped fresh and the sambol ground on a stone while you watch." },
        { time: "3:00 PM", title: "Turtle Hatchery Visit", description: "Conservation efforts for sea turtles", location: "Kosgoda", type: "activity" as const, highlights: ["Baby Turtles", "Conservation", "Release Program"], image: "/package images/kk.jpg", details: "Five of the world's seven sea turtle species nest on this coast, all of them endangered. The Kosgoda hatcheries buy eggs from local collectors, protect them until they hatch and release the young at dusk — and if the timing works, you can help carry them down to the water." },
        { time: "5:00 PM", title: "Madu River Safari", description: "Mangrove ecosystem boat tour", location: "Madu River", type: "activity" as const, highlights: ["Mangroves", "Bird Watching", "Fish Spa"], image: "/package images/mr.jpg", details: "A flat-bottomed boat takes you through a wetland of 64 islands and dense mangrove tunnels so narrow the branches close overhead. Kingfishers, monitor lizards and water snakes are all easily seen, and one island offers a fish spa where the fish nibble your feet." }
      ]
    },
    {
      day: 16,
      title: "Mirissa to Bentota",
      location: "Golden Coast",
      theme: "Beach Paradise",
      distance: "70km",
      travelTime: "2 hours",
      activities: [
        { time: "9:00 AM", title: "Coastal Drive", description: "Scenic journey along the southern coast", location: "Southern Coastal Highway", type: "transport" as const, image: "/package images/cr.webp", details: "The old coast road runs right along the shoreline for most of the way, past fishing villages, tsunami memorials, roadside shrines and long stretches where the palms come down almost to the sand." },
        { time: "11:30 AM", title: "Beach Resort Arrival", description: "Check-in to luxury beachfront resort", location: "Bentota Beach Resort", type: "activity" as const, image: "/package images/bs.jpg", details: "Bentota sits on a spit of land between the river and the sea, so the resorts here have surf on one side and calm water on the other. Yours has direct access to a broad golden beach that runs for kilometres." },
        { time: "1:00 PM", title: "Welcome Lunch", description: "Beachside dining with ocean views", location: "Resort Restaurant", type: "meal" as const, image: "/package images/images.jpg", details: "A relaxed lunch on the terrace — grilled fish, a cold beer or a fresh lime soda, and no particular obligation to move afterwards." },
        { time: "3:00 PM", title: "Water Sports Introduction", description: "Jet skiing, windsurfing, and parasailing", location: "Bentota Beach", type: "activity" as const, highlights: ["Water Sports", "Beach Activities", "Ocean Fun"], image: "/package images/ee.jpg", details: "Bentota is the water sports capital of the island, and the sheltered river mouth means conditions are reliable. Jet skis, banana boats, windsurfing, water-skiing and parasailing all operate from the same stretch of beach, with instructors on hand for first-timers." },
        { time: "5:30 PM", title: "Bentota River Cruise", description: "Sunset boat ride through mangroves", location: "Bentota River", type: "activity" as const, image: "/package images/bee.jpg", details: "The river turns inland into a maze of mangrove creeks alive with kingfishers, cormorants and monitor lizards. Going out late means coming back with the sun setting over the water and fruit bats streaming overhead." },
        { time: "7:30 PM", title: "Beachfront Barbecue", description: "Grilled seafood dinner on the sand", location: "Beach", type: "meal" as const, image: "/package images/bbbb.jpg", details: "Tables set directly on the sand with lanterns and a coal grill: prawns, cuttlefish, snapper and lobster cooked to order, with the surf a few metres away in the dark." }
      ]
    },
    {
      day: 17,
      title: "Bentota Water Adventures",
      location: "Water Sports Capital",
      theme: "Ocean Activities",
      activities: [
        { time: "8:00 AM", title: "Energizing Breakfast", description: "Healthy breakfast for active day", location: "Resort Restaurant", type: "meal" as const, image: "/package images/images.jpg", details: "A solid breakfast before a day on the water — fruit, eggs, curd and treacle, and strong tea, with a bottle of water packed for the boat." },
        { time: "9:00 AM", title: "Deep Sea Fishing", description: "Half-day fishing expedition", location: "Indian Ocean", type: "activity" as const, highlights: ["Sport Fishing", "Ocean Views", "Fresh Catch"], image: "/package images/fg.jpg", details: "You head out with a local crew who have fished this water their whole lives, trolling for tuna, barracuda, wahoo and giant trevally beyond the reef. Tackle and instruction are provided, and the coastline seen from a few kilometres out is worth the trip on its own." },
        { time: "1:00 PM", title: "Fresh Catch Lunch", description: "Prepare and enjoy your morning's catch", location: "Beach Grill", type: "meal" as const, image: "/package images/ch.jpg", details: "Whatever you landed goes straight onto the grill — cut into steaks, rubbed with chilli and lime and cooked over coals on the beach. It is about as fresh as fish gets." },
        { time: "3:00 PM", title: "Scuba Diving Experience", description: "Underwater exploration for beginners", location: "Coral Reef", type: "activity" as const, highlights: ["Coral Reefs", "Tropical Fish", "Underwater World"], image: "/package images/sdd.jpg", details: "A guided introductory dive on a shallow reef, starting with a briefing and a practice session before you go in. Expect parrotfish, angelfish, moray eels in the crevices and hard coral in good condition — no certification required." },
        { time: "5:00 PM", title: "Beach Spa Treatment", description: "Relaxing massage with ocean sounds", location: "Beach Spa", type: "activity" as const, image: "/package images/bss.png", details: "An Ayurvedic oil massage in an open-sided pavilion a few metres from the water, with warm coconut and herbal oils worked into shoulders that have spent the day hauling on a fishing rod." },
        { time: "7:00 PM", title: "Sunset Cocktails", description: "Tropical drinks with golden hour views", location: "Beach Bar", type: "activity" as const, image: "/package images/sm.jpg", details: "The bar sets its chairs facing west for the last half hour of light. Try an arrack sour — arrack is distilled from coconut flower sap and is the island's own spirit — or a plain king coconut if you would rather." }
      ]
    },
    {
      day: 18,
      title: "Cultural Immersion Day",
      location: "Local Communities",
      theme: "Authentic Experiences",
      activities: [
        { time: "8:30 AM", title: "Village Breakfast", description: "Traditional breakfast with local family", location: "Village Home", type: "meal" as const, image: "/package images/images (25).jpg", details: "Breakfast in a family home rather than a hotel: kiribath — rice cooked in thick coconut milk and cut into diamonds — with lunu miris, a fierce onion and chilli sambol, and plain tea drunk very sweet." },
        { time: "10:00 AM", title: "Cinnamon Plantation Tour", description: "Learn about spice cultivation and processing", location: "Local Plantation", type: "sightseeing" as const, highlights: ["Cinnamon Harvesting", "Spice Processing", "Traditional Methods"], image: "/package images/sn.jpg", details: "Sri Lanka produces almost all the world's true cinnamon, and the southwest coast is its heartland. You will watch a peeler strip the outer bark, work the inner layer loose with a brass rod and roll the quills by hand — a skill that takes years and is still done exactly as it was three centuries ago." },
        { time: "12:00 PM", title: "Traditional Cooking Class", description: "Learn to prepare authentic Sri Lankan dishes", location: "Village Kitchen", type: "activity" as const, highlights: ["Curry Preparation", "Rice & Curry", "Traditional Techniques"], image: "/package images/ccc.jpg", details: "A hands-on class in a village kitchen: scraping coconut on a hiramanaya, grinding spices on a flat stone, and building four or five curries over a firewood hearth. You will learn why the tempering order matters and what actually separates a Sri Lankan curry from an Indian one." },
        { time: "2:00 PM", title: "Feast Your Creations", description: "Enjoy the meal you prepared", location: "Village Home", type: "meal" as const, image: "/package images/fo.jpg", details: "Everything you cooked comes to the table at once, in the proper way — rice in the middle, curries around the edge, papadam and sambol on top, and everyone eating with their right hand." },
        { time: "4:00 PM", title: "Traditional Craft Workshop", description: "Learn local handicrafts and arts", location: "Artisan Center", type: "activity" as const, highlights: ["Mask Making", "Batik Painting", "Wood Carving"], image: "/package images/vc.jpg", details: "The southwest is the home of Sri Lankan mask carving, cut from light kaduru wood and painted for healing rituals and devil-dancing. You can try your hand at batik too, drawing in hot wax before the cloth goes into the dye." },
        { time: "6:30 PM", title: "Cultural Performance", description: "Traditional dance and music show", location: "Village Center", type: "activity" as const, image: "/package images/images (12).jpg", details: "A low-country performance in the village itself rather than a theatre — masked devil dancers, drummers working the yak bera, and a fire routine to close, with most of the village watching alongside you." }
      ]
    },
    {
      day: 19,
      title: "Hidden Gems Discovery",
      location: "Off-beaten Path",
      theme: "Secret Locations",
      activities: [
        { time: "8:00 AM", title: "Adventure Breakfast", description: "Hearty breakfast for exploration day", location: "Resort", type: "meal" as const, image: "/package images/images.jpg", details: "A full breakfast before a day of small roads and short stops — the least scheduled day of the trip, and the one most likely to turn up something you did not expect." },
        { time: "9:00 AM", title: "Brief Garden Visit", description: "Landscaped garden by famous architect", location: "Brief Garden", type: "sightseeing" as const, highlights: ["Garden Design", "Sculpture", "Peaceful Setting"], image: "/package images/bg.jpg", details: "Bevis Bawa — brother of the architect Geoffrey Bawa — spent fifty years turning a rubber estate into this garden, and it is a wonderfully eccentric place: clipped terraces giving onto wild jungle, erotic sculpture half-hidden in the shrubbery, and a house left more or less as he died in it." },
        { time: "11:00 AM", title: "Moonstone Mines", description: "Visit traditional gem mining operations", location: "Meetiyagoda", type: "sightseeing" as const, highlights: ["Gem Mining", "Moonstone", "Local Industry"], image: "/package images/bm.jpg", details: "Meetiyagoda produces the world's finest blue moonstone, and the mining is still done by hand — narrow shafts propped with timber, gravel hauled up in baskets on a rope, and the wash panned by the side of the pit. You can watch the whole chain from shaft to polished stone." },
        { time: "1:00 PM", title: "Local Gem Museum", description: "Learn about Sri Lankan precious stones", location: "Gem Museum", type: "sightseeing" as const, image: "/package images/gm.jpg", details: "Sri Lanka has been supplying the world with sapphires for two thousand years, and the museum lays out how they form, how they are graded, and how to tell a heat-treated stone from an untreated one before you consider buying." },
        { time: "3:00 PM", title: "Secret Beach Discovery", description: "Hidden cove known only to locals", location: "Secret Beach", type: "activity" as const, highlights: ["Private Beach", "Snorkeling", "Photography"], image: "/package images/b.jpg", details: "A small cove reached down a track most people drive straight past, with rock headlands at either end and clear water over a reef that is good for snorkelling. There is a fair chance you will have it entirely to yourselves." },
        { time: "5:30 PM", title: "Fisherman's Village Tour", description: "Authentic fishing community experience", location: "Fishing Village", type: "activity" as const, image: "/package images/fv.jpg", details: "Late afternoon is when the outriggers come back in and the whole beach turns out to haul the nets. You will see the catch sorted and auctioned on the sand, the boats hauled up on log rollers, and the nets mended for the morning." }
      ]
    },
    {
      day: 20,
      title: "Final Relaxation & Reflection",
      location: "Beach Paradise",
      theme: "Peaceful Farewell",
      activities: [
        { time: "9:00 AM", title: "Lazy Beach Breakfast", description: "Leisurely meal with ocean views", location: "Beachfront", type: "meal" as const, image: "/package images/bbf.jpg", details: "No alarm and nowhere to be. Breakfast runs long on the terrace with the sea breeze coming in, which after three weeks of dawn starts feels like a small luxury in itself." },
        { time: "10:30 AM", title: "Free Beach Time", description: "Personal time for swimming and relaxation", location: "Bentota Beach", type: "activity" as const, highlights: ["Swimming", "Sunbathing", "Beach Walk"], image: "/package images/b.jpg", details: "The whole morning is yours. Bentota's beach runs for kilometres, so you can swim, sleep under a palm, or walk as far up the sand as you feel like going." },
        { time: "1:00 PM", title: "Farewell Lunch", description: "Final taste of Sri Lankan coastal cuisine", location: "Resort Restaurant", type: "meal" as const, image: "/package images/images.jpg", details: "A last long lunch of the dishes you have grown attached to over three weeks — ambul thiyal, devilled prawns, jackfruit curry — with the sea in front of you." },
        { time: "3:00 PM", title: "Spa & Wellness", description: "Rejuvenating treatments before departure", location: "Resort Spa", type: "activity" as const, image: "/package images/bss.png", details: "A full Ayurvedic treatment to close the trip: herbal oil massage, a steam box scented with lemongrass, and shirodhara, where warm oil is poured in a steady stream across the forehead." },
        { time: "5:00 PM", title: "Sunset Photography", description: "Capture final memories of paradise", location: "Beach", type: "activity" as const, image: "/package images/sun.jpg", details: "The west coast gets the better sunsets, and Bentota's is among the best of them — fishing boats in silhouette, the sky going through every shade of orange, and the sun dropping cleanly into the Indian Ocean." },
        { time: "7:00 PM", title: "Celebration Dinner", description: "Toast to an incredible journey", location: "Fine Dining Restaurant", type: "meal" as const, image: "/package images/images (3).jpg", details: "The final dinner of the tour, and a chance to raise a glass with the guide who has driven you from the ancient cities to the hill country to the coast over the past three weeks." }
      ]
    },
    {
      day: 21,
      title: "Departure Day",
      location: "Journey Home",
      theme: "Fond Farewell",
      distance: "100km to Airport",
      travelTime: "2.5 hours",
      activities: [
        { time: "8:00 AM", title: "Final Breakfast", description: "Last meal overlooking the Indian Ocean", location: "Resort Terrace", type: "meal" as const, image: "/package images/images.jpg", details: "One last breakfast on the terrace with the Indian Ocean in front of you — fresh fruit, hoppers and a final pot of Ceylon tea before the bags go in the car." },
        { time: "10:00 AM", title: "Last Minute Shopping", description: "Purchase final souvenirs and gifts", location: "Resort Boutique", type: "activity" as const, image: "/package images/ls.jpg", details: "A last chance for the things that travel well: tea and cinnamon packed for the journey, batik and hand-loomed cotton, carved masks, and gems if you have been saving that decision until now." },
        { time: "11:30 AM", title: "Check-out & Departure", description: "Farewell to Sri Lankan hospitality", location: "Resort", type: "activity" as const, image: "/package images/co.jpg", details: "Check-out, and the traditional Sri Lankan send-off — palms pressed together, a slight bow, and an entirely sincere invitation to come back." },
        { time: "12:00 PM", title: "Scenic Airport Transfer", description: "Final views of beautiful Sri Lanka", location: "Coastal Highway", type: "transport" as const, image: "/package images/sc.jpg", details: "The coastal highway runs north to the airport in about two and a half hours, with the sea on your left for much of it and the last of the paddy fields and coconut estates going past the window." },
        { time: "2:30 PM", title: "Airport Arrival", description: "Check-in for international departure", location: "Bandaranaike International Airport", type: "transport" as const, image: "/package images/images (26).jpg", details: "Your guide sees you through to the terminal and stays until you are checked in — the end of three weeks and something like 2,000 kilometres together." },
        { time: "4:00 PM", title: "Departure Lounge", description: "Final moments in paradise", location: "Airport Lounge", type: "transport" as const, image: "/package images/dl.jpg", details: "Time for a last cup of tea before the gate. The duty-free here is unusually good for tea, cashews and arrack, if you want to take a little more of the island home with you." }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-12 lg:py-0 lg:h-96 bg-gradient-to-r from-orange-300 to-red-400">
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-center">
              <div className="text-white text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
                  Ultimate Sri Lanka
                </h1>
                <p className="text-xl md:text-2xl mb-4">
                  21 Days of Complete Discovery
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
                  <div className="flex items-center"><Calendar className="w-5 h-5 mr-2" /><span>21 Days</span></div>
                  <div className="flex items-center"><Users className="w-5 h-5 mr-2" /><span>As Much As You Like</span></div>
                  <div className="flex items-center"><MapPin className="w-5 h-5 mr-2" /><span>9 Cities</span></div>
                </div>

                <button
                  onClick={scrollToBooking}
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
                    src="/package images/new21.png"
                    alt="21-day Ultimate Sri Lanka route map"
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-poppins bg-gradient-to-r from-[#d4af37] to-[#e53e3e] bg-clip-text text-transparent">
                  Complete 21-Day Adventure
                </h2>
                <DayItinerary days={detailedItinerary} packageColor="accent" />
              </div>

              <div className="lg:col-span-1" ref={bookingFormRef}>
                <div className="sticky top-20 md:top-8">
                  <BookingForm
                    packageName="Ultimate Sri Lanka"
                    packagePrice={`From $${vehicleTiers[0].rate * DAYS}`}
                    packageDuration="21 Days"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Route Map Preview */}
      <Dialog open={mapPreviewOpen} onOpenChange={setMapPreviewOpen}>
        <DialogContent className="max-w-3xl p-2 sm:p-2 bg-background/95 backdrop-blur-sm">
          <DialogTitle className="sr-only">21-day Ultimate Sri Lanka route map</DialogTitle>
          <img
            src="/package images/new21.png"
            alt="21-day Ultimate Sri Lanka route map"
            className="w-full max-h-[80vh] object-contain rounded-lg"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Package21Days;