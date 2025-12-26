"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import { MagneticButton } from "./magnetic-button";
import { ParticleBackground } from "./particle-background";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay"
    >
      {/* Cursor-reactive background */}
      <div className="absolute inset-0 overflow-hidden">
        <ParticleBackground />

        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Identity line */}
        <p className="text-sm md:text-base text-muted-foreground mb-6 tracking-wide">
          BS CSDA @ IIT Patna • Full-Stack Developer • Building Production-Ready
          Web Products
        </p>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
          I build scalable, high-impact web products{" "}
          <span className="gradient-text">that solve real problems</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Full-stack developer focused on building clean, scalable, and
          performant systems — from thoughtful UI to robust backend
          architecture
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton href="#projects" variant="primary">
            <span>View My Projects</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </MagneticButton>

          {/* Download Resume */}
          <MagneticButton
            href="/resume/Sandeep_mehta_mern_developer_resume.pdf"
            download
            variant="secondary"
            className="w-full sm:w-auto"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
