"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  image: string;
  title: string;
  description: string;
}

interface HeroCarouselProps {
  slides: Slide[];
}

export default function HeroCarousel({ slides }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goToNextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const goToPrevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToNextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="relative h-[700px] overflow-hidden">
      {/* Carousel Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover transform transition-transform duration-700"
              style={{
                transform: index === currentSlide ? "scale(1)" : "scale(1.1)",
              }}
            />
            {/* Dark Overlay with gradient */}
            <div className="absolute inset-0 bg-linear-to-r from-black/50 to-black/30"></div>

            {/* Content Card - Animated */}
            <div
              className={`absolute left-8 sm:left-16 top-1/3 glass-effect rounded-xl p-8 shadow-2xl max-w-md transform transition-all duration-700 delay-300 ${
                index === currentSlide
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <div className="w-16 h-1 bg-linear-to-r from-green-600 to-teal-500 mb-4 rounded-full"></div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
                <span className="text-gradient">{slide.title}</span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {slide.description}
              </p>
              <button className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden group">
                <span className="relative z-10">LEARN MORE</span>
                <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        disabled={isTransitioning}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center z-30 transition-all duration-300 hover:scale-110 hover:shadow-xl disabled:opacity-50 group"
      >
        <ChevronLeft className="w-7 h-7 text-gray-700 group-hover:text-green-600 transition-colors" />
      </button>
      <button
        onClick={goToNextSlide}
        disabled={isTransitioning}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center z-30 transition-all duration-300 hover:scale-110 hover:shadow-xl disabled:opacity-50 group"
      >
        <ChevronRight className="w-7 h-7 text-gray-700 group-hover:text-green-600 transition-colors" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentSlide(index);
                setTimeout(() => setIsTransitioning(false), 500);
              }
            }}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? "w-12 bg-white"
                : "w-2 bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
