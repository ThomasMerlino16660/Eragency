"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#resultados", label: t.nav.results },
    { href: "#sistema", label: t.nav.method },
    { href: "#enzo", label: t.nav.about },
    { href: "#contacto", label: t.nav.contact },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#inicio" className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="ER Agency"
              width={40}
              height={40}
              className="object-contain"
              style={{ width: "auto", height: "40px" }}
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-wider uppercase text-muted hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
              className="text-sm tracking-wider uppercase text-gold hover:text-gold-light transition-colors duration-300 border border-gold/30 px-3 py-1 rounded"
            >
              {language === "es" ? "EN" : "ES"}
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm tracking-wider uppercase text-muted hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setLanguage(language === "es" ? "en" : "es");
                  setMobileOpen(false);
                }}
                className="text-sm tracking-wider uppercase text-gold hover:text-gold-light transition-colors text-left"
              >
                {language === "es" ? "English" : "Espanol"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
