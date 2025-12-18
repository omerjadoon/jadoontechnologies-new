"use client";
import Link from "next/link";

export default function RegionPage({ title, subtitle, description, offices, contactInfo }) {
    return (
        <main className="bg-slate-950 text-white min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="mx-auto max-w-6xl px-6 py-12 md:py-20">
                <div className="max-w-3xl">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                        {title}
                    </h1>
                    <p className="mt-6 text-xl text-slate-300 leading-relaxed">
                        {subtitle}
                    </p>
                    <p className="mt-4 text-lg text-slate-400">
                        {description}
                    </p>
                </div>
            </section>

            {/* Offices Section */}
            <section className="mx-auto max-w-6xl px-6 py-12">
                <h2 className="text-2xl font-semibold text-slate-200 uppercase tracking-widest mb-10">
                    Our Presence
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {offices.map((office, index) => (
                        <div key={index} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                            <h3 className="text-xl font-semibold text-white mb-2">{office.city}</h3>
                            <p className="text-slate-400 whitespace-pre-line">{office.address}</p>
                            {office.phone && (
                                <p className="text-[#2563eb] mt-2">{office.phone}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section className="mx-auto max-w-6xl px-6 py-12">
                <div className="rounded-3xl bg-slate-900 p-8 md:p-12 border border-slate-800">
                    <h2 className="text-3xl font-bold text-white mb-6">Contact {title} Team</h2>
                    <p className="text-slate-300 mb-8">
                        Reach out to our regional experts to discuss how we can help your business grow.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
                        >
                            Contact Us
                        </Link>
                        {contactInfo && (
                            <a href={`mailto:${contactInfo.email}`} className="inline-flex items-center justify-center rounded-full border border-slate-700 px-8 py-3 text-base font-semibold text-white hover:bg-slate-800 transition-colors">
                                {contactInfo.email}
                            </a>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
