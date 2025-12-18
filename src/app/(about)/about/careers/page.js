import Link from "next/link";

export const metadata = {
    title: "Careers | Jadoon Technologies",
    description: "Join our team and help shape the future of technology.",
};

export default function CareersPage() {
    const positions = [
        {
            title: "Next.js Developer",
            location: "Remote / Hybrid",
            type: "Internship"
        }
    ];

    return (
        <main className="bg-white dark:bg-slate-950 text-neutral-900 dark:text-white min-h-screen pt-24 pb-20">
            <section className="mx-auto max-w-6xl px-6 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-gradient-to-r from-[#2563eb] to-cyan-400 bg-clip-text text-transparent">
                        Join Our Team
                    </h1>
                    <p className="text-xl text-neutral-600 dark:text-slate-300 max-w-2xl mx-auto">
                        We are looking for passionate, talented individuals to join us on our mission to innovate and inspire.
                    </p>
                </div>

                <div className="bg-gray-50 dark:bg-slate-900 rounded-3xl p-8 border border-neutral-200 dark:border-slate-800 mb-12">
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">Open Positions</h2>
                    <div className="space-y-4">
                        {positions.map((job, index) => (
                            <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl bg-white dark:bg-slate-800/50 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors border border-neutral-200 dark:border-slate-700/50">
                                <div>
                                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">{job.title}</h3>
                                    <div className="flex gap-4 mt-2 text-sm text-neutral-500 dark:text-slate-400">
                                        <span>{job.location}</span>
                                        <span>•</span>
                                        <span>{job.type}</span>
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-0">
                                    <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#2563eb] px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#2563eb] transition-colors">
                                        Apply Now
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-neutral-500 dark:text-slate-400 mb-4">Don&apos;t see a role that fits?</p>
                    <Link href="/contact" className="text-[#2563eb] hover:text-blue-300 font-medium underline underline-offset-4">
                        Send us your resume anyway
                    </Link>
                </div>
            </section>
        </main>
    );
}
