import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import IntroductionSection from "@/src/components/About/IntroductionSection";
import MissionVisionSection from "@/src/components/About/MissionVisionSection";
import CoreValuesSection from "@/src/components/About/CoreValuesSection";
import OurStorySection from "@/src/components/About/OurStorySection";
import StatsSection from "@/src/components/About/StatsSection";
import Skills from "@/src/components/About/Skills";
import Link from "next/link";

export const metadata = {
  title: "About Us - Jadoon Technologies",
  description: "Learn about Jadoon Technologies, a cutting-edge software development company specializing in building next-generation digital products that transform businesses.",
};

export default function About() {
  return (
    <>
      <AboutCoverSection />
      <IntroductionSection />
      <MissionVisionSection />
      <CoreValuesSection />
      <OurStorySection />
      <StatsSection />
      <Skills />

      <section className="bg-white dark:bg-neutral-950 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-neutral-900 dark:text-white sm:text-3xl mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-center text-lg text-neutral-600 dark:text-neutral-400 mb-8">
            Let's discuss your project and bring your vision to life.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-blue-700 transition-all hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
