"use client";

import ContactForm from "@/src/components/Contact/ContactForm";

export default function HomeContactSection() {
    return (
        <section className="bg-white dark:bg-slate-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                        Ready to start your project?
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-neutral-600 dark:text-slate-400">
                        Tell us about your goals and we'll help you build the future.
                    </p>
                </div>
                <div className="mx-auto max-w-2xl bg-white dark:bg-neutral-900/50 rounded-3xl border border-neutral-200 dark:border-neutral-800 p-8 sm:p-12 shadow-xl shadow-neutral-200/50 dark:shadow-none">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
