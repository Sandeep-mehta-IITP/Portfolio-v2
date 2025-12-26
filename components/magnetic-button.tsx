"use client";

import type React from "react";
import { useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string; // ✅ optional
  download?: boolean; // ✅ new
  variant?: "primary" | "secondary";
  className?: string;
}

export function MagneticButton({
  children,
  href,
  download = false,
  variant = "primary",
  className,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (e.clientX - centerX) * 0.15;
      const y = (e.clientY - centerY) * 0.15;
      setPosition({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseClasses = cn(
    "group relative inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300",
    variant === "primary" &&
      "animated-border text-foreground hover:shadow-lg hover:shadow-primary/20",
    variant === "secondary" &&
      "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border",
    className
  );

  const style = {
    transform: `translate(${position.x}px, ${position.y}px)`,
  };

  /* 🔹 DOWNLOAD BUTTON */
  if (download && href) {
    return (
      <a
        ref={buttonRef}
        href={href}
        download
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={baseClasses}
        style={style}
      >
        <span className="relative z-10 flex items-center">{children}</span>
      </a>
    );
  }

  /* 🔹 NORMAL LINK BUTTON */
  if (href) {
    return (
      <Link
        ref={buttonRef}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={baseClasses}
        style={style}
      >
        <span className="relative z-10 flex items-center">{children}</span>
        {variant === "primary" && (
          <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] opacity-0 group-hover:opacity-10 transition-opacity" />
        )}
      </Link>
    );
  }

  /* 🔹 FALLBACK BUTTON (no href) */
  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={baseClasses}
      style={style}
      type="button"
    >
      <span className="relative z-10 flex items-center">{children}</span>
    </button>
  );
}
