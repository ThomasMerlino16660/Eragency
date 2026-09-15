"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="clientes" className="py-32 relative">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-24 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
            {t.portfolio.label}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            {t.portfolio.title}
          </h2>
          <div className="w-16 h-px bg-gold/40 mx-auto mb-6" />
          <p className="text-muted text-lg max-w-2xl mx-auto">
            {t.portfolio.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {t.portfolio.results.map(
            (
              result: {
                client: string;
                metric: string;
                description: string;
                category: string;
              },
              index: number
            ) => {
              const isNegative = result.metric.startsWith("-");
              return (
                <motion.div
                  key={result.client}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-8 bg-surface border border-border rounded-xl hover:border-gold/30 transition-all duration-500"
                >
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <p className="text-foreground font-medium mb-1">
                        {result.client}
                      </p>
                      <p className="text-xs text-gold tracking-wider uppercase">
                        {result.category}
                      </p>
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gold/10 text-gold">
                      {isNegative ? (
                        <TrendingDown size={20} />
                      ) : (
                        <TrendingUp size={20} />
                      )}
                    </div>
                  </div>
                  <div className="text-5xl md:text-6xl font-serif font-bold text-gold mb-3">
                    {result.metric}
                  </div>
                  <p className="text-muted text-lg">{result.description}</p>
                </motion.div>
              );
            }
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-muted tracking-[0.3em] uppercase mb-12">
            {t.portfolio.trustedBy}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-30 hover:opacity-50 transition-opacity duration-500">
            {[
              "Grupo Norte",
              "EDSA",
              "Inmobilia",
              "Capital RE",
              "Urban Dev",
              "ProCity",
            ].map((name) => (
              <div
                key={name}
                className="text-lg md:text-xl font-serif tracking-[0.2em] text-foreground"
              >
                {name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
