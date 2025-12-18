import RegionPage from "@/src/components/Regions/RegionPage";

export const metadata = {
    title: "Europe | Jadoon Technologies",
    description: "Digital consulting and development services for Europe.",
};

export default function EuropeUkPage() {
    const offices = [
        {
            city: "Nuremberg (Germany)",
            address: "Nuremberg, Germany",
            phone: "+49 176 68310746"
        }
    ];

    return (
        <RegionPage
            title="Europe"
            subtitle="Partnering for digital success in Europe."
            description="We bring our global expertise and local understanding to help European businesses navigate the complexities of the digital landscape."
            offices={offices}
            contactInfo={{ email: "info@jadoontechnologies.com" }}
        />
    );
}
