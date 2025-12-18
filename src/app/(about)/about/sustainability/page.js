export const metadata = {
    title: "Sustainability | Jadoon Technologies",
    description: "Our commitment to a sustainable future through green technology and responsible practices.",
};

export default function SustainabilityPage() {
    return (
        <main className="bg-white dark:bg-slate-950 text-neutral-900 dark:text-white min-h-screen pt-24 pb-20">
            <section className="mx-auto max-w-4xl px-6 py-12">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-gradient-to-r from-[#2563eb] to-cyan-400 bg-clip-text text-transparent">
                    Sustainability
                </h1>
                <p className="text-xl text-neutral-600 dark:text-slate-300 mb-12 leading-relaxed">
                    We are committed to building a sustainable future through eco-friendly practices and green technology solutions.
                </p>

                <div className="grid gap-8 md:grid-cols-2">
                    <div className="p-8 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-neutral-200 dark:border-slate-800">
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Green Coding</h2>
                        <p className="text-neutral-600 dark:text-slate-400">
                            Optimizing our code and infrastructure to reduce energy consumption and carbon footprint.
                        </p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-neutral-200 dark:border-slate-800">
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Remote First</h2>
                        <p className="text-neutral-600 dark:text-slate-400">
                            Reducing commuting emissions by maintaining a remote-first work culture.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
