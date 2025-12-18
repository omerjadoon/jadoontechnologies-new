import RegionPage from "@/src/components/Regions/RegionPage";

export const metadata = {
    title: "Global Presence | Jadoon Technologies",
    description: "Serving clients worldwide with our global network of offices and partners.",
};

export default function GlobalPage() {
    const offices = [
        {
            city: "Abbottabad (Pakistan)",
            address: "Abbottabad, Pakistan",
            phone: "+92 335 9119460"
        },
        {
            city: "Albuquerque (USA)",
            address: "102 Gold Ave SW,\nAlbuquerque, NM 87102",
            phone: "+92 335 9119460"
        },
        {
            city: "Nuremberg (Germany)",
            address: "Nuremberg, Germany",
            phone: "+49 176 68310746"
        }
    ];

    return (
        <RegionPage
            title="Global"
            subtitle="Connecting businesses across borders."
            description="With a presence in key markets around the world, Jadoon Technologies is well-positioned to support global enterprises with their digital transformation journeys."
            offices={offices}
            contactInfo={{ email: "info@jadoontechnologies.com" }}
        />
    );
}
