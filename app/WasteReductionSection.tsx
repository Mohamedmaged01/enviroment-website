import React from "react";
import { ArrowRight, Recycle, Leaf, Sun, Trees, Trash2 } from "lucide-react";

export default function WasteReductionSection() {
  const products = [
    {
      number: "01",
      title: "Carbon Offsetting",
      description: "Ecology is crucial for our understanding",
      icon: Recycle,
    },
    {
      number: "02",
      title: "Renewable Energy",
      description: "Have led to a decline in biodiversity and negative",
      icon: Sun,
    },
    {
      number: "03",
      title: "Green Building",
      description: "Biodiversity and negative impacts on ecosystems",
      icon: Trees,
    },
    {
      number: "04",
      title: "Sustainable",
      description: "Ecologists use a variety of methods, such as field",
      icon: Trash2,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Image and Text */}
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Image */}
            <div className="relative h-64 lg:h-auto">
              <img
                src="/REC/AdobeStock_101394950.jpeg"
                alt="Recycling bins"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side - Content */}
            <div className="bg-gray-100 p-8 lg:p-16 flex items-center">
              <div>
                <p className="text-green-600 text-sm font-semibold tracking-wider uppercase mb-3">
                  About With Us
                </p>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Waste reduction
                  <br />
                  and recycling.
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Waste reduction involves minimizing the amount of waste that
                  is produced in the first place, while recycling involves
                  processing waste materials into new products.
                </p>
                <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center">
                  Find Out More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Eco-Friendly Products Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <p className="text-green-600 text-sm font-semibold tracking-wider uppercase mb-3">
            Clients Talk
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Eco-Friendly Products For A<br />
            healthier Planet
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Number */}
              <div className="text-6xl font-bold text-gray-100 mb-4">
                {product.number}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <product.icon
                  className="w-8 h-8 text-green-500"
                  strokeWidth={1.5}
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6">
                {product.description}
              </p>

              {/* Read More Link */}
              <button className="flex items-center text-gray-900 font-medium hover:text-green-500 transition-colors group">
                Read More
                <div className="ml-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
