"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { Github, ExternalLink, ArrowUpRight, Zap } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: "quickstay",
    title: "QuickStay",
    tagline: "Production-Ready Hotel Booking Platform",
    description:
      "A full-stack hotel booking app with real-time availability, dynamic pricing, and seamless user flows—built for scalability and high conversion rates.",
    highlights: [
      "API-driven booking workflows",
      "Geolocation & map integration",
      "Redux state management",
      "MongoDB geospatial queries",
    ],
    stack: ["React", "Vite", "Redux Toolkit", "Node.js", "MongoDB", "Tailwind"],
    image:
      "https://res.cloudinary.com/sandeepmehta/image/upload/v1766246835/Screenshot_2025-12-20_213508_da5i2b.png",
    github: {
      frontend:
        "https://github.com/Sandeep-mehta-IITP/Hotel-Booking-Application-Frontend",
      backend:
        "https://github.com/Sandeep-mehta-IITP/Hotel-Booking-Application-Backend",
    },
    live: "https://quickstay-kappa.vercel.app",
    featured: true,
  },
  {
    id: "youtube-tweet",
    title: "YouTube-Tweet",
    tagline: "Unified Video & Micro-Content Platform",
    description:
      "A full-stack creator platform that combines long-form video publishing with tweet-style updates, enabling seamless audience engagement from a single ecosystem.",
    highlights: [
      "Video uploads & playlists",
      "Tweet-style creator posts",
      "Channels & subscriptions",
      "Scalable frontend architecture",
    ],
    stack: ["React", "Redux Toolkit", "Node.js", "MongoDB", "Cloudinary"],
    image:
      "https://res.cloudinary.com/sandeepmehta/image/upload/v1763968227/Screenshot_2025-11-24_123832_jotcaa.png",
    github: {
      frontend: "https://github.com/Sandeep-mehta-IITP/Youtube-tweet-frontend",
      backend: "https://github.com/Sandeep-mehta-IITP/Youtube-tweet-Backend",
    },
    live: "https://youtube-tweet-frontend.onrender.com",
    featured: true,
  },
  {
    id: "prescripto",
    title: "Prescripto",
    tagline: "Doctor Appointment Booking Platform",
    description:
      "Role-based healthcare booking system with secure payments, real-time slot management, and admin dashboards—designed for reliability and user trust.",
    highlights: [
      "Patient & doctor dashboards",
      "Razorpay payment integration",
      "Twilio SMS notifications",
      "Conflict-free slot booking",
    ],
    stack: ["React", "Tailwind", "Node.js", "MongoDB", "Razorpay", "JWT"],
    image:
      "https://res.cloudinary.com/sandeepmehta/image/upload/v1766567387/Screenshot_2025-12-24_143350_w0aebx.png",
    github: {
      frontend:
        "https://github.com/Sandeep-mehta-IITP/Prescripto-Doctor-Appointment",
      backend:
        "https://github.com/Sandeep-mehta-IITP/Prescripto-Doctor-Appointment",
    },
    live: "https://prescripto-gh4r.onrender.com",
    featured: false,
  },
  {
    id: "ecotrack",
    title: "EcoTrack",
    tagline: "AI-Powered Sustainability Platform",
    description:
      "Track carbon footprints with AI insights, gamified challenges, and blockchain-verified offsets—empowering users to make a measurable environmental impact.",
    highlights: [
      "Gemini AI personalization",
      "3D Earth visualization",
      "Firebase real-time sync",
      "Blockchain carbon credits",
    ],
    stack: [
      "React",
      "Tailwind",
      "Node.js",
      "Gemini AI",
      "Firebase",
      "Three.js",
    ],
    image:
      "https://res.cloudinary.com/sandeepmehta/image/upload/v1766567387/Screenshot_2025-12-24_143614_lpzkvx.png",
    github: {
      frontend: "https://github.com/Sandeep-mehta-IITP/eco_track",
      backend: "https://github.com/Sandeep-mehta-IITP/eco_track",
    },
    live: "https://eco-track-sg2k.onrender.com",
    featured: false,
  },
  {
    id: "imagify",
    title: "Imagify",
    tagline: "AI Image Generation Platform",
    description:
      "Credit-based AI image generator with secure auth, payment gateways, and remixable galleries— a lean SaaS for creative workflows at scale.",
    highlights: [
      "Prompt-to-image generation",
      "Razorpay credit system",
      "Queue-based processing",
      "Gallery & remix features",
    ],
    stack: [
      "React",
      "Tailwind",
      "Node.js",
      "MongoDB",
      "OpenAI API",
      "Razorpay",
    ],
    image:
      "https://res.cloudinary.com/sandeepmehta/image/upload/v1745654098/Screenshot_2025-04-26_111855_uweak8.png",
    github: {
      frontend: "https://github.com/Sandeep-mehta-IITP/imagify_frontend",
      backend: "https://github.com/Sandeep-mehta-IITP/imagify_backend",
    },
    live: "https://imagify-frontend-qope.onrender.com",
    featured: false,
  },
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section id="projects" ref={sectionRef} className="py-14 md:py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className={cn(
            "max-w-2xl mx-auto text-center mb-20 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Selected Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Production-ready applications showcasing architecture, performance
            optimization, and thoughtful UX decisions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              style={{ transitionDelay: `${index * 120}ms` }}
              className={cn(
                "group relative rounded-3xl overflow-hidden border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
            >
              {/* Badge */}
              {project.featured && (
                <span className="absolute top-5 left-5 z-10 px-4 py-1.5 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
                  Featured Project
                </span>
              )}

              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-7">
                <span className="inline-block mb-3 text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {project.tagline}
                </span>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {project.highlights.slice(0, 4).map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <Zap className="h-3.5 w-3.5 text-primary" />
                      {item}
                    </div>
                  ))}
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-secondary text-muted-foreground px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
                  View Case Study
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
