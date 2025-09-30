import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary to-accent">
      <div className="text-center text-white">
        <h1 className="mb-4 text-4xl font-bold font-poppins">Sri Lanka Tourism Portfolio</h1>
        <p className="text-xl mb-8 opacity-90">Discover the Pearl of the Indian Ocean</p>
        <Button onClick={() => navigate('/')} className="btn-hero">
          Enter Site
        </Button>
      </div>
    </div>
  );
};

export default Index;
