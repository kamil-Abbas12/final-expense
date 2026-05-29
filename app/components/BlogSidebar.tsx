"use client";

import Link from "next/link";
import { categories } from "@/data/blog-data";

export default function BlogSidebar() {
  return (
    <aside className="space-y-6 lg:pt-20">

      {/* ── Categories ── */}
      <div className="bg-white dark:bg-gray-900 border border-amber-100 dark:border-gray-800 p-6 rounded-2xl shadow-sm shadow-amber-100 dark:shadow-none">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-1 h-5 rounded-full bg-gradient-to-b from-amber-400 to-orange-500" />
          <h3
            className="font-bold text-lg text-gray-900 dark:text-white"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Categories
          </h3>
        </div>

        <div className="flex flex-col gap-1">
          {categories.map((category) => (
            <button
              key={category}
              className="
                text-left text-sm py-2 px-3 rounded-xl
                text-gray-600 hover:text-amber-700 hover:bg-amber-50
                dark:text-gray-400 dark:hover:text-amber-300 dark:hover:bg-amber-500/10
                transition-all duration-150 flex items-center gap-2.5 group
              "
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-300 dark:bg-amber-500/50 group-hover:bg-amber-500 transition" />
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* ── CTA card ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-amber-500 via-amber-600 to-orange-700 p-6 rounded-2xl text-white shadow-xl shadow-amber-300/30 dark:shadow-amber-900/30">
        <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-white/10" />
        <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-white/10" />
        <div className="absolute top-1/2 right-4 w-12 h-12 rounded-full bg-white/5" />

        <div className="relative z-10">
          <span className="text-2xl">🛡️</span>
          <h3
            className="text-lg font-bold mt-3 leading-snug text-white"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Need Help Choosing Coverage?
          </h3>
          <p className="mt-2 text-sm text-amber-50/85 leading-[1.7]">
            Learn how final expense insurance can protect your family and reduce
            financial stress.
          </p>
          <Link
            href="/#quote-form"
            className="inline-block mt-5 bg-white text-amber-700 text-sm px-5 py-2.5 rounded-full font-bold hover:bg-amber-50 transition shadow-md"
          >
            Get a Free Quote →
          </Link>
        </div>
      </div>

      {/* ── Quick Tip ── */}
      <div className="bg-white dark:bg-gray-900 border border-amber-100 dark:border-gray-800 p-5 rounded-2xl shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">💡</span>
          <p className="text-xs text-amber-600 dark:text-amber-400 font-bold uppercase tracking-widest">
            Quick Tip
          </p>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-[1.7]">
          Final expense insurance typically costs less than $1 a day and can
          cover funeral costs, medical bills, and outstanding debts.
        </p>
      </div>

    </aside>
  );
}