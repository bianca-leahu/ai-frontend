import { z } from "zod"

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
})

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const parsed = ContactSchema.safeParse(data)
    if (!parsed.success) {
      return Response.json({ error: "Invalid input", issues: parsed.error.format() }, { status: 400 })
    }

    // Simulate processing (e.g., send email, store in DB)
    // await sendEmail(parsed.data)

    return Response.json({ ok: true })
  } catch {
    return Response.json({ error: "Unable to process request" }, { status: 500 })
  }
}
