import RegionPage from "@/src/components/Regions/RegionPage";

export const metadata = {
    title: "North America | Jadoon Technologies",
    description: "Serving clients across the United States and Canada.",
};

export default function NaPage() {
    const offices = [
        {
            city: "Albuquerque (USA)",
            address: "102 Gold Ave SW,\nAlbuquerque, NM 87102",
            phone: "+92 335 9119460"
        }
    ];

    return (
        <RegionPage
            title="North America"
            subtitle="Technology solutions for a dynamic market."
            description="From startups to Fortune 500 companies, we help North American businesses leverage technology to stay competitive and grow."
            offices={offices}
            contactInfo={{ email: "info@jadoontechnologies.com" }}
        />
    );
}
