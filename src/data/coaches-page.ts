import { Award, Target, TrendingUp, Trophy, Users } from "lucide-react";
import { COACH, FOUNDER } from "@/data/site-content";

export type CoachProfileData = {
  id: string;
  name: string;
  titleLines: [string, string];
  title: string;
  username: string;
  chessCom: string;
  rating: number;
  tagline?: string;
  image: string;
  bio: string | readonly string[];
  statCards: { label: string; value: string | number; subValue?: string; animate?: boolean }[];
  highlights?: { icon: keyof typeof HIGHLIGHT_ICONS; title: string; text: string }[];
  pillars?: { icon: keyof typeof PILLAR_ICONS; title: string; text: string }[];
  goalHeading?: string;
};

export const HIGHLIGHT_ICONS = {
  trophy: Trophy,
  award: Award,
} as const;

export const PILLAR_ICONS = {
  trending: TrendingUp,
  users: Users,
  target: Target,
} as const;

export const anshProfile: CoachProfileData = {
  id: "ansh",
  name: FOUNDER.name,
  titleLines: ["Ansh", "Nandurbarkar"],
  title: FOUNDER.title,
  username: FOUNDER.username,
  chessCom: FOUNDER.chessCom,
  rating: FOUNDER.rating,
  tagline: FOUNDER.tagline,
  image: FOUNDER.image,
  bio: FOUNDER.bio,
  statCards: FOUNDER.credentials.map((item) => ({
    label: item.label,
    value: item.value,
    subValue: item.subValue,
    animate: item.animate ?? false,
  })),
  highlights: [
    { icon: "trophy", title: "World Open 2021", text: "Tied 7th in U1100 · 117 players" },
    { icon: "award", title: "Education", text: "Graduated SHS · Now attending Amherst" },
  ],
};

export const advaithProfile: CoachProfileData = {
  id: "advaith",
  name: COACH.name,
  titleLines: ["Advaith", "Vijayasankaran"],
  title: COACH.title,
  username: COACH.username,
  chessCom: COACH.chessCom,
  rating: COACH.rating,
  tagline: COACH.tagline,
  image: COACH.image,
  bio: COACH.bio,
  statCards: [
    { label: "USCF", value: COACH.rating, animate: true },
    { label: "Worldwide", value: "93rd", subValue: "percentile" },
    { label: "Massachusetts", value: "86th", subValue: "percentile" },
  ],
  pillars: [
    { icon: "trending", title: "10+ years", text: "Road to National Master." },
    { icon: "users", title: "Clear coaching", text: "Honest feedback every session." },
    { icon: "target", title: "Your growth", text: "Thinkers, not memorizers." },
  ],
  goalHeading: COACH.goal,
};
