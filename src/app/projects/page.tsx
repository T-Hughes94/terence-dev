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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

          <div className="grid gap-12 md:grid-cols-2">
            {/* One-Time Project */}
            <div className="pricing-card">
              <h3 className="text-2xl font-bold text-green-500 dark:text-white mb-4 text-center">Lump Sum</h3>
              <ul className="text-gray-700 dark:text-gray-300 mb-6 space-y-3 text-sm">
                <li>✅ Custom Design and Development</li>
                <li>✅ $25/mo Hosting</li>
                <li>✅ $100/Page after 5</li>
                <li>✅ Add a blog (+$250)</li>
                <li>🚫 24/7 Support</li>
                <li>🚫 Unlimited Edits</li>
              </ul>
              <p className="text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-2">$3800</p>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-6">+ $25/mo hosting</p>
              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 rounded-full bg-green-500 dark:bg-red-500 text-white font-semibold hover:bg-green-600 dark:hover:bg-red-600 shadow-lg transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Monthly Retainer */}
            <div className="pricing-card">
              <h3 className="text-2xl font-bold text-green-500 dark:text-white mb-4 text-center">Monthly</h3>
              <ul className="text-gray-700 dark:text-gray-300 mb-6 space-y-3 text-sm">
                <li>✅ Design and Hosting Included</li>
                <li>✅ Unlimited Edits</li>
                <li>✅ Analytics Reports</li>
                <li>✅ 24/7 Support</li>
                <li>✅ Lifetime Updates</li>
                <li>✅ SEO & Blog Add-ons</li>
              </ul>
              <p className="text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-2">$150</p>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-6">per month</p>
              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 rounded-full bg-green-500 dark:bg-red-500 text-white font-semibold hover:bg-green-600 dark:hover:bg-red-600 shadow-lg transition-colors"
                >
                  Get Started
                </Link>
              </div>
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
            animation: fade-in-up 1s ease-out both;
          }

          .pricing-card {
            background-color: white;
            border-radius: 1rem;
            padding: 2.5rem;
            border: 1px solid #22c55e;
            box-shadow:
              0 0 15px rgba(34, 197, 94, 0.4),
              0 0 30px rgba(34, 197, 94, 0.2),
              0 0 45px rgba(34, 197, 94, 0.1);
            transition:
              transform 0.3s ease,
              box-shadow 0.3s ease,
              background-color 0.3s ease;
          }

          .pricing-card:hover {
            transform: scale(1.03);
          }

          :global(html.dark) .pricing-card {
            background-color: #111827;
            border-color: #ef4444;
            box-shadow:
              0 0 15px rgba(239, 68, 68, 0.4),
              0 0 30px rgba(239, 68, 68, 0.2),
              0 0 45px rgba(239, 68, 68, 0.1);
          }
        `}</style>
      </section>
    </>
  )
}





