'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import ParticlesBackground from './ParticlesBackground'

export default function HeroSection() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [shineActive, setShineActive] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const timer = setTimeout(() => {
        if (document.documentElement.classList.contains('light')) {
          setShineActive(true)
        }
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [])

  if (!mounted) return null

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] px-6 md:px-0 overflow-hidden animate-fade-in">
      {/* Particle Background (dark mode only) */}
      {theme === 'dark' && (
        <div className="absolute inset-0 -z-10">
          <ParticlesBackground />
        </div>
      )}

      {/* Hero Text */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight relative overflow-hidden">
        {/** Title */}
        <span
          className={`relative inline-block text-green-500 dark:text-red-400 ${
            shineActive ? 'shine-effect' : ''
          }`}
        >
          Crafting Modern Web Experiences
        </span>
      </h1>

      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
        Building fast, accessible websites with integrated SEO and Google Analytics to grow your online presence.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row gap-6">
        <Link
          href="/projects"
          className="px-8 py-3 rounded-lg text-lg font-semibold transition-all shadow-md hover:scale-105
            bg-green-500 hover:bg-green-600 text-white dark:bg-red-500 dark:hover:bg-red-600
            hover:shadow-glow dark:hover:shadow-glow-dark"
        >
          View Projects
        </Link>

        <Link
          href="/contact"
          className="px-8 py-3 border-2 rounded-lg text-lg font-semibold transition-all shadow-md hover:scale-105
            border-green-500 text-green-500 hover:bg-green-500 hover:text-white
            dark:border-red-400 dark:text-red-400 dark:hover:bg-red-500 dark:hover:text-white
            hover:shadow-glow dark:hover:shadow-glow-dark"
        >
          Contact Me
        </Link>
      </div>

      {/* Special Styles */}
      <style jsx>{`
        /* Shine effect only once */
        .shine-effect::after {
          content: '';
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%);
          transform: skewX(-20deg);
          animation: shine 2.5s ease-in-out 1 forwards;
          pointer-events: none;
        }

        @keyframes shine {
          0% {
            left: -75%;
          }
          100% {
            left: 125%;
          }
        }

        /* Fade-in animation for hero content */
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        /* Soft glow hover effect for buttons */
        .hover\\:shadow-glow:hover {
          box-shadow: 0 0 15px rgba(34, 197, 94, 0.6); /* Green glow */
        }

        .dark .hover\\:shadow-glow-dark:hover {
          box-shadow: 0 0 15px rgba(239, 68, 68, 0.6); /* Red glow */
        }
      `}</style>
    </section>
  )
}











