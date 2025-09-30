import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Camera, Search, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, useMotionValue, useTransform } from 'framer-motion';

// Swipe Card Component
const SwipeCard = ({ card, isFront, onRemove, onClick }) => {
  const x = useMotionValue(0);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : card.id % 2 ? 6 : -6;
    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 100) {
      onRemove(card.id);
    }
  };

  return (
    <motion.div
      className="absolute inset-0 cursor-grab active:cursor-grabbing"
      style={{
        x,
        opacity,
        rotate,
        transition: "0.125s transform",
      }}
      drag={isFront ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      onClick={() => isFront && onClick(card)}
    >
      <img 
        src={card.src} 
        alt={card.alt}
        className="w-full h-full object-cover rounded-2xl shadow-2xl"
      />
      {isFront && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
          <p className="text-white font-semibold text-lg">{card.alt}</p>
          <p className="text-white/80 text-sm capitalize">{card.category}</p>
        </div>
      )}
    </motion.div>
  );
};

// Swipe Cards Container
const SwipeCards = ({ images, onCardClick }) => {
  const [cards, setCards] = useState(images);

  const handleRemove = (id: number) => {
    setCards(prev => prev.filter(card => card.id !== id));
  };

  return (
    <div className="relative h-[500px] w-full max-w-md">
      {cards.map((card, index) => {
        const isFront = index === cards.length - 1;
        return (
          <SwipeCard
            key={card.id}
            card={card}
            isFront={isFront}
            onRemove={handleRemove}
            onClick={onCardClick}
          />
        );
      })}
      
      {cards.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-2xl">
          <p className="text-gray-500 text-lg">No more featured photos</p>
        </div>
      )}
    </div>
  );
};

const Gallery = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'culture', label: 'Culture' },
    { id: 'nature', label: 'Nature' },
    { id: 'wildlife', label: 'Wildlife' },
    { id: 'beaches', label: 'Beaches' },
    { id: 'adventure', label: 'Adventure' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=800&h=600&fit=crop',
      alt: 'Sigiriya Rock Fortress',
      category: 'culture',
      featured: true
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      alt: 'Elephant Safari',
      category: 'wildlife',
      featured: true
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&h=600&fit=crop',
      alt: 'Tea Plantations',
      category: 'nature',
      featured: false
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop',
      alt: 'Pristine Beach',
      category: 'beaches',
      featured: true
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop',
      alt: 'Buddhist Temple',
      category: 'culture',
      featured: false
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      alt: 'Spice Gardens',
      category: 'nature',
      featured: false
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1544644181-1489ab6c8cae?w=800&h=600&fit=crop',
      alt: 'Traditional Dance',
      category: 'culture',
      featured: false
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1574362849222-9dd4621feaa1?w=800&h=600&fit=crop',
      alt: 'Mountain Hiking',
      category: 'adventure',
      featured: true
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      alt: 'Wildlife Sanctuary',
      category: 'wildlife',
      featured: false
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1571896349842-33c89424de9d?w=800&h=600&fit=crop',
      alt: 'Waterfall Adventure',
      category: 'adventure',
      featured: false
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1544966503-eb6e1d7bf3d3?w=800&h=600&fit=crop',
      alt: 'Sunset Beach',
      category: 'beaches',
      featured: false
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1574362848141-61e1e56d46d7?w=800&h=600&fit=crop',
      alt: 'Hill Country',
      category: 'nature',
      featured: true
    }
  ];

  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    const matchesSearch = image.alt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredImages = galleryImages.filter(image => image.featured);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      switch(e.key) {
        case 'ArrowLeft':
          navigateImage('prev');
          break;
        case 'ArrowRight':
          navigateImage('next');
          break;
        case 'Escape':
          closeLightbox();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, filteredImages]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Header />
      
      {/* Enhanced Hero Section with Swipe Cards */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/10 via-transparent to-green-900/10" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/5 rounded-full translate-x-1/3 translate-y-1/3" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className={`text-center lg:text-left transition-all duration-1000 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 transform hover:scale-105 transition-transform duration-300">
                <Camera className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-blue-600 font-medium">Visual Journey</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Photo Gallery
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Explore the breathtaking beauty of Sri Lanka through our curated collection 
                of stunning photographs from across the island.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search photos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Swipe Cards */}
            <div className={`flex justify-center lg:justify-end transition-all duration-1000 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`} style={{ animationDelay: '300ms' }}>
              <div className="w-full max-w-md">
                <div className="text-center lg:text-left mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Moments</h2>
                  <p className="text-gray-600">Swipe to explore featured photos</p>
                </div>
                <SwipeCards images={featuredImages} onCardClick={openLightbox} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section ref={galleryRef} className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          
          {/* Category Filters */}
          <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '200ms' }}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300 shadow-md hover:shadow-lg'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Main Gallery Grid */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '800ms' }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">All Photos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`relative group cursor-pointer overflow-hidden rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
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
                    <p className="text-xs text-white/80 capitalize">{image.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* No Results */}
          {filteredImages.length === 0 && (
            <div className={`text-center py-20 transition-all duration-700 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}>
              <div className="text-gray-600 text-xl mb-6">
                📷 No photos found matching your criteria.
              </div>
              <button 
                onClick={() => { setSelectedCategory('all'); setSearchTerm(''); }}
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl transition-all duration-300 font-medium"
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
                <p className="font-semibold text-lg text-center">{selectedImage.alt}</p>
                <p className="text-white/80 text-sm text-center capitalize">{selectedImage.category}</p>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
                className="absolute left-4 bg-black/50 hover:bg-black/70 text-white rounded-full w-12 h-12 p-0 transition-all duration-300 hover:scale-110 animate-fade-in-left flex items-center justify-center"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
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
                {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} / {filteredImages.length}
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