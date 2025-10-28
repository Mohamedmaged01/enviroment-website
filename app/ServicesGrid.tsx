import React from "react";
import {
  Trash2,
  Recycle,
  Leaf,
  Globe,
  FlaskConical,
  CheckCircle,
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description?: string | null;
  showButton: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, showButton }) => (
  <div className="text-center text-white p-8">
    <div className="mb-6 flex justify-center">
      <Icon className="w-20 h-20" strokeWidth={1.5} />
    </div>
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    {description && (
      <p className="text-teal-100 mb-6 max-w-xs mx-auto leading-relaxed">
        {description}
      </p>
    )}
    {showButton && (
      <button className="text-white font-semibold hover:text-teal-200 transition-colors">
        LEARN MORE
      </button>
    )}
  </div>
);

const ServicesGrid = () => {
  const services = [
    {
      icon: Trash2,
      title: "Waste Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      showButton: true,
    },
    {
      icon: Recycle,
      title: "Recycling Services",
      description: null,
      showButton: false,
    },
    {
      icon: Leaf,
      title: "Environmental Quality",
      description: null,
      showButton: false,
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: null,
      showButton: false,
    },
    {
      icon: FlaskConical,
      title: "Laboratory Analyses",
      description: null,
      showButton: false,
    },
    {
      icon: CheckCircle,
      title: "Complience",
      description: null,
      showButton: false,
    },
  ];

  return (
    <div className="relative">
      {/* Zigzag pattern at top */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-teal-600 overflow-hidden z-10">
        <svg
          viewBox="0 0 1200 32"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <pattern
            id="zigzag-top"
            x="0"
            y="0"
            width="40"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <polygon points="0,32 20,0 40,32" fill="#ffffff" />
          </pattern>
          <rect width="1200" height="32" fill="url(#zigzag-top)" />
        </svg>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left side - Services Grid with Teal Background */}
        <div className="bg-teal-600 relative">
          {/* Background world map watermark */}
          <div className="absolute inset-0 opacity-10 overflow-hidden">
            <svg viewBox="0 0 800 600" className="w-full h-full">
              <circle
                cx="400"
                cy="300"
                r="200"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <circle
                cx="400"
                cy="300"
                r="150"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <circle
                cx="400"
                cy="300"
                r="100"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <line
                x1="200"
                y1="300"
                x2="600"
                y2="300"
                stroke="currentColor"
                strokeWidth="1"
              />
              <line
                x1="400"
                y1="100"
                x2="400"
                y2="500"
                stroke="currentColor"
                strokeWidth="1"
              />
              <ellipse
                cx="400"
                cy="300"
                rx="200"
                ry="80"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <ellipse
                cx="400"
                cy="300"
                rx="200"
                ry="120"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </div>
          <div className="grid grid-cols-3 relative z-10">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
        {/* Right side - Image with Recycle Symbol */}
        <div className="relative h-full min-h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&h=800&fit=crop"
            alt="Team collaboration"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
          {/* Recycle Symbol with Hexagon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Hexagon outline */}
              <svg
                width="400"
                height="400"
                viewBox="0 0 400 400"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <defs>
                  <style>{`
                    @keyframes dash {
                      to {
                        stroke-dashoffset: 0;
                      }
                    }
                    .hexagon-path {
                      stroke-dasharray: 1200;
                      stroke-dashoffset: 1200;
                      animation: dash 3s ease-in-out infinite;
                    }
                  `}</style>
                </defs>
                <polygon
                  points="200,50 350,125 350,275 200,350 50,275 50,125"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="10,5"
                  className="hexagon-path"
                />
              </svg>
              {/* Recycle Icon */}
              <div className="relative z-10 bg-white/90 rounded-full p-12 backdrop-blur-sm">
                <Recycle className="w-32 h-32 text-teal-600" strokeWidth={2} />
              </div>
            </div>
          </div>

          {/* "Activate Windows" watermark */}
          <div className="absolute bottom-4 right-4 text-white/50 text-sm">
            Activate Windows
          </div>
        </div>
      </div>
      {/* Zigzag pattern at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-white overflow-hidden z-10">
        <svg
          viewBox="0 0 1200 32"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <pattern
            id="zigzag-bottom"
            x="0"
            y="0"
            width="40"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <polygon points="0,0 20,32 40,0" fill="#0d9488" />
          </pattern>
          <rect width="1200" height="32" fill="url(#zigzag-bottom)" />
        </svg>
      </div>
    </div>
  );
};

export default ServicesGrid;
