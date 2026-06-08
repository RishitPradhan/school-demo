import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Building, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Globe,
  Sparkles
} from "lucide-react";

export default function ContactView() {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    studentName: "",
    grade: "Nursery",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        parentName: "",
        email: "",
        phone: "",
        studentName: "",
        grade: "Nursery",
        message: ""
      });
      // Clear message after 6 seconds
      setTimeout(() => setIsSubmitted(false), 8000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div id="contact-us-page-view" className="">
      
      {/* 1. Page Header */}
      <section id="contact-header" className="bg-slate-900 text-white pt-32 pb-20 sm:pt-40 sm:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1600&auto=format&fit=crop&q=80"
            className="w-full h-full object-cover"
            alt="School Reception"
          />
          <div className="absolute inset-0 bg-slate-900" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-6">
          <span className="text-amber-500 font-mono text-xs uppercase tracking-widest font-semibold bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
            Inquire Admission Helpdesk
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-display text-white">
            Reach Out to Our Registrars
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light">
            Whether you seek information about campus boarding, fees, test structures, or physical tours, our helpdesk is active for replies.
          </p>
        </div>
      </section>

      {/* 2. Form & Contacts Grid */}
      <section id="contact-details-grid" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Side: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-display text-slate-900 tracking-tight">
                  Official Communication Desk
                </h2>
                <div className="h-1 w-12 bg-amber-500 rounded-full" />
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our main office remains active from Monday to Saturday. Walk-ins for fee payments or curriculum booklets are welcomed.
                </p>
              </div>

              {/* Cards row */}
              <div className="space-y-4">
                
                <div className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all">
                  <div className="p-3 bg-amber-500/10 rounded-xl text-amber-600 shrink-0">
                    <Building className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">Campus Address</h4>
                    <p className="text-xs text-slate-500 mt-1">Vidwan Campus, Sector 12, Educational Zone, New Delhi, 110075</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all">
                  <div className="p-3 bg-amber-500/10 rounded-xl text-amber-600 shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">Call Helpline</h4>
                    <p className="text-xs text-slate-500 mt-1">Main Line: +91 11 4987 6300</p>
                    <p className="text-xs text-slate-500 mt-0.5">Admissions Board: +91 98711 02043</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all">
                  <div className="p-3 bg-amber-500/10 rounded-xl text-amber-600 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">Email Helpdesk</h4>
                    <span className="block text-xs text-slate-500 mt-1">Admissions: adms@vidwanglobal.edu.in</span>
                    <span className="block text-xs text-slate-500 mt-0.5">General Queries: info@vidwanglobal.edu.in</span>
                  </div>
                </div>

              </div>

              {/* Working Hours */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 space-y-4">
                <div className="flex items-center gap-2 text-amber-500">
                  <Clock className="h-5 w-5" />
                  <span className="font-bold text-sm tracking-widest uppercase font-mono">Working Hours</span>
                </div>
                
                <div className="text-xs space-y-2">
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Monday - Friday:</span>
                    <span className="font-semibold text-slate-200">8:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Saturday:</span>
                    <span className="font-semibold text-slate-200">8:00 AM - 12:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Sunday:</span>
                    <span className="text-rose-400 font-bold">Closed</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Side: Structured General Inquiry Form */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-105 rounded-3xl p-8 shadow-sm">
              <div className="space-y-5 mb-8">
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Admissions Inquiry Form
                </h3>
                <p className="text-xs text-slate-500">
                  Fill in all relevant parent details to schedule counseling. Fields of this interface are fully validated.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-slate-700 block">Parent's Name: *</label>
                    <input
                      type="text"
                      name="parentName"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-slate-700 block">Email Address: *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. rajesh@gmail.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-slate-700 block">Contact Phone: *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-slate-700 block">Child's Name:</label>
                    <input
                      type="text"
                      name="studentName"
                      placeholder="e.g. Ananya Sharma"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-slate-700 block">Target Admission Grade *</label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                  >
                    <option value="Nursery">Pre-Primary (Nursery / KG)</option>
                    <option value="Primary">Primary School (Grades I-V)</option>
                    <option value="Middle">Middle School (Grades VI-VIII)</option>
                    <option value="Senior">Senior Secondary (Grades IX-XII)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-slate-700 block">Your Inquiry Message: *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Provide details about academic background, physical specialties, boarding request..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 font-sans"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-amber-500 hover:text-amber-400 font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 disabled:opacity-50 cursor-pointer shadow-md"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Admissions Request</span>
                        <Send className="h-4.5 w-4.5" />
                      </>
                    )}
                  </button>
                </div>

                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 bg-teal-50 border border-teal-200 rounded-2xl flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-teal-900">Request Lodged Successfully!</h4>
                        <p className="text-xs text-teal-700 mt-0.5">
                          Inquiry has been synced. A customized counseling PDF handbook has been triggered to your registered email. Our desk counselor will call you within 24 business hours.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Styled Mock Interactive Google Map */}
      <section id="map-canvas-location" className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <h2 className="text-2xl font-bold font-display text-slate-900">
              Interactive Campus Map
            </h2>
            <div className="h-0.5 w-12 bg-amber-500 mx-auto rounded-full" />
          </div>

          <div className="bg-slate-900 rounded-3xl p-3 shadow-lg border border-slate-800 overflow-hidden relative">
            {/* Visual Vector Map representation */}
            <div className="h-[350px] relative w-full rounded-2xl bg-slate-950 overflow-hidden flex items-center justify-center">
              
              {/* Map background grid simulation */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              
              {/* Simple stylized roads vectors */}
              <div className="absolute top-1/4 left-0 right-0 h-4 bg-slate-900/60 transform rotate-2 shadow-inner" />
              <div className="absolute top-0 bottom-0 left-1/3 w-4 bg-slate-900/60 transform -rotate-12 shadow-inner" />
              <div className="absolute bottom-1/3 left-0 right-0 h-6 bg-slate-900/40 transform -rotate-6 shadow-inner" />

              {/* Pin indicator */}
              <div className="relative z-10 text-center space-y-3">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                  className="bg-amber-500 text-slate-950 p-3.5 rounded-full shadow-lg border-2 border-slate-900 mx-auto w-fit"
                >
                  <Building className="h-7 w-7" />
                </motion.div>
                
                <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-800 p-4 rounded-2xl max-w-xs mx-auto shadow-md">
                  <h4 className="text-sm font-bold font-display text-white">Vidwan Global School</h4>
                  <p className="text-[11px] text-slate-400 mt-1">Sector 12, Educational Avenue, Dwarka Zone, New Delhi</p>
                  <span className="inline-block mt-2 font-mono text-[9px] text-amber-500 tracking-wider">
                    📍 COORDINATES: 28.5910° N, 77.0592° E
                  </span>
                </div>
              </div>

              {/* UI controls fake layer */}
              <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-sm p-2 rounded-lg text-[10px] text-slate-400 font-mono space-y-1 border border-slate-800">
                <p>🛰️ Satellite: Live</p>
                <p>🗺️ Map Mode: Vector Dark</p>
                <p>🔍 Zoom: 16x</p>
              </div>

              <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 font-mono text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow">
                GPS Verified
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
