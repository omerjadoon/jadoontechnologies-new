import IndustryPage from "@/src/components/Industries/IndustryPage";

export const metadata = {
    title: "Banking & Financial Services Solutions | Jadoon Technologies",
    description: "Secure and compliant fintech solutions for the banking and financial sector.",
};

export default function BfsPage() {
    const challenges = [
        {
            title: "Legacy Systems",
            description: "Modernizing outdated core banking systems without disrupting service."
        },
        {
            title: "Cybersecurity Threats",
            description: "Protecting sensitive financial data from increasingly sophisticated attacks."
        },
        {
            title: "Regulatory Compliance",
            description: "Adhering to strict regulations like GDPR, PSD2, and KYC/AML."
        }
    ];

    const solutions = [
        {
            title: "Digital Banking Platforms",
            description: "Creating seamless mobile and web banking experiences for customers."
        },
        {
            title: "Fintech App Development",
            description: "Building innovative apps for payments, investing, and personal finance."
        },
        {
            title: "Blockchain for Finance",
            description: "Implementing secure ledger technology for faster and cheaper transactions."
        },
        {
            title: "Risk Management Systems",
            description: "Using AI to detect fraud and assess credit risk in real-time."
        }
    ];

    return (
        <IndustryPage
            title="Banking & Financial Services"
            subtitle="The future of finance is digital."
            description="We help financial institutions and fintech startups build secure, compliant, and user-friendly digital products that meet the evolving needs of modern consumers."
            challenges={challenges}
            solutions={solutions}
        />
    );
}
