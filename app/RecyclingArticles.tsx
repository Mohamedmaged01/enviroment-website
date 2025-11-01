import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function RecyclingArticles() {
  const articles = [
    {
      date: "APRIL 23, 2017",
      category: "POST | FORMATS | RECYCLING",
      title: "Recycling basics",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi gravida fringilla neque sit amet sollicitudin. Duis aliquam dictum feugiat. Quisque...",
    },
    {
      date: "MARCH 13, 2017",
      category: "RECYCLING",
      title: "Waste Collection Today",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi gravida fringilla neque sit amet sollicitudin. Duis aliquam dictum feugiat. Quisque...",
    },
    {
      date: "JANUARY 18, 2017",
      category: "RECYCLING",
      title: "How to Recycle Paper",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi gravida fringilla neque sit amet sollicitudin. Duis aliquam dictum feugiat. Quisque...",
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-emerald-400 via-teal-500 to-green-500 min-h-screen overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-emerald-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-green-600/20 rounded-full blur-3xl"></div>
      </div>
      {/* Request Quote Button */}
      <div className="relative flex justify-center pt-8 pb-12">
        <button className="bg-gradient-to-r from-lime-400 to-lime-500 text-white px-8 py-3 font-semibold uppercase text-sm tracking-wide hover:from-lime-500 hover:to-lime-600 transition-all">
          REQUEST FREE QUOTE
        </button>
      </div>
      {/* Main Content */}
      <div className="relative container mx-auto px-4 pb-32">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
            Latest Articles
          </h2>
          <p className="text-white/90 text-lg max-w-4xl mx-auto italic leading-relaxed">
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
              className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">
                <p className="text-emerald-500 text-xs font-bold uppercase mb-2">
                  {article.date}
                </p>
                <p className="text-gray-400 text-xs uppercase tracking-wide">
                  {article.category}
                </p>
              </div>
              <h3 className="text-gray-800 text-2xl font-bold mb-4">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {article.description}
              </p>
              <button className="bg-emerald-500 text-white px-6 py-2 text-sm font-semibold uppercase hover:bg-emerald-600 transition-colors">
                LEARN MORE
              </button>
            </div>
          ))}
        </div>
        {/* Navigation Arrows */}
        <div className="flex justify-end gap-2 max-w-6xl mx-auto">
          <button className="bg-white p-3 hover:bg-gray-100 transition-colors">
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button className="bg-white p-3 hover:bg-gray-100 transition-colors">
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
      {/* Wavy bottom border */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16"
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
