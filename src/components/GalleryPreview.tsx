import React, { useState } from 'react';
import { Camera, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


  


const GalleryPreview = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=600&h=400&fit=crop',
      alt: 'Sigiriya Rock Fortress',
      category: 'Culture'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      alt: 'Elephant Safari',
      category: 'Wildlife'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&h=400&fit=crop',
      alt: 'Tea Plantations',
      category: 'Nature'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&h=400&fit=crop',
      alt: 'Pristine Beach',
      category: 'Beaches'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&h=400&fit=crop',
      alt: 'Buddhist Temple',
      category: 'Culture'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
      alt: 'Spice Gardens',
      category: 'Nature'
    }
  ];

  // Split images into two rows
  const firstRowImages = galleryImages.slice(0, 3);
  const secondRowImages = galleryImages.slice(3, 6);
  
  // Duplicate images for seamless loop
  const duplicatedFirstRow = [...firstRowImages, ...firstRowImages, ...firstRowImages];
  const duplicatedSecondRow = [...secondRowImages, ...secondRowImages, ...secondRowImages];

  return (
    <>
      <style>{`
        @keyframes infiniteScrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes infiniteScrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .infinite-scroll-left {
          animation: infiniteScrollLeft 10s linear infinite;
        }
        
        .infinite-scroll-right {
          animation: infiniteScrollRight 10s linear infinite;
        }
        
        .infinite-scroll-left:hover,
        .infinite-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section className="py-20 bg-gradient-to-br from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 slide-up">
            <div className="flex items-center justify-center mb-4">
              <Camera className="w-6 h-6 text-primary mr-2" />
              <span className="text-primary font-medium">Gallery</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-poppins">
              Captured Moments
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Glimpse the beauty and wonder that awaits you in Sri Lanka through 
              these stunning photography captures.
            </p>
          </div>

          {/* First Horizontal Scroll Line - Left to Right */}
          <div className="overflow-hidden relative max-w-full mb-6">
            <div className="flex infinite-scroll-left gap-6">
              {duplicatedFirstRow.map((image, index) => (
                <div 
                  key={`row1-${image.id}-${index}`}
                  className="flex-shrink-0 relative group cursor-pointer overflow-hidden rounded-xl hover:scale-105 transition-transform duration-300"
                  onClick={() => setSelectedImage(image.src)}
                  style={{ width: '320px', height: '240px' }}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-semibold">{image.alt}</p>
                    <p className="text-sm text-white/80">{image.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Horizontal Scroll Line - Right to Left */}
          <div className="overflow-hidden relative max-w-full">
            <div className="flex infinite-scroll-right gap-6">
              {duplicatedSecondRow.map((image, index) => (
                <div 
                  key={`row2-${image.id}-${index}`}
                  className="flex-shrink-0 relative group cursor-pointer overflow-hidden rounded-xl hover:scale-105 transition-transform duration-300"
                  onClick={() => setSelectedImage(image.src)}
                  style={{ width: '320px', height: '240px' }}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-semibold">{image.alt}</p>
                    <p className="text-sm text-white/80">{image.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => navigate('/Gallery')}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Gallery preview"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 p-0 flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPreview;