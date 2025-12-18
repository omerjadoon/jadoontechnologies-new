export const metadata = {
    title: "Data Standards | Jadoon Technologies",
    description: "Why data standards matter and how we implement them.",
};

export default function DataStandardsPage() {
    return (
        <main className="bg-white dark:bg-slate-950 text-neutral-900 dark:text-white min-h-screen pt-24 pb-20">
            <section className="mx-auto max-w-4xl px-6 py-12">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-gradient-to-r from-[#2563eb] to-cyan-400 bg-clip-text text-transparent">
                    Data Standards
                </h1>
                <p className="text-xl text-neutral-600 dark:text-slate-300 mb-12 leading-relaxed">
                    Why data standards matter and how they ensure interoperability and quality.
                </p>

                <div className="prose prose-lg prose-neutral dark:prose-invert">
                    <p>
                        Data standards are the rules by which data are described and recorded. In order to share, exchange, and understand data, we must standardize the format as well as the meaning.
                    </p>

                    <h3>What are Data Standards?</h3>
                    <p>
                        Data standards are agreed-upon rules for how data should be recorded, formatted, and described. They ensure that data is consistent, accurate, and interoperable across different systems and organizations.
                    </p>

                    <h3>The Importance of Standardization</h3>
                    <ul>
                        <li><strong>Interoperability:</strong> Enables seamless data exchange between different systems and applications.</li>
                        <li><strong>Data Quality:</strong> Reduces errors and inconsistencies, leading to more reliable insights.</li>
                        <li><strong>Efficiency:</strong> Streamlines data processing and analysis, saving time and resources.</li>
                        <li><strong>Compliance:</strong> Helps organizations meet regulatory requirements for data reporting and privacy.</li>
                    </ul>

                    <h3>Our Approach</h3>
                    <p>
                        At Jadoon Technologies, we prioritize data standards in all our projects. Whether we are building a new application, migrating data to the cloud, or implementing an analytics solution, we ensure that your data is structured, standardized, and ready for the future.
                    </p>
                </div>
            </section>
        </main>
    );
}
