import { User, DesignStyle, RoomType, GalleryItem, QuizQuestion, Project, Designer, Appointment, Notification } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Emma Johnson',
  email: 'emma.johnson@example.com',
  phone: '+1 (555) 123-4567',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
  address: {
    street: '123 Design Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94110',
    country: 'USA'
  },
  preferences: {
    style: 'Modern',
    budget: 'Medium',
    roomTypes: ['Living Room', 'Home Office']
  }
};

export const designStyles: DesignStyle[] = [
  {
    id: '1',
    name: 'Modern',
    description: 'Clean lines, minimalistic approach with neutral colors and natural materials',
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=300&h=200&fit=crop',
    popularity: 85,
    tags: ['minimalist', 'contemporary', 'clean']
  },
  {
    id: '2',
    name: 'Traditional',
    description: 'Classic details, luxurious furnishings, and rich colors',
    image: 'https://images.unsplash.com/photo-1537726235470-8504e3beef77?w=300&h=200&fit=crop',
    popularity: 72,
    tags: ['classic', 'elegant', 'timeless']
  },
  {
    id: '3',
    name: 'Industrial',
    description: 'Raw materials, exposed structures, and utilitarian feel',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=300&h=200&fit=crop',
    popularity: 68,
    tags: ['urban', 'raw', 'edgy']
  },
  {
    id: '4',
    name: 'Scandinavian',
    description: 'Light, airy spaces with functional furniture and natural elements',
    image: 'https://images.unsplash.com/photo-1505842381624-c6b0579625a5?w=300&h=200&fit=crop',
    popularity: 78,
    tags: ['minimalist', 'functional', 'bright']
  },
  {
    id: '5',
    name: 'Bohemian',
    description: 'Eclectic mix of patterns, textures, and global influences',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=300&h=200&fit=crop',
    popularity: 65,
    tags: ['eclectic', 'colorful', 'global']
  },
  {
    id: '6',
    name: 'Coastal',
    description: 'Light, breezy spaces with nautical elements and beachy vibes',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&h=200&fit=crop',
    popularity: 70,
    tags: ['beachy', 'relaxed', 'light']
  }
];

