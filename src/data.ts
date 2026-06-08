import { 
  Testimonial, 
  Teacher, 
  TimelineMilestone, 
  AcademicStage, 
  Facility, 
  GalleryItem, 
  CurriculumHighlight 
} from "./types";

export const STATS = [
  { label: "Years of Excellence", value: "20+", suffix: "", desc: "Fostering global leaders since 2004" },
  { label: "Happy Students", value: "1,500+", suffix: "", desc: "Enrolled across all academic levels" },
  { label: "Qualified Educators", value: "120+", suffix: "", desc: "100% certified, student-centric mentors" },
  { label: "College Placements", value: "98%", suffix: "", desc: "Admissions in top national & global universities" }
];

export const CORE_VALUES = [
  {
    title: "Academic Rigor",
    description: "Nurturing intellectual curiosity, dry analytical thinking, and a lifetime passion for knowledge through challenging and modern curricula.",
    iconName: "GraduationCap",
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Global Outlook",
    description: "Preparing students of any background to thrive in a interconnected, multicultural world with empathy, respect, and deep cross-cultural values.",
    iconName: "Globe2",
    color: "from-teal-400 to-emerald-600"
  },
  {
    title: "Holistic Growth",
    description: "Equally championing academic, physical, ethical, artistic, emotional and mental competencies to cultivate healthy, multi-dimensional individuals.",
    iconName: "Activity",
    color: "from-orange-400 to-amber-600"
  }
];

export const CURRICULUM_HIGHLIGHTS: CurriculumHighlight[] = [
  {
    id: "h1",
    title: "Global Standard Curriculum",
    description: "A hybrid structure blending global best practices with national educational boards, encouraging enquiry-based active learning.",
    iconName: "Compass",
    colorClass: "bg-blue-50 text-blue-600 border-blue-100"
  },
  {
    id: "h2",
    title: "Advanced STEM Lab Program",
    description: "Hands-on projects covering coding, web technologies, elementary robotics, math reasoning, and practical science experiments.",
    iconName: "Cpu",
    colorClass: "bg-purple-50 text-purple-600 border-purple-100"
  },
  {
    id: "h3",
    title: "Creative Arts Academy",
    description: "Dedicated environments for visual arts, canvas painting, classical and modern music, theatrical performances, and sculpture.",
    iconName: "Palette",
    colorClass: "bg-pink-50 text-pink-600 border-pink-100"
  },
  {
    id: "h4",
    title: "Sports & Physical Leadership",
    description: "Structured athletics, sports specialization, martial arts, yoga, and swimming integrated directly into the weekly curriculum.",
    iconName: "Trophy",
    colorClass: "bg-amber-50 text-amber-600 border-amber-100"
  },
  {
    id: "h5",
    title: "Language & Oratory Arts",
    description: "Intense focus on public speaking, multi-language fluency (English, French, Hindi/regional languages), debating clubs, and drama.",
    iconName: "Languages",
    colorClass: "bg-teal-50 text-teal-600 border-teal-100"
  },
  {
    id: "h6",
    title: "Social Leadership & Ethics",
    description: "Mentoring empathy and responsibility through active community services, environmental drives, and interactive leadership camps.",
    iconName: "Heart",
    colorClass: "bg-rose-50 text-rose-600 border-rose-100"
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: "2004",
    title: "The Genesis",
    description: "Founded with empty grounds but deep vision, starting with 80 students and a single academic block.",
    iconName: "Flag"
  },
  {
    year: "2010",
    title: "STEM Integration",
    description: "Inaugurated dedicated junior chemistry/physics complexes, digital library databases, and state-of-the-art computer centers.",
    iconName: "Cpu"
  },
  {
    year: "2015",
    title: "Co-curricular Expansion",
    description: "Unveiled our Olympic-size swimming pool complex and the specialized Performing Arts Indoor Theater.",
    iconName: "Music"
  },
  {
    year: "2020",
    title: "Smart Campus Leap",
    description: "Pioneered a full hybrid learning framework and equipped 100% of our learning rooms with high-definition digital smart boards.",
    iconName: "Network"
  },
  {
    year: "2024",
    title: "Two Decades of Excellence",
    description: "Celebrating 20 years of legacy, recognized in national polls among the top 10 progressive global schools in the country.",
    iconName: "Trophy"
  }
];

