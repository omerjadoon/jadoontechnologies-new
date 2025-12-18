"use client";

import { Briefcase, Users, Award, Clock } from "lucide-react";

const stats = [
    {
        icon: Briefcase,
        value: "200+",
        label: "Projects Delivered",
        description: "Successfully completed projects across various industries"
    },
    {
        icon: Users,
        value: "150+",
        label: "Happy Clients",
        description: "Trusted by businesses worldwide"
    },
    {
        icon: Award,
        value: "98%",
        label: "Client Satisfaction",
        description: "Consistently exceeding expectations"
    },
    {
        icon: Clock,
        value: "6+",
        label: "Years of Excellence",
        description: "Delivering innovation since 2018"
    }
];

export default function StatsSection() {
    return (
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-900 dark:to-blue-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                        Our Impact in Numbers
                    </h2>
                    <p className="text-lg leading-8 text-blue-100">
                        Delivering excellence and driving success for our clients
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="group relative"
                            >
                                <div className="h-full p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all hover:scale-105 shadow-xl">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 text-white mb-4 group-hover:scale-110 transition-transform">
                                            <Icon className="h-7 w-7" />
                                        </div>
                                        <div className="text-4xl font-bold text-white mb-2">
                                            {stat.value}
                                        </div>
                                        <div className="text-lg font-semibold text-white mb-2">
                                            {stat.label}
                                        </div>
                                        <p className="text-sm text-blue-100">
                                            {stat.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
