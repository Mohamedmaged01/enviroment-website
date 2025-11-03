'use client';
import React from "react";
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

type FeatureItemProps = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  index: number;
};

const FeatureItem: React.FC<FeatureItemProps> = ({ icon: Icon, title, description, index }) => {
  return (
    <div
      className="flex gap-4 group cursor-pointer feature-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex-shrink-0 pt-1 relative">
        <div className="icon-wrapper w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-xl ripple-ring"></div>
          <Icon className="w-5 h-5 text-white relative z-10 icon-bounce" />
          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-3 h-3 bg-white/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        {/* Connecting line */}
        <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-teal-200 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
      </div>
      <div className="flex-1 pb-2">
        <h4 className="font-bold text-gray-800 text-base mb-2 group-hover:text-teal-600 transition-colors duration-300 flex items-center gap-2">
          {title}
          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

type ActiveButtonType = "learn" | "contact" | null;

const WhyREC: React.FC = () => {
  const [activeButton, setActiveButton] = React.useState<ActiveButtonType>(null);

  const features: FeatureItemProps[] = [
    {
      icon: Leaf,
      title: "Environmental Impact:",
      description:
        "REC play a crucial role in helping businesses minimize their environmental impact through expert advice and solutions.",
      index: 0,
    },
    {
      icon: TrendingUp,
      title: "Sustainable Development:",
      description:
        "We assist clients in adopting sustainable practices, incorporating eco-friendly technologies and energy-efficient processes.",
      index: 1,
    },
    {
      icon: Lightbulb,
      title: "Problem Solving:",
      description:
        "Our consultants assess environmental issues and develop innovative solutions to environmental challenges.",
      index: 2,
    },
    {
      icon: Briefcase,
      title: "Diverse Projects:",
      description:
        "We cover environmental impact assessments, site remediation, water resource management, and renewable energy projects.",
      index: 3,
    },
    {
      icon: GraduationCap,
      title: "Educational Role:",
      description:
        "We educate clients about environmental issues and best practices, promoting environmental stewardship.",
      index: 4,
    },
    {
      icon: Users,
      title: "Collaboration:",
      description:
        "We collaborate with experts from diverse fields, fostering a collaborative work environment for continuous learning.",
      index: 5,
    },
    {
      icon: Globe,
      title: "Global Relevance:",
      description:
        "We work on international projects, addressing environmental challenges and contributing to global sustainability efforts.",
      index: 6,
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-teal-50/30 relative overflow-hidden">
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
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes iconBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes ripple {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
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
        .feature-card {
          animation: fadeInUp 0.6s ease-out backwards;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .feature-card:hover {
          transform: translateX(8px);
        }
        .icon-wrapper {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .feature-card:hover .icon-wrapper {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 20px 25px -5px rgba(20, 184, 166, 0.4);
        }
        .icon-bounce {
          animation: iconBounce 2s ease-in-out infinite;
        }
        .ripple-ring {
          animation: ripple 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .floating-shape {
          animation: float 20s ease-in-out infinite;
        }
        .floating-shape-delayed {
          animation: float 25s ease-in-out infinite 5s;
        }
        .floating-shape-slow {
          animation: float 30s ease-in-out infinite 10s;
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
          background: linear-gradient(135deg, #14b8a6, #10b981, #14b8a6);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s ease infinite;
        }
        .shimmer-effect {
          position: relative;
          overflow: hidden;
        }
        .shimmer-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          animation: shimmer 3s infinite;
        }
        .btn-primary {
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
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 25px -5px rgba(20, 184, 166, 0.4);
        }
        .btn-secondary {
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
          transform: translateY(-2px);
          box-shadow: 0 10px 20px -5px rgba(20, 184, 166, 0.2);
          border-color: #14b8a6;
        }
        .sparkle-icon {
          animation: sparkle 2s ease-in-out infinite;
        }
        .decorative-circle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(20, 184, 166, 0.1), transparent);
        }
      `}</style>

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100 rounded-full opacity-20 blur-3xl floating-shape"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100 rounded-full opacity-20 blur-3xl floating-shape-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-100 rounded-full opacity-10 blur-3xl floating-shape-slow"></div>
        {/* Decorative circles */}
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
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-3 subtitle-animate">
            <Sparkles className="w-4 h-4 text-teal-600 sparkle-icon" />
            <p className="text-teal-600 italic font-medium">
              Get to Know About Us
            </p>
            <Sparkles
              className="w-4 h-4 text-teal-600 sparkle-icon"
              style={{ animationDelay: "1s" }}
            />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 title-animate">
            Why <span className="gradient-text">REC?</span>
          </h2>

          <div className="flex items-center justify-center gap-3 underline-animate">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-teal-500 rounded-full"></div>
            <div className="h-2 w-2 bg-teal-500 rounded-full"></div>
            <div className="h-1 w-20 bg-gradient-to-l from-transparent to-teal-500 rounded-full"></div>
          </div>

          <p
            className="text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed subtitle-animate"
            style={{ animationDelay: "0.3s" }}
          >
            Discover what makes us the premier choice for environmental
            consultancy services
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center cta-animate">
          <button
            className="btn-primary bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg flex items-center gap-2 group relative z-10"
            onMouseEnter={() => setActiveButton("learn")}
            onMouseLeave={() => setActiveButton(null)}
          >
            <span className="relative z-10">Learn More</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            className="btn-secondary border-2 border-teal-600 text-teal-600 hover:text-teal-700 px-8 py-3.5 rounded-xl font-semibold flex items-center gap-2 group bg-white relative z-10"
            onMouseEnter={() => setActiveButton("contact")}
            onMouseLeave={() => setActiveButton(null)}
          >
            <span className="relative z-10">Contact Us</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyREC;
