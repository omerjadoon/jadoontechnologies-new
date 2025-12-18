import ServicePage from "@/src/components/Services/ServicePage";

export const metadata = {
    title: "Blockchain & Web 3.0 Services | Jadoon Technologies",
    description: "Building decentralized applications and blockchain solutions for the next generation of the web.",
};

export default function BlockchainPage() {
    const features = [
        {
            title: "Smart Contract Development",
            description: "Secure and audited smart contracts for Ethereum, Solana, and other major chains."
        },
        {
            title: "dApp Development",
            description: "Decentralized Applications (dApps) with intuitive user interfaces and seamless wallet integration."
        },
        {
            title: "NFT Marketplaces",
            description: "Custom platforms for minting, trading, and showcasing Non-Fungible Tokens."
        },
        {
            title: "DeFi Solutions",
            description: "Decentralized Finance protocols for lending, borrowing, and trading."
        },
        {
            title: "Private Blockchain Networks",
            description: "Permissioned blockchains for enterprise use cases requiring privacy and control."
        },
        {
            title: "Tokenomics Design",
            description: "Strategic consulting on token economy models and utility."
        }
    ];

    const benefits = [
        "Enhanced security and transparency",
        "Elimination of intermediaries",
        "Immutable data records",
        "New monetization opportunities",
        "Global reach and accessibility",
        "Trustless automation via smart contracts"
    ];

    return (
        <ServicePage
            title="Blockchain & Web 3.0"
            subtitle="Building the decentralized future."
            description="Web 3.0 represents a paradigm shift towards a more open, transparent, and user-owned internet. We provide end-to-end blockchain development services to help you navigate this exciting landscape and build decentralized solutions."
            features={features}
            benefits={benefits}
        />
    );
}
