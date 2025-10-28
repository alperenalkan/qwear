import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../lib/LanguageContext';
import { images } from '../lib/images';

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  const slides = [
    {
      title: t.hero.slide1Title,
      subtitle: t.hero.slide1Subtitle,
      image: images.hero.slide1,
    },
    {
      title: t.hero.slide2Title,
      subtitle: t.hero.slide2Subtitle,
      image: images.hero.slide2,
    },
    {
      title: t.hero.slide3Title,
      subtitle: t.hero.slide3Subtitle,
      image: images.hero.slide3,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-4xl">
              <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl mb-4">
                {slide.title}
              </h1>
              <p className="text-white/90 text-xl sm:text-2xl">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}



      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-[#B34A15] w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
