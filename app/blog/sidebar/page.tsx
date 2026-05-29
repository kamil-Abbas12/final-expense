import { blogPosts } from "@/data/blog-data";
import BlogCard from "@/app/components/BlogCard";
import BlogSidebar from "@/app/components/BlogSidebar";

export default function BlogSidebarPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(160deg, #fffbeb 0%, #fef3c7 35%, #fafaf9 100%)" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@400;500;600&display=swap');
        .dark .blog-sidebar-page {
          background: linear-gradient(160deg, #1c0a00 0%, #1a0f05 35%, #111827 100%) !important;
        }
        .sidebar-hero-dots {
          background-image: radial-gradient(circle, rgba(217,119,6,0.20) 1.5px, transparent 1.5px);
          background-size: 26px 26px;
        }
        .dark .sidebar-hero-dots {
          background-image: radial-gradient(circle, rgba(217,119,6,0.14) 1.5px, transparent 1.5px);
        }
        .sidebar-bg-dots {
          background-image: radial-gradient(circle, rgba(217,119,6,0.07) 1.5px, transparent 1.5px);
          background-size: 28px 28px;
        }
        .dark .sidebar-bg-dots {
          background-image: radial-gradient(circle, rgba(217,119,6,0.05) 1.5px, transparent 1.5px);
        }
      `}</style>

      <div
        className="blog-sidebar-page min-h-screen"
        style={{ background: "linear-gradient(160deg, #fffbeb 0%, #fef3c7 35%, #fafaf9 100%)" }}
      >
        {/* ── HERO BANNER ── */}
        <div className="relative w-full h-[480px] flex items-end overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516383607781-913a19294fd1?w=1600&q=80')" }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-amber-950/95 via-amber-950/55 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-950/75 via-amber-950/20 to-transparent" />

          <div className="sidebar-hero-dots absolute inset-0" />

          {/* glow blobs */}
          <div className="absolute top-12 right-20 w-64 h-64 rounded-full bg-amber-400/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-40 w-40 h-40 rounded-full bg-orange-400/10 blur-2xl pointer-events-none" />

          {/* badge */}
          <span className="absolute top-9 left-10 bg-amber-500/25 border border-amber-400/40 text-amber-200 text-[11px] font-bold tracking-[0.22em] uppercase px-4 py-1.5 rounded-full backdrop-blur-md">
            Editor&apos;s Corner
          </span>

          <div className="relative z-10 max-w-6xl mx-auto px-8 pb-16 w-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-amber-400/70" />
              <span className="text-amber-300 text-xs font-semibold tracking-widest uppercase">
                Final Expense Insurance
              </span>
            </div>

            <h1
              className="text-5xl lg:text-[3.6rem] font-bold leading-[1.1] tracking-tight text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Insurance <span className="text-amber-400 italic">Articles</span>
            </h1>
            <p
              className="mt-4 text-amber-100/65 text-lg max-w-xl leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Curated reads with quick-access navigation — browse by category or
              dive straight into our latest coverage.
            </p>

            <div className="flex flex-wrap gap-3 mt-7">
              <span className="bg-amber-500/20 border border-amber-400/30 text-amber-200 text-xs font-semibold px-4 py-1.5 rounded-full backdrop-blur-sm">
                {blogPosts.length} Articles
              </span>
              <span className="bg-white/10 border border-white/20 text-white/70 text-xs font-semibold px-4 py-1.5 rounded-full backdrop-blur-sm">
                Browse by Category
              </span>
            </div>
          </div>
        </div>

        {/* ── CURVED DIVIDER ── */}
        <div className="relative -mt-1">
          <svg viewBox="0 0 1440 70" className="w-full block" style={{ height: 60 }} preserveAspectRatio="none">
            <path
              d="M0,30 C360,75 1080,0 1440,40 L1440,70 L0,70 Z"
              className="fill-amber-50 dark:fill-gray-950"
            />
          </svg>
        </div>

        {/* ── CONTENT ── */}
        <div className="bg-amber-50 dark:bg-gray-950 relative">
          <div className="sidebar-bg-dots absolute inset-0 pointer-events-none" />

          <section className="relative py-14 px-6 lg:px-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-10">

                {/* articles */}
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-3 mb-10 pb-6 border-b border-amber-200 dark:border-amber-900/40">
                    <span className="block w-1 h-8 rounded-full bg-gradient-to-b from-amber-400 to-orange-500" />
                    <div>
                      <p className="text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-[0.2em]">Latest</p>
                      <h2
                        className="text-3xl font-bold text-gray-900 dark:text-white"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        Insurance Articles
                      </h2>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {blogPosts.map((post, i) => (
                      <BlogCard key={post.id} post={post} index={i} accent="amber" />
                    ))}
                  </div>
                </div>

                {/* sidebar */}
                <BlogSidebar />
              </div>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}