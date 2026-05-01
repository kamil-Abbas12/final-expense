"use client";
import { useEffect, useState } from "react";
import ScrollToTopButton from "../../ScrollToTop";

export default function ScrollHandler() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <ScrollToTopButton show={showScrollTop} />;
}