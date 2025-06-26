
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Désormais, vous n'êtes plus seul",
      text: "Nous allons au-delà du financement en mettant en exergue vos projets. Grâce à la plateforme Business Plan, vous pouvez désormais créer, structurer et soumettre vos projets en ligne.",
      buttonText: "Créer votre Business Plan"
    },
    {
      title: "Votre garantie",
      text: "Le FOGEC agit comme votre levier de confiance auprès des banques et institutions de microfinance. Chaque projet validé via la plateforme bénéficie d'un cadre structuré, clair et reconnu.",
      buttonText: "Soumettez votre projet"
    },
    {
      title: "Vos idées, notre nation",
      text: "Vos projets ne sont pas de simples intentions : ce sont des vecteurs de croissance nationale. En les structurant avec nous, vous contribuez activement à la transformation économique du pays.",
      buttonText: "Créer votre Business Plan"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative text-white overflow-hidden bg-[#0f4260] duration-500">
      <div className="absolute inset-0 bg-black opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight animate-fade-in">
                {slides[currentSlide].title}
              </h2>
              <p className="text-lg lg:text-xl text-gray-200 leading-relaxed animate-fade-in">
                {slides[currentSlide].text}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="font-semibold px-8 py-3 transition-all duration-200 bg-[#eed020] text-[#0f4260] hover:bg-transparent hover:text-[#eed020] border border-[#eed020]"
              >
                {slides[currentSlide].buttonText}
              </Button>
            </div>

            {/* Slide indicators */}
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className="w-3 h-3 rounded-full transition-all duration-200"
                  style={{
                    backgroundColor: index === currentSlide ? '#eed020' : 'rgba(255, 255, 255, 0.3)'
                  }}
                />
              ))}
            </div>

            
            {/* Navigation arrows */}
            <div className="relative max-w-7xl mx-auto flex justify-between inset-0 items-center pt-5"> 
              <button
                onClick={prevSlide}
                className="transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-200"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-200"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          <div className="relative">
              <img src='/illustration.png' className='w-full h-auto' />
          </div>
        </div>
      </div>

      </section>
  );
};

export default Carousel;
