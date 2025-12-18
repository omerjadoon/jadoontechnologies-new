"use client";

import Link from "next/link";

export default function FinalCTASection() {
  return (
    <section
      id="contact"
      className="bg-transparent dark:bg-gradient-to-b dark:from-slate-950 dark:to-black py-20 text-neutral-900 dark:text-white sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]">
          Let&apos;s build
        </h2>
        <p className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Ready to build your next web, mobile, or AI product?
        </p>
        <p className="mt-4 text-sm text-neutral-600 dark:text-slate-300 sm:text-base">
          Tell us about your idea, timeline, and goals. We&apos;ll come back
          with a clear plan, a realistic timeline, and a dedicated team.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="mailto:info@jadoontechnologies.com"
            className="inline-flex items-center justify-center rounded-full bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-600"
          >
            Email us your project
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-neutral-300 dark:border-white/30 px-6 py-3 text-sm font-semibold text-neutral-900 dark:text-white/90 backdrop-blur transition hover:bg-gray-100 dark:hover:bg-white/10"
          >
            Book a free consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
