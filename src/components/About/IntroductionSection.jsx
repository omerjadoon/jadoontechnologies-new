"use client";

import { Sparkles, Rocket, Users } from "lucide-react";

export default function IntroductionSection() {
    return (
        <section className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    {/* Introduction Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl mb-6">
                            Who We Are
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
                    </div>

                    {/* Main Introduction Paragraph */}
                    <div className="prose prose-lg dark:prose-invert mx-auto mb-16">
                        <p className="text-lg leading-8 text-neutral-700 dark:text-neutral-300 text-center">
                            <span className="font-semibold text-blue-600 dark:text-blue-400">Jadoon Technologies</span> is a cutting-edge software development company specializing in building next-generation digital products that transform businesses. From mobile applications to intelligent AI platforms, we design, engineer, and scale innovative solutions that help organizations thrive in the digital age.
                        </p>
                        <p className="text-base leading-7 text-neutral-600 dark:text-neutral-400 text-center mt-6">
                            We partner with startups, enterprises, and visionary leaders to turn ambitious ideas into reality. Our team of expert engineers, designers, and strategists work collaboratively to deliver exceptional software that drives growth, efficiency, and competitive advantage.
                        </p>
                    </div>

                    {/* Key Highlights */}
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 mt-16">
                        <div className="relative group">
                            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white dark:from-neutral-900 dark:to-neutral-900/50 border border-neutral-200 dark:border-neutral-800 transition-all hover:shadow-xl hover:scale-105">
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white mb-4 group-hover:scale-110 transition-transform">
                                    <Sparkles className="h-7 w-7" />
                                </div>
                                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                                    Innovation First
                                </h3>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                    Pushing boundaries with cutting-edge technology and creative solutions
                                </p>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white dark:from-neutral-900 dark:to-neutral-900/50 border border-neutral-200 dark:border-neutral-800 transition-all hover:shadow-xl hover:scale-105">
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white mb-4 group-hover:scale-110 transition-transform">
                                    <Rocket className="h-7 w-7" />
                                </div>
                                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                                    Rapid Delivery
                                </h3>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                    Agile methodologies ensuring fast time-to-market without compromising quality
                                </p>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white dark:from-neutral-900 dark:to-neutral-900/50 border border-neutral-200 dark:border-neutral-800 transition-all hover:shadow-xl hover:scale-105">
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white mb-4 group-hover:scale-110 transition-transform">
                                    <Users className="h-7 w-7" />
                                </div>
                                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                                    Client-Centric
                                </h3>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                    Your success is our priority, with dedicated support every step of the way
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
