"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PainPoints() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold">
            {t.pains.label}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.pains.items.map(
            (
              pain: { title: string; description: string },
              index: number
            ) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-surface border border-border rounded-xl"
              >
                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <X size={14} className="text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{pain.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {pain.description}
                  </p>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
