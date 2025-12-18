import IndustryPage from "@/src/components/Industries/IndustryPage";

export const metadata = {
    title: "Travel & Hospitality Solutions | Jadoon Technologies",
    description: "Digital solutions for the travel and hospitality industry to enhance guest experiences.",
};

export default function TravelHospitalityPage() {
    const challenges = [
        {
            title: "Booking Complexity",
            description: "Managing complex booking engines and inventory across multiple channels."
        },
        {
            title: "Customer Expectations",
            description: "Travelers demand personalized, seamless digital experiences."
        },
        {
            title: "Operational Efficiency",
            description: "Streamlining operations to reduce costs and improve service delivery."
        }
    ];

    const solutions = [
        {
            title: "Booking Engine Development",
            description: "Custom booking systems that are easy to use and integrate with global distribution systems."
        },
        {
            title: "Mobile Travel Companions",
            description: "Apps that assist travelers throughout their journey, from check-in to local recommendations."
        },
        {
            title: "Loyalty Program Management",
            description: "Digital platforms to manage and boost customer loyalty programs."
        },
        {
            title: "Property Management Systems (PMS)",
            description: "Integrated software to manage hotel operations, reservations, and housekeeping."
        }
    ];

    return (
        <IndustryPage
            title="Travel & Hospitality"
            subtitle="Creating memorable journeys."
            description="The travel industry is rebounding with a focus on digital-first experiences. We help travel and hospitality businesses leverage technology to offer personalized services and streamline operations."
            challenges={challenges}
            solutions={solutions}
        />
    );
}
