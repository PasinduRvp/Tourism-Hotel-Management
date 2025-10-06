import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import {
  Calendar,
  MapPin,
  Users,
  DollarSign,
  Camera,
  Utensils,
  Car,
  Send,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Validation schema
const customizationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  travelers: z
    .number()
    .min(1, "At least 1 traveler required")
    .max(20, "Maximum 20 travelers"),
  duration: z.number().min(1, "Minimum 1 day").max(30, "Maximum 30 days"),
  budget: z.enum(["budget", "mid-range", "luxury"], {
    required_error: "Please select a budget range",
  }),
  destinations: z
    .array(z.string())
    .min(1, "Please select at least one destination"),
  activities: z.array(z.string()).min(1, "Please select at least one activity"),
  accommodation: z.enum(["budget", "mid-range", "luxury"], {
    required_error: "Please select accommodation type",
  }),
  transportation: z.enum(["private", "public", "mixed"], {
    required_error: "Please select transportation preference",
  }),
  dietary: z.string().optional(),
  specialRequests: z.string().optional(),
});

// EmailJS Configuration
const EMAILJS_CONFIG = {
  SERVICE_ID: "service_zo4a4xr",
  BOOKING_TEMPLATE_ID: "template_k82rtr2",
  AUTO_REPLY_TEMPLATE_ID: "template_m9bwcdl",
  PUBLIC_KEY: "wRx4YOQ1VVqvhlAKt",
};

// WhatsApp Configuration
const WHATSAPP_CONFIG = {
  PHONE_NUMBER: "+94766500225",
  COMPANY_NAME: "Ceylon Holiday Trip",
};

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

