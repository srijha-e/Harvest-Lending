import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { firstName, lastName, phone, email, marketing, nonMarketing } = await req.json()

    if (!firstName || !lastName || !phone || !email) {
      return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 })
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      return NextResponse.json(
        { ok: false, error: "Email service is not configured yet." },
        { status: 500 },
      )
    }

    const fullName = `${firstName} ${lastName}`.trim()

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        from_name: "Harvest Lending Website",
        subject: `${fullName} is looking to connect`,
        // Reply-To is set to the visitor's email so the team can respond directly.
        replyto: email,
        message:
          `${fullName} is looking to connect.\n\n` +
          `Name: ${fullName}\n` +
          `Phone: ${phone}\n` +
          `Email: ${email}\n` +
          `Marketing SMS consent: ${marketing ? "Yes" : "No"}\n` +
          `Non-marketing SMS consent: ${nonMarketing ? "Yes" : "No"}`,
      }),
    })

    const data = await res.json()
    if (data.success) {
      return NextResponse.json({ ok: true })
    }
    return NextResponse.json({ ok: false, error: data.message || "Failed to send." }, { status: 502 })
  } catch {
    return NextResponse.json({ ok: false, error: "Unexpected error." }, { status: 500 })
  }
}
