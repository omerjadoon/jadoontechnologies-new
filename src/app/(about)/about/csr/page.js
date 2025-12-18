import { GraduationCap, Heart, Users, HandHeart, Globe, Lightbulb } from "lucide-react";

export const metadata = {
    title: "Corporate Social Responsibility | Jadoon Technologies",
    description: "Empowering communities through education, women empowerment, and service.",
};

export default function CsrPage() {
    return (
        <main className="bg-white dark:bg-slate-950 text-neutral-900 dark:text-white min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16 text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-gradient-to-r from-[#2563eb] to-cyan-400 bg-clip-text text-transparent">
                    Empowering Communities, Shaping Futures
                </h1>
                <p className="text-xl text-neutral-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                    At Jadoon Technologies, we believe that true success is measured by the impact we create. We are committed to uplifting society through education, empowerment, and dedicated community service.
                </p>
            </section>

            {/* Main Pillars */}
            <section className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Student Empowerment */}
                    <CsrCard
                        icon={<GraduationCap className="w-8 h-8" />}
                        title="Enabling University Students"
                        description="We are passionate about bridging the gap between academia and industry. Our mentorship programs and workshops equip university students with cutting-edge digital skills, preparing them to lead the next wave of innovation."
                        color="blue"
                    />

                    {/* Women Empowerment */}
                    <CsrCard
                        icon={<Heart className="w-8 h-8" />}
                        title="Women Empowerment"
                        description="We champion diversity and inclusion by actively supporting women in technology. Through targeted initiatives, we provide opportunities, resources, and a supportive environment for women to thrive and lead in the tech sector."
                        color="cyan"
                    />

                    {/* Community Service */}
                    <CsrCard
                        icon={<HandHeart className="w-8 h-8" />}
                        title="Community Service"
                        description="Giving back is at the core of our values. We actively engage in community service projects, dedicating our time and resources to address local needs and create a positive, lasting difference in the lives of those around us."
                        color="indigo"
                    />
                </div>
            </section>

            {/* Impact Stats / Additional Info */}
            <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20 mt-12 bg-slate-50 dark:bg-slate-900/50 rounded-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Commitment</h2>
                    <p className="text-neutral-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Building a better tomorrow through consistent action today.
                    </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-8 text-center">
                    <div className="p-6">
                        <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                            <Lightbulb className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Skill Development</h3>
                        <p className="text-sm text-neutral-600 dark:text-slate-400">
                            Hands-on training in AI, Blockchain, and Web Development.
                        </p>
                    </div>
                    <div className="p-6">
                        <div className="mx-auto w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-4">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Inclusive Growth</h3>
                        <p className="text-sm text-neutral-600 dark:text-slate-400">
                            Creating equal opportunities for all aspiring tech professionals.
                        </p>
                    </div>
                    <div className="p-6">
                        <div className="mx-auto w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                            <Globe className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Global Impact</h3>
                        <p className="text-sm text-neutral-600 dark:text-slate-400">
                            Fostering a culture of empathy and responsibility worldwide.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

function CsrCard({ icon, title, description, color }) {
    const colorClasses = {
        blue: "bg-blue-50 dark:bg-blue-900/10 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-900/20 group-hover:border-blue-500/50",
        cyan: "bg-cyan-50 dark:bg-cyan-900/10 text-cyan-600 dark:text-cyan-400 border-cyan-100 dark:border-cyan-900/20 group-hover:border-cyan-500/50",
        indigo: "bg-indigo-50 dark:bg-indigo-900/10 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-indigo-900/20 group-hover:border-indigo-500/50",
    };

    return (
        <div className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg group bg-white dark:bg-slate-900 ${colorClasses[color].split(' ').filter(c => c.startsWith('border')).join(' ')} border-slate-200 dark:border-slate-800`}>
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${colorClasses[color].split(' ').filter(c => !c.startsWith('border') && !c.startsWith('group')).join(' ')}`}>
                {icon}
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">{title}</h2>
            <p className="text-neutral-600 dark:text-slate-400 leading-relaxed">
                {description}
            </p>
        </div>
    );
}
