import { Code2, Layout, PanelsTopLeft, Wrench } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

type SkillMeter = {
  label: string
  level: number
}

type SkillsProps = {
  meters?: SkillMeter[]
}

export default function Skills(props: SkillsProps = {}) {
  const meters: SkillMeter[] = props.meters ?? [
    { label: "React & Next.js", level: 90 },
    { label: "TypeScript", level: 85 },
    { label: "CSS • Tailwind", level: 90 },
    { label: "Accessibility", level: 80 },
    { label: "Testing", level: 70 },
  ]

  return (
    <section aria-labelledby="skills-heading" className="space-y-8">
      <div className="space-y-2">
        <h2 id="skills-heading" className="text-3xl font-semibold tracking-tight">
          Skills
        </h2>
        <p className="text-zinc-400">A blend of engineering and design sensibilities.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-zinc-100">
              <Layout className="h-5 w-5 text-violet-400" />
              UI Engineering
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200 border-zinc-700">
              Semantic HTML
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200 border-zinc-700">
              Responsive Design
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200 border-zinc-700">
              Animations
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200 border-zinc-700">
              Design Systems
            </Badge>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-zinc-100">
              <Code2 className="h-5 w-5 text-teal-300" />
              Languages & Frameworks
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200 border-zinc-700">
              TypeScript
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200 border-zinc-700">
              JavaScript (ESNext)
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200 border-zinc-700">
              React
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200 border-zinc-700">
              Next.js
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200 border-zinc-700">
              Node.js
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200 border-zinc-700">
              CSS / Tailwind
            </Badge>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-zinc-100">
              <PanelsTopLeft className="h-5 w-5 text-violet-400" />
              Tooling
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200 border-zinc-700">
              Vite
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200 border-zinc-700">
              Vitest / Testing Library
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200 border-zinc-700">
              ESLint / Prettier
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200 border-zinc-700">
              Playwright
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200 border-zinc-700">
              Figma
            </Badge>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-zinc-100">
              <Wrench className="h-5 w-5 text-teal-300" />
              Strengths
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {meters.map((m) => (
              <div key={m.label} className="space-y-2">
                <div className="flex items-center justify-between text-sm text-zinc-300">
                  <span>{m.label}</span>
                  <span className="text-zinc-400">{m.level}%</span>
                </div>
                <Progress value={m.level} className="h-2 bg-zinc-800" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
