"use client";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function RecyclingArticles() {
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);

  const articles = [
    {
      date: "11/2025",
      category: "POST | FORMATS | RECYCLING",
      title: "Recycling basics",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi gravida fringilla neque sit amet sollicitudin. Duis aliquam dictum feugiat. Quisque...",
    },
    {
      date: "11/2025",
      category: "RECYCLING",
      title: "Waste Collection Today",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi gravida fringilla neque sit amet sollicitudin. Duis aliquam dictum feugiat. Quisque...",
    },
    {
      date: "11/2025",
      category: "RECYCLING",
      title: "How to Recycle Paper",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi gravida fringilla neque sit amet sollicitudin. Duis aliquam dictum feugiat. Quisque...",
    },
  ];

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
        .animate-float { animation: float 20s ease-in-out infinite; }
        .animate-float-delayed { animation: float 25s ease-in-out infinite 5s; }
        .animate-float-slow { animation: float 30s ease-in-out infinite 10s; }
        .animate-slide-up { animation: slideUp 0.6s ease-out forwards; opacity: 0; }
        .anim-delay-100 { animation-delay: 0.1s; }
        .anim-delay-200 { animation-delay: 0.2s; }
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
        .card-hover:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        .wave-animate path {
          animation: wave 8s ease-in-out infinite;
        }
        .date-badge {
          position: relative;
          display: inline-block;
        }
        .date-badge::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #10b981, #14b8a6);
          transition: width 0.3s ease;
        }
        .card-hover:hover .date-badge::after {
          width: 100%;
        }
        .btn-arrow {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .btn-arrow:hover {
          transform: scale(1.1);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);
        }
        .btn-arrow:active {
          transform: scale(0.95);
        }
      `}</style>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-emerald-600/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-green-600/20 rounded-full blur-3xl animate-float-slow"></div>
      </div>
      {/* Request Quote Button */}
      <div className="relative flex justify-center pt-8 pb-12 animate-slide-up"></div>
      {/* Main Content */}
      <div className="relative container mx-auto px-4 pb-32">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Latest Articles
          </h2>
          <p className="text-white/90 text-lg max-w-4xl mx-auto italic leading-relaxed drop-shadow-md">
            Lorem ipsum dolor sit amet, consectetuer. Proin gravida nibh vel
            velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
            auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
          </p>
        </div>
        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {articles.map((article, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`bg-white p-8 rounded-sm shadow-lg card-hover animate-slide-up ${
                index === 1
                  ? "anim-delay-100"
                  : index === 2
                  ? "anim-delay-200"
                  : ""
              }`}
            >
              <div className="mb-4">
                <p className="date-badge text-emerald-500 text-xs font-bold uppercase mb-2">
                  {article.date}
                </p>
                <p className="text-gray-400 text-xs uppercase tracking-wide">
                  {article.category}
                </p>
              </div>
              <h3 className="text-gray-800 text-2xl font-bold mb-4 transition-colors duration-300 hover:text-emerald-600">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {article.description}
              </p>
              <button className="bg-emerald-500 text-white px-6 py-2 rounded-sm text-sm font-semibold uppercase hover:bg-emerald-600 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                LEARN MORE
              </button>
            </div>
          ))}
        </div>
        {/* Navigation Arrows */}
        <div
          className="flex justify-end gap-2 max-w-6xl mx-auto animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          <button className="btn-arrow bg-white p-3 rounded-sm hover:bg-gray-100 transition-all duration-300">
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button className="btn-arrow bg-white p-3 rounded-sm hover:bg-gray-100 transition-all duration-300">
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
      {/* Wavy bottom border */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 wave-animate"
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
