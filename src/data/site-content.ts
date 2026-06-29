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
  { href: "/coaches", label: "Meet the Coaches" },
  { href: "/reviews", label: "Reviews" },
] as const;

export const ENROLLMENT = {
  startPath: "/register",
  schedulePath: "/schedule",
  steps: [
    { step: 1, label: "Register", path: "/register" },
    { step: 2, label: "Schedule", path: "/schedule" },
    { step: 3, label: "Confirm", path: null },
  ],
} as const;

export const CONTACT = {
  email: "titaniumchessacademy@gmail.com",
  location: "Shrewsbury, MA · Worcester County",
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
  title: "Founder and Head Coach",
  rating: 1769,
  image: ASSETS.founder,
  tagline: "Tournament-level insight meets classroom-tested instruction for grades K–12.",
  bio: [
    "My name is Ansh Nandurbarkar, owner of Titanium Chess Academy. I am a recent graduate of Shrewsbury High School and currently study Finance at UMass Amherst. With seven years of competitive chess experience and extensive background teaching students in grades K–12, I bring both tournament-level insight and classroom-tested instruction to every lesson.",
    "My official USCF rating is 1769, placing me in the 92nd percentile nationally. My greatest accomplishment is a tie for 7th place in the Under-1100 section at the 2021 World Open, competing against 117 players.",
    "More importantly, I am passionate about helping students grow not only as chess players, but as thinkers and individuals. My teaching emphasizes critical thinking, confidence, and a genuine enjoyment of the learning process.",
  ],
  credentials: [
    { label: "World Open '21", value: "Tied 7th · U1100" },
    { label: "USCF", value: "1769" },
    { label: "Background", value: "Shrewsbury HS · UMass" },
  ],
} as const;

export const COACH = {
  name: "Advaith Vijayasankaran",
  slug: "advaith",
  username: "advaith2011",
  chessCom: "https://www.chess.com/member/advaith2011",
  title: "Coach",
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
    "10+ years of competitive chess with a National Master goal at 2200+. I break down mistakes, explain the why, and give tips you can use immediately.",
    "Excited to help students grow on the board and as thinkers — competitive drive, clear coaching, real growth.",
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
    href: "/coaches",
    eyebrow: "Coaching",
    title: "Meet the Coaches",
    description: "Ansh · Advaith · USCF rated.",
    image: ASSETS.backgrounds.coach,
  },
  {
    href: "/register",
    eyebrow: "Enroll",
    title: "Register",
    description: "Step 1 · Start here.",
    image: ASSETS.backgrounds.register,
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
  { href: "/coaches", label: "Coaches" },
  { href: "/reviews", label: "Reviews" },
] as const;