export const TEACHERS: Teacher[] = [
  {
    id: "t1",
    name: "Dr. Arundhati Sen",
    role: "Principal & Academic Director",
    qualification: "Ph.D. in Education (Stanford University)",
    experience: "25+ Years in Educational Leadership",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80",
    bio: "Dr. Arundhati is passionate about creating a joyful, inquiry-based atmosphere where children thrive both academically and socially."
  },
  {
    id: "t2",
    name: "Mr. Rajeev Mukherji",
    role: "Head of Science & Innovator",
    qualification: "M.S. in Applied Physics (IIT Madras)",
    experience: "15+ Years teaching Senior Secondary",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80",
    bio: "Rajeev implements experiential laboratory modules, showing students that science is not in textbooks, but all around us."
  },
  {
    id: "t3",
    name: "Ms. Michelle D'Souza",
    role: "Head of Languages & Creative Writing",
    qualification: "M.A. in English Literature (Oxford University)",
    experience: "12+ Years Teaching",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80",
    bio: "Michelle guides the school's editorial board, debates club, and conducts creative writing retreats for middle-school children."
  },
  {
    id: "t4",
    name: "Mr. David Carter",
    role: "Dean of Co-Curricular & Sports",
    qualification: "B.P.Ed & Former National Athlete",
    experience: "18+ Years",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=80",
    bio: "Coach Carter believes physical fitness and team sports teach children invaluable life lessons in persistence, victory, and grace."
  }
];

export const ACADEMIC_STAGES: AcademicStage[] = [
  {
    id: "stage-preprimary",
    level: "Pre-Primary School",
    grades: "Nursery / KG-I / KG-II",
    ageGroup: "3 - 5 Years",
    focus: "Sensory Learning & Joyful Play",
    description: "Our Early Years Program leverages standard play-way and Montessori modalities. We concentrate on motor skills, sensory engagement, linguistic curiosity, and initial social-emotional confidence in a warm, welcoming environment.",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=80",
    highlights: [
      "Activity-based multisensory thematic instruction",
      "Pristine indoor play lounges and custom sandpits",
      "Teacher-student ratio of 1:12 for constant attention",
      "Music, sensory storytelling, and puppet sessions"
    ]
  },
  {
    id: "stage-primary",
    level: "Primary School",
    grades: "Grades I to V",
    ageGroup: "6 - 10 Years",
    focus: "Core Literacy, Math & Natural Enquiry",
    description: "From Grade 1, we lay deep analytical foundations in languages, mathematics, and environmental sciences. We build the love of reading and scientific exploration while encouraging critical observation of the natural world.",
    imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80",
    highlights: [
      "Rigorous foundational literacy & logic schemes",
      "Initial steps in visual coding & hardware concepts",
      "Rich library access with dedicated reading coaches",
      "Regular public-showcasing days to dispel stage fear"
    ]
  },
  {
    id: "stage-middle",
    level: "Middle School",
    grades: "Grades VI to VIII",
    ageGroup: "11 - 13 Years",
    focus: "Interdependence, Innovation & STEM",
    description: "Middle schoolers begin specialized subject disciplines. We integrate structured laboratory sessions, complex design-thinking modules, and detailed social studies to encourage global connectedness and active environmental awareness.",
    imageUrl: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop&q=80",
    highlights: [
      "Comprehensive STEM programs with robotics kits",
      "Formal public speaking, oratorical clubs & debate forums",
      "Compulsory selection of structural physical sports",
      "Introductory modules on foreign global languages"
    ]
  },
  {
    id: "stage-secondary",
    level: "Senior Secondary",
    grades: "Grades IX to XII",
    ageGroup: "14 - 17 Years",
    focus: "Academic Leadership & Global Placements",
    description: "A highly tailored prep stage for entrance exams and world-class higher education. We offer multiple streams of science, commerce, and humanities, reinforced by personalized counseling and career mentorship pathways.",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80",
    highlights: [
      "Strict specialization streams under premier subject mentors",
      "Full SAT, JEE/NEET preparedness & portfolio coaching",
      "Active high-school research projects & industry visits",
      "Eminent mock placement boards & interview clinics"
    ]
  }
];

