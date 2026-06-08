import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  MapPin, 
  Sparkles,
  Info
} from "lucide-react";
import { FACILITIES, GALLERY_ITEMS } from "../data";

export default function FacilitiesView() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Campus" | "Sports" | "Laboratory" | "Events">("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Filter gallery items
  const filteredGallery = activeFilter === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  const filterTabs: ("All" | "Campus" | "Sports" | "Laboratory" | "Events")[] = [
    "All", "Campus", "Sports", "Laboratory", "Events"
  ];

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredGallery.length);
    }
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredGallery.length) % filteredGallery.length);
    }
  };

  return (
    <div id="facilities-view-container" className="">
      
      {/* 1. Hero Section */}
      <section id="facilities-hero" className="bg-slate-900 text-white pt-32 pb-20 sm:pt-40 sm:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&auto=format&fit=crop&q=80"
            className="w-full h-full object-cover"
            alt="School Campus Grounds"
          />
          <div className="absolute inset-0 bg-slate-900" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-6">
          <span className="text-amber-500 font-mono text-xs uppercase tracking-widest font-semibold bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
            Our Infrastructure
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-display text-white">
            World-Class Infrastructure
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light">
            We operate a sprawling climate-controlled campus designed to ensure physical safety, deep creative expression, and technical curiosity.
          </p>
        </div>
      </section>

      {/* 2. Facilities Cards Grid */}
      <section id="facilities-grid" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <h2 className="text-3xl font-bold font-display text-slate-900 tracking-tight">
              An Environment of Learning & Play
            </h2>
            <div className="h-1 w-16 bg-amber-500 mx-auto rounded-full" />
            <p className="text-slate-600 text-sm">
              Take a walk through our specialized arenas, crafted from certified high-grade architectural standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FACILITIES.map((fac) => (
              <div
                key={fac.id}
                className="bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col h-full hover:-translate-y-1"
              >
                {/* Image panel */}
                <div className="h-[220px] bg-slate-200 relative overflow-hidden">
                  <img
                    src={fac.imageUrl}
                    alt={fac.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-amber-500 border border-slate-800 text-[10px] font-mono tracking-wider font-bold uppercase py-1 px-3 rounded-full">
                    {fac.category}
                  </span>
                </div>

                {/* Content block */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold font-display text-slate-900 mb-2 leading-snug">
                      {fac.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-light mb-4">
                      {fac.description}
                    </p>
                  </div>
                  
                  <div className="pt-2 border-t border-slate-100/80 flex items-center gap-1.5 text-[11px] text-slate-450 font-medium">
                    <Info className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                    <span>Climate-controlled, fully secure wifi hub</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Campus Gallery with Category Filters */}
      <section id="campus-gallery-section" className="py-20 bg-slate-50 border-t border-slate-105">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-mono font-semibold text-amber-600 bg-amber-50 px-2.5 py-1 rounded">
              Memories & Spaces
            </span>
            <h2 className="text-3xl font-bold font-display text-slate-900 tracking-tight">
              A Glimpse of the Vidwan Experience
            </h2>
            <div className="h-1 w-16 bg-amber-500 mx-auto rounded-full" />
            <p className="text-slate-600 text-sm">
              Filter through our dynamic activity maps, showing direct action in sports arenas, arts studios, chemistry labs, and events.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-slate-900 text-amber-500 border border-slate-800 shadow"
                      : "bg-white text-slate-600 hover:text-slate-900 border border-slate-100 hover:bg-slate-100"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Masonry-like Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelectedImageIndex(index)}
                className="group relative bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer aspect-[4/3] sm:aspect-square"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Hover overlay detail */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                  <span className="text-[10px] font-mono font-bold text-amber-500 uppercase tracking-widest block mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-base font-bold font-display text-white leading-tight">
                    {item.title}
                  </h4>
                  {item.description && (
                    <p className="text-[11px] text-slate-300 leading-normal mt-1 font-light">
                      {item.description}
                    </p>
                  )}
                  <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-mono tracking-wider font-semibold text-amber-400 bg-white/10 w-fit px-2.5 py-1 rounded">
                    <Maximize2 className="h-3 w-3" /> CLICK TO EXPAND
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Rich Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* Close trigger */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-6 right-6 p-2 bg-slate-900 border border-slate-850 hover:bg-amber-500 hover:text-slate-950 text-slate-400 rounded-full transition-all cursor-pointer z-50"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Panel wrapper */}
            <div
              className="relative max-w-5xl w-full flex flex-col md:flex-row bg-slate-900/90 border border-slate-850 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Photo section */}
              <div className="relative flex-grow md:w-3/5 bg-black flex items-center justify-center aspect-[4/3] md:aspect-auto">
                
                {/* Arrow left */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 p-2 rounded-full bg-slate-900/80 hover:bg-amber-500 text-white hover:text-slate-950 transition-all cursor-pointer"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <img
                  src={filteredGallery[selectedImageIndex].imageUrl}
                  alt={filteredGallery[selectedImageIndex].title}
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                />

                {/* Arrow right */}
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 p-2 rounded-full bg-slate-900/80 hover:bg-amber-500 text-white hover:text-slate-950 transition-all cursor-pointer"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Text detail section */}
              <div className="p-6 md:p-8 md:w-2/5 md:max-w-sm flex flex-col justify-between bg-slate-900 border-t md:border-t-0 md:border-l border-slate-800 text-white space-y-6">
                <div className="space-y-4">
                  <span className="px-2.5 py-1 rounded bg-amber-500/15 border border-amber-500/20 text-amber-500 text-[10px] font-mono tracking-widest font-bold uppercase">
                    {filteredGallery[selectedImageIndex].category}
                  </span>
                  <h3 className="text-xl font-bold font-display leading-snug">
                    {filteredGallery[selectedImageIndex].title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {filteredGallery[selectedImageIndex].description || "Campus activity highlighting student initiatives and research benchmarks under educational panels."}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-3 font-mono text-[11px] text-slate-500">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-amber-500" />
                    <span>Vidwan Delhi Campus Arena</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-amber-500" />
                    <span>Academic Term 2024-25</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. Schedule campus tour section */}
      <section id="tour-schedule" className="py-20 bg-slate-900 border-t border-slate-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="bg-amber-500/10 text-amber-500 p-3 rounded-full w-fit mx-auto">
            <Sparkles className="h-6 w-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight">
            Schedule a Guided Campus Tour
          </h2>
          <p className="text-xs sm:text-sm text-slate-350 max-w-2xl mx-auto leading-relaxed">
            Experience our infrastructure, labs, Olympic-size pool, and smart technology structures live in Delhi. Every Saturday, our registrar conducts guided tours followed by an open FAQ session with Dr. Arundhati.
          </p>
          
          <div className="pt-4">
            <a
              href="#main-footer-section"
              className="inline-block px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition-colors text-sm shadow"
            >
              Contact Registrar desk
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
