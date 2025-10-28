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
}: NewsCardProps) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="relative h-56">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      {Icon && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white rounded-full p-4 shadow-lg">
            <Icon className="w-8 h-8 text-green-600" />
          </div>
        </div>
      )}
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
        <div className="flex items-center gap-1">
          <User className="w-4 h-4" />
          <span className="text-green-600">{author}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-1">
          <MessageCircle className="w-4 h-4" />
          <span>{comments}</span>
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
      <button className="text-green-600 font-medium flex items-center gap-2 hover:gap-3 transition-all">
        Continue
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  </div>
);

const LatestNews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const newsItems = [
    {
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
      title: "Environment Perspective",
      author: "Johny Walker",
      date: "July 14, 2017",
      comments: "0",
      description:
        "Mauris id enim id purus ornare tincidunt. Aenean vel consequat risus. Proin viverra nisi at nisl imperdiet auctor.",
      icon: null,
    },
    {
      image:
        "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=800&h=600&fit=crop",
      title: "New Ecological Bulbs",
      author: "Johny Walker",
      date: "July 14, 2017",
      comments: "0",
      description:
        "Mauris id enim id purus ornare tincidunt. Aenean vel consequat risus. Proin viverra nisi at nisl imperdiet auctor.",
      icon: Music,
    },
    {
      image:
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&h=600&fit=crop",
      title: "Protect The Environment",
      author: "Johny Walker",
      date: "July 14, 2017",
      comments: "0",
      description:
        "Mauris id enim id purus ornare tincidunt. Aenean vel consequat risus. Proin viverra nisi at nisl imperdiet auctor.",
      icon: Play,
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="flex-1"></div>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">
              LATEST NEWS
            </h2>
            <div className="w-16 h-1 bg-green-600 mx-auto"></div>
          </div>
          <div className="flex-1 flex justify-end gap-2">
            <button
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors disabled:opacity-50"
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
              className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors disabled:opacity-50"
              disabled={currentSlide >= newsItems.length - 3}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
          >
            {newsItems.map((item, index) => (
              <div key={index} className="w-1/3 flex-shrink-0 px-3">
                <NewsCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
