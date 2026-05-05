import { MessageCircle } from "lucide-react"
import Image from "next/image"

const WHATSAPP_URL = "https://wa.me/+60174885368?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Budding%20Voice."

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10 bg-primary/[0.03]" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Copy */}
        <div className="flex flex-col items-start gap-6">
          <span className="inline-block rounded-full bg-secondary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
            Communication Coaching for Kids
          </span>
          <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-primary md:text-5xl lg:text-6xl">
            Help your child speak with clarity and confidence
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
            For kids & teens who struggle to express themselves socially and on
            stage. We build presence, not just performance.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-base font-semibold text-secondary-foreground shadow-lg shadow-secondary/25 transition-all hover:brightness-110"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Us for a Consultation
          </a>
        </div>

        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
          <Image
            src="/images/budding-voice-students.jpg"
            alt="A confident child speaking at a podium in a warm classroom setting"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
