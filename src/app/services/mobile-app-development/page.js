import ServicePage from "@/src/components/Services/ServicePage";

export const metadata = {
    title: "Mobile App Development Services | Jadoon Technologies",
    description: "Native and cross-platform mobile app development for iOS and Android.",
};

export default function MobileAppDevelopmentPage() {
    const features = [
        {
            title: "iOS App Development",
            description: "Native iOS applications built with Swift and SwiftUI for the best performance and user experience."
        },
        {
            title: "Android App Development",
            description: "Robust Android apps built with Kotlin and Jetpack Compose to reach a global audience."
        },
        {
            title: "Cross-Platform Development",
            description: "Cost-effective apps using React Native and Flutter that work seamlessly on both iOS and Android."
        },
        {
            title: "App UI/UX Design",
            description: "Intuitive and engaging mobile interfaces designed to maximize user retention."
        },
        {
            title: "App Maintenance & Support",
            description: "Regular updates, bug fixes, and performance monitoring to keep your app running smoothly."
        },
        {
            title: "IoT Mobile Integration",
            description: "Connect your mobile app with smart devices and IoT ecosystems for innovative solutions."
        }
    ];

    const benefits = [
        "Faster time to market with cross-platform solutions",
        "Native performance and feel",
        "Secure and scalable architecture",
        "Seamless integration with device features",
        "User-centric design approach",
        "Comprehensive testing and quality assurance"
    ];

    return (
        <ServicePage
            title="Mobile App Development"
            subtitle="Apps that users love and businesses rely on."
            description="From concept to launch, we build mobile applications that deliver exceptional user experiences. Whether you need a native app for maximum performance or a cross-platform solution for wider reach, we have the expertise to bring your vision to life."
            features={features}
            benefits={benefits}
        />
    );
}
