import { trustItems } from "@/data";

export default function TrustSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-5">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
          Trusted & Accredited
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {trustItems.map(({ badge, sub }) => (
            <div
              key={badge}
              className="flex flex-col items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 px-8 py-5 min-w-[140px]"
            >
              <span className="text-lg font-bold text-gray-900 dark:text-white">{badge}</span>
              <span className="mt-1 text-xs text-gray-400 dark:text-gray-500">{sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}