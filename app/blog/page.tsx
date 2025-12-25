"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    title: "Are Tech Students Truly Mastering Development and AI?",
    excerpt:
      "AI tools are accelerating development like never before—but are students truly understanding the fundamentals? This article explores research-backed insights, learning gaps, and a practical roadmap to become industry-ready.",
    date: "Sep 7, 2025",
    readTime: "8 min read",
    slug: "https://are-students-truly-grasping-dev-and-ai.hashnode.dev",
    author: "Sandeep Mehta",
    authorImg:
      "https://res.cloudinary.com/sandeepmehta/image/upload/v1766504138/Sandeep_mehta_sdz1qp.jpg",
    coverImg:
      "https://res.cloudinary.com/sandeepmehta/image/upload/v1766593837/116a87ea-e40b-4957-a062-2ab02a2bf868_sryesg.png",
  },
  {
    title:
      "Understanding Access Tokens and Refresh Tokens: A Simple Guide to Modern Authentication",
    excerpt:
      "A beginner-friendly yet industry-relevant breakdown of access and refresh tokens—how they work together to secure modern applications without compromising user experience.",
    date: "Sep 3, 2025",
    readTime: "5 min read",
    slug: "https://understanding-access-and-refresh-tokens.hashnode.dev",
    author: "Sandeep Mehta",
    authorImg:
      "https://res.cloudinary.com/sandeepmehta/image/upload/v1766504138/Sandeep_mehta_sdz1qp.jpg",
    coverImg:
      "https://res.cloudinary.com/sandeepmehta/image/upload/v1766593893/799148d9-840a-4991-839f-d975e920c9d4_le1kty.png",
  },
  {
    title:
      "How MongoDB Aggregation Pipelines Power Channel Profiles Like YouTube",
    excerpt:
      "A deep dive into how MongoDB aggregation pipelines efficiently power subscriber counts, channel profiles, and complex data views at scale.",
    date: "Sep 6, 2025",
    readTime: "6 min read",
    slug: "https://mongodb-aggregation-pipelines-power.hashnode.dev",
    author: "Sandeep Mehta",
    authorImg:
      "https://res.cloudinary.com/sandeepmehta/image/upload/v1766504138/Sandeep_mehta_sdz1qp.jpg",
    coverImg:
      "https://res.cloudinary.com/sandeepmehta/image/upload/v1766593907/903ba4d8-9013-4f85-aab7-51079fab8567_apzopf.png",
  },
  {
    title: "How Platforms Like YouTube Keep Track of Subscribers and Followers",
    excerpt:
      "This article explains the database design patterns behind large-scale subscriber systems—covering schemas, indexing strategies, and performance optimizations.",
    date: "Sep 5, 2025",
    readTime: "5 min read",
    slug: "https://subs-and-follower-system-in-an-application.hashnode.dev",
    author: "Sandeep Mehta",
    authorImg:
      "https://res.cloudinary.com/sandeepmehta/image/upload/v1766504138/Sandeep_mehta_sdz1qp.jpg",
    coverImg:
      "https://res.cloudinary.com/sandeepmehta/image/upload/v1766593921/58c8a92a-5008-4122-8ccc-ea0984ecdc4b_fwlp2u.png",
  },
];

export default function BlogPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section id="blog" ref={sectionRef} className="py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Back to Home */}
        <Link
          href="/#home"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-10 hover:text-primary transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">
          Writing & Technical Articles
        </h2>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className={cn(
                "relative cursor-pointer rounded-2xl bg-card border border-border overflow-hidden transition-all duration-300",
                "hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Cover Image */}
              <Link href={post.slug} target="_blank" className="block overflow-hidden">
                <img
                  src={post.coverImg}
                  alt={post.title}
                  className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
                />
              </Link>

              {/* Content */}
              <div className="p-6">
                {/* Author */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.authorImg}
                      alt={post.author}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="text-sm text-muted-foreground">
                      <p className="font-medium text-foreground">{post.author}</p>
                      <p className="opacity-75">
                        {post.date} · {post.readTime}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <Link href={post.slug} target="_blank">
                  <h3 className="text-xl font-semibold mb-2 leading-tight hover:text-primary transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* CTA */}
                <Link
                  href={post.slug}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline transition-colors duration-200"
                >
                  Read full article
                </Link>

                <ChevronRight className="absolute bottom-6 right-6 h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}