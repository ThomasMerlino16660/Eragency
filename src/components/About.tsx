"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="enzo" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--color-surface-light)_0%,_transparent_50%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-gold text-sm tracking-[0.25em] uppercase font-medium">
            {t.about.label}
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 items-start">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Replace src with real photo of Enzo when available */}
            <div className="aspect-[3/4] w-full bg-background border border-border rounded-xl flex items-center justify-center overflow-hidden">
              <Image
                src="/logo.jpg"
                alt="Enzo Roldan"
                width={280}
                height={373}
                className="object-cover w-full h-full opacity-40"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <p className="text-xs text-muted/40 text-center mt-3 italic">
              {t.about.photoPlaceholder}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">
              {t.about.title}
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-6">
              {t.about.description}
            </p>
            <p className="text-muted text-lg leading-relaxed">
              {t.about.description2}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
