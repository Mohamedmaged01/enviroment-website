import React from "react";
import { Globe, Factory, Recycle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ServicesSection() {
  const { t } = useTranslation();
  const services = [
    {
      icon: Globe,
      title: t("services.carbon_offsetting_title"),
      description: t("services.carbon_offsetting_desc"),
      image: "/REC/environment_GettyImages-501231894.jpg",
    },
    {
      icon: Factory,
      title: t("services.energy_consulting_title"),
      description: t("services.energy_consulting_desc"),
      image: "/REC/AdobeStock_434315057.jpeg",
    },
    {
      icon: Recycle,
      title: t("services.climate_adaptation_title"),
      description: t("services.climate_adaptation_desc"),
      image: "/REC/Better-Lives-Image-1.jpg",
    },
  ];

  return (
    <div className="py-20 bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .service-card {
          animation: fadeInUp 0.6s ease-out backwards;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card:hover {
          transform: translateY(-8px);
        }

        .service-card:hover .service-image {
          transform: scale(1.05);
        }

        .service-image {
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: rgba(34, 197, 94, 0.7);
          opacity: 0;
          transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card:hover .image-overlay {
          opacity: 1;
        }

        .icon-wrapper {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card:hover .icon-wrapper {
          transform: rotate(360deg);
        }

        .icon-bg {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card:hover .icon-bg {
          transform: scale(1.1);
          box-shadow: 0 20px 30px -10px rgba(72, 187, 120, 0.4);
        }

        .leaf-decoration {
          opacity: 0.05;
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Decorative background leaves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute -top-20 -left-20 w-96 h-96 text-green-300 leaf-decoration"
          style={{ animationDelay: "0s" }}
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M100,20 Q140,40 160,80 Q180,120 160,160 Q140,180 100,180 Q80,160 70,140 Q60,100 70,60 Q80,40 100,20 Z" />
        </svg>
        <svg
          className="absolute top-40 -right-32 w-80 h-80 text-teal-200 leaf-decoration"
          style={{ animationDelay: "2s" }}
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M100,20 Q140,40 160,80 Q180,120 160,160 Q140,180 100,180 Q80,160 70,140 Q60,100 70,60 Q80,40 100,20 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="service-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon Section */}
                <div className="flex items-center justify-center pt-12 pb-8">
                  <div className="icon-bg w-20 h-20 bg-linear-to-br from-green-100 to-teal-100 rounded-full flex items-center justify-center">
                    <Icon
                      className="w-10 h-10 text-green-600"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="px-8 pb-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Image */}
                <div className="overflow-hidden h-56">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
