import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  User, 
  BookOpen, 
  Check, 
  Sparkles,
  Phone,
  Calendar,
  ChevronRight
} from "lucide-react";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplyModal({ isOpen, onClose }: ApplyModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    parentFirstName: "",
    parentLastName: "",
    parentPhone: "",
    parentEmail: "",
    relationship: "Father",
    
    studentFirstName: "",
    studentLastName: "",
    studentDob: "",
    studentGender: "Male",
    targetGrade: "Nursery",
    hasPreviousSchool: "no",
    previousSchoolName: "",
    
    consentChecked: false,
    alertChecked: true
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [appId, setAppId] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    // Clear error
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateStep = () => {
    const newErrors: Record<string, string> = {};
    if (step === 1) {
      if (!formData.parentFirstName.trim()) newErrors.parentFirstName = "First name is required";
      if (!formData.parentLastName.trim()) newErrors.parentLastName = "Last name is required";
      if (!formData.parentPhone.trim()) newErrors.parentPhone = "Contact phone is required";
      if (!formData.parentEmail.trim()) newErrors.parentEmail = "Email address is required";
    } else if (step === 2) {
      if (!formData.studentFirstName.trim()) newErrors.studentFirstName = "Student first name is required";
      if (!formData.studentLastName.trim()) newErrors.studentLastName = "Student last name is required";
      if (!formData.studentDob) newErrors.studentDob = "Date of birth is required";
      if (formData.hasPreviousSchool === "yes" && !formData.previousSchoolName.trim()) {
        newErrors.previousSchoolName = "Previous school name is required";
      }
    } else if (step === 3) {
      if (!formData.consentChecked) newErrors.consentChecked = "You must agree to the academic declaration";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (step < 3) {
        setStep(step + 1);
      } else {
        // Complete build application id
        const randomNum = Math.floor(1000 + Math.random() * 9000);
        setAppId(`VGS-2026-${randomNum}`);
        setStep(4);
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleResetAndClose = () => {
    setStep(1);
    setFormData({
      parentFirstName: "",
      parentLastName: "",
      parentPhone: "",
      parentEmail: "",
      relationship: "Father",
      studentFirstName: "",
      studentLastName: "",
      studentDob: "",
      studentGender: "Male",
      targetGrade: "Nursery",
      hasPreviousSchool: "no",
      previousSchoolName: "",
      consentChecked: false,
      alertChecked: true
    });
    setErrors({});
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="apply-modal-wrapper" className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header info */}
            <div className="bg-slate-900 px-6 py-6 text-white flex items-center justify-between">
              <div>
                <span className="text-amber-500 font-mono text-[10px] uppercase tracking-widest font-bold">
                  Online Registration Portal
                </span>
                <h3 className="text-xl font-bold font-display">Admissions Session 2026-27</h3>
              </div>
              
              <button
                id="close-apply-modal"
                onClick={handleResetAndClose}
                className="p-1 px-2.5 py-2.5 rounded-lg bg-slate-800 text-slate-350 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Stepper Progress Indicator (Only for active steps 1-3) */}
            {step < 4 && (
              <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-[11px] font-mono tracking-wider font-semibold uppercase">
                  <span className={`px-2 py-0.5 rounded-md ${step >= 1 ? "bg-slate-900 text-amber-500" : "bg-slate-200 text-slate-500"}`}>1</span>
                  <span>Contact</span>
                  <ChevronRight className="h-3 w-3 text-slate-300" />
                  <span className={`px-2 py-0.5 rounded-md ${step >= 2 ? "bg-slate-900 text-amber-500" : "bg-slate-200 text-slate-500"}`}>2</span>
                  <span>Student</span>
                  <ChevronRight className="h-3 w-3 text-slate-300" />
                  <span className={`px-2 py-0.5 rounded-md ${step >= 3 ? "bg-slate-900 text-amber-500" : "bg-slate-200 text-slate-500"}`}>3</span>
                  <span>Consent</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">Step {step} of 3</span>
              </div>
            )}

            {/* Content Body */}
            <div className="p-6 md:p-8">
              
              {/* STEP 1: Father/Mother details */}
              {step === 1 && (
                <div className="space-y-5">
                  <div className="text-left space-y-1">
                    <h4 className="text-base font-bold text-slate-955 font-display">Parent / Guardian Dossier</h4>
                    <p className="text-xs text-slate-500">Provide official details as per government affidavits.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono font-semibold text-slate-700">First Name *</label>
                      <input
                        type="text"
                        name="parentFirstName"
                        required
                        placeholder="First Name"
                        value={formData.parentFirstName}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-50 border ${errors.parentFirstName ? "border-rose-300 ring-1 ring-rose-200" : "border-slate-200"} rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500`}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-mono font-semibold text-slate-700">Last Name *</label>
                      <input
                        type="text"
                        name="parentLastName"
                        required
                        placeholder="Last Name"
                        value={formData.parentLastName}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-50 border ${errors.parentLastName ? "border-rose-300 ring-1 ring-rose-200" : "border-slate-200"} rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono font-semibold text-slate-700">Mobile Phone *</label>
                      <input
                        type="tel"
                        name="parentPhone"
                        required
                        placeholder="e.g. +91 9876543210"
                        value={formData.parentPhone}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-50 border ${errors.parentPhone ? "border-rose-300 ring-1 ring-rose-200" : "border-slate-200"} rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500`}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-mono font-semibold text-slate-700">Email Address *</label>
                      <input
                        type="email"
                        name="parentEmail"
                        required
                        placeholder="e.g. name@domain.com"
                        value={formData.parentEmail}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-50 border ${errors.parentEmail ? "border-rose-300 ring-1 ring-rose-200" : "border-slate-200"} rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500`}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono font-semibold text-slate-700">Relationship to Applicant</label>
                    <select
                      name="relationship"
                      value={formData.relationship}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500"
                    >
                      <option value="Father">Father</option>
                      <option value="Mother">Mother</option>
                      <option value="Guardian">Legal Guardian</option>
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 2: Child details */}
              {step === 2 && (
                <div className="space-y-5">
                  <div className="text-left space-y-1">
                    <h4 className="text-base font-bold text-slate-955 font-display">Student / Candidate Dossier</h4>
                    <p className="text-xs text-slate-500">Provide personal info for the grade level placement checks.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono font-semibold text-slate-700">Student First Name *</label>
                      <input
                        type="text"
                        name="studentFirstName"
                        required
                        placeholder="First Name"
                        value={formData.studentFirstName}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-50 border ${errors.studentFirstName ? "border-rose-300 ring-1 ring-rose-200" : "border-slate-200"} rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500`}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-mono font-semibold text-slate-700">Student Last Name *</label>
                      <input
                        type="text"
                        name="studentLastName"
                        required
                        placeholder="Last Name"
                        value={formData.studentLastName}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-50 border ${errors.studentLastName ? "border-rose-300 ring-1 ring-rose-200" : "border-slate-200"} rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1 sm:col-span-2">
                      <label className="text-xs font-mono font-semibold text-slate-700">Date of Birth *</label>
                      <input
                        type="date"
                        name="studentDob"
                        required
                        value={formData.studentDob}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-50 border ${errors.studentDob ? "border-rose-300 ring-1 ring-rose-200" : "border-slate-200"} rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 font-sans`}
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-xs font-mono font-semibold text-slate-700">Gender</label>
                      <select
                        name="studentGender"
                        value={formData.studentGender}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono font-semibold text-slate-700">Target Grade Level *</label>
                      <select
                        name="targetGrade"
                        value={formData.targetGrade}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500"
                      >
                        <option value="Nursery">Nursery / PK3</option>
                        <option value="KG">Kindergarten</option>
                        <option value="I-V">Primary School (I-V)</option>
                        <option value="VI-VIII">Middle School (VI-VIII)</option>
                        <option value="IX-X">Senior secondary (IX-X)</option>
                        <option value="XI-XII">High school stream (XI-XII)</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono font-semibold text-slate-700">Currently Enrolled School?</label>
                      <select
                        name="hasPreviousSchool"
                        value={formData.hasPreviousSchool}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500"
                      >
                        <option value="no">No previous kindergarten / school</option>
                        <option value="yes">Yes, moving from other school</option>
                      </select>
                    </div>
                  </div>

                  {formData.hasPreviousSchool === "yes" && (
                    <div className="space-y-1">
                      <label className="text-xs font-mono font-semibold text-slate-700">Name of Previous Institution *</label>
                      <input
                        type="text"
                        name="previousSchoolName"
                        placeholder="e.g. Saint Mary Junior Academy, Delhi"
                        required
                        value={formData.previousSchoolName}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-50 border ${errors.previousSchoolName ? "border-rose-300" : "border-slate-200"} rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500`}
                      />
                    </div>
                  )}

                </div>
              )}

              {/* STEP 3: Decalaration & Consent */}
              {step === 3 && (
                <div className="space-y-5">
                  <div className="text-left space-y-1">
                    <h4 className="text-base font-bold text-slate-955 font-display">Integrity & Affiliation Statements</h4>
                    <p className="text-xs text-slate-500">Read through the academic rules before final lodgement.</p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs text-slate-600 leading-relaxed space-y-2.5">
                    <p>
                      <strong>1. Physical Safety & Health:</strong> I confirm that to the best of my knowledge, the medical declarations, vaccinations, and physical profiles provided to Vidwan Global are true.
                    </p>
                    <p>
                      <strong>2. Discipline Alignment:</strong> I agree that our child's enrollment will sync with the academic, digital safety, and behavioral rules defined by the principal council of Vidwan.
                    </p>
                    <p>
                      <strong>3. Verification Consent:</strong> I authorize Vidwan admissions helpline to request academic files/transcripts from the previous institution listed in step 2.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        name="consentChecked"
                        checked={formData.consentChecked}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 bg-slate-50 border-slate-200 rounded text-amber-500 focus:ring-amber-500"
                      />
                      <span className="text-xs text-slate-750">
                        I hereby declare that all specifications provided above are correct, legally valid, and binding. *
                      </span>
                    </label>
                    {errors.consentChecked && <p className="text-[11px] text-rose-500 font-medium">{errors.consentChecked}</p>}

                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        name="alertChecked"
                        checked={formData.alertChecked}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 bg-slate-50 border-slate-200 rounded text-amber-500 focus:ring-amber-500"
                      />
                      <span className="text-xs text-slate-500">
                        Subscribe me to SMS, WhatsApp, and Call Alert pipelines for admissions calendars, fee due dates, and counseling dates.
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* STEP 4: Success, Congratulations */}
              {step === 4 && (
                <div className="text-center space-y-5 py-6">
                  <div className="bg-teal-500 text-white p-4 rounded-full w-fit mx-auto shadow-md">
                    <Check className="h-10 w-10 stroke-[3]" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-teal-600 font-mono text-[10px] uppercase font-bold tracking-widest bg-teal-50 px-3 py-1 rounded-full">
                      Application Received Successful
                    </span>
                    <h3 className="text-2xl font-bold font-display text-slate-900">
                      Congratulations, {formData.parentFirstName}!
                    </h3>
                    <p className="text-xs text-slate-600 max-w-md mx-auto font-light leading-relaxed">
                      Admissions file for your ward <strong className="text-slate-900">{formData.studentFirstName} {formData.studentLastName}</strong> has been logged inside our database index.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-dashed border-slate-200 p-5 rounded-2xl max-w-sm mx-auto space-y-1.5">
                    <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">Your Reference ID:</span>
                    <p className="text-xl font-bold font-mono text-slate-900 uppercase tracking-widest">
                      {appId}
                    </p>
                  </div>

                  <div className="text-xs text-slate-500 space-y-2 max-w-md mx-auto border-t border-slate-100 pt-5 text-left">
                    <p className="flex items-start gap-2">
                      <Sparkles className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>An offline entrance exam blueprint & fee structure PDF has been sent to <strong className="text-slate-800">{formData.parentEmail}</strong>.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Phone className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>Our Delhi registrar will call you on <strong className="text-slate-800">{formData.parentPhone}</strong> next Saturday to match counseling availability.</span>
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleResetAndClose}
                      className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-amber-500 hover:text-amber-400 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                    >
                      Close Gateway
                    </button>
                  </div>
                </div>
              )}

              {/* Navigation controls (Only for active steps 1-3) */}
              {step < 4 && (
                <div className="mt-8 border-t border-slate-100 pt-5 flex items-center justify-between">
                  <button
                    disabled={step === 1}
                    onClick={handleBack}
                    className="px-5 py-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-650 hover:bg-slate-100 flex items-center gap-1 cursor-pointer disabled:opacity-40"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" /> Prev Step
                  </button>

                  <button
                    onClick={handleNext}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs flex items-center gap-1 hover:shadow-md cursor-pointer transition-all"
                  >
                    {step === 3 ? (
                      <>
                        Submit Lodgement <CheckCircle2 className="h-3.5 w-3.5" />
                      </>
                    ) : (
                      <>
                        Next Dossier <ArrowRight className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>
                </div>
              )}

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
