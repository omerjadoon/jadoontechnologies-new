import IndustryPage from "@/src/components/Industries/IndustryPage";

export const metadata = {
    title: "Ecommerce Solutions | Jadoon Technologies",
    description: "Scalable ecommerce solutions to drive sales and enhance customer experience.",
};

export default function EcommercePage() {
    const challenges = [
        {
            title: "Cart Abandonment",
            description: "High rates of users leaving before completing a purchase due to friction."
        },
        {
            title: "Scalability Issues",
            description: "Websites crashing during high-traffic events like Black Friday."
        },
        {
            title: "Security Threats",
            description: "Protecting customer data and payments from cyberattacks."
        }
    ];

    const solutions = [
        {
            title: "Custom E-commerce Platforms",
            description: "Tailored online stores built for speed, conversion, and scalability."
        },
        {
            title: "Omnichannel Integration",
            description: "Seamlessly connecting online and offline sales channels for a unified experience."
        },
        {
            title: "AI-Powered Personalization",
            description: "Recommending products based on user behavior to increase average order value."
        },
        {
            title: "Secure Payment Gateways",
            description: "Integrating robust payment solutions that ensure safe and smooth transactions."
        }
    ];

    return (
        <IndustryPage
            title="Ecommerce"
            subtitle="Redefining the online shopping experience."
            description="In the competitive world of ecommerce, user experience is everything. We help brands build powerful, scalable, and secure online stores that convert visitors into loyal customers."
            challenges={challenges}
            solutions={solutions}
        />
    );
}
