const benefits = [
  { value: "$5K–$25K", label: "Coverage range available" },
  { value: "Ages 50–85", label: "Eligibility window" },
  { value: "$0", label: "Medical exam required" },
  { value: "Fixed", label: "Premiums locked for life" },
  { value: "A+", label: "Carrier financial rating" },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="bg-white dark:bg-gray-950 py-20 px-5">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
          Plan Highlights
        </div>
        <h2 className="mb-4 text-center text-3xl font-semibold tracking-tight text-gray-900 dark:text-white md:text-4xl">
          Security Crafted for Simplicity
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-center text-base text-gray-500 dark:text-gray-400">
          Clear terms, clear benefits. Discover exactly what&apos;s included when you choose TopDog Final Expense.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-900/60 p-6 text-center transition-all hover:border-emerald-200 dark:hover:border-emerald-800 hover:bg-emerald-50/30 dark:hover:bg-emerald-950/20"
            >
              <div className="mb-2 text-xl font-semibold text-emerald-600 dark:text-emerald-400 tracking-tight">
                {value}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 leading-snug">{label}</div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-12 rounded-2xl border border-emerald-100 dark:border-emerald-900 bg-gradient-to-r from-emerald-50 to-teal-50/60 dark:from-emerald-950/40 dark:to-teal-950/30 p-8 text-center">
          <p className="mb-4 text-base font-medium text-gray-800 dark:text-gray-200">
            Ready to reserve your plan? It takes less than 10 minutes.
          </p>
          <a
            href="#quote-form"
            className="inline-flex items-center rounded-xl bg-emerald-600 hover:bg-emerald-700 px-8 py-3.5 text-sm font-medium text-white transition-all shadow-md shadow-emerald-600/20 hover:-translate-y-0.5"
          >
            Get My Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}