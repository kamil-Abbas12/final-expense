"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I need a medical exam to qualify?",
    answer:
      "No medical exam is required. Final expense insurance is designed to be accessible — eligibility is determined by a few simple health questions, not a physical exam.",
  },
  {
    question: "What ages are eligible for coverage?",
    answer:
      "Most plans are available to applicants between ages 50 and 85. Some carriers extend eligibility to age 89. A licensed agent can help you find the best option for your age.",
  },
  {
    question: "How much does final expense coverage cost?",
    answer:
      "Premiums vary based on your age, health history, and desired coverage amount. Plans start as low as $20 per month. Your quote will reflect your specific situation with no obligation.",
  },
  {
    question: "When does my coverage begin?",
    answer:
      "Accidental death coverage begins on day one. Full natural death coverage typically begins immediately for qualified applicants, though some plans include a 2-year graded period for certain health conditions.",
  },
  {
    question: "Can my premium ever increase?",
    answer:
      "No. Once you enroll, your premium is locked in for life. It will never increase regardless of changes in your age or health, and your coverage amount will never decrease.",
  },
  {
    question: "How does my family receive the benefit?",
    answer:
      "Upon your passing, your named beneficiary submits a claim with a certified death certificate. Benefits are typically paid directly to the beneficiary within 24–72 hours of claim approval.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white dark:bg-gray-950 py-20 px-5">
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
          FAQ
        </div>
        <h2 className="mb-4 text-center text-3xl font-semibold tracking-tight text-gray-900 dark:text-white md:text-4xl">
          Common Questions Answered
        </h2>
        <p className="mb-12 text-center text-base text-gray-500 dark:text-gray-400">
          Still have questions? Call us at{" "}
          <a
            href="tel:8669635898"
            className="text-emerald-600 dark:text-emerald-400 hover:underline"
          >
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
                aria-expanded={open === i}
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