import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      phone,
      dob,
      coverage,
      tcpaConsent,
    } = body;

    // ✅ Get IP & User Agent
    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const userAgent = req.headers.get("user-agent") || "unknown";

    // ✅ Validation
    if (!firstName || !lastName || !phone || !dob || !tcpaConsent) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("finalexpense");

    const result = await db.collection("leads").insertOne({
      firstName,
      lastName,
      phone,
      dob,
      coverage,
      tcpaConsent,

      // ✅ Compliance fields
      ip,
      userAgent,

      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      id: result.insertedId,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}