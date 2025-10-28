"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function RecycleHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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
      {/* Navigation */}
      <nav className="bg-white shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-32 h-16 flex items-center justify-center">
                <img
                  src="/logo-en.png"
                  alt="Recycle Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-green-600 font-medium">
                HOME
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                ABOUT
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                SERVICES
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                ELEMENTS
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                BLOG
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                CONTACT
              </a>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded font-medium transition-colors">
                GET A QUOTE
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
                className="w-full h-full object-cover"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Content Card - Animated */}
              <div
                className={`absolute left-8 sm:left-16 top-1/3 bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-2xl max-w-md transform transition-all duration-700 delay-300 ${
                  index === currentSlide
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-20 opacity-0"
                }`}
              >
                <div className="w-16 h-1 bg-green-600 mb-4"></div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {slide.description}
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded font-semibold transition-all transform hover:scale-105">
                  LEARN MORE
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevSlide}
          disabled={isTransitioning}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center z-30 transition-all hover:scale-110 disabled:opacity-50"
        >
          <ChevronLeft className="w-7 h-7 text-gray-700" />
        </button>
        <button
          onClick={goToNextSlide}
          disabled={isTransitioning}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center z-30 transition-all hover:scale-110 disabled:opacity-50"
        >
          <ChevronRight className="w-7 h-7 text-gray-700" />
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl">
            {/* Industrial Card */}
            <div className="bg-teal-500 text-white p-8 hover:bg-teal-600 transition-colors">
              <h3 className="text-xl font-bold mb-2">INDUSTRIAL</h3>
              <p className="italic text-lg mb-4">Waste Management</p>
              <p className="text-sm leading-relaxed">
                We offer complete industrial waste management services, from
                collection to recycling.
              </p>
            </div>
            {/* Sustainable Card */}
            <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
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
            <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
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
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Welcome to Recycle
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We are a Leading Global Waste Management Company, Committed to
                The Environment
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                massa ligula, aliquet euismod eleifend vitae, interdum ut mi.
                Praesent fringilla pharetra sapien sit amet semper. Nunc id
                massa ut mi tempus mattis ac eu lectus.
              </p>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 hover:bg-gray-100 transition">
                OUR SERVICES
              </button>
            </div>
            {/* Right Video */}
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="Business professionals"
                className="w-full rounded-lg shadow-lg"
              />
              {/* Play Button */}
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform group-hover:bg-teal-500">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-teal-600 border-b-8 border-b-transparent ml-1 group-hover:border-l-white"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services & Solutions Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Services & <span className="text-teal-600">Solutions</span>
            </h2>
            <p className="text-gray-600 italic max-w-4xl mx-auto">
              We offer comprehensive recycling, industry-specific waste
              management, quality control & sustainability solutions for
              businesses and corporations.
            </p>
          </div>
          {/* Service Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Waste Collection */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 transform group-hover:scale-110 transition-transform">
                <svg
                  className="w-full h-full text-teal-600"
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
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Waste Collection
              </h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
            {/* Recycling Services */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 transform group-hover:scale-110 transition-transform">
                <svg
                  className="w-full h-full text-teal-600"
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
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Recycling Services
              </h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
            {/* Environmental */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 transform group-hover:scale-110 transition-transform">
                <svg
                  className="w-full h-full text-teal-600"
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
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Environmental
              </h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
            {/* Quality Audits */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 transform group-hover:scale-110 transition-transform">
                <svg
                  className="w-full h-full text-teal-600"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="32" cy="32" r="20" />
                  <path d="M24 32 L30 38 L42 26" strokeWidth="3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Quality Audits
              </h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
            {/* BIO Fuel Production */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 transform group-hover:scale-110 transition-transform">
                <svg
                  className="w-full h-full text-teal-600"
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
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                BIO Fuel Production
              </h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
            {/* Sustainability */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 transform group-hover:scale-110 transition-transform">
                <svg
                  className="w-full h-full text-teal-600"
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
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Sustainability
              </h3>
              <p className="text-gray-600 text-sm">
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
