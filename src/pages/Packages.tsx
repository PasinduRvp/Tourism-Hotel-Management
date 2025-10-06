// src/pages/Packages.tsx
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, MapPin, Star, ArrowRight, Search, Clock, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Packages = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Animation trigger
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const packages = [
    {
      id: '7-days',
      title: '7-Days Cultural Tour',
      duration: '7 Days',
      price: 'From $899',
      description: 'Explore ancient kingdoms, sacred temples, and colonial heritage in this week-long cultural immersion.',
      highlights: ['Sigiriya Rock Fortress', 'Kandy Temple', 'Galle Fort'],
      image: '/sevendaypack.png',
      category: 'cultural',
      rating: 5,
      travelers: 'As Much As You Like',
      featured: true
    },
    {
      id: '14-days',
      title: '14-Days Complete Experience',
      duration: '14 Days',
      price: 'From $1,599',
      description: 'The ultimate Sri Lankan experience covering cultural sites, wildlife, beaches, and hill country.',
      highlights: ['Yala Safari', 'Tea Plantations', 'Beach Relaxation'],
      image: '/forteendaypack.png',
      category: 'comprehensive',
      rating: 5,
      travelers: 'As Much As You Like',
      featured: true
    },
    {
      id: '21-days',
      title: '21-Days Deep Exploration',
      duration: '21 Days',
      price: 'From $2,299',
      description: 'Deep dive into Sri Lankan culture, nature, and adventure with our most comprehensive tour.',
      highlights: ['Off-the-beaten-path', 'Local Communities', 'Hidden Gems'],
      image: '/twentyfirstdaypack.png',
      category: 'adventure',
      rating: 5.0,
      travelers: 'As Much As You Like',
      featured: true
    },
    {
      id: 'customize',
      title: 'Design Your Dream Package',
      duration: 'Flexible',
      price: 'Custom Quote',
      description: 'Create your perfect Sri Lankan adventure with our expert travel consultants.',
      highlights: ['Personalized Itinerary', 'Custom Activities', 'Flexible Duration'],
      image: '/CHT_LOGO.png',
      category: 'custom',
      rating: 5.0,
      travelers: 'AnAs Much As You Likey',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Packages' },
    { id: 'cultural', label: 'Cultural' },
    { id: 'adventure', label: 'Adventure' },
    { id: 'nature', label: 'Nature' },
    { id: 'luxury', label: 'Luxury' },
    { id: 'quick', label: 'Quick Escapes' },
    { id: 'custom', label: 'Custom' }
  ];

  const filteredPackages = packages.filter(pkg => {
    const matchesFilter = filter === 'all' || pkg.category === filter;
    const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pkg.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Custom Button Component
  const Button = ({ children, onClick, variant = 'default', className = '', size = 'default', ...props }) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer transform hover:scale-105 active:scale-95';
    
    const variants = {
      default: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl',
      outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-md hover:shadow-lg',
      secondary: 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-900 hover:from-gray-300 hover:to-gray-400 shadow-md hover:shadow-lg'
    };
    
    const sizes = {
      default: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
      sm: 'px-4 py-2 text-sm'
    };

    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  };

  // Custom Card Components
  const Card = ({ children, className = '', delay = 0, ...props }) => (
    <div 
      className={`bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2 ${className} ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
      style={{ animationDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );

  const CardHeader = ({ children, className = '' }) => (
    <div className={`p-6 pb-4 ${className}`}>
      {children}
    </div>
  );

  const CardTitle = ({ children, className = '' }) => (
    <h3 className={`text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 ${className}`}>
      {children}
    </h3>
  );

  const CardDescription = ({ children, className = '' }) => (
    <p className={`text-gray-600 mt-2 group-hover:text-gray-700 transition-colors duration-300 ${className}`}>
      {children}
    </p>
  );

  const CardContent = ({ children, className = '' }) => (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Header />
      
      {/* Enhanced Hero Section with Animations */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-green-500/10 animate-pulse-slow" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 animate-float-slow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/5 rounded-full translate-x-1/3 translate-y-1/3 animate-float-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-yellow-500/3 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent animate-gradient-x">
              Tour Packages
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Curated journeys through the pearl of the Indian Ocean. 
              From ancient cities to pristine beaches, discover your perfect adventure.
            </p>

        
          </div>
        </div>
      </section>

      {/* Enhanced Packages Grid Section */}
      <section id="packages-grid" className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          
          {/* Packages Grid - Updated to 2 cards per row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {filteredPackages.map((pkg, index) => (
              <Card 
                key={pkg.id} 
                delay={index * 200}
                className="flex flex-col group cursor-pointer transform hover:scale-[1.02] transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-all duration-700 z-10" />
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  
                  {/* Enhanced Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Enhanced Badges */}
                  <div className="absolute top-4 left-4 flex gap-2 z-20">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                      <span className="text-sm font-semibold text-gray-900 flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-blue-600" />
                        {pkg.duration}
                      </span>
                    </div>
                    {pkg.featured && (
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg transform group-hover:scale-105 transition-transform duration-300 animate-pulse-slow">
                        <span className="text-sm font-semibold">⭐ Featured</span>
                      </div>
                    )}
                  </div>

                  {/* Enhanced Rating */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg transform group-hover:scale-105 transition-transform duration-300 z-20">
                    <span className="text-sm font-semibold text-gray-900 flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-2 fill-current animate-bounce-subtle" />
                      {pkg.rating}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="flex-1 flex flex-col p-6">
                  <CardHeader className="p-0 pb-4">
                    <CardTitle className="text-xl">
                      {pkg.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {pkg.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4 flex-1 p-0">
                    {/* Enhanced Highlights */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 flex items-center text-sm">
                        <Star className="w-4 h-4 text-green-500 mr-2 fill-current animate-pulse" />
                        Tour Highlights
                      </h4>
                      {pkg.highlights.map((highlight, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300 transform hover:translate-x-1 transition-transform duration-300"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>

                    {/* Enhanced Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-600 bg-gray-50 rounded-xl p-3">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1 text-blue-600" />
                        <span className="font-medium">{pkg.travelers} travelers</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1 text-green-600" />
                        <span className="font-medium capitalize">{pkg.category}</span>
                      </div>
                    </div>

                    {/* Enhanced Price and CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="transform hover:scale-105 transition-transform duration-300">
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                          {pkg.price}
                        </span>
                        <p className="text-sm text-gray-600 mt-1">per person</p>
                      </div>
                      
                      <Button 
                        onClick={() => navigate(pkg.id === 'customize' ? '/customize-package' : `/packages/${pkg.id}`)}
                        className="rounded-xl px-6 py-3"
                      >
                        {pkg.id === 'customize' ? 'Design Trip' : 'View Details'}
                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Enhanced No Results */}
          {filteredPackages.length === 0 && (
            <div className={`text-center py-20 transition-all duration-700 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}>
              <div className="text-gray-600 text-xl mb-6">
                🗺️ No packages found matching your criteria.
              </div>
              <Button 
                onClick={() => { setFilter('all'); setSearchTerm(''); }}
                variant="outline"
                className="mt-4 rounded-xl px-8 py-4"
              >
                Show All Packages
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;