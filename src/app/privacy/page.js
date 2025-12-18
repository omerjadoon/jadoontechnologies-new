import siteMetadata from "@/src/utils/siteMetaData";

export const metadata = {
    title: "Privacy Policy | Jadoon Technologies",
    description: "Privacy Policy for Jadoon Technologies. Learn how we collect, use, and protect your data, including GDPR and HIPAA compliance.",
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 pt-24 pb-20">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl mb-8">
                    Privacy Policy
                </h1>

                <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>

                    <p>
                        At Jadoon Technologies ("we," "us," or "our"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                    </p>

                    <h2>1. Information We Collect</h2>
                    <p>
                        We may collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul>
                        <li>Fill out forms on our website (e.g., Contact Us, Project Inquiry).</li>
                        <li>Subscribe to our newsletter or blog updates.</li>
                        <li>Communicate with us via email or other channels.</li>
                    </ul>
                    <p>
                        The types of information we may collect include your name, email address, phone number, company name, and any other details you choose to provide.
                    </p>

                    <h2>2. How We Use Your Information</h2>
                    <p>
                        We use the information we collect to:
                    </p>
                    <ul>
                        <li>Provide, operate, and maintain our website and services.</li>
                        <li>Respond to your inquiries and support requests.</li>
                        <li>Send you updates, newsletters, and marketing communications (you can opt-out at any time).</li>
                        <li>Improve our website and user experience.</li>
                        <li>Comply with legal obligations.</li>
                    </ul>

                    <h2>3. GDPR Compliance (General Data Protection Regulation)</h2>
                    <p>
                        If you are a resident of the European Economic Area (EEA), you have certain data protection rights. Jadoon Technologies aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.
                    </p>
                    <p>
                        Your rights under GDPR include:
                    </p>
                    <ul>
                        <li><strong>The right to access:</strong> You have the right to request copies of your personal data.</li>
                        <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate.</li>
                        <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
                        <li><strong>The right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data.</li>
                        <li><strong>The right to object to processing:</strong> You have the right to object to our processing of your personal data.</li>
                        <li><strong>The right to data portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you.</li>
                    </ul>
                    <p>
                        To exercise any of these rights, please contact us at <a href={`mailto:${siteMetadata.email}`}>{siteMetadata.email}</a>.
                    </p>

                    <h2>4. HIPAA Compliance (Health Insurance Portability and Accountability Act)</h2>
                    <p>
                        Jadoon Technologies is committed to protecting the privacy and security of Protected Health Information (PHI) in compliance with the Health Insurance Portability and Accountability Act (HIPAA).
                    </p>
                    <p>
                        If we are engaged as a Business Associate to a Covered Entity (e.g., a healthcare provider or health plan), we will:
                    </p>
                    <ul>
                        <li>Enter into a Business Associate Agreement (BAA) to ensure the protection of PHI.</li>
                        <li>Implement appropriate administrative, physical, and technical safeguards to protect the confidentiality, integrity, and availability of electronic PHI (ePHI).</li>
                        <li>Ensure that any subcontractors or agents who access PHI on our behalf agree to the same restrictions and conditions.</li>
                        <li>Report any security incidents or breaches of unsecured PHI as required by law.</li>
                    </ul>
                    <p>
                        We do not collect or store PHI through our public-facing website unless explicitly stated and secured through appropriate channels.
                    </p>

                    <h2>5. Data Security</h2>
                    <p>
                        We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                    </p>

                    <h2>6. Third-Party Services</h2>
                    <p>
                        We may use third-party services (e.g., analytics providers, email marketing tools) that collect, monitor, and analyze data. These third parties have their own privacy policies addressing how they use such information.
                    </p>

                    <h2>7. Changes to This Privacy Policy</h2>
                    <p>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                    </p>

                    <h2>8. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us:
                    </p>
                    <ul>
                        <li>By email: <a href={`mailto:${siteMetadata.email}`}>{siteMetadata.email}</a></li>
                        <li>By visiting the contact page on our website: <a href="/contact">/contact</a></li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
