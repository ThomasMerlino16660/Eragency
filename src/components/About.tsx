"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

function StatCard({
  value,
  label,
  index,
}: {
  value: string;
  label: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="text-center p-8 relative"
    >
      <div className="text-4xl md:text-5xl font-serif font-bold text-gold mb-3">
        {value}
      </div>
      <div className="text-sm text-muted tracking-wider uppercase">{label}</div>
    </motion.div>
  );
}

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="nosotros" className="py-32 relative">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-24 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              {t.about.label}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-8 leading-tight">
              {t.about.title}
            </h2>
            <div className="w-16 h-px bg-gold/40 mb-8" />
            <p className="text-muted text-lg leading-relaxed mb-6">
              {t.about.description}
            </p>
            <p className="text-muted text-lg leading-relaxed">
              {t.about.description2}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-px bg-border rounded-xl overflow-hidden">
              {t.about.stats.map(
                (stat: { value: string; label: string }, index: number) => (
                  <div key={stat.label} className="bg-surface">
                    <StatCard
                      value={stat.value}
                      label={stat.label}
                      index={index}
                    />
                  </div>
                )
              )}
            </div>
            <div className="absolute -inset-[1px] rounded-xl border border-gold/10 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
