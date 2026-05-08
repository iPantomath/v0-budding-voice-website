import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Challenge } from "@/components/challenge"
import { Solution } from "@/components/solution"
import { WhoItsFor } from "@/components/who-its-for"
import { Process } from "@/components/process"
import { Outcomes } from "@/components/outcomes"
import { Partners } from "@/components/partners"
import { OurBranches } from "@/components/our-branches"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl shadow-xl overflow-hidden">
      <Header />
      <Hero />
      <Challenge />
      <Solution />
      <WhoItsFor />
      <Process />
      <Outcomes />
      <Partners/>
      <OurBranches/>
      <FinalCTA />
      <Footer />
      </div>
    </main>
  )
}
