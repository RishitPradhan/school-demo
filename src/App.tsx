/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import AcademicsView from "./components/AcademicsView";
import FacilitiesView from "./components/FacilitiesView";
import ContactView from "./components/ContactView";
import ApplyModal from "./components/ApplyModal";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [isApplyOpen, setIsApplyOpen] = useState<boolean>(false);
  const [videoReady, setVideoReady] = useState<boolean>(false);
  const [minimumTimePassed, setMinimumTimePassed] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  useEffect(() => {
    // Set minimum display time of 1.2 seconds for branding preloader
    const minTimer = setTimeout(() => {
      setMinimumTimePassed(true);
    }, 1200);

    // Safety fallback: if video hasn't loaded in 4 seconds, mark it as ready anyway
    const fallbackTimer = setTimeout(() => {
      setVideoReady(true);
    }, 4000);

    return () => {
      clearTimeout(minTimer);
      clearTimeout(fallbackTimer);
    };
  }, []);

  const isVideoLoaded = videoReady && minimumTimePassed;

  const renderActiveView = () => {
    switch (activeTab) {
      case "home":
        return (
          <HomeView
            onNavigateToTab={(tab) => {
              setActiveTab(tab);
            }}
            onOpenApply={() => setIsApplyOpen(true)}
            onVideoLoaded={() => setVideoReady(true)}
          />
        );
      case "about":
        return <AboutView onOpenApply={() => setIsApplyOpen(true)} />;
      case "academics":
        return <AcademicsView onOpenApply={() => setIsApplyOpen(true)} />;
      case "facilities":
        return <FacilitiesView />;
      case "contact":
        return <ContactView />;
      default:
        return (
          <HomeView
            onNavigateToTab={(tab) => {
              setActiveTab(tab);
            }}
            onOpenApply={() => setIsApplyOpen(true)}
            onVideoLoaded={() => setVideoReady(true)}
          />
        );
    }
  };

  return (
    <div id="school-website-appl" className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between">
      {/* 1. Global Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenApply={() => setIsApplyOpen(true)}
      />

      {/* 2. Scrollable Active Tab Content with Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Global Footer Contact Map & Links */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenApply={() => setIsApplyOpen(true)}
      />

      {/* 4. Global Admission Registration Portal Modal */}
      <ApplyModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
      />

      {/* 5. Premium Loader Screen overlay */}
      <AnimatePresence>
        {!isVideoLoaded && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center pointer-events-auto select-none"
          >
            <div className="flex flex-col items-center space-y-6">
              {/* Pulsing logo */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.85, 1, 0.85],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-gradient-to-tr from-amber-500 to-amber-600 p-5 rounded-2xl text-slate-950 shadow-xl"
              >
                <GraduationCap className="h-12 w-12" />
              </motion.div>

              <div className="text-center animate-pulse">
                <h1 className="text-2xl font-bold font-display text-white tracking-widest">
                  VIDWAN <span className="text-amber-500">GLOBAL</span>
                </h1>
                <p className="text-xs text-slate-400 font-mono tracking-widest uppercase mt-1">
                  School of Leaders
                </p>
              </div>

              {/* Progress bar line */}
              <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-0 bottom-0 w-1/2 bg-amber-500 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
