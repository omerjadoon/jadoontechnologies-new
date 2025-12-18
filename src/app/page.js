import { blogs } from "@/.velite/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";
import MegaHeader from "../components/Navigation/MegaHeader";
import HeroHeader from "../components/Navigation/HeroHeader";
import ParticlesWave from "../components/ParticleWave/ParticlesWave";
import ValuePropsSection from "../components/Home/ValuePropsSection";
import ServicesSection from "../components/Home/ServicesSection";
import FeatureSplitSection from "../components/Home/FeatureSplitSection";
import ProcessSection from "../components/Home/ProcessSection";
import CaseStudiesSection from "../components/Home/CaseStudiesSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import HomeContactSection from "../components/Home/HomeContactSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-gradient-to-b from-white via-blue-50 to-white dark:bg-[#020617] dark:bg-none">

      <HeroHeader />
      <ValuePropsSection />
      <ServicesSection />

      <ProcessSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <HomeContactSection />



    </main>
  )
}
