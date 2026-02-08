"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="px-4 sm:px-16 pt-4 pb-4 bg-white border-b-2 border-gray-300 shadow-xs">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-[family-name:var(--font-orbitron)] text-lg font-medium text-foreground hover:text-gray-600 transition-colors">
          Cristian Silva
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
          <Link href="/" className="text-sm text-gray-600 hover:text-foreground transition-colors font-medium">
            Home
          </Link>
          <Link href="/projects" className="text-sm text-gray-600 hover:text-foreground transition-colors font-medium">
            Projects
          </Link>
          <Link href="/skills" className="text-sm text-gray-600 hover:text-foreground transition-colors font-medium">
            Skills
          </Link>
          <Link href="/contact" className="text-sm px-3 py-1.5 bg-foreground text-white rounded-md font-medium hover:bg-gray-800 transition-colors">
            Get in touch
          </Link>
        </div>

        {/* Hamburger button */}
        <button
          className="sm:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="sm:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Slide-out panel */}
          <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-xl flex flex-col">
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-6 px-6 pt-4">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-600 hover:text-foreground transition-colors font-medium">
                Home
              </Link>
              <Link href="/projects" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-600 hover:text-foreground transition-colors font-medium">
                Projects
              </Link>
              <Link href="/skills" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-600 hover:text-foreground transition-colors font-medium">
                Skills
              </Link>
            </div>

            {/* CTA at bottom */}
            <div className="mt-auto p-6">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block text-center px-4 py-3 bg-foreground text-white rounded-md font-medium hover:bg-gray-800 transition-colors">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
