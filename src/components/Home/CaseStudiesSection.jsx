"use client";

export default function CaseStudiesSection() {
  const cases = [
    {
      label: "Fintech • Web & Mobile",
      title: "Scaling a digital banking platform to 2M+ users",
      result: "Reduced onboarding time by 65% and boosted activation by 30%.",
      image: "./digital-banking.jpg",
    },
    {
      label: "Healthcare • AI Automation",
      title: "AI assistant for clinical support teams",
      result: "Automated 40% of manual queries while maintaining human-level accuracy.",
      image: "./ai-assistant.jpg",
    },
    {
      label: "E-commerce • Personalization",
      title: "Recommendation engine for a global retailer",
      result: "Lifted average order value by 18% and repeat purchases by 24%.",
      image: "./recommendation-system.jpg",
    },
  ];

  return (
    <section id="work" className="bg-transparent dark:bg-slate-950 py-20 text-neutral-900 dark:text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]">
              Case Studies
            </h2>
            <p className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Products we&apos;ve shipped.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="max-w-xl text-sm text-neutral-600 dark:text-slate-300 sm:text-base md:text-right">
              Here’s how we’ve helped teams turn ambitious ideas into reliable,
              high-performing products.
            </p>
            <a
              href="/insights/case-studies"
              className="text-sm font-medium text-[#2563eb] hover:underline flex items-center gap-1"
            >
              View All Case Studies
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {cases.map((cs) => (
            <article
              key={cs.title}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 transition hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-slate-800">
                {/* Using standard img tag for external placeholder to avoid Next.js config requirement for now */}
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#2563eb]">
                  {cs.label}
                </span>
                <h3 className="mt-3 text-lg font-semibold leading-snug">{cs.title}</h3>
                <p className="mt-3 flex-1 text-sm text-neutral-600 dark:text-slate-300">{cs.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
