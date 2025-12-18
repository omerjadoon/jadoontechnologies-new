import { caseStudies } from "@/.velite/generated";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Case Studies | Jadoon Technologies",
    description: "Explore our success stories and how we help clients achieve their goals.",
};

export default function CaseStudiesPage() {
    // Fallback if caseStudies is undefined (e.g. during initial build before generation)
    const studies = caseStudies || [];

    return (
        <main className="bg-white dark:bg-slate-950 text-neutral-900 dark:text-white min-h-screen pt-24 pb-20">
            <section className="mx-auto max-w-6xl px-6 py-12">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-gradient-to-r from-[#2563eb] to-cyan-400 bg-clip-text text-transparent">
                    Case Studies
                </h1>
                <p className="text-xl text-neutral-600 dark:text-slate-300 mb-12 leading-relaxed max-w-3xl">
                    Explore how we've helped our clients overcome challenges and achieve their business goals through technology.
                </p>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {studies.map((study) => (
                        <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group block rounded-2xl border border-neutral-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 overflow-hidden hover:border-[#2563eb]/50 transition-colors">
                            <div className="aspect-video relative bg-neutral-200 dark:bg-slate-800">
                                {study.image && (
                                    <Image
                                        src={study.image}
                                        alt={study.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                )}
                            </div>
                            <div className="p-6">
                                <div className="flex gap-2 mb-3">
                                    {study.tags && study.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium text-[#2563eb] bg-[#2563eb]/10 px-2 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-[#2563eb] transition-colors">
                                    {study.title}
                                </h2>
                                <p className="text-neutral-600 dark:text-slate-400 text-sm line-clamp-3">
                                    {study.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                {studies.length === 0 && (
                    <div className="text-center py-20 text-slate-500">
                        <p>No case studies found. Check back soon!</p>
                    </div>
                )}
            </section>
        </main>
    );
}
