import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  ArrowRight,
  Sparkles,
  CheckCircle2
} from "lucide-react";

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenApply: () => void;
}

export default function Footer({ setActiveTab, onOpenApply }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleQuickLink = (tab: string) => {
    setActiveTab(tab);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer-section" className="bg-slate-900 border-t border-slate-800 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top interactive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand details */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleQuickLink("home")}>
              <div className="bg-amber-500 p-2 rounded-xl text-slate-950">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold font-display text-white tracking-tight">
                VIDWAN <span className="text-amber-500">GLOBAL</span>
              </span>
            </div>
            
            <p className="text-sm text-slate-400">
              Empowering global minds build on academic rigor, digital innovation, and strong character foundation. Established 2004.
            </p>

            <div className="flex space-x-3 pt-2">
              <a href="#" className="p-2 bg-slate-800 hover:bg-amber-500 hover:text-slate-950 rounded-lg transition-all text-slate-400">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-amber-500 hover:text-slate-950 rounded-lg transition-all text-slate-400">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-amber-500 hover:text-slate-950 rounded-lg transition-all text-slate-400">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-amber-500 hover:text-slate-950 rounded-lg transition-all text-slate-400">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold font-display mb-4 text-sm tracking-wider uppercase">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleQuickLink("home")} className="hover:text-amber-500 transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-1.5 text-slate-600 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => handleQuickLink("about")} className="hover:text-amber-500 transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-1.5 text-slate-600 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                  About Vidwan
                </button>
              </li>
              <li>
                <button onClick={() => handleQuickLink("academics")} className="hover:text-amber-500 transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-1.5 text-slate-600 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                  Academic Stages
                </button>
              </li>
              <li>
                <button onClick={() => handleQuickLink("facilities")} className="hover:text-amber-500 transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-1.5 text-slate-600 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                  Campus & Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleQuickLink("contact")} className="hover:text-amber-500 transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-1.5 text-slate-600 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                  Contact Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact details */}
          <div className="space-y-3.5 card">
            <h3 className="text-white font-semibold font-display mb-1 text-sm tracking-wider uppercase">
              Get in Touch
            </h3>
            
            <div className="flex items-start text-sm space-x-2.5">
              <MapPin className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
              <span className="text-slate-400">
                Vidwan Campus, Sector 12, Educational Zone, New Delhi, 110075
              </span>
            </div>

            <div className="flex items-center text-sm space-x-2.5">
              <Phone className="h-4 w-4 text-amber-500 shrink-0" />
              <span className="text-slate-400">+91 11 4987 6300</span>
            </div>

            <div className="flex items-center text-sm space-x-2.5">
              <Mail className="h-4 w-4 text-amber-500 shrink-0" />
              <span className="text-slate-400">info@vidwanglobal.edu.in</span>
            </div>

            <button
              id="footer-apply-now"
              onClick={onOpenApply}
              className="mt-2 text-xs font-semibold px-4 py-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 transition-all flex items-center gap-1"
            >
              <Sparkles className="h-3 w-3" /> Enroll admissions for 2026-27
            </button>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold font-display text-sm tracking-wider uppercase">
              Inward Bulletin
            </h3>
            <p className="text-xs text-slate-400">
              Receive academic milestone alerts, admissions timelines, and creative stories straight to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Parent's Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-850 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-amber-500 placeholder-slate-500 font-sans"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bg-amber-500 hover:bg-amber-400 text-slate-900 rounded-lg p-1.5 transition-colors cursor-pointer"
                >
                  <ArrowRight className="h-3.5 w-3.5 font-bold" />
                </button>
              </div>
              
              <AnimatePresence>
                {subscribed && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-xs text-teal-400 flex items-center gap-1"
                  >
                    <CheckCircle2 className="h-3 w-3" /> Thank you for subscribing!
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {currentYear} Vidwan Global School. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-slate-350 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-350 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-slate-350 transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
