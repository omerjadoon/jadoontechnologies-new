import IndustryPage from "@/src/components/Industries/IndustryPage";

export const metadata = {
    title: "Technology, Media & Telecom Solutions | Jadoon Technologies",
    description: "Driving digital transformation in the TMT sector with innovative solutions.",
};

export default function TmtPage() {
    const challenges = [
        {
            title: "Rapid Technological Change",
            description: "Keeping up with the fast pace of innovation and new standards like 5G."
        },
        {
            title: "Content Monetization",
            description: "Finding new revenue models for digital content in a saturated market."
        },
        {
            title: "Data Privacy & Regulation",
            description: "Navigating complex global regulations regarding user data."
        }
    ];

    const solutions = [
        {
            title: "OTT Platform Development",
            description: "Building scalable Over-The-Top media streaming platforms."
        },
        {
            title: "5G & IoT Solutions",
            description: "Leveraging high-speed connectivity for smart devices and applications."
        },
        {
            title: "Digital Rights Management",
            description: "Implementing secure DRM systems to protect intellectual property."
        },
        {
            title: "Telecom OSS/BSS Modernization",
            description: "Upgrading operational and business support systems for efficiency."
        }
    ];

    return (
        <IndustryPage
            title="Technology, Media & Telecom"
            subtitle="Connecting the world through innovation."
            description="The TMT sector is at the forefront of the digital revolution. We partner with companies to build the infrastructure and applications that power the next generation of connectivity and entertainment."
            challenges={challenges}
            solutions={solutions}
        />
    );
}
