import { blogPosts } from "@/data/blog-data";
import BlogGrid from "@/app/components/BlogGrid";

export default function BlogGridPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(150deg, #f0f9ff 0%, #e0f2fe 35%, #f8fafc 100%)" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@400;500;600&display=swap');
        .dark .blog-grid-page {
          background: linear-gradient(150deg, #030712 0%, #0c1a2e 35%, #0f172a 100%) !important;
        }
        .grid-hero-lines {
          background-image:
            linear-gradient(rgba(14,165,233,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14,165,233,0.12) 1px, transparent 1px);
          background-size: 64px 64px;
        }
        .dark .grid-hero-lines {
          background-image:
            linear-gradient(rgba(14,165,233,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14,165,233,0.07) 1px, transparent 1px);
        }
        .grid-bg-dots {
          background-image: radial-gradient(circle, rgba(14,165,233,0.10) 1.5px, transparent 1.5px);
          background-size: 28px 28px;
        }
        .dark .grid-bg-dots {
          background-image: radial-gradient(circle, rgba(14,165,233,0.06) 1.5px, transparent 1.5px);
        }
      `}</style>

      <div
        className="blog-grid-page min-h-screen"
        style={{ background: "linear-gradient(150deg, #f0f9ff 0%, #e0f2fe 35%, #f8fafc 100%)" }}
      >
        {/* ── HERO BANNER — mosaic theme ── */}
        <div className="relative w-full h-[480px] flex items-end overflow-hidden">

          {/* 4-panel photo mosaic */}
          <div className="absolute inset-0 grid grid-cols-4 gap-0">
            {[
              "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&q=70",
              "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&q=70",
              "https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=500&q=70",
              "https://images.unsplash.com/photo-1559526324-593bc073d938?w=500&q=70",
            ].map((src, i) => (
              <div
                key={i}
                className="bg-cover bg-center"
                style={{ backgroundImage: `url('${src}')` }}
              />
            ))}
          </div>

          {/* overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-sky-950/95 via-sky-950/55 to-sky-900/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-950/70 to-transparent" />

          {/* grid lines on the hero */}
          <div className="grid-hero-lines absolute inset-0 opacity-100" />

          {/* glow blobs */}
          <div className="absolute top-10 right-24 w-72 h-72 rounded-full bg-sky-400/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-blue-400/10 blur-2xl pointer-events-none" />

          {/* badge */}
          <span className="absolute top-9 left-10 bg-sky-500/25 border border-sky-400/40 text-sky-200 text-[11px] font-bold tracking-[0.22em] uppercase px-4 py-1.5 rounded-full backdrop-blur-md">
            Grid View
          </span>

          <div className="relative z-10 max-w-5xl mx-auto px-8 pb-16 w-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-sky-400/70" />
              <span className="text-sky-300 text-xs font-semibold tracking-widest uppercase">
                All Articles
              </span>
            </div>

            <h1
              className="text-5xl lg:text-[3.6rem] font-bold leading-[1.1] tracking-tight text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Browse <span className="text-sky-400 italic">Every</span> Article
            </h1>
            <p
              className="mt-4 text-sky-100/65 text-lg max-w-xl leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Our full library of insurance guides, tips, and expert articles —
              all in one clean, easy-to-browse grid.
            </p>

            {/* count chips */}
            <div className="flex flex-wrap gap-3 mt-7">
              <span className="bg-sky-500/20 border border-sky-400/30 text-sky-200 text-xs font-semibold px-4 py-1.5 rounded-full backdrop-blur-sm">
                {blogPosts.length} Articles
              </span>
              <span className="bg-white/10 border border-white/20 text-white/70 text-xs font-semibold px-4 py-1.5 rounded-full backdrop-blur-sm">
                Multiple Categories
              </span>
            </div>
          </div>
        </div>

        {/* ── CURVED DIVIDER ── */}
        <div className="relative -mt-1">
          <svg viewBox="0 0 1440 70" className="w-full block" style={{ height: 60 }} preserveAspectRatio="none">
            <path
              d="M0,50 C480,90 960,10 1440,50 L1440,70 L0,70 Z"
              className="fill-white dark:fill-gray-950"
            />
          </svg>
        </div>

        {/* ── GRID SECTION ── */}
        <div className="bg-white dark:bg-gray-950 relative">
          <div className="grid-bg-dots absolute inset-0 opacity-100 pointer-events-none" />

          <section className="relative py-14 px-6 lg:px-20">
            <div className="max-w-7xl mx-auto">

              {/* top bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12 pb-6 border-b border-sky-100 dark:border-sky-900/40">
                <div>
                  <p className="text-sky-600 dark:text-sky-400 text-xs font-bold uppercase tracking-[0.2em] mb-1">
                    Complete Library
                  </p>
                  <h2
                    className="text-3xl font-bold text-gray-900 dark:text-white"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    All Published Articles
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    <span className="text-gray-900 dark:text-white font-bold text-lg">{blogPosts.length}</span> posts
                  </span>
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-sky-500" />
                    <span className="w-2 h-2 rounded-full bg-sky-300 dark:bg-sky-700" />
                    <span className="w-2 h-2 rounded-full bg-sky-200 dark:bg-sky-900" />
                  </div>
                </div>
              </div>

              <BlogGrid posts={blogPosts} accent="sky" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}