import Image from "next/image"
import { ArrowRight, Download, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import workstation from "../public/developer-workstation-glassmorphism.webp";

type HeroProps = {
  name?: string
  role?: string
  blurb?: string
  resumeUrl?: string
}

export default function Hero(props: HeroProps = {}) {
  const {
    name = "Bianca Balasiu",
    role = "Frontend Developer",
    blurb = "I craft delightful, accessible, and performant web interfaces. Focused on React, Next.js, and design systems.",
    resumeUrl = "/resume.pdf",
  } = props

  return (
    <div className="grid lg:grid-cols-2 gap-10 items-center">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300">
          <Sparkles className="h-3.5 w-3.5 text-violet-400" />
          Available for freelance work
        </div>
        <h1
          className="text-4xl sm:text-5xl font-semibold tracking-tight"
          style={{ fontSize: "2.25rem" }}
        >
          Hi, I&apos;m{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-teal-300">{name}</span>
          .
          <br />
          <span className="text-zinc-300">{role}</span>
        </h1>
        <p className="text-zinc-400 max-w-xl">{blurb}</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild className="bg-violet-600 hover:bg-violet-500 text-white">
            <a href={resumeUrl} download rel="noopener noreferrer">
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </a>
          </Button>
          <Button variant="outline" asChild className="border-zinc-800 bg-zinc-950 text-zinc-100 hover:bg-zinc-900">
            <a href="#contact">
              Let&apos;s talk
              <ArrowRight className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </div>
        <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-zinc-300">
          <li className="rounded-md border border-zinc-800 bg-zinc-900/50 p-3">React • Next.js</li>
          <li className="rounded-md border border-zinc-800 bg-zinc-900/50 p-3">TypeScript</li>
          <li className="rounded-md border border-zinc-800 bg-zinc-900/50 p-3">Tailwind CSS</li>
          <li className="rounded-md border border-zinc-800 bg-zinc-900/50 p-3">Accessibility (a11y)</li>
          <li className="rounded-md border border-zinc-800 bg-zinc-900/50 p-3">Testing • Vitest</li>
          <li className="rounded-md border border-zinc-800 bg-zinc-900/50 p-3">Design Systems</li>
        </ul>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-violet-600/40 via-violet-400/20 to-teal-400/40 blur-2xl opacity-40" />
        <Card className="relative overflow-hidden border border-zinc-800 bg-zinc-900">
          <CardContent className="p-0">
            <Image
              src={workstation}
              alt="Developer workstation illustration"
              width={900}
              height={540}
              sizes="(max-width: 1024px) 100vw, 900px"
              className="aspect-video object-cover"
              priority
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
