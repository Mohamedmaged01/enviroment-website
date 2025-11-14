import React, { useState } from "react";
import {
  Facebook,
  Linkedin,
  Instagram,
  ChevronDown,
  Search,
  X as XIcon,
} from "lucide-react";
import i18next from "./i18n";
import { useTranslation } from "react-i18next";

export default function EcofineNavbar() {
  const [activeMenu, setActiveMenu] = useState("Home");
  const { t, i18n } = useTranslation();

  const handleLangChange = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      {/* Top Bar */}
      <div className="bg-linear-to-r from-teal-900 via-teal-800 to-teal-900">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-12 text-sm">
            {/* Left - Address and Hotline */}
            <div className="flex items-center gap-8 text-gray-300">
              <span>{t("navbar.location")}</span>
              <span>{t("navbar.landline")}</span>
              <span>{t("navbar.mobile")}</span>
            </div>

            {/* Right - Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-gray-300">{t("navbar.follow")}</span>
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
              <button onClick={() => handleLangChange("en")}>EN</button>
              <button onClick={() => handleLangChange("ar")}>AR</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <img
            src="/REC/rec logo.png"
            alt="Logo"
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
                {t("navbar.home")}
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
              {t("navbar.about")}
            </button>

            {/* Service */}
            <button
              onClick={() => setActiveMenu("Service")}
              className={`text-teal-900 font-medium hover:text-[#5EC198] transition ${
                activeMenu === "Service" ? "text-[#5EC198]" : ""
              }`}
            >
              {t("navbar.service")}
            </button>

            {/* Page with Badge */}
            <div className="relative">
              <button
                onClick={() => setActiveMenu("Page")}
                className={`flex items-center gap-1 text-teal-900 font-medium hover:text-[#5EC198] transition ${
                  activeMenu === "Page" ? "text-[#5EC198]" : ""
                }`}
              >
                {t("navbar.page")}
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
              {t("navbar.blog")}
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Contact */}
            <button
              onClick={() => setActiveMenu("Contact")}
              className={`text-teal-900 font-medium hover:text-[#5EC198] transition ${
                activeMenu === "Contact" ? "text-[#5EC198]" : ""
              }`}
            >
              {t("navbar.contact")}
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
