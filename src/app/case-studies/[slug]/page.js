import { caseStudies } from '@/.velite/generated'
import Link from "next/link";
import { notFound } from "next/navigation";
import siteMetadata from "@/src/utils/siteMetaData";
import RenderMdx from "@/src/components/Blog/RenderMdx";
import {
    ArrowLeft,
    CheckCircle2,
    TrendingUp,
    TrendingDown,
    Users,
    Clock,
    Award,
    Brain,
    ShoppingCart,
    Sparkles,
    BarChart3,
    Globe,
    Zap
} from "lucide-react";

const iconMap = {
    CheckCircle2,
    TrendingUp,
    TrendingDown,
    Users,
    Clock,
    Award,
    Brain,
    ShoppingCart,
    Sparkles,
    BarChart3,
    Globe,
    Zap
};

const colorMap = {
    blue: "from-blue-600 to-blue-800 dark:from-blue-900 dark:to-neutral-950",
    emerald: "from-emerald-600 to-teal-800 dark:from-emerald-900 dark:to-neutral-950",
    purple: "from-purple-600 to-indigo-800 dark:from-purple-900 dark:to-neutral-950",
    indigo: "from-indigo-600 to-blue-800 dark:from-indigo-900 dark:to-neutral-950",
    rose: "from-rose-600 to-pink-800 dark:from-rose-900 dark:to-neutral-950",
    amber: "from-amber-600 to-orange-800 dark:from-amber-900 dark:to-neutral-950",
};

const textColorMap = {
    blue: "text-blue-100",
    emerald: "text-emerald-100",
    purple: "text-purple-100",
    indigo: "text-indigo-100",
    rose: "text-rose-100",
    amber: "text-amber-100",
};

const iconColorMap = {
    blue: "text-blue-600",
    emerald: "text-emerald-600",
    purple: "text-purple-600",
    indigo: "text-indigo-600",
    rose: "text-rose-600",
    amber: "text-amber-600",
};

const btnColorMap = {
    blue: "bg-blue-600 hover:bg-blue-700",
    emerald: "bg-emerald-600 hover:bg-emerald-700",
    purple: "bg-purple-600 hover:bg-purple-700",
    indigo: "bg-indigo-600 hover:bg-indigo-700",
    rose: "bg-rose-600 hover:bg-rose-700",
    amber: "bg-amber-600 hover:bg-amber-700",
};

export async function generateStaticParams() {
    return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const study = caseStudies.find((study) => study.slug === slug);
    if (!study) return;

    return {
        title: `${study.title} - Case Study | Jadoon Technologies`,
        description: study.description,
        openGraph: {
            title: study.title,
            description: study.description,
            url: siteMetadata.siteUrl + study.url,
            siteName: siteMetadata.title,
            images: [study.image.src],
            locale: "en_US",
            type: "article",
        },
        alternates: {
            canonical: study.url,
        },
    };
}

export default async function CaseStudyPage({ params }) {
    const { slug } = await params;
    const study = caseStudies.find((study) => study.slug === slug);

    if (!study) notFound();

    const gradientClass = colorMap[study.color] || colorMap.blue;
    const subtextColorClass = textColorMap[study.color] || textColorMap.blue;
    const iconColorClass = iconColorMap[study.color] || iconColorMap.blue;
    const btnColorClass = btnColorMap[study.color] || btnColorMap.blue;

    return (
        <main className="bg-white dark:bg-neutral-950">
            {/* Hero Section */}
            <section className={`relative bg-gradient-to-br ${gradientClass} py-24 sm:py-32`}>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <Link
                        href="/insights/case-studies"
                        className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Case Studies
                    </Link>

                    <div className="max-w-4xl">
                        {study.category && (
                            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-sm font-medium text-white mb-6">
                                {study.category}
                            </span>
                        )}
                        <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-6">
                            {study.title}
                        </h1>
                        <p className={`text-xl ${subtextColorClass} leading-relaxed`}>
                            {study.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            {study.stats && study.stats.length > 0 && (
                <section className="py-16 bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className={`grid grid-cols-1 gap-8 sm:grid-cols-${Math.min(study.stats.length, 4)}`}>
                            {study.stats.map((stat, index) => {
                                const IconComponent = iconMap[stat.icon] || CheckCircle2;
                                return (
                                    <div key={index} className="text-center">
                                        <div className="flex justify-center mb-4">
                                            <IconComponent className={`h-12 w-12 ${iconColorClass}`} />
                                        </div>
                                        <div className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">{stat.value}</div>
                                        <div className="text-sm text-neutral-600 dark:text-neutral-400">{stat.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* Content Section */}
            <section className="py-24 sm:py-32">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <div className="prose prose-lg dark:prose-invert max-w-none 
                        prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                        prose-p:text-neutral-600 dark:prose-p:text-neutral-400 prose-p:leading-relaxed
                        prose-li:text-neutral-600 dark:prose-li:text-neutral-400
                        prose-strong:text-neutral-900 dark:prose-strong:text-white">
                        <RenderMdx blog={study} />
                    </div>

                    {/* CTA Section */}
                    <div className={`mt-16 rounded-3xl bg-gradient-to-br from-${study.color}-50 to-white dark:from-neutral-900 dark:to-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-8 sm:p-12`}>
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                            Ready to achieve similar results?
                        </h3>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
                            Let's discuss how we can help you transform your business with our expertise.
                        </p>
                        <Link
                            href="/contact"
                            className={`inline-flex items-center gap-2 rounded-2xl ${btnColorClass} px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:scale-105`}
                        >
                            Start Your Project
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
