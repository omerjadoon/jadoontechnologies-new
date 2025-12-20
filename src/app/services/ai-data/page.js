import ServicePage from "@/src/components/Services/ServicePage";

import siteMetadata from "@/src/utils/siteMetaData";

export const metadata = {
    title: "AI & Data Analytics Services | Jadoon Technologies",
    description: "Unlock the power of your data with advanced AI and analytics solutions. Predictive modeling, machine learning, and data visualization.",
    keywords: ["AI Analytics", "Machine Learning Services", "Data Science Agency", "Predictive Modeling", "Business Intelligence", "NLP Solutions", "Computer Vision"],
    alternates: {
        canonical: "/services/ai-data",
    },
};

export default function AiDataPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "AI & Data Analytics Services",
        "provider": {
            "@type": "Organization",
            "name": "Jadoon Technologies",
            "url": siteMetadata.siteUrl
        },
        "description": "Unlock the power of your data with advanced AI and analytics solutions.",
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "AI & Data",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Predictive Analytics"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Machine Learning Models"
                    }
                }
            ]
        }
    };

    const features = [
        {
            title: "Predictive Analytics",
            description: "Forecasting future trends and behaviors based on historical data."
        },
        {
            title: "Machine Learning Models",
            description: "Building custom ML models to automate decision-making and processes."
        },
        {
            title: "Business Intelligence (BI)",
            description: "Interactive dashboards and reports to visualize key performance indicators."
        },
        {
            title: "Natural Language Processing (NLP)",
            description: "Analyzing and understanding human language for chatbots and sentiment analysis."
        },
        {
            title: "Computer Vision",
            description: "Extracting meaningful information from digital images and videos."
        },
        {
            title: "Data Warehousing & ETL",
            description: "Centralizing your data for efficient storage, retrieval, and analysis."
        }
    ];

    const benefits = [
        "Data-driven decision making",
        "Improved operational efficiency",
        "Personalized customer experiences",
        "Fraud detection and risk management",
        "Automated insights and reporting",
        "Competitive advantage through intelligence"
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ServicePage
                title="AI & Data Analytics"
                subtitle="Turning data into actionable insights."
                description="In the age of information, data is your most valuable asset. We help you harness the power of Artificial Intelligence and Data Analytics to uncover hidden patterns, predict trends, and make smarter business decisions."
                features={features}
                benefits={benefits}
            />
        </>
    );
}
