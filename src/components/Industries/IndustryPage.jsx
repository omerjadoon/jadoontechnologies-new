"use client";
import Link from "next/link";

export default function IndustryPage({ title, subtitle, description, challenges, solutions, cta }) {
    return (
        <main className="bg-white dark:bg-slate-950 text-neutral-900 dark:text-white min-h-screen pt-24 pb-20 transition-colors duration-300">
            {/* Hero Section */}
            <section className="mx-auto max-w-6xl px-6 py-12 md:py-20">
                <div className="max-w-3xl">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                        {title}
                    </h1>
                    <p className="mt-6 text-xl text-neutral-600 dark:text-slate-300 leading-relaxed">
                        {subtitle}
                    </p>
                    <p className="mt-4 text-lg text-neutral-500 dark:text-slate-400">
                        {description}
                    </p>
                    <div className="mt-8">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full bg-neutral-900 dark:bg-white px-6 py-3 text-base font-semibold text-white dark:text-slate-900 shadow-sm hover:bg-neutral-800 dark:hover:bg-slate-200 transition-colors"
                        >
                            Consult with Experts
                        </Link>
                    </div>
                </div>
            </section>

            {/* Challenges Section */}
            <section className="mx-auto max-w-6xl px-6 py-12">
                <h2 className="text-2xl font-semibold text-neutral-900 dark:text-slate-200 uppercase tracking-widest mb-10">
                    Industry Challenges
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {challenges.map((challenge, index) => (
                        <div key={index} className="rounded-2xl border border-red-200 dark:border-red-900/30 bg-red-50 dark:bg-red-950/10 p-6">
                            <h3 className="text-xl font-semibold text-red-700 dark:text-red-200 mb-3">{challenge.title}</h3>
                            <p className="text-neutral-600 dark:text-slate-400">{challenge.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Solutions Section */}
            <section className="mx-auto max-w-6xl px-6 py-12">
                <h2 className="text-2xl font-semibold text-[#2563eb] uppercase tracking-widest mb-10">
                    Our Solutions
                </h2>
                <div className="grid gap-8 md:grid-cols-2">
                    {solutions.map((solution, index) => (
                        <div key={index} className="flex gap-4 items-start rounded-2xl border border-neutral-200 dark:border-slate-800 bg-neutral-50 dark:bg-slate-900/50 p-6">
                            <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#2563eb]/10 dark:bg-[#2563eb]/20 text-[#2563eb] font-bold">
                                {index + 1}
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">{solution.title}</h3>
                                <p className="text-neutral-600 dark:text-slate-400">{solution.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="mx-auto max-w-6xl px-6 py-20 text-center">
                <div className="rounded-3xl bg-neutral-100 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800 p-10 border border-neutral-200 dark:border-slate-700">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl mb-6">
                        Transform your business today
                    </h2>
                    <p className="text-neutral-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                        {cta || "Partner with us to leverage technology for sustainable growth and competitive advantage."}
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full bg-[#2563eb] px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-blue-600 transition-colors"
                    >
                        Get Started
                    </Link>
                </div>
            </section>
        </main>
    );
}
