import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Challenge } from "@/components/challenge"
import { Solution } from "@/components/solution"
import { WhoItsFor } from "@/components/who-its-for"
import { Process } from "@/components/process"
import { Outcomes } from "@/components/outcomes"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Challenge />
      <Solution />
      <WhoItsFor />
      <Process />
      <Outcomes />
      <FinalCTA />
      <Footer />
    </main>
  )
}
