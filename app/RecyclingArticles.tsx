"use client";
import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Tag,
  ArrowRight,
} from "lucide-react";

export default function RecyclingArticles() {
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const articles = [
    {
      date: "11/2025",
      category: "POST | FORMATS | RECYCLING",
      title: "Recycling basics",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi gravida fringilla neque sit amet sollicitudin. Duis aliquam dictum feugiat. Quisque...",
      readTime: "5 min read",
    },
    {
      date: "11/2025",
      category: "RECYCLING",
      title: "Waste Collection Today",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi gravida fringilla neque sit amet sollicitudin. Duis aliquam dictum feugiat. Quisque...",
      readTime: "3 min read",
    },
    {
      date: "11/2025",
      category: "RECYCLING",
      title: "How to Recycle Paper",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi gravida fringilla neque sit amet sollicitudin. Duis aliquam dictum feugiat. Quisque...",
      readTime: "4 min read",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : articles.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < articles.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="relative bg-gradient-to-br from-emerald-400 via-teal-500 to-green-500 min-h-screen overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes wave {
          0%, 100% { d: path("M0,40 Q120,0 240,40 T480,40 T720,40 T960,40 T1200,40 T1440,40 L1440,80 L0,80 Z"); }
          50% { d: path("M0,40 Q120,60 240,40 T480,40 T720,40 T960,40 T1200,40 T1440,40 L1440,80 L0,80 Z"); }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.4), 0 0 40px rgba(16, 185, 129, 0.2); }
          50% { box-shadow: 0 0 30px rgba(16, 185, 129, 0.6), 0 0 60px rgba(16, 185, 129, 0.3); }
        }
        @keyframes borderGlow {
          0%, 100% { border-color: rgba(16, 185, 129, 0.5); }
          50% { border-color: rgba(16, 185, 129, 1); }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes ripple {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(4); opacity: 0; }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float { animation: float 20s ease-in-out infinite; }
        .animate-float-delayed { animation: float 25s ease-in-out infinite 5s; }
        .animate-float-slow { animation: float 30s ease-in-out infinite 10s; }
        .animate-slide-up { animation: slideUp 0.6s ease-out forwards; opacity: 0; }
        .animate-slide-in-left { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slideInRight 0.8s ease-out forwards; }
        .anim-delay-100 { animation-delay: 0.1s; }
        .anim-delay-200 { animation-delay: 0.2s; }
        .anim-delay-300 { animation-delay: 0.3s; }
        .anim-delay-400 { animation-delay: 0.4s; }
        
        .shimmer-btn {
          background: linear-gradient(90deg, #a3e635 0%, #bef264 50%, #a3e635 100%);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }
        
        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .card-hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }
        
        .card-hover:hover::before {
          left: 100%;
        }
        
        .card-hover::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1));
          opacity: 0;
          transition: opacity 0.4s;
        }
        
        .card-hover:hover::after {
          opacity: 1;
        }
        
        .card-hover:hover {
          transform: translateY(-16px) scale(1.03);
          box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.3), 0 0 0 4px rgba(16, 185, 129, 0.2);
        }
        
        .wave-animate path {
          animation: wave 8s ease-in-out infinite;
        }
        
        .date-badge {
          position: relative;
          display: inline-block;
          background: linear-gradient(135deg, #10b981, #14b8a6);
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
        
        .category-badge {
          position: relative;
          overflow: hidden;
        }
        
        .category-badge::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        
        .card-hover:hover .category-badge::before {
          width: 200px;
          height: 200px;
        }
        
        .btn-arrow {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .btn-arrow::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(16, 185, 129, 0.2);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.4s, height 0.4s;
        }
        
        .btn-arrow:hover::before {
          width: 150px;
          height: 150px;
        }
        
        .btn-arrow:hover {
          transform: scale(1.15) rotate(5deg);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
          background: rgba(255, 255, 255, 0.95);
        }
        
        .btn-arrow:active {
          transform: scale(0.95) rotate(-5deg);
        }
        
        .learn-more-btn {
          position: relative;
          overflow: hidden;
        }
        
        .learn-more-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        
        .learn-more-btn:hover::before {
          width: 300px;
          height: 300px;
        }
        
        .title-gradient {
          background: linear-gradient(135deg, #ffffff, #f0fdf4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 4s ease infinite;
          background-size: 200% 200%;
        }
        
        .glow-text {
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3);
        }
        
        .card-corner {
          position: absolute;
          width: 0;
          height: 0;
          border-style: solid;
          transition: all 0.4s;
        }
        
        .card-corner-tl {
          top: 0;
          left: 0;
          border-width: 0 0 0 0;
          border-color: transparent transparent transparent #10b981;
        }
        
        .card-hover:hover .card-corner-tl {
          border-width: 40px 0 0 40px;
        }
        
        .card-corner-br {
          bottom: 0;
          right: 0;
          border-width: 0 0 0 0;
          border-color: transparent #10b981 transparent transparent;
        }
        
        .card-hover:hover .card-corner-br {
          border-width: 0 40px 40px 0;
        }
        
        .icon-float {
          animation: bounce 2s ease-in-out infinite;
        }
        
        .icon-rotate {
          transition: transform 0.4s;
        }
        
        .card-hover:hover .icon-rotate {
          transform: rotate(360deg);
        }
      `}</style>

      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-emerald-600/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-green-600/20 rounded-full blur-3xl animate-float-slow"></div>

        {/* Additional decorative circles */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-white/5 rounded-full blur-2xl animate-float-delayed"></div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-16 pb-32">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-white text-5xl md:text-6xl font-bold mb-6 drop-shadow-2xl title-gradient glow-text">
            Latest Articles
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-1 w-20 bg-white/50 rounded-full animate-slide-in-left"></div>
            <div className="h-2 w-2 bg-white rounded-full icon-float"></div>
            <div className="h-1 w-20 bg-white/50 rounded-full animate-slide-in-right"></div>
          </div>
          <p className="text-white/95 text-lg max-w-4xl mx-auto italic leading-relaxed drop-shadow-lg animate-slide-up anim-delay-200">
            Lorem ipsum dolor sit amet, consectetuer. Proin gravida nibh vel
            velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
            auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {articles.map((article, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`bg-white p-8 rounded-lg shadow-2xl card-hover animate-slide-up ${
                index === 1
                  ? "anim-delay-100"
                  : index === 2
                  ? "anim-delay-200"
                  : ""
              }`}
            >
              {/* Corner decorations */}
              <div className="card-corner card-corner-tl"></div>
              <div className="card-corner card-corner-br"></div>

              <div className="mb-6 relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="date-badge text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
                    <Clock className="w-3 h-3 inline mr-1" />
                    {article.date}
                  </span>
                  <span className="text-gray-400 text-xs">
                    {article.readTime}
                  </span>
                </div>
                <div className="category-badge inline-block bg-emerald-50 text-emerald-600 text-xs uppercase tracking-wide px-3 py-1 rounded-full font-semibold">
                  <Tag className="w-3 h-3 inline mr-1 icon-rotate" />
                  {article.category}
                </div>
              </div>

              <h3 className="text-gray-800 text-2xl font-bold mb-4 transition-all duration-300 hover:text-emerald-600 relative z-10 leading-tight">
                {article.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 relative z-10">
                {article.description}
              </p>

              <button className="learn-more-btn bg-emerald-500 text-white px-6 py-3 rounded-full text-sm font-semibold uppercase hover:bg-emerald-600 transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2 group relative z-10">
                LEARN MORE
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 max-w-6xl mx-auto animate-slide-up anim-delay-300">
          <button
            onClick={handlePrev}
            className="btn-arrow bg-white p-4 rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg relative z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={handleNext}
            className="btn-arrow bg-white p-4 rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg relative z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8 animate-slide-up anim-delay-400">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Wavy bottom border */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-20 wave-animate"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 Q120,0 240,40 T480,40 T720,40 T960,40 T1200,40 T1440,40 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}
