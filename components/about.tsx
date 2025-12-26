"use client";

import { useRef } from "react";
import Image from "next/image";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sandeep Mehta | Full-Stack Software Engineer & MERN Developer",
  description:
    "Learn about Sandeep Mehta, a Full-Stack Software Engineer and MERN Developer from IIT Patna. Focused on building scalable, production-ready web applications with strong architecture, performance, and maintainability.",

  keywords: [
    "About Full Stack Developer",
    "About MERN Developer",
    "Software Engineer Portfolio",
    "Full Stack Developer IIT Patna",
    "React Next.js Developer Background",
    "Backend Frontend Developer",
    "Product Focused Software Engineer",
  ],

  authors: [{ name: "Sandeep Mehta" }],
  creator: "Sandeep Mehta",

  openGraph: {
    title: "About Sandeep Mehta | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer from IIT Patna with experience in designing and building scalable, production-grade web systems.",
    type: "profile",
    locale: "en_IN",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section id="about" ref={sectionRef} className="py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid items-center">
          <div
            className={cn(
              "transition-all duration-700 delay-200",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
          >
            <h2 className="text-3xl md:text-4xl text-center font-bold tracking-tight mb-6">
              About Me
            </h2>

            <p className="sr-only">
              Full-Stack Software Engineer and MERN Developer from IIT Patna,
              specializing in scalable, production-ready web applications.
            </p>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground font-medium">
                I didn’t enter software engineering chasing tools or trends. I
                entered it curious about how real systems behave—under load, at
                scale, and over time.
              </p>

              <p>
                I am currently pursuing my Bachelor’s in Computer Science & Data
                Analytics at IIT Patna. Along the way, working on
                production-grade systems during my full-stack internship
                reshaped how I think about software—far beyond what tutorials or
                documentation could offer.
              </p>

              <p>
                That experience marked a shift in mindset. From writing code
                that merely works, to designing systems that endure. I learned
                that strong engineering is less about novelty and more about
                reliability, clarity, and intentional trade-offs.
              </p>

              <p>
                I gravitate toward building software where architecture,
                performance, and user experience reinforce one another. Where
                technical decisions respect constraints, and solutions scale not
                just in traffic—but in maintainability.
              </p>

              <p className="text-lg text-foreground font-medium pt-2">
                Today, I focus on crafting thoughtful, production-ready web
                products—systems that are as intuitive for users as they are
                dependable for the teams that maintain them.
              </p>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-8 mt-8 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold gradient-text">
                  IIT Patna
                </div>
                <div className="text-sm text-muted-foreground">
                  BS in CS & Data Analytics
                </div>
              </div>

              <div>
                <div className="text-2xl font-bold gradient-text">2023</div>
                <div className="text-sm text-muted-foreground">
                  Began Engineering Journey
                </div>
              </div>

              <div>
                <div className="text-2xl font-bold gradient-text">
                  Full-Stack
                </div>
                <div className="text-sm text-muted-foreground">
                  Production System Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
