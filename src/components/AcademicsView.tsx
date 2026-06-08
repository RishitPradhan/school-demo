import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Compass, 
  Cpu, 
  Palette, 
  Trophy, 
  Languages, 
  Heart,
  Calendar,
  Users,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { CURRICULUM_HIGHLIGHTS, ACADEMIC_STAGES } from "../data";

interface AcademicsViewProps {
  onOpenApply: () => void;
}

export default function AcademicsView({ onOpenApply }: AcademicsViewProps) {
  const [activeStageId, setActiveStageId] = useState("stage-preprimary");

  // Helper to map icon names to Lucide icons
  const getCurriculumIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass": return <Compass className="h-6 w-6" />;
      case "Cpu": return <Cpu className="h-6 w-6" />;
      case "Palette": return <Palette className="h-6 w-6" />;
      case "Trophy": return <Trophy className="h-6 w-6" />;
      case "Languages": return <Languages className="h-6 w-6" />;
      case "Heart": return <Heart className="h-6 w-6" />;
      default: return <Compass className="h-6 w-6" />;
    }
  };

  const selectedStage = ACADEMIC_STAGES.find((stage) => stage.id === activeStageId) || ACADEMIC_STAGES[0];

  return (
    <div id="academics-view" className="">
      
      {/* 1. Header Hero Panel */}
      <section id="academics-hero" className="bg-slate-900 text-white pt-32 pb-20 sm:pt-40 sm:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1600&auto=format&fit=crop&q=80"
            className="w-full h-full object-cover"
            alt="Teacher in laboratory"
          />
          <div className="absolute inset-0 bg-slate-900" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-6">
          <span className="text-amber-500 font-mono text-xs uppercase tracking-widest font-semibold bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
            Our Pedagogical Architecture
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-display text-white">
            Nurturing Lifelong Intellectual Passion
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light">
            Our curriculum integrates rigorous global science & literature with experiential projects to foster a flexible, innovative mindset.
          </p>
        </div>
      </section>

      {/* 2. Curriculum Highlights - Bento Grid */}
      <section id="curriculum-bento" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <h2 className="text-3xl font-bold font-display text-slate-900 tracking-tight">
              Curriculum Core Pillars
            </h2>
            <div className="h-1 w-16 bg-amber-500 mx-auto rounded-full" />
            <p className="text-slate-600 text-sm">
              We move far beyond dry rote-memory to equip youngsters with real core competency across six dimensional streams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CURRICULUM_HIGHLIGHTS.map((high) => (
              <div
                key={high.id}
                className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:bg-white hover:shadow-md transition-all flex flex-col space-y-4 relative group"
              >
                <div className={`p-3 rounded-2xl w-fit ${high.colorClass} border`}>
                  {getCurriculumIcon(high.iconName)}
                </div>
                <h3 className="text-lg font-bold font-display text-slate-900">
                  {high.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed flex-grow">
                  {high.description}
                </p>
                <div className="h-1 w-10 bg-amber-500/40 rounded group-hover:w-full transition-all" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Educational Milestones / Academic Levels (Interactive Tabs) */}
      <section id="education-stages" className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-mono font-semibold text-amber-600 bg-amber-50 px-2.5 py-1 rounded">
              Academic Milestones
            </span>
            <h2 className="text-3xl font-bold font-display text-slate-900 tracking-tight">
              Four Tiers of Progressive Milestones
            </h2>
            <div className="h-1 w-16 bg-amber-500 mx-auto rounded-full" />
            <p className="text-slate-600 text-sm">
              Explore how focus points dynamically transition from hand-eye coordination to Ivy League placements.
            </p>
          </div>

          {/* Interactive Navigation Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-4xl mx-auto">
            {ACADEMIC_STAGES.map((stage) => {
              const isActive = activeStageId === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-slate-900 text-amber-500 shadow-md border border-slate-800"
                      : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-100"
                  }`}
                >
                  {stage.level}
                </button>
              );
            })}
          </div>

          {/* Active Tab Panel with Motion */}
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStageId}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                {/* Visual Image Block */}
                <div className="lg:col-span-5 h-[280px] lg:h-auto relative bg-slate-100 min-h-[300px]">
                  <img
                    src={selectedStage.imageUrl}
                    alt={selectedStage.level}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent lg:hidden" />
                </div>

                {/* Content Panel */}
                <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 space-y-6">
                  
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded bg-slate-100 text-slate-800 text-xs font-mono font-medium">
                      🏫 {selectedStage.grades}
                    </span>
                    <span className="px-3 py-1 rounded bg-amber-500/10 text-amber-800 text-xs font-semibold">
                      👶 {selectedStage.ageGroup}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold font-display text-slate-900">
                      {selectedStage.level}
                    </h3>
                    <p className="text-sm font-semibold text-amber-600 font-mono">
                      Core Focus: {selectedStage.focus}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    {selectedStage.description}
                  </p>

                  <div className="border-t border-slate-100 pt-5 space-y-3.5">
                    <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-widest">
                      Program Highlights:
                    </h4>
                    
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      {selectedStage.highlights.map((high, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-700">
                          <CheckCircle2 className="h-4.5 w-4.5 text-amber-500 shrink-0 mt-0.5" />
                          <span>{high}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 4. Expert Faculty Commitment info */}
      <section id="faculty-commitment" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="bg-amber-500/10 text-amber-700 p-3 rounded-full w-fit mx-auto">
            <Award className="h-6 w-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 tracking-tight">
            Academic Rigor Governed By Stellar Standards
          </h2>
          <p className="text-sm text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our academic council holds master-level alignments. We mandate a professional developmental threshold where every teacher undergoes a regular 48-hour scientific pedagogical seminar every year to update coding certifications, wellness protocols, and interactive classroom dynamics.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left pt-6 max-w-4xl mx-auto">
            <div className="p-4 bg-slate-50 rounded-xl text-center border border-slate-100">
              <span className="block text-2xl font-extrabold text-slate-900 tracking-tight font-display">1:12</span>
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Teacher Ratio Pre-Primary</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl text-center border border-slate-100">
              <span className="block text-2xl font-extrabold text-slate-900 tracking-tight font-display">1:24</span>
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Teacher Ratio senior grades</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl text-center border border-slate-100">
              <span className="block text-2xl font-extrabold text-slate-900 tracking-tight font-display">100%</span>
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Smart Tech Equipped Rooms</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Begin Success Story CTA */}
      <section id="academic-cta" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="inline-block px-3 py-1 bg-amber-500 text-slate-950 font-bold font-mono text-[10px] uppercase rounded-full">
            Enroll admissions for 2026-2027
          </span>
          <h2 className="text-3xl font-bold font-display tracking-tight text-white leading-tight">
            Begin Your Success Story With Vidwan
          </h2>
          <p className="text-xs sm:text-sm text-slate-350 max-w-xl mx-auto leading-relaxed">
            Let us partner with you to turn your child's natural curiosity into structural leadership and analytical excellence. Fill the digital request portal in under 3 minutes.
          </p>
          <div className="pt-4">
            <button
              onClick={onOpenApply}
              className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition-all shadow-md inline-flex items-center gap-1.5 cursor-pointer"
            >
              Fill Admissions Inquiry <Sparkles className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
