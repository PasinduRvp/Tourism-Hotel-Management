import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Award, Heart, Users, Globe, Star, MapPin, Phone, Mail } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#d4af37] to-[#e53e3e] bg-clip-text text-transparent">
                CEYLON HOLIDAY TRIP
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover the pearl of the Indian Ocean with our expert guidance and 
                passionate commitment to showcasing Sri Lanka's natural beauty and rich heritage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Founded by passionate travel enthusiasts, CEYLON HOLIDAY TRIP was born from a deep 
                  passion for sharing the incredible diversity and beauty of our island nation. 
                  With years of experience in sustainable tourism, we create authentic 
                  experiences that benefit both travelers and local communities.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our mission is to provide unforgettable journeys that respect local culture, 
                  protect the environment, and create meaningful connections between visitors 
                  and the warm-hearted people of Sri Lanka.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  From the ancient kingdoms of the Cultural Triangle to the pristine beaches 
                  of the south coast, from the misty tea plantations of the hill country to 
                  the wildlife-rich national parks, we showcase the very best of what Sri Lanka offers.
                </p>
              </div>
              
              {/* Simple Floating Image */}
              <div className="flex justify-center">
                <div className="animate-float">
                  <img 
                    src="/sl.png"
                    alt="Sri Lankan landscape"
                    className="rounded-2xl shadow-2xl border-4 border-[#d4af37]/20"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#d4af37] to-[#e53e3e] bg-clip-text text-transparent">
                Our Values
              </h2>
              <p className="text-xl text-gray-600">
                What drives us every day
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center border border-amber-200 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-amber-50">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#e53e3e] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-gray-900">Passion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We are passionate about Sri Lanka and love sharing its beauty with the world.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border border-amber-200 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-orange-50">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#e53e3e] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-gray-900">Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We strive for excellence in every aspect of our service and experiences.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border border-amber-200 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-red-50">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#e53e3e] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-gray-900">Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We support local communities and promote sustainable tourism practices.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border border-amber-200 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-amber-50">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#e53e3e] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-gray-900">Sustainability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We are committed to protecting Sri Lanka's natural beauty for future generations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#d4af37] to-[#e53e3e] bg-clip-text text-transparent">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The passionate individuals dedicated to making your Sri Lankan journey unforgettable
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Founder Card */}
              <Card className="border border-amber-200 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 overflow-hidden bg-gradient-to-br from-white to-amber-50">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <div className="flex-shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
                        alt="Founder"
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Mr
                      </h3>
                      <p className="text-[#e53e3e] font-medium mb-3">Founder & CEO</p>
                      <div className="flex items-center justify-center md:justify-start mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-[#d4af37] fill-current" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 ml-2">5.0 Rating</span>
                      </div>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        With years of experience in the UK tourism industry, Mr. leads his travel agency with passion and professionalism. 
                        His agency specializes in organizing unforgettable tours to Sri Lanka, 
                        helping travelers from the UK experience the island's breathtaking landscapes, vibrant culture, and warm hospitality.
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        <span className="bg-[#d4af37]/20 text-[#e53e3e] px-3 py-1 rounded-full text-sm font-medium border border-[#d4af37]/30">
                          Travel Agency Director
                        </span>
                        <span className="bg-[#e53e3e]/20 text-[#e53e3e] px-3 py-1 rounded-full text-sm font-medium border border-[#e53e3e]/30">
                          Tourism Consultant
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-amber-50 px-8 py-4 border-t border-amber-200">
                  <div className="flex items-center justify-center md:justify-start space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-1 text-[#e53e3e]" />
                      <span>+94 77 123 4567</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-1 text-[#e53e3e]" />
                      <span>a@ceylonholiday.com</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Operations Manager Card */}
              <Card className="border border-amber-200 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 overflow-hidden bg-gradient-to-br from-white to-orange-50">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <div className="flex-shrink-0">
                      <img 
                        src="/mr_wimukthi.jpg"
                        alt="Sri Lanka Operations Manager"
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Mr.Vimukthi ( HESHU )
                      </h3>
                      <p className="text-[#e53e3e] font-medium mb-3">Sri Lanka Operations Manager</p>
                      <div className="flex items-center justify-center md:justify-start mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-[#d4af37] fill-current" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 ml-2">5.0 Rating</span>
                      </div>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        With a deep understanding of Sri Lanka's diverse culture, heritage, and destinations, 
                        Mr. Vimukthi manages all ground operations for the agency within Sri Lanka. 
                        He coordinates with local guides, hotels, and transport services to 
                        deliver exceptional experiences for tourists arriving through the agency.
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        <span className="bg-[#d4af37]/20 text-[#e53e3e] px-3 py-1 rounded-full text-sm font-medium border border-[#d4af37]/30">
                          Tourism Expert
                        </span>
                        <span className="bg-[#e53e3e]/20 text-[#e53e3e] px-3 py-1 rounded-full text-sm font-medium border border-[#e53e3e]/30">
                          Local Operations Coordinator
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-orange-50 px-8 py-4 border-t border-amber-200">
                  <div className="flex items-center justify-center md:justify-start space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-1 text-[#e53e3e]" />
                      <span>+94 75 770 3941</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-1 text-[#e53e3e]" />
                      <span>vimukthi@ceylonholiday.com</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

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

export default About;
