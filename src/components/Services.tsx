"use client";

import { motion } from "framer-motion";
import {
  Target,
  Search,
  Palette,
  Share2,
  Layout,
  Check,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  target: Target,
  search: Search,
  palette: Palette,
  share: Share2,
  layout: Layout,
};

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="servicios" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-surface-light)_0%,_transparent_50%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-gold text-sm tracking-[0.25em] uppercase font-medium">
            {t.services.label}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
            {t.services.title}
          </h2>
          <p className="text-muted text-lg max-w-xl">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Main service - featured */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative p-8 md:p-12 bg-background/60 backdrop-blur-sm border border-gold/20 rounded-xl mb-8"
        >
          <div className="absolute top-6 right-6 md:top-8 md:right-8">
            <span className="text-xs tracking-widest uppercase text-background bg-gold px-3 py-1.5 rounded font-semibold">
              {t.services.main.badge}
            </span>
          </div>

          <div className="grid md:grid-cols-[1fr_1fr] gap-8 md:gap-12">
            <div>
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gold/10 text-gold mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                {t.services.main.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {t.services.main.description}
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4">
              {t.services.main.features.map((feature: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-gold" />
                  </div>
                  <span className="text-foreground/90">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Secondary services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.services.items.map(
            (
              service: { title: string; description: string; icon: string },
              index: number
            ) => {
              const Icon = iconMap[service.icon] || Target;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                  className="group p-6 bg-background/40 border border-border rounded-xl hover:border-gold/20 transition-all duration-400"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gold/10 text-gold mb-4 group-hover:bg-gold/15 transition-colors">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-semibold mb-2 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            }
          )}
        </div>

        {/* AI note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex items-start gap-3 text-sm text-muted/70 max-w-xl"
        >
          <Sparkles size={16} className="text-gold/50 shrink-0 mt-0.5" />
          <p>{t.services.aiNote}</p>
        </motion.div>
      </div>
    </section>
  );
}
