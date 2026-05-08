import { Bold } from "lucide-react"

const branches = [
    {
        city: "Selangor",
        location: "Bandar Mahkota Cheras",
        type: "Main Training Hub",
        schedule: "Every Friday & Sunday",
    },
    {
        city: "Selangor",
        location: "Puchong Utama",
        type: "Youth Development Center",
        schedule: "Every Friday & Saturday",
    },
    {
        city: "Selangor",
        location: "Seri Kembangan",
        type: "Community Branch",
        schedule: "Every Wednesday & Saturday",
    },
    {
        city: "Kuala Lumpur",
        location: "Cheras",
        type: "Speechcraft Chapter",
        schedule: "Every Saturday",
    },
    // {
    //     city: "Selangor",
    //     location: "Puchong Utama",
    //     type: "Speechcraft Chapter",
    //     schedule: "Every Friday",
    // },
]

export function OurBranches() {
    return (
        <section className="bg-white py-20 px-6">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary-foreground">
                        Our Presence
                    </p>

                    <h2 className="mt-4 text-4xl font-bold text-primary md:text-5xl">
                        Budding Voice Branches
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
                        Find your nearby branch where your child can develop <b>Communication,
                            Character Building, and Critical Thinking</b>.
                    </p>
                </div>

                {/* Branch Cards */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {branches.map((branch, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl border border-gray-200 bg-muted p-6 shadow-sm transition-all duration-300 hover:border-text-primary-300"
                        >
                            {/* Icon */}
                            {/* <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl">
                                📍
                            </div> */}

                            {/* Content */}
                            <div className="mt-5 space-y-3">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">
                                        <span>🏛️</span>
                                        {branch.city}
                                    </h3>

                                    <p className="text-gray-500">
                                        <span>📍</span>
                                        {branch.location}
                                    </p>
                                </div>

                                <div className="space-y-2 text-sm text-gray-600">
                                    {/* <div className="flex items-center gap-2">
                                        <span>🏛️</span>
                                        <span>{branch.type}</span>
                                    </div> */}

                                    <div className="flex items-center gap-2">
                                        <span>🗓️</span>
                                        <span>{branch.schedule}</span>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            {/* <button className="mt-6 w-full rounded-xl bg-green-600 px-4 py-3 font-semibold text-white transition hover:bg-green-700">
                                View Branch
                            </button> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
