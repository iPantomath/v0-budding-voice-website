import { MessageCircle } from "lucide-react"
import Image from "next/image"
const logos = [
  "/images/partner-logo/prime-international-v1.png",
  "/images/partner-logo/millenium-junior-preschool.png",
  "/images/partner-logo/ethos.png",
  "/images/partner-logo/smart-reader-kids.png",
  "/images/partner-logo/ardence-international.png",
];

export function Partners() {
  return (
    <section className="bg-muted py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-secondary-foreground">
            Partners
          </span>
        <h2 className="text-balance text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Our Happy & Most Valued
        </h2>
        </div>
       <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
      {logos.map((src, i) => (
        <div
          key={i}
          className="flex items-center justify-center 
                     w-full aspect-square 
                      rounded-xl p-4"
        >
          <div className="relative w-full h-full">
            <Image
              src={src}
              alt={`Award ${i}`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </div>
    </section>
  )
}
