"use client";

import { motion } from "framer-motion";
import {
  Target,
  Search,
  Palette,
  Share2,
  Layout,
  BarChart3,
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
  chart: BarChart3,
};

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="servicios" className="py-32 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-surface-light)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-surface-light)_0%,_transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
            {t.services.label}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            {t.services.title}
          </h2>
          <div className="w-16 h-px bg-gold/40 mx-auto mb-6" />
          <p className="text-muted text-lg max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map(
            (
              service: { title: string; description: string; icon: string },
              index: number
            ) => {
              const Icon = iconMap[service.icon] || Target;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-8 bg-background/60 backdrop-blur-sm border border-border rounded-xl hover:border-gold/30 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gold/10 text-gold mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
