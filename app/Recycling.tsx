"use client";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  const recyclingData = [
    {
      label: t("recycling.paper_cardboard"),
      percentage: 76,
      color: "bg-teal-600",
    },
    {
      label: t("recycling.medical_waste"),
      percentage: 70,
      color: "bg-orange-500",
    },
    {
      label: t("recycling.industrial_scrap_metal"),
      percentage: 35,
      color: "bg-lime-500",
    },
    {
      label: t("recycling.glass_bottles"),
      percentage: 55,
      color: "bg-cyan-600",
    },
  ];

  return (
    <div className="bg-linear-to-b from-gray-100 to-gray-200 py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              {t("recycling.better_recycling_title")}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t("recycling.better_recycling_desc1")}
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              {t("recycling.better_recycling_desc2")}
            </p>
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded flex items-center gap-3 transition-colors">
              {t("recycling.annual_report")}
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
