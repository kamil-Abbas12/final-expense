import { coverageItems } from "@/data";

export default function CoverageSection() {
  return (
    <section id="coverage" className="bg-gray-50 dark:bg-gray-900 py-20 px-5">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
          What's Covered
        </div>
        <h2 className="mb-4 text-center text-3xl font-semibold tracking-tight text-gray-900 dark:text-white md:text-4xl">
All-Inclusive Funeral Coverage  
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-center text-base text-gray-500 dark:text-gray-400">
          Benefits can be applied to any end-of-life cost - with no restrictions whatsoever.Give your family the gift of freedom from financial worry when it matters most.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coverageItems.map(({ title, text }) => (
            <div
              key={title}
              className="flex items-start gap-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 p-5 transition-all hover:border-emerald-200 dark:hover:border-emerald-800"
            >
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-950/60">
                <svg className="h-4 w-4 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">{title}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}