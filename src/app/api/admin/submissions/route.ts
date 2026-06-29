import { NextResponse } from "next/server";
import { listSubmissions } from "@/lib/db";

export async function GET(request: Request) {
  try {
    const apiKey = request.headers.get("x-admin-key") ?? "";
    const data = await listSubmissions(apiKey);
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
