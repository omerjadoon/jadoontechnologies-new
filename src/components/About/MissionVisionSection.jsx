"use client";

import { Target, Eye } from "lucide-react";

export default function MissionVisionSection() {
    return (
        <section className="bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl mb-6">
                        Our Purpose
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {/* Mission */}
                    <div className="relative group">
                        <div className="h-full p-8 rounded-3xl bg-white dark:bg-neutral-900 border-2 border-blue-100 dark:border-blue-900/30 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25">
                                    <Target className="h-8 w-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                                    Our Mission
                                </h3>
                            </div>
                            <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                                To empower businesses worldwide with innovative technology solutions that drive growth, efficiency, and competitive advantage. We are committed to delivering exceptional software that transforms ideas into impactful digital experiences.
                            </p>
                        </div>
                    </div>

                    {/* Vision */}
                    <div className="relative group">
                        <div className="h-full p-8 rounded-3xl bg-white dark:bg-neutral-900 border-2 border-blue-100 dark:border-blue-900/30 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25">
                                    <Eye className="h-8 w-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                                    Our Vision
                                </h3>
                            </div>
                            <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                                To be the global leader in digital transformation, recognized for delivering exceptional software solutions that shape the future of industries. We envision a world where technology seamlessly enhances every aspect of business and life.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
