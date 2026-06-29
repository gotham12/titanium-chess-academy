import { z } from "zod";

export const registrationSchema = z.object({
  studentName: z.string().min(1, "Student name is required").max(120),
  parentName: z.string().min(1, "Parent name is required").max(120),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Valid phone required").max(30),
  program: z.string().min(1, "Select a program"),
  promoCode: z.string().max(40).optional(),
  message: z.string().max(2000).optional(),
});

export const scheduleSchema = z.object({
  registrationId: z.string().uuid().optional(),
  email: z.string().email(),
  studentName: z.string().min(1).max(120),
  program: z.enum(["lessons", "summer-camp-beginner", "summer-camp-advanced", "both-lessons-camp"]),
  campSession: z.string().max(80).optional(),
  experienceLevel: z.enum(["brand-new", "beginner", "intermediate", "advanced"]),
  preferredDays: z.array(z.enum(["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"])).min(1, "Pick at least one day"),
  preferredTime: z.enum(["morning", "afternoon", "evening", "flexible"]),
  notes: z.string().max(1000).optional(),
});

export type RegistrationInput = z.infer<typeof registrationSchema>;
export type ScheduleInput = z.infer<typeof scheduleSchema>;
