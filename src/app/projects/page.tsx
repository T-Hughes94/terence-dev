'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navbar from './../components/Navbar'

const projects = [
  {
    title: 'A Plus Truffles',
    description: 'Handcrafted vegan chocolates website, optimized for SEO and accessibility.',
    image: '/Apluslogo.webp',
    link: 'https://aplustruffles.com',
  },
  {
    title: 'Elite Spotless',
    description: 'Luxury cleaning service site with quote forms, optimized for conversions.',
    image: '/ecslogo.webp',
    link: 'https://elitespotless.com',
  },
]

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* Projects */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Featured Projects
        </h1>

        <div className="grid gap-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden transition-transform transform hover:scale-[1.02] animate-fade-in-up"
            >
              <div className="relative w-full h-60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-3">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{project.description}</p>
                <Link
                  href={project.link}
                  target="_blank"
                  className="inline-block mt-4 px-5 py-2 rounded-full bg-green-500 dark:bg-red-500 text-white font-medium hover:bg-green-600 dark:hover:bg-red-600 transition"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="mt-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Pricing
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {/* One-Time Project */}
            <div className="pricing-card-modern">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-2">
                One-Time Project
              </h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-4">$3000–$4000</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                Tailored website for your business with built-in SEO and analytics, hosted on Vercel for maximum performance.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-6">
                <li>✓ Custom Design & Development</li>
                <li>✓ SEO Optimization</li>
                <li>✓ Google Analytics Setup</li>
                <li>✓ $25/month hosting</li>
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-2 rounded-md bg-green-500 dark:bg-red-500 text-white font-semibold hover:bg-green-600 dark:hover:bg-red-600 transition"
              >
                Start Your Project
              </Link>
            </div>

            {/* Monthly Retainer (Middle Card) */}
            <div className="pricing-card-modern featured-card">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-2">
                Monthly Retainer
              </h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-4">$150/mo</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                Ongoing hosting, maintenance, analytics reports, unlimited updates, and 24/7 support to help your business grow.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-6">
                <li>✓ Unlimited Edits</li>
                <li>✓ Monthly Analytics Reports</li>
                <li>✓ Hosting & Security</li>
                <li>✓ Dedicated Support</li>
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-2 rounded-md bg-green-500 dark:bg-red-500 text-white font-semibold hover:bg-green-600 dark:hover:bg-red-600 transition"
              >
                Get Started
              </Link>
            </div>

            {/* Personal Portfolio */}
            <div className="pricing-card-modern">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-2">
                Personal Portfolio
              </h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Starting at $500</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                Clean, customizable portfolio to showcase your work and brand. Single-page or multi-page options available.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-6">
                <li>✓ Modern SPA or Multi-Page</li>
                <li>✓ Mobile Optimized</li>
                <li>✓ SEO & Analytics Ready</li>
                <li>✓ Scalable Add-ons</li>
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-2 rounded-md bg-green-500 dark:bg-red-500 text-white font-semibold hover:bg-green-600 dark:hover:bg-red-600 transition"
              >
                Start Portfolio
              </Link>
            </div>
          </div>
        </div>

        {/* Styles */}
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
            animation: fade-in-up 0.8s ease-out both;
          }

          .pricing-card-modern {
            border-radius: 1rem;
            padding: 2rem;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          :global(html.dark) .pricing-card-modern {
            background: #000000;
            backdrop-filter: blur(12px);
            box-shadow: 0 0 20px rgba(239, 68, 68, 0.4), 0 0 30px rgba(239, 68, 68, 0.2);
            border: 1px solid rgba(239, 68, 68, 0.3);
          }

          :global(html.dark) .pricing-card-modern:hover {
            transform: scale(1.03);
            box-shadow: 0 0 30px rgba(239, 68, 68, 0.5);
          }

          :global(html.light) .pricing-card-modern {
            background: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0.05);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          }

          :global(html.light) .pricing-card-modern:hover {
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          }

          :global(html.light) .featured-card {
            background-color: #f0fdf4;
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.15);
            border: 1px solid rgba(34, 197, 94, 0.3);
          }

          :global(html.dark) .featured-card {
            background-color: #000000;
            box-shadow: 0 0 25px rgba(239, 68, 68, 0.4);
            border: 1px solid rgba(239, 68, 68, 0.3);
          }
        `}</style>
      </section>
    </>
  )
}

