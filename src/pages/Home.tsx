import React, { useState, useEffect } from "react";
import ContactCard from "../components/ContactCard";
import { contacts } from "../data/contacts";
import efficia_logo from "../assets/efficia-logo.png";

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-secondary-50 to-secondary-100">
      {/* Fixed Logo and Description */}
      <div
        className={`fixed top-0 left-0 p-6 z-20 max-w-xs transition-all duration-300 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center">
            <img
              src={efficia_logo}
              alt="Efficia Logo"
              className="h-12 mr-2 inline-block"
            />
          </div>
          <h1 className="text-xl text-primary-600">Efficia IT Solutions</h1>
        </div>
        <p className="text-md text-secondary-600 pl-2 border-l-2 border-primary-500">
          Meet Our Team!
        </p>
      </div>

      {/* Main Content */}
      <div className="px-6 pt-16 md:pt-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
            {Object.values(contacts).map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
