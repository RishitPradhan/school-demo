/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const renderActiveView = () => {
    switch (activeTab) {
      case "home":
        return (
          <HomeView
            onNavigateToTab={(tab) => {
              setActiveTab(tab);
            }}
            onOpenApply={() => setIsApplyOpen(true)}
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
    </div>
  );
}

