import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-muted-foreground md:flex-row lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md">
            <Image
              src="/images/budding-voice-logo-1.png"
              alt="Budding Voice"
              width={128}
              height={128}
              className="object-cover"
              priority
            />
          </div>
          <span className="font-semibold text-primary">Budding Voice</span>
        </div>
        <p>&copy; {new Date().getFullYear()} Budding Voice. All rights reserved.</p>
      </div>
    </footer>
  )
}