export const roomTypes: RoomType[] = [
  { id: '1', name: 'Living Room', icon: '🛋️' },
  { id: '2', name: 'Bedroom', icon: '🛏️' },
  { id: '3', name: 'Kitchen', icon: '🍳' },
  { id: '4', name: 'Dining Room', icon: '🍽️' },
  { id: '5', name: 'Home Office', icon: '💻' },
  { id: '6', name: 'Bathroom', icon: '🚿' },
  { id: '7', name: 'Outdoor Space', icon: '🌳' },
  { id: '8', name: 'Entryway', icon: '🚪' }
];

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Cozy Modern Living Room',
    description: 'A comfortable living space with modern furniture and warm accents, featuring a minimalist approach with natural materials and neutral color palette.',
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&h=300&fit=crop',
    style: 'Modern',
    roomType: 'Living Room',
    budgetRange: '$$',
    likes: 245,
    saves: 120,
    designer: 'Sarah Chen',
    dimensions: '20x15 ft',
    colors: ['#F5F5F5', '#E0E0E0', '#8D6E63'],
    tags: ['minimalist', 'comfortable', 'neutral']
  },
  {
    id: '2',
    title: 'Elegant Traditional Dining',
    description: 'A formal dining space with classic furniture, rich wood tones, and luxurious details perfect for entertaining guests.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
    style: 'Traditional',
    roomType: 'Dining Room',
    budgetRange: '$$$',
    likes: 189,
    saves: 95,
    designer: 'Michael Roberts',
    dimensions: '18x16 ft',
    colors: ['#3E2723', '#D7CCC8', '#5D4037'],
    tags: ['elegant', 'formal', 'luxurious']
  },
  {
    id: '3',
    title: 'Industrial Loft Office',
    description: 'A productive home office space with exposed brick, metal accents, and functional furniture in an urban loft style.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=300&fit=crop',
    style: 'Industrial',
    roomType: 'Home Office',
    budgetRange: '$$',
    likes: 312,
    saves: 204,
    designer: 'Alex Morgan',
    dimensions: '15x12 ft',
    colors: ['#455A64', '#90A4AE', '#263238'],
    tags: ['urban', 'productive', 'raw']
  },
  {
    id: '4',
    title: 'Scandinavian Bedroom Retreat',
    description: 'A peaceful bedroom with light wood, functional furniture, and cozy textiles creating a serene sleeping environment.',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=400&h=300&fit=crop',
    style: 'Scandinavian',
    roomType: 'Bedroom',
    budgetRange: '$$',
    likes: 278,
    saves: 167,
    designer: 'Lena Johansson',
    dimensions: '16x14 ft',
    colors: ['#FFFFFF', '#ECEFF1', '#FFB74D'],
    tags: ['serene', 'functional', 'bright']
  },
  {
    id: '5',
    title: 'Bohemian Living Space',
    description: 'An eclectic living area with mixed patterns, global textiles, and plants creating a vibrant and personal space.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&h=300&fit=crop',
    style: 'Bohemian',
    roomType: 'Living Room',
    budgetRange: '$',
    likes: 421,
    saves: 289,
    designer: 'Jasmine Patel',
    dimensions: '22x18 ft',
    colors: ['#E1BEE7', '#FFCC80', '#4DB6AC'],
    tags: ['eclectic', 'vibrant', 'personal']
  },
  {
    id: '6',
    title: 'Coastal Kitchen',
    description: 'A bright and airy kitchen with nautical elements, light colors, and beachy accents for a relaxed cooking experience.',
    image: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=400&h=300&fit=crop',
    style: 'Coastal',
    roomType: 'Kitchen',
    budgetRange: '$$$',
    likes: 195,
    saves: 112,
    designer: 'Carlos Mendez',
    dimensions: '20x15 ft',
    colors: ['#E3F2FD', '#B3E5FC', '#03A9F4'],
    tags: ['bright', 'relaxed', 'nautical']
  },
  {
    id: '7',
    title: 'Modern Minimalist Bathroom',
    description: 'A spa-like bathroom with clean lines, minimalist fixtures, and natural materials creating a tranquil retreat.',
    image: 'https://images.unsplash.com/photo-1633409361616-5c5a04b6b51a?w=400&h=300&fit=crop',
    style: 'Modern',
    roomType: 'Bathroom',
    budgetRange: '$$',
    likes: 332,
    saves: 198,
    designer: 'Kim Lee',
    dimensions: '12x10 ft',
    colors: ['#FFFFFF', '#CFD8DC', '#78909C'],
    tags: ['spa-like', 'minimalist', 'tranquil']
  },
  {
    id: '8',
    title: 'Traditional Home Library',
    description: 'A classic home library with rich wood shelving, comfortable seating, and traditional details for a cozy reading experience.',
    image: 'https://images.unsplash.com/photo-1533826418470-0cef7eb8bd6c?w=400&h=300&fit=crop',
    style: 'Traditional',
    roomType: 'Home Office',
    budgetRange: '$$$$',
    likes: 167,
    saves: 89,
    designer: 'Robert Williams',
    dimensions: '18x16 ft',
    colors: ['#5D4037', '#BCAAA4', '#3E2723'],
    tags: ['classic', 'cozy', 'elegant']
  }
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: '1',
    question: 'What type of space are you designing?',
    type: 'single',
    options: roomTypes.map(room => ({
      id: room.id,
      label: room.name,
      value: room.name,
      icon: room.icon
    })),
  },
  {
    id: '2',
    question: 'What is your preferred style?',
    type: 'single',
    options: designStyles.map(style => ({
      id: style.id,
      label: style.name,
      value: style.name,
      image: style.image,
      description: style.description
    })),
  },
  {
    id: '3',
    question: 'What is your budget range for this project?',
    type: 'single',
    options: [
      {
        id: 'budget-1',
        label: 'Economy ($)',
        value: 'Economy',
        description: 'Basic furnishings and DIY solutions'
      },
      {
        id: 'budget-2',
        label: 'Moderate ($$)',
        value: 'Moderate',
        description: 'Quality furnishings with some custom pieces'
      },
      {
        id: 'budget-3',
        label: 'Premium ($$$)',
        value: 'Premium',
        description: 'High-end furnishings and custom design'
      },
      {
        id: 'budget-4',
        label: 'Luxury ($$$$)',
        value: 'Luxury',
        description: 'Bespoke design with luxury materials'
      }
    ],
  },
  {
    id: '4',
    question: 'What colors are you drawn to?',
    type: 'multiple',
    options: [
      {
        id: 'color-1',
        label: 'Neutrals (White, Beige, Gray)',
        value: 'Neutrals',
        color: '#F5F5F5'
      },
      {
        id: 'color-2',
        label: 'Warm Tones (Red, Orange, Yellow)',
        value: 'Warm',
        color: '#FF8A65'
      },
      {
        id: 'color-3',
        label: 'Cool Tones (Blue, Green, Purple)',
        value: 'Cool',
        color: '#64B5F6'
      },
      {
        id: 'color-4',
        label: 'Earth Tones (Brown, Green, Terracotta)',
        value: 'Earth',
        color: '#8D6E63'
      },
      {
        id: 'color-5',
        label: 'Jewel Tones (Emerald, Sapphire, Ruby)',
        value: 'Jewel',
        color: '#00695C'
      }
    ],
  },
  {
    id: '5',
    question: 'How do you primarily use this space?',
    type: 'single',
    options: [
      {
        id: 'use-1',
        label: 'Relaxation & Comfort',
        value: 'Relaxation',
        icon: '☕'
      },
      {
        id: 'use-2',
        label: 'Entertaining Guests',
        value: 'Entertaining',
        icon: '🎉'
      },
      {
        id: 'use-3',
        label: 'Work & Productivity',
        value: 'Work',
        icon: '💼'
      },
      {
        id: 'use-4',
        label: 'Creative Activities',
        value: 'Creative',
        icon: '🎨'
      }
    ],
  }
];

export const featuredDesigns = [
  {
    id: '1',
    title: 'Modern Minimalist Living Room',
    description: 'Clean lines and neutral tones create a serene space',
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&h=300&fit=crop',
    style: 'Modern',
    roomType: 'Living Room',
    budgetRange: '$$$',
    likes: 356,
    designer: 'Lisa Kim'
  },
  {
    id: '2',
    title: 'Scandinavian Bedroom Oasis',
    description: 'Light and airy with functional furniture',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=400&h=300&fit=crop',
    style: 'Scandinavian',
    roomType: 'Bedroom',
    budgetRange: '$$',
    likes: 289,
    designer: 'Anders Olsen'
  },
  {
    id: '3',
    title: 'Industrial Chic Office',
    description: 'Raw materials meet modern functionality',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=300&fit=crop',
    style: 'Industrial',
    roomType: 'Home Office',
    budgetRange: '$$',
    likes: 312,
    designer: 'Marcus Chen'
  }
];

export const recentActivities = [
  {
    id: '1',
    type: 'quiz',
    title: 'Completed Style Quiz',
    description: 'Your results are ready to view',
    time: '2 hours ago',
    read: false
  },
  {
    id: '2',
    type: 'save',
    title: 'Saved Design',
    description: 'You saved "Coastal Kitchen" to your ideas',
    time: '1 day ago',
    read: true
  },
  {
    id: '3',
    type: 'project',
    title: 'Project Update',
    description: 'Your living room project is in the design phase',
    time: '3 days ago',
    read: true
  },
  {
    id: '4',
    type: 'appointment',
    title: 'Appointment Reminder',
    description: 'Your design consultation is tomorrow at 2 PM',
    time: '5 days ago',
    read: false
  }
];

export const projects: Project[] = [
  {
    id: '1',
    name: 'Living Room Makeover',
    status: 'design',
    progress: 40,
    roomType: 'Living Room',
    style: 'Modern',
    budget: 5000,
    startDate: '2023-10-15',
    estimatedCompletion: '2023-12-20',
    designer: 'Sarah Chen',
    milestones: [
      { name: 'Initial Consultation', completed: true, date: '2023-10-20' },
      { name: 'Concept Design', completed: true, date: '2023-10-30' },
      { name: '3D Visualization', completed: false, date: '2023-11-15' },
      { name: 'Procurement', completed: false, date: '2023-11-30' },
      { name: 'Installation', completed: false, date: '2023-12-15' }
    ]
  },
  {
    id: '2',
    name: 'Home Office Setup',
    status: 'planning',
    progress: 20,
    roomType: 'Home Office',
    style: 'Industrial',
    budget: 3500,
    startDate: '2023-11-01',
    estimatedCompletion: '2024-01-15',
    designer: 'Alex Morgan',
    milestones: [
      { name: 'Initial Consultation', completed: true, date: '2023-11-05' },
      { name: 'Concept Design', completed: false, date: '2023-11-20' },
      { name: '3D Visualization', completed: false, date: '2023-12-05' },
      { name: 'Procurement', completed: false, date: '2023-12-20' },
      { name: 'Installation', completed: false, date: '2024-01-10' }
    ]
  }
];

export const designers: Designer[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    specialty: 'Modern & Minimalist',
    rating: 4.9,
    reviews: 128,
    projects: 56,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
    bio: 'Specializing in creating functional, beautiful spaces with a minimalist approach. I believe in less but better.',
    yearsExperience: 8,
    services: ['Space Planning', 'Color Consultation', 'Furniture Selection']
  },
  {
    id: '2',
    name: 'Michael Roberts',
    specialty: 'Traditional & Classic',
    rating: 4.8,
    reviews: 96,
    projects: 42,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    bio: 'Creating timeless interiors with classic elegance and modern functionality. Your home should tell your story.',
    yearsExperience: 12,
    services: ['Traditional Design', 'Antique Sourcing', 'Custom Millwork']
  },
  {
    id: '3',
    name: 'Alex Morgan',
    specialty: 'Industrial & Urban',
    rating: 4.7,
    reviews: 84,
    projects: 37,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
    bio: 'Transforming raw spaces into functional works of art. Specializing in urban lofts and industrial aesthetics.',
    yearsExperience: 6,
    services: ['Loft Conversions', 'Industrial Design', 'Space Optimization']
  },
  {
    id: '4',
    name: 'Lena Johansson',
    specialty: 'Scandinavian & Functional',
    rating: 4.9,
    reviews: 112,
    projects: 49,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    bio: 'Bringing the principles of Scandinavian design to create light, functional, and beautiful living spaces.',
    yearsExperience: 10,
    services: ['Scandinavian Design', 'Lighting Planning', 'Functional Layouts']
  }
];

export const appointments: Appointment[] = [
  {
    id: '1',
    type: 'Consultation',
    designer: 'Sarah Chen',
    date: '2023-11-15',
    time: '14:00',
    duration: 60,
    status: 'confirmed',
    location: 'Video Call',
    notes: 'Discuss living room layout and furniture options'
  },
  {
    id: '2',
    type: 'Site Visit',
    designer: 'Alex Morgan',
    date: '2023-11-22',
    time: '10:00',
    duration: 90,
    status: 'pending',
    location: 'Your Home',
    notes: 'Measure home office space and discuss electrical requirements'
  }
];

export const notifications: Notification[] = [
  {
    id: '1',
    title: 'New Design Ideas',
    message: 'We found 12 new designs that match your style preferences',
    type: 'recommendation',
    time: '2023-11-10T09:30:00',
    read: false
  },
  {
    id: '2',
    title: 'Project Update',
    message: 'Your living room project has moved to the design phase',
    type: 'project',
    time: '2023-11-09T14:15:00',
    read: true
  },
  {
    id: '3',
    title: 'Appointment Reminder',
    message: 'Your consultation with Sarah Chen is tomorrow at 2 PM',
    type: 'reminder',
    time: '2023-11-08T16:45:00',
    read: true
  }
];

export const aiDesigns = [
  {
    id: '1',
    beforeImage: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=400&h=300&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&h=300&fit=crop',
    style: 'Modern',
    roomType: 'Living Room',
    generatedDate: '2023-11-05',
    likes: 24,
    tags: ['minimalist', 'bright', 'contemporary']
  },
  {
    id: '2',
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1537726235470-8504e3beef77?w=400&h=300&fit=crop',
    style: 'Traditional',
    roomType: 'Dining Room',
    generatedDate: '2023-11-01',
    likes: 18,
    tags: ['elegant', 'formal', 'classic']
  }
];

