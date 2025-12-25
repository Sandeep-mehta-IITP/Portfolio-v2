"use client";

import { useRef } from "react";
import Image from "next/image";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div
            className={cn(
              "relative transition-all duration-700 group",
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            )}
          >
            {/* Main Image Container */}
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
              <Image
                src="https://res.cloudinary.com/sandeepmehta/image/upload/v1766505110/git_itdohf.jpg"
                alt="Shiv - Full-Stack Developer"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />

              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />

              {/* Subtle vignette for cinematic feel */}
              <div className="absolute inset-0 bg-black/10 rounded-3xl pointer-events-none" />
            </div>
          </div>

          {/* Content */}
          <div
            className={cn(
              "transition-all duration-700 delay-200",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              About Me
            </h2>

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
