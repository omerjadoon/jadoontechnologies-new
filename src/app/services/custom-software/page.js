import ServicePage from "@/src/components/Services/ServicePage";

import siteMetadata from "@/src/utils/siteMetaData";

export const metadata = {
    title: "Custom Software Development Services | Jadoon Technologies",
    description: "Tailored software solutions to address your unique business challenges. Enterprise software, SaaS products, and legacy modernization.",
    keywords: ["Custom Software", "Enterprise Software", "SaaS Development", "Software Modernization", "Cloud Native Apps", "API Integration", "Software Engineering"],
    alternates: {
        canonical: "/services/custom-software",
    },
};

export default function CustomSoftwarePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Custom Software Development Services",
        "provider": {
            "@type": "Organization",
            "name": "Jadoon Technologies",
            "url": siteMetadata.siteUrl
        },
        "description": "Tailored software solutions to address your unique business challenges.",
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Custom Software",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Enterprise Software Solutions"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "SaaS Product Development"
                    }
                }
            ]
        }
    };

    const features = [
        {
            title: "Enterprise Software Solutions",
            description: "Scalable software systems designed to streamline complex business processes and operations."
        },
        {
            title: "SaaS Product Development",
            description: "End-to-end development of Software-as-a-Service products, from MVP to full-scale launch."
        },
        {
            title: "Legacy Software Modernization",
            description: "Re-engineering and upgrading legacy applications to modern technology stacks."
        },
        {
            title: "API Development & Integration",
            description: "Building robust APIs to connect disparate systems and enable data exchange."
        },
        {
            title: "Cloud-Native Applications",
            description: "Developing applications designed specifically for cloud environments like AWS, Azure, and Google Cloud."
        },
        {
            title: "Database Design & Management",
            description: "Optimized database architectures for high performance, reliability, and data integrity."
        }
    ];

    const benefits = [
        "Software tailored exactly to your needs",
        "Full ownership of the source code",
        "Scalability to grow with your business",
        "Enhanced security and compliance",
        "Seamless integration with existing workflows",
        "Dedicated support and maintenance"
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ServicePage
                title="Custom Software Development"
                subtitle="Software that fits your business, not the other way around."
                description="Off-the-shelf software often falls short of meeting unique business requirements. We build custom software solutions that are perfectly aligned with your goals, workflows, and future growth plans."
                features={features}
                benefits={benefits}
            />
        </>
    );
}
