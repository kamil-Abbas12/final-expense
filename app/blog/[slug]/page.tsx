import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts, getPostBySlug } from "@/data/blog-data";

const BASE_URL = "https://www.finalexpense.topdoglead.com";

type Props = { params: Promise<{ slug: string }> };

// ── NEW: tells Next.js which slugs exist at build time ──
export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

// ── NEW: per-post title/description/OG tags ──
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${BASE_URL}/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${BASE_URL}/blog/${post.slug}`,
      images: [{ url: `${BASE_URL}${post.coverImage}`, width: 1200, height: 630 }],
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogDetailsPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // ── NEW: per-post structured data ──
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${BASE_URL}${post.coverImage}`,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: "Top Dog Final Expense" },
    publisher: {
      "@type": "Organization",
      name: "Top Dog Final Expense",
      logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.png` },
    },
    mainEntityOfPage: `${BASE_URL}/blog/${post.slug}`,
  };

  return (
    <div className="bg-stone-50 dark:bg-[#0d0d0f] min-h-screen">
      {/* ── NEW: render the schema, anywhere inside the returned JSX ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display...');
      `}</style>

      {/* ...rest of your existing JSX stays exactly the same... */}

      {/* ── CINEMATIC HERO ── */}
      <div className="relative w-full h-[520px] flex items-end overflow-hidden">
        <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority />

        {/* deep multi-layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f] via-[#0d0d0f]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0f]/80 via-[#0d0d0f]/20 to-transparent" />
        {/* light-mode softer overlay so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 to-stone-900/10 dark:hidden" />

        {/* grain texture */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* back link */}
        <Link
          href="/blog"
          className="absolute top-8 left-8 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition group z-20"
        >
          <span className="w-8 h-8 rounded-full border border-white/25 flex items-center justify-center group-hover:border-emerald-400 group-hover:bg-emerald-500/20 transition text-xs">
            ←
          </span>
          All Articles
        </Link>

        <div className="relative z-10 max-w-4xl mx-auto px-8 pb-14 w-full">
          <span className="inline-block bg-emerald-500/25 border border-emerald-400/50 text-emerald-200 text-[11px] font-bold tracking-[0.18em] uppercase px-3 py-1 rounded-full mb-5">
            {post.category}
          </span>
          <h1
            className="text-4xl lg:text-5xl font-bold leading-[1.1] text-white max-w-3xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {post.title}
          </h1>

          {/* meta strip */}
          <div className="flex flex-wrap items-center gap-4 mt-5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-xs font-bold">
                A
              </div>
              <span className="text-white/70 text-sm">Editorial Team</span>
            </div>
            <span className="text-white/30">·</span>
            <span className="text-white/60 text-sm">{post.publishedAt}</span>
            <span className="text-white/30">·</span>
            <span className="text-emerald-300 text-sm font-medium">5 min read</span>
          </div>
        </div>
      </div>

      {/* ── ARTICLE BODY ── */}
      <div className="relative">
        {/* left accent stripe */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-emerald-300/30 to-transparent pointer-events-none hidden lg:block" />

        <section className="py-14 px-6">
          <div className="max-w-3xl mx-auto">

         

            {/* article content */}
            <div
              className="
              blog-content
    dark:text-white
    prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
                prose-headings:leading-snug
                prose-p:text-gray-700 dark:prose-p:text-gray-300
                prose-p:leading-[1.85] prose-p:text-[1.0625rem]
                prose-a:text-emerald-600 dark:prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-gray-900 dark:prose-strong:text-white
                prose-blockquote:border-l-4 prose-blockquote:border-emerald-400
                prose-blockquote:bg-emerald-50 dark:prose-blockquote:bg-emerald-950/30
                prose-blockquote:px-6 prose-blockquote:py-3 prose-blockquote:rounded-r-xl
                prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300
                prose-blockquote:not-italic
                prose-code:text-emerald-700 dark:prose-code:text-emerald-300
                prose-code:bg-emerald-50 dark:prose-code:bg-emerald-950/40
                prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                prose-img:rounded-2xl prose-img:shadow-lg
                prose-hr:border-gray-200 dark:prose-hr:border-gray-800
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* ── CTA CARD ── */}
            <div className="mt-16 rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-600 to-teal-700 p-8 text-white relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-10 w-24 h-24 bg-white/5 rounded-full translate-y-1/2" />
              <div className="relative z-10">
                <p className="text-emerald-200 text-xs font-bold uppercase tracking-widest mb-3">Take the next step</p>
                <h3
                  className="text-2xl font-bold text-white mb-3 leading-snug"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Ready to Protect Your Family?
                </h3>
                <p className="text-emerald-100/80 text-sm leading-relaxed mb-6 max-w-md">
                  Get a personalized final expense insurance quote in minutes — no medical exams required.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/#quote-form"
                    className="inline-block bg-white text-emerald-700 font-bold text-sm px-6 py-2.5 rounded-full hover:bg-emerald-50 transition shadow-md"
                  >
                    Get a Free Quote →
                  </Link>
                  <Link
                    href="/blog"
                    className="inline-block border border-white/40 text-white font-medium text-sm px-6 py-2.5 rounded-full hover:bg-white/10 transition"
                  >
                    ← Back to Blog
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}