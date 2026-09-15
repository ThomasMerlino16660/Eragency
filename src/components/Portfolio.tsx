"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="resultados" className="py-24 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-gold text-sm tracking-[0.25em] uppercase font-medium">
            {t.results.label}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            {t.results.title}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {t.results.items.map(
            (
              result: {
                metric: string;
                context: string;
                detail: string;
              },
              index: number
            ) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 md:p-8 bg-surface border border-border rounded-xl"
              >
                <div className="text-4xl md:text-5xl font-serif font-bold text-gold mb-1">
                  {result.metric}
                </div>
                <p className="text-foreground font-medium text-sm mb-3 uppercase tracking-wider">
                  {result.context}
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  {result.detail}
                </p>
              </motion.div>
            )
          )}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-muted/50 text-sm italic"
        >
          {t.results.testimonialNote}
        </motion.p>
      </div>
    </section>
  );
}
