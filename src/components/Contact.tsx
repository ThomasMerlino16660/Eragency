"use client";

import { useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const WHATSAPP_NUMBER = "5493512153366";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola! Me interesa conocer mas sobre los servicios de ER Agency.")}`;
const CALENDLY_URL = "https://calendly.com/itseragency/asesoria";

export default function Contact() {
  const { t, language } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const company = data.get("company") as string;
    const message = data.get("message") as string;

    const lines = [
      `Hola! Soy *${name}*`,
      company ? `de *${company}*` : "",
      "",
      `${message}`,
      "",
      `---`,
      `Email: ${email}`,
      phone ? `Tel: ${phone}` : "",
    ].filter(Boolean).join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank");
  };

  const inputClasses =
    "w-full bg-background/80 border border-border rounded-lg px-5 py-4 text-foreground placeholder:text-muted/40 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all duration-300";

  return (
    <section id="contacto" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/[0.02] rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-gold text-sm tracking-[0.25em] uppercase font-medium">
            {t.contact.label}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
            {t.contact.title}
          </h2>
          <p className="text-muted text-lg max-w-xl">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder={t.contact.form.name}
                  required
                  className={inputClasses}
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t.contact.form.email}
                  required
                  className={inputClasses}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="tel"
                  name="phone"
                  placeholder={t.contact.form.phone}
                  className={inputClasses}
                />
                <input
                  type="text"
                  name="company"
                  placeholder={t.contact.form.company}
                  className={inputClasses}
                />
              </div>
              <textarea
                name="message"
                placeholder={t.contact.form.message}
                rows={4}
                required
                className={`${inputClasses} resize-none`}
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-sm tracking-wider uppercase"
              >
                <WhatsAppIcon size={18} />
                {t.contact.form.submit}
                <Send
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8 lg:min-w-[260px]"
          >
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 group"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gold/10 text-gold shrink-0 group-hover:bg-gold/20 transition-colors">
                <Calendar size={18} />
              </div>
              <div>
                <p className="text-xs text-muted mb-1 tracking-wider uppercase">
                  Calendly
                </p>
                <p className="text-sm text-foreground font-medium group-hover:text-gold transition-colors">
                  {t.contact.calendly}
                </p>
              </div>
            </a>

            <a
              href={`mailto:${t.contact.info.email}`}
              className="flex items-start gap-4 group"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gold/10 text-gold shrink-0 group-hover:bg-gold/20 transition-colors">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs text-muted mb-1 tracking-wider uppercase">
                  Email
                </p>
                <p className="text-sm text-foreground font-medium group-hover:text-gold transition-colors">
                  {t.contact.info.email}
                </p>
              </div>
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 group"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#25D366]/10 text-[#25D366] shrink-0 group-hover:bg-[#25D366]/20 transition-colors">
                <WhatsAppIcon size={18} />
              </div>
              <div>
                <p className="text-xs text-muted mb-1 tracking-wider uppercase">
                  WhatsApp
                </p>
                <p className="text-sm text-foreground font-medium group-hover:text-[#25D366] transition-colors">
                  {t.contact.info.phone}
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gold/10 text-gold shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs text-muted mb-1 tracking-wider uppercase">
                  {language === "es" ? "Ubicacion" : "Location"}
                </p>
                <p className="text-sm text-foreground font-medium">
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
