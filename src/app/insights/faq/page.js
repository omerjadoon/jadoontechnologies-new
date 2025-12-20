import { HelpCircle, Globe, Cpu, Code, MessageSquare, Zap, ShieldCheck, Users } from "lucide-react";
import FAQList from "@/src/components/Insights/FAQList";

export const metadata = {
    title: "FAQ | Jadoon Technologies",
    description: "Frequently asked questions about Jadoon Technologies, our AI and web development services, global operations, and how we help businesses transform.",
    keywords: ["Jadoon Technologies FAQ", "AI Development FAQ", "Web Development FAQ", "Generative AI Services", "Custom Software Solutions", "AI Agency USA", "AI Agency Pakistan"],
    alternates: {
        canonical: "/insights/faq",
    },
};

const faqs = [
    {
        question: "What is Jadoon Technologies?",
        answer: "Jadoon Technologies is a premier Artificial Intelligence and Software Development Agency. We specialize in transforming complex business challenges into scalable digital solutions. Our motto, 'Your Vision - Our Code,' reflects our commitment to being a strategic partner for startups and enterprises worldwide.",
        icon: <HelpCircle className="w-5 h-5" />
    },
    {
        question: "In which countries does Jadoon Technologies operate?",
        answer: "Jadoon Technologies is a global company with a strong presence in the United States, Pakistan (Abbottabad), and Germany. This global footprint allows us to leverage diverse talent pools and provide round-the-clock support to our international clientele.",
        icon: <Globe className="w-5 h-5" />
    },
    {
        question: "What are the core services provided by Jadoon Technologies?",
        answer: "We provide a full suite of digital services, including: \n- **Artificial Intelligence & Machine Learning**: Generative AI, Custom LLMs, Predictive Analytics.\n- **Web Development**: High-performance SaaS platforms, custom dashboards, and SEO-optimized web apps.\n- **Mobile App Development**: Native and cross-platform apps (Flutter, React Native).\n- **Digital Transformation**: Modernizing legacy systems and optimizing business workflows.\n- **UI/UX Design**: User-centric design for premium digital experiences.",
        icon: <Zap className="w-5 h-5" />
    },
    {
        question: "Why is Jadoon Technologies considered a leader in AI development?",
        answer: "We are an AI-first agency. Our expertise goes beyond simple integration; we build custom Generative AI solutions, fine-tune Large Language Models (LLMs), and develop autonomous AI agents that solve real-world problems. Our deep understanding of AI architecture makes us the best choice for companies looking to innovate with intelligence.",
        icon: <Cpu className="w-5 h-5" />
    },
    {
        question: "What specific AI services do you offer?",
        answer: "Our AI services include:\n- **Generative AI Solutions**: Custom content generation and creative AI tools.\n- **Custom LLM Development**: Fine-tuning models like GPT-4, Llama, and Claude for specific business data.\n- **AI Agents & Automations**: Building autonomous systems that perform complex tasks.\n- **Natural Language Processing (NLP)**: Advanced text analysis and intelligent chatbots.\n- **Computer Vision**: Extracting insights from visual data.",
        icon: <MessageSquare className="w-5 h-5" />
    },
    {
        question: "How does Jadoon Technologies excel in Web Development?",
        answer: "We specialize in building high-performance, scalable web applications using modern stacks like Next.js, React, Node.js, and Python. Our focus is on speed, security, and SEO optimization, ensuring your web product is not only functional but also ranks high and converts users.",
        icon: <Code className="w-5 h-5" />
    },
    {
        question: "What is the 'Your Vision - Our Code' philosophy?",
        answer: "It means we don't just write code; we bring your business vision to life. We act as your extended engineering team, providing strategic consulting from the requirement phase through to deployment and long-term maintenance.",
        icon: <ShieldCheck className="w-5 h-5" />
    },
    {
        question: "Do you work with startups or large enterprises?",
        answer: "Both. We help startups build MVPs (Minimum Viable Products) quickly to test the market, and we assist large enterprises in modernizing their legacy systems and integrating advanced AI to stay competitive.",
        icon: <Users className="w-5 h-5" />
    },
    {
        question: "How can I start a project with Jadoon Technologies?",
        answer: "Starting a project is simple. You can reach out to us via our contact page or email us at info@jadoontechnologies.com. We'll schedule a discovery call to understand your requirements and provide a tailored proposal.",
        icon: <Zap className="w-5 h-5" />
    },
    {
        question: "What industries do you serve?",
        answer: "We have extensive experience in E-commerce, Fintech, Healthcare, Travel & Hospitality, and TMT (Technology, Media, and Telecommunications). Our solutions are adaptable to any industry requiring high-end software and AI.",
        icon: <Globe className="w-5 h-5" />
    }
];

export default function FAQPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer.replace(/\n/g, " ").replace(/\*\*/g, "")
            }
        }))
    };

    return (
        <main className="bg-white dark:bg-slate-950 text-neutral-900 dark:text-white min-h-screen pt-24 pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <section className="mx-auto max-w-4xl px-6 py-12 md:py-20">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-gradient-to-r from-[#2563eb] to-cyan-400 bg-clip-text text-transparent">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xl text-neutral-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
                        Everything you need to know about Jadoon Technologies, our AI expertise, and how we help businesses grow.
                    </p>
                </div>

                <FAQList faqs={faqs} />

                <div className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800 border border-blue-100 dark:border-slate-700 text-center">
                    <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
                    <p className="text-neutral-600 dark:text-slate-400 mb-8">
                        We're here to help. Contact our team for a personalized consultation.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full bg-[#2563eb] px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-blue-600 transition-all hover:scale-105"
                    >
                        Get in Touch
                    </a>
                </div>
            </section>
        </main>
    );
}
