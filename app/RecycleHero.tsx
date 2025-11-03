"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function RecycleHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1920&q=80",
      title: "Recycle for a Better Tomorrow",
      description:
        "Join us in making the world greener by recycling waste responsibly.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1920&q=80",
      title: "Sustainable Solutions",
      description:
        "We provide sustainable waste management solutions for businesses.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=80",
      title: "Protect the Environment",
      description:
        "Our mission is to minimize environmental impact through recycling.",
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      goToNextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  // Carousel navigation handlers
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
    <div className="min-h-screen bg-gray-100">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }

        .hover-lift {
          transition: all 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .gradient-overlay {
          background: linear-gradient(
            135deg,
            rgba(20, 184, 166, 0.9) 0%,
            rgba(13, 148, 136, 0.8) 100%
          );
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .text-gradient {
          background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .shimmer-effect {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
        }

        .icon-bounce:hover {
          animation: pulse 0.6s ease-in-out;
        }

        .stagger-1 {
          animation-delay: 0.1s;
        }
        .stagger-2 {
          animation-delay: 0.2s;
        }
        .stagger-3 {
          animation-delay: 0.3s;
        }
        .stagger-4 {
          animation-delay: 0.4s;
        }
        .stagger-5 {
          animation-delay: 0.5s;
        }
        .stagger-6 {
          animation-delay: 0.6s;
        }
      `}</style>

      {/* Navigation */}
      <nav className="bg-white shadow-lg relative z-50 animate-fade-in-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-32 h-16 flex items-center justify-center">
                <div className="text-2xl font-bold text-gradient">RECYCLE</div>
              </div>
            </div>
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-green-600 font-medium relative group">
                HOME
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform origin-left"></span>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-600 transition-all duration-300 relative group"
              >
                ABOUT
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-600 transition-all duration-300 relative group"
              >
                SERVICES
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-600 transition-all duration-300 relative group"
              >
                ELEMENTS
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-600 transition-all duration-300 relative group"
              >
                BLOG
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-600 transition-all duration-300 relative group"
              >
                CONTACT
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden group">
                <span className="relative z-10">Search Engine</span>
                <span className="absolute inset-0 bg-green-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Enhanced Carousel */}
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
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>

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

      {/* Three Service Cards */}
      <div className="relative -mt-32 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shadow-2xl">
            {/* Industrial Card */}
            <div className="bg-linear-to-br from-teal-500 to-teal-600 text-white p-8 hover:from-teal-600 hover:to-teal-700 transition-all duration-300 rounded-xl transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
              <h3 className="text-xl font-bold mb-2">INDUSTRIAL</h3>
              <p className="italic text-lg mb-4 opacity-90">Waste Management</p>
              <p className="text-sm leading-relaxed opacity-90">
                We offer complete industrial waste management services, from
                collection to recycling.
              </p>
            </div>
            {/* Sustainable Card */}
            <div className="bg-white p-8 hover:bg-gray-50 transition-all duration-300 rounded-xl transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer border-2 border-transparent hover:border-teal-500">
              <h3 className="text-xl font-bold text-teal-600 mb-2">
                SUSTAINABLE
              </h3>
              <p className="italic text-lg text-gray-600 mb-4">
                Business Solutions
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                We help business adopt sustainable and environmentally
                responsible recycling practices.
              </p>
            </div>
            {/* Environmental Card */}
            <div className="bg-white p-8 hover:bg-gray-50 transition-all duration-300 rounded-xl transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer border-2 border-transparent hover:border-teal-500">
              <h3 className="text-xl font-bold text-teal-600 mb-2">
                ENVIRONMENTAL
              </h3>
              <p className="italic text-lg text-gray-600 mb-4">
                Quality Services
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                We focus on disposing of all waste sustainably and minimizing
                environmental impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="py-20 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Welcome to <span className="text-gradient">Recycle</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 font-medium">
                We are a Leading Global Waste Management Company, Committed to
                The Environment
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                massa ligula, aliquet euismod eleifend vitae, interdum ut mi.
                Praesent fringilla pharetra sapien sit amet semper. Nunc id
                massa ut mi tempus mattis ac eu lectus.
              </p>
              <button className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg hover:bg-teal-600 hover:text-white transition-all duration-300 font-semibold transform hover:scale-105 hover:shadow-lg">
                OUR SERVICES
              </button>
            </div>
            {/* Right Video */}
            <div
              className={`relative group ${
                isVisible ? "animate-slide-in-right" : "opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-linear-to-r from-teal-400 to-green-500 rounded-xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <img
                src={slides[0].image}
                alt={slides[0].title}
                className="relative w-full rounded-xl shadow-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"
              />
              {/* Play Button */}
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group-hover:bg-teal-500 animate-pulse-slow">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-teal-600 border-b-8 border-b-transparent ml-1 group-hover:border-l-white transition-colors"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services & Solutions Section */}
      <div className="py-20 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100 rounded-full filter blur-3xl opacity-20 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100 rounded-full filter blur-3xl opacity-20 -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Services & <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-gray-600 italic max-w-4xl mx-auto text-lg">
              We offer comprehensive recycling, industry-specific waste
              management, quality control & sustainability solutions for
              businesses and corporations.
            </p>
          </div>
          {/* Service Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Waste Collection */}
            <div className="text-center group card-hover stagger-1 opacity-0 animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-24 h-24 mb-6 transform group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-teal-100 to-green-100 rounded-2xl icon-bounce animate-float">
                <svg
                  className="w-12 h-12 text-teal-600"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 16 L28 8 L36 16 M32 12 L32 32" />
                  <rect x="12" y="28" width="40" height="28" rx="2" />
                  <circle cx="32" cy="42" r="6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                Waste Collection
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
            {/* Recycling Services */}
            <div className="text-center group card-hover stagger-2 opacity-0 animate-fade-in-up">
              <div
                className="inline-flex items-center justify-center w-24 h-24 mb-6 transform group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-teal-100 to-green-100 rounded-2xl icon-bounce"
                style={{ animationDelay: "0.5s" }}
              >
                <svg
                  className="w-12 h-12 text-teal-600"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M32 12 L42 22 L38 22 L38 32 L26 32 L26 22 L22 22 Z" />
                  <path d="M16 38 L26 28 L26 32 L36 32 L36 42 L26 42 L26 38 Z" />
                  <path d="M48 38 L48 42 L38 42 L38 32 L48 32 L48 36 L42 28 Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                Recycling Services
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
            {/* Environmental */}
            <div className="text-center group card-hover stagger-3 opacity-0 animate-fade-in-up">
              <div
                className="inline-flex items-center justify-center w-24 h-24 mb-6 transform group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-teal-100 to-green-100 rounded-2xl icon-bounce animate-float"
                style={{ animationDelay: "1s" }}
              >
                <svg
                  className="w-12 h-12 text-teal-600"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M32 8 Q40 16 40 28 Q40 40 32 48 Q24 40 24 28 Q24 16 32 8 Z" />
                  <circle cx="32" cy="28" r="4" />
                  <path d="M28 36 L32 40 L36 36" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                Environmental
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
            {/* Quality Audits */}
            <div className="text-center group card-hover stagger-4 opacity-0 animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-24 h-24 mb-6 transform group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-teal-100 to-green-100 rounded-2xl icon-bounce">
                <svg
                  className="w-12 h-12 text-teal-600"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="32" cy="32" r="20" />
                  <path d="M24 32 L30 38 L42 26" strokeWidth="3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                Quality Audits
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
            {/* BIO Fuel Production */}
            <div className="text-center group card-hover stagger-5 opacity-0 animate-fade-in-up">
              <div
                className="inline-flex items-center justify-center w-24 h-24 mb-6 transform group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-teal-100 to-green-100 rounded-2xl icon-bounce animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <svg
                  className="w-12 h-12 text-teal-600"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M32 48 Q28 44 28 38 Q28 32 32 28 Q36 32 36 38 Q36 44 32 48 Z" />
                  <path d="M26 38 Q22 34 22 28 Q22 22 26 18" />
                  <path d="M38 38 Q42 34 42 28 Q42 22 38 18" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                BIO Fuel Production
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
            {/* Sustainability */}
            <div className="text-center group card-hover stagger-6 opacity-0 animate-fade-in-up">
              <div
                className="inline-flex items-center justify-center w-24 h-24 mb-6 transform group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-teal-100 to-green-100 rounded-2xl icon-bounce animate-float"
                style={{ animationDelay: "1s" }}
              >
                <svg
                  className="w-12 h-12 text-teal-600"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M32 12 Q36 16 36 22 L36 32" />
                  <path d="M24 20 Q28 16 32 16 Q36 16 40 20" />
                  <circle cx="32" cy="38" r="8" />
                  <path d="M28 46 L28 52 M36 46 L36 52" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                Sustainability
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
