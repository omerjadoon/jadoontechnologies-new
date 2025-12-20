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
import siteMetadata from "../utils/siteMetaData";

export const metadata = {
  title: "Jadoon Technologies | AI & Software Development Agency",
  description: "Leading AI and Software Development Agency specializing in Generative AI, Custom Web Platforms, and Mobile Apps. We transform businesses with cutting-edge technology.",
  keywords: ["AI Development", "Generative AI", "Web Development", "Software Agency", "Digital Transformation", "Custom Software", "Next.js Development", "AI Solutions"],
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Jadoon Technologies",
    "url": siteMetadata.siteUrl,
    "logo": `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+92-335-9119460",
      "contactType": "customer service",
      "email": siteMetadata.email,
    },
    "sameAs": [
      siteMetadata.facebook,
      siteMetadata.linkedin,
      siteMetadata.youtube,
    ],
    "description": siteMetadata.description,
  };

  return (
    <main className="flex flex-col items-center justify-center bg-gradient-to-b from-white via-blue-50 to-white dark:bg-[#020617] dark:bg-none">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
