"use client";

import { motion, Variants } from "framer-motion";

interface RevealTextProps {
  text: string;
  className?: string;
  delayPerChar?: number;
  initialDelay?: number;
  splitBy?: "char" | "word";
  as?: "span" | "div";
}

export default function RevealText({
  text,
  className = "",
  delayPerChar = 0.025,
  initialDelay = 0,
  splitBy = "char",
  as = "span",
}: RevealTextProps) {
  const items = splitBy === "word" ? text.split(" ") : text.split("");

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: delayPerChar,
        delayChildren: initialDelay,
      },
    },
  };

  const item: Variants = {
    hidden: { y: "110%", opacity: 0 },
    show: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const Wrapper = as === "div" ? motion.div : motion.span;

  return (
    <Wrapper
      variants={container}
      initial="hidden"
      animate="show"
      className={`inline-block overflow-hidden ${className}`}
      aria-label={text}
    >
      {items.map((piece, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          aria-hidden="true"
        >
          <motion.span variants={item} className="inline-block">
            {piece === " " ? "\u00A0" : piece}
            {splitBy === "word" && i < items.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Wrapper>
  );
}
