"use client";

import { Calendar, TrendingUp, Globe, Zap } from "lucide-react";

const milestones = [
    {
        year: "2018",
        title: "Foundation",
        description: "Jadoon Technologies was founded with a vision to transform businesses through innovative software solutions.",
        icon: Calendar
    },
    {
        year: "2020",
        title: "Rapid Growth",
        description: "Expanded our team and service offerings, delivering cutting-edge mobile and web applications to clients worldwide.",
        icon: TrendingUp
    },
    {
        year: "2022",
        title: "Global Reach",
        description: "Established partnerships across multiple continents, serving startups and enterprises in diverse industries.",
        icon: Globe
    },
    {
        year: "2024",
        title: "AI Innovation",
        description: "Pioneered AI-first development practices, integrating intelligent automation into every solution we build.",
        icon: Zap
    }
];

export default function OurStorySection() {
    return (
        <section className="bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl mb-6">
                        Our Journey
                    </h2>
                    <p className="text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                        Building the future, one innovation at a time
                    </p>
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mt-6"></div>
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-400 to-blue-600 hidden lg:block"></div>

                    <div className="space-y-12">
                        {milestones.map((milestone, index) => {
                            const Icon = milestone.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    className={`relative flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                        } flex-col gap-8`}
                                >
                                    {/* Content */}
                                    <div className={`lg:w-5/12 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center`}>
                                        <div className="inline-block p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                                            <div className={`flex items-center gap-4 mb-4 ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex-row justify-center lg:justify-start`}>
                                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25">
                                                    <Icon className="h-6 w-6" />
                                                </div>
                                                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                                    {milestone.year}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                                                {milestone.title}
                                            </h3>
                                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                                {milestone.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Center dot */}
                                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                                        <div className="h-4 w-4 rounded-full bg-blue-600 border-4 border-white dark:border-neutral-950 shadow-lg"></div>
                                    </div>

                                    {/* Spacer */}
                                    <div className="hidden lg:block lg:w-5/12"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
