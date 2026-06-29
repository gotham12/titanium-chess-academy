export type RegistrationRecord = {
  id: string;
  studentName: string;
  parentName: string;
  email: string;
  phone: string;
  program: string;
  promoCode: string | null;
  message: string | null;
  status: string;
  createdAt: string;
};

export type ScheduleRecord = {
  id: string;
  registrationId: string | null;
  email: string;
  studentName: string;
  program: string;
  campSession: string | null;
  experienceLevel: string;
  preferredDays: string[];
  preferredTime: string;
  notes: string | null;
  createdAt: string;
};
