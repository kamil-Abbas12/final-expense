import { blogPosts } from "@/data/blog-data";
import BlogCard from "../components/BlogCard";

export default function BlogPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(160deg, #f0fdf7 0%, #ecfdf5 40%, #f8fafc 100%)",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@400;500;600&display=swap');
        .dark .blog-main-page {
          background: linear-gradient(160deg, #022c22 0%, #064e3b 30%, #111827 100%) !important;
        }
        .blog-hero-dots {
          background-image: radial-gradient(circle, rgba(16,185,129,0.18) 1.5px, transparent 1.5px);
          background-size: 26px 26px;
        }
        .dark .blog-hero-dots {
          background-image: radial-gradient(circle, rgba(16,185,129,0.12) 1.5px, transparent 1.5px);
        }
      `}</style>

      <div
        className="blog-main-page min-h-screen"
        style={{
          background: "linear-gradient(160deg, #f0fdf7 0%, #ecfdf5 40%, #f8fafc 100%)",
        }}
      >
        {/* ── HERO BANNER ── */}
        <div className="relative w-full h-[480px] flex items-end overflow-hidden">
          {/* photo */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=80')" }}
          />

          {/* dark scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/70 via-emerald-950/20 to-transparent" />

          {/* dot overlay on photo */}
          <div className="blog-hero-dots absolute inset-0 opacity-100" />

          {/* floating accent blobs */}
          <div className="absolute top-16 right-20 w-64 h-64 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />
          <div className="absolute top-8 right-40 w-40 h-40 rounded-full bg-teal-400/10 blur-2xl pointer-events-none" />

          {/* badge */}
          <span className="absolute top-10 left-10 inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 text-[11px] font-bold tracking-[0.22em] uppercase px-4 py-1.5 rounded-full backdrop-blur-md shadow">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Insights &amp; Guides
          </span>

          <div className="relative z-10 max-w-5xl mx-auto px-8 pb-16 w-full">
            {/* eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-emerald-400/70" />
              <span className="text-emerald-300 text-xs font-semibold tracking-widest uppercase">
                Final Expense Insurance
              </span>
            </div>

            <h1
              className="text-5xl lg:text-[3.6rem] font-bold leading-[1.1] tracking-tight text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Our Latest <span className="text-emerald-400 italic">Blogs</span>
            </h1>
            <p
              className="mt-4 text-emerald-100/70 text-lg max-w-xl leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Expert insights, tips, and guides — written for families navigating
              the world of final expense insurance.
            </p>

            {/* stats row */}
            <div className="flex items-center gap-6 mt-8">
              {[
                { val: `${blogPosts.length}+`, label: "Articles" },
                { val: "Weekly", label: "Updates" },
                { val: "Free", label: "Access" },
              ].map(({ val, label }) => (
                <div key={label} className="text-center">
                  <p className="text-emerald-300 font-bold text-lg leading-none">{val}</p>
                  <p className="text-emerald-200/50 text-[11px] mt-1 uppercase tracking-widest">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── WAVE DIVIDER ── */}
        <div className="relative -mt-1">
          <svg viewBox="0 0 1440 60" className="w-full fill-white dark:fill-gray-950 block" preserveAspectRatio="none" style={{ height: 56 }}>
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" />
          </svg>
        </div>

        {/* ── POSTS SECTION ── */}
        <div className="bg-white dark:bg-gray-950 relative">
          {/* subtle grid texture */}
          <div
            className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(16,185,129,1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,1) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <section className="relative py-16 px-6 lg:px-20">
            <div className="max-w-7xl mx-auto">

              {/* section header */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
                <div>
                  <p className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">
                    All Posts
                  </p>
                  <h2
                    className="text-3xl font-bold text-gray-900 dark:text-white"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Browse the Collection
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-px w-12 bg-emerald-300 dark:bg-emerald-700" />
                  <span className="text-emerald-500 text-xl">✦</span>
                  <div className="h-px w-12 bg-emerald-300 dark:bg-emerald-700" />
                </div>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post, i) => (
                  <BlogCard key={post.id} post={post} index={i} accent="green" />
                ))}
              </div>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}