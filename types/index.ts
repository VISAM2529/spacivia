export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
}

export interface DesignStyle {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface RoomType {
  id: string;
  name: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  style: string;
  roomType: string;
  budgetRange: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'single' | 'multiple' | 'budget';
  options: QuizOption[];
}

export interface QuizOption {
  id: string;
  label: string;
  value: string;
  image?: string;
}
// Add these type definitions to your types.ts file if not already present
export interface Project {
  id: string;
  name: string;
  status: 'planning' | 'design' | 'procurement' | 'execution' | 'completed';
  progress: number;
  roomType: string;
  style: string;
  budget: number;
  startDate: string;
  estimatedCompletion: string;
  designer: string;
  milestones: Milestone[];
}

export interface Milestone {
  name: string;
  completed: boolean;
  date: string;
}

export interface Designer {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  projects: number;
  image: string;
  bio: string;
  yearsExperience: number;
  services: string[];
}

export interface Appointment {
  id: string;
  type: string;
  designer: string;
  date: string;
  time: string;
  duration: number;
  status: 'confirmed' | 'pending' | 'cancelled';
  location: string;
  notes: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: string;
  time: string;
  read: boolean;
}