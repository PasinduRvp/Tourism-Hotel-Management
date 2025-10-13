import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Camera,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Diagonal Slider Component
const DiagonalSlider = ({ images, onCardClick }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => prev - 1);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Duplicate images for infinite scroll effect
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <div
        className="absolute flex flex-col gap-4"
        style={{
          transform: `rotate(15deg) translateY(${offset}px)`,
          top: "-100px",
          left: "50%",
          marginLeft: "-350px", // Fixed: Changed from -150px to -100px for better centering
        }}
      >
        {duplicatedImages.map((image, index) => (
          <motion.div
            key={`${image.id}-${index}`}
            className="w-[280px] h-[180px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-300" // Slightly smaller for better fit
            onClick={() => onCardClick(image)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold text-sm">{image.alt}</p>
                <p className="text-xs text-white/80 capitalize">
                  {image.category}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Gallery = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "culture", label: "Culture" },
    { id: "nature", label: "Nature" },
    { id: "wildlife", label: "Wildlife" },
    { id: "beaches", label: "Beaches" },
    { id: "adventure", label: "Adventure" },
  ];

  const galleryImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/13391116/pexels-photo-13391116.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Sigiriya Rock Fortress",
      category: "culture",
      featured: true,
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/13410061/pexels-photo-13410061.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Elephant Safari",
      category: "wildlife",
      featured: true,
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/9771342/pexels-photo-9771342.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Tea Plantations",
      category: "nature",
      featured: false,
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/29644514/pexels-photo-29644514.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Mirissa Beach",
      category: "beaches",
      featured: true,
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/14041994/pexels-photo-14041994.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Temple of the Tooth",
      category: "culture",
      featured: false,
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/2597205/pexels-photo-2597205.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Ayurvedic Yoga",
      category: "nature",
      featured: false,
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Nine Arch Bridge",
      category: "adventure",
      featured: false,
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Mountain Hiking",
      category: "adventure",
      featured: true,
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/12781426/pexels-photo-12781426.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Totus Tower",
      category: "culture",
      featured: false,
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/34037253/pexels-photo-34037253.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Waterfall Adventure",
      category: "adventure",
      featured: false,
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/221387/pexels-photo-221387.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Sunset Beach",
      category: "beaches",
      featured: false,
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/1645028/pexels-photo-1645028.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Diving & Turtles",
      category: "wildlife",
      featured: true,
    },
  ];

  const filteredImages = galleryImages.filter((image) => {
    const matchesCategory =
      selectedCategory === "all" || image.category === selectedCategory;
    const matchesSearch = image.alt
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredImages = galleryImages.filter((image) => image.featured);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;

    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex =
        (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }

    setSelectedImage(filteredImages[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      switch (e.key) {
        case "ArrowLeft":
          navigateImage("prev");
          break;
        case "ArrowRight":
          navigateImage("next");
          break;
        case "Escape":
          closeLightbox();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, filteredImages]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Header />

      {/* Enhanced Hero Section with Diagonal Slider */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/10 via-transparent to-[#e53e3e]/10" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#d4af37]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#e53e3e]/5 rounded-full translate-x-1/3 translate-y-1/3" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div
              className={`text-center lg:text-left transition-all duration-1000 ${
                isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-[#d4af37] to-[#e53e3e] bg-clip-text text-transparent">
                Photo Gallery
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Explore the breathtaking beauty of Sri Lanka through our curated
                collection of stunning photographs from across the island.
              </p>

              <div className="text-center lg:text-left mb-6">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#e53e3e] to-[#d4af37] bg-clip-text text-transparent">
                  Featured Moments
                </h2>
                <p className="text-sm text-gray-500 mt-2 italic">
                  Lightweight & Fast!
                </p>
              </div>
            </div>

            {/* Right Side - Diagonal Slider */}
            <div
              className={`flex justify-center lg:justify-end transition-all duration-1000 ${
                isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: "300ms" }}
            >
              <div className="w-full">
                <DiagonalSlider
                  images={featuredImages}
                  onCardClick={openLightbox}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section ref={galleryRef} className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div
            className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-[#d4af37] to-[#e53e3e] text-white shadow-lg"
                    : "bg-white text-gray-700 border border-amber-200 hover:border-[#d4af37] shadow-md hover:shadow-lg"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Main Gallery Grid */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: "800ms" }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center bg-gradient-to-r from-[#d4af37] to-[#e53e3e] bg-clip-text text-transparent">
              All Photos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`relative group cursor-pointer overflow-hidden rounded-2xl border border-amber-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                    isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
                  }`}
                  style={{ animationDelay: `${1000 + index * 50}ms` }}
                  onClick={() => openLightbox(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <p className="font-semibold">{image.alt}</p>
                    <p className="text-xs text-white/80 capitalize">
                      {image.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* No Results */}
          {filteredImages.length === 0 && (
            <div
              className={`text-center py-20 transition-all duration-700 ${
                isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="text-gray-600 text-xl mb-6">
                📷 No photos found matching your criteria.
              </div>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchTerm("");
                }}
                className="px-6 py-3 border-2 border-[#e53e3e] text-[#e53e3e] hover:bg-gradient-to-r hover:from-[#d4af37] hover:to-[#e53e3e] hover:text-white rounded-xl transition-all duration-300 font-medium"
              >
                Show All Photos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl max-h-full w-full h-full flex items-center justify-center">
            <div className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg animate-fade-in-scale"
              />

              {/* Image Info */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white p-4 rounded-xl animate-fade-in-up">
                <p className="font-semibold text-lg text-center">
                  {selectedImage.alt}
                </p>
                <p className="text-white/80 text-sm text-center capitalize">
                  {selectedImage.category}
                </p>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("prev");
                }}
                className="absolute left-4 bg-black/50 hover:bg-black/70 text-white rounded-full w-12 h-12 p-0 transition-all duration-300 hover:scale-110 animate-fade-in-left flex items-center justify-center"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("next");
                }}
                className="absolute right-4 bg-black/50 hover:bg-black/70 text-white rounded-full w-12 h-12 p-0 transition-all duration-300 hover:scale-110 animate-fade-in-right flex items-center justify-center"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full w-12 h-12 p-0 transition-all duration-300 hover:scale-110 animate-fade-in-up flex items-center justify-center"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Counter */}
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm animate-fade-in-up">
                {filteredImages.findIndex(
                  (img) => img.id === selectedImage.id
                ) + 1}{" "}
                / {filteredImages.length}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />

      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-fade-in-up {
            animation: fadeInUp 0.6s ease-out forwards;
          }

          .animate-fade-in-scale {
            animation: fadeInScale 0.5s ease-out forwards;
          }

          .animate-fade-in {
            animation: fadeIn 0.3s ease-out forwards;
          }

          .animate-fade-in-left {
            animation: fadeInLeft 0.4s ease-out forwards;
          }

          .animate-fade-in-right {
            animation: fadeInRight 0.4s ease-out forwards;
          }

          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Gallery;