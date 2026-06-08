import React, { useState } from "react";
import { motion } from "motion/react";
import schoolVideo from "../../assets/school-bell-video.mp4";
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Trophy, 
  Users, 
  BookOpen, 
  Award, 
  ChevronRight, 
  Star,
  Quote,
  ChevronLeft
} from "lucide-react";
import { STATS, CORE_VALUES, TESTIMONIALS } from "../data";

interface HomeViewProps {
  onNavigateToTab: (tab: string) => void;
  onOpenApply: () => void;
}

export default function HomeView({ onNavigateToTab, onOpenApply }: HomeViewProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div id="home-view-container" className="">
      
      {/* 1. Hero Section */}
      <section id="hero-banner" className="relative bg-slate-950 text-white min-h-screen flex items-center overflow-hidden">
        {/* Background Video Loop with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center select-none pointer-events-none"
          >
            <source
              src={schoolVideo}
              type="video/mp4"
            />
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&auto=format&fit=crop&q=80"
              className="w-full h-full object-cover object-center"
              alt="School Exterior"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/60" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-36 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-amber-500 text-xs font-semibold uppercase tracking-wider"
            >
              <Sparkles className="h-4 w-4" />
              <span>Admissions Open for Year 2026-27</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] font-display text-white"
            >
              Empowering Young Minds
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-300 max-w-xl font-light leading-relaxed"
            >
              Where wisdom meets excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <button
                id="hero-primary-cta"
                onClick={onOpenApply}
                className="px-8 py-4 rounded-xl font-bold text-center bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:shadow-lg hover:shadow-amber-500/10 transform hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                Enroll Your Child Now
              </button>
              <button
                id="hero-secondary-cta"
                onClick={() => onNavigateToTab("academics")}
                className="px-8 py-4 rounded-xl font-bold bg-slate-800/80 hover:bg-slate-800 text-white border border-slate-700 hover:border-slate-600 hover:shadow-md transform hover:-translate-y-0.5 transition-all text-center flex items-center justify-center gap-1.5"
              >
                Explore Curriculums <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          </div>

          {/* Side Hero Card - Bullet points & Quick Inquiry */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 bg-slate-950/40 border border-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl space-y-6"
          >
            <h3 className="text-xl font-bold text-white font-display">
              Admission Gateway
            </h3>
            <p className="text-xs text-slate-400">
              Submit your inquiry. We will reply within 24 hours.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-white/5 p-3.5 rounded-xl border border-white/5 backdrop-blur-sm">
                <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Interactive Portals</h4>
                  <p className="text-xs text-slate-400">Advanced science labs and digital learning.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 p-3.5 rounded-xl border border-white/5 backdrop-blur-sm">
                <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Certified Global Educators</h4>
                  <p className="text-xs text-slate-400">Certified, research-active international mentors.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 p-3.5 rounded-xl border border-white/5 backdrop-blur-sm">
                <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Full Placement Counseling</h4>
                  <p className="text-xs text-slate-400">Guidance for university placements and SAT prep.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                id="hero-card-inquiry"
                onClick={() => onNavigateToTab("contact")}
                className="w-full py-3.5 text-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-amber-500 hover:text-amber-400 font-semibold text-sm transition-all flex items-center justify-center gap-1.5"
              >
                Book a Campus Tour <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. Intro Section - Since 2004 */}
      <section id="introduction" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left image block */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-amber-500/10 rounded-3xl -z-1" />
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=80"
                alt="Students Collaboration"
                className="rounded-3xl shadow-xl w-full max-h-[480px] object-cover ring-1 ring-slate-100"
              />
              <div className="absolute bottom-6 right-6 bg-slate-900 text-white p-5 rounded-2xl shadow-lg border border-slate-800 max-w-[240px]">
                <p className="text-amber-500 font-bold text-3xl font-display">Since 2004</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest mt-1 font-mono">Two decades of excellence</p>
              </div>
            </div>

            {/* Right text block */}
            <div className="space-y-5">
              <div className="inline-block bg-slate-100 px-3.5 py-1.5 rounded-lg text-slate-900 text-xs font-semibold uppercase tracking-wider">
                Vidwan Legacy
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
                Cultivating Intellectual Courage and Moral Integrity
              </h2>
              <div className="h-1 w-20 bg-amber-500 rounded-full" />
              <p className="text-slate-600">
                Founded with a singular vision to cultivate students to think independently and work collaboratively, Vidwan Global School has grown into one of the country's premium benchmarks for holistic K-12 schooling.
              </p>
              <p className="text-slate-600">
                We design learning environments that provoke curiosity and analytical questioning. Unlike conventional learning hubs, we don't demand memory retrieval; we train youth in problem breakdown, data logic, and creative expression.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="border border-slate-100 p-3 rounded-xl bg-slate-50/50">
                  <span className="font-bold text-lg text-slate-900 block">Universal Affiliation</span>
                  <p className="text-xs text-slate-500">Curriculums synchronized with standard national and global benchmarks.</p>
                </div>
                <div className="border border-slate-100 p-3 rounded-xl bg-slate-50/50">
                  <span className="font-bold text-lg text-slate-900 block">Eco-Friendly Campus</span>
                  <p className="text-xs text-slate-500">Solar-enabled, zero-plastic facility nurturing environmental accountability.</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  id="intro-read-more"
                  onClick={() => onNavigateToTab("about")}
                  className="inline-flex items-center text-sm font-semibold text-amber-600 hover:text-amber-700 gap-1 hover:gap-2 transition-all cursor-pointer"
                >
                  Read Our Vision & Core Values <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Core values / Why Choose Vidwan */}
      <section id="why-choose-us" className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
              Why Parents Choose Vidwan
            </h2>
            <div className="h-1 w-16 bg-amber-500 mx-auto rounded-full" />
            <p className="text-slate-600 text-sm">
              We design educational journeys centered on the dynamic evolution of your child's personality, abilities, and worldview.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
              >
                <div className="bg-amber-500/10 p-3 rounded-xl text-amber-600 w-fit mb-5 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <span className="text-sm font-bold uppercase font-mono">0{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold font-display text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Academic Journey brief overview */}
      <section id="academic-journey-overview" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-4 space-y-5">
              <div className="inline-block bg-slate-100 px-3 py-1 rounded-lg text-slate-700 text-xs font-semibold">
                Development Path
              </div>
              <h2 className="text-3xl font-bold font-display text-slate-900 leading-tight">
                Our Structured Educational Journey
              </h2>
              <p className="text-slate-600 text-sm">
                From early nursery toys/play to mature grade-12 SAT prep rooms, we break learning into logical progress tiers matching global developmental science.
              </p>
              <div className="pt-2">
                <button
                  id="nav-to-academics-btn"
                  onClick={() => onNavigateToTab("academics")}
                  className="px-6 py-3 rounded-xl font-semibold bg-slate-900 hover:bg-slate-800 text-white text-sm transition-all inline-flex items-center gap-1.5"
                >
                  View Full Academic Schemes <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all">
                <span className="text-xs font-semibold text-amber-600 font-mono">01. Early Childhood</span>
                <h4 className="text-lg font-bold text-slate-900 font-display mt-1">Pre-Primary (3-5Y)</h4>
                <p className="text-xs text-slate-500 mt-2">Sensory and Montessori-guided playroom activities focused on building initial language, confidence, and motor coordination.</p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all">
                <span className="text-xs font-semibold text-amber-600 font-mono">02. Mind Building</span>
                <h4 className="text-lg font-bold text-slate-900 font-display mt-1">Primary School (Grades I-V)</h4>
                <p className="text-xs text-slate-500 mt-2">Perfecting writing literacy, mathematical reasoning, and starting foundational steps in outdoor games and smart technologies.</p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all">
                <span className="text-xs font-semibold text-amber-600 font-mono">03. Modern Exploration</span>
                <h4 className="text-lg font-bold text-slate-900 font-display mt-1">Middle School (Grades VI-VIII)</h4>
                <p className="text-xs text-slate-500 mt-2">Introduction of specialized scientific labs, robotics modules, public speaking assemblies, and selective foreign languages.</p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all">
                <span className="text-xs font-semibold text-amber-600 font-mono">04. Placement Preparation</span>
                <h4 className="text-lg font-bold text-slate-900 font-display mt-1">Senior Secondary (Grades IX-XII)</h4>
                <p className="text-xs text-slate-500 mt-2">Stream choices between Sciences, Social Sciences, Commerce, backed by high-tech placement labs and mock university boards.</p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. Statistics Counter Banner */}
      <section id="achievements-banner" className="bg-slate-900 text-white py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="text-center space-y-1.5">
                <span className="block text-4xl sm:text-5xl font-extrabold text-amber-500 font-mono tracking-tight">
                  {stat.value}
                </span>
                <span className="block text-sm font-semibold text-white uppercase font-display tracking-wider">
                  {stat.label}
                </span>
                <span className="block text-xs text-slate-400 max-w-[200px] mx-auto font-light leading-relaxed">
                  {stat.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonial Section - Community Voices */}
      <section id="community-voices" className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <div className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-lg text-xs font-semibold">
              Client Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
              Voices of our Proud Community
            </h2>
            <div className="h-1 w-16 bg-amber-500 mx-auto rounded-full" />
            <p className="text-slate-600 text-sm">
              Read how parents and alumns value Vidwan's strict commitment towards holistic development and modern skills.
            </p>
          </div>

          {/* Testimonial Active Slider Slider Card */}
          <div className="relative max-w-4xl mx-auto">
            
            <div className="bg-slate-50 rounded-3xl border border-slate-100 p-8 sm:p-12 relative shadow-sm">
              <Quote className="absolute top-8 right-8 h-16 w-16 text-slate-200/60 select-none" />
              
              <div className="space-y-6">
                
                {/* Stars */}
                <div className="flex space-x-1">
                  {[...Array(TESTIMONIALS[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-700 text-base sm:text-lg italic leading-relaxed">
                  "{TESTIMONIALS[activeTestimonial].content}"
                </p>

                {/* Speaker card */}
                <div className="flex items-center space-x-4 pt-4">
                  <img
                    src={TESTIMONIALS[activeTestimonial].avatarUrl}
                    alt={TESTIMONIALS[activeTestimonial].name}
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-white shadow-sm"
                  />
                  <div>
                    <h4 className="text-slate-900 font-bold font-display text-base">
                      {TESTIMONIALS[activeTestimonial].name}
                    </h4>
                    <p className="text-xs text-slate-500">{TESTIMONIALS[activeTestimonial].role}</p>
                    <span className="inline-block mt-1 px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-700 text-[10px] font-bold uppercase tracking-wider font-mono">
                      {TESTIMONIALS[activeTestimonial].relationship}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Slider controls */}
            <div className="flex items-center justify-end space-x-3 mt-6">
              <button
                onClick={prevTestimonial}
                className="p-3.5 bg-slate-100 hover:bg-amber-500 hover:text-slate-950 rounded-xl transition-all cursor-pointer text-slate-600"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3.5 bg-slate-100 hover:bg-amber-500 hover:text-slate-950 rounded-xl transition-all cursor-pointer text-slate-600"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 7. Bottom Final Action Banner */}
      <section id="banner-cta" className="py-20 bg-gradient-to-br from-slate-900 to-slate-950 text-white relative overflow-hidden border-y border-slate-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white leading-tight">
            Begin Your Child’s Journey of Success
          </h2>
          
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Empower them with critical reasoning, world affiliations, physical stamina, and strong ethical values. Our registrar portal is online 24/7.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenApply}
              className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition-all cursor-pointer"
            >
              Fill Enrollment Form
            </button>
            <button
              onClick={() => onNavigateToTab("contact")}
              className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-750 text-white border border-slate-700 hover:border-slate-600 rounded-xl font-bold transition-all cursor-pointer"
            >
              Request Call Back
            </button>
          </div>

          <p className="text-[11px] text-slate-500 font-mono tracking-widest uppercase pt-2">
            * Limited vacancy left in Pre-Primary and Primary levels
          </p>
        </div>
      </section>

    </div>
  );
}
