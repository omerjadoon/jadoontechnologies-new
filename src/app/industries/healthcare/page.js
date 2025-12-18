import IndustryPage from "@/src/components/Industries/IndustryPage";

export const metadata = {
    title: "Healthcare & Life Sciences Solutions | Jadoon Technologies",
    description: "Digital health solutions to improve patient care and operational efficiency.",
};

export default function HealthcarePage() {
    const challenges = [
        {
            title: "Interoperability",
            description: "Ensuring different healthcare systems can exchange data seamlessly."
        },
        {
            title: "Patient Data Security",
            description: "Strict compliance with HIPAA and other data protection regulations."
        },
        {
            title: "Remote Care Delivery",
            description: "Providing quality care to patients outside of traditional clinical settings."
        }
    ];

    const solutions = [
        {
            title: "Telemedicine Platforms",
            description: "Secure video conferencing and remote monitoring tools for virtual care."
        },
        {
            title: "EHR/EMR Integration",
            description: "Connecting digital health apps with Electronic Health Records systems."
        },
        {
            title: "Health Data Analytics",
            description: "Using data to improve patient outcomes and optimize hospital operations."
        },
        {
            title: "mHealth Apps",
            description: "Mobile applications for patient engagement, medication reminders, and wellness."
        }
    ];

    return (
        <IndustryPage
            title="Healthcare & Life Sciences"
            subtitle="Innovating for better health."
            description="Technology has the power to save lives. We work with healthcare providers and life sciences companies to develop digital solutions that improve patient care, research, and accessibility."
            challenges={challenges}
            solutions={solutions}
        />
    );
}
