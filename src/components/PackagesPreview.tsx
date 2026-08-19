import React from "react";
import { Star, ArrowRight, Clock, Zap } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const vehicleTiers = [
  { label: "Hatchback", rate: 70, emoji: "🚗" },
  { label: "Sedan",   rate: 80, emoji: "🚙" },
  { label: "SUV",     rate: 120, emoji: "🚐" },
];

// Single source of truth for where a package card / its button leads
const packageRoute = (id: string) =>
  id === "customize" ? "/customize-package" : `/packages/${id}`;

const packages = [
  {
    id: "7-days",
    title: "7-Days Tour",
    subtitle: "Cultural Triangle",
    duration: "7 Days",
    days: 7,
    description: "Ancient kingdoms, sacred temples & colonial heritage.",
    highlights: ["Sigiriya Rock Fortress", "Kandy Temple", "Galle Fort"],
    image: '/sevendaypack.png',
    badge: "Most Popular",
    badgeColor: "#e53e3e",
  },
  {
    id: "14-days",
    title: "14-Days Tour",
    subtitle: "Complete Sri Lanka",
    duration: "14 Days",
    days: 14,
    description: "Wildlife, beaches, hill country & cultural wonders.",
    highlights: ["Yala Safari", "Tea Plantations", "Beach Relaxation"],
    image: '/forteendaypack.png',
    badge: "Best Value",
    badgeColor: "#d4af37",
  },
  {
    id: "21-days",
    title: "21-Days Tour",
    subtitle: "Deep Exploration",
    duration: "21 Days",
    days: 21,
    description: "Off-the-beaten-path gems & authentic local experiences.",
    highlights: ["Hidden Villages", "Local Communities", "Secret Beaches"],
    image: '/twentyfirstdaypack.png',
    badge: "Premium",
    badgeColor: "#7c3aed",
  },
  {
    id: "customize",
    title: "Custom Tour",
    subtitle: "Your Dream Trip",
    duration: "Flexible",
    days: null,
    description: "Tailored itinerary crafted by expert travel consultants.",
    highlights: ["Personalized Itinerary", "Custom Activities", "Any Duration"],
    image: '/logoic.jpg',
    badge: "Bespoke",
    badgeColor: "#0891b2",
  },
];

const PackagesPreview = () => {
  const navigate = useNavigate();

  return (
    <section
      id="packages"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #fff7ed 0%, #fef3c7 50%, #fef2f2 100%)" }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(251,146,60,0.15) 0%, transparent 70%)",
          transform: "translate(30%, -40%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(239,68,68,0.1) 0%, transparent 70%)",
          transform: "translate(-25%, 35%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-4"
            style={{ color: "#e53e3e", background: "rgba(229,62,62,0.08)" }}
          >
            Tour Packages
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight"
          >
            Choose Your{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #e53e3e, #d4af37, #e53e3e)" }}
            >
              Adventure
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Thoughtfully crafted journeys through the pearl of the Indian Ocean.
          </p>
        </div>

        {/* 
          KEY UX FIX: 
          - Removed max-h + overflow scroll on cards entirely
          - Cards are flex-col so content stacks naturally
          - Button is always at the bottom via mt-auto, never hidden
          - No scroll trap — user scrolls the page normally
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              role="button"
              tabIndex={0}
              aria-label={`View ${pkg.title}`}
              onClick={() => navigate(packageRoute(pkg.id))}
              onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  navigate(packageRoute(pkg.id));
                }
              }}
              className="group bg-white rounded-2xl overflow-hidden flex flex-col border border-gray-100 cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e53e3e] focus-visible:ring-offset-2"
              style={{
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 50px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
              }}
            >
              {/* ── Image block ── */}
              <div className="relative h-44 overflow-hidden flex-shrink-0">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark gradient for text legibility */}
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.08) 55%, transparent 100%)" }} />

                {/* Badge — top left */}
                <div
                  className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-white text-[11px] font-bold shadow"
                  style={{ backgroundColor: pkg.badgeColor }}
                >
                  {pkg.badge}
                </div>

                {/* Duration — top right */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1 shadow-sm">
                  <Clock className="w-3 h-3 text-gray-500" />
                  <span className="text-xl font-bold text-gray-700">{pkg.duration}</span>
                </div>

                {/* Title on image */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white/70 text-[11px] font-medium uppercase tracking-wider">{pkg.subtitle}</p>
                  <h3 className="text-white text-lg font-black leading-snug">{pkg.title}</h3>
                </div>
              </div>

              {/* ── Card body ── flex-1 so it grows, button always visible at bottom */}
              <div className="flex flex-col flex-1 p-4 gap-3">

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">{pkg.description}</p>

                {/* Highlights */}
                <div className="space-y-1.5">
                  {pkg.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-sm text-gray-600">
                      <Star className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#f59e0b", fill: "#f59e0b" }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100" />

                {/* Pricing section */}
                {pkg.days ? (
                  <div className="space-y-1.5">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1">Vehicle Options</p>
                    {vehicleTiers.map((tier) => (
                      <div key={tier.label} className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-sm text-gray-500">
                          <span>{tier.emoji}</span>
                          <span>{tier.label}</span>
                          <span className="text-[11px] text-gray-400">${tier.rate}/d</span>
                        </span>
                        <span className="font-bold text-gray-800 text-sm">${tier.rate * pkg.days}</span>
                      </div>
                    ))}
                    <p className="text-[11px] text-gray-400 pt-0.5">
                      Per vehicle · {pkg.days} days total
                    </p>
                  </div>
                ) : (
                  <div>
                    <p
                      className="text-xl font-black bg-clip-text text-transparent"
                      style={{ backgroundImage: "linear-gradient(90deg, #e53e3e, #d4af37)" }}
                    >
                      Custom Quote
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">Tailored to your budget & style</p>
                  </div>
                )}

                {/* 
                  CTA BUTTON — mt-auto pins it to the bottom of the card.
                  Always fully visible. No scrolling needed.
                */}
                <button
                  onClick={e => {
                    e.stopPropagation();
                    navigate(packageRoute(pkg.id));
                  }}
                  className="mt-auto w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:opacity-90 active:scale-95"
                  style={{
                    background: "linear-gradient(135deg, #e53e3e 0%, #d4af37 100%)",
                    boxShadow: "0 4px 15px rgba(229,62,62,0.3)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #d4af37 0%, #e53e3e 100%)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(229,62,62,0.4)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #e53e3e 0%, #d4af37 100%)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 15px rgba(229,62,62,0.3)";
                  }}
                >
                  {pkg.id === "customize" ? (
                    <>
                      <Zap className="w-4 h-4" />
                      Get Started
                    </>
                  ) : (
                    <>
                      View Details
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/packages')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #e53e3e 0%, #d4af37 100%)",
              boxShadow: "0 4px 20px rgba(229,62,62,0.3)",
            }}
          >
            View All Package Details
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PackagesPreview;