"use client"

import type React from "react"

import { useState } from "react"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Loader2, Mail } from "lucide-react"

const ContactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email."),
  message: z.string().min(10, "Message should be at least 10 characters."),
})

type FormState = {
  status: "idle" | "submitting" | "success" | "error"
  message?: string
}

export default function ContactForm() {
  const [state, setState] = useState<FormState>({ status: "idle" })
  const [errors, setErrors] = useState<Record<string, string>>({})

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrors({})
    setState({ status: "submitting" })

    const formData = new FormData(e.currentTarget)
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    }

    const parsed = ContactSchema.safeParse(payload)
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {}
      for (const issue of parsed.error.issues) {
        fieldErrors[issue.path[0] as string] = issue.message
      }
      setErrors(fieldErrors)
      setState({ status: "error", message: "Please check the fields and try again." })
      return
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || "Something went wrong.")
      }
      setState({ status: "success", message: "Thanks! I’ll get back to you shortly." })
      e.currentTarget.reset()
    } catch (err: any) {
      setState({ status: "error", message: err.message || "Something went wrong." })
    }
  }

  return (
    <section aria-labelledby="contact-heading" className="space-y-6">
      <div className="space-y-2">
        <h2 id="contact-heading" className="text-3xl font-semibold tracking-tight">
          Let&apos;s build something great
        </h2>
        <p className="text-zinc-400">Have a project in mind or just want to say hi? Drop a message below.</p>
      </div>

      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-violet-400" />
            Contact Me
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} noValidate className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm text-zinc-300">
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                className="bg-zinc-950 border-zinc-800 text-zinc-100 placeholder:text-zinc-500"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-xs text-red-400">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm text-zinc-300">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="bg-zinc-950 border-zinc-800 text-zinc-100 placeholder:text-zinc-500"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-xs text-red-400">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm text-zinc-300">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or idea..."
                className="min-h-[140px] bg-zinc-950 border-zinc-800 text-zinc-100 placeholder:text-zinc-500"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="text-xs text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between gap-4">
              <p className="text-xs text-zinc-500">I typically reply within 1–2 business days.</p>
              <Button
                type="submit"
                className="bg-violet-600 hover:bg-violet-500 text-white"
                disabled={state.status === "submitting"}
              >
                {state.status === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send message"
                )}
              </Button>
            </div>

            {state.status === "success" && (
              <Alert className="border-teal-500/30 bg-teal-500/10 text-teal-200">
                <AlertTitle>Message sent</AlertTitle>
                <AlertDescription>{state.message}</AlertDescription>
              </Alert>
            )}
            {state.status === "error" && state.message && (
              <Alert className="border-red-500/30 bg-red-500/10 text-red-200">
                <AlertTitle>Something went wrong</AlertTitle>
                <AlertDescription>{state.message}</AlertDescription>
              </Alert>
            )}
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
