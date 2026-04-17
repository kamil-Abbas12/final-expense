import {
  Cross,
  Flame,
  FileText,
  CreditCard,
  Plane,
  Flower2,
} from "lucide-react";

const coverageItems = [
  {
    title: "Funeral & Burial Services",
    text: "Full casket, burial plot, and graveside service fees - all covered without restriction.",
    icon: Cross,
  },
  {
    title: "Memorial & Cremation",
    text: "Traditional services or cremation - whichever your family chooses, the benefit applies.",
    icon: Flame,
  },
  {
    title: "Legal & Administrative Fees",
    text: "Probate costs, estate administration fees, and documentation expenses are all eligible.",
    icon: FileText,
  },
  {
    title: "Outstanding Debts",
    text: "Medical bills and small personal debts can be settled directly from the policy benefit.",
    icon: CreditCard,
  },
  {
    title: "Travel Expenses",
    text: "Covers transportation costs for out-of-town family members traveling to attend the service.",
    icon: Plane,
  },
  {
    title: "Flowers & Reception",
    text: "Floral arrangements, catering, and venue hire for the reception are all benefit-eligible.",
    icon: Flower2,
  },
];

export default function CoverageSection() {
  return (
    <section id="coverage" className="bg-gray-50 dark:bg-gray-900 py-20 px-5">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
          What&apos;s Covered
        </div>
        <h2 className="mb-4 text-center text-3xl font-semibold tracking-tight text-gray-900 dark:text-white md:text-4xl">
          All-Inclusive Funeral Coverage
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-center text-base text-gray-500 dark:text-gray-400">
          Benefits can be applied to any end-of-life cost - with no restrictions whatsoever. Give your family the
          gift of freedom from financial worry when it matters most.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coverageItems.map(({ title, text, icon: Icon }) => (
            <div
              key={title}
              className="flex items-start gap-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 p-5 transition-all hover:border-emerald-200 dark:hover:border-emerald-800"
            >
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-950/60">
                <Icon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
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