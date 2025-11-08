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

export default function EcofineFooter() {
  const [email, setEmail] = useState("");

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Location Card */}
          <div className="bg-[#5EC198] bg-opacity-90 rounded-2xl p-8 flex items-start gap-4">
            <div className="bg-white rounded-full p-3 shrink-0">
              <MapPin className="w-6 h-6 text-[#5EC198]" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Visit our location</h3>
              <p className="text-black/90">Saudi Arabia - Jeddah</p>
            </div>
          </div>

          {/* Call Us Card */}
          <div className="bg-[#5EC198] bg-opacity-90 rounded-2xl p-8 flex items-start gap-4">
            <div className="bg-white rounded-full p-3 shrink-0">
              <Phone className="w-6 h-6 text-[#5EC198]" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Landline phone</h3>
              <p className="text-black/90">+966126144414</p>
              <h3 className="text-xl font-bold mb-2 mt-4">
                Have any questions?
              </h3>
              <p className="text-black/90">+966556395674</p>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-[#5EC198] bg-opacity-90 rounded-2xl p-8 flex items-start gap-4">
            <div className="bg-white rounded-full p-3 shrink-0">
              <Mail className="w-6 h-6 text-[#5EC198]" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Write a email</h3>
              <p className="text-black/90">info@recec.sa</p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo-en.png"
                alt="Ecofine Logo"
                className="h-15 w-auto "
              />
            </div>
            <p className="text-gray-700 mb-6">
              Protecting biodiversity and natural habitats is crucial for
              maintaining a healthy and sustainable ecology.
            </p>
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
            <h3 className="text-xl font-bold mb-6">Quick Link</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-primary transition"
                >
                  Water Conservation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-primary transition"
                >
                  Global Warming
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-primary transition"
                >
                  Climate Adaptation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-primary transition"
                >
                  Urban planning
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-primary transition"
                >
                  Energy Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Recent News */}
          <div>
            <h3 className="text-xl font-bold mb-6">Recent News</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <img
                  src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=80&h=80&fit=crop"
                  alt="News"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h4 className="text-sm font-semibold mb-1 hover:text-primary transition cursor-pointer text-black">
                    Go green and reduce your carbon...
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
                    Make a statement support of the...
                  </h4>
                  <p className="text-xs text-gray-700">April 3, 2023</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-700 mb-4">
              Your opinion is important to us. So contact us for any service.
            </p>
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
            <a href="https://recec.sa/" className="hover:text-primary transition" target="_blank" rel="noopener noreferrer">
              © Copyright recec.sa
            </a>
            <span>|</span>
            <a href="https://www.scadaatech.com/" className="hover:text-primary transition" target="_blank" rel="noopener noreferrer">
            developed by :   www.scadaatech.com
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
