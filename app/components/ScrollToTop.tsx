"use client";

type Props = {
  show: boolean;
};

export default function ScrollToTopButton({ show }: Props) {
  return (
    <button
      type="button"
      aria-label="Scroll to top"
      title="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed right-6 bottom-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-600 text-white shadow-lg transition ${
        show
          ? "visible translate-y-0 opacity-100"
          : "invisible translate-y-5 opacity-0"
      }`}
    >
      ↑
    </button>
  );
}