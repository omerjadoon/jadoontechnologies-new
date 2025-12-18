export const metadata = {
    title: "Our Leadership | Jadoon Technologies",
    description: "Meet the leaders driving Jadoon Technologies forward.",
};

export default function LeadershipPage() {
    const leaders = [
        {
            name: "Omer Khan Jadoon",
            role: "Founder & CEO",
            bio: "A visionary leader driving innovation and strategic growth at Jadoon Technologies.",
            image: "/avatar.svg"
        },
        {
            name: "Mohsin Ali",
            role: "Managing Director",
            bio: "Overseeing global operations and ensuring excellence in service delivery.",
            image: "/avatar.svg"
        },
        {
            name: "Ahsan Khan",
            role: "Project Manager",
            bio: "Leading projects to success with a focus on quality, timelines, and client satisfaction.",
            image: "/avatar.svg"
        }
    ];

    return (
        <main className="bg-white dark:bg-slate-950 text-neutral-900 dark:text-white min-h-screen pt-24 pb-20">
            <section className="mx-auto max-w-6xl px-6 py-12">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-gradient-to-r from-[#2563eb] to-cyan-400 bg-clip-text text-transparent">
                    Our Leadership
                </h1>
                <p className="text-xl text-neutral-600 dark:text-slate-300 mb-12 leading-relaxed max-w-3xl">
                    Meet the visionaries guiding Jadoon Technologies towards a future of innovation and excellence.
                </p>

                <div className="grid gap-8 md:grid-cols-3">
                    {leaders.map((leader, index) => (
                        <div key={index} className="p-6 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-neutral-200 dark:border-slate-800 text-center group hover:border-blue-500/50 transition-colors">
                            <div className="w-40 h-40 mx-auto bg-neutral-200 dark:bg-slate-800 rounded-full mb-6 overflow-hidden ring-4 ring-white dark:ring-slate-800 shadow-lg">
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-1">{leader.name}</h2>
                            <p className="text-[#2563eb] text-sm font-medium mb-4 uppercase tracking-wider">{leader.role}</p>
                            <p className="text-neutral-600 dark:text-slate-400 text-sm leading-relaxed">{leader.bio}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
