import { blogs, caseStudies } from "@/.velite/generated";
import siteMetadata from "@/src/utils/siteMetaData";

export default function sitemap() {
    const baseUrl = siteMetadata.siteUrl;

    // Static routes
    const staticRoutes = [
        "",
        "/about/who-we-are",
        "/about/leadership",
        "/about/careers",
        "/about/sustainability",
        "/about/csr",
        "/services/digital-transformation",
        "/services/web-development",
        "/services/mobile-app-development",
        "/services/custom-software",
        "/services/ui-ux",
        "/services/emerging-tech",
        "/services/ai-data",
        "/services/generative-ai",
        "/services/blockchain-web3",
        "/services/data-cloud",
        "/industries/ecommerce",
        "/industries/travel-hospitality",
        "/industries/tmt",
        "/industries/bfs",
        "/industries/healthcare",
        "/insights/case-studies",
        "/insights/blog",
        "/insights/faq",
        "/insights/videos",
        "/insights/workplace-culture",
        "/contact",
        "/privacy",
        "/terms",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1 : 0.8,
    }));

    // Blog routes
    const blogRoutes = blogs.map((blog) => ({
        url: `${baseUrl}${blog.url}`,
        lastModified: new Date(blog.updatedAt || blog.publishedAt),
        changeFrequency: "weekly",
        priority: 0.6,
    }));

    // Case study routes
    const caseStudyRoutes = caseStudies.map((study) => ({
        url: `${baseUrl}/case-studies/${study.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [...staticRoutes, ...blogRoutes, ...caseStudyRoutes];
}