export const FACILITIES: Facility[] = [
  {
    id: "f1",
    title: "Digital smart classrooms",
    description: "Spacious, climate-controlled spaces furnished with high-definition digital smart boards and high-speed mesh networks.",
    category: "Academic",
    imageUrl: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "f2",
    title: "Advanced STEM Robotics Center",
    description: "Equipped with microcontrollers, physics testing frames, standard 3D printers, and computer stations for coding.",
    category: "Academic",
    imageUrl: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "f3",
    title: "Central Multi-media Library",
    description: "An architectural marvel housing over 25,000 literature copies, audiobooks, and silent glass study cubicles.",
    category: "Infrastructure",
    imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "f4",
    title: "Olympic-Sized Aquatics Stadium",
    description: "An indoor, climate-controlled, 8-lane swimming pool with certified master trainers and electronic swim-clocks.",
    category: "Sports",
    imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "f5",
    title: "Multi-utility Indoor Sports Dome",
    description: "Professional wooden courts for basket, badminton, synthetic tennis, table tennis with gallery seating.",
    category: "Sports",
    imageUrl: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "f6",
    title: "Performing Arts & Music Wings",
    description: "Acoustically optimized studios for classical strings, guitar ensembles, theater rehearsals, and traditional dances.",
    category: "Co-curricular",
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Investiture Ceremony 2024",
    category: "Events",
    description: "Honoring our freshly elected student council leaders as they take their oaths of office.",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "g2",
    title: "Inter-School Science Conclave",
    category: "Laboratory",
    description: "Vidwan students displaying their micro-watering automation project at the state-level hub.",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "g3",
    title: "Annual Sports Meet Track Event",
    category: "Sports",
    description: "The thrilling photo-finish of the senior boys 100-meter dash under blue skies.",
    imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "g4",
    title: "Spring Art & Sculpture Expo",
    category: "Campus",
    description: "A colorful collection of student sculptures and brush paintings in our main central courtyard.",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "g5",
    title: "Robotics Design Lab Workshop",
    category: "Laboratory",
    description: "Middle-school team assembling their robotic arm prototype during weekend mentoring sessions.",
    imageUrl: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "g6",
    title: "State Swimming Championship",
    category: "Sports",
    description: "Our junior relay team taking home three gold medals at the inter-state tournament.",
    imageUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&auto=format&fit=crop&q=80"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test1",
    name: "Meera & Rajesh Sharma",
    role: "Parents of Ananya (Class XI)",
    relationship: "Parent",
    content: "Enrolling Ananya in Vidwan Global School was the finest decision we made for her. The combination of intense STEM learning and equal support in sports has made her mature, confident, and highly independent.",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    rating: 5
  },
  {
    id: "test2",
    name: "Devidutt Nair",
    role: "Alumnus (Batch for 2019) / Software Engineer",
    relationship: "Alumnus",
    content: "The web development clubs and independent project hackathons back in my middle/high school at Vidwan catalyzed my software engineering path. My Stanford professors lauded the strong research foundations built here.",
    avatarUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
    rating: 5
  },
  {
    id: "test3",
    name: "Sarah Gnanaraj",
    role: "Parent of Kabir (Class III) & Tara (Class VII)",
    relationship: "Parent",
    content: "Vidwan focuses intensely on empathy and emotional balance as much as spelling bees or science math fairs. The teachers have spent time understanding both my children's unique learning paths.",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    rating: 5
  }
];
