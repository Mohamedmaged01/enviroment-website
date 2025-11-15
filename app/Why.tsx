"use client";
import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import {
  Leaf,
  TrendingUp,
  Lightbulb,
  Briefcase,
  GraduationCap,
  Users,
  Globe,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function WhyREC() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  const handleAccordionClick = (index: number) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setOpenIndex(openIndex === index ? null : index);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const features = [
    {
      icon: Leaf,
      title: t("why.environmental_impact_title"),
      description: t("why.environmental_impact_desc"),
    },
    {
      icon: TrendingUp,
      title: t("why.sustainable_development_title"),
      description: t("why.sustainable_development_desc"),
    },
    {
      icon: Lightbulb,
      title: t("why.problem_solving_title"),
      description: t("why.problem_solving_desc"),
    },
    {
      icon: Briefcase,
      title: t("why.diverse_projects_title"),
      description: t("why.diverse_projects_desc"),
    },
    {
      icon: GraduationCap,
      title: t("why.educational_role_title"),
      description: t("why.educational_role_desc"),
    },
    {
      icon: Users,
      title: t("why.collaboration_title"),
      description: t("why.collaboration_desc"),
    },
    {
      icon: Globe,
      title: t("why.global_relevance_title"),
      description: t("why.global_relevance_desc"),
    },
  ];

  return (
    <div className="py-20 bg-white relative overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(5deg); }
          66% { transform: translate(-20px, 20px) rotate(-5deg); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }
        @keyframes contentReveal {
          0% { opacity: 0; transform: translateY(-8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .feature-card {
          animation: fadeInUp 0.6s ease-out backwards;
        }
        
        .icon-wrapper {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .feature-card:hover .icon-wrapper {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 20px 25px -5px rgba(20, 184, 166, 0.4);
        }
        
        .floating-shape, .floating-shape-delayed, .floating-shape-slow {
          animation: float 20s ease-in-out infinite;
        }
        
        .floating-shape-delayed {
          animation-delay: 5s;
          animation-duration: 25s;
        }
        
        .floating-shape-slow {
          animation-delay: 10s;
          animation-duration: 30s;
        }
        
        .title-animate {
          animation: scaleIn 0.8s ease-out;
        }
        
        .subtitle-animate {
          animation: slideInLeft 0.8s ease-out 0.2s backwards;
        }
        
        .underline-animate {
          animation: slideInRight 0.8s ease-out 0.4s backwards;
        }
        
        .cta-animate {
          animation: fadeInUp 0.8s ease-out 0.6s backwards;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #31899D, #4EAD8B, #31899D);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s ease infinite;
        }
        
        .btn-primary, .btn-secondary {
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .btn-primary::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        
        .btn-primary:hover::before {
          width: 300px;
          height: 300px;
        }
        
        .btn-primary:hover, .btn-secondary:hover {
          transform: translateY(-2px);
        }
        
        .btn-primary:hover {
          box-shadow: 0 20px 25px -5px rgba(20, 184, 166, 0.4);
        }
        
        .btn-secondary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.1), transparent);
          transition: left 0.5s;
        }
        
        .btn-secondary:hover::before {
          left: 100%;
        }
        
        .btn-secondary:hover {
          box-shadow: 0 10px 20px -5px rgba(20, 184, 166, 0.2);
          border-color: #31899D;
        }
        
        .sparkle-icon {
          animation: sparkle 2s ease-in-out infinite;
        }
        
        .decorative-circle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(20, 184, 166, 0.1), transparent);
        }
        
        .accordion-content {
          overflow: hidden;
          transition: max-height 0.5s cubic-bezier(0.65, 0, 0.35, 1),
                      opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .accordion-content.open {
          max-height: 500px;
          opacity: 1;
        }
        
        .accordion-content.closed {
          max-height: 0;
          opacity: 0;
        }
        
        .accordion-inner {
          transform-origin: top;
          transition: transform 0.5s cubic-bezier(0.65, 0, 0.35, 1),
                      opacity 0.3s ease-out;
        }
        
        .accordion-content.open .accordion-inner {
          transform: translateY(0) scaleY(1);
          opacity: 1;
        }
        
        .accordion-content.closed .accordion-inner {
          transform: translateY(-10px) scaleY(0.8);
          opacity: 0;
        }
        
        .accordion-border {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .accordion-border.open {
          border-color: #14b8a6;
          box-shadow: 0 4px 6px -1px rgba(20, 184, 166, 0.1),
                      0 2px 4px -1px rgba(20, 184, 166, 0.06);
        }
        
        .content-reveal {
          animation: contentReveal 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100 rounded-full opacity-20 blur-3xl floating-shape"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100 rounded-full opacity-20 blur-3xl floating-shape-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-100 rounded-full opacity-10 blur-3xl floating-shape-slow"></div>
        <div
          className="decorative-circle"
          style={{ width: "200px", height: "200px", top: "10%", left: "5%" }}
        ></div>
        <div
          className="decorative-circle"
          style={{
            width: "150px",
            height: "150px",
            bottom: "15%",
            right: "8%",
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-3 subtitle-animate">
            <Sparkles className="w-4 h-4 text-teal-600 sparkle-icon" />
            <p className="text-teal-600 italic font-medium">
              {t("why.get_to_know_about_us")}
            </p>
            <Sparkles
              className="w-4 h-4 text-teal-600 sparkle-icon"
              style={{ animationDelay: "1s" }}
            />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 title-animate">
            {t("why.title")} <span className="gradient-text">REC?</span>
          </h2>
          <div className="flex items-center justify-center gap-3 underline-animate">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-teal-500 rounded-full"></div>
            <div className="h-2 w-2 bg-teal-500 rounded-full"></div>
            <div className="h-1 w-20 bg-gradient-to-l from-teal-500 to-transparent rounded-full"></div>
          </div>

          <p
            className="text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed subtitle-animate"
            style={{ animationDelay: "0.3s" }}
          >
            {t("why.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 items-start">
          {/* Left Side - Image */}
          <div className="relative h-full min-h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/REC/photo_2023-08-25_20-25-23.jpg"
              alt={t("why.image_alt")}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-white text-2xl font-bold mb-2">
                {t("why.image_title")}
              </h3>
              <p className="text-white/90 text-sm">{t("why.image_desc")}</p>
            </div>
          </div>

          {/* Right Side - Accordions */}
          <div className="space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="feature-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <button
                    className={`w-full flex items-center gap-4 p-4 rounded-lg bg-white shadow group focus:outline-none border-2 transition-all accordion-border ${
                      openIndex === index
                        ? "open border-teal-500"
                        : "border-gray-200 hover:border-teal-300"
                    }`}
                    onClick={() => handleAccordionClick(index)}
                    aria-expanded={openIndex === index}
                    type="button"
                    disabled={isAnimating}
                  >
                    <div className="icon-wrapper w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className="w-5 h-5 text-white relative z-10" />
                    </div>
                    <span className="font-bold text-gray-800 text-base flex-1 text-left group-hover:text-teal-600 transition-colors duration-300">
                      {feature.title}
                    </span>
                    <ArrowRight
                      className={`w-5 h-5 ml-2 transition-all duration-500 ease-out ${
                        openIndex === index
                          ? "rotate-90 text-teal-600 scale-110"
                          : "text-gray-400 group-hover:text-teal-500 group-hover:translate-x-0.5"
                      }`}
                    />
                  </button>
                  <div
                    ref={(el) => {
                      contentRefs.current[index] = el;
                    }}
                    className={`accordion-content bg-white rounded-b-lg border-x-2 border-b-2 ${
                      openIndex === index
                        ? "open border-teal-500"
                        : "closed border-transparent"
                    }`}
                    style={{
                      maxHeight:
                        openIndex === index
                          ? `${contentRefs.current[index]?.scrollHeight ?? 0}px`
                          : "0px",
                    }}
                  >
                    <div
                      className={`accordion-inner px-4 pb-4 pt-2 text-gray-600 leading-relaxed ${
                        openIndex === index ? "content-reveal" : ""
                      }`}
                    >
                      {feature.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center cta-animate">
          <button className="btn-primary bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg flex items-center gap-2 group relative z-10">
            <span className="relative z-10">{t("why.learn_more")}</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button className="btn-secondary border-2 border-teal-600 text-teal-600 hover:text-teal-700 px-8 py-3.5 rounded-xl font-semibold flex items-center gap-2 group bg-white relative z-10">
            <span className="relative z-10">{t("why.contact_us")}</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
