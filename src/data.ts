// ─── Profile ──────────────────────────────────────────────────────────────────
export const profile = {
  photo: '/profile.jpeg',
  name: 'Vishnutharan Bavachelvan',
  displayName: 'VISHNU',
  shortName: 'Vishnutharan',
  role: 'Full-Stack Developer & IT Undergraduate',
  roleLines: [
    'Full-Stack Developer',
    'IT Undergraduate',
    'Frontend Engineer',
    'Backend Developer',
  ],
  tagline: 'I turn complex problems into thoughtful digital experiences.',
  about:
    "I'm Vishnutharan Bavachelvan, a full-stack developer and IT undergraduate at the University of Vavuniya. From responsive interfaces to autonomous agents, I like understanding how the pieces fit together.",
  university: 'University of Vavuniya',
  faculty: 'Faculty of Applied Science',
  degree: 'B.Sc. (Hons) in Information Technology',
  studyPeriod: '2023 – Present',
  honoursNote: 'Selected for the IT Honours programme in 2026.',
  location: 'Sri Lanka',
  availability: 'Remote worldwide · On-site Sri Lanka',
  availabilityNote:
    'Open to internships in full-stack, frontend, and backend development.',
  email: 'bavachelvanvishnutharan@gmail.com',
  phone: '+94 77 364 6391',
  whatsapp: '94773646391',
  github: 'https://github.com/vishnu-tharan',
  linkedin: 'https://www.linkedin.com/in/vishnutharanbavachelvan-5419a02b3',
  instagram: 'https://instagram.com/vishnutharan',
  available: true,
}

// ─── Navigation ───────────────────────────────────────────────────────────────
export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#journey', label: 'Journey' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Connect' },
]

// ─── Hero marquee ticker ───────────────────────────────────────────────────────
export const marqueeTech = [
  'React',
  'Spring Boot',
  'Java',
  'Node.js',
  'Python',
  'MongoDB',
  'JavaScript',
  'TypeScript',
  'C/C++',
  'SQL',
  'React Native',
  'MySQL',
  'Firebase',
  'Docker',
  'Git',
  'MPI',
  'OpenMP',
  'CUDA',
  'JADE',
  'Apache GemFire',
  'Vercel',
  'Expo',
  'Express',
  'SQLite',
  'PWA',
]

// ─── Skills ───────────────────────────────────────────────────────────────────
export type Skill = {
  name: string
  icon: string
  level: number
  category: string
  subtitle?: string
  index?: string
}

export const primarySkills: Skill[] = [
  { name: 'React', icon: 'react', level: 80, category: 'Primary', subtitle: 'Interfaces', index: '01' },
  { name: 'Spring Boot', icon: 'spring', level: 75, category: 'Primary', subtitle: 'Backend', index: '02' },
  { name: 'Java', icon: 'java', level: 85, category: 'Primary', subtitle: 'Systems', index: '03' },
  { name: 'Node.js', icon: 'node', level: 72, category: 'Primary', subtitle: 'Services', index: '04' },
  { name: 'Python', icon: 'python', level: 65, category: 'Primary', subtitle: 'Exploration', index: '05' },
  { name: 'MongoDB', icon: 'mongodb', level: 70, category: 'Primary', subtitle: 'Data', index: '06' },
]

export const toolkitSkills: string[] = [
  'JavaScript',
  'C/C++',
  'SQL',
  'React Native',
  'MySQL',
  'Firebase',
  'Docker',
  'Git',
  'MPI',
  'OpenMP',
  'CUDA',
  'JADE',
  'Apache GemFire',
  'Vercel',
]

export const skillCategories = [
  {
    title: 'Primary',
    skills: primarySkills,
  },
  {
    title: 'Frameworks & Tools',
    skills: [
      { name: 'React Native', icon: 'react', level: 72, category: 'Frameworks' },
      { name: 'Express', icon: 'node', level: 72, category: 'Frameworks' },
      { name: 'MySQL', icon: 'mysql', level: 78, category: 'Frameworks' },
      { name: 'Firebase', icon: 'firebase', level: 68, category: 'Frameworks' },
      { name: 'Docker', icon: 'docker', level: 62, category: 'Frameworks' },
      { name: 'Git', icon: 'git', level: 85, category: 'Frameworks' },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', icon: 'javascript', level: 82, category: 'Languages' },
      { name: 'TypeScript', icon: 'typescript', level: 75, category: 'Languages' },
      { name: 'C/C++', icon: 'cpp', level: 65, category: 'Languages' },
      { name: 'SQL', icon: 'database', level: 78, category: 'Languages' },
      { name: 'HTML', icon: 'html', level: 92, category: 'Languages' },
      { name: 'CSS', icon: 'css', level: 88, category: 'Languages' },
    ],
  },
]

