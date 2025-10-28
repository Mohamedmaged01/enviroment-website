import React from "react";
import {
  ChevronRight,
  Phone,
  Mail,
  Globe,
  Calendar,
  Recycle,
} from "lucide-react";

const Footer = () => {
  const menuItems = [
    { title: "WIDGETS", hasArrow: true },
    { title: "BUTTON COLLECTION", hasArrow: false },
    { title: "PAGE TITLE STYLES", hasArrow: true },
    { title: "SECTION SEPARATORS", hasArrow: false },
    { title: "TYPOGRAPHY", hasArrow: false },
  ];

  const newsItems = [
    { title: "Growing a Green Business", date: "APRIL 26, 2017" },
    { title: "Earth Quote", date: "APRIL 26, 2017" },
    { title: "Recycling basics", date: "APRIL 23, 2017" },
    { title: "Happy Earth Day!", date: "APRIL 23, 2017" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-700 to-gray-800 text-gray-300 relative">
      {/* Zigzag pattern at top */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-teal-600 overflow-hidden">
        <svg
          viewBox="0 0 1200 24"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <pattern
            id="zigzag"
            x="0"
            y="0"
            width="40"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <polygon points="0,24 20,0 40,24" fill="#4a5568" />
          </pattern>
          <rect width="1200" height="24" fill="url(#zigzag)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4 relative inline-block">
              ABOUT
              <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-teal-500 -mb-3"></div>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6 mt-6">
              Recycle WordPress Theme was designed to promote environmental
              quality, recycling and corporate sustainability. It is suitable
              for any green business, waste management company,
              environmental-friendly industry, organization or project.
            </p>
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded transition-colors">
              BUY THEME
            </button>
          </div>
          {/* Menu Section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4 relative inline-block">
              MENU
              <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-teal-500 -mb-3"></div>
            </h3>
            <ul className="space-y-3 mt-6">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center justify-between text-gray-300 hover:text-teal-400 transition-colors group"
                  >
                    <span>{item.title}</span>
                    {item.hasArrow && (
                      <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info Section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4 relative inline-block">
              CONTACT INFO
              <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-teal-500 -mb-3"></div>
            </h3>
            <div className="space-y-6 mt-6">
              <div className="flex items-start gap-3">
                <Recycle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    RECYCLE COMPANY
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    595 Commonwealth Avenue Boston,
                    <br />
                    Massachusetts 02215
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>+1-202-555-0190</p>
                  <p>+1-202-555-0199</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <a
                  href="mailto:email@example.com"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  email@example.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  orionthemes.com
                </a>
              </div>
            </div>
          </div>
          {/* Latest News Section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4 relative inline-block">
              LATEST NEWS
              <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-teal-500 -mb-3"></div>
            </h3>
            <ul className="space-y-5 mt-6">
              {newsItems.map((item, index) => (
                <li key={index}>
                  <a href="#" className="block group">
                    <h4 className="text-white font-medium mb-2 group-hover:text-teal-400 transition-colors">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
