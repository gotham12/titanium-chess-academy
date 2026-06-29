import { neon } from "@neondatabase/serverless";
import { ensureMigrated } from "./migrate";
import {
  localCreateRegistration,
  localCreateSchedule,
  localListAll,
} from "./local-store";
import type { RegistrationRecord, ScheduleRecord } from "./types";
import type { RegistrationInput, ScheduleInput } from "../validation";

function usePostgres() {
  return Boolean(process.env.DATABASE_URL);
}

export async function createRegistration(
  input: RegistrationInput,
): Promise<RegistrationRecord> {
  if (!usePostgres()) {
    return localCreateRegistration(input);
  }

  await ensureMigrated();
  const sql = neon(process.env.DATABASE_URL!);
  const rows = await sql`
    INSERT INTO registrations (student_name, parent_name, email, phone, program, promo_code, message)
    VALUES (${input.studentName}, ${input.parentName}, ${input.email}, ${input.phone}, ${input.program}, ${input.promoCode ?? null}, ${input.message ?? null})
    RETURNING id, student_name AS "studentName", parent_name AS "parentName", email, phone, program,
              promo_code AS "promoCode", message, status, created_at AS "createdAt"
  `;
  return rows[0] as RegistrationRecord;
}

export async function createSchedule(input: ScheduleInput): Promise<ScheduleRecord> {
  if (!usePostgres()) {
    return localCreateSchedule(input);
  }

  await ensureMigrated();
  const sql = neon(process.env.DATABASE_URL!);
  const rows = await sql`
    INSERT INTO schedule_preferences (
      registration_id, email, student_name, program, camp_session,
      experience_level, preferred_days, preferred_time, notes
    )
    VALUES (
      ${input.registrationId ?? null}, ${input.email}, ${input.studentName}, ${input.program},
      ${input.campSession ?? null}, ${input.experienceLevel}, ${input.preferredDays},
      ${input.preferredTime}, ${input.notes ?? null}
    )
    RETURNING id, registration_id AS "registrationId", email, student_name AS "studentName",
              program, camp_session AS "campSession", experience_level AS "experienceLevel",
              preferred_days AS "preferredDays", preferred_time AS "preferredTime",
              notes, created_at AS "createdAt"
  `;
  return rows[0] as ScheduleRecord;
}

export async function listSubmissions(apiKey: string) {
  if (apiKey !== process.env.ADMIN_API_KEY) {
    throw new Error("Unauthorized");
  }

  if (!usePostgres()) {
    return localListAll();
  }

  await ensureMigrated();
  const sql = neon(process.env.DATABASE_URL!);
  const registrations = await sql`
    SELECT id, student_name AS "studentName", parent_name AS "parentName", email, phone, program,
           promo_code AS "promoCode", message, status, created_at AS "createdAt"
    FROM registrations ORDER BY created_at DESC LIMIT 200
  `;
  const schedules = await sql`
    SELECT id, registration_id AS "registrationId", email, student_name AS "studentName", program,
           camp_session AS "campSession", experience_level AS "experienceLevel",
           preferred_days AS "preferredDays", preferred_time AS "preferredTime",
           notes, created_at AS "createdAt"
    FROM schedule_preferences ORDER BY created_at DESC LIMIT 200
  `;
  return { registrations, schedules };
}