// ─── Projects ─────────────────────────────────────────────────────────────────
export type Project = {
  title: string
  cardName: string
  cardSymbol: string
  cardTagline: string
  cardKeyword: string
  category: string
  description: string
  tag: string
  tech: string[]
  gradient: string
  github?: string
  demo?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Lanka Agri-Direct',
    cardName: 'Lanka Agri-Direct',
    cardSymbol: 'ag',
    cardTagline: 'GROWERS / PEOPLE / CONNECTION',
    cardKeyword: 'GROW',
    category: 'GROUP PROJECT / TEAM MEMBER',
    tag: 'Marketplace',
    description:
      'A direct-to-consumer digital marketplace connecting Sri Lankan agricultural producers with consumers. I contributed as a team member. The platform supports produce distribution and order management, helping reduce intermediary costs.',
    tech: ['Spring Boot', 'React', 'React Native', 'MongoDB', 'Docker'],
    gradient: 'from-green-600 to-emerald-400',
    github: 'https://github.com/dragon-udfly/LankaAgriDirect',
    featured: true,
  },
  {
    title: 'University Gateway',
    cardName: 'University Gateway',
    cardSymbol: 'G',
    cardTagline: 'ONE CAMPUS. THREE GATES.',
    cardKeyword: 'ACCESS',
    category: 'CAMPUS ACCESS / WEB & MOBILE',
    tag: 'Full-Stack',
    description:
      'A campus vehicle-access and equipment gate-pass application for the University of Vavuniya. Supports web, Android, and iOS with an Express and MongoDB API. Gate officers record arrivals and departures, faculty administrators approve equipment requests, and campus administrators manage access. Includes QR staff passes, searchable vehicle history, PDF reports, and audit history.',
    tech: ['React Native', 'Expo', 'Express', 'MongoDB'],
    gradient: 'from-blue-600 to-cyan-400',
    github: 'https://github.com/vishnu-tharan/GATEWAY-UniversityOfVavuniya',
    featured: true,
  },
  {
    title: 'cashManage',
    cardName: 'cashManage',
    cardSymbol: 'cM',
    cardTagline: 'YOUR MONEY. A CLEARER PICTURE.',
    cardKeyword: 'BALANCE',
    category: 'PERSONAL FINANCE APPLICATION',
    tag: 'PWA',
    description:
      'Private cashbooks for web and mobile with encrypted offline storage and an Express/SQLite account server. Track income and expenses across currency-specific books, plan budgets and savings, record debts and repayments, and import bank statements with CSV preview. Includes PDF/CSV reports and shared cashbooks with owner, editor, and viewer roles.',
    tech: ['React', 'JavaScript', 'Express', 'SQLite', 'PWA'],
    gradient: 'from-violet-600 to-purple-400',
    github: 'https://github.com/vishnu-tharan/cashManage',
    featured: true,
  },
  {
    title: 'CEB Energy Saver',
    cardName: 'CEB Energy Saver',
    cardSymbol: 'kWh',
    cardTagline: 'UNDERSTAND USAGE. PLAN YOUR ENERGY.',
    cardKeyword: 'ENERGY',
    category: 'HOUSEHOLD ENERGY PLANNER',
    tag: 'Web App',
    description:
      'An independent household electricity planner for Sri Lanka. Track appliances and meter readings, set energy targets and budgets, compare recorded bills with estimates, and explore appliance, solar, and EV charging scenarios. Includes saved weekly usage plans, forecasts, and CSV export.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Express', 'SQLite'],
    gradient: 'from-amber-500 to-orange-400',
    github: 'https://github.com/vishnu-tharan/CEB-Management',
  },
  {
    title: 'CinemaStream',
    cardName: 'CinemaStream',
    cardSymbol: 'C▶',
    cardTagline: 'FIND YOUR NEXT FAVORITE.',
    cardKeyword: 'DISCOVER',
    category: 'MOVIE DISCOVERY / MOBILE APP',
    tag: 'Mobile',
    description:
      'A movie-browsing application built with React Native, Expo, and TypeScript. Explore a local movie catalog, search by title or genre, and open individual movie detail screens through Expo Router. Includes login, registration, and profile screens with Firebase integration, plus animated movie cards and a responsive two-column catalog.',
    tech: ['TypeScript', 'React Native', 'Expo', 'Firebase'],
    gradient: 'from-rose-600 to-pink-400',
    github: 'https://github.com/vishnu-tharan/CinemaStream',
  },
]

