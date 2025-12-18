"use client";

import Image from "next/image";
import Link from "next/link";

export default function FeatureSplitSection() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Feature 1: Image Right */}
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-blue-600">
                                Deploy faster
                            </h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                A better workflow
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
                                impedit perferendis suscipit eaque, iste dolor cupiditate
                                blanditiis ratione.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-300">
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-gray-900 dark:text-white">
                                        <div className="absolute left-1 top-1 h-5 w-5 text-blue-600">
                                            {/* Icon placeholder */}
                                            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                            </svg>
                                        </div>
                                        Push to deploy.
                                    </dt>{" "}
                                    <dd className="inline">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Maiores impedit perferendis suscipit eaque, iste dolor.
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <div className="relative">
                        {/* Placeholder for image - using a colored div for now if no image is available, or a generic placeholder */}
                        <div className="aspect-[16/9] w-full rounded-xl bg-gray-900/5 dark:bg-white/5 object-cover shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-gray-400">
                                Image Placeholder
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature 2: Image Left */}
                <div className="mx-auto mt-24 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
                    <div className="lg:order-last lg:pl-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-blue-600">
                                SSL Certificates
                            </h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                Secured connections
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                                fugiat aliqua.
                            </p>
                            <div className="mt-8">
                                <Link href="#" className="text-sm font-semibold leading-6 text-blue-600">
                                    Learn more <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="relative lg:order-first">
                        <div className="aspect-[16/9] w-full rounded-xl bg-gray-900/5 dark:bg-white/5 object-cover shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] lg:w-full overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-indigo-500/20 to-blue-500/20 flex items-center justify-center text-gray-400">
                                Image Placeholder
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
