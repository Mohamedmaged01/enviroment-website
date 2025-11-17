import React from "react";
import Footer from "../Footer";
import {
  Droplets,
  Lightbulb,
  ThermometerSun,
  Home,
  Globe,
  Sprout,
} from "lucide-react";

export default function ServiceSix() {
  const services = [
    {
      id: 1,
      title: "Water Conservation",
      description:
        "Another important area of ecology is restoration ecology, which involves the rehabilitation",
      image: "/REC/AdobeStock_101394950.jpeg",
      icon: Droplets,
      color: "bg-green-500",
    },
    {
      id: 2,
      title: "E-Waste Recycling",
      description:
        "It is a long established fact that a|â|þ|ø|î reader hv will be distracted by the g|ÿ|k readable",
      image: "/REC/AdobeStock_14240675.jpeg",
      icon: Lightbulb,
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Global Warming",
      description:
        "It is a long established fact that a|â|þ|ø|î reader hv will be distracted by the g|ÿ|k readable",
      image: "/REC/AdobeStock_199331282.jpeg",
      icon: ThermometerSun,
      color: "bg-green-500",
    },
    {
      id: 4,
      title: "Carbon Offsetting",
      description:
        "It is a long established fact that a|â|þ|ø|î reader hv will be distracted by the g|ÿ|k readable",
      image: "/REC/AdobeStock_230582066.jpeg",
      icon: Home,
      color: "bg-green-500",
    },
    {
      id: 5,
      title: "Water Conservation",
      description:
        "It is a long established fact that a|â|þ|ø|î reader hv will be distracted by the g|ÿ|k readable",
      image: "/REC/AdobeStock_241329818.jpeg",
      icon: Globe,
      color: "bg-green-500",
    },
    {
      id: 6,
      title: "Urban planning",
      description:
        "It is a long established fact that a|â|þ|ø|î reader hv will be distracted by the g|ÿ|k readable",
      image: "/REC/AdobeStock_246518113.jpeg",
      icon: Sprout,
      color: "bg-green-500",
    },
  ];

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
            <h1 className="text-5xl font-bold mb-2">Services</h1>
            <div className="flex items-center space-x-2 text-sm">
              <span>Services </span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-8 min-h-[420px] w-full max-w-md mx-auto"
              >
                {/* Image Container */}
                <div className="relative w-full h-72 rounded-xl overflow-hidden mb-10">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Removed Icon Circle */}
                </div>

                {/* Content */}
                <div className="text-center mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 px-4">
                    {service.description}
                  </p>
                  <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 text-sm font-medium transition-colors duration-300 flex items-center mx-auto">
                    Read More
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
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
