"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Twitter,
  Heart,
  ArrowUpRight,
  Code2,
  Coffee,
  Instagram,
} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Sandeep-mehta-IITP",
    icon: Github,
    username: "Sandeep-mehta-IITP",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sandeep-mehta-90a1212b7",
    icon: Linkedin,
    username: "Sandeep Mehta",
  },
  {
    name: "Twitter",
    href: "https://x.com/Shivskm2023",
    icon: Twitter,
    username: "@Shivskm2023",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sandeep._mehta",
    icon: Instagram,
    username: "sandeep._mehta",
  },
];

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "EXpress",
  "Tailwind CSS",
  "MongdoDB",
];

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-secondary/50 border-t border-border">
      {/* Footer Main */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand / About */}
          <div className="lg:col-span-1">
            <Link href="#home" className="inline-block text-2xl font-bold mb-4">
              <span className="gradient-text">Sandeep Mehta</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Senior Full-Stack Engineer building scalable, maintainable, and
              high-performance web products. Open to freelance projects,
              internships, and full-time roles.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
              <span>Available for collaboration & new opportunities</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                >
                  {link.name}
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="font-semibold mb-4">Tech Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-muted-foreground bg-background px-2.5 py-1.5 rounded-lg border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1.5">
              <Code2 className="h-3.5 w-3.5" />
              Production-ready, scalable & maintainable solutions
            </p>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4">Connect with Me</h3>
            <div className="space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-background border border-border group-hover:border-primary/50 group-hover:bg-primary/5 transition-colors">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span>{social.username}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-muted-foreground flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2 text-center sm:text-left">
              <span>© {new Date().getFullYear()} Sandeep Mehta</span>

              <span className="flex items-center justify-center gap-1.5">
                Made with
                <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" />
                &
                <Coffee className="h-3.5 w-3.5 text-amber-600" />
                <span className="ml-1">Code & Passion</span>
              </span>
            </p>

            <div className="flex items-center gap-6">
              <p className="text-sm text-primary md:text-muted-foreground">IIT Patna, India</p>
              <button
                onClick={scrollToTop}
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                Back to top
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
