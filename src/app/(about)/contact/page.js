import ContactForm from "@/src/components/Contact/ContactForm";
import siteMetadata from "@/src/utils/siteMetaData";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Contact Us | Jadoon Technologies",
  description: `Get in touch with Jadoon Technologies. Start your digital transformation journey today. Email us at ${siteMetadata.email}`,
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12">

          {/* Left Column: Content & Info */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
                Let&apos;s build something <span className="text-blue-600 dark:text-blue-400">extraordinary</span> together.
              </h1>
              <p className="text-lg text-neutral-600 dark:text-slate-400 leading-relaxed">
                Whether you have a groundbreaking idea or need to modernize your existing systems, our team is ready to help you achieve your goals.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Email Us</h3>
                  <p className="mt-1 text-neutral-600 dark:text-slate-400">
                    For general inquiries and project discussions:
                  </p>
                  <a href={`mailto:${siteMetadata.email}`} className="mt-2 inline-block font-medium text-blue-600 hover:underline dark:text-blue-400">
                    {siteMetadata.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Call Us</h3>
                  <p className="mt-1 text-neutral-600 dark:text-slate-400">
                    Speak directly with our team:
                  </p>
                  <a href="tel:+923359119460" className="mt-2 inline-block font-medium text-blue-600 hover:underline dark:text-blue-400">
                    +92 335 9119460
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Our Locations</h3>
                  <ul className="mt-2 space-y-1 text-neutral-600 dark:text-slate-400">
                    <li>🇺🇸 Albuquerque, NM, USA (HQ)</li>
                    <li>🇩🇪 Germany</li>
                    <li>🇵🇰 Pakistan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-xl shadow-neutral-200/50 dark:border-neutral-800 dark:bg-neutral-900/50 dark:shadow-none sm:p-12">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">
                Tell us about your project
              </h2>
              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
