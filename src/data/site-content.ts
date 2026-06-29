export const ASSETS = {
  logo: "/logo.png",
  favicon: "https://www.titaniumchessacademy.com/tab_logo.png",
  founder: "https://www.titaniumchessacademy.com/ansh.jpg",
  coach: {
    advaith: "/advaith-vijayasankaran.png",
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
  { href: "/coaches/advaith", label: "Meet the Coach" },
  { href: "/founder", label: "Founder" },
  { href: "/reviews", label: "Reviews" },
] as const;

export const CONTACT = {
  email: "titaniumchessacademy@gmail.com",
  location: "Shrewsbury, MA · Worcester County",
  googleForm:
    "https://docs.google.com/forms/d/e/1FAIpQLScin0VCcVme9fAoKYvGm0mEPnsFE26jMJaUa_xZ-togLddf6w/viewform?usp=publish-editor",
} as const;

export const PROMO = {
  code: "CHESS",
  discount: "10%",
  deadline: "June 27th",
  note: "Use promo code CHESS for 10% off when you register by June 27th.",
} as const;

export const STATS = [
  { value: 20, suffix: "+", label: "Students coached" },
  { value: 5, suffix: "", label: "Years of instruction" },
  { value: 1805, suffix: "", label: "Coach USCF rating" },
  { value: 93, suffix: "rd", label: "Percentile worldwide" },
] as const;

export const COACH = {
  name: "Advaith Vijayasankaran",
  slug: "advaith",
  title: "Lead Coach",
  rating: 1805,
  ratingType: "Regular",
  percentiles: [
    { label: "Worldwide", value: "93rd" },
    { label: "Massachusetts", value: "86th" },
  ],
  experience: "10+ years",
  goal: "National Master (2200+)",
  image: ASSETS.coach.advaith,
  bio: [
    "I have been playing chess for over ten years, and my ultimate goal is to become a National Master — a highly ambitious target that demands years of hard work, dedication, determination, and grit. To earn the National Master title, a player must reach a rating of 2200 or higher. As a determined and self-motivated student of the game, I am committed to doing everything I can to achieve that milestone.",
    "That same discipline shapes how I teach. I break down mistakes clearly, explain the reasoning behind every recommendation, and give students practical tools they can use immediately — whether they are learning their first checkmate or preparing for tournament play.",
    "I am genuinely excited to help the students around me grow. Chess taught me patience, resilience, and how to think several moves ahead; I want to pass that on. At Titanium Chess Academy, I bring competitive experience and a coach's mindset focused on building confident, thoughtful players.",
  ],
  highlights: [
    "1805 USCF Regular rating",
    "93rd percentile worldwide · 86th in Massachusetts",
    "10+ years of competitive experience",
    "Road to National Master — teaching with long-term ambition",
  ],
} as const;

export const PROGRAMS = [
  {
    title: "Year-Round Lessons",
    price: "$20/hr",
    cadence: "1 hour · once per week",
    href: "/programs",
    description:
      "Private or small-group tutoring tailored to each student's level, goals, and learning pace.",
    highlights: [
      "Online availability year-round",
      "Personalized feedback every session",
      "Beginner through advanced tracks",
    ],
  },
  {
    title: "Summer Chess Camp",
    price: "$200",
    cadence: "Per 2-week session",
    href: "/summer-camp",
    description:
      "In-person group instruction in the Worcester County area with structured beginner and advanced tracks.",
    highlights: [
      "3 days per week · 2 hours per class",
      "Multiple sessions June 27 – August 21",
      "Shrewsbury, MA area",
    ],
  },
] as const;

export const CAMP_SESSIONS = [
  { dates: "June 27 – July 10", status: "Session I" },
  { dates: "July 13 – July 24", status: "Session II" },
  { dates: "July 27 – August 7", status: "Session III" },
  { dates: "August 10 – August 21", status: "Session IV" },
] as const;

export const CAMP_LEVELS = [
  {
    title: "Beginner Camp",
    subtitle: "No prior experience required",
    items: [
      "Rules of the game",
      "Piece movement",
      "Basic checkmates",
      "Foundational opening and tactical concepts",
    ],
  },
  {
    title: "Advanced Camp",
    subtitle: "For students with prior experience",
    items: [
      "Higher-level strategy and opening ideas",
      "Challenging puzzles as a group",
      "Game analysis and guided gameplay",
      "Tournament preparation",
    ],
  },
] as const;

export const REVIEWS = [
  {
    quote:
      "Titanium Chess Academy has taught me to become a competitive and confident chess player. The quality of my game has drastically increased since joining Ansh's chess academy.",
    name: "Aumkar D.",
    age: "18 years old",
    image: ASSETS.reviews.aumkar,
  },
  {
    quote:
      "I have been in this Chess Tutoring service for 5 years, and it's helped me become a better chess player.",
    name: "Abhiram T.",
    age: "14 years old",
    image: ASSETS.reviews.abhiram,
  },
  {
    quote:
      "You understand people's mistakes and you explain to them why and you give us helpful tips on how to improve.",
    name: "Gaurik J.",
    age: "8 years old",
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
    eyebrow: "The Academy",
    title: "Our Story",
    description: "Small-scale instruction built on personalized attention and lasting growth.",
  },
  {
    href: "/programs",
    eyebrow: "Year-Round",
    title: "Programs",
    description: "Private and group lessons tailored to every skill level.",
  },
  {
    href: "/summer-camp",
    eyebrow: "2026",
    title: "Summer Camp",
    description: "Four in-person sessions in Shrewsbury, MA.",
  },
  {
    href: "/coaches/advaith",
    eyebrow: "Coaching",
    title: "Meet the Coach",
    description: "Learn with Advaith Vijayasankaran — 1805 USCF.",
  },
  {
    href: "/founder",
    eyebrow: "Leadership",
    title: "Our Founder",
    description: "Ansh Nandurbarkar — tournament insight meets classroom instruction.",
  },
  {
    href: "/reviews",
    eyebrow: "Community",
    title: "Reviews",
    description: "Hear from students and families across grades K–12.",
  },
] as const;
