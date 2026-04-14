"use client";


import { useEffect, useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import ScrollToTopButton from "./components/ScrollToTop";
import TrustSection from "./components/Trustsection";
import FaqSection from "./components/Faqsection";
import FeatureBanner from "./components/FeatureBanner";
import ValueSection from "./components/ValueSection";
import CoverageSection from "./components/Coveragesection";
import BenefitsSection from "./components/Benefitssection";
import QuoteSection from "./components/Quotesection";
import SiteFooter from "./components/Sitefooter";
import QuizPopup from "./components/Quizpopup";

export default function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <a
        href="#main-content"
        className="absolute left-1/2 top-[-100px] z-[9999] -translate-x-1/2 rounded-lg bg-emerald-600 px-5 py-3 text-white focus:top-3 shadow-lg"
      >
        Skip to main content
      </a>
<QuizPopup /> 
      <Header />

      <main id="main-content">
        <Hero />
        <FeatureBanner />
        <ValueSection />
        <CoverageSection />
        <BenefitsSection />
        <QuoteSection />
        <FaqSection />
        <TrustSection />
      </main>

      <SiteFooter />
      <ScrollToTopButton show={showScrollTop} />
    </div>
  );
}