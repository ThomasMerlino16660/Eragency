"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="nosotros" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold text-sm tracking-[0.25em] uppercase font-medium">
            {t.about.label}
          </span>

          <div className="mt-6 grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
                {t.about.title}
              </h2>
              <div className="w-12 h-px bg-gold/50 mb-8" />
              <p className="text-muted text-lg leading-relaxed mb-6">
                {t.about.description}
              </p>
              <p className="text-muted text-lg leading-relaxed">
                {t.about.description2}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-end"
            >
              <blockquote className="relative pl-6 border-l-2 border-gold/40">
                <p className="font-serif text-2xl md:text-3xl text-foreground/90 leading-snug italic">
                  &ldquo;{t.about.philosophy}&rdquo;
                </p>
              </blockquote>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
