import React from "react";

type BlogPost = {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  link: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How Final Expense Insurance Works",
    description:
      "Learn how final expense insurance can protect your loved ones and cover end-of-life costs",
    image: "FinalExpenseSecure.png",
    date: "April 10, 2026",
    link: "https://finalexpense.topdoglead.com",
  },
  {
    id: 2,
    title: "Top 5 Benefits of Final Expense Plans",
    description:
      "Discover why more families are choosing final expense coverage for peace of mind.",
    image: "FinalExpenseBenefits.png",
    date: "April 12, 2026",
    link: "https://finalexpense.topdoglead.com",
  },
  {
    id: 3,
    title: "Common Myths About Life Insurance",
    description:
      "We break down the biggest misconceptions about life and final expense insurance.",
    image: "LifeInsuranceMyths.png",
    date: "April 15, 2026",
    link: "https://finalexpense.topdoglead.com",
  },
];

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-white dark:bg-gray-950 w-full py-20 px-6 lg:px-20"
    >
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-green-600 text-sm uppercase tracking-widest">
          Blog
        </h1>
        <h2 className="text-gray-900 dark:text-white text-3xl lg:text-4xl font-bold mt-4">
          Our Latest Blogs
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-4">
          Stay updated with insights, tips, and guides about final expense
          insurance and financial planning.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid gap-8 mt-14 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="group bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-60 object-cover group-hover:scale-110 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {post.date}
              </p>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-2 group-hover:text-green-600 transition">
                {post.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm">
                {post.description}
              </p>

              {/* Button */}
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 text-sm font-medium text-green-600 hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <a
          href="https://finalexpense.topdoglead.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition"
        >
          Visit Full Blog
        </a>
      </div>
    </section>
  );
};

export default Blog;