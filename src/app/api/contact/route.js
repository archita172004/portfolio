import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message || !phone) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: "Your Name <onboarding@resend.dev>",
      to: ["archichaudhary2004@gmail.com"],
      subject: `New message from ${name}`,
      html: `<p><strong>Name:</strong>${name}</p>
        </p><strong>Email:</strong>${email}</p>
        <p><strong>Phone:</strong>${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>`,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
