"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Moon, Sun, Phone, Menu, X } from "lucide-react";

export default function Header() {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // close mobile menu on route change / resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const navLinks = [
    { href: "/#coverage", label: "Coverage" },
    { href: "/#benefits", label: "Benefits" },
    { href: "/#faq", label: "FAQ" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-200/60 dark:border-gray-800/60 shadow-sm"
          : "bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-900"
      }`}
    >
      <div className="relative mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-5">
        {/* ── LEFT: logo ── */}
        <div className="flex min-w-0 shrink-0 items-center gap-2">
          <Link href="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
            <Image
              src={"/finalexpense.jpg"}
              alt="TopDog Final Expense logo"
              width={100}
              height={80}
              priority
              className="h-10 w-auto sm:h-12 shrink-0"
            />
          </Link>
        </div>

        {/* ── CENTER: dark/light toggle, pinned to true center (desktop only) ── */}
        <button
          onClick={toggleDark}
          aria-label="Toggle dark mode"
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded-lg p-2 text-gray-400 transition-all hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:hover:text-gray-200 md:block"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* ── RIGHT: menu + phone + CTA ── */}
        <div className="flex items-center gap-3 sm:gap-6">
          <nav className="hidden items-center gap-7 text-sm font-medium text-gray-500 dark:text-gray-400 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-gray-900 dark:hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href="tel:6802251305"
            className="hidden items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 md:flex"
          >
            <Phone size={14} />
            <span>(680) 225-1305</span>
          </a>

          <a
            href="#quote-form"
            className="hidden items-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm shadow-emerald-600/20 transition-colors hover:bg-emerald-700 sm:inline-flex"
          >
            Get Free Quote
          </a>

          {/* ── Mobile dark toggle ── */}
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="rounded-lg p-2 text-gray-400 transition-all hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:hover:text-gray-200 md:hidden"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* ── Mobile menu toggle ── */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="rounded-lg p-2 text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white md:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu panel ── */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-[max-height] duration-300 ease-in-out dark:border-gray-900 dark:bg-gray-950 md:hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4 text-sm font-medium text-gray-600 dark:text-gray-300">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-3 py-2.5 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}

          <a
            href="tel:6802251305"
            onClick={() => setMenuOpen(false)}
            className="mt-2 flex items-center gap-2 rounded-md px-3 py-2.5 text-gray-600 transition-colors hover:bg-gray-100 hover:text-emerald-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-emerald-400"
          >
            <Phone size={16} />
            <span>(680) 225-1305</span>
          </a>

          <a
            href="#quote-form"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm shadow-emerald-600/20 transition-colors hover:bg-emerald-700"
          >
            Get Free Quote
          </a>
        </nav>
      </div>
    </header>
  );
}