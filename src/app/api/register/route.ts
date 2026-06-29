import { NextResponse } from "next/server";
import { createRegistration } from "@/lib/db";
import { registrationSchema } from "@/lib/validation";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  try {
    const parsed = registrationSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const record = await createRegistration(parsed.data);

    return NextResponse.json({
      success: true,
      id: record.id,
      message: "Registration saved. Complete your schedule preferences next.",
    });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Unable to save registration. Please try again or email us." },
      { status: 500 },
    );
  }
}
