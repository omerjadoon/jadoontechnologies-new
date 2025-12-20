import ServicePage from "@/src/components/Services/ServicePage";

import siteMetadata from "@/src/utils/siteMetaData";

export const metadata = {
    title: "Web Development Services | Jadoon Technologies",
    description: "Custom web development services to build scalable, secure, and high-performance websites and web applications using Next.js, React, and Node.js.",
    keywords: ["Web Development", "Custom Web Apps", "SaaS Development", "Next.js Agency", "React Development", "Full Stack Development", "E-commerce Solutions"],
    alternates: {
        canonical: "/services/web-development",
    },
};

export default function WebDevelopmentPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Web Development Services",
        "provider": {
            "@type": "Organization",
            "name": "Jadoon Technologies",
            "url": siteMetadata.siteUrl
        },
        "description": "Custom web development services to build scalable, secure, and high-performance websites and web applications.",
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Web Development",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Custom Web Applications"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "E-commerce Solutions"
                    }
                }
            ]
        }
    };

    const features = [
        {
            title: "Custom Web Applications",
            description: "Tailor-made web solutions built to meet your specific business requirements and workflows."
        },
        {
            title: "E-commerce Solutions",
            description: "Robust online stores with secure payment gateways, inventory management, and seamless checkout experiences."
        },
        {
            title: "Progressive Web Apps (PWAs)",
            description: "Fast, reliable, and engaging web applications that offer a native app-like experience."
        },
        {
            title: "CMS Development",
            description: "Custom content management systems or integration with platforms like WordPress, Contentful, and Strapi."
        },
        {
            title: "API Development & Integration",
            description: "Secure and scalable RESTful and GraphQL APIs to connect your systems and third-party services."
        },
        {
            title: "Frontend & Backend Development",
            description: "Full-stack expertise using modern technologies like React, Next.js, Node.js, and Python."
        }
    ];

    const benefits = [
        "Responsive design for all devices",
        "SEO-optimized architecture",
        "High performance and fast loading speeds",
        "Secure and scalable codebases",
        "Seamless integration with existing tools",
        "Ongoing support and maintenance"
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ServicePage
                title="Web Development"
                subtitle="Building the web of tomorrow, today."
                description="We craft high-performance, visually stunning, and user-centric web applications that drive engagement and business growth. Whether you need a simple corporate website or a complex SaaS platform, our expert team delivers solutions that stand out."
                features={features}
                benefits={benefits}
            />
        </>
    );
}
