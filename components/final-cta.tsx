import { MessageCircle } from "lucide-react"

const WHATSAPP_URL = "https://wa.me/1234567890?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Budding%20Voice."

export function FinalCTA() {
  return (
    <section className="bg-primary py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
          Ready to unlock your child&apos;s voice?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-primary-foreground/70">
          Take the first step today. Chat with us on WhatsApp to schedule a free
          consultation and discover how Budding Voice can help your child thrive.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground shadow-lg shadow-secondary/25 transition-all hover:brightness-110"
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp Us
        </a>
      </div>
    </section>
  )
}
