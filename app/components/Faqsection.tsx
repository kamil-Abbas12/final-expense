"use client";

import { useState } from "react";
import { faqs } from "@/data";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white dark:bg-gray-950 py-20 px-5">
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
          FAQ
        </div>
        <h2 className="mb-4 text-center text-3xl font-semibold tracking-tight text-gray-900 dark:text-white md:text-4xl">
          Common questions answered
        </h2>
        <p className="mb-12 text-center text-base text-gray-500 dark:text-gray-400">
          Still have questions? Call us at{" "}
          <a href="tel:8669635898" className="text-emerald-600 dark:text-emerald-400 hover:underline">
            866-963-5898
          </a>{" "}
          to speak with a licensed agent.
        </p>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-900/60 overflow-hidden transition-all hover:border-emerald-200 dark:hover:border-emerald-800"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-sm font-medium text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={16}
                  className={`shrink-0 text-gray-400 transition-transform duration-200 ${
                    open === i ? "rotate-180 text-emerald-600 dark:text-emerald-400" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="border-t border-gray-100 dark:border-gray-800 px-6 py-4">
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}