import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Wand2 } from 'lucide-react';

const Customizer = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <Wand2 className="w-6 h-6 text-primary mr-2" />
                <span className="text-primary font-medium">Trip Customizer</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-poppins">
                Plan Your Perfect Journey
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Create a personalized Sri Lankan adventure tailored to your interests, 
                budget, and travel style.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="tourism-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-poppins text-center">
                    Coming Soon
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center py-12">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <Wand2 className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 font-poppins">
                    Trip Customizer in Development
                  </h3>
                  <p className="text-muted-foreground mb-8 max-w-2xl">
                    We're building an amazing trip customization tool that will allow you to 
                    create your perfect Sri Lankan adventure. Choose your dates, preferences, 
                    activities, and destinations all in one place.
                  </p>
                  <div className="space-y-4">
                    <Button 
                      onClick={() => window.location.href = 'mailto:info@srilankatourism.com?subject=Custom Trip Inquiry'}
                      className="btn-primary mr-4"
                    >
                      Contact Us for Custom Planning
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      In the meantime, reach out to us directly and we'll help you plan 
                      the perfect trip manually.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Customizer;