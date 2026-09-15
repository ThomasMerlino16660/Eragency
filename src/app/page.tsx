"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Method from "@/components/Method";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Method />
        <Portfolio />
        <About />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </LanguageProvider>
  );
}
