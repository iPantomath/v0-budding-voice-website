import { EyeOff, Volume1, AlertTriangle } from "lucide-react"

const CHALLENGES = [
  {
    icon: EyeOff,
    title: "The Invisible Student",
    description: "Knows the answers but never raises their hand. Brilliant ideas stay locked inside.",
  },
  {
    icon: Volume1,
    title: "The Soft-Spoken Struggle",
    description: 'Tired of being asked to repeat themselves. "Can you say that louder?" becomes exhausting.',
  },
  {
    icon: AlertTriangle,
    title: "The Stage Fright Wall",
    description: "Freezing up during presentations or social gatherings. Confidence disappears under pressure.",
  },
]

export function Challenge() {
  return (
    <section id="challenge" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-secondary-foreground">
            The Challenge
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Does your child have a big personality at home, but go silent in
            public?
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {CHALLENGES.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-secondary/40 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
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
