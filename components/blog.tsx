"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    title: "Are Tech Students Truly Mastering Development and AI?",
    excerpt:
      "With AI tools making coding easier than ever, are tech students really understanding the 'why' and 'how' behind their projects? Explore research-backed insights and a roadmap for deep learning and career-ready skills.",
    date: "Sep 7, 2025",
    readTime: "8 min read",
    slug: "/blog/are-tech-students-truly-mastering-dev-and-ai",
    author: "Sandeep Mehta",
    authorImg:
      "https://res.cloudinary.com/sandeepmehta/image/upload/v1766504138/Sandeep_mehta_sdz1qp.jpg",
  },
  {
    title:
      "Understanding Access Tokens and Refresh Tokens: A Simple Guide to Modern Authentication",
    excerpt:
      "Access tokens and refresh tokens are the backbone of modern authentication. Learn how they work together to keep apps secure and users logged in seamlessly, with real-world analogies and practical examples.",
    date: "Sep 3, 2025",
    readTime: "5 min read",
    slug: "/blog/understanding-access-and-refresh-tokens",
    author: "Sandeep Mehta",
    authorImg:
      "https://res.cloudinary.com/sandeepmehta/image/upload/v1766504138/Sandeep_mehta_sdz1qp.jpg",
  },
  {
    title:
      "How MongoDB Aggregation Pipelines Power Channel Profiles Like YouTube",
    excerpt:
      "Ever wondered how YouTube fetches a channel's subscribers, subscriptions, and profile info instantly? Discover the power of MongoDB aggregation pipelines and how they make complex data retrieval seamless.",
    date: "Sep 6, 2025",
    readTime: "6 min read",
    slug: "/blog/mongodb-aggregation-pipelines-power",
    author: "Sandeep Mehta",
    authorImg:
      "https://res.cloudinary.com/sandeepmehta/image/upload/v1766504138/Sandeep_mehta_sdz1qp.jpg",
  },
];

export function Blog() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section id="blog" ref={sectionRef} className="py-0 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className={cn(
            "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Insights & Writing
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Thoughts on engineering, AI, and building products that last.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View all posts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link
              key={post.title}
              href="/blog"
              className={
                "relative cursor-pointer p-6 rounded-2xl bg-card border transition hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
              }
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={post.authorImg}
                  alt={post.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex flex-col text-sm text-muted-foreground">
                  <span className="font-medium">{post.author}</span>
                  <span>
                    {post.date} · {post.readTime}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-3">
                {post.excerpt}
              </p>

              <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary">
                Read more
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
