"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Method() {
  const { t } = useLanguage();

  return (
    <section id="metodo" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-gold text-sm tracking-[0.25em] uppercase font-medium">
            {t.method.label}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            {t.method.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
          {t.method.steps.map(
            (
              step: { number: string; title: string; description: string },
              index: number
            ) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="bg-background p-8 flex flex-col"
              >
                <span className="text-5xl font-serif font-bold text-gold/20 mb-4">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
