import ServicePage from "@/src/components/Services/ServicePage";

export const metadata = {
    title: "Data Engineering & Cloud Solutions | Jadoon Technologies",
    description: "Robust data infrastructure and cloud solutions to power your business.",
};

export default function DataCloudPage() {
    const features = [
        {
            title: "Cloud Infrastructure Setup",
            description: "Designing and deploying scalable cloud architectures on AWS, Azure, or GCP."
        },
        {
            title: "Data Pipelines & ETL",
            description: "Building reliable pipelines to ingest, process, and transform data from various sources."
        },
        {
            title: "Data Lakes & Warehouses",
            description: "Centralized storage solutions for structured and unstructured data."
        },
        {
            title: "DevOps & CI/CD",
            description: "Automating deployment workflows for faster and more reliable software delivery."
        },
        {
            title: "Cloud Security & Compliance",
            description: "Ensuring your cloud infrastructure meets industry standards and security best practices."
        },
        {
            title: "Serverless Computing",
            description: "Leveraging serverless technologies to reduce operational overhead and costs."
        }
    ];

    const benefits = [
        "Scalability on demand",
        "Reduced IT infrastructure costs",
        "High availability and disaster recovery",
        "Faster time to insights",
        "Enhanced security posture",
        "Focus on core business logic"
    ];

    return (
        <ServicePage
            title="Data Engineering & Cloud Solutions"
            subtitle="The foundation of a modern digital business."
            description="A robust data and cloud foundation is essential for scalability, performance, and innovation. We help you build and manage the infrastructure needed to support your applications and data initiatives efficiently."
            features={features}
            benefits={benefits}
        />
    );
}
