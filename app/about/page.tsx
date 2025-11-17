import React from "react";
import Footer from "../Footer";
import WasteReductionSection from "../WasteReductionSection";

export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-64 bg-linear-to-br from-teal-900 via-emerald-900 to-teal-800 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url(/REC/AdobeStock_297725203.jpeg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
            <h1 className="text-5xl font-bold mb-2">About</h1>
            <div className="flex items-center space-x-2 text-sm">
              <span>About</span>
            </div>
          </div>
        </div>
        <WasteReductionSection />
        <Footer />
      </div>
    </>
  );
}
