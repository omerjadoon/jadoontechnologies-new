export const metadata = {
    title: "Our Brand | Jadoon Technologies",
    description: "Discover the story and identity behind the Jadoon Technologies brand.",
};

export default function BrandPage() {
    return (
        <main className="bg-white dark:bg-slate-950 text-neutral-900 dark:text-white min-h-screen pt-24 pb-20">
            <section className="mx-auto max-w-4xl px-6 py-12">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-gradient-to-r from-[#2563eb] to-cyan-400 bg-clip-text text-transparent">
                    Our Brand
                </h1>
                <p className="text-xl text-neutral-600 dark:text-slate-300 mb-12 leading-relaxed">
                    Our brand represents our commitment to quality, innovation, and integrity. It reflects who we are and what we stand for.
                </p>

                <div className="grid gap-8 md:grid-cols-2">
                    <div className="p-8 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-neutral-200 dark:border-slate-800">
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Logo Assets</h2>
                        <p className="text-neutral-600 dark:text-slate-400 mb-4">
                            Download our official logo files for use in media and partnerships.
                        </p>
                        <button className="text-[#2563eb] font-medium hover:underline">Download Pack</button>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-neutral-200 dark:border-slate-800">
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Brand Guidelines</h2>
                        <p className="text-neutral-600 dark:text-slate-400 mb-4">
                            Learn how to correctly use our brand assets and maintain visual consistency.
                        </p>
                        <button className="text-[#2563eb] font-medium hover:underline">View Guidelines</button>
                    </div>
                </div>
            </section>
        </main>
    );
}
