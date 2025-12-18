import Link from "next/link";
import { ArrowLeft, CheckCircle2, TrendingUp, Users, Clock } from "lucide-react";

export const metadata = {
    title: "Digital Banking Platform Case Study - Jadoon Technologies",
    description: "How we scaled a digital banking platform to 2M+ users, reducing onboarding time by 65% and boosting activation by 30%.",
};

export default function DigitalBankingCaseStudy() {
    return (
        <main className="bg-white dark:bg-neutral-950">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-neutral-950 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>

                    <div className="max-w-4xl">
                        <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-sm font-medium text-white mb-6">
                            Fintech • Web & Mobile
                        </span>
                        <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-6">
                            Scaling a digital banking platform to 2M+ users
                        </h1>
                        <p className="text-xl text-blue-100 leading-relaxed">
                            Reduced onboarding time by 65% and boosted activation by 30% through intelligent automation and streamlined user experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-neutral-50 dark:bg-neutral-900">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <Users className="h-12 w-12 text-blue-600" />
                            </div>
                            <div className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">2M+</div>
                            <div className="text-sm text-neutral-600 dark:text-neutral-400">Active Users</div>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <TrendingUp className="h-12 w-12 text-blue-600" />
                            </div>
                            <div className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">65%</div>
                            <div className="text-sm text-neutral-600 dark:text-neutral-400">Faster Onboarding</div>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <CheckCircle2 className="h-12 w-12 text-blue-600" />
                            </div>
                            <div className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">30%</div>
                            <div className="text-sm text-neutral-600 dark:text-neutral-400">Activation Boost</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 sm:py-32">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <h2>The Challenge</h2>
                        <p>
                            A rapidly growing fintech startup approached us with a critical challenge: their digital banking platform was struggling to scale. With user acquisition accelerating, their onboarding process was becoming a bottleneck, leading to high drop-off rates and frustrated customers.
                        </p>
                        <p>
                            The existing system required users to complete multiple steps across different platforms, with manual verification processes that took days to complete. This resulted in:
                        </p>
                        <ul>
                            <li>Average onboarding time of 5-7 days</li>
                            <li>42% user drop-off during registration</li>
                            <li>High customer support costs</li>
                            <li>Limited scalability for growth</li>
                        </ul>

                        <h2>Our Solution</h2>
                        <p>
                            We designed and implemented a comprehensive digital transformation strategy that focused on three key areas:
                        </p>

                        <h3>1. Intelligent Automation</h3>
                        <p>
                            We integrated AI-powered identity verification and document processing, reducing manual review time from days to minutes. Our system automatically validates documents, performs KYC checks, and flags only exceptional cases for human review.
                        </p>

                        <h3>2. Streamlined User Experience</h3>
                        <p>
                            We redesigned the entire onboarding flow, consolidating 12 steps into 4 intuitive stages. The new interface guides users through the process with real-time validation, progress indicators, and helpful tooltips.
                        </p>

                        <h3>3. Scalable Architecture</h3>
                        <p>
                            We rebuilt the platform using a microservices architecture on AWS, enabling horizontal scaling and ensuring 99.9% uptime even during peak traffic periods.
                        </p>

                        <h2>The Results</h2>
                        <p>
                            Within 6 months of launch, the platform achieved remarkable improvements:
                        </p>
                        <ul>
                            <li><strong>2M+ active users</strong> - 10x growth in user base</li>
                            <li><strong>65% reduction</strong> in onboarding time (from 5-7 days to under 2 days)</li>
                            <li><strong>30% increase</strong> in user activation rates</li>
                            <li><strong>80% reduction</strong> in customer support tickets related to onboarding</li>
                            <li><strong>99.9% uptime</strong> maintained during peak periods</li>
                        </ul>

                        <h2>Technologies Used</h2>
                        <p>
                            React, Next.js, Node.js, PostgreSQL, AWS (Lambda, S3, RDS), TensorFlow, Stripe API, Plaid API
                        </p>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 rounded-3xl bg-gradient-to-br from-blue-50 to-white dark:from-neutral-900 dark:to-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-8 sm:p-12">
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                            Ready to scale your platform?
                        </h3>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
                            Let's discuss how we can help you achieve similar results.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-blue-700 transition-all hover:scale-105"
                        >
                            Start Your Project
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
