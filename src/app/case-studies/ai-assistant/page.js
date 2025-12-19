import Link from "next/link";
import { ArrowLeft, CheckCircle2, Brain, Clock, TrendingUp } from "lucide-react";

export const metadata = {
    title: "AI Clinical Assistant Case Study - Jadoon Technologies",
    description: "How we built an AI assistant for clinical support teams that automated 40% of manual queries while maintaining human-level accuracy.",
};

export default function AIAssistantCaseStudy() {
    return (
        <main className="bg-white dark:bg-neutral-950">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-emerald-600 to-teal-800 dark:from-emerald-900 dark:to-neutral-950 py-24 sm:py-32">
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
                            Healthcare • AI Automation
                        </span>
                        <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-6">
                            AI assistant for clinical support teams
                        </h1>
                        <p className="text-xl text-emerald-100 leading-relaxed">
                            Automated 40% of manual queries while maintaining human-level accuracy, freeing up clinical staff to focus on complex patient care.
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
                                <Brain className="h-12 w-12 text-emerald-600" />
                            </div>
                            <div className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">40%</div>
                            <div className="text-sm text-neutral-600 dark:text-neutral-400">Queries Automated</div>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <CheckCircle2 className="h-12 w-12 text-emerald-600" />
                            </div>
                            <div className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">98%</div>
                            <div className="text-sm text-neutral-600 dark:text-neutral-400">Accuracy Rate</div>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <Clock className="h-12 w-12 text-emerald-600" />
                            </div>
                            <div className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">75%</div>
                            <div className="text-sm text-neutral-600 dark:text-neutral-400">Faster Response Time</div>
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
                            A leading healthcare provider was overwhelmed with routine clinical queries from patients and staff. Their support team was spending countless hours answering repetitive questions about medications, procedures, and test results, leaving little time for complex cases that truly required human expertise.
                        </p>
                        <p>
                            The challenges they faced included:
                        </p>
                        <ul>
                            <li>Average response time of 4-6 hours for routine queries</li>
                            <li>Clinical staff burnout from repetitive tasks</li>
                            <li>Inconsistent information across different support channels</li>
                            <li>Difficulty scaling support during peak periods</li>
                            <li>High operational costs</li>
                        </ul>

                        <h2>Our Solution</h2>
                        <p>
                            We developed an AI-powered clinical assistant that combines natural language processing with medical knowledge bases to provide accurate, instant responses to routine queries.
                        </p>

                        <h3>1. Medical-Grade AI Model</h3>
                        <p>
                            We trained a custom AI model on millions of clinical interactions, medical literature, and approved protocols. The system understands medical terminology, context, and can provide evidence-based responses while flagging cases that require human review.
                        </p>

                        <h3>2. Intelligent Triage System</h3>
                        <p>
                            Our AI automatically categorizes queries by urgency and complexity. Simple questions get instant automated responses, while complex or sensitive cases are immediately routed to appropriate clinical staff with relevant context and suggested responses.
                        </p>

                        <h3>3. Continuous Learning</h3>
                        <p>
                            The system learns from every interaction, with clinical staff reviewing and approving AI responses. This feedback loop continuously improves accuracy and expands the knowledge base.
                        </p>

                        <h2>The Results</h2>
                        <p>
                            The AI assistant transformed their clinical support operations:
                        </p>
                        <ul>
                            <li><strong>40% automation</strong> of routine queries without human intervention</li>
                            <li><strong>98% accuracy</strong> rate, matching human-level performance</li>
                            <li><strong>75% reduction</strong> in average response time (from 4-6 hours to under 1 hour)</li>
                            <li><strong>60% decrease</strong> in staff burnout scores</li>
                            <li><strong>$500K annual savings</strong> in operational costs</li>
                            <li><strong>95% patient satisfaction</strong> with automated responses</li>
                        </ul>

                        <h2>Technologies Used</h2>
                        <p>
                            Python, TensorFlow, OpenAI GPT-4, LangChain, FastAPI, PostgreSQL, Redis, React, HIPAA-compliant AWS infrastructure
                        </p>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 rounded-3xl bg-gradient-to-br from-emerald-50 to-white dark:from-neutral-900 dark:to-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-8 sm:p-12">
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                            Ready to automate with AI?
                        </h3>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
                            Let's explore how AI can transform your operations.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-emerald-700 transition-all hover:scale-105"
                        >
                            Start Your Project
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
