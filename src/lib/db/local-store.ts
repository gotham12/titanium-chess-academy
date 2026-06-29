import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";
import type { RegistrationRecord, ScheduleRecord } from "./types";
import type { RegistrationInput, ScheduleInput } from "../validation";

type Store = {
  registrations: RegistrationRecord[];
  schedules: ScheduleRecord[];
};

const DATA_DIR = process.env.VERCEL
  ? "/tmp/titanium-chess-data"
  : path.join(process.cwd(), ".data");
const STORE_FILE = path.join(DATA_DIR, "academy-store.json");

async function readStore(): Promise<Store> {
  try {
    const raw = await fs.readFile(STORE_FILE, "utf8");
    return JSON.parse(raw) as Store;
  } catch {
    return { registrations: [], schedules: [] };
  }
}

async function writeStore(store: Store) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(STORE_FILE, JSON.stringify(store, null, 2), "utf8");
}

export async function localCreateRegistration(
  input: RegistrationInput,
): Promise<RegistrationRecord> {
  const store = await readStore();
  const record: RegistrationRecord = {
    id: randomUUID(),
    studentName: input.studentName,
    parentName: input.parentName,
    email: input.email,
    phone: input.phone,
    program: input.program,
    promoCode: input.promoCode ?? null,
    message: input.message ?? null,
    status: "pending",
    createdAt: new Date().toISOString(),
  };
  store.registrations.unshift(record);
  await writeStore(store);
  return record;
}

export async function localCreateSchedule(input: ScheduleInput): Promise<ScheduleRecord> {
  const store = await readStore();
  const record: ScheduleRecord = {
    id: randomUUID(),
    registrationId: input.registrationId ?? null,
    email: input.email,
    studentName: input.studentName,
    program: input.program,
    campSession: input.campSession ?? null,
    experienceLevel: input.experienceLevel,
    preferredDays: input.preferredDays,
    preferredTime: input.preferredTime,
    notes: input.notes ?? null,
    createdAt: new Date().toISOString(),
  };
  store.schedules.unshift(record);
  await writeStore(store);
  return record;
}

export async function localListAll() {
  return readStore();
}
