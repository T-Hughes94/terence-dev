'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/'

const projects = [
  {
    title: 'A Plus Truffles',
    description: 'Handcrafted vegan chocolates website, optimized for SEO and accessibility.',
    image: '/images/aplus-truffles.webp',
    link: 'https://aplustruffles.com',
  },
  {
    title: 'Elite Spotless',
    description: 'Luxury cleaning service site with quote forms, optimized for conversions.',
    image: '/images/elite-spotless.webp',
    link: 'https://elitespotless.com',
  },
  // Add more projects if needed
]

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* PROJECTS SECTION */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Featured Projects
      </h1>

      <div className="grid gap-12 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl animate-fade-in-up"
          >
            <div className="relative w-full h-60">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-6 flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              <Link
                href={project.link}
                target="_blank"
                className="mt-4 inline-block px-6 py-2 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 dark:bg-red-500 dark:hover:bg-red-600 transition-colors shadow hover:shadow-lg"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* PRICING SECTION */}
      <div className="mt-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Pricing
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* One-Time Project */}
          <div className="p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg flex flex-col items-center text-center transition hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-green-500 dark:text-red-400 mb-4">One-Time Project</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Custom-built website tailored to your business. Includes SEO optimization and Google Analytics setup.
            </p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mb-6">$3000–$4000</p>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 dark:bg-red-500 dark:hover:bg-red-600 transition-colors"
            >
              Start Your Project
            </Link>
          </div>

          {/* Monthly Retainer */}
          <div className="p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg flex flex-col items-center text-center transition hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-green-500 dark:text-red-400 mb-4">Monthly Retainer</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Ongoing hosting, maintenance, analytics reports, and unlimited small edits.
            </p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mb-6">$150/mo</p>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 dark:bg-red-500 dark:hover:bg-red-600 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out both;
        }
      `}</style>
    </section>
  )
}
