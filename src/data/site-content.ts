export const ASSETS = {
  logo: "/logo.png",
  favicon: "https://www.titaniumchessacademy.com/tab_logo.png",
  founder: "https://www.titaniumchessacademy.com/ansh.jpg",
  coach: {
    advaith: "/advaith-vijayasankaran.png",
  },
  backgrounds: {
    home: "/hero-home.png",
    about: "/hero-about.png",
    programs: "/hero-programs.png",
    summerCamp: "/hero-summer-camp-new.png",
    founder: "/hero-founder.png",
    coach: "/hero-coach.png",
    schedule: "/hero-schedule.png",
    reviews: "/hero-reviews.png",
    register: "/hero-register.png",
  },
  reviews: {
    aumkar: "https://www.titaniumchessacademy.com/aumkar.jpeg",
    abhiram: "https://www.titaniumchessacademy.com/abhi.jpeg",
    gaurik: "https://www.titaniumchessacademy.com/gaurik.jpeg",
  },
} as const;

export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/summer-camp", label: "Summer Camp" },
  { href: "/founder", label: "Founder" },
  { href: "/coaches/advaith", label: "Meet the Coach" },
  { href: "/schedule", label: "Schedule" },
  { href: "/reviews", label: "Reviews" },
] as const;

export const CONTACT = {
  email: "titaniumchessacademy@gmail.com",
  location: "Shrewsbury, MA · Worcester County",
  schedulePath: "/schedule",
} as const;

export const PROMO = {
  code: "CHESS",
  discount: "10%",
  deadline: "June 27th",
  note: "Code CHESS — 10% off by June 27th",
} as const;

export const STATS = [
  { value: 20, suffix: "+", label: "Students" },
  { value: 5, suffix: "", label: "Years" },
  { value: 1805, suffix: "", label: "Coach rating" },
  { value: 93, suffix: "rd", label: "Percentile" },
] as const;

export const FOUNDER = {
  name: "Ansh Nandurbarkar",
  username: "AN52007",
  chessCom: "https://www.chess.com/member/an52007",
  rating: 1769,
  image: ASSETS.founder,
  tagline: "Tournament insight. Classroom-tested instruction.",
  bio: "Shrewsbury HS · UMass Amherst. Seven years competitive chess. Tied 7th at the 2021 World Open U1100 (117 players). 1769 USCF — 92nd percentile nationally.",
  credentials: [
    { label: "World Open '21", value: "7th / 117" },
    { label: "USCF", value: "1769" },
    { label: "Percentile", value: "92nd" },
  ],
} as const;

export const COACH = {
  name: "Advaith Vijayasankaran",
  slug: "advaith",
  username: "advaith2011",
  chessCom: "https://www.chess.com/member/advaith2011",
  title: "Lead Coach",
  rating: 1805,
  ratingType: "Regular",
  percentiles: [
    { label: "Worldwide", value: "93rd" },
    { label: "Massachusetts", value: "86th" },
  ],
  experience: "10+ years",
  goal: "National Master · 2200+",
  image: ASSETS.coach.advaith,
  tagline: "Competitive drive. Clear coaching. Real growth.",
  bio: [
    "10+ years of chess. Goal: National Master at 2200+. That same grit fuels every lesson.",
    "I break down mistakes, explain the why, and give tips you can use immediately.",
    "Excited to help students around me grow — on the board and as thinkers.",
  ],
} as const;

export const PROGRAMS = [
  {
    title: "Year-Round Lessons",
    price: "$20/hr",
    cadence: "1 hr · weekly",
    href: "/programs",
    description: "Private & group. All levels.",
    highlights: ["Online year-round", "Personal feedback", "Beginner → advanced"],
  },
  {
    title: "Summer Camp",
    price: "$200",
    cadence: "Per 2-week session",
    href: "/summer-camp",
    description: "In-person groups. Shrewsbury, MA.",
    highlights: ["3 days / week", "2 hrs / class", "Jun 27 – Aug 21"],
  },
] as const;

export const CAMP_SESSIONS = [
  { dates: "Jun 27 – Jul 10", status: "I" },
  { dates: "Jul 13 – Jul 24", status: "II" },
  { dates: "Jul 27 – Aug 7", status: "III" },
  { dates: "Aug 10 – Aug 21", status: "IV" },
] as const;

export const CAMP_LEVELS = [
  {
    title: "Beginner",
    subtitle: "No experience needed",
    items: ["Rules & pieces", "Basic mates", "Openings & tactics"],
  },
  {
    title: "Advanced",
    subtitle: "Prior experience",
    items: ["Strategy & openings", "Puzzle solving", "Tournament prep"],
  },
] as const;

export const REVIEWS = [
  {
    quote: "Taught me to become a competitive, confident player.",
    name: "Aumkar D.",
    age: "18",
    image: ASSETS.reviews.aumkar,
  },
  {
    quote: "5 years here — helped me become a better player.",
    name: "Abhiram T.",
    age: "14",
    image: ASSETS.reviews.abhiram,
  },
  {
    quote: "You explain mistakes and give helpful tips to improve.",
    name: "Gaurik J.",
    age: "8",
    image: ASSETS.reviews.gaurik,
  },
] as const;

export const LESSON_OPTIONS = [
  "Chess Lessons",
  "Summer Camp (Beginner)",
  "Summer Camp (Advanced)",
  "Chess Lessons & Summer Camp (Beginner)",
  "Chess Lessons & Summer Camp (Advanced)",
] as const;

export const PAGE_GATEWAYS = [
  {
    href: "/about",
    eyebrow: "Academy",
    title: "About",
    description: "Small classes. Big results.",
    image: ASSETS.backgrounds.about,
  },
  {
    href: "/programs",
    eyebrow: "Year-Round",
    title: "Programs",
    description: "$20/hr · All levels.",
    image: ASSETS.backgrounds.programs,
  },
  {
    href: "/summer-camp",
    eyebrow: "2026",
    title: "Summer Camp",
    description: "4 sessions · Shrewsbury.",
    image: ASSETS.backgrounds.summerCamp,
  },
  {
    href: "/founder",
    eyebrow: "Leadership",
    title: "Founder",
    description: "Ansh · 1769 USCF.",
    image: ASSETS.backgrounds.founder,
  },
  {
    href: "/coaches/advaith",
    eyebrow: "Coaching",
    title: "Meet the Coach",
    description: "Advaith · 1805 USCF.",
    image: ASSETS.backgrounds.coach,
  },
  {
    href: "/schedule",
    eyebrow: "Schedule",
    title: "Pick Times",
    description: "3 steps · Done.",
    image: ASSETS.backgrounds.schedule,
  },
  {
    href: "/reviews",
    eyebrow: "Students",
    title: "Reviews",
    description: "Grades K–12.",
    image: ASSETS.backgrounds.reviews,
  },
] as const;

export const QUICK_LINKS = [
  { href: "/register", label: "Enroll" },
  { href: "/programs", label: "Programs" },
  { href: "/summer-camp", label: "Summer Camp" },
  { href: "/schedule", label: "Schedule" },
  { href: "/founder", label: "Founder" },
  { href: "/coaches/advaith", label: "Coach" },
  { href: "/reviews", label: "Reviews" },
] as const;
