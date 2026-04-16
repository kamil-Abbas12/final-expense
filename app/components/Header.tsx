"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Moon, Sun, Phone } from "lucide-react";

export default function Header() {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-200/60 dark:border-gray-800/60 shadow-sm"
          : "bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-900"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5">
        {/* Logo */}
        <div className="flex items-center gap-2">
<Image
  src="/finalexpense.png"
  alt="Finalexpense-logo"
  width={100}
  height={80}
  className="dark:invert dark:brightness-0 dark:contrast-200"
/>   
          
        </div>

        {/* Nav links — hidden on mobile */}
        <nav className="hidden md:flex justify-between items-center gap-7 text-md font-medium text-gray-500 dark:text-gray-400">
          <a href="#coverage" className="hover:text-gray-900 dark:hover:text-white transition-colors">Coverage</a>
          <a href="#benefits" className="hover:text-gray-900 dark:hover:text-white transition-colors">Benefits</a>
          <a href="#faq" className="hover:text-gray-900 dark:hover:text-white transition-colors">FAQ</a>
        </nav>

        {/* Right side */}
        <div className="flex  items-center gap-3">
          <a
            href="tel:8669635898"
            className="hidden md:flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            <Phone size={14} />
            <span>866-963-5898</span>
          </a>

          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="#quote-form"
            className="hidden sm:inline-flex items-center rounded-lg bg-emerald-600 hover:bg-emerald-700 px-4 py-2 text-sm font-medium text-white transition-colors shadow-sm shadow-emerald-600/20"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </header>
    );
}