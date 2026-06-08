import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, GraduationCap, Phone, Sparkles } from "lucide-react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenApply: () => void;
}

export default function Navbar({ activeTab, setActiveTab, onOpenApply }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "academics", label: "Academics" },
    { id: "facilities", label: "Facilities & Gallery" },
    { id: "contact", label: "Contact Us" }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
  };

  return (
    <nav
      id="main-navigation-bar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg py-3"
          : "bg-slate-900 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo brand */}
          <div
            id="brand-logo"
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            <div className="bg-gradient-to-tr from-amber-500 to-amber-600 p-2 rounded-xl text-slate-950 shadow-md">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xl font-bold font-display text-white tracking-tight flex items-center gap-1.5">
                VIDWAN <span className="text-amber-500 font-medium text-xs tracking-wider bg-slate-800 px-2 py-0.5 rounded border border-slate-700">GLOBAL</span>
              </span>
              <p className="text-[10px] text-slate-400 font-mono tracking-widest uppercase -mt-0.5">
                School of Leaders
              </p>
            </div>
          </div>

          {/* Desktop navigation */}
          <div id="desktop-links" className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "text-amber-500 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-500 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Applied buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+18005550204"
              className="flex items-center text-xs text-slate-300 hover:text-white font-mono transition-colors"
            >
              <Phone className="h-3.5 w-3.5 mr-1 text-amber-500" />
              1800-555-0204
            </a>
            <button
              id="desktop-apply-button"
              onClick={onOpenApply}
              className="relative inline-flex items-center px-4.5 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 hover:from-amber-400 hover:to-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 cursor-pointer shadow-md transition-all active:scale-[0.98] overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Apply Now <Sparkles className="h-4 w-4" />
              </span>
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              id="mobile-apply-button-quick"
              onClick={onOpenApply}
              className="px-3 py-1.5 text-xs font-bold rounded-lg bg-amber-500 text-slate-950 shadow"
            >
              Apply
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-slate-900 border-t border-slate-800"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-item-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? "bg-slate-800 text-amber-500 border-l-4 border-amber-500"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-slate-800 mt-2 space-y-3">
                <a
                  href="tel:+18005550204"
                  className="flex items-center px-4 py-2 text-sm text-slate-300 hover:text-white font-mono"
                >
                  <Phone className="h-4 w-4 mr-2 text-amber-500" />
                  1800-555-0204
                </a>
                <button
                  id="mobile-apply-button-nav"
                  onClick={() => {
                    setIsOpen(false);
                    onOpenApply();
                  }}
                  className="w-full py-3 px-4 font-bold rounded-xl text-center bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 hover:from-amber-400 hover:to-amber-500 transition-colors"
                >
                  Apply Online Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
