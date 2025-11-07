import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronDown,
} from "lucide-react";

export default function EcofineNavbar() {
  const [activeMenu, setActiveMenu] = useState("Home");

  return (
    <nav className="bg-gradient-to-r from-teal-900 via-teal-800 to-teal-900">
      {/* Top Bar */}
      <div className="border-b border-teal-700">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-12 text-sm">
            {/* Left - Address and Hotline */}
            <div className="flex items-center gap-8 text-gray-300">
              <span>Visit our location: Saudi Arabia - Jeddah</span>
              <span>Landline: +966126144414</span>
              <span>Mobile: +966556395674</span>
            </div>

            {/* Right - Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-gray-300">Follow On :</span>
              <a
                href="#"
                className="text-gray-300 hover:text-green-400 transition"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-green-400 transition"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-green-400 transition"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-green-400 transition"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <img
            src="/logo-en.png"
            alt="Ecofine Logo"
            className="h-12 w-auto object-contain"
          />

          {/* Navigation Menu */}
          <div className="flex items-center gap-8">
            {/* Home with Badge */}
            <div className="relative">
              <button
                onClick={() => setActiveMenu("Home")}
                className={`flex items-center gap-1 text-white font-medium hover:text-green-400 transition ${
                  activeMenu === "Home" ? "text-green-400" : ""
                }`}
              >
                Home
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* About Us */}
            <button
              onClick={() => setActiveMenu("About Us")}
              className={`text-white font-medium hover:text-green-400 transition ${
                activeMenu === "About Us" ? "text-green-400" : ""
              }`}
            >
              About Us
            </button>

            {/* Service */}
            <button
              onClick={() => setActiveMenu("Service")}
              className={`text-white font-medium hover:text-green-400 transition ${
                activeMenu === "Service" ? "text-green-400" : ""
              }`}
            >
              Service
            </button>

            {/* Page with Badge */}
            <div className="relative">
              <button
                onClick={() => setActiveMenu("Page")}
                className={`flex items-center gap-1 text-white font-medium hover:text-green-400 transition ${
                  activeMenu === "Page" ? "text-green-400" : ""
                }`}
              >
                Page
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Blog */}
            <button
              onClick={() => setActiveMenu("Blog")}
              className={`flex items-center gap-1 text-white font-medium hover:text-green-400 transition ${
                activeMenu === "Blog" ? "text-green-400" : ""
              }`}
            >
              Blog
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Contact */}
            <button
              onClick={() => setActiveMenu("Contact")}
              className={`text-white font-medium hover:text-green-400 transition ${
                activeMenu === "Contact" ? "text-green-400" : ""
              }`}
            >
              Contact
            </button>

            {/* Get A Quote Button */}
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg transition flex items-center gap-2">
              Get A Quote
              <span className="text-xl">»</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
