"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const CALENDLY_URL = "https://calendly.com/itseragency/asesoria";

export default function Method() {
  const { t } = useLanguage();

  return (
    <section id="sistema" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--color-surface-light)_0%,_transparent_50%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
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
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
            {t.method.title}
          </h2>
          <p className="text-muted text-lg max-w-2xl">
            {t.method.subtitle}
          </p>
        </motion.div>

        <div className="space-y-6 mb-12">
          {t.method.steps.map(
            (
              step: { number: string; title: string; description: string },
              index: number
            ) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="flex gap-6 p-6 md:p-8 bg-background/60 border border-border rounded-xl"
              >
                <span className="text-3xl md:text-4xl font-serif font-bold text-gold/25 shrink-0 leading-none mt-1">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {step.description}
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
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-background font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-sm tracking-wider uppercase"
          >
            {t.method.cta}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
