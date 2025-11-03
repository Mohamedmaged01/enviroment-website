import React from "react";
import { ChevronRight, Phone, Mail, MapPin, Recycle } from "lucide-react";

const Footer = () => {
  const menuItems = [
    { title: "WIDGETS", hasArrow: true },
    { title: "BUTTON COLLECTION", hasArrow: false },
    { title: "PAGE TITLE STYLES", hasArrow: true },
    { title: "SECTION SEPARATORS", hasArrow: false },
    { title: "TYPOGRAPHY", hasArrow: false },
  ];

  return (
    <footer className="bg-linear-to-b from-gray-700 to-gray-800 text-gray-300 relative">
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
              ABOUT COMPANY
              <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-teal-500 -mb-3"></div>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6 mt-6">
              We are a leading Saudi environmental consultancy firm, driven by
              the belief that sustainability is not a choice—it is a
              responsibility. We empower our partners to achieve full
              environmental compliance through integrated, innovative, and
              practical solutions rooted in deep regulatory knowledge and
              extensive experience across industries—from energy and industry to
              urban development and tourism.
            </p>
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
                    className="flex items-center justify-between text-gray-300 hover:text-teal-400 transition-colors group hover-underline-left"
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
              CONTACT WITH THE TEAM
              <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-teal-500 -mb-3"></div>
            </h3>
            <div className="space-y-6 mt-6">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal-500 shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Have any questions?
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    +966556395674
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal-500 shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Landline phone
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    +966126144414
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-500 shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Write a email
                  </h4>
                  <a
                    href="mailto:info@recec.sa"
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    info@recec.sa
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-500 shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Visit our location
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Saudi Arabia - Jeddah
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Logo Column (replaces Latest News) */}
          <div className="flex flex-col items-start lg:items-center">
            <img
              src="/logo-en.png"
              alt="REC Logo"
              className="h-20 w-auto object-contain mb-6"
            />
            {/* Social Media Links below logo */}
            <div className="flex gap-4 items-center mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition-all transform hover:scale-110"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition-all transform hover:scale-110"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4L20 20" />
                  <path d="M20 4L4 20" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition-all transform hover:scale-110"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.25 11.25h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition-all transform hover:scale-110"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.414 3.678 1.395c-.981.981-1.264 2.093-1.323 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.281.342 2.393 1.323 3.374.981.981 2.093 1.264 3.374 1.323C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.342 3.374-1.323.981-.981 1.264-2.093 1.323-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.281-.342-2.393-1.323-3.374-.981-.981-2.093-1.264-3.374-1.323C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
