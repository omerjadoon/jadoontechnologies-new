"use client";

import Image from "next/image";

export default function TestimonialsSection() {
  const items = [
    {
      quote:
        "They felt like an extension of our own team. We hit an impossible deadline and still shipped with quality.",
      name: "Sarah Khan",
      role: "VP Product, Fintech Startup",
    },
    {
      quote:
        "Their AI & automation work now saves us dozens of hours every week. The ROI was obvious after the first month.",
      name: "Daniel Weber",
      role: "COO, Healthcare Platform",
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-transparent dark:bg-slate-950 py-24 text-neutral-900 dark:text-white sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600 uppercase">
            What our Clients say about us
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Loved by founders and product teams
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {items.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-900 p-8 shadow-xl ring-1 ring-gray-900/10 dark:ring-white/10 sm:p-10 relative overflow-hidden"
            >
              {/* Large Quote Icon */}
              <svg
                className="absolute top-6 right-8 h-24 w-24 text-blue-100 dark:text-blue-900/20 -z-0 opacity-50"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>

              <blockquote className="text-lg font-medium leading-8 text-gray-900 dark:text-white z-10 relative">
                <p>“{testimonial.quote}”</p>
              </blockquote>
              <div className="mt-8 flex items-center gap-x-4 z-10 relative">
                <div className="relative h-12 w-12 rounded-full bg-gray-50 overflow-hidden">
                  {/* Placeholder Image - Gradient for now */}
                  <div className={`h-full w-full bg-gradient-to-br ${index % 2 === 0 ? 'from-blue-400 to-indigo-500' : 'from-purple-400 to-pink-500'}`} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-sm leading-6 text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
