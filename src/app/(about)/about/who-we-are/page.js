import { Rocket, Target, Heart, Code, Globe, Zap, Users, ShieldCheck } from "lucide-react";

export const metadata = {
    title: "Who We Are | Jadoon Technologies",
    description: "Our story, mission, and vision. Your Vision - Our Code.",
};

export default function WhoWeArePage() {
    return (
        <main className="bg-white dark:bg-slate-950 text-neutral-900 dark:text-white min-h-screen pt-24 pb-20 overflow-hidden">
            {/* Hero Section */}
            <section className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24 text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 dark:bg-blue-500/20 blur-[100px] rounded-full -z-10 pointer-events-none" />

                <h1 className="text-5xl font-bold tracking-tight sm:text-7xl mb-6 bg-gradient-to-r from-[#2563eb] via-cyan-500 to-[#2563eb] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                    Your Vision - Our Code
                </h1>
                <p className="text-xl sm:text-2xl text-neutral-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                    We are more than just developers; we are your strategic partners in digital transformation. Revolutionizing the world with emerging technologies to make life easier.
                </p>
            </section>

            {/* Our Story Timeline */}
            <section className="mx-auto max-w-5xl px-6 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Journey</h2>
                    <p className="text-neutral-600 dark:text-slate-400 max-w-2xl mx-auto">
                        From humble beginnings to global innovation.
                    </p>
                </div>

                <div className="relative border-l-2 border-blue-100 dark:border-slate-800 ml-4 md:ml-0 md:pl-0 space-y-12 md:space-y-0">
                    {/* 2018 */}
                    <div className="relative md:flex items-center justify-between group">
                        <div className="hidden md:block w-[45%] text-right pr-8">
                            <h3 className="text-2xl font-bold text-[#2563eb]">2018</h3>
                            <h4 className="text-xl font-semibold mt-1">The Beginning</h4>
                            <p className="mt-2 text-neutral-600 dark:text-slate-400">
                                Started as a small, passionate team in Abbottabad, Pakistan. We focused on crafting high-quality mobile and web applications, laying the foundation for our engineering excellence.
                            </p>
                        </div>
                        <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full ring-4 ring-white dark:ring-slate-950 group-hover:scale-125 transition-transform duration-300" />
                        <div className="pl-8 md:pl-8 md:w-[45%] md:hidden">
                            <h3 className="text-2xl font-bold text-[#2563eb]">2018</h3>
                            <h4 className="text-xl font-semibold mt-1">The Beginning</h4>
                            <p className="mt-2 text-neutral-600 dark:text-slate-400">
                                Started as a small, passionate team in Abbottabad, Pakistan. We focused on crafting high-quality mobile and web applications.
                            </p>
                        </div>
                        {/* Empty right side for desktop alignment */}
                        <div className="hidden md:block w-[45%]" />
                    </div>

                    {/* 2020 */}
                    <div className="relative md:flex items-center justify-between group">
                        {/* Empty left side for desktop alignment */}
                        <div className="hidden md:block w-[45%]" />

                        <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full ring-4 ring-white dark:ring-slate-950 group-hover:scale-125 transition-transform duration-300" />

                        <div className="pl-8 md:pl-8 md:w-[45%]">
                            <h3 className="text-2xl font-bold text-cyan-500">2020</h3>
                            <h4 className="text-xl font-semibold mt-1">The Evolution</h4>
                            <p className="mt-2 text-neutral-600 dark:text-slate-400">
                                Shifted our focus towards the future: Artificial Intelligence and Blockchain. We expanded our capabilities to tackle complex, data-driven problems.
                            </p>
                        </div>
                    </div>

                    {/* Today */}
                    <div className="relative md:flex items-center justify-between group">
                        <div className="hidden md:block w-[45%] text-right pr-8">
                            <h3 className="text-2xl font-bold text-[#2563eb]">Today</h3>
                            <h4 className="text-xl font-semibold mt-1">Global Innovation Partner</h4>
                            <p className="mt-2 text-neutral-600 dark:text-slate-400">
                                We are a full-service digital partner for businesses worldwide. From requirements to maintenance, we stand by your side to revolutionize your industry.
                            </p>
                        </div>
                        <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full ring-4 ring-white dark:ring-slate-950 group-hover:scale-125 transition-transform duration-300" />
                        <div className="pl-8 md:pl-8 md:w-[45%] md:hidden">
                            <h3 className="text-2xl font-bold text-[#2563eb]">Today</h3>
                            <h4 className="text-xl font-semibold mt-1">Global Innovation Partner</h4>
                            <p className="mt-2 text-neutral-600 dark:text-slate-400">
                                We are a full-service digital partner for businesses worldwide. From requirements to maintenance, we stand by your side.
                            </p>
                        </div>
                        {/* Empty right side for desktop alignment */}
                        <div className="hidden md:block w-[45%]" />
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl my-12">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 relative overflow-hidden group hover:shadow-md transition-all">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Target className="w-24 h-24 text-blue-500" />
                        </div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
                                <Target className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold">Our Mission</h2>
                        </div>
                        <p className="text-lg text-neutral-600 dark:text-slate-300 leading-relaxed">
                            To help businesses by becoming their true business partners. We believe in supporting you through every step of digital product development—from the initial requirement and design phase to development, deployment, and ongoing maintenance. Our support is always available.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 relative overflow-hidden group hover:shadow-md transition-all">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Rocket className="w-24 h-24 text-cyan-500" />
                        </div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl text-cyan-600 dark:text-cyan-400">
                                <Rocket className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold">Our Vision</h2>
                        </div>
                        <p className="text-lg text-neutral-600 dark:text-slate-300 leading-relaxed">
                            To revolutionize the world with emerging technologies. We are driven by a desire to make people&apos;s lives easier and businesses more efficient through the power of AI, Blockchain, and cutting-edge software solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Core Values</h2>
                    <p className="text-neutral-600 dark:text-slate-400 max-w-2xl mx-auto">
                        The principles that guide every line of code we write and every partnership we build.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ValueCard
                        icon={<Heart className="w-6 h-6" />}
                        title="Client-Centric"
                        desc="Your success is our success. We treat your business like our own."
                    />
                    <ValueCard
                        icon={<Zap className="w-6 h-6" />}
                        title="Innovation"
                        desc="We constantly explore new technologies to keep you ahead of the curve."
                    />
                    <ValueCard
                        icon={<ShieldCheck className="w-6 h-6" />}
                        title="Integrity"
                        desc="Transparent communication and honest partnerships are our foundation."
                    />
                    <ValueCard
                        icon={<Users className="w-6 h-6" />}
                        title="Collaboration"
                        desc="We work with you, not just for you, ensuring your vision is realized."
                    />
                </div>
            </section>
        </main>
    );
}

function ValueCard({ icon, title, desc }) {
    return (
        <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-colors text-center group">
            <div className="w-12 h-12 mx-auto bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm mb-4 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-sm text-neutral-600 dark:text-slate-400">
                {desc}
            </p>
        </div>
    );
}
