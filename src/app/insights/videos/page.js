export const metadata = {
    title: "Videos | Jadoon Technologies",
    description: "Watch our latest insights, tutorials, and tech talks.",
};

export default function VideosPage() {
    const videos = [
        {
            title: "JPOS (Point Of Sale)",
            description: "JPOS is a Point of Sale (POS) system that allows businesses to manage their sales and inventory.",
            url: "https://www.youtube.com/embed/NBTHSPd5XVw?si=xfdM33SfctO7oxfp" // Placeholder
        }
    ];

    return (
        <main className="bg-white dark:bg-slate-950 text-neutral-900 dark:text-white min-h-screen pt-24 pb-20">
            <section className="mx-auto max-w-6xl px-6 py-12">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-gradient-to-r from-[#2563eb] to-cyan-400 bg-clip-text text-transparent">
                    Videos
                </h1>
                <p className="text-xl text-neutral-600 dark:text-slate-300 mb-12 leading-relaxed">
                    Watch our latest tech talks, tutorials, and company updates.
                </p>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {videos.map((video, index) => (
                        <div key={index} className="group rounded-2xl bg-gray-50 dark:bg-slate-900 border border-neutral-200 dark:border-slate-800 overflow-hidden hover:border-[#2563eb]/50 transition-colors">
                            <div className="aspect-video bg-neutral-200 dark:bg-slate-800 flex items-center justify-center">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={video.url}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="p-6">
                                <h2 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-[#2563eb] transition-colors">
                                    {video.title}
                                </h2>
                                <p className="text-neutral-600 dark:text-slate-400 text-sm">
                                    {video.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
