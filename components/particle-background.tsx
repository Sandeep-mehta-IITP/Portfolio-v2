"use client"

import { useEffect, useRef, useCallback } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
  originalX: number
  originalY: number
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>()

  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = []
    const particleCount = Math.floor((width * height) / 8000) // Responsive particle count

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        originalX: x,
        originalY: y,
      })
    }
    return particles
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
      particlesRef.current = initParticles(window.innerWidth, window.innerHeight)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      const width = window.innerWidth
      const height = window.innerHeight

      ctx.clearRect(0, 0, width, height)

      const particles = particlesRef.current
      const mouse = mouseRef.current
      const connectionDistance = 120
      const mouseInfluence = 150

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i]

        // Mouse repulsion effect
        const dx = mouse.x - particle.x
        const dy = mouse.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouseInfluence) {
          const force = (mouseInfluence - distance) / mouseInfluence
          particle.x -= (dx / distance) * force * 2
          particle.y -= (dy / distance) * force * 2
        } else {
          // Return to original position slowly
          particle.x += (particle.originalX - particle.x) * 0.01
          particle.y += (particle.originalY - particle.y) * 0.01
        }

        // Add base movement
        particle.x += particle.vx
        particle.y += particle.vy

        // Boundary check
        if (particle.x < 0 || particle.x > width) particle.vx *= -1
        if (particle.y < 0 || particle.y > height) particle.vy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(37, 99, 235, ${particle.opacity})`
        ctx.fill()

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j]
          const distX = particle.x - other.x
          const distY = particle.y - other.y
          const dist = Math.sqrt(distX * distX + distY * distY)

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.3
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }

        // Connect to mouse if close
        if (distance < mouseInfluence) {
          const opacity = (1 - distance / mouseInfluence) * 0.5
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(37, 99, 235, ${opacity})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [initParticles])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ background: "transparent" }}
    />
  )
}
