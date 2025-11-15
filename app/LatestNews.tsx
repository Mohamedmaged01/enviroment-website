"use client";
import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  User,
  Calendar,
  MessageCircle,
  Music,
  Play,
} from "lucide-react";
import { useTranslation } from "react-i18next";

type NewsCardProps = {
  image: string;
  title: string;
  author: string;
  date: string;
  comments: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }> | null;
};

const NewsCard = ({
  image,
  title,
  author,
  date,
  comments,
  description,
  icon: Icon,
}: NewsCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-500 hover:shadow-2xl card-float"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        {Icon && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`bg-white rounded-full p-4 shadow-lg transition-all duration-500 ${
                isHovered ? "scale-110 rotate-12" : "scale-100"
              }`}
            >
              <Icon className="w-8 h-8 text-green-600 transition-colors duration-300 group-hover:text-green-500" />
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 transition-colors duration-300 group-hover:text-green-600">
          {title}
        </h3>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1 transition-transform duration-300 hover:scale-110">
            <User className="w-4 h-4" />
            <span className="text-green-600">{author}</span>
          </div>
          <div className="flex items-center gap-1 transition-transform duration-300 hover:scale-110">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1 transition-transform duration-300 hover:scale-110">
            <MessageCircle className="w-4 h-4" />
            <span>{comments}</span>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
        <button className="text-green-600 font-medium flex items-center gap-2 transition-all duration-300 hover:gap-3 group/btn">
          {t("continue")}
          <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default function LatestNews() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const newsItems = [
    {
      image: "/REC/AdobeStock_230582066.jpeg",
      title: t("news.title1"),
      author: t("news.author1"),
      date: t("news.date1"),
      comments: t("news.comments1"),
      description: t("news.description1"),
      icon: null,
    },
    {
      image: "/REC/AdobeStock_241329818.jpeg",
      title: t("news.title2"),
      author: t("news.author2"),
      date: t("news.date2"),
      comments: t("news.comments2"),
      description: t("news.description2"),
      icon: Music,
    },
    {
      image: "/REC/AdobeStock_246518113.jpeg",
      title: t("news.title3"),
      author: t("news.author3"),
      date: t("news.date3"),
      comments: t("news.comments3"),
      description: t("news.description3"),
      icon: Play,
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 relative overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmerLine {
          0% { transform: scaleX(0); transform-origin: left; }
          50% { transform: scaleX(1); transform-origin: left; }
          51% { transform: scaleX(1); transform-origin: right; }
          100% { transform: scaleX(0); transform-origin: right; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.4); }
          50% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(22, 163, 74, 0); }
        }
        @keyframes gradientMove {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .card-float:hover { animation: cardFloat 2s ease-in-out infinite; }
        .title-animate { animation: fadeInUp 0.8s ease-out; }
        .underline-animate { animation: shimmerLine 2s ease-in-out infinite; }
        .nav-btn { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .nav-btn:not(:disabled):hover { animation: pulse 1s ease-in-out infinite; }
        .nav-btn:active { transform: scale(0.9); }
        .nav-btn:disabled { cursor: not-allowed; opacity: 0.3; }
        .bg-pattern { 
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(22, 163, 74, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(22, 163, 74, 0.05) 0%, transparent 50%);
        }
        .gradient-text {
          background: linear-gradient(135deg, #31899D, #4EAD8B, #31899D);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientMove 3s ease infinite;
        }
      `}</style>

      <div className="absolute inset-0 bg-pattern"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="flex items-center justify-between mb-12">
          <div className="flex-1"></div>
          <div className="text-center title-animate">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">
              <span className="gradient-text">{t("news.title")}</span>
            </h2>
            <div className="relative h-1 w-16 mx-auto bg-gray-200 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-[#31899D] via-[#4EAD8B] to-[#31899D] underline-animate"></div>
            </div>
          </div>
          <div className="flex-1 flex justify-end gap-3">
            <button
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              className="nav-btn bg-primary text-white p-3 rounded-full hover:bg-secondary disabled:opacity-50 shadow-lg"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() =>
                setCurrentSlide(
                  Math.min(newsItems.length - 3, currentSlide + 1)
                )
              }
              className="nav-btn bg-primary text-white p-3 rounded-full hover:bg-secondary disabled:opacity-50 shadow-lg"
              disabled={currentSlide >= newsItems.length - 3}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
          >
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="w-1/3 shrink-0 px-3"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <NewsCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
