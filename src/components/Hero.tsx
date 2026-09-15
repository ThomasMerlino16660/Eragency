"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--color-surface-light)_0%,_var(--color-background)_50%)]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-gold text-sm tracking-[0.25em] uppercase font-medium mb-8"
            >
              {t.hero.tagline}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.05] mb-4"
            >
              {t.hero.title}
              <br />
              <span className="text-gold">{t.hero.titleLine2}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base sm:text-lg text-muted max-w-xl mb-10 leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://calendly.com/itseragency/asesoria"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-background font-semibold px-8 py-4 rounded transition-all duration-300 text-sm tracking-wider uppercase"
              >
                {t.hero.cta}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#metodo"
                className="inline-flex items-center justify-center gap-2 border border-border hover:border-gold/40 text-foreground/80 hover:text-foreground font-medium px-8 py-4 rounded transition-all duration-300 text-sm tracking-wider uppercase"
              >
                {t.hero.ctaSecondary}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <Image
              src="/logo.jpg"
              alt="ER Agency"
              width={240}
              height={240}
              className="object-contain rounded"
              style={{ width: "auto", height: "auto", maxHeight: "240px" }}
              priority
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a
          href="#nosotros"
          className="text-muted hover:text-gold transition-colors"
        >
          <ChevronDown size={28} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
