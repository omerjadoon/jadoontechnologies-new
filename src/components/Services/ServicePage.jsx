"use client";
import Link from "next/link";

export default function ServicePage({ title, subtitle, description, features, benefits, cta }) {
    return (
        <main className="bg-white dark:bg-slate-950 text-neutral-900 dark:text-white min-h-screen pt-24 pb-20 transition-colors duration-300">
            {/* Hero Section */}
            <section className="mx-auto max-w-6xl px-6 py-12 md:py-20">
                <div className="max-w-3xl">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-neutral-900 dark:text-transparent dark:bg-gradient-to-r dark:from-white dark:to-slate-400 dark:bg-clip-text">
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
                            className="inline-flex items-center justify-center rounded-full bg-[#2563eb] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb] transition-colors"
                        >
                            Start your project
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="mx-auto max-w-6xl px-6 py-12">
                <h2 className="text-2xl font-semibold text-[#2563eb] uppercase tracking-widest mb-10">
                    Key Capabilities
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div key={index} className="rounded-2xl border border-neutral-200 dark:border-slate-800 bg-neutral-50 dark:bg-slate-900/50 p-6 hover:border-[#2563eb]/30 transition-colors">
                            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">{feature.title}</h3>
                            <p className="text-neutral-600 dark:text-slate-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Benefits Section */}
            <section className="mx-auto max-w-6xl px-6 py-12">
                <div className="rounded-3xl bg-neutral-100 dark:bg-slate-900 p-8 md:p-12 border border-neutral-200 dark:border-slate-800">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">Why Choose Us?</h2>
                    <ul className="grid gap-6 md:grid-cols-2">
                        {benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#2563eb]/10 dark:bg-[#2563eb]/20 text-[#2563eb]">
                                    ✓
                                </span>
                                <span className="text-neutral-700 dark:text-slate-300 text-lg">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* CTA Section */}
            <section className="mx-auto max-w-6xl px-6 py-20 text-center">
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl mb-6">
                    Ready to transform your business?
                </h2>
                <p className="text-neutral-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                    {cta || "Let's discuss how we can help you achieve your goals with our expert services."}
                </p>
                <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-neutral-900 dark:bg-white px-8 py-4 text-lg font-bold text-white dark:text-slate-900 shadow-lg hover:bg-neutral-800 dark:hover:bg-slate-200 transition-colors"
                >
                    Get in Touch
                </Link>
            </section>
        </main>
    );
}
