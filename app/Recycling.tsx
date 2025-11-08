import React from "react";
import { Cloud } from "lucide-react";

interface ProgressBarProps {
  label: string;
  percentage: number;
  color: string;
}

const ProgressBar = ({ label, percentage, color }: ProgressBarProps) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-2">
      <span className="text-gray-700 font-medium">{label}</span>
      <span className="text-gray-700 font-semibold">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-300 rounded-full h-2.5 overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-1000 ${color}`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const BetterRecycling = () => {
  const recyclingData = [
    { label: "Paper & Cardboard", percentage: 76, color: "bg-teal-600" },
    { label: "Medical Waste", percentage: 70, color: "bg-orange-500" },
    { label: "Industrial Scrap Metal", percentage: 35, color: "bg-lime-500" },
    { label: "Glass Bottles", percentage: 55, color: "bg-cyan-600" },
  ];

  return (
    <div className="bg-linear-to-b from-gray-100 to-gray-200 py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Better Recycling
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetuer. Proin gravida nibh vel
              velit auctor aliquet aenean sollicitudin.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Proin gravida nibh vel velit auctor
              aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
              elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum
              dolor sit amet, consectetuer. Lorem ipsum dolor sit amet,
              consectur adipiscing elit.
            </p>
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded flex items-center gap-3 transition-colors">
              ANNUAL REPORT
              <Cloud className="w-5 h-5" />
            </button>
          </div>

          {/* Right Column - Progress Bars */}
          <div>
            {recyclingData.map((item, index) => (
              <ProgressBar
                key={index}
                label={item.label}
                percentage={item.percentage}
                color={item.color}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetterRecycling;
