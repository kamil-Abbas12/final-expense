"use client";

import { useEffect, useState } from "react";
import { X, Lock, Phone, CheckCircle } from "lucide-react";

const STEPS = [
  {
    id: "zip",
    question: "What is your zip code?",
    type: "zip" as const,
  },
  {
    id: "homeowner",
    question: "Do you currently own your home?",
    type: "choice" as const,
    options: ["Yes", "No"],
  },
  {
    id: "provider",
    question: "Who is your current life insurance provider?",
    type: "list" as const,
    options: [
      "None — uninsured",
      "State Farm",
      "Mutual of Omaha",
      "AARP / New York Life",
      "Other",
    ],
  },
  {
    id: "coverage",
    question: "What coverage amount are you looking for?",
    type: "choice" as const,
    options: ["$5,000 – $10,000", "$10,000 – $25,000"],
  },
];

export default function QuizPopup() {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);
  const [zip, setZip] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  if (!visible) return null;

  const progress = Math.round((step / STEPS.length) * 100);
  const current = STEPS[step];

  const advance = () => {
    if (step + 1 >= STEPS.length) {
      setDone(true);
    } else {
      setStep((s) => s + 1);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/70 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-white dark:bg-gray-900 shadow-2xl">
        {/* Close */}
        <button
          onClick={() => setVisible(false)}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <X size={16} />
        </button>

        <div className="p-8">
          {done ? (
            <Result onClose={() => setVisible(false)} />
          ) : (
            <>
              {/* Badge */}
              <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Free Coverage Check
              </div>

              <h2 className="mb-2 text-xl font-bold leading-snug text-gray-900 dark:text-white">
                Could you qualify for final expense coverage?
              </h2>
              <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                Answer 4 quick questions — no medical exam required.
              </p>

              {/* Progress */}
              <div className="mb-1 h-1.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                <div
                  className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="mb-5 text-xs text-gray-400 dark:text-gray-500">
                Step {step + 1} of {STEPS.length}
              </p>

              {/* Question */}
              <p className="mb-4 text-sm font-semibold text-gray-800 dark:text-gray-200">
                {current.question}
              </p>

              {/* Inputs */}
              {current.type === "zip" && (
                <div className="space-y-3">
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={5}
                    value={zip}
                    onChange={(e) => setZip(e.target.value.replace(/\D/g, ""))}
                    placeholder="e.g. 90210"
                    className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all"
                  />
                  <button
                    onClick={advance}
                    disabled={zip.length < 5}
                    className="w-full rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed py-3 text-sm font-semibold text-white transition-all"
                  >
                    Continue →
                  </button>
                </div>
              )}

              {current.type === "choice" && (
                <div className="grid grid-cols-2 gap-3">
                  {"options" in current &&
                    current.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={advance}
                        className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:text-emerald-700 dark:hover:text-emerald-400 transition-all"
                      >
                        {opt}
                      </button>
                    ))}
                </div>
              )}

              {current.type === "list" && (
                <div className="flex flex-col gap-2">
                  {"options" in current &&
                    current.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={advance}
                        className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:text-emerald-700 dark:hover:text-emerald-400 transition-all text-center"
                      >
                        {opt}
                      </button>
                    ))}
                </div>
              )}

              <div className="mt-5 flex items-center justify-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
                <Lock size={11} />
                Your information is safe &amp; secure
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Result({ onClose }: { onClose: () => void }) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-900/50">
        <CheckCircle size={26} className="text-emerald-600 dark:text-emerald-400" strokeWidth={2} />
      </div>
      <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
        Great news — you may qualify!
      </h2>
      <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
        Based on your answers, you could be eligible for final expense whole life
        coverage with <strong className="text-gray-700 dark:text-gray-300">no medical exam</strong> and{" "}
        <strong className="text-gray-700 dark:text-gray-300">fixed premiums for life</strong>.
      </p>

      <a href="tel:8669635898" className="block">
        <button className="w-full rounded-xl bg-emerald-600 hover:bg-emerald-700 py-4 transition-all shadow-lg shadow-emerald-600/20">
          <span className="block text-xs font-medium text-emerald-100 mb-0.5">
            Call now — speak with a licensed agent
          </span>
          <span className="flex items-center justify-center gap-2 text-xl font-bold text-white">
            <Phone size={18} strokeWidth={2.5} />
            866-963-5898
          </span>
        </button>
      </a>

      <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
        <Lock size={11} />
        Your call is completely free and confidential
      </div>

      <button
        onClick={onClose}
        className="mt-4 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 underline transition-colors"
      >
        No thanks, close
      </button>
    </div>
  );
}