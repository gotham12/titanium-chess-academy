import { NextResponse } from "next/server";
import { createSchedule } from "@/lib/db";
import { scheduleSchema } from "@/lib/validation";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  try {
    const parsed = scheduleSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const record = await createSchedule(parsed.data);

    return NextResponse.json({
      success: true,
      id: record.id,
      message: "Schedule preferences saved. We'll confirm by email soon.",
    });
  } catch (error) {
    console.error("Schedule error:", error);
    return NextResponse.json(
      { error: "Unable to save schedule. Please try again or email us." },
      { status: 500 },
    );
  }
}
