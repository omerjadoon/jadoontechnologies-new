"use client";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-transparent dark:bg-slate-950 py-20 text-neutral-900 dark:text-white sm:py-24 overflow-hidden"
    >
      {/* Decorative Background Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] opacity-5 dark:opacity-[0.02] pointer-events-none -z-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-600 fill-none stroke-current stroke-1">
          <path d="M 20,100 C 50,0 150,0 180,100" strokeDasharray="4,4" />
          <path d="M 20,100 C 50,200 150,200 180,100" />
          <circle cx="180" cy="100" r="3" fill="currentColor" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <div className="relative h-full min-h-[500px] w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-slate-800 order-2 lg:order-1 shadow-2xl">
            <img
              src="/what-jadoon-technologies-do.jpg"
              alt="What we build"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Right Column: Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-10">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]">
                Services
              </h2>
              <p className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                What we build.
              </p>
              <p className="mt-4 text-sm text-neutral-600 dark:text-slate-300 sm:text-base">
                We’re your end-to-end product partner – from strategy and design to
                development, launch, and continuous improvement.
              </p>
            </div>

            <div className="space-y-6">
              <ServiceCard
                label="Web Platforms"
                title="High-performing web products"
                bullets={[
                  "Custom SaaS, dashboards & admin portals",
                  "Responsive, accessible and SEO-friendly",
                  "Modern stacks like Next.js, Node.js & serverless",
                ]}
              />
              <ServiceCard
                label="Mobile Apps"
                title="Native & cross-platform apps"
                bullets={[
                  "iOS, Android & Flutter development",
                  "App store ready with analytics & crash reporting",
                  "Offline-first and real-time experiences",
                ]}
              />
              <ServiceCard
                label="AI & Automation"
                title="Intelligent digital experiences"
                bullets={[
                  "AI copilots & chatbots (LLMs)",
                  "Process automation & agent workflows",
                  "Data pipelines, analytics & recommendations",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ label, title, bullets }) {
  return (
    <article className="flex flex-col rounded-2xl border border-neutral-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-6 backdrop-blur-sm transition hover:border-blue-500/30">
      <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#2563eb]">
        {label}
      </span>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-slate-300">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2 items-start">
            <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2563eb]" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
