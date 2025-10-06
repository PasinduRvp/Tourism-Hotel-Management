import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Calendar, MapPin, Star, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PackagesPreview = () => {
  const navigate = useNavigate();

  const packages = [
    {
      id: '7-days',
      title: '7-Days Tour in Sri Lanka',
      duration: '7 Days',
      price: 'From $899',
      description: 'Explore ancient kingdoms, sacred temples, and colonial heritage in this week-long cultural immersion.',
      highlights: ['Sigiriya Rock Fortress', 'Kandy Temple', 'Galle Fort'],
      image: '/sevendaypack.png',
    },
    {
      id: '14-days',
      title: '14-Days Tour in Sri Lanka',
      duration: '14 Days',
      price: 'From $1,599',
      description: 'The ultimate Sri Lankan experience covering cultural sites, wildlife, beaches, and hill country.',
      highlights: ['Yala Safari', 'Tea Plantations', 'Beach Relaxation'],
      image: '/forteendaypack.png',
      
    },
    {
      id: '21-days',
      title: '21-Days Tour in Sri Lanka',
      duration: '21 Days',
      price: 'From $2,299',
      description: 'Deep dive into Sri Lankan culture, nature, and adventure with our most comprehensive tour.',
      highlights: ['Off-the-beaten-path', 'Local Communities', 'Hidden Gems'],
      image: '/twentyfirstdaypack.png',
    },
    {
  id: 'customize',
  title: 'Design Your Dream Package',
  duration: 'Flexible',
  price: 'Custom Quote',
  description: 'Create your perfect Sri Lankan adventure with our expert travel consultants.',
  highlights: ['Personalized Itinerary', 'Custom Activities', 'Flexible Duration'],
  image: '/logoic.jpg',
}

  ];

  return (
    <section id="packages" className="py-20 bg-gradient-to-br from-slate-200 via-blue-100 to-emerald-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 slide-up">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="w-6 h-6 text-primary mr-2" />
            <span className="text-primary font-medium">Our Packages</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-poppins bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Choose Your Adventure
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughtfully crafted journeys to showcase the best of Sri Lanka, 
            from quick getaways to extensive explorations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.id}
              className={`tourism-card scale-in hover:scale-105 transition-all duration-500 overflow-hidden`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full shadow-2xl px-3 py-1">
                  <span className="text-sm font-semibold text-foreground">{pkg.duration}</span>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-foreground font-poppins">
                  {pkg.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {pkg.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {pkg.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <Star className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div>
                    <span className="text-2xl font-bold text-primary font-poppins">
                      {pkg.price}
                    </span>
                    <p className="text-sm text-muted-foreground">per person</p>
                  </div>
                  
                  <Button 
                    onClick={() => navigate(pkg.id === 'customize' ? '/customize-package' : `/packages/${pkg.id}`)}
                    className="btn-primary group"
                  >
                    {pkg.id === 'customize' ? 'Get Started' : 'View Details'}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={() => navigate('/packages')}
            variant="outline"
            className="px-8 py-3 text-lg"
          >
            View All Packages Details
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PackagesPreview;