import { defineConfig, s } from 'velite'
import GithubSlugger from "github-slugger"
import readingTime from "reading-time"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

const codeOptions = {
  theme: 'github-dark',
  grid: false,
}

// Define the blog schema
const blog = s
  .object({
    title: s.string(),
    publishedAt: s.isodate(),
    updatedAt: s.isodate(),
    description: s.string(),
    image: s.image(),
    isPublished: s.boolean().default(true),
    author: s.string(),
    tags: s.array(s.string()),
    body: s.mdx(),
    toc: s.toc(),
    slug: s.string(),
  })
  .transform(data => {
    return {
      ...data,
      url: `/insights/blog/${data.slug}`,
      readingTime: readingTime(data.body),
      //   toc: headings,
      image: {
        ...data.image,
        src: data.image.src.replace("/static", "/blogs"),
      },
    }
  })

export default defineConfig({
  root: 'content',
  collections: {
    blogs: {
      name: 'Blog',
      pattern: 'blogs/**/*.mdx',
      schema: blog,
    },
    caseStudies: {
      name: 'CaseStudy',
      pattern: 'case-studies/**/*.mdx',
      schema: s
        .object({
          title: s.string(),
          publishedAt: s.isodate(),
          updatedAt: s.isodate(),
          description: s.string(),
          image: s.image(),
          isPublished: s.boolean().default(true),
          author: s.string(),
          tags: s.array(s.string()),
          body: s.mdx(),
          toc: s.toc(),
          slug: s.string(),
          // Modern design fields
          category: s.string().optional(),
          color: s.enum(['blue', 'emerald', 'purple', 'indigo', 'rose', 'amber']).default('blue'),
          stats: s.array(s.object({
            label: s.string(),
            value: s.string(),
            icon: s.string().optional() // Icon name from lucide-react
          })).optional(),
        })
        .transform(data => {
          return {
            ...data,
            url: `/case-studies/${data.slug}`,
            readingTime: readingTime(data.body),
            image: {
              ...data.image,
              src: data.image.src.replace("/static", "/blogs"),
            },
          }
        }),
    },
  },
  output: {
    data: '.velite/generated',
    assets: 'public/blogs',
    clean: true,
  },
  // Add MDX plugins
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "append" }],
      [rehypePrettyCode, codeOptions]
    ]
  }
})
