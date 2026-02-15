import { GraduationCap, Info } from "lucide-react"

const LEVELS = [
  {
    label: "Beginner",
    age: "Ages 6-9",
    description: "Foundational expression, basic storytelling, and social interaction skills.",
  },
  {
    label: "Intermediate",
    age: "Ages 10-13",
    description: "Structured presentations, debate basics, and improvisational confidence.",
  },
  {
    label: "Advanced",
    age: "Ages 14-18",
    description: "Public speaking mastery, leadership communication, and stage performance.",
  },
]

export function WhoItsFor() {
  return (
    <section id="who" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-secondary">
            Who It&apos;s For
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Kids & Teens &mdash; Levels Based on Proficiency
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Every child is different. Our program meets them where they are and
            grows with them.
          </p>
        </div>

        {/* Level cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {LEVELS.map((level) => (
            <div
              key={level.label}
              className="rounded-2xl border border-border bg-card p-8 text-center transition-all hover:border-secondary/40 hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-primary">{level.label}</h3>
              <p className="mb-3 text-sm font-medium text-secondary">{level.age}</p>
              <p className="leading-relaxed text-muted-foreground">
                {level.description}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-border bg-muted/50 px-6 py-4">
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-muted-foreground" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              <strong className="text-primary">Note:</strong> Our programs focus on communication
              coaching and are not designed for medical or special-needs speech
              therapy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
