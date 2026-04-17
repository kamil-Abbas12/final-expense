const valueCards = [
  {
    title: "Immediate Peace of Mind",
    text: "Coverage starts immediately. Accidental death benefits begin on day one - no waiting period applies.",
  },
  {
    title: "No Financial Burden Left Behind",
    text: "Funeral costs average $8,300 or more. With final expense coverage, your family won't pay a single cent out of pocket.",
  },
  {
    title: "Simple, Transparent Terms",
    text: "No hidden fees, no surprise clauses. Your premium is locked in for life the day you enroll - it will never go up.",
  },
];

export default function ValueSection() {
  return (
    <section className="bg-white dark:bg-gray-950 py-20 px-5">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
          Why It Matters
        </div>
        <h2 className="mb-4 text-center text-3xl font-semibold tracking-tight text-gray-900 dark:text-white md:text-4xl">
          Protection and Dignity - for You and Your Family
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-base text-gray-500 dark:text-gray-400">
          Final expense insurance eliminates costly burdens, freeing your family to focus on healing when it matters most.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {valueCards.map((card, i) => (
            <div
              key={card.title}
              className="group relative rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-900/60 p-7 transition-all hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-md hover:shadow-emerald-500/5"
            >
              <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/50 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                0{i + 1}
              </div>
              <h3 className="mb-3 text-base font-semibold text-gray-900 dark:text-white">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}