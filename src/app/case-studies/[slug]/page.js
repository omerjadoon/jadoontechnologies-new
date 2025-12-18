import { caseStudies } from '@/.velite/generated'
import { slug as slugify } from "github-slugger";
import Image from "next/image";
import { notFound } from "next/navigation";
import siteMetadata from "@/src/utils/siteMetaData";
import RenderMdx from "@/src/components/Blog/RenderMdx";
import Tag from "@/src/components/Elements/Tag";

export async function generateStaticParams() {
    return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const study = caseStudies.find((study) => study.slug === slug);
    if (!study) {
        return;
    }

    return {
        title: study.title,
        description: study.description,
        openGraph: {
            title: study.title,
            description: study.description,
            url: siteMetadata.siteUrl + study.url,
            siteName: siteMetadata.title,
            images: [study.image.src],
            locale: "en_US",
            type: "article",
        },
    };
}

export default async function CaseStudyPage({ params }) {
    const { slug } = await params;
    const study = caseStudies.find((study) => study.slug === slug);

    if (!study) {
        notFound()
    }

    return (
        <article className="mt-12 mb-24 text-dark dark:text-light">
            <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
                <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex gap-2 mb-4">
                        {study.tags && study.tags.map(tag => (
                            <Tag
                                key={tag}
                                name={tag}
                                link={`/categories/${slugify(tag)}`}
                                className="px-6 text-sm py-2"
                            />
                        ))}
                    </div>
                    <h1
                        className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6"
                    >
                        {study.title}
                    </h1>
                </div>
                <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40" />
                {study.image && (
                    <Image
                        src={study.image.src}
                        placeholder="blur"
                        blurDataURL={study.image.blurDataURL}
                        alt={study.title}
                        fill
                        className="object-cover object-center"
                        priority
                    />
                )}
            </div>

            <div className="grid grid-cols-12 gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-5 md:px-10">
                <div className="col-span-12 lg:col-span-8 lg:col-start-3">
                    <RenderMdx blog={study} />
                </div>
            </div>
        </article>
    );
}
