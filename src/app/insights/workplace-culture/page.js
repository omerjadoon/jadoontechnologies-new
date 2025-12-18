import Image from "next/image";

export const metadata = {
    title: "Workplace & Culture | Jadoon Technologies",
    description: "Discover what makes Jadoon Technologies a great place to work.",
};

export default function WorkplaceCulturePage() {
    return (
        <main className="bg-white dark:bg-slate-950 text-neutral-900 dark:text-white min-h-screen pt-24 pb-20">
            {/* Hero */}
            <section className="mx-auto max-w-6xl px-6 py-12 text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-gradient-to-r from-[#2563eb] to-cyan-400 bg-clip-text text-transparent">
                    Our Culture
                </h1>
                <p className="text-xl text-neutral-600 dark:text-slate-300 max-w-3xl mx-auto mb-12">
                    At Jadoon Technologies, we believe that innovation thrives in an environment of collaboration, respect, and continuous learning.
                </p>
            </section>

            {/* Values */}
            <section className="mx-auto max-w-6xl px-6 py-12">
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="p-8 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-neutral-200 dark:border-slate-800">
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Innovation First</h3>
                        <p className="text-neutral-600 dark:text-slate-400">We encourage creative thinking and aren't afraid to challenge the status quo to find better solutions.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-neutral-200 dark:border-slate-800">
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">People Centric</h3>
                        <p className="text-neutral-600 dark:text-slate-400">Our team is our greatest asset. We prioritize well-being, growth, and work-life balance.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-neutral-200 dark:border-slate-800">
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Integrity & Trust</h3>
                        <p className="text-neutral-600 dark:text-slate-400">We build relationships based on honesty, transparency, and mutual respect with our clients and each other.</p>
                    </div>
                </div>
            </section>

            {/* Gallery Placeholder */}
            <section className="mx-auto max-w-6xl px-6 py-12">
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8 text-center">Life at Jadoon Tech</h2>
                <div className="grid gap-4 md:grid-cols-4 grid-rows-2 h-96">
                    <div className="md:col-span-2 md:row-span-2 bg-neutral-200 dark:bg-slate-800 rounded-xl relative overflow-hidden">
                        {/* Placeholder for team photo */}
                        <div className="absolute inset-0 flex items-center justify-center text-neutral-500 dark:text-slate-600 font-bold">Team Photo</div>
                    </div>
                    <div className="bg-neutral-200 dark:bg-slate-800 rounded-xl relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-neutral-500 dark:text-slate-600 font-bold">Office</div>
                    </div>
                    <div className="bg-neutral-200 dark:bg-slate-800 rounded-xl relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-neutral-500 dark:text-slate-600 font-bold">Events</div>
                    </div>
                    <div className="md:col-span-2 bg-neutral-200 dark:bg-slate-800 rounded-xl relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-neutral-500 dark:text-slate-600 font-bold">Collaboration</div>
                    </div>
                </div>
            </section>
        </main>
    );
}
