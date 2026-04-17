import { Shield, DollarSign, Zap, CheckSquare } from "lucide-react";

const features = [
  { label: "No Medical Exam Required", icon: Shield },
  { label: "Fixed Premiums for Life", icon: DollarSign },
  { label: "Fast Same-Day Approvals", icon: Zap },
  { label: "Guaranteed Acceptance", icon: CheckSquare },
];

export default function FeatureBanner() {
  return (
    <section className="border-y border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 py-10">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="group flex items-center gap-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50 px-5 py-4 transition-all hover:border-emerald-200 dark:hover:border-emerald-800 hover:bg-emerald-50/40 dark:hover:bg-emerald-950/30"
            >
              <div className="flex h-10 cursor-pointer w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900 transition-colors">
                <Icon size={20} strokeWidth={1.75} />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}