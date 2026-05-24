"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Buy", href: "#properties" },
  { label: "Rent", href: "#properties" },
  { label: "New Projects", href: "#projects" },
  { label: "Districts", href: "#districts" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-md" : "shadow-sm border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="w-10 h-10 bg-black rounded-xl overflow-hidden flex items-center justify-center">
            <Image
              src="/logo.svg"
              alt="OAO Property Dekho"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="leading-tight">
            <div className="flex items-baseline gap-1">
              <span className="font-extrabold text-gray-900 text-xl tracking-tight">OAO</span>
              <span className="font-bold text-orange-600 text-sm">Property Dekho</span>
            </div>
            <div className="text-[9px] text-gray-400 font-medium -mt-0.5 tracking-wide">
              OAOprop Infrastructure Pvt. Ltd.
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-2">
          <button className="px-4 py-2 text-sm font-semibold text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
            Login
          </button>
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-semibold bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          >
            Post Property Free
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4 pt-2 flex flex-col gap-1">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="px-3 py-3 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 px-3 py-3 text-sm font-semibold bg-orange-600 text-white rounded-lg text-center"
            onClick={() => setMenuOpen(false)}
          >
            Post Property Free
          </a>
        </div>
      )}
    </header>
  );
}
