"use client";
import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Send,
  ArrowUp,
  X as XIcon,
} from "lucide-react";
import i18next from "./i18n";
import { useTranslation } from "react-i18next";

export default function EcofineFooter() {
  const [email, setEmail] = useState("");
  const { t, i18n } = useTranslation();

  const handleLangChange = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#f3f4f6] text-black border-t border-[#e5e7eb]">
      {/* Contact Cards Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => handleLangChange("en")}>EN</button>
          <button onClick={() => handleLangChange("ar")}>AR</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Location Card */}
          <div className="bg-[#5EC198] bg-opacity-90 rounded-2xl p-8 flex items-start gap-4">
            <div className="bg-white rounded-full p-3 shrink-0">
              <MapPin className="w-6 h-6 text-[#5EC198]" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{t("footer.location")}</h3>
              <p className="text-black/90">{t("footer.address")}</p>
            </div>
          </div>

          {/* Call Us Card */}
          <div className="bg-[#5EC198] bg-opacity-90 rounded-2xl p-8 flex items-start gap-4">
            <div className="bg-white rounded-full p-3 shrink-0">
              <Phone className="w-6 h-6 text-[#5EC198]" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{t("footer.landline")}</h3>
              <p className="text-black/90">{t("footer.landline_number")}</p>
              <h3 className="text-xl font-bold mb-2 mt-4">
                {t("footer.questions")}
              </h3>
              <p className="text-black/90">{t("footer.mobile_number")}</p>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-[#5EC198] bg-opacity-90 rounded-2xl p-8 flex items-start gap-4">
            <div className="bg-white rounded-full p-3 shrink-0">
              <Mail className="w-6 h-6 text-[#5EC198]" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                {t("footer.email_title")}
              </h3>
              <p className="text-black/90">{t("footer.email")}</p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/REC/rec logo.png"
                alt="Logo"
                className="h-15 w-auto "
              />
            </div>
            <p className="text-gray-700 mb-6">{t("footer.brand")}</p>
            <div className="flex gap-4">
              <button className="  p-2    ">
                <Facebook className="w-5 h-5 text-primary" />
              </button>
              <button className=" p-2   ">
                <XIcon className="w-5 h-5 text-primary" />
              </button>
              <button className=" p-2    ">
                <Instagram className="w-5 h-5 text-primary" />
              </button>
              <button className=" p-2 ">
                <Linkedin className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              {t("footer.quick_links")}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-primary transition"
                >
                  {t("footer.water")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-primary transition"
                >
                  {t("footer.warming")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-primary transition"
                >
                  {t("footer.climate")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-primary transition"
                >
                  {t("footer.urban")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-primary transition"
                >
                  {t("footer.energy")}
                </a>
              </li>
            </ul>
          </div>

          {/* Recent News */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              {t("footer.recent_news")}
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <img
                  src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=80&h=80&fit=crop"
                  alt="News"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h4 className="text-sm font-semibold mb-1 hover:text-primary transition cursor-pointer text-black">
                    {t("footer.news1")}
                  </h4>
                  <p className="text-xs text-gray-700">April 3, 2023</p>
                </div>
              </div>
              <div className="flex gap-3">
                <img
                  src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=80&h=80&fit=crop"
                  alt="News"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h4 className="text-sm font-semibold mb-1 hover:text-primary transition cursor-pointer text-black">
                    {t("footer.news2")}
                  </h4>
                  <p className="text-xs text-gray-700">April 3, 2023</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t("footer.newsletter")}</h3>
            <p className="text-gray-700 mb-4">{t("footer.newsletter_desc")}</p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                className="flex-1 bg-white text-black px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary border border-gray-200"
                required
              />
              <button
                type="submit"
                className="bg-primary hover:bg-secondary px-4 py-3 rounded-r-lg transition text-white"
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#e5e7eb] border-t border-[#d1d5db] relative">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 text-sm text-gray-700">
            <a
              href="https://recec.sa/"
              className="hover:text-primary transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.copyright")}
            </a>
            <span>|</span>
            <a
              href="https://www.scadaatech.com/"
              className="hover:text-primary transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.scada")}
            </a>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute right-8 -top-6 bg-primary hover:bg-secondary text-white p-3 rounded-lg shadow-lg transition"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>
    </footer>
  );
}
