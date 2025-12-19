import ServicePage from "@/src/components/Services/ServicePage";

import siteMetadata from "@/src/utils/siteMetaData";

export const metadata = {
    title: "Generative AI & Automations | Jadoon Technologies",
    description: "Leverage the power of Generative AI to automate tasks, create content, and drive innovation. Custom LLM development, AI agents, and workflow automation.",
    keywords: ["Generative AI", "AI Automation", "LLM Development", "AI Agents", "Custom AI Solutions", "AI Consulting", "Machine Learning"],
};

export default function GenerativeAiPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Generative AI & Automations",
        "provider": {
            "@type": "Organization",
            "name": "Jadoon Technologies",
            "url": siteMetadata.siteUrl
        },
        "description": "Leverage the power of Generative AI to automate tasks, create content, and drive innovation.",
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Generative AI",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Custom LLM Solutions"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "AI-Powered Content Generation"
                    }
                }
            ]
        }
    };

    const features = [
        {
            title: "Custom LLM Solutions",
            description: "Fine-tuning and deploying Large Language Models (LLMs) for your specific business needs."
        },
        {
            title: "AI-Powered Content Generation",
            description: "Automating the creation of marketing copy, reports, code, and more."
        },
        {
            title: "Intelligent Chatbots & Assistants",
            description: "Building next-gen conversational AI that understands context and intent."
        },
        {
            title: "Workflow Automation",
            description: "Connecting AI agents to your tools to autonomously perform complex tasks."
        },
        {
            title: "Image & Video Generation",
            description: "Using diffusion models to create custom visual assets on demand."
        },
        {
            title: "AI Strategy & Consulting",
            description: "Guiding your organization on how to safely and effectively adopt Generative AI."
        }
    ];

    const benefits = [
        "Exponential increase in productivity",
        "Cost reduction through automation",
        "Enhanced creativity and innovation",
        "24/7 intelligent customer support",
        "Scalable content production",
        "Competitive edge in the AI era"
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ServicePage
                title="Generative AI & Automations"
                subtitle="The future of work is here."
                description="Generative AI is reshaping industries by automating cognitive tasks and unlocking new levels of creativity. We help you harness this transformative technology to build intelligent applications and streamline your operations."
                features={features}
                benefits={benefits}
            />
        </>
    );
}
