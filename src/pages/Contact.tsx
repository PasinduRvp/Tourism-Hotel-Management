import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  User,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsAppSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const whatsappMessage = `*📞 Contact Request - Ceylon Holiday Trip*%0A%0A*Name:* ${
        formData.name
      }%0A*Email:* ${formData.email}%0A*Phone:* ${
        formData.phone || "Not provided"
      }%0A*Subject:* ${formData.subject}%0A%0A*Message:*%0A${
        formData.message
      }%0A%0A*Submitted via Website*`;
      const whatsappLink = `https://wa.me/94771234567?text=${whatsappMessage}`;

      window.open(whatsappLink, "_blank");

      // Reset form after successful WhatsApp opening
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error("WhatsApp submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      details: "+94 77 123 4567",
      description: "Mon to Sun 9am to 8pm",
      link: "https://wa.me/94771234567",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@ceylonholiday.com",
      description: "Send us your query anytime!",
      link: "mailto:ceylonholidaytrip@gmail.com",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Galle Road, Colombo 03",
      description: "Sri Lanka",
      link: "https://maps.google.com/?q=123+Galle+Road,+Colombo+03,+Sri+Lanka",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Monday - Sunday",
      description: "9:00 AM - 8:00 PM",
    },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
            <div className="container mx-auto px-4">
              <Card className="max-w-2xl mx-auto border-2 border-[#d4af37] shadow-2xl bg-gradient-to-br from-white to-amber-50">
                <CardContent className="pt-12 pb-12">
                  <div className="text-center space-y-6">
                    <div className="flex justify-center">
                      <div className="rounded-full bg-[#d4af37]/20 p-4 border-4 border-[#d4af37]/30">
                        <CheckCircle className="w-16 h-16 text-[#e53e3e]" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-[#e53e3e]">
                        Opening WhatsApp!
                      </h3>
                      <p className="text-gray-600 max-w-md mx-auto">
                        Thank you for contacting Ceylon Holiday Trip. We're
                        opening WhatsApp for you to complete your message. Our
                        team will respond within 2 hours during business hours.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-gradient-to-r from-[#d4af37] to-[#e53e3e] hover:from-[#e53e3e] hover:to-[#d4af37] text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Send Another Message
                      </Button>
                      <Button
                        onClick={() => (window.location.href = "/")}
                        variant="outline"
                        className="px-8 py-3 border-[#e53e3e] text-[#e53e3e] hover:bg-[#e53e3e] hover:text-white transition-all duration-300"
                      >
                        Back to Home
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#d4af37] to-[#e53e3e] bg-clip-text text-transparent">
                Contact Us
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get in touch with our travel experts via WhatsApp. We're here to
                help you plan your perfect Sri Lankan adventure.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-[#d4af37] to-[#e53e3e] bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Have questions about our packages? Need help customizing your
                  trip? Message us directly on WhatsApp for the fastest
                  response!
                </p>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-start space-x-4 p-4 rounded-lg border border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                        item.link ? "hover:bg-amber-50 cursor-pointer" : "bg-gradient-to-br from-white to-amber-50"
                      }`}
                      onClick={() =>
                        item.link && window.open(item.link, "_blank")
                      }
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-[#d4af37] to-[#e53e3e] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-900 font-medium">
                          {item.details}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp Benefits */}
                <div className="mt-8 p-6 bg-gradient-to-br from-[#d4af37]/20 to-[#e53e3e]/20 rounded-lg border border-[#d4af37]/30 shadow-lg">
                  <h4 className="font-semibold text-[#e53e3e] mb-2 flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Why WhatsApp?
                  </h4>
                  <ul className="text-[#e53e3e] text-sm space-y-1">
                    <li>• Instant responses during business hours</li>
                    <li>• Share photos and documents easily</li>
                    <li>• Quick updates about your booking</li>
                    <li>• 24/7 accessibility</li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="border border-amber-200 shadow-2xl hover:shadow-3xl rounded-lg overflow-hidden transition-all duration-300 bg-gradient-to-br from-white to-amber-50">
                <CardHeader className="bg-gradient-to-r from-[#d4af37] to-[#e53e3e] text-white rounded-t-lg">
                  <CardTitle className="text-2xl flex items-center">
                    <MessageCircle className="w-6 h-6 mr-2" />
                    Message us on WhatsApp
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full pl-11 pr-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-colors bg-white/80"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-11 pr-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-colors bg-white/80"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-11 pr-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-colors bg-white/80"
                            placeholder="+94 XX XXX XXXX"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-colors bg-white/80"
                        >
                          <option value="">Select a subject</option>
                          <option value="General Inquiry">
                            General Inquiry
                          </option>
                          <option value="Package Customization">
                            Package Customization
                          </option>
                          <option value="Booking Assistance">
                            Booking Assistance
                          </option>
                          <option value="Price Inquiry">Price Inquiry</option>
                          <option value="Custom Tour">
                            Custom Tour Request
                          </option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-colors resize-vertical bg-white/80"
                        placeholder="Tell us about your dream Sri Lankan adventure..."
                      />
                    </div>

                    {/* WhatsApp Submit Button */}
                    <div className="pt-4">
                      <Button
                        type="button"
                        onClick={handleWhatsAppSubmit}
                        disabled={
                          isSubmitting ||
                          !formData.name ||
                          !formData.email ||
                          !formData.subject ||
                          !formData.message
                        }
                        className="w-full py-4 bg-gradient-to-r from-[#d4af37] to-[#e53e3e] hover:from-[#e53e3e] hover:to-[#d4af37] text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-lg border-2 border-[#d4af37]/30"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center space-x-2">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                            <span>Opening WhatsApp...</span>
                          </div>
                        ) : (
                          <>
                            <MessageCircle className="w-6 h-6 mr-2" />
                            Continue on WhatsApp
                          </>
                        )}
                      </Button>
                    </div>

                    <p className="text-xs text-gray-500 text-center mt-4">
                      * Required fields. We'll open WhatsApp with your
                      pre-filled message for you to send.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#d4af37] to-[#e53e3e] bg-clip-text text-transparent">
                Visit Our Office
              </h2>
              <p className="text-gray-900 max-w-2xl mx-auto">
                Located in the heart of Colombo, our office is easily accessible
                and we'd love to meet you in person.
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl hover:shadow-3xl overflow-hidden border border-amber-200 transition-all duration-300">
              <div className="h-96 bg-gradient-to-br from-[#d4af37]/20 to-[#e53e3e]/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-[#e53e3e] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Our Location
                  </h3>
                  <p className="text-gray-600 mb-2">
                    123 Galle Road, Colombo 03
                  </p>
                  <p className="text-gray-600">Sri Lanka</p>
                  <Button
                    className="mt-4 bg-gradient-to-r from-[#d4af37] to-[#e53e3e] hover:from-[#e53e3e] hover:to-[#d4af37] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() =>
                      window.open(
                        "https://maps.google.com/?q=123+Galle+Road,+Colombo+03,+Sri+Lanka",
                        "_blank"
                      )
                    }
                  >
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>
        {`
          .shadow-3xl {
            box-shadow: 0 25px 50px -12px rgba(212, 175, 55, 0.25),
                        0 10px 30px -10px rgba(229, 62, 62, 0.15);
          }

          .hover\\:shadow-3xl:hover {
            box-shadow: 0 35px 60px -15px rgba(212, 175, 55, 0.3),
                        0 20px 40px -15px rgba(229, 62, 62, 0.2),
                        0 0 30px -5px rgba(212, 175, 55, 0.1);
          }
        `}
      </style>
    </div>
  );
};

export default Contact;