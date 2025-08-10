import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

import Hero from "@/components/hero"
import Skills from "@/components/skills"
import ContactForm from "@/components/contact-form"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Frontend Developer | Portfolio",
  description: "Modern, responsive portfolio showcasing frontend developer skills and contact.",
}

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.15),transparent_60%)]" />
      <header className="container max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="#" className="font-semibold tracking-tight text-zinc-100">
          {"<"}dev.bianca{"/>"}
        </Link>
        <nav className="flex items-center gap-3">
          <Link href="#skills" className="text-sm text-zinc-300 hover:text-zinc-100 transition-colors">
            Skills
          </Link>
          <Link href="#contact" className="text-sm text-zinc-300 hover:text-zinc-100 transition-colors">
            Contact
          </Link>
          <div className="h-5 w-px bg-zinc-800 mx-1" aria-hidden />
          <Link
            href="https://github.com/"
            target="_blank"
            aria-label="GitHub"
            className="p-2 rounded-md hover:bg-zinc-900 transition-colors"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            href="https://linkedin.com/"
            target="_blank"
            aria-label="LinkedIn"
            className="p-2 rounded-md hover:bg-zinc-900 transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </Link>
          <Button size="sm" asChild className="ml-1 bg-violet-600 hover:bg-violet-500 text-white">
            <Link href="#contact">
              <Mail className="h-4 w-4 mr-2" />
              Contact
            </Link>
          </Button>
        </nav>
      </header>

      <section className="container max-w-6xl mx-auto px-4">
        <Hero />
      </section>

      <section id="skills" className="container max-w-6xl mx-auto px-4 pt-12 md:pt-16">
        <Skills />
      </section>

      <section id="contact" className="container max-w-6xl mx-auto px-4 pt-12 md:pt-16 pb-20">
        <ContactForm />
      </section>

      <footer className="border-t border-zinc-800">
        <div className="container max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-zinc-400">
          <p>© {new Date().getFullYear()} Bianca Balasiu. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#skills" className="hover:text-zinc-200 transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="hover:text-zinc-200 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
