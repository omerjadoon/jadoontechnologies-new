"use client";

import { Lightbulb, Award, Shield, Handshake, Heart } from "lucide-react";

const values = [
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "Pushing boundaries with cutting-edge technology and creative problem-solving to deliver solutions that set new industry standards."
    },
    {
        icon: Award,
        title: "Excellence",
        description: "Committed to delivering the highest quality in every project, ensuring exceptional results that exceed expectations."
    },
    {
        icon: Shield,
        title: "Integrity",
        description: "Building trust through transparency, honesty, and ethical practices in all our business relationships."
    },
    {
        icon: Handshake,
        title: "Collaboration",
        description: "Partnering closely with clients and teams to achieve shared goals and create lasting success together."
    },
    {
        icon: Heart,
        title: "Client-Centric",
        description: "Your success is our priority. We go above and beyond to ensure your vision becomes reality."
    }
];

export default function CoreValuesSection() {
    return (
        <section className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl mb-6">
                        Our Core Values
                    </h2>
                    <p className="text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                        The principles that guide everything we do
                    </p>
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mt-6"></div>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <div
                                key={index}
                                className="group relative"
                            >
                                <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-900/50 border border-neutral-200 dark:border-neutral-800 shadow-lg hover:shadow-2xl transition-all hover:scale-105 hover:border-blue-300 dark:hover:border-blue-700">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/25">
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
