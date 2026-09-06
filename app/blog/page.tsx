import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog-data";
import BlogCard from "../components/BlogCard";

const BASE_URL = "https://finalexpense.topdoglead.com";
const POSTS_PER_PAGE = 9;

// ── Page-specific metadata, now aware of pagination ──
export async function generateMetadata({
  searchParams,
}: {
  searchParams: { page?: string };
}): Promise<Metadata> {
  const page = Math.max(1, parseInt(searchParams.page ?? "1", 10) || 1);
  const totalPages = Math.max(1, Math.ceil(blogPosts.length / POSTS_PER_PAGE));
  const canonicalPage = Math.min(page, totalPages);

  const canonicalUrl =
    canonicalPage === 1 ? `${BASE_URL}/blog` : `${BASE_URL}/blog?page=${canonicalPage}`;

  const title =
    canonicalPage === 1
      ? "Blog | Final Expense Insurance Guides & Tips"
      : `Blog | Final Expense Insurance Guides & Tips (Page ${canonicalPage})`;

  return {
    title,
    description:
      "Expert guides on final expense insurance, burial costs, and end-of-life financial planning. Free resources to help you protect your family.",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      title: "Blog | Final Expense Insurance Guides & Tips | TopDog",
      description:
        "Expert guides on final expense insurance, burial costs, and end-of-life financial planning.",
      url: canonicalUrl,
    },
    // Page 1 stays fully indexable. Later pages are indexable too (they contain
    // unique posts) but we keep them out of priority signals via canonical above.
    robots: {
      index: true,
      follow: true,
    },
  };
}

// ── Blog collection schema, lists every post for Google (unaffected by pagination) ──
function getBlogListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Top Dog Final Expense Blog",
    url: `${BASE_URL}/blog`,
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${BASE_URL}/blog/${post.slug}`,
      datePublished: post.publishedAt,
    })),
  };
}

export default function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const totalPages = Math.max(1, Math.ceil(blogPosts.length / POSTS_PER_PAGE));
  const requestedPage = parseInt(searchParams.page ?? "1", 10) || 1;
  const currentPage = Math.min(Math.max(1, requestedPage), totalPages);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = blogPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const blogListSchema = getBlogListSchema();

  const prevHref = currentPage > 1
    ? currentPage - 1 === 1 ? "/blog" : `/blog?page=${currentPage - 1}`
    : null;
  const nextHref = currentPage < totalPages ? `/blog?page=${currentPage + 1}` : null;

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(160deg, #f0fdf7 0%, #ecfdf5 40%, #f8fafc 100%)",
      }}
    >
      {/* rel=prev / rel=next hints for crawlers navigating pagination */}
      {prevHref && <link rel="prev" href={`${BASE_URL}${prevHref}`} />}
      {nextHref && <link rel="next" href={`${BASE_URL}${nextHref}`} />}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
            ],
          }),
        }}
      />
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
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/70 via-emerald-950/20 to-transparent" />
          <div className="blog-hero-dots absolute inset-0 opacity-100" />
          <div className="absolute top-16 right-20 w-64 h-64 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />
          <div className="absolute top-8 right-40 w-40 h-40 rounded-full bg-teal-400/10 blur-2xl pointer-events-none" />

          <span className="absolute top-10 left-10 inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 text-[11px] font-bold tracking-[0.22em] uppercase px-4 py-1.5 rounded-full backdrop-blur-md shadow">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Insights &amp; Guides
          </span>

          <div className="relative z-10 max-w-5xl mx-auto px-8 pb-16 w-full">
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

                {totalPages > 1 && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Page {currentPage} of {totalPages}
                  </p>
                )}
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {paginatedPosts.map((post, i) => (
                  <BlogCard key={post.id} post={post} index={i} accent="green" />
                ))}
              </div>

              {/* ── PAGINATION CONTROLS ── */}
              {totalPages > 1 && (
                <nav
                  aria-label="Blog pagination"
                  className="flex items-center justify-center gap-2 mt-16"
                >
                  <Link
                    href={prevHref ?? "#"}
                    aria-disabled={!prevHref}
                    className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                      prevHref
                        ? "border-emerald-500 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
                        : "border-gray-200 text-gray-300 dark:text-gray-600 pointer-events-none"
                    }`}
                  >
                    ← Previous
                  </Link>

                  {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => {
                    const href = pageNum === 1 ? "/blog" : `/blog?page=${pageNum}`;
                    const isActive = pageNum === currentPage;
                    return (
                      <Link
                        key={pageNum}
                        href={href}
                        aria-current={isActive ? "page" : undefined}
                        className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-semibold transition ${
                          isActive
                            ? "bg-emerald-600 text-white"
                            : "text-gray-600 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
                        }`}
                      >
                        {pageNum}
                      </Link>
                    );
                  })}

                  <Link
                    href={nextHref ?? "#"}
                    aria-disabled={!nextHref}
                    className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                      nextHref
                        ? "border-emerald-500 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
                        : "border-gray-200 text-gray-300 dark:text-gray-600 pointer-events-none"
                    }`}
                  >
                    Next →
                  </Link>
                </nav>
              )}
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}