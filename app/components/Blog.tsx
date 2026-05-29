import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog-data";

const Blog = () => {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="bg-white dark:bg-gray-950 w-full py-20 px-6 lg:px-20">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-green-600 text-sm uppercase tracking-widest">Blog</h1>
        <h2 className="text-gray-900 dark:text-white text-3xl lg:text-4xl font-bold mt-4">
          Our Latest Blogs
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-4">
          Stay updated with insights, tips, and guides about final expense insurance and financial planning.
        </p>
      </div>

      <div className="grid gap-8 mt-14 sm:grid-cols-2 lg:grid-cols-3">
        {featuredPosts.map((post) => (
          <div
            key={post.id}
            className="group bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="relative w-full h-60 overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition duration-300"
              />
            </div>

            <div className="p-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">{post.publishedAt}</p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-2 group-hover:text-green-600 transition">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm">{post.excerpt}</p>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-block mt-5 text-sm font-medium text-green-600 underline hover:no-underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link
          href="/blog"
          className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition"
        >
          Visit Full Blog
        </Link>
      </div>
    </section>
  );
};

export default Blog;
