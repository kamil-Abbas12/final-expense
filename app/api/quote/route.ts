import { NextRequest, NextResponse } from "next/server";

interface QuotePayload {
  firstName: string;
  lastName: string;
  phone: string;
  dob: string;
  coverage: string;
  tcpaConsent: boolean;
}

export async function POST(req: NextRequest) {
  try {
    const body: QuotePayload = await req.json();

    // Validate required fields
    if (!body.firstName || !body.lastName || !body.phone || !body.dob || !body.coverage) {
      return NextResponse.json({ success: false, error: "Missing required fields." }, { status: 400 });
    }

    if (!body.tcpaConsent) {
      return NextResponse.json({ success: false, error: "TCPA consent is required." }, { status: 400 });
    }

    // TODO: Integrate with your CRM or lead distribution platform here.
    // Example: send to a webhook, write to a database, call a third-party API.
    console.log("New quote lead:", {
      name: `${body.firstName} ${body.lastName}`,
      phone: body.phone,
      dob: body.dob,
      coverage: body.coverage,
      tcpaConsent: body.tcpaConsent,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Quote API error:", err);
    return NextResponse.json({ success: false, error: "Internal server error." }, { status: 500 });
  }
}