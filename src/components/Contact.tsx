"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputClasses =
    "w-full bg-background/80 border border-border rounded-lg px-5 py-4 text-foreground placeholder:text-muted/40 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all duration-300";

  return (
    <section id="contacto" className="py-32 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--color-surface-light)_0%,_transparent_50%)]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/3 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
            {t.contact.label}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            {t.contact.title}
          </h2>
          <div className="w-16 h-px bg-gold/40 mx-auto mb-6" />
          <p className="text-muted text-lg max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder={t.contact.form.name}
                  required
                  className={inputClasses}
                />
                <input
                  type="email"
                  placeholder={t.contact.form.email}
                  required
                  className={inputClasses}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="tel"
                  placeholder={t.contact.form.phone}
                  className={inputClasses}
                />
                <input
                  type="text"
                  placeholder={t.contact.form.company}
                  className={inputClasses}
                />
              </div>
              <textarea
                placeholder={t.contact.form.message}
                rows={5}
                required
                className={`${inputClasses} resize-none`}
              />
              <button
                type="submit"
                className="group w-full md:w-auto inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-background font-semibold px-10 py-4 rounded-lg transition-all duration-300 text-sm tracking-wider uppercase"
              >
                {submitted ? (
                  <>
                    {t.contact.form.success}
                    <CheckCircle size={16} />
                  </>
                ) : (
                  <>
                    {t.contact.form.submit}
                    <Send
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col justify-center gap-10"
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gold/10 text-gold shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-muted mb-1.5 tracking-wider uppercase">
                  Email
                </p>
                <p className="text-foreground font-medium">
                  {t.contact.info.email}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gold/10 text-gold shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-muted mb-1.5 tracking-wider uppercase">
                  {t.contact.form.phone}
                </p>
                <p className="text-foreground font-medium">
                  {t.contact.info.phone}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gold/10 text-gold shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-muted mb-1.5 tracking-wider uppercase">
                  {language === "es" ? "Ubicacion" : "Location"}
                </p>
                <p className="text-foreground font-medium">
                  {t.contact.info.location}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
