import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Calendar, MapPin, Star, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PackagesPreview = () => {
  const navigate = useNavigate();

  const packages = [
    {
      id: "7-days",
      title: "7-Days Tour in Sri Lanka",
      duration: "7 Days",
      price: "From $899",
      description:
        "Explore ancient kingdoms, sacred temples, and colonial heritage in this week-long cultural immersion.",
      highlights: ["Sigiriya Rock Fortress", "Kandy Temple", "Galle Fort"],
      image: "/sevendaypack.png",
    },
    {
      id: "14-days",
      title: "14-Days Tour in Sri Lanka",
      duration: "14 Days",
      price: "From $1,599",
      description:
        "The ultimate Sri Lankan experience covering cultural sites, wildlife, beaches, and hill country.",
      highlights: ["Yala Safari", "Tea Plantations", "Beach Relaxation"],
      image: "/forteendaypack.png",
    },
    {
      id: "21-days",
      title: "21-Days Tour in Sri Lanka",
      duration: "21 Days",
      price: "From $2,299",
      description:
        "Deep dive into Sri Lankan culture, nature, and adventure with our most comprehensive tour.",
      highlights: ["Off-the-beaten-path", "Local Communities", "Hidden Gems"],
      image: "/twentyfirstdaypack.png",
    },
    {
      id: "customize",
      title: "Design Your Dream Package",
      duration: "Flexible",
      price: "Custom Quote",
      description:
        "Create your perfect Sri Lankan adventure with our expert travel consultants.",
      highlights: [
        "Personalized Itinerary",
        "Custom Activities",
        "Flexible Duration",
      ],
      image: "/logoic.jpg",
    },
  ];

  return (
    <section
      id="packages"
      className="py-20 bg-gradient-to-br from-orange-100 via-white to-orange-100"
    >
      <div className="container mx-auto px-4">
        {/* Header Section with Modern Font Style */}
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 bg-gradient-to-r from-[#e53e3e] via-[#d4af37] to-[#e53e3e] bg-clip-text text-transparent tracking-tight">
            Choose Your Adventure Package
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            Thoughtfully crafted journeys to showcase the best of Sri Lanka,
            from quick getaways to extensive explorations.
          </p>
        </div>

        {/* Cards Grid with Top Margin and Enhanced Shadows */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={pkg.id}
              className={`tourism-card scale-in hover:scale-105 transition-all duration-500 overflow-hidden border-0 shadow-2xl hover:shadow-2xl`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image Container with Top Margin */}
              <div className="relative h-48 overflow-hidden mt-6 mx-6 rounded-xl">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />

                {/* Duration Badge */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full shadow-2xl px-3 py-1 border border-gray-100">
                  <span className="text-sm font-bold text-gray-800">
                    {pkg.duration}
                  </span>
                </div>
              </div>

              {/* Card Content with Proper Spacing */}
              <CardHeader className="pb-4 pt-6 px-6">
                <CardTitle className="text-xl font-bold text-foreground font-poppins leading-tight">
                  {pkg.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed mt-2">
                  {pkg.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 px-6 pb-6">
                {/* Highlights List */}
                <div className="space-y-3">
                  {pkg.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <Star className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                      <span className="font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Price and CTA Button */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-2xl font-bold text-orange-600 font-poppins block">
                      {pkg.price}
                    </span>
                    <p className="text-xs text-muted-foreground mt-1">
                      per person
                    </p>
                  </div>

                  <Button
                    onClick={() =>
                      navigate(
                        pkg.id === "customize"
                          ? "/customize-package"
                          : `/packages/${pkg.id}`
                      )
                    }
                                      className="btn-primary group 
                      bg-gradient-to-r from-[#e53e3e] to-[#d4af37] 
                      hover:from-[#d4af37]  hover:to-[#e53e3e]
                      text-white font-semibold px-4 py-2 rounded-lg 
                      transition-all duration-500 hover:shadow-xl hover:scale-105"
                                    >
                    {pkg.id === "customize" ? "Get Started" : "View Details"}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button
            onClick={() => navigate("/packages")}
            variant="outline"
            className="px-8 py-3 text-lg border-2absolute inset-0 bg-gradient-to-r from-[#e53e3e] to-[#d4af37] 
                      hover:from-[#d4af37]  hover:to-[#e53e3e]
                      text-white font-semibold px-4 py-2 rounded-lg 
                      transition-all duration-500 hover:shadow-xl hover:scale-105 rounded-xl"
          >
            View All Packages Details
          </Button>
        </div>
      </div>

      {/* Add custom styles for modern appearance */}
      <style>{`
        .tourism-card {
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          border-radius: 20px;
          position: relative;
        }
        
        .tourism-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #ffffff, #ffffff);
          border-radius: 20px 20px 0 0;
        }
        
        .shadow-2xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        @keyframes scale-in {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .scale-in {
          animation: scale-in 0.5s ease-out forwards;
        }
        
        .slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        @keyframes slide-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default PackagesPreview;
