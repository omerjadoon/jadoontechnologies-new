import ServicePage from "@/src/components/Services/ServicePage";

export const metadata = {
    title: "Digital Transformation Services | Jadoon Technologies",
    description: "Accelerate your business growth with our comprehensive digital transformation services.",
};

export default function DigitalTransformationPage() {
    const features = [
        {
            title: "Legacy System Modernization",
            description: "Upgrade outdated systems to modern, scalable cloud-based architectures without disrupting operations."
        },
        {
            title: "Process Automation",
            description: "Streamline workflows and reduce manual effort with intelligent automation solutions."
        },
        {
            title: "Cloud Migration",
            description: "Seamlessly move your infrastructure to the cloud for better agility, security, and cost-efficiency."
        },
        {
            title: "Digital Strategy Consulting",
            description: "Expert guidance to align your technology roadmap with your business objectives."
        },
        {
            title: "Data-Driven Insights",
            description: "Unlock the value of your data with advanced analytics and business intelligence tools."
        },
        {
            title: "Customer Experience Transformation",
            description: "Reimagine how you interact with customers across all digital touchpoints."
        }
    ];

    const benefits = [
        "Increased operational efficiency and reduced costs",
        "Enhanced agility to respond to market changes",
        "Improved customer satisfaction and retention",
        "Data-driven decision making capabilities",
        "Scalable infrastructure for future growth",
        "Competitive advantage in the digital landscape"
    ];

    return (
        <ServicePage
            title="Digital Transformation"
            subtitle="Reimagine your business for the digital age."
            description="We help organizations navigate the complexities of the digital landscape, leveraging technology to drive innovation, efficiency, and growth. From modernizing legacy systems to implementing cutting-edge automation, we are your partner in digital evolution."
            features={features}
            benefits={benefits}
        />
    );
}
