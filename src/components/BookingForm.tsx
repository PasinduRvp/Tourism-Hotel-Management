import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { User, Mail, Users, MessageSquare, CheckCircle, Flag } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  country: z.string().min(1, 'Please select your country'),
  passengers: z.number().min(1, 'At least 1 passenger required').max(20, 'Maximum 20 passengers'),
  message: z.string().optional()
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  packageName: string;
  packagePrice: string;
  packageDuration: string;
}

const countries = [
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'UK', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: 'FR', name: 'France', flag: '🇫🇷' },
  { code: 'IT', name: 'Italy', flag: '🇮🇹' },
  { code: 'ES', name: 'Spain', flag: '🇪🇸' },
  { code: 'NL', name: 'Netherlands', flag: '🇳🇱' },
  { code: 'CH', name: 'Switzerland', flag: '🇨🇭' },
  { code: 'SE', name: 'Sweden', flag: '🇸🇪' },
  { code: 'NO', name: 'Norway', flag: '🇳🇴' },
  { code: 'DK', name: 'Denmark', flag: '🇩🇰' },
  { code: 'FI', name: 'Finland', flag: '🇫🇮' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵' },
  { code: 'KR', name: 'South Korea', flag: '🇰🇷' },
  { code: 'CN', name: 'China', flag: '🇨🇳' },
  { code: 'IN', name: 'India', flag: '🇮🇳' },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬' },
  { code: 'MY', name: 'Malaysia', flag: '🇲🇾' },
  { code: 'TH', name: 'Thailand', flag: '🇹🇭' },
  { code: 'ID', name: 'Indonesia', flag: '🇮🇩' },
  { code: 'PH', name: 'Philippines', flag: '🇵🇭' },
  { code: 'VN', name: 'Vietnam', flag: '🇻🇳' },
  { code: 'AE', name: 'United Arab Emirates', flag: '🇦🇪' },
  { code: 'SA', name: 'Saudi Arabia', flag: '🇸🇦' },
  { code: 'ZA', name: 'South Africa', flag: '🇿🇦' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷' },
  { code: 'AR', name: 'Argentina', flag: '🇦🇷' },
  { code: 'MX', name: 'Mexico', flag: '🇲🇽' },
  { code: 'RU', name: 'Russia', flag: '🇷🇺' },
  { code: 'TR', name: 'Turkey', flag: '🇹🇷' },
  { code: 'IL', name: 'Israel', flag: '🇮🇱' },
  { code: 'EG', name: 'Egypt', flag: '🇪🇬' },
  { code: 'MA', name: 'Morocco', flag: '🇲🇦' },
  { code: 'KE', name: 'Kenya', flag: '🇰🇪' },
  { code: 'GH', name: 'Ghana', flag: '🇬🇭' },
  { code: 'NG', name: 'Nigeria', flag: '🇳🇬' },
  { code: 'BD', name: 'Bangladesh', flag: '🇧🇩' },
  { code: 'PK', name: 'Pakistan', flag: '🇵🇰' },
  { code: 'LK', name: 'Sri Lanka', flag: '🇱🇰' },
  { code: 'NP', name: 'Nepal', flag: '🇳🇵' },
  { code: 'MM', name: 'Myanmar', flag: '🇲🇲' },
  { code: 'KH', name: 'Cambodia', flag: '🇰🇭' },
  { code: 'LA', name: 'Laos', flag: '🇱🇦' },
  { code: 'MN', name: 'Mongolia', flag: '🇲🇳' },
  { code: 'KZ', name: 'Kazakhstan', flag: '🇰🇿' },
  { code: 'UZ', name: 'Uzbekistan', flag: '🇺🇿' },
  { code: 'AF', name: 'Afghanistan', flag: '🇦🇫' },
  { code: 'IR', name: 'Iran', flag: '🇮🇷' },
  { code: 'IQ', name: 'Iraq', flag: '🇮🇶' },
  { code: 'SY', name: 'Syria', flag: '🇸🇾' },
  { code: 'LB', name: 'Lebanon', flag: '🇱🇧' },
  { code: 'JO', name: 'Jordan', flag: '🇯🇴' },
  { code: 'KW', name: 'Kuwait', flag: '🇰🇼' },
  { code: 'QA', name: 'Qatar', flag: '🇶🇦' },
  { code: 'BH', name: 'Bahrain', flag: '🇧🇭' },
  { code: 'OM', name: 'Oman', flag: '🇴🇲' },
  { code: 'YE', name: 'Yemen', flag: '🇾🇪' }
].sort((a, b) => a.name.localeCompare(b.name));

const BookingForm: React.FC<BookingFormProps> = ({ packageName, packagePrice, packageDuration }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      passengers: 2
    }
  });

  const watchedCountry = watch('country');

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(countrySearch.toLowerCase())
  );

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Save booking to localStorage
      const bookings = JSON.parse(localStorage.getItem('package_bookings') || '[]');
      const selectedCountry = countries.find(c => c.code === data.country);
      
      bookings.push({
        ...data,
        packageName,
        packagePrice,
        packageDuration,
        countryFlag: selectedCountry?.flag,
        countryName: selectedCountry?.name,
        timestamp: new Date().toISOString(),
        id: Date.now()
      });
      
      localStorage.setItem('package_bookings', JSON.stringify(bookings));
      
      setIsSubmitted(true);
      toast({
        title: "Booking Confirmed!",
        description: `Your ${packageName} package booking has been submitted successfully.`,
      });
      
      reset();
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
      <Card className="tourism-card">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            <h3 className="text-xl font-bold text-foreground">Booking Confirmed!</h3>
            <p className="text-muted-foreground">
              Thank you for booking the {packageName} package. We'll contact you within 24 hours to finalize your trip details.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="btn-primary"
            >
              Book Another Package
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="tourism-card">
      <CardHeader>
        <CardTitle className="text-2xl font-poppins flex items-center">
          <User className="w-6 h-6 mr-2 text-primary" />
          Book {packageName}
        </CardTitle>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p><strong>Duration:</strong> {packageDuration}</p>
          <p><strong>Price:</strong> {packagePrice} per person</p>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Full Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                {...register('name')}
                type="text"
                placeholder="Enter your full name"
                className="pl-10"
              />
            </div>
            {errors.name && (
              <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                {...register('email')}
                type="email"
                placeholder="your@email.com"
                className="pl-10"
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Country *
            </label>
            <Select onValueChange={(value) => setValue('country', value)}>
              <SelectTrigger className="w-full">
                <div className="flex items-center">
                  {watchedCountry ? (
                    <>
                      <span className="text-lg mr-2">{countries.find(c => c.code === watchedCountry)?.flag}</span>
                      <span>{countries.find(c => c.code === watchedCountry)?.name}</span>
                    </>
                  ) : (
                    <>
                      <Flag className="w-4 h-4 mr-2 text-muted-foreground" />
                      <SelectValue placeholder="Select your country" />
                    </>
                  )}
                </div>
              </SelectTrigger>
              <SelectContent>
                <div className="p-2">
                  <Input
                    placeholder="Search countries..."
                    value={countrySearch}
                    onChange={(e) => setCountrySearch(e.target.value)}
                    className="mb-2"
                  />
                </div>
                {filteredCountries.map((country) => (
                  <SelectItem key={country.code} value={country.code}>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{country.flag}</span>
                      <span>{country.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.country && (
              <p className="mt-1 text-sm text-destructive">{errors.country.message}</p>
            )}
          </div>

          {/* Passengers */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Number of Passengers *
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                {...register('passengers', { valueAsNumber: true })}
                type="number"
                min="1"
                max="20"
                placeholder="2"
                className="pl-10"
              />
            </div>
            {errors.passengers && (
              <p className="mt-1 text-sm text-destructive">{errors.passengers.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Special Requests (Optional)
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Textarea
                {...register('message')}
                placeholder="Any special requirements, dietary preferences, or additional requests..."
                className="pl-10 min-h-[100px]"
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary"
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Processing...</span>
              </div>
            ) : (
              'Confirm Booking'
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By booking, you agree to our terms and conditions. We'll contact you within 24 hours to confirm your trip details.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;