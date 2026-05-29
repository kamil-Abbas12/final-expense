import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/data/blog-data";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
  accent?: "green" | "amber" | "sky";
}

const accentMap = {
  green: {
    badge:   "text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-500/20 border-emerald-300 dark:border-emerald-500/40",
    bar:     "from-emerald-400 to-teal-500",
    link:    "text-emerald-700 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300",
    glow:    "hover:shadow-[0_8px_40px_-8px_rgba(16,185,129,0.35)] dark:hover:shadow-[0_8px_40px_-8px_rgba(16,185,129,0.25)]",
    strip:   "from-emerald-50 to-teal-50 dark:from-emerald-950/60 dark:to-teal-950/60",
    dot:     "bg-emerald-400",
  },
  amber: {
    badge:   "text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-500/20 border-amber-300 dark:border-amber-500/40",
    bar:     "from-amber-400 to-orange-500",
    link:    "text-amber-700 hover:text-amber-500 dark:text-amber-400 dark:hover:text-amber-300",
    glow:    "hover:shadow-[0_8px_40px_-8px_rgba(245,158,11,0.35)] dark:hover:shadow-[0_8px_40px_-8px_rgba(245,158,11,0.25)]",
    strip:   "from-amber-50 to-orange-50 dark:from-amber-950/60 dark:to-orange-950/60",
    dot:     "bg-amber-400",
  },
  sky: {
    badge:   "text-sky-700 dark:text-sky-300 bg-sky-100 dark:bg-sky-500/20 border-sky-300 dark:border-sky-500/40",
    bar:     "from-sky-400 to-blue-500",
    link:    "text-sky-700 hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300",
    glow:    "hover:shadow-[0_8px_40px_-8px_rgba(14,165,233,0.35)] dark:hover:shadow-[0_8px_40px_-8px_rgba(14,165,233,0.25)]",
    strip:   "from-sky-50 to-blue-50 dark:from-sky-950/60 dark:to-blue-950/60",
    dot:     "bg-sky-400",
  },
};

export default function BlogCard({ post, index = 0, accent = "green" }: BlogCardProps) {
  const c = accentMap[accent];
  const readMins = Math.max(2, Math.ceil((post.excerpt?.length ?? 300) / 200) + 2);

  return (
    <article
      className={`
        group relative rounded-3xl overflow-hidden flex flex-col
        bg-white dark:bg-gray-900/80
        border border-gray-200/80 dark:border-gray-700/60
        shadow-[0_2px_16px_-4px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_20px_-4px_rgba(0,0,0,0.4)]
        ${c.glow}
        transition-all duration-300 hover:-translate-y-1.5
      `}
      style={{ animationDelay: `${index * 70}ms` }}
    >
      {/* ── top gradient bar ── */}
      <div className={`h-1 w-full bg-gradient-to-r ${c.bar}`} />

      {/* ── image ── */}
      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        {/* category badge */}
        <span className={`absolute top-3 left-3 text-[11px] font-bold tracking-[0.12em] uppercase px-3 py-1 rounded-full border backdrop-blur-md ${c.badge}`}>
          {post.category}
        </span>

        {/* read time */}
        <span className="absolute top-3 right-3 text-[11px] font-semibold text-white/90 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
          {readMins} min read
        </span>
      </div>

      {/* ── tinted content strip ── */}
      <div className={`bg-gradient-to-br ${c.strip} flex-1 flex flex-col`}>
        <div className="px-6 pt-5 pb-6 flex-1 flex flex-col">

          <h3
            className="text-[1.05rem] font-bold text-gray-900 dark:text-white leading-snug line-clamp-2 mb-2"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {post.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 text-[0.82rem] leading-[1.65] line-clamp-3 flex-1">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between mt-5 pt-4 border-t border-black/6 dark:border-white/8">
            <div className="flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
              <p className="text-[11px] text-gray-500 dark:text-gray-500 font-medium">{post.publishedAt}</p>
            </div>

            <Link
              href={`/blog/${post.slug}`}
              className={`inline-flex items-center gap-1 text-[0.82rem] font-bold transition ${c.link}`}
            >
              Read More
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}