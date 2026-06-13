export const profile = {
  photo: '/Gemini_Generated_Image_buq8mjbuq8mjbuq8.png',
  name: 'Vishnutharan Bavachelvan',
  shortName: 'Vishnutharan',
  role: 'IT Student & Aspiring Software Developer',
  tagline:
    'Building responsive web apps, writing clean Java code, and crafting visual stories — currently pursuing BSc IT at University of Vavuniya.',
  location: 'Jaffna District, Northern Province, Sri Lanka',
  linkedin: 'https://www.linkedin.com/in/vishnutharanbavachelvan-5419a02b3',
  instagram: 'https://instagram.com/vishnutharan',
  whatsapp: '94771234567',
  github: 'https://github.com/vishnutharan',
  email: 'vishnutharan.dev@email.com',
  available: true,
  about:
    'I am an Information Technology undergraduate passionate about software development, UI engineering, and creative media. I enjoy turning ideas into functional applications — from responsive front-end interfaces to Java-based backend systems. Active in IEEE and AIESEC, I thrive in team environments and love learning new technologies.',
  education: {
    school: 'University of Vavuniya',
    degree: 'Bachelor of Science in Information Technology',
    period: '2023 – 2027',
    focus: 'Software Engineering · Web Development · Database Systems',
  },
}

export const stats = [
  { value: 12, label: 'Technologies learned' },
  { value: 8, label: 'Academic projects' },
  { value: 2, label: 'Tech organizations' },
  { value: 4, label: 'Years in IT program' },
]

export const marqueeTech = [
  'JavaScript', 'React', 'Java', 'Python', 'TypeScript', 'MySQL',
  'Node.js', 'Git', 'HTML5', 'CSS3', 'Figma', 'REST APIs',
  'Linux', 'Video Editing', 'UI/UX', 'IEEE',
]

export type Skill = {
  name: string
  icon: string
  level: number
  category: string
}

export const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', icon: 'java', level: 85, category: 'Languages' },
      { name: 'JavaScript', icon: 'javascript', level: 80, category: 'Languages' },
      { name: 'TypeScript', icon: 'typescript', level: 70, category: 'Languages' },
      { name: 'Python', icon: 'python', level: 65, category: 'Languages' },
      { name: 'HTML5', icon: 'html', level: 90, category: 'Languages' },
      { name: 'CSS3', icon: 'css', level: 88, category: 'Languages' },
    ],
  },
  {
    title: 'Frameworks & Tools',
    skills: [
      { name: 'React', icon: 'react', level: 75, category: 'Frameworks' },
      { name: 'Node.js', icon: 'node', level: 68, category: 'Frameworks' },
      { name: 'MySQL', icon: 'mysql', level: 72, category: 'Frameworks' },
      { name: 'Git & GitHub', icon: 'git', level: 82, category: 'Frameworks' },
      { name: 'Figma', icon: 'figma', level: 78, category: 'Frameworks' },
      { name: 'Linux', icon: 'linux', level: 60, category: 'Frameworks' },
    ],
  },
  {
    title: 'Other Skills',
    skills: [
      { name: 'REST APIs', icon: 'api', level: 70, category: 'Other' },
      { name: 'Responsive UI', icon: 'mobile', level: 85, category: 'Other' },
      { name: 'Database Design', icon: 'database', level: 72, category: 'Other' },
      { name: 'Video Editing', icon: 'video', level: 80, category: 'Other' },
    ],
  },
]

export type Project = {
  title: string
  description: string
  tag: string
  tech: string[]
  gradient: string
  image: string
  github?: string
  demo?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'UniConnect Portal',
    description:
      'A full-stack campus community platform with event listings, club announcements, and student profiles. Built with a React front-end and REST API backend.',
    tag: 'Full-Stack',
    tech: ['React', 'Node.js', 'MySQL', 'REST API'],
    gradient: 'from-blue-600/20 to-cyan-500/10',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    title: 'Smart Attendance System',
    description:
      'Java desktop application for tracking student attendance with role-based login, CSV export, and MySQL database integration using JDBC.',
    tag: 'Java Application',
    tech: ['Java', 'Swing', 'MySQL', 'JDBC'],
    gradient: 'from-orange-600/20 to-amber-500/10',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    github: '#',
    featured: true,
  },
  {
    title: 'DevPortfolio Template',
    description:
      'A modern, dark-themed developer portfolio template with smooth animations, responsive layout, and reusable component structure.',
    tag: 'Front-End',
    tech: ['HTML', 'CSS', 'JavaScript', 'Tailwind'],
    gradient: 'from-violet-600/20 to-purple-500/10',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=80',
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    title: 'IEEE Xtreme Scoreboard',
    description:
      'Real-time programming competition dashboard displaying team rankings, problem status, and countdown timer for IEEE Xtreme events.',
    tag: 'Web App',
    tech: ['JavaScript', 'HTML', 'CSS', 'LocalStorage'],
    gradient: 'from-emerald-600/20 to-green-500/10',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80',
    github: '#',
    demo: '#',
  },
  {
    title: 'Mini LMS — E-Learning Module',
    description:
      'Lightweight learning management system with course modules, quiz functionality, and student progress tracking for university coursework.',
    tag: 'Academic Project',
    tech: ['Java', 'MySQL', 'JSP', 'Bootstrap'],
    gradient: 'from-rose-600/20 to-pink-500/10',
    image: 'https://images.unsplash.com/photo-1501504905252-47336547f581?auto=format&fit=crop&w=900&q=80',
    github: '#',
  },
  {
    title: 'Tech Event Promo Reel',
    description:
      'Cinematic highlight video for university tech events — includes motion graphics, color grading, and social-media-ready exports.',
    tag: 'Creative',
    tech: ['Premiere Pro', 'After Effects', 'Motion Graphics'],
    gradient: 'from-sky-600/20 to-indigo-500/10',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80',
    demo: '#',
  },
]

