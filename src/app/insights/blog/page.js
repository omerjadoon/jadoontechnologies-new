import { blogs } from "@/.velite/generated";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

export const metadata = {
    title: "Blog | Jadoon Technologies",
    description: "Latest trends, tech insights, and company updates from Jadoon Technologies.",
};

export default function BlogListingPage() {
    const allBlogs = blogs || [];

    return (
        <main className="bg-white dark:bg-slate-950 text-neutral-900 dark:text-white min-h-screen pt-24 pb-20">
            <section className="mx-auto max-w-6xl px-6 py-12">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-gradient-to-r from-[#2563eb] to-cyan-400 bg-clip-text text-transparent">
                    Our Blog
                </h1>
                <p className="text-xl text-neutral-600 dark:text-slate-300 mb-12 leading-relaxed max-w-3xl">
                    Insights, tutorials, and updates from our team of experts.
                </p>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {allBlogs.map((blog) => (
                        <Link
                            key={blog.slug}
                            href={`/insights/blog/${blog.slug}`}
                            className="group block rounded-2xl border border-neutral-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 overflow-hidden hover:border-[#2563eb]/50 transition-colors"
                        >
                            <div className="aspect-video relative bg-neutral-200 dark:bg-slate-800">
                                {blog.image && (
                                    <Image
                                        src={blog.image.src}
                                        alt={blog.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                )}
                            </div>
                            <div className="p-6">
                                <div className="flex gap-2 mb-3">
                                    {blog.tags && blog.tags.slice(0, 2).map(tag => (
                                        <span key={tag} className="text-xs font-medium text-[#2563eb] bg-[#2563eb]/10 px-2 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-[#2563eb] transition-colors line-clamp-2">
                                    {blog.title}
                                </h2>
                                <p className="text-neutral-600 dark:text-slate-400 text-sm line-clamp-3 mb-4">
                                    {blog.description}
                                </p>
                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-100 dark:border-slate-800">
                                    <span className="text-xs text-neutral-500 dark:text-slate-500">
                                        {format(new Date(blog.publishedAt), "MMM dd, yyyy")}
                                    </span>
                                    <span className="text-xs font-semibold text-[#2563eb]">
                                        Read More →
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {allBlogs.length === 0 && (
                    <div className="text-center py-20 text-slate-500">
                        <p>No blog posts found. Check back soon!</p>
                    </div>
                )}
            </section>
        </main>
    );
}
