import ServicePage from "@/src/components/Services/ServicePage";

export const metadata = {
    title: "UI/UX Design Services | Jadoon Technologies",
    description: "User-centric design services to create intuitive, engaging, and beautiful digital experiences.",
};

export default function UiUxPage() {
    const features = [
        {
            title: "User Research & Analysis",
            description: "Deep dive into user behaviors, needs, and pain points to inform design decisions."
        },
        {
            title: "Wireframing & Prototyping",
            description: "Visualizing concepts and user flows to test and iterate before development."
        },
        {
            title: "Visual Design (UI)",
            description: "Creating stunning, brand-aligned interfaces that captivate users."
        },
        {
            title: "Interaction Design",
            description: "Designing meaningful interactions and animations that enhance usability."
        },
        {
            title: "Usability Testing",
            description: "Validating designs with real users to ensure intuitive navigation and task completion."
        },
        {
            title: "Design Systems",
            description: "Building scalable design systems to ensure consistency across all your digital products."
        }
    ];

    const benefits = [
        "Increased user satisfaction and retention",
        "Higher conversion rates",
        "Reduced development costs through early validation",
        "Stronger brand identity and loyalty",
        "Accessible and inclusive designs",
        "Data-driven design improvements"
    ];

    return (
        <ServicePage
            title="UI/UX Design"
            subtitle="Designing experiences that matter."
            description="Great design is more than just aesthetics; it's about solving problems and creating meaningful connections. Our UI/UX experts combine creativity with data to build digital products that are not only beautiful but also intuitive and effective."
            features={features}
            benefits={benefits}
        />
    );
}
