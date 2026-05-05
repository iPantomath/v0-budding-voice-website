import { Search, Dumbbell, Target, Trophy } from "lucide-react"

const STEPS = [
  {
    icon: Search,
    step: "01",
    title: "Assess",
    description: "We assess your child's communication strengths and areas of growth through a personalized evaluation.",
  },
  {
    icon: Dumbbell,
    step: "02",
    title: "Train",
    description: "Structured sessions focused on voice projection, body language, storytelling, and articulation.",
  },
  {
    icon: Target,
    step: "03",
    title: "Practice",
    description: "Real-world exercises and simulations that build muscle memory and comfort in high-pressure moments.",
  },
  {
    icon: Trophy,
    step: "04",
    title: "Showcase",
    description: "Graduation Day: your child performs in front of a live audience, celebrating their transformation.",
  },
]

export function Process() {
  return (
    <section id="process" className="bg-muted/40 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-secondary-foreground">
            How It Works
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary md:text-4xl">
            A Proven 4-Step Process
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            From diagnosis to the stage, every step is intentional.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative grid gap-8 md:grid-cols-4">
          {/* Connector line (desktop) */}
          <div className="absolute left-0 right-0 top-[3.5rem] hidden h-0.5 bg-border md:block" />

          {STEPS.map((item) => (
            <div key={item.step} className="relative flex flex-col items-center text-center">
              {/* Number circle */}
              <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full border-4 border-background bg-secondary text-secondary-foreground shadow-md">
                <item.icon className="h-7 w-7" />
              </div>
              <span className="mb-1 text-xs font-bold uppercase tracking-widest text-secondary-foreground">
                Step {item.step}
              </span>
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