// ─── Journey / Timeline ───────────────────────────────────────────────────────
export type JourneyEntry = {
  year: string
  period: string
  title: string
  subtitle: string
  description: string
  milestones: string[]
}

export const journeyEntries: JourneyEntry[] = [
  {
    year: '2021',
    period: 'School & University Selection',
    title: 'Learning to lead.',
    subtitle: 'J/Uduppiddy American Mission College',
    description:
      'Studied for my A/Ls at J/Uduppiddy American Mission College and served as Head Prefect. Selected for the B.Sc. in Information Technology at the University of Vavuniya.',
    milestones: ['A/L studies', 'Head Prefect', 'B.Sc. IT selection'],
  },
  {
    year: '2023',
    period: '2023–2024 / Year 1',
    title: 'IT foundations.',
    subtitle: 'University of Vavuniya',
    description:
      'University of Vavuniya — studied programming fundamentals, computer architecture, mathematics for computing, and an introduction to web technologies.',
    milestones: ['Programming with Java', 'Computer Systems', 'Web Development Basics'],
  },
  {
    year: '2024',
    period: '2024–2025 / Year 2',
    title: 'Software & databases.',
    subtitle: 'University of Vavuniya',
    description:
      'University of Vavuniya — focused on object-oriented programming, database management systems, data structures, and frontend development with modern tools.',
    milestones: ['MySQL database systems', 'Data Structures & Algorithms', 'React & JavaScript'],
  },
  {
    year: '2025',
    period: '2024–2025 / Applied Learning',
    title: 'Putting knowledge into practice.',
    subtitle: 'University of Vavuniya',
    description:
      'Applied my Year 2 software and database studies through a Mini LMS project, alongside academic coursework and student activities at the University of Vavuniya.',
    milestones: ['Mini LMS Project', 'Object-oriented programming', 'Frontend development'],
  },
  {
    year: '2026',
    period: 'Honours Programme Selection',
    title: 'The next academic chapter.',
    subtitle: 'University of Vavuniya',
    description:
      'Selected for the B.Sc. in Information Technology Honours degree programme at the University of Vavuniya. Continuing to develop my skills in software development and computing.',
    milestones: ['B.Sc. IT Honours', 'University of Vavuniya'],
  },
]

// ─── Certifications ───────────────────────────────────────────────────────────
export type Certification = {
  name: string
  issuer: string
}

export const certifications: Certification[] = [
  { name: 'JavaScript Essentials 1 & 2', issuer: 'Cisco Networking Academy' },
  { name: 'Introduction to SQL', issuer: 'Sololearn' },
]

// ─── Community ────────────────────────────────────────────────────────────────
export const communityItems: string[] = [
  'AIESEC member',
  'IEEE member',
  'Vanni Vogue Camera Club member',
  'JamporIEEE organizing committee — Logistics team',
  'Hackathon volunteer',
  'AIESEC leadership programmes',
]

// ─── Competitions ─────────────────────────────────────────────────────────────
export const competitionItems: string[] = [
  'IEEEXtreme 17.0 participant',
  'IEEEXtreme 18.0 participant',
  'IEEEXtreme 18.0 organizing committee member',
  'Competed in IEEEXtreme 18.0 with TheChiefs, representing the University of Vavuniya.',
]

// ─── Stats (about section counters) ─────────────────────────────────────────
export const stats = [
  { value: 5, label: 'Projects built' },
  { value: 14, label: 'Technologies in toolkit' },
  { value: 2, label: 'IEEE Extremes' },
  { value: 4, label: 'Years in IT programme' },
]

// ─── Organizations (legacy — kept for compatibility) ─────────────────────────
export const organizations = ['IEEE', 'AIESEC']
