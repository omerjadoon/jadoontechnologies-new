"use client";

export default function ValuePropsSection() {
  return (
    <section
      id="why-us"
      className="bg-transparent dark:bg-slate-950 py-20 text-neutral-900 dark:text-white sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]">
            Why companies choose us
          </h2>
          <p className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Engineering-first teams that ship fast without sacrificing quality.
          </p>
          <p className="mt-4 text-sm text-neutral-600 dark:text-slate-300 sm:text-base">
            From venture-backed startups to established enterprises, we help teams
            design, build, and scale digital products that actually move the
            needle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ValueCard
              title="Engineering excellence"
              body="Senior engineers, architects, and AI specialists who understand product, not just code."
              className="sm:col-span-1"
            />
            <ValueCard
              title="Speed with structure"
              body="Battle-tested discovery, design, and agile delivery frameworks get your MVP live in weeks."
              className="sm:col-span-1"
            />
            <ValueCard
              title="AI-first mindset"
              body="We embed automation, intelligence, and data-driven decisions into every modern product."
              className="sm:col-span-2"
            />
          </div>

          {/* Right Column: Image */}
          <div className="relative h-full min-h-[400px] w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-slate-800">
            <img
              src="/why-companies-choose-jadoon technologies.jpg"
              alt="Team collaboration"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueCard({ title, body, className = "" }) {
  return (
    <div className={`rounded-2xl border border-neutral-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 p-8 shadow-sm shadow-black/5 dark:shadow-black/40 ${className}`}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-slate-300">{body}</p>
    </div>
  );
}
