import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Eye, 
  Target, 
  Award,
  ChevronDown,
  Sparkles,
  Flag,
  Cpu,
  Music,
  Network,
  Trophy,
  GraduationCap
} from "lucide-react";
import { TIMELINE_MILESTONES, TEACHERS } from "../data";

interface AboutViewProps {
  onOpenApply: () => void;
}

export default function AboutView({ onOpenApply }: AboutViewProps) {
  const [selectedTeacherId, setSelectedTeacherId] = useState<string | null>(null);

  // Helper to map string to Lucide icon
  const getTimelineIcon = (iconName: string) => {
    switch (iconName) {
      case "Flag": return <Flag className="h-5 w-5" />;
      case "Cpu": return <Cpu className="h-5 w-5" />;
      case "Music": return <Music className="h-5 w-5" />;
      case "Network": return <Network className="h-5 w-5" />;
      case "Trophy": return <Trophy className="h-5 w-5" />;
      default: return <GraduationCap className="h-5 w-5" />;
    }
  };

  return (
    <div id="about-us-view" className="">
      
      {/* 1. Header Banner */}
      <section id="about-hero" className="bg-slate-900 text-white pt-32 pb-20 sm:pt-40 sm:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&auto=format&fit=crop&q=80"
            className="w-full h-full object-cover object-center"
            alt="Students on Campus"
          />
          <div className="absolute inset-0 bg-slate-900" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-6">
          <span className="text-amber-500 font-mono text-xs uppercase tracking-widest font-semibold bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
            Discover Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-display text-white">
            Cultivating Intelligent Leaders of Tomorrow
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light">
            An academic sanctuary that merges timeless human values with digital science to forge forward-thinking global citizens.
          </p>
        </div>
      </section>

      {/* 2. Vision, Mission & Philosophy Cards */}
      <section id="vision-mission" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Vision card */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm space-y-4 hover:shadow-md transition-all">
              <div className="bg-blue-500/10 p-3.5 rounded-xl text-blue-600 w-fit">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-slate-900">
                Our Vision
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To be a premier Global Institution of learning, creating visionary leaders who hold active capabilities to solve complex real-world dilemmas, armed with moral depth and innovative intellect.
              </p>
            </div>

            {/* Mission card */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm space-y-4 hover:shadow-md transition-all">
              <div className="bg-amber-500/10 p-3.5 rounded-xl text-amber-600 w-fit">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-slate-900">
                Our Mission
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We commit to designing student-centric inquiry models, keeping classrooms small, integrating modern software/AI literacies, and building diverse physical capacities to make education standardly joyous and permanent.
              </p>
            </div>

            {/* Philosophy card */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm space-y-4 hover:shadow-md transition-all">
              <div className="bg-teal-500/10 p-3.5 rounded-xl text-teal-600 w-fit">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-slate-900">
                Our Educational Belief
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Education is not storing facts in files. In the digital age, wisdom lies in active synthesising, asking the right questions, treating failures as prototypes, and leading with radical empathy.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. 20+ Years of Timeline */}
      <section id="timeline-excellence" className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <h2 className="text-3xl font-bold font-display text-slate-900 tracking-tight">
              20+ Years of Relentless Excellence
            </h2>
            <div className="h-1 w-16 bg-amber-500 mx-auto rounded-full" />
            <p className="text-slate-600 text-sm">
              Take a walk down memory lane to see how our campus expanded from modular rooms to a premier national landmark.
            </p>
          </div>

          {/* Timeline chart */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center vertical bar */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200" />

            <div className="space-y-12">
              {TIMELINE_MILESTONES.map((mile, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={mile.year} className={`relative flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""}`}>
                    
                    {/* Circle marker */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-[9px] md:-translate-x-1/2 w-5 h-5 rounded-full bg-amber-500 border-4 border-slate-50 z-10" />

                    {/* Timeline Card */}
                    <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                      <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all space-y-2">
                        <div className="flex items-center space-x-2.5">
                          <div className="bg-amber-500/10 p-2 rounded-lg text-amber-600">
                            {getTimelineIcon(mile.iconName)}
                          </div>
                          <span className="font-mono text-lg font-bold text-slate-900">{mile.year}</span>
                        </div>
                        <h4 className="font-bold text-base text-slate-900 font-display">
                          {mile.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {mile.description}
                        </p>
                      </div>
                    </div>

                    {/* Empty spacing for desktop */}
                    <div className="hidden md:block w-1/2" />
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 4. Educators Grid Section */}
      <section id="our-faculty" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-mono font-semibold text-amber-600 uppercase tracking-widest bg-amber-50 px-2.5 py-1 rounded">
              Pedagogical Leaders
            </span>
            <h2 className="text-3xl font-bold font-display text-slate-900 tracking-tight">
              Our Certified Educators
            </h2>
            <div className="h-1 w-16 bg-amber-500 mx-auto rounded-full" />
            <p className="text-slate-600 text-sm">
              We recruit globally, maintaining strict teacher certification criteria. Meet the core minds building the Vidwan landscape.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEACHERS.map((teacher) => {
              const isOpen = selectedTeacherId === teacher.id;
              return (
                <div
                  key={teacher.id}
                  className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col h-full"
                >
                  <div className="relative overflow-hidden aspect-[4/3] sm:aspect-square bg-slate-200">
                    <img
                      src={teacher.imageUrl}
                      alt={teacher.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                    <div>
                      <h4 className="font-bold font-display text-slate-900 text-base leading-tight">
                        {teacher.name}
                      </h4>
                      <p className="text-xs text-amber-600 font-semibold mt-0.5">{teacher.role}</p>
                      
                      <div className="mt-3 text-[11px] text-slate-500 font-medium space-y-1">
                        <p>🎓 {teacher.qualification}</p>
                        <p>⏱️ {teacher.experience} Experience</p>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => setSelectedTeacherId(isOpen ? null : teacher.id)}
                        className="w-full py-2 bg-slate-200/60 hover:bg-amber-500/10 text-slate-700 hover:text-amber-700 text-xs font-semibold rounded-lg flex items-center justify-center gap-1 transition-all cursor-pointer"
                      >
                        {isOpen ? "Hide Dossier" : "View Dossier"} <ChevronDown className={`h-3 w-3 transform transition-transform ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-amber-500/5 border-t border-amber-500/15 px-5 py-4 text-xs text-slate-600 text-left"
                      >
                        <p className="italic leading-relaxed">"{teacher.bio}"</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12 bg-slate-900 text-white rounded-3xl p-8 md:p-10 border border-slate-800 shadow-md">
            <h3 className="text-lg md:text-xl font-bold font-display text-white mb-2">
              Interested in shaping the next generation?
            </h3>
            <p className="text-xs text-slate-400 max-w-xl mx-auto mb-5 font-light">
              We seek qualified pedagogues holding deep technological comfort, creative interests, and high emotional quotients. Contact our human resource panel.
            </p>
            <a
              href="mailto:careers@vidwanglobal.edu.in"
              className="inline-block px-6 py-3 font-semibold text-xs bg-amber-500 text-slate-950 rounded-xl hover:bg-amber-400 transition-all shadow"
            >
              Email Career CV
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
