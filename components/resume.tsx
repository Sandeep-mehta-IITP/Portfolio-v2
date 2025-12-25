"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Download, Briefcase, GraduationCap, Code } from "lucide-react"
import { MagneticButton } from "./magnetic-button"

const experience = [
  {
    type: "work",
    title: "Full-Stack Developer Intern",
    company: "Production Environment",
    period: "2024",
    description:
      "Worked on production-grade applications, learning real-world engineering practices including code reviews, deployment pipelines, and system design.",
    highlights: ["Production deployment experience", "Code review practices", "System design exposure"],
  },
]

const education = [
  {
    type: "education",
    title: "Bachelor of Science",
    company: "IIT Patna",
    period: "2023 - Present",
    description:
      "Computer Science & Data Analytics. Focused on algorithms, system design, and building practical applications.",
    highlights: ["Data Structures & Algorithms", "System Design", "Machine Learning"],
  },
]

const skills = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"],
  tools: ["Git", "Docker", "Vercel", "Figma", "VS Code"],
}

export function Resume() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section id="resume" ref={sectionRef} className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div
          className={cn(
            "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Resume</h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              {"Experience isn't measured in years — it's measured in decisions."}
            </p>
          </div>
          <MagneticButton href="/resume.pdf" variant="primary">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </MagneticButton>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience & Education */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            <div
              className={cn(
                "transition-all duration-700 delay-100",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
            >
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                <Briefcase className="h-5 w-5 text-primary" />
                Experience
              </h3>
              {experience.map((item, index) => (
                <div key={index} className="relative pl-6 pb-6 border-l border-border last:pb-0">
                  <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 rounded-full bg-primary" />
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="font-semibold">{item.title}</h4>
                    <span className="text-sm text-muted-foreground">{item.period}</span>
                  </div>
                  <p className="text-primary text-sm mb-2">{item.company}</p>
                  <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <span key={highlight} className="text-xs bg-secondary px-2 py-1 rounded">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div
              className={cn(
                "transition-all duration-700 delay-200",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
            >
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education
              </h3>
              {education.map((item, index) => (
                <div key={index} className="relative pl-6 pb-6 border-l border-border last:pb-0">
                  <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 rounded-full bg-primary" />
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="font-semibold">{item.title}</h4>
                    <span className="text-sm text-muted-foreground">{item.period}</span>
                  </div>
                  <p className="text-primary text-sm mb-2">{item.company}</p>
                  <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <span key={highlight} className="text-xs bg-secondary px-2 py-1 rounded">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div
            className={cn(
              "transition-all duration-700 delay-300",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
              <Code className="h-5 w-5 text-primary" />
              Skills
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm bg-card border border-border px-3 py-1.5 rounded-lg hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm bg-card border border-border px-3 py-1.5 rounded-lg hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm bg-card border border-border px-3 py-1.5 rounded-lg hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
