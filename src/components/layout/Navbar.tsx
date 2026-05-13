"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import Logo from "@/src/components/ui/Logo";
import LocalTime from "@/src/components/ui/LocalTime";
import LanguageToggle from "@/src/components/ui/LanguageToggle";
import Magnetic from "@/src/components/animations/Magnetic";

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Trava scroll quando menu mobile abre
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "#work", label: t.nav.work },
    { href: "#about", label: t.nav.about },
    { href: "#stack", label: t.nav.stack },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/70 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
          {/* Esquerda */}
          <div className="flex items-center gap-6">
            <Logo />
            <span className="hidden md:inline-block w-px h-4 bg-border" />
            <div className="hidden md:block">
              <LocalTime />
            </div>
          </div>

          {/* Centro - links desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-mono text-[11px] uppercase tracking-[0.18em] font-medium text-muted hover:text-foreground px-4 py-2 rounded-full hover:bg-card transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Direita */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <LanguageToggle />
            </div>

            <Magnetic strength={0.2}>
              <Link
                href="#contact"
                className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] font-bold px-4 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary-hover transition-colors"
              >
                {t.nav.cta}
                <ArrowUpRight size={12} />
              </Link>
            </Magnetic>

            {/* Hamburger mobile */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="lg:hidden w-10 h-10 inline-flex items-center justify-center rounded-full border border-border text-foreground hover:bg-card transition-colors"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="pt-24 px-6 h-full flex flex-col">
              <nav className="flex flex-col gap-2">
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block font-mono text-2xl font-bold text-foreground hover:text-primary py-3 border-b border-border tracking-tight"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto pb-12 flex items-center justify-between">
                <LocalTime />
                <LanguageToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
