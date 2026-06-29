export const ASSETS = {
  logo: "https://www.titaniumchessacademy.com/logo_nbg.png",
  favicon: "https://www.titaniumchessacademy.com/tab_logo.png",
  founder: "https://www.titaniumchessacademy.com/ansh.jpg",
  reviews: {
    aumkar: "https://www.titaniumchessacademy.com/aumkar.jpeg",
    abhiram: "https://www.titaniumchessacademy.com/abhi.jpeg",
    gaurik: "https://www.titaniumchessacademy.com/gaurik.jpeg",
  },
} as const;

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
  { value: "20+", label: "Students coached" },
  { value: "5", label: "Years of instruction" },
  { value: "1769", label: "Coach USCF rating" },
  { value: "92nd", label: "Percentile nationally" },
] as const;

export const PROGRAMS = [
  {
    title: "Year-Round Lessons",
    price: "$20/hr",
    cadence: "1 hour · once per week",
    description:
      "Private or small-group tutoring tailored to each student's level, goals, and learning pace.",
    highlights: [
      "Online availability year-round",
      "Personalized feedback every session",
      "Beginner through advanced tracks",
    ],
    accent: "gold",
  },
  {
    title: "Summer Chess Camp",
    price: "$200",
    cadence: "Per 2-week session",
    description:
      "In-person group instruction in the Worcester County area with structured beginner and advanced tracks.",
    highlights: [
      "3 days per week · 2 hours per class",
      "Multiple sessions June 27 – August 21",
      "Shrewsbury, MA area",
    ],
    accent: "blue",
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
