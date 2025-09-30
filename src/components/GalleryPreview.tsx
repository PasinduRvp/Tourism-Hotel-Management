import React, { useState } from 'react';
import { Camera, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


  


const GalleryPreview = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/13391116/pexels-photo-13391116.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Sigiriya Rock Fortress',
      category: 'Culture'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/13410061/pexels-photo-13410061.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Elephant Safari',
      category: 'Wildlife'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/9771342/pexels-photo-9771342.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Tea Plantations',
      category: 'Nature'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/29644514/pexels-photo-29644514.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Mirissa Beach',
      category: 'Beaches'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/14041994/pexels-photo-14041994.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Temple of the Tooth',
      category: 'Culture'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/2597205/pexels-photo-2597205.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Ayurvedic Yoga',
      category: 'Mind Relaxation'
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

      <section className="py-20 bg-gradient-to-br from-slate-200 via-blue-100 to-emerald-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 slide-up">
            <div className="flex items-center justify-center mb-4">
              <Camera className="w-6 h-6 text-primary mr-2" />
              <span className="text-primary font-medium">Gallery</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-poppins bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
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
              className="relative overflow-hidden group bg-gradient-to-r from-[#1a365d] to-[#2d3748] hover:from-[#d4af37] hover:to-[#e53e3e] text-white font-semibold text-2xl px-8 py-4 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl border-0"
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