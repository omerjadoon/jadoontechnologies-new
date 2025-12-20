"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQList({ faqs }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="border border-neutral-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-slate-900/50 transition-all duration-300"
                >
                    <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 dark:hover:bg-slate-800/50 transition-colors"
                    >
                        <div className="flex items-center gap-4">
                            <div className="text-[#2563eb] dark:text-cyan-400">
                                {faq.icon}
                            </div>
                            <span className="text-lg font-semibold">{faq.question}</span>
                        </div>
                        {openIndex === index ? (
                            <ChevronUp className="w-5 h-5 text-neutral-400" />
                        ) : (
                            <ChevronDown className="w-5 h-5 text-neutral-400" />
                        )}
                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <div className="p-6 pt-0 border-t border-neutral-100 dark:border-slate-800 text-neutral-600 dark:text-slate-400 leading-relaxed whitespace-pre-line">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
