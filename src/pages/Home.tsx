import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PackagesPreview from '../components/PackagesPreview';
import GalleryPreview from '../components/GalleryPreview';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PackagesPreview />
      <GalleryPreview />
      <Footer />
    </div>
  );
};

export default Home;