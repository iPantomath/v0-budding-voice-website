import { Volume2, Heart, Star } from "lucide-react"

const OUTCOMES = [
  {
    icon: Volume2,
    title: "Communication",
    description: "Your child will articulate thoughts with precision and be heard the first time, every time.",
  },
  {
    icon: Heart,
    title: "Character Building",
    description: "Navigate conversations, make new friends, and express opinions without hesitation.",
  },
  {
    icon: Star,
    title: "Critical Thinking",
    description: "Command any room with poise — from classroom presentations to large audiences.",
  },
]

export function Outcomes() {
  return (
    <section id="outcomes" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-secondary-foreground">
            Outcomes
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary md:text-4xl">
            What Your Child Will Gain
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {OUTCOMES.map((item) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-secondary/40 hover:shadow-lg"
            >
              {/* Accent bar */}
              <div className="absolute left-0 top-0 h-full w-1 bg-secondary" />
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 bg-secondary">
                <item.icon className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-primary">{item.title}</h3>
              <p className="leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
