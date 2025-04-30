'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-100 dark:border-gray-800">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-400 dark:text-gray-100">
          Terence.dev
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <Link href="/projects" className="relative group">
              <span className="transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-red-400">
                Projects
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 dark:bg-gray-100 transition-all group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link href="/contact" className="relative group">
              <span className="transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-red-400">
                Contact
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 dark:bg-gray-100 transition-all group-hover:w-full"></span>
            </Link>
          </li>

          {/* Pure Sun/Moon Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle Dark Mode"
              className="transition-transform duration-300 hover:scale-110 active:scale-95 text-2xl text-green-500 dark:text-yellow-300"
            >
              {theme === 'dark' ? <FaMoon /> : <FaSun />}
            </button>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white dark:bg-black flex flex-col items-center gap-6 py-6 border-t border-gray-200 dark:border-gray-800 md:hidden">
            <Link href="/projects" onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>

            {mounted && (
              <button
                onClick={() => {
                  setTheme(theme === 'dark' ? 'light' : 'dark')
                  setMenuOpen(false)
                }}
                aria-label="Toggle Dark Mode"
                className="transition-transform duration-300 hover:scale-110 active:scale-95 text-2xl text-blue-500 dark:text-yellow-300"
              >
                {theme === 'dark' ? <FaMoon /> : <FaSun />}
              </button>
            )}
          </div>
        )}
      </nav>
    </header>
  )
}





