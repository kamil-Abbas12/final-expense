"use client";

import BlogCard from "../components/BlogCard";
import { BlogPost } from "@/data/blog-data";

type Props = {
  posts: BlogPost[];
  accent?: "green" | "amber" | "sky";
};

export default function BlogGrid({ posts, accent = "sky" }: Props) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, i) => (
        <BlogCard key={post.id} post={post} index={i} accent={accent} />
      ))}
    </div>
  );
}