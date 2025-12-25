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
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  category: Category;
  icon: React.ElementType;
}

const skills: Skill[] = [
  // Core
  {
    name: "HTML",
    description: "Semantic markup for accessible web structures.",
    level: "Expert",
    category: "Core",
    icon: Code2,
  },
  {
    name: "CSS",
    description: "Advanced styling with Flexbox, Grid, and animations.",
    level: "Advanced",
    category: "Core",
    icon: Paintbrush,
  },
  {
    name: "JavaScript",
    description: "ES6+, async patterns, and DOM manipulation.",
    level: "Advanced",
    category: "Core",
    icon: Braces,
  },
  {
    name: "TypeScript",
    description: "Type-safe JavaScript for scalable apps.",
    level: "Advanced",
    category: "Core",
    icon: Braces,
  },
  {
    name: "React",
    description: "Component-based UI with hooks and state.",
    level: "Expert",
    category: "Core",
    icon: Layers,
  },
  {
    name: "Next.js",
    description: "SSR & API routes framework.",
    level: "Advanced",
    category: "Core",
    icon: Cpu,
  },
  {
    name: "Python",
    description: "Scripting, automation & tooling.",
    level: "Intermediate",
    category: "Core",
    icon: Terminal,
  },

  // Backend
  {
    name: "Node.js",
    description: "Server-side JavaScript runtime.",
    level: "Advanced",
    category: "Backend",
    icon: Server,
  },
  {
    name: "Express.js",
    description: "Minimal and flexible backend framework.",
    level: "Advanced",
    category: "Backend",
    icon: Server,
  },
  {
    name: "MongoDB",
    description: "NoSQL database & schema design.",
    level: "Advanced",
    category: "Backend",
    icon: Database,
  },
  {
    name: "PostgreSQL",
    description: "Relational SQL database systems.",
    level: "Intermediate",
    category: "Backend",
    icon: Database,
  },
  {
    name: "Prisma ORM",
    description: "Type-safe database ORM.",
    level: "Advanced",
    category: "Backend",
    icon: Database,
  },
  {
    name: "Docker",
    description: "Containerization & deployment workflows.",
    level: "Intermediate",
    category: "Backend",
    icon: Cloud,
  },

  // Tools
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework.",
    level: "Advanced",
    category: "Tools",
    icon: Paintbrush,
  },
  {
    name: "Git / GitHub",
    description: "Version control & collaboration.",
    level: "Advanced",
    category: "Tools",
    icon: GitBranch,
  },
  {
    name: "VS Code",
    description: "Highly customizable code editor.",
    level: "Advanced",
    category: "Tools",
    icon: Terminal,
  },
  {
    name: "Canva",
    description: "Design & prototyping tool.",
    level: "Intermediate",
    category: "Tools",
    icon: Paintbrush,
  },
  {
    name: "Stripe",
    description: "Payment gateway integrations.",
    level: "Advanced",
    category: "Tools",
    icon: CreditCard,
  },
  {
    name: "Razorpay",
    description: "Indian payment gateway solutions.",
    level: "Advanced",
    category: "Tools",
    icon: CreditCard,
  },
  {
    name: "Brevo SMTP",
    description: "Transactional email service.",
    level: "Advanced",
    category: "Tools",
    icon: Mail,
  },
  {
    name: "Data Analytics",
    description: "Data analysis & visualization.",
    level: "Intermediate",
    category: "Tools",
    icon: BarChart3,
  },
  {
    name: "Redux",
    description: "Predictable state management.",
    level: "Advanced",
    category: "Tools",
    icon: Layers,
  },
];

const levelGlow = {
  Beginner: "from-zinc-400 to-zinc-500",
  Intermediate: "from-sky-400 to-cyan-500",
  Advanced: "from-indigo-400 to-violet-500",
  Expert: "from-emerald-400 to-lime-500",
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>("Core");
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-muted/40 blur-3xl" />

      {/* Header */}
      <div className="text-center mb-20 px-4">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          Skills & Technical Expertise
        </h2>
        <p className="mt-5 text-primary max-w-xl mx-auto">
          A production-focused skill set built to design, develop, and scale
          real-world web applications — from idea to deployment.
        </p>
      </div>

      {/* Categories */}
      <div className="flex justify-center gap-3 mb-16">
        {(["Core", "Backend", "Tools"] as Category[]).map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setActiveSkill(null);
            }}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-medium transition-all",
              activeCategory === cat
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-muted text-muted-foreground hover:bg-muted/70"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skill Grid */}
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills
          .filter((s) => s.category === activeCategory)
          .map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onHoverStart={() => setActiveSkill(skill)}
                className="relative cursor-pointer p-6 rounded-2xl bg-card/70 backdrop-blur border border-border transition
                hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="mb-4 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary" />
                </div>

                <h4 className="font-semibold mb-2">{skill.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
      </div>

      {/* Active Skill Card */}
      <AnimatePresence>
        {activeSkill && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3 }}
            className="mt-20 mx-auto max-w-xl rounded-2xl bg-card border border-border p-8 text-center backdrop-blur transition
                hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
          >
            <div className="mx-auto mb-4 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
              <activeSkill.icon className="h-7 w-7 text-primary" />
            </div>

            <h3 className="text-2xl font-semibold mb-2">{activeSkill.name}</h3>
            <p className="text-muted-foreground mb-4">
              {activeSkill.description}
            </p>

            <span
              className={cn(
                "inline-block px-4 py-1.5 text-sm rounded-full text-white bg-gradient-to-r",
                levelGlow[activeSkill.level]
              )}
            >
              {activeSkill.level}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
