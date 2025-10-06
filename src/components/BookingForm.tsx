import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { User, Mail, Users, MessageSquare, CheckCircle, Flag, Send, MessageCircle, AlertCircle } from 'lucide-react';
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
  { code: 'LK', name: 'Sri Lanka', flag: '🇱🇰' }
].sort((a, b) => a.name.localeCompare(b.name));

const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_zo4a4xr',
  BOOKING_TEMPLATE_ID: 'template_k82rtr2',
  AUTO_REPLY_TEMPLATE_ID: 'template_m9bwcdl',
  PUBLIC_KEY: 'wRx4YOQ1VVqvhlAKt'
};

emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

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

  const sendBookingNotification = async (data: BookingFormData, selectedCountry: any) => {
    const templateParams = {
      to_name: 'Ceylon Holiday Trip Team',
      from_name: data.name,
      from_email: data.email,
      reply_to: data.email,
      package_name: packageName,
      package_duration: packageDuration,
      package_price: packagePrice,
      country: selectedCountry.name,
      country_flag: selectedCountry.flag,
      passengers: data.passengers.toString(),
      message: data.message || 'No special requests',
      submission_date: new Date().toLocaleDateString('en-US', { 
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
      }),
      submission_time: new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', minute: '2-digit', hour12: true 
      })
    };

    console.log('📧 Sending booking notification to admin...');
    console.log('Template params:', templateParams);

    try {
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.BOOKING_TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      console.log('✅ Booking notification sent successfully:', result);
      return result;
    } catch (error: any) {
      console.error('❌ Booking notification error:', error);
      throw error;
    }
  };

  const sendAutoReplyToCustomer = async (data: BookingFormData, selectedCountry: any) => {
    const templateParams = {
      to_name: data.name,
      to_email: data.email,
      from_name: 'Ceylon Holiday Trip',
      customer_name: data.name,
      package_name: packageName,
      package_duration: packageDuration,
      package_price: packagePrice,
      country: selectedCountry.name,
      passengers: data.passengers.toString(),
      message: data.message || 'No special requests',
      submission_date: new Date().toLocaleDateString('en-US', { 
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
      })
    };

    console.log('📨 Sending auto-reply to customer...');
    console.log('Auto-reply params:', templateParams);

    try {
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.AUTO_REPLY_TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      console.log('✅ Auto-reply sent successfully:', result);
      return result;
    } catch (error: any) {
      console.error('❌ Auto-reply error:', error);
      throw error;
    }
  };

  const handleEmailSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    try {
      const selectedCountry = countries.find(c => c.code === data.country);
      if (!selectedCountry) {
        throw new Error('Please select a valid country');
      }

      console.log('🚀 Starting dual email process...');

      await sendBookingNotification(data, selectedCountry);
      console.log('✅ Step 1 complete: Admin notification sent');

      await sendAutoReplyToCustomer(data, selectedCountry);
      console.log('✅ Step 2 complete: Customer auto-reply sent');

      console.log('🎉 Both emails sent successfully!');

      setIsSubmitted(true);
      toast({
        title: "Booking Submitted Successfully!",
        description: "We've received your booking and sent you a confirmation email.",
      });
      
      reset();
    } catch (error: any) {
      console.error('❌ Email submission failed:', error);
      
      let errorMessage = 'Failed to send email. Please try WhatsApp instead.';
      
      if (error?.text?.includes('template')) {
        errorMessage = 'Email template error. Please contact support or use WhatsApp.';
      } else if (error?.status === 400) {
        errorMessage = 'Invalid email request. Please check all fields.';
      } else if (error?.status === 401 || error?.status === 403) {
        errorMessage = 'Email service authentication failed. Please use WhatsApp.';
      } else if (error?.status === 500) {
        errorMessage = 'Email service temporarily unavailable. Please use WhatsApp.';
      } else if (!navigator.onLine) {
        errorMessage = 'No internet connection. Please check your connection.';
      }
      
      toast({
        title: "Email Error",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    try {
      const selectedCountry = countries.find(c => c.code === data.country);
      if (!selectedCountry) throw new Error('Please select a valid country');

      const msg = `*📦 Booking Inquiry*%0A%0A*Package:* ${packageName}%0A*Duration:* ${packageDuration}%0A*Price:* ${packagePrice}%0A%0A*Name:* ${data.name}%0A*Email:* ${data.email}%0A*Country:* ${selectedCountry.flag} ${selectedCountry.name}%0A*Passengers:* ${data.passengers}%0A%0A*Message:*%0A${data.message || 'No special requests'}`;
      
      window.open(`https://wa.me/94771234567?text=${msg}`, '_blank');
      setIsSubmitted(true);
      toast({
        title: "Opening WhatsApp",
        description: "Complete submission via WhatsApp.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="border-2 border-green-200 shadow-lg ">
        <CardContent className="pt-8 pb-8">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="rounded-full bg-green-100 p-4">
                <CheckCircle className="w-16 h-16 text-green-600" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-green-700">Booking Submitted!</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Thank you for choosing <strong>{packageName}</strong>. Check your email for confirmation. We'll contact you within 24 hours.
              </p>
            </div>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            >
              Book Another Package
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-xl rounded-lg overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
        <CardTitle className="text-2xl font-bold flex items-center text-gray-800">
          <User className="w-7 h-7 mr-3 text-blue-600" />
          Book {packageName}
        </CardTitle>
        <div className="space-y-1 text-sm text-gray-600 mt-3">
          <p><strong>Duration:</strong> {packageDuration}</p>
          <p><strong>Price:</strong> {packagePrice} per person</p>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
            <div className="relative">
              <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              <Input
                {...register('name')}
                type="text"
                placeholder="John Doe"
                className="pl-11 py-6 border-2"
              />
            </div>
            {errors.name && (
              <p className="mt-1.5 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />{errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              <Input
                {...register('email')}
                type="email"
                placeholder="john@example.com"
                className="pl-11 py-6 border-2"
              />
            </div>
            {errors.email && (
              <p className="mt-1.5 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />{errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Country *</label>
            <Select onValueChange={(value) => setValue('country', value)}>
              <SelectTrigger className="w-full py-6 border-2">
                <div className="flex items-center">
                  {watchedCountry ? (
                    <>
                      <span className="text-2xl mr-3">{countries.find(c => c.code === watchedCountry)?.flag}</span>
                      <span>{countries.find(c => c.code === watchedCountry)?.name}</span>
                    </>
                  ) : (
                    <>
                      <Flag className="w-5 h-5 mr-2 text-gray-400" />
                      <SelectValue placeholder="Select country" />
                    </>
                  )}
                </div>
              </SelectTrigger>
              <SelectContent>
                <div className="p-2">
                  <Input
                    placeholder="Search..."
                    value={countrySearch}
                    onChange={(e) => setCountrySearch(e.target.value)}
                  />
                </div>
                {filteredCountries.map((country) => (
                  <SelectItem key={country.code} value={country.code}>
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{country.flag}</span>
                      <span>{country.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.country && (
              <p className="mt-1.5 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />{errors.country.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Passengers *</label>
            <div className="relative">
              <Users className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              <Input
                {...register('passengers', { valueAsNumber: true })}
                type="number"
                min="1"
                max="20"
                placeholder="2"
                className="pl-11 py-6 border-2"
              />
            </div>
            {errors.passengers && (
              <p className="mt-1.5 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />{errors.passengers.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Special Requests</label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Textarea
                {...register('message')}
                placeholder="Any special requirements..."
                className="pl-11 min-h-[120px] border-2 resize-none"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 pt-4">
            <Button
              type="button"
              onClick={handleSubmit(handleEmailSubmit)}
              disabled={isSubmitting}
              className="w-full py-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Sending Emails...</span>
                </div>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send via Email
                </>
              )}
            </Button>

            <Button
              type="button"
              onClick={handleSubmit(handleWhatsAppSubmit)}
              disabled={isSubmitting}
              className="w-full py-6 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Opening...</span>
                </div>
              ) : (
                <>
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send via WhatsApp
                </>
              )}
            </Button>
          </div>

          <p className="text-xs text-gray-500 text-center pt-2">
            By submitting, you agree to our terms. We'll contact you within 24 hours.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingForm;