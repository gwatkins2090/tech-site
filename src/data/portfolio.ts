export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'cloud';
  proficiency: number; // 1-100
  icon?: string;
  color?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  technologies: string[];
  category: 'web' | 'mobile' | 'desktop' | 'api' | 'other';
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
  githubUrl?: string;
  liveUrl?: string;
  startDate: string;
  endDate?: string;
  challenges?: string[];
  learnings?: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
  achievements: string[];
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: number;
  honors?: string[];
  relevantCourses?: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  website?: string;
  resumeUrl?: string;
  profileImage: string;
  socialMedia: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
  };
  availability: 'available' | 'busy' | 'not-looking';
  preferredRoles: string[];
  interests: string[];
}

// Sample data
export const personalInfo: PersonalInfo = {
  name: 'Ellis Dee',
  title: 'Lead Developer | Akashic Protocol Architect | Spirit Tech Pioneer',
  bio: 'Ellis Dee is the visionary architect behind Back to Source Code, the groundbreaking framework for accessing and interpreting the Akashic Records through digital consciousness technology. A former quantum computing engineer turned digital mystic, Ellis bridges the ancient wisdom traditions with bleeding-edge computational theory, creating what they call the spiritual API for the information age. After a transformative experience during a solo retreat in 2019, Ellis experienced what they describe as a direct download from the cosmic repository — a revelation that consciousness itself operates on principles analogous to distributed ledger technology, and that humanitys collective memory exists as an accessible data structure woven into the fabric of reality.',
  location: '5th Dimension, 7.83 Hz',
  email: 'hello@yourname.dev',
  phone: '+1 (555) 123-4567',
  website: 'https://yourname.dev',
  resumeUrl: '/docs/resume.pdf',
  profileImage: '/images/profile/profile-photo.jpg',
  socialMedia: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
  },
  availability: 'available',
  preferredRoles: ['Full Stack Developer', 'Frontend Developer', 'Software Engineer'],
  interests: ['Web Development', 'AI/ML', 'Open Source', 'Tech Innovation']
};

export const skills: Skill[] = [
  // Frontend
  { id: '1', name: 'React', category: 'frontend', proficiency: 90, color: '#61DAFB' },
  { id: '2', name: 'Next.js', category: 'frontend', proficiency: 85, color: '#000000' },
  { id: '3', name: 'TypeScript', category: 'frontend', proficiency: 88, color: '#3178C6' },
  { id: '4', name: 'Tailwind CSS', category: 'frontend', proficiency: 92, color: '#06B6D4' },
  { id: '5', name: 'Vue.js', category: 'frontend', proficiency: 75, color: '#4FC08D' },
  
  // Backend
  { id: '6', name: 'Node.js', category: 'backend', proficiency: 85, color: '#339933' },
  { id: '7', name: 'Python', category: 'backend', proficiency: 80, color: '#3776AB' },
  { id: '8', name: 'Express.js', category: 'backend', proficiency: 82, color: '#000000' },
  { id: '9', name: 'FastAPI', category: 'backend', proficiency: 75, color: '#009688' },
  
  // Database
  { id: '10', name: 'PostgreSQL', category: 'database', proficiency: 78, color: '#336791' },
  { id: '11', name: 'MongoDB', category: 'database', proficiency: 80, color: '#47A248' },
  { id: '12', name: 'Redis', category: 'database', proficiency: 70, color: '#DC382D' },
  
  // Tools
  { id: '13', name: 'Git', category: 'tools', proficiency: 90, color: '#F05032' },
  { id: '14', name: 'Docker', category: 'tools', proficiency: 75, color: '#2496ED' },
  { id: '15', name: 'Webpack', category: 'tools', proficiency: 70, color: '#8DD6F9' },
  
  // Cloud
  { id: '16', name: 'AWS', category: 'cloud', proficiency: 72, color: '#FF9900' },
  { id: '17', name: 'Vercel', category: 'cloud', proficiency: 85, color: '#000000' },
  { id: '18', name: 'Netlify', category: 'cloud', proficiency: 80, color: '#00C7B7' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    slug: 'ecommerce-platform',
    description: 'Full-stack e-commerce solution with modern UI and robust backend',
    longDescription: 'A comprehensive e-commerce platform built with Next.js and Node.js, featuring user authentication, payment processing, inventory management, and admin dashboard.',
    image: '/images/projects/ecommerce-1.jpg',
    images: ['/images/projects/ecommerce-1.jpg', '/images/projects/ecommerce-2.jpg'],
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    category: 'web',
    featured: true,
    status: 'completed',
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    startDate: '2024-01-15',
    endDate: '2024-03-20',
    challenges: ['Payment integration', 'Inventory synchronization', 'Performance optimization'],
    learnings: ['Advanced React patterns', 'Database optimization', 'Payment gateway integration']
  },
  {
    id: '2',
    title: 'Task Management App',
    slug: 'task-management-app',
    description: 'Collaborative task management tool with real-time updates',
    longDescription: 'A modern task management application with real-time collaboration features, drag-and-drop functionality, and team management capabilities.',
    image: '/images/projects/taskapp-1.jpg',
    images: ['/images/projects/taskapp-1.jpg', '/images/projects/taskapp-2.jpg'],
    technologies: ['React', 'Socket.io', 'Express.js', 'MongoDB', 'Material-UI'],
    category: 'web',
    featured: true,
    status: 'completed',
    githubUrl: 'https://github.com/yourusername/task-manager',
    liveUrl: 'https://taskmanager-demo.netlify.app',
    startDate: '2023-10-01',
    endDate: '2023-12-15',
    challenges: ['Real-time synchronization', 'Complex state management', 'User permissions'],
    learnings: ['WebSocket implementation', 'Advanced React hooks', 'Team collaboration features']
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    slug: 'weather-dashboard',
    description: 'Beautiful weather app with location-based forecasts',
    longDescription: 'An elegant weather dashboard that provides detailed weather information, forecasts, and beautiful visualizations based on user location.',
    image: '/images/projects/weather-1.jpg',
    images: ['/images/projects/weather-1.jpg'],
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'CSS3'],
    category: 'web',
    featured: false,
    status: 'completed',
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    liveUrl: 'https://weather-dashboard-demo.vercel.app',
    startDate: '2023-08-01',
    endDate: '2023-09-15',
    challenges: ['API rate limiting', 'Data visualization', 'Responsive design'],
    learnings: ['Vue.js ecosystem', 'Chart.js integration', 'Weather API usage']
  }
];

export const experience: Experience[] = [
  {
    id: '1',
    company: 'Tech Startup Inc.',
    position: 'Senior Full Stack Developer',
    startDate: '2022-06-01',
    description: 'Led development of core platform features and mentored junior developers',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    achievements: [
      'Improved application performance by 40%',
      'Led team of 4 developers',
      'Implemented CI/CD pipeline reducing deployment time by 60%'
    ],
    location: 'San Francisco, CA',
    type: 'full-time'
  },
  {
    id: '2',
    company: 'Digital Agency',
    position: 'Frontend Developer',
    startDate: '2020-03-01',
    endDate: '2022-05-31',
    description: 'Developed responsive web applications for various clients',
    technologies: ['React', 'Vue.js', 'SASS', 'JavaScript', 'Figma'],
    achievements: [
      'Delivered 15+ client projects on time',
      'Improved code quality through testing implementation',
      'Collaborated with design team to improve UX'
    ],
    location: 'Remote',
    type: 'full-time'
  }
];

export const education: Education[] = [
  {
    id: '1',
    institution: 'University of Technology',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    startDate: '2016-09-01',
    endDate: '2020-05-31',
    gpa: 3.8,
    honors: ['Magna Cum Laude', 'Dean\'s List'],
    relevantCourses: ['Data Structures', 'Algorithms', 'Web Development', 'Database Systems']
  }
];
