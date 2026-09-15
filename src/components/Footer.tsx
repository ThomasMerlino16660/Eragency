"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.jpg"
              alt="ER Agency"
              width={40}
              height={40}
              className="object-contain"
              style={{ width: "auto", height: "40px" }}
            />
            <p className="text-sm text-muted">{t.footer.tagline}</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-muted hover:text-gold transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon size={20} />
            </a>
            <a
              href="#"
              className="text-muted hover:text-gold transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon size={20} />
            </a>
            <a
              href="#"
              className="text-muted hover:text-gold transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>

          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} ER Agency. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
