import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Calendar, MapPin, Users, DollarSign, Camera, Utensils, Car, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Validation schema
const customizationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  travelers: z.number().min(1, 'At least 1 traveler required').max(20, 'Maximum 20 travelers'),
  duration: z.number().min(1, 'Minimum 1 day').max(30, 'Maximum 30 days'),
  budget: z.enum(['budget', 'mid-range', 'luxury'], {
    required_error: 'Please select a budget range'
  }),
  destinations: z.array(z.string()).min(1, 'Please select at least one destination'),
  activities: z.array(z.string()).min(1, 'Please select at least one activity'),
  accommodation: z.enum(['budget', 'mid-range', 'luxury'], {
    required_error: 'Please select accommodation type'
  }),
  transportation: z.enum(['private', 'public', 'mixed'], {
    required_error: 'Please select transportation preference'
  }),
  dietary: z.string().optional(),
  specialRequests: z.string().optional()
});

const CustomizePackage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset
  } = useForm<z.infer<typeof customizationSchema>>({
    resolver: zodResolver(customizationSchema),
    defaultValues: {
      travelers: 2,
      duration: 7,
      destinations: [],
      activities: []
    }
  });

  const watchedDestinations = watch('destinations');
  const watchedActivities = watch('activities');

  const destinations = [
    { id: 'colombo', name: 'Colombo', description: 'Urban exploration' },
    { id: 'kandy', name: 'Kandy', description: 'Cultural heritage' },
    { id: 'sigiriya', name: 'Sigiriya', description: 'Ancient wonders' },
    { id: 'nuwara-eliya', name: 'Nuwara Eliya', description: 'Hill country' },
    { id: 'galle', name: 'Galle', description: 'Coastal charm' },
    { id: 'yala', name: 'Yala', description: 'Wildlife safari' },
    { id: 'ella', name: 'Ella', description: 'Scenic hikes' },
    { id: 'mirissa', name: 'Mirissa', description: 'Beach relaxation' }
  ];

  const activities = [
    { id: 'safari', name: 'Wildlife Safari', icon: '🐘' },
    { id: 'cultural', name: 'Cultural Sites', icon: '🏛️' },
    { id: 'beach', name: 'Beach Activities', icon: '🏖️' },
    { id: 'hiking', name: 'Hiking & Trekking', icon: '🥾' },
    { id: 'train', name: 'Scenic Train Ride', icon: '🚂' },
    { id: 'cooking', name: 'Cooking Class', icon: '👨‍🍳' },
    { id: 'spa', name: 'Spa & Wellness', icon: '🧘‍♀️' },
    { id: 'photography', name: 'Photography Tour', icon: '📸' }
  ];

  const handleDestinationToggle = (destinationId: string) => {
    const current = watchedDestinations || [];
    if (current.includes(destinationId)) {
      setValue('destinations', current.filter(id => id !== destinationId));
    } else {
      setValue('destinations', [...current, destinationId]);
    }
  };

  const handleActivityToggle = (activityId: string) => {
    const current = watchedActivities || [];
    if (current.includes(activityId)) {
      setValue('activities', current.filter(id => id !== activityId));
    } else {
      setValue('activities', [...current, activityId]);
    }
  };

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Save to localStorage
      const customizations = JSON.parse(localStorage.getItem('trip_customizations') || '[]');
      customizations.push({
        ...data,
        timestamp: new Date().toISOString(),
        id: Date.now()
      });
      localStorage.setItem('trip_customizations', JSON.stringify(customizations));

      setIsSubmitted(true);
      reset();
      toast({
        title: "Request Submitted!",
        description: "Your trip customization request has been submitted! We'll get back to you within 24 hours."
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="pt-20 pb-12 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4 text-center">
            <div className="animate-fade-in">
              <CheckCircle className="h-24 w-24 text-white mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
                Request Submitted!
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Thank you for your interest in customizing your Sri Lankan adventure. Our travel experts will review your preferences and contact you within 24 hours with a personalized itinerary.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-8 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                Customize Another Trip
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins animate-fade-in">
            Customize Your Trip
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in">
            Tell us about your dream Sri Lankan adventure, and we'll create a personalized itinerary just for you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Information */}
            <div className="bg-card rounded-2xl shadow-lg p-8 animate-fade-in">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center font-poppins">
                <Users className="h-6 w-6 mr-3 text-primary" />
                Personal Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                  <input
                    {...register('name')}
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background text-foreground"
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background text-foreground"
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                  <input
                    {...register('phone')}
                    type="tel"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background text-foreground"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Number of Travelers *</label>
                  <input
                    {...register('travelers', { valueAsNumber: true })}
                    type="number"
                    min="1"
                    max="20"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background text-foreground"
                  />
                  {errors.travelers && <p className="mt-1 text-sm text-destructive">{errors.travelers.message}</p>}
                </div>
              </div>
            </div>

            {/* Trip Preferences */}
            <div className="bg-card rounded-2xl shadow-lg p-8 animate-fade-in">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center font-poppins">
                <Calendar className="h-6 w-6 mr-3 text-accent" />
                Trip Preferences
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Trip Duration (Days) *</label>
                  <input
                    {...register('duration', { valueAsNumber: true })}
                    type="number"
                    min="1"
                    max="30"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background text-foreground"
                  />
                  {errors.duration && <p className="mt-1 text-sm text-destructive">{errors.duration.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Budget Range *</label>
                  <select
                    {...register('budget')}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background text-foreground"
                  >
                    <option value="">Select budget</option>
                    <option value="budget">Budget ($50-100/day)</option>
                    <option value="mid-range">Mid-range ($100-200/day)</option>
                    <option value="luxury">Luxury ($200+/day)</option>
                  </select>
                  {errors.budget && <p className="mt-1 text-sm text-destructive">{errors.budget.message}</p>}
                </div>
              </div>

              {/* Destinations */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-4">Preferred Destinations *</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {destinations.map((destination) => (
                    <button
                      key={destination.id}
                      type="button"
                      onClick={() => handleDestinationToggle(destination.id)}
                      className={`p-4 border-2 rounded-lg text-left transition-all hover-scale ${
                        watchedDestinations?.includes(destination.id)
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border hover:border-muted-foreground'
                      }`}
                    >
                      <h4 className="font-semibold text-sm">{destination.name}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{destination.description}</p>
                    </button>
                  ))}
                </div>
                {errors.destinations && <p className="mt-2 text-sm text-destructive">{errors.destinations.message}</p>}
              </div>

              {/* Activities */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-4">Preferred Activities *</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {activities.map((activity) => (
                    <button
                      key={activity.id}
                      type="button"
                      onClick={() => handleActivityToggle(activity.id)}
                      className={`p-4 border-2 rounded-lg text-center transition-all hover-scale ${
                        watchedActivities?.includes(activity.id)
                          ? 'border-accent bg-accent/10 text-accent'
                          : 'border-border hover:border-muted-foreground'
                      }`}
                    >
                      <div className="text-2xl mb-2">{activity.icon}</div>
                      <h4 className="font-semibold text-sm">{activity.name}</h4>
                    </button>
                  ))}
                </div>
                {errors.activities && <p className="mt-2 text-sm text-destructive">{errors.activities.message}</p>}
              </div>
            </div>

            {/* Accommodation & Transportation */}
            <div className="bg-card rounded-2xl shadow-lg p-8 animate-fade-in">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center font-poppins">
                <Car className="h-6 w-6 mr-3 text-secondary" />
                Accommodation & Transportation
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Accommodation Type *</label>
                  <select
                    {...register('accommodation')}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background text-foreground"
                  >
                    <option value="">Select accommodation</option>
                    <option value="budget">Budget Hotels/Guesthouses</option>
                    <option value="mid-range">Mid-range Hotels</option>
                    <option value="luxury">Luxury Resorts</option>
                  </select>
                  {errors.accommodation && <p className="mt-1 text-sm text-destructive">{errors.accommodation.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Transportation Preference *</label>
                  <select
                    {...register('transportation')}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background text-foreground"
                  >
                    <option value="">Select transportation</option>
                    <option value="private">Private Vehicle</option>
                    <option value="public">Public Transport</option>
                    <option value="mixed">Mixed (Private + Public)</option>
                  </select>
                  {errors.transportation && <p className="mt-1 text-sm text-destructive">{errors.transportation.message}</p>}
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-card rounded-2xl shadow-lg p-8 animate-fade-in">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center font-poppins">
                <Utensils className="h-6 w-6 mr-3 text-muted-foreground" />
                Additional Information
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Dietary Restrictions</label>
                  <input
                    {...register('dietary')}
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background text-foreground"
                    placeholder="e.g., vegetarian, gluten-free, allergies"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Special Requests or Notes</label>
                  <textarea
                    {...register('specialRequests')}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none bg-background text-foreground"
                    placeholder="Any special requirements, accessibility needs, or additional preferences..."
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center animate-fade-in">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-primary-foreground px-12 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 mx-auto hover-scale"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Submit Customization Request</span>
                  </>
                )}
              </button>
              <p className="mt-4 text-sm text-muted-foreground">
                We'll get back to you within 24 hours with a personalized itinerary.
              </p>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomizePackage;