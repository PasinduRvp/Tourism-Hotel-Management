import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    const mailtoLink = `mailto:info@ceylonholiday.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `*New Contact Request*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Subject:* ${formData.subject}%0A%0A*Message:*%0A${formData.message}`;
    const whatsappLink = `https://wa.me/94771234567?text=${whatsappMessage}`;
    window.open(whatsappLink, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+94 77 123 4567',
      description: 'Mon to Sun 9am to 8pm'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@ceylonholiday.com',
      description: 'Send us your query anytime!'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '123 Galle Road, Colombo 03',
      description: 'Sri Lanka'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Monday - Sunday',
      description: '9:00 AM - 8:00 PM'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-100 via-emerald-100 to-blue-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Contact Us
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get in touch with our travel experts. We're here to help you plan your perfect Sri Lankan adventure.
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
                <h2 className="text-4xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Get in Touch</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Have questions about our packages? Need help customizing your trip? 
                  Our team is here to assist you every step of the way.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-900 font-medium">{item.details}</p>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Response Note */}
                <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">Quick Response Guarantee</h4>
                  <p className="text-blue-800 text-sm">
                    We typically respond to all inquiries within 2 hours during business hours. 
                    Your perfect Sri Lankan adventure is just a message away!
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="border border-gray-200 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
                  <CardTitle className="text-2xl flex items-center">
                    <Send className="w-6 h-6 mr-2" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="+XX XX XXX XXXX"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        >
                          <option value="">Select a subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Package Customization">Package Customization</option>
                          <option value="Booking Assistance">Booking Assistance</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                        placeholder="Tell us about your dream Sri Lankan adventure..."
                      />
                    </div>

                    {/* Dual Submit Buttons */}
                    <div className="grid md:grid-cols-2 gap-4 pt-4">
                      <Button
                        type="button"
                        onClick={handleEmailSubmit}
                        className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                        disabled={!formData.name || !formData.email || !formData.subject || !formData.message}
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        Send via Email
                      </Button>

                      <Button
                        type="button"
                        onClick={handleWhatsAppSubmit}
                        className="w-full py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                        disabled={!formData.name || !formData.email || !formData.subject || !formData.message}
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Send via WhatsApp
                      </Button>
                    </div>

                    <p className="text-xs text-gray-500 text-center mt-4">
                      * Required fields. We respect your privacy and will never share your information.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Visit Our Office</h2>
              <p className="text-gray-900 max-w-2xl mx-auto">
                Located in the heart of Colombo, our office is easily accessible and we'd love to meet you in person.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              {/* Simple Map Placeholder - You can replace this with an actual map component */}
              <div className="h-96 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Location</h3>
                  <p className="text-gray-600 mb-2">123 Galle Road, Colombo 03</p>
                  <p className="text-gray-600">Sri Lanka</p>
                  <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;