export const organizations = [
  {
    name: 'IEEE',
    role: 'IEEEan · Active Member',
    description:
      'Participating in IEEE Xtreme programming competitions, hackathons, and technical workshops to sharpen problem-solving skills.',
    icon: '⚡',
  },
  {
    name: 'AIESEC',
    role: 'Aiesecer · Youth Leader',
    description:
      'Developing leadership, teamwork, and cross-cultural communication through global youth initiatives and community projects.',
    icon: '🌍',
  },
]

export const articles = [
  {
    date: 'MAR 2025',
    category: 'IEEE',
    title: 'Lessons from IEEE Xtreme 24-Hour Programming Marathon',
  },
  {
    date: 'JAN 2025',
    category: 'Development',
    title: 'How I structure my React projects as a student developer',
  },
  {
    date: 'NOV 2024',
    category: 'Career',
    title: 'Balancing academics, coding, and extracurricular tech activities',
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export type JourneyItem = {
  period: string
  title: string
  institution: string
  level: 'school' | 'university'
  description: string
  highlights: string[]
  badge?: string
}

export const journeyPhases = [
  {
    id: 'school',
    label: 'School Education',
    subtitle: 'Foundation years in Jaffna',
    icon: '🏫',
    items: [
      {
        period: '2012 – 2017',
        title: 'Primary & Lower Secondary',
        institution: 'Jaffna Central College',
        level: 'school' as const,
        description:
          'Completed primary education with strong interest in mathematics and science. Participated in school IT club and annual science exhibitions.',
        highlights: ['School IT Club Member', 'Science Exhibition Participant', 'Mathematics Top 10 in class'],
        badge: 'Primary',
      },
      {
        period: '2018 – 2019',
        title: 'G.C.E. Ordinary Level (O/L)',
        institution: 'Jaffna Central College',
        level: 'school' as const,
        description:
          'Sat for O/L examinations in the Science stream with focus on Mathematics, Science, and English. Built early interest in computers and technology.',
        highlights: ['Science Stream', 'Mathematics — A', 'ICT — A', 'English — B'],
        badge: 'O/L',
      },
      {
        period: '2020 – 2022',
        title: 'G.C.E. Advanced Level (A/L)',
        institution: 'Jaffna Central College',
        level: 'school' as const,
        description:
          'Pursued A/L in Physical Science stream with Combined Mathematics, Physics, and Information & Communication Technology.',
        highlights: ['Combined Mathematics — B', 'ICT — B', 'Physics — C', 'School Prefect — IT Society'],
        badge: 'A/L',
      },
    ],
  },
  {
    id: 'university',
    label: 'University Education',
    subtitle: 'BSc IT at University of Vavuniya',
    icon: '🎓',
    items: [
      {
        period: '2023 – 2024',
        title: 'Year 1 — IT Foundations',
        institution: 'University of Vavuniya',
        level: 'university' as const,
        description:
          'Studied programming fundamentals, computer architecture, mathematics for computing, and introduction to web technologies.',
        highlights: ['Programming with Java', 'Computer Systems', 'Web Development Basics', 'GPA 3.4 / 4.0'],
        badge: 'Year 1',
      },
      {
        period: '2024 – 2025',
        title: 'Year 2 — Software & Databases',
        institution: 'University of Vavuniya',
        level: 'university' as const,
        description:
          'Focused on object-oriented programming, database management systems, data structures, and front-end development with modern tools.',
        highlights: ['Database Systems — MySQL', 'Data Structures & Algorithms', 'React & JavaScript', 'Mini LMS Project'],
        badge: 'Year 2',
      },
      {
        period: '2023 – Present',
        title: 'Extracurricular — IEEE & AIESEC',
        institution: 'University of Vavuniya',
        level: 'university' as const,
        description:
          'Active in IEEE programming competitions including IEEE Xtreme, and AIESEC leadership programs alongside academic coursework.',
        highlights: ['IEEE Xtreme Participant', 'IEEE Student Member', 'AIESEC Youth Leader', 'Hackathon Volunteer'],
        badge: 'Activities',
      },
      {
        period: '2025 – 2027',
        title: 'Year 3 & 4 — Specialization (Ongoing)',
        institution: 'University of Vavuniya',
        level: 'university' as const,
        description:
          'Continuing BSc IT with software engineering, mobile application development, networking, and final-year project preparation.',
        highlights: ['Software Engineering', 'Mobile App Development', 'Computer Networks', 'Final Year Project — Planned'],
        badge: 'Ongoing',
      },
    ],
  },
]
