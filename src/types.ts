/**
 * Types and interfaces for Vidwan Global School application
 */

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  relationship: string; // "Parent", "Alumnus", "Student", "Educator"
  content: string;
  avatarUrl: string;
  rating: number;
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  qualification: string;
  experience: string;
  imageUrl: string;
  bio?: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  iconName: string;
}

export interface AcademicStage {
  id: string;
  level: string; // "Pre-Primary", "Primary", "Middle School", "Senior Secondary"
  grades: string; // e.g. "Nursery to KG-II"
  ageGroup: string; // e.g. "3 - 5 Years"
  focus: string;
  highlights: string[];
  description: string;
  imageUrl: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  category: "Academic" | "Co-curricular" | "Sports" | "Infrastructure";
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "All" | "Campus" | "Sports" | "Laboratory" | "Events";
  imageUrl: string;
  description?: string;
}

export interface CurriculumHighlight {
  id: string;
  title: string;
  description: string;
  iconName: string;
  colorClass: string;
}
