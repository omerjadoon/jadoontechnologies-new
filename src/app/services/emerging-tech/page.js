import ServicePage from "@/src/components/Services/ServicePage";

export const metadata = {
    title: "Emerging Technologies Services | Jadoon Technologies",
    description: "Explore the potential of cutting-edge technologies like AR/VR, IoT, and more.",
};

export default function EmergingTechPage() {
    const features = [
        {
            title: "Internet of Things (IoT)",
            description: "Connecting devices and systems to create smart, data-driven environments."
        },
        {
            title: "Augmented & Virtual Reality (AR/VR)",
            description: "Immersive experiences for training, marketing, and entertainment."
        },
        {
            title: "Blockchain Solutions",
            description: "Secure, transparent, and decentralized applications for various industries."
        },
        {
            title: "Edge Computing",
            description: "Processing data closer to the source for faster insights and reduced latency."
        },
        {
            title: "Wearable Technology",
            description: "Developing apps and integrations for smartwatches and other wearable devices."
        },
        {
            title: "Voice Interfaces",
            description: "Creating voice-activated applications and skills for smart assistants."
        }
    ];

    const benefits = [
        "First-mover advantage in your industry",
        "Enhanced operational efficiency through automation",
        "New revenue streams and business models",
        "Improved customer engagement with immersive tech",
        "Data-driven insights from connected devices",
        "Future-proofing your business"
    ];

    return (
        <ServicePage
            title="Emerging Technologies"
            subtitle="Innovating for the future."
            description="Stay ahead of the curve by leveraging the latest advancements in technology. We help you identify and implement emerging tech solutions that can transform your business and give you a competitive edge."
            features={features}
            benefits={benefits}
        />
    );
}