const CustomizePackage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionMethod, setSubmissionMethod] = useState<
    "email" | "whatsapp" | null
  >(null);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
    getValues,
  } = useForm<z.infer<typeof customizationSchema>>({
    resolver: zodResolver(customizationSchema),
    defaultValues: {
      travelers: 2,
      duration: 7,
      destinations: [],
      activities: [],
    },
  });

  const watchedDestinations = watch("destinations");
  const watchedActivities = watch("activities");

  const destinations = [
    { id: "colombo", name: "Colombo", description: "Urban exploration" },
    { id: "kandy", name: "Kandy", description: "Cultural heritage" },
    { id: "sigiriya", name: "Sigiriya", description: "Ancient wonders" },
    { id: "nuwara-eliya", name: "Nuwara Eliya", description: "Hill country" },
    { id: "galle", name: "Galle", description: "Coastal charm" },
    { id: "yala", name: "Yala", description: "Wildlife safari" },
    { id: "ella", name: "Ella", description: "Scenic hikes" },
    { id: "mirissa", name: "Mirissa", description: "Beach relaxation" },
  ];

  const activities = [
    { id: "safari", name: "Wildlife Safari", icon: "🐘" },
    { id: "cultural", name: "Cultural Sites", icon: "🏛️" },
    { id: "beach", name: "Beach Activities", icon: "🏖️" },
    { id: "hiking", name: "Hiking & Trekking", icon: "🥾" },
    { id: "train", name: "Scenic Train Ride", icon: "🚂" },
    { id: "cooking", name: "Cooking Class", icon: "👨‍🍳" },
    { id: "spa", name: "Spa & Wellness", icon: "🧘‍♀️" },
    { id: "photography", name: "Photography Tour", icon: "📸" },
  ];

  const handleDestinationToggle = (destinationId: string) => {
    const current = watchedDestinations || [];
    if (current.includes(destinationId)) {
      setValue(
        "destinations",
        current.filter((id) => id !== destinationId)
      );
    } else {
      setValue("destinations", [...current, destinationId]);
    }
  };

  const handleActivityToggle = (activityId: string) => {
    const current = watchedActivities || [];
    if (current.includes(activityId)) {
      setValue(
        "activities",
        current.filter((id) => id !== activityId)
      );
    } else {
      setValue("activities", [...current, activityId]);
    }
  };

  const getBudgetLabel = (budget: string) => {
    const labels = {
      budget: "Budget ($50-100/day)",
      "mid-range": "Mid-range ($100-200/day)",
      luxury: "Luxury ($200+/day)",
    };
    return labels[budget as keyof typeof labels] || budget;
  };

  const getAccommodationLabel = (acc: string) => {
    const labels = {
      budget: "Budget Hotels/Guesthouses",
      "mid-range": "Mid-range Hotels",
      luxury: "Luxury Resorts",
    };
    return labels[acc as keyof typeof labels] || acc;
  };

  const getTransportationLabel = (trans: string) => {
    const labels = {
      private: "Private Vehicle",
      public: "Public Transport",
      mixed: "Mixed (Private + Public)",
    };
    return labels[trans as keyof typeof labels] || trans;
  };

  const sendAdminNotification = async (data: any) => {
    const selectedDestinations = destinations
      .filter((d) => data.destinations.includes(d.id))
      .map((d) => d.name)
      .join(", ");

    const selectedActivities = activities
      .filter((a) => data.activities.includes(a.id))
      .map((a) => a.name)
      .join(", ");

    const templateParams = {
      to_name: "Ceylon Holiday Trip Team",
      from_name: data.name,
      from_email: data.email,
      reply_to: data.email,
      package_name: "Custom Trip Package",
      package_duration: `${data.duration} days`,
      package_price: getBudgetLabel(data.budget),
      country: selectedDestinations,
      country_flag: "🇱🇰",
      passengers: data.travelers.toString(),
      message: `
CUSTOMIZATION DETAILS:
━━━━━━━━━━━━━━━━━━━━
Phone: ${data.phone || "Not provided"}
Destinations: ${selectedDestinations}
Activities: ${selectedActivities}
Accommodation: ${getAccommodationLabel(data.accommodation)}
Transportation: ${getTransportationLabel(data.transportation)}
Dietary Restrictions: ${data.dietary || "None"}
Special Requests: ${data.specialRequests || "None"}
      `.trim(),
      submission_date: new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      submission_time: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    };

    console.log("📧 Sending admin notification...");
    await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.BOOKING_TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    console.log("✅ Admin notification sent");
  };

  const sendCustomerAutoReply = async (data: any) => {
    const selectedDestinations = destinations
      .filter((d) => data.destinations.includes(d.id))
      .map((d) => d.name)
      .join(", ");

    const selectedActivities = activities
      .filter((a) => data.activities.includes(a.id))
      .map((a) => a.name)
      .join(", ");

    const templateParams = {
      to_name: data.name,
      to_email: data.email,
      from_name: "Ceylon Holiday Trip",
      reply_to: "ceylonholidaytrip@gmail.com",
      customer_name: data.name,
      customer_email: data.email,
      package_name: "Custom Sri Lanka Trip",
      package_duration: `${data.duration} days`,
      package_price: getBudgetLabel(data.budget),
      country: selectedDestinations,
      country_flag: "🇱🇰",
      passengers: data.travelers.toString(),
      message: `
YOUR CUSTOMIZATION:
Destinations: ${selectedDestinations}
Activities: ${selectedActivities}
Accommodation: ${getAccommodationLabel(data.accommodation)}
Transportation: ${getTransportationLabel(data.transportation)}
Dietary: ${data.dietary || "None"}
Special Requests: ${data.specialRequests || "None"}
      `.trim(),
      submission_date: new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      submission_time: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    };

    console.log("📨 Sending customer auto-reply...");
    await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.AUTO_REPLY_TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    console.log("✅ Customer auto-reply sent");
  };

  const sendWhatsAppNotification = (data: any) => {
    const selectedDestinations = destinations
      .filter((d) => data.destinations.includes(d.id))
      .map((d) => d.name)
      .join(", ");

    const selectedActivities = activities
      .filter((a) => data.activities.includes(a.id))
      .map((a) => a.name)
      .join(", ");

    const message = `🌴 *NEW CUSTOM TRIP REQUEST* 🌴

*Customer Details:*
👤 Name: ${data.name}
📧 Email: ${data.email}
📞 Phone: ${data.phone || "Not provided"}

*Trip Preferences:*
👥 Travelers: ${data.travelers}
📅 Duration: ${data.duration} days
💰 Budget: ${getBudgetLabel(data.budget)}

*Destinations:* ${selectedDestinations}

*Activities:* ${selectedActivities}

*Additional Preferences:*
🏨 Accommodation: ${getAccommodationLabel(data.accommodation)}
🚗 Transportation: ${getTransportationLabel(data.transportation)}
🍽️ Dietary: ${data.dietary || "None"}
💫 Special Requests: ${data.specialRequests || "None"}

*Submitted on:* ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}

Please check the customer's email for follow-up.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.PHONE_NUMBER}?text=${encodedMessage}`;

    console.log("📱 Opening WhatsApp...");
    window.open(whatsappUrl, "_blank");
  };

  const handleEmailSubmit = async (data: any) => {
    setIsSubmitting(true);
    setSubmissionMethod("email");

    try {
      console.log("🚀 Starting email process...");

      // Send admin notification
      await sendAdminNotification(data);

      // Send customer auto-reply
      await sendCustomerAutoReply(data);

      console.log("🎉 Email process completed successfully!");

      setIsSubmitted(true);
      reset();
      toast({
        title: "Request Submitted via Email!",
        description:
          "Check your email for confirmation. We'll contact you within 24 hours.",
      });
    } catch (error: any) {
      console.error("❌ Email submission error:", error);
      toast({
        title: "Email Failed",
        description:
          "Failed to send email. Please try WhatsApp or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      setSubmissionMethod(null);
    }
  };

  const handleWhatsAppSubmit = async (data: any) => {
    setIsSubmitting(true);
    setSubmissionMethod("whatsapp");

    try {
      console.log("📱 Starting WhatsApp process...");

      // Send WhatsApp notification
      sendWhatsAppNotification(data);

      console.log("🎉 WhatsApp process completed successfully!");

      setIsSubmitted(true);
      reset();
      toast({
        title: "Request Submitted via WhatsApp!",
        description:
          "We've received your request and will contact you within 24 hours.",
      });
    } catch (error: any) {
      console.error("❌ WhatsApp submission error:", error);
      toast({
        title: "WhatsApp Failed",
        description:
          "Failed to open WhatsApp. Please try email or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      setSubmissionMethod(null);
    }
  };

  const onSubmit = (data: any) => {
    // This is now handled by individual button handlers
    // Keeping this for form validation
    return data;
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="pt-20 pb-12 bg-gradient-to-r from-[#d4af37] to-[#e53e3e]">
          <div className="container mx-auto px-4 text-center">
            <div className="animate-fade-in">
              <CheckCircle className="h-24 w-24 text-white mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
                Request Submitted!
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                {submissionMethod === "email"
                  ? "Thank you for your customization request! Check your email for confirmation. Our travel experts will review your preferences and contact you within 24 hours with a personalized itinerary."
                  : "Thank you for your customization request! We've received your details via WhatsApp and our travel experts will contact you within 24 hours with a personalized itinerary."}
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setSubmissionMethod(null);
                }}
                className="mt-8 bg-white text-[#d4af37] px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors"
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

      {/* Hero Section - Updated with gold to red gradient */}
      <section className="pt-32 pb-12 bg-gradient-to-r from-[#d4af37] to-[#e53e3e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins animate-fade-in text-white">
            Customize Your Trip
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in">
            Tell us about your dream Sri Lankan adventure, and we'll create a
            personalized itinerary just for you.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Information */}
            <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in border border-amber-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center font-poppins">
                <Users className="h-6 w-6 mr-3 text-[#d4af37]" />
                Personal Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg  focus:border-transparent transition-colors bg-white text-gray-900"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-transparent transition-colors bg-white text-gray-900"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-transparent transition-colors bg-white text-gray-900"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Travelers *
                  </label>
                  <input
                    {...register("travelers", { valueAsNumber: true })}
                    type="number"
                    min="1"
                    max="20"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg  focus:border-transparent transition-colors bg-white text-gray-900"
                  />
                  {errors.travelers && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.travelers.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Trip Preferences */}
            <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in border border-amber-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center font-poppins">
                <Calendar className="h-6 w-6 mr-3 text-[#e53e3e]" />
                Trip Preferences
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Trip Duration (Days) *
                  </label>
                  <input
                    {...register("duration", { valueAsNumber: true })}
                    type="number"
                    min="1"
                    max="30"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg  focus:border-transparent transition-colors bg-white text-gray-900"
                  />
                  {errors.duration && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.duration.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range *
                  </label>
                  <select
                    {...register("budget")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg  focus:border-transparent transition-colors bg-white text-gray-900"
                  >
                    <option value="">Select budget</option>
                    <option value="budget">Budget ($50-100/day)</option>
                    <option value="mid-range">Mid-range ($100-200/day)</option>
                    <option value="luxury">Luxury ($200+/day)</option>
                  </select>
                  {errors.budget && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.budget.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Destinations */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Preferred Destinations *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {destinations.map((destination) => (
                    <button
                      key={destination.id}
                      type="button"
                      onClick={() => handleDestinationToggle(destination.id)}
                      className={`p-4 border-2 rounded-lg text-left transition-all hover:scale-105 ${
                        watchedDestinations?.includes(destination.id)
                          ? "border-orange-500 bg-amber-50 text-orange-900"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <h4 className="font-semibold text-sm">
                        {destination.name}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1">
                        {destination.description}
                      </p>
                    </button>
                  ))}
                </div>
                {errors.destinations && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.destinations.message}
                  </p>
                )}
              </div>

              {/* Activities */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Preferred Activities *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {activities.map((activity) => (
                    <button
                      key={activity.id}
                      type="button"
                      onClick={() => handleActivityToggle(activity.id)}
                      className={`p-4 border-2 rounded-lg text-center transition-all hover:scale-105 ${
                        watchedActivities?.includes(activity.id)
                          ? "border-orange-500 bg-amber-50 text-orange-900"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <div className="text-2xl mb-2">{activity.icon}</div>
                      <h4 className="font-semibold text-sm">{activity.name}</h4>
                    </button>
                  ))}
                </div>
                {errors.activities && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.activities.message}
                  </p>
                )}
              </div>
            </div>

            {/* Accommodation & Transportation */}
            <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in border border-amber-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center font-poppins">
                <Car className="h-6 w-6 mr-3 text-[#e53e3e]" />
                Accommodation & Transportation
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Accommodation Type *
                  </label>
                  <select
                    {...register("accommodation")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-colors bg-white text-gray-900"
                  >
                    <option value="">Select accommodation</option>
                    <option value="budget">Budget Hotels/Guesthouses</option>
                    <option value="mid-range">Mid-range Hotels</option>
                    <option value="luxury">Luxury Resorts</option>
                  </select>
                  {errors.accommodation && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.accommodation.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Transportation Preference *
                  </label>
                  <select
                    {...register("transportation")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-colors bg-white text-gray-900"
                  >
                    <option value="">Select transportation</option>
                    <option value="private">Private Vehicle</option>
                    <option value="public">Public Transport</option>
                    <option value="mixed">Mixed (Private + Public)</option>
                  </select>
                  {errors.transportation && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.transportation.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in border border-amber-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center font-poppins">
                <Utensils className="h-6 w-6 mr-3 text-gray-600" />
                Additional Information
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dietary Restrictions
                  </label>
                  <input
                    {...register("dietary")}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-colors bg-white text-gray-900"
                    placeholder="e.g., vegetarian, gluten-free, allergies"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests or Notes
                  </label>
                  <textarea
                    {...register("specialRequests")}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-colors resize-none bg-white text-gray-900"
                    placeholder="Any special requirements, accessibility needs, or additional preferences..."
                  />
                </div>
              </div>
            </div>

            <p className="mt-4 text-m text-gray-600 text-center">
              Choose your preferred method to submit your customization request.
              We'll get back to you within 24 hours.
            </p>

            {/* Submit Buttons */}
            <div className="text-center animate-fade-in space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="button"
                  onClick={handleSubmit(handleEmailSubmit)}
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-[#d4af37] to-amber-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-amber-500 hover:to-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 hover:scale-105 flex-1 max-w-md"
                >
                  {isSubmitting && submissionMethod === "email" ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send via Email</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleSubmit(handleWhatsAppSubmit)}
                  disabled={isSubmitting}
                  className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 hover:scale-105 flex-1 max-w-md"
                >
                  {isSubmitting && submissionMethod === "whatsapp" ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <MessageCircle className="h-5 w-5" />
                      <span>Send via WhatsApp</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomizePackage;
