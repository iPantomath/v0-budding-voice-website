import { Mic, Users, Sparkles } from "lucide-react"

const PILLARS = [
  { icon: Mic, label: "Presence", description: "Owning the room before they speak a single word." },
  { icon: Users, label: "Clarity", description: "Articulating ideas so every word lands." },
  { icon: Sparkles, label: "Confidence", description: "Believing in their voice, on and off stage." },
]

export function Solution() {
  return (
    <section id="solution" className="bg-primary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-secondary">
            Our Solution
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            Delivery over Scripts
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-primary-foreground/70">
            Most programs hand kids a script and hope for the best. At Budding
            Voice, we train <strong className="text-primary-foreground">presence, clarity, and confidence</strong> &mdash;
            the skills that make any message powerful.
          </p>
          <p className="mt-3 text-base font-medium italic text-secondary">
            {"\"We provide the scripts; we teach the delivery.\""}
          </p>
        </div>

        {/* Pillars */}
        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.label}
              className="flex flex-col items-center rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 text-center"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <pillar.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-primary-foreground">
                {pillar.label}
              </h3>
              <p className="leading-relaxed text-primary-foreground/65">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
