'use client'

import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] px-6 md:px-0">
      {/* Background Effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-gray-800 opacity-50"></div>

      {/* Hero Content */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
        Building Modern <span className="text-blue-600 dark:text-blue-400">Web Experiences</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
        I craft websites that are fast, accessible, and beautiful. Let's create something extraordinary together.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row gap-6">
        <Link
          href="/projects"
          className="px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all shadow-md hover:scale-105"
        >
          View Projects
        </Link>

        <Link
          href="/contact"
          className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all shadow-md hover:scale-105"
        >
          Contact Me
        </Link>
      </div>
    </section>
  )
}
