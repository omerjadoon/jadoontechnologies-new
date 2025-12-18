import RegionPage from "@/src/components/Regions/RegionPage";

export const metadata = {
    title: "MENA Region | Jadoon Technologies",
    description: "Digital solutions for the Middle East and North Africa region.",
};

export default function MenaPage() {
    const offices = [
        {
            city: "Dubai (UAE)",
            address: "Dubai Internet City,\nBuilding 1, Office 101",
            phone: "+971 4 123 4567"
        },
        {
            city: "Riyadh (KSA)",
            address: "Olaya Street,\nRiyadh 12211",
            phone: "+966 11 123 4567"
        }
    ];

    return (
        <RegionPage
            title="Middle East & North Africa"
            subtitle="Driving innovation in the MENA region."
            description="We are committed to supporting the region&apos;s ambitious digital transformation goals, from smart cities to fintech innovation."
            offices={offices}
            contactInfo={{ email: "mena@jadoontechnologies.com" }}
        />
    );
}
