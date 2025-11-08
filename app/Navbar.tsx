import React, { useState } from "react";
import {
  Facebook,
  Linkedin,
  Instagram,
  ChevronDown,
  Search,
  X as XIcon,
} from "lucide-react";

export default function EcofineNavbar() {
  const [activeMenu, setActiveMenu] = useState("Home");

  return (
    <nav className="bg-white border-b border-gray-200">
      {/* Top Bar */}
      <div className="bg-linear-to-r from-teal-900 via-teal-800 to-teal-900">
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
                className="text-gray-300 hover:text-[#5EC198] transition"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#5EC198] transition"
              >
                <XIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#5EC198] transition"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#5EC198] transition"
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
                className={`flex items-center gap-1 text-teal-900 font-medium hover:text-[#5EC198] transition ${
                  activeMenu === "Home" ? "text-[#5EC198]" : ""
                }`}
              >
                Home
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* About Us */}
            <button
              onClick={() => setActiveMenu("About Us")}
              className={`text-teal-900 font-medium hover:text-[#5EC198] transition ${
                activeMenu === "About Us" ? "text-[#5EC198]" : ""
              }`}
            >
              About Us
            </button>

            {/* Service */}
            <button
              onClick={() => setActiveMenu("Service")}
              className={`text-teal-900 font-medium hover:text-[#5EC198] transition ${
                activeMenu === "Service" ? "text-[#5EC198]" : ""
              }`}
            >
              Service
            </button>

            {/* Page with Badge */}
            <div className="relative">
              <button
                onClick={() => setActiveMenu("Page")}
                className={`flex items-center gap-1 text-teal-900 font-medium hover:text-[#5EC198] transition ${
                  activeMenu === "Page" ? "text-[#5EC198]" : ""
                }`}
              >
                Page
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Blog */}
            <button
              onClick={() => setActiveMenu("Blog")}
              className={`flex items-center gap-1 text-teal-900 font-medium hover:text-[#5EC198] transition ${
                activeMenu === "Blog" ? "text-[#5EC198]" : ""
              }`}
            >
              Blog
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Contact */}
            <button
              onClick={() => setActiveMenu("Contact")}
              className={`text-teal-900 font-medium hover:text-[#5EC198] transition ${
                activeMenu === "Contact" ? "text-[#5EC198]" : ""
              }`}
            >
              Contact
            </button>

            {/* Get A Quote Button */}
            <button className="bg-[#5EC198] hover:bg-teal-900 text-white font-medium px-6 py-3 rounded-lg transition flex items-center gap-2">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
