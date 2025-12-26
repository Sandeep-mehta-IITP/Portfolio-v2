"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { Brain, Scale, Zap, BookOpen } from "lucide-react";

const principles = [
  {
    icon: Brain,
    title: "Problem Before Everything",
    description:
      "I resist the urge to code early. I sit with the problem, question assumptions, and explore the real pain beneath the surface—because the right solution often looks different once the problem is truly understood.",
  },
  {
    icon: Scale,
    title: "Every Decision Has a Cost",
    description:
      "There is no perfect solution—only informed choices. I weigh trade-offs across performance, complexity, scalability, and time, choosing what serves the product best both now and in the future.",
  },
  {
    icon: Zap,
    title: "Performance Is User Experience",
    description:
      "Speed shapes trust. I treat performance as a first-class feature—measuring, budgeting, and optimizing where it matters most, so products feel fast, reliable, and effortless to use.",
  },
  {
    icon: BookOpen,
    title: "Code Is a Long-Term Conversation",
    description:
      "Code outlives its author. I write with clarity and intent—clear names, simple structures, and thoughtful architecture—so future engineers can understand, extend, and trust the system.",
  },
];

export function HowIThink() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section ref={sectionRef} className="bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div
          className={cn(
            "max-w-3xl mx-auto mb-10 text-center transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2.5">
            How I think when I build.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Code is only the visible layer.
            <br />
            These are the beliefs and mental models that shape every system I
            design.
          </p>
        </div>

        {/* Principles grid */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className={cn(
                "relative group rounded-xl p-[1px] transition-all duration-500",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--gradient-start)] via-transparent to-[var(--gradient-end)] opacity-40 blur-sm group-hover:opacity-80 animate-gradient" />

              {/* Card content */}
              <div className="relative rounded-xl bg-card border border-border/60 p-6 h-full transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-primary/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-[var(--gradient-start)]/10 to-[var(--gradient-end)]/10 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:from-[var(--gradient-start)]/25 group-hover:to-[var(--gradient-end)]/25">
                    <principle.icon className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 transition-colors group-hover:text-primary">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p
          className={cn(
            "mt-8 text-center text-muted-foreground italic transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          This is how I try to build software worth maintaining.
        </p>
      </div>
    </section>
  );
}
