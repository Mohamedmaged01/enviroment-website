import React from "react";
import {
  Leaf,
  TrendingUp,
  Lightbulb,
  Briefcase,
  GraduationCap,
  Users,
  Globe,
} from "lucide-react";

const FeatureItem = ({ icon: Icon, title, description }) => (
  <div className="flex gap-3 group">
    <div className="flex-shrink-0 pt-0.5">
      <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
        <Icon className="w-4 h-4 text-white" />
      </div>
    </div>
    <div>
      <h4 className="font-bold text-gray-800 text-sm mb-1">{title}</h4>
      <p className="text-gray-600 text-xs leading-relaxed">{description}</p>
    </div>
  </div>
);

const WhyREC = () => {
  const features = [
    {
      icon: Leaf,
      title: "Environmental Impact:",
      description:
        "REC play a crucial role in helping businesses minimize their environmental impact through expert advice and solutions.",
    },
    {
      icon: TrendingUp,
      title: "Sustainable Development:",
      description:
        "We assist clients in adopting sustainable practices, incorporating eco-friendly technologies and energy-efficient processes.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving:",
      description:
        "Our consultants assess environmental issues and develop innovative solutions to environmental challenges.",
    },
    {
      icon: Briefcase,
      title: "Diverse Projects:",
      description:
        "We cover environmental impact assessments, site remediation, water resource management, and renewable energy projects.",
    },
    {
      icon: GraduationCap,
      title: "Educational Role:",
      description:
        "We educate clients about environmental issues and best practices, promoting environmental stewardship.",
    },
    {
      icon: Users,
      title: "Collaboration:",
      description:
        "We collaborate with experts from diverse fields, fostering a collaborative work environment for continuous learning.",
    },
    {
      icon: Globe,
      title: "Global Relevance:",
      description:
        "We work on international projects, addressing environmental challenges and contributing to global sustainability efforts.",
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100 rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-8 text-center">
          <p className="text-teal-600 italic mb-2">Get to Know About Us</p>
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Why <span className="text-teal-600">REC?</span>
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 mb-8">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex gap-4 justify-center">
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg text-sm">
            Learn More
          </button>
          <button className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-2.5 rounded-lg font-semibold transition-all text-sm">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyREC;
