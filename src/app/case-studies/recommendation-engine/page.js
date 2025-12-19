import Link from "next/link";
import { ArrowLeft, ShoppingCart, TrendingUp, Users, Sparkles } from "lucide-react";

export const metadata = {
    title: "E-commerce Recommendation Engine Case Study - Jadoon Technologies",
    description: "How we built a personalized recommendation engine that lifted average order value by 18% and repeat purchases by 24%.",
};

export default function RecommendationEngineCaseStudy() {
    return (
        <main className="bg-white dark:bg-neutral-950">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-purple-600 to-indigo-800 dark:from-purple-900 dark:to-neutral-950 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <Link
                        href="/insights/case-studies"
                        className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Case Studies
                    </Link>

                    <div className="max-w-4xl">
                        <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-sm font-medium text-white mb-6">
                            E-commerce • Personalization
                        </span>
                        <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-6">
                            Recommendation engine for a global retailer
                        </h1>
                        <p className="text-xl text-purple-100 leading-relaxed">
                            Lifted average order value by 18% and repeat purchases by 24% through intelligent product recommendations powered by machine learning.
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
                                <ShoppingCart className="h-12 w-12 text-purple-600" />
                            </div>
                            <div className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">18%</div>
                            <div className="text-sm text-neutral-600 dark:text-neutral-400">Higher AOV</div>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <TrendingUp className="h-12 w-12 text-purple-600" />
                            </div>
                            <div className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">24%</div>
                            <div className="text-sm text-neutral-600 dark:text-neutral-400">More Repeat Purchases</div>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <Sparkles className="h-12 w-12 text-purple-600" />
                            </div>
                            <div className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">35%</div>
                            <div className="text-sm text-neutral-600 dark:text-neutral-400">Click-Through Rate</div>
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
                            A global e-commerce retailer with millions of products was struggling to help customers discover relevant items. Their generic "you might also like" recommendations were based on simple category matching, resulting in low engagement and missed revenue opportunities.
                        </p>
                        <p>
                            Key challenges included:
                        </p>
                        <ul>
                            <li>Low click-through rates on product recommendations (under 5%)</li>
                            <li>Stagnant average order values</li>
                            <li>Difficulty surfacing long-tail inventory</li>
                            <li>One-size-fits-all approach that ignored user preferences</li>
                            <li>Limited personalization capabilities</li>
                        </ul>

                        <h2>Our Solution</h2>
                        <p>
                            We built a sophisticated recommendation engine that combines collaborative filtering, content-based filtering, and deep learning to deliver hyper-personalized product suggestions.
                        </p>

                        <h3>1. Multi-Model Recommendation System</h3>
                        <p>
                            Our system uses multiple ML models working in concert: collaborative filtering for "customers like you" recommendations, content-based filtering for similar products, and a neural network for complex pattern recognition across user behavior, product attributes, and contextual signals.
                        </p>

                        <h3>2. Real-Time Personalization</h3>
                        <p>
                            The engine processes user behavior in real-time, adapting recommendations based on current browsing session, purchase history, seasonal trends, and even time of day. Each user sees a unique, dynamically generated product feed.
                        </p>

                        <h3>3. A/B Testing Framework</h3>
                        <p>
                            We implemented a robust experimentation platform that continuously tests different recommendation strategies, allowing the system to learn what works best for different user segments and product categories.
                        </p>

                        <h2>The Results</h2>
                        <p>
                            The recommendation engine delivered significant business impact:
                        </p>
                        <ul>
                            <li><strong>18% increase</strong> in average order value</li>
                            <li><strong>24% boost</strong> in repeat purchase rate</li>
                            <li><strong>35% click-through rate</strong> on recommendations (up from 4.8%)</li>
                            <li><strong>40% improvement</strong> in long-tail product discovery</li>
                            <li><strong>$12M additional revenue</strong> in the first year</li>
                            <li><strong>28% reduction</strong> in cart abandonment</li>
                        </ul>

                        <h2>Technologies Used</h2>
                        <p>
                            Python, TensorFlow, PyTorch, Apache Spark, Redis, Elasticsearch, React, Next.js, AWS (SageMaker, Lambda, DynamoDB), Snowflake
                        </p>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 rounded-3xl bg-gradient-to-br from-purple-50 to-white dark:from-neutral-900 dark:to-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-8 sm:p-12">
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                            Ready to boost your revenue with AI?
                        </h3>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
                            Let's build a personalization engine that drives results.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-2xl bg-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-purple-700 transition-all hover:scale-105"
                        >
                            Start Your Project
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
