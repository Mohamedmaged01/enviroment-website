"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HeroCarousel from "./HeroCarousel";
import ServiceGrid from "./ServiceGrid";

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
          background: linear-gradient(135deg, #31899d 0%, #4ead8b 100%);
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
      <Navbar />
      {/* Hero Section with Enhanced Carousel */}
      <HeroCarousel slides={slides} />
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
          <ServiceGrid />
        </div>
      </div>
    </div>
  );
}
