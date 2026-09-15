"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="resultados" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-surface-light)_0%,_transparent_50%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-gold text-sm tracking-[0.25em] uppercase font-medium">
            {t.portfolio.label}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
            {t.portfolio.title}
          </h2>
          <p className="text-muted text-lg max-w-xl">
            {t.portfolio.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.portfolio.results.map(
            (
              result: {
                metric: string;
                description: string;
                detail: string;
              },
              index: number
            ) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="p-6 md:p-8 bg-background/60 border border-border rounded-xl hover:border-gold/20 transition-all duration-400 h-full flex flex-col">
                  <div className="text-4xl md:text-5xl font-serif font-bold text-gold mb-4">
                    {result.metric}
                  </div>
                  <p className="text-foreground font-medium mb-2 text-sm">
                    {result.description}
                  </p>
                  <p className="text-muted text-xs leading-relaxed mt-auto">
                    {result.detail}
                  </p>
                </div>
              </motion.div>
            )
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-sm tracking-wider uppercase font-medium"
          >
            {t.portfolio.cta}
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
