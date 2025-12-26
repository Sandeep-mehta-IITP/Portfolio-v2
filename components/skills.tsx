"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Code2,
  Braces,
  Database,
  Server,
  Cloud,
  Paintbrush,
  GitBranch,
  Terminal,
  CreditCard,
  Mail,
  BarChart3,
  Layers,
  Cpu,
} from "lucide-react";

type Category = "Core" | "Backend" | "Tools";

interface Skill {
  name: string;
  short: string;
  detail: string;
  category: Category;
  icon: React.ElementType;
}

const skills: Skill[] = [
  // CORE
  {
    name: "HTML",
    short: "Semantic markup",
    detail:
      "Accessible, SEO-friendly semantic HTML for scalable and maintainable web structures.",
    category: "Core",
    icon: Code2,
  },
  {
    name: "CSS",
    short: "Modern layouts & animations",
    detail:
      "Advanced styling using Flexbox, Grid, responsive design principles, and smooth UI animations.",
    category: "Core",
    icon: Paintbrush,
  },
  {
    name: "JavaScript",
    short: "Modern ES6+",
    detail:
      "Asynchronous patterns, closures, event handling, and DOM manipulation for real-world apps.",
    category: "Core",
    icon: Braces,
  },
  {
    name: "TypeScript",
    short: "Type-safe architecture",
    detail:
      "Strong typing for scalable codebases, predictable APIs, and reduced runtime bugs.",
    category: "Core",
    icon: Braces,
  },
  {
    name: "React",
    short: "Component-driven UI",
    detail:
      "Hooks, composition patterns, reusable components, and performance-focused UI architecture.",
    category: "Core",
    icon: Layers,
  },
  {
    name: "Next.js",
    short: "Production React framework",
    detail:
      "SEO-first applications using App Router, Server Components, API routes, and caching strategies.",
    category: "Core",
    icon: Cpu,
  },
  {
    name: "Python",
    short: "Automation & scripting",
    detail:
      "Scripting, automation, tooling, and backend utilities for productivity and data handling.",
    category: "Core",
    icon: Terminal,
  },

  // BACKEND
  {
    name: "Node.js",
    short: "Backend runtime",
    detail:
      "REST APIs, authentication systems, background jobs, and scalable server-side logic.",
    category: "Backend",
    icon: Server,
  },
  {
    name: "Express.js",
    short: "Minimal backend framework",
    detail:
      "Clean API architecture, middleware patterns, validation, and authentication flows.",
    category: "Backend",
    icon: Server,
  },
  {
    name: "MongoDB",
    short: "NoSQL databases",
    detail:
      "Schema design, indexing, aggregation pipelines, and performance optimization.",
    category: "Backend",
    icon: Database,
  },
  {
    name: "PostgreSQL",
    short: "Relational databases",
    detail:
      "Structured data modeling, joins, transactions, and SQL-based analytics.",
    category: "Backend",
    icon: Database,
  },
  {
    name: "Prisma ORM",
    short: "Type-safe database access",
    detail:
      "Schema-driven ORM with migrations, relations, and type-safe queries.",
    category: "Backend",
    icon: Database,
  },
  {
    name: "Docker",
    short: "Containerized deployments",
    detail:
      "Consistent environments, container-based deployments, and CI/CD-friendly workflows.",
    category: "Backend",
    icon: Cloud,
  },

  // TOOLS
  {
    name: "Tailwind CSS",
    short: "Utility-first styling",
    detail:
      "Rapid UI development with consistent design systems and responsive layouts.",
    category: "Tools",
    icon: Paintbrush,
  },
  {
    name: "Git & GitHub",
    short: "Version control",
    detail:
      "Branching strategies, clean commits, pull requests, and collaborative workflows.",
    category: "Tools",
    icon: GitBranch,
  },
  {
    name: "VS Code",
    short: "Development environment",
    detail:
      "Highly customized editor with extensions for productivity and debugging.",
    category: "Tools",
    icon: Terminal,
  },
  {
    name: "Canva",
    short: "Design & visuals",
    detail:
      "Quick design assets, UI mockups, and visual content for products and presentations.",
    category: "Tools",
    icon: Paintbrush,
  },
  {
    name: "Stripe & Razorpay",
    short: "Payment integrations",
    detail:
      "Secure payment integrations including cards, UPI, subscriptions, webhooks, and real-world checkout workflows for global and Indian markets.",
    category: "Tools",
    icon: CreditCard,
  },
  {
    name: "Brevo SMTP",
    short: "Transactional emails",
    detail:
      "Email delivery for authentication, notifications, and transactional workflows.",
    category: "Tools",
    icon: Mail,
  },
  {
    name: "Redux",
    short: "State management",
    detail:
      "Predictable global state, scalable architecture, and complex UI state handling.",
    category: "Tools",
    icon: Layers,
  },
  {
    name: "Data Analytics",
    short: "Insights & visualization",
    detail:
      "Data analysis, visualization, and deriving insights for decision-making.",
    category: "Tools",
    icon: BarChart3,
  },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>("Core");
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  return (
    <section id="skills" className="relative py-14 md:py-20">
      {/* Header */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          Skills & Expertise
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-primary">
          A production-focused skill set built to design, develop, and scale
          real-world web applications — from idea to deployment.
        </p>
      </div>

      {/* Categories */}
      <div className="flex justify-center gap-3 mb-12">
        {(["Core", "Backend", "Tools"] as Category[]).map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setHoveredSkill(null);
            }}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium transition",
              activeCategory === cat
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/70"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="relative max-w-5xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills
          .filter((s) => s.category === activeCategory)
          .map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="relative group"
              >
                <div className="p-4 rounded-xl bg-card border border-border flex items-center gap-3 hover:border-primary/40 transition">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold">{skill.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {skill.short}
                    </p>
                  </div>
                </div>

                {/* Hover Popup */}
                <AnimatePresence>
                  {hoveredSkill?.name === skill.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-20 left-0 right-0 top-full mt-2 p-4 rounded-xl bg-popover border border-border shadow-lg text-sm"
                    >
                      {skill.detail}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
      </div>
    </section>
  );
}
