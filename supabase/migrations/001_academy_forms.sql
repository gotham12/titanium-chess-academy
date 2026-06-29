-- Run in Supabase SQL editor or via apply_migration
CREATE TABLE IF NOT EXISTS registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name TEXT NOT NULL,
  parent_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  program TEXT NOT NULL,
  promo_code TEXT,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS schedule_preferences (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  registration_id UUID REFERENCES registrations(id) ON DELETE SET NULL,
  email TEXT NOT NULL,
  student_name TEXT NOT NULL,
  program TEXT NOT NULL,
  camp_session TEXT,
  experience_level TEXT NOT NULL,
  preferred_days TEXT[] NOT NULL DEFAULT '{}',
  preferred_time TEXT NOT NULL,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_registrations_email ON registrations(email);
CREATE INDEX IF NOT EXISTS idx_schedule_email ON schedule_preferences(email);

ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE schedule_preferences ENABLE ROW LEVEL SECURITY;
