"use client";

import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "@/src/context/LanguageContext";
import Magnetic from "@/src/components/animations/Magnetic";
import RevealText from "@/src/components/animations/RevealText";
import FadeIn from "@/src/components/animations/FadeIn";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/yuriiloureiro",
      icon: <FaGithub size={14} />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/loureiroyuri/",
      icon: <FaLinkedin size={14} />,
    },
    {
      label: "Email",
      href: "mailto:hello@loureiroyuri.com",
      icon: <Mail size={14} />,
    },
  ];

  return (
    <footer
      id="contact"
      className="relative w-full px-6 lg:px-8 pt-24 pb-10 border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        {/* CTA grande */}
        <div className="mb-20">
          <FadeIn>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6">
              {t.footer.cta_eyebrow}
            </p>
          </FadeIn>

          <h2 className="font-mono text-4xl md:text-7xl font-bold tracking-tighter text-foreground leading-[1.05] text-balance mb-6 max-w-4xl">
            <RevealText
              text={t.footer.cta_title}
              delayPerChar={0.02}
              splitBy="word"
            />
          </h2>

          <FadeIn delay={0.4}>
            <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed mb-10 text-pretty">
              {t.footer.cta_subtitle}
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <Magnetic strength={0.3}>
              <a
                href="mailto:hello@loureiroyuri.com"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] font-bold px-8 py-4 rounded-full bg-primary text-primary-foreground hover:bg-primary-hover transition-colors"
              >
                {t.footer.cta_button}
                <ArrowUpRight size={14} />
              </a>
            </Magnetic>
          </FadeIn>
        </div>

        {/* Grid de info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-border">
          <FadeIn delay={0.1}>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-dark mb-3">
              {t.footer.email_label}
            </p>
            <a
              href="mailto:hello@loureiroyuri.com"
              className="font-mono text-sm text-foreground hover:text-primary transition-colors break-all"
            >
              hello@loureiroyuri.com
            </a>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-dark mb-3">
              {t.footer.location_label}
            </p>
            <p className="font-mono text-sm text-foreground">
              {t.footer.location_value}
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-dark mb-3">
              {t.footer.status_label}
            </p>
            <p className="font-mono text-sm text-foreground inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              {t.footer.status_value}
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-dark mb-3">
              {t.footer.social_label}
            </p>
            <ul className="flex flex-col gap-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                  >
                    {s.icon}
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-dark">
            © {year} Yuri Loureiro. {t.footer.rights}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-dark">
            {t.footer.built}
          </p>
        </div>
      </div>

      {/* Glow decorativo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[120px] pointer-events-none" />
    </footer>
  );
}
