import siteMetadata from "@/src/utils/siteMetaData";

export const metadata = {
    title: "Terms of Service | Jadoon Technologies",
    description: "Terms of Service for Jadoon Technologies. Please read these terms carefully before using our website or services.",
};

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 pt-24 pb-20">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl mb-8">
                    Terms of Service
                </h1>

                <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>

                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using the website of Jadoon Technologies ("we," "us," or "our"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service.
                    </p>

                    <h2>2. Use License</h2>
                    <p>
                        Permission is granted to temporarily download one copy of the materials (information or software) on Jadoon Technologies' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                    </p>
                    <ul>
                        <li>modify or copy the materials;</li>
                        <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                        <li>attempt to decompile or reverse engineer any software contained on Jadoon Technologies' website;</li>
                        <li>remove any copyright or other proprietary notations from the materials; or</li>
                        <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                    </ul>
                    <p>
                        This license shall automatically terminate if you violate any of these restrictions and may be terminated by Jadoon Technologies at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
                    </p>

                    <h2>3. Disclaimer</h2>
                    <p>
                        The materials on Jadoon Technologies' website are provided "as is". Jadoon Technologies makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Jadoon Technologies does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site.
                    </p>

                    <h2>4. Limitations</h2>
                    <p>
                        In no event shall Jadoon Technologies or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on Jadoon Technologies' Internet site, even if Jadoon Technologies or a Jadoon Technologies authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                    </p>

                    <h2>5. Revisions and Errata</h2>
                    <p>
                        The materials appearing on Jadoon Technologies' web site could include technical, typographical, or photographic errors. Jadoon Technologies does not warrant that any of the materials on its web site are accurate, complete, or current. Jadoon Technologies may make changes to the materials contained on its web site at any time without notice. Jadoon Technologies does not, however, make any commitment to update the materials.
                    </p>

                    <h2>6. Links</h2>
                    <p>
                        Jadoon Technologies has not reviewed all of the sites linked to its Internet web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Jadoon Technologies of the site. Use of any such linked web site is at the user&apos;s own risk.
                    </p>

                    <h2>7. Governing Law</h2>
                    <p>
                        Any claim relating to Jadoon Technologies' web site shall be governed by the laws of the State of New Mexico without regard to its conflict of law provisions.
                    </p>

                    <h2>8. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please contact us at <a href={`mailto:${siteMetadata.email}`}>{siteMetadata.email}</a>.
                    </p>
                </div>
            </div>
        </main>
    );
}
