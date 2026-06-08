"use client";

import { useState } from "react";
import { Reveal } from "@/components/primitives/Reveal";
import { FAQ } from "@/lib/data/faq";

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      style={{
        transition: "transform 240ms cubic-bezier(0.2, 0.7, 0.2, 1)",
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        flexShrink: 0,
      }}
    >
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FaqRow({ q, a, delay }: { q: string; a: string; delay: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={delay} className="border-b border-border-primary">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-8 py-6 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span
          className="font-sans font-normal leading-snug text-content-primary"
          style={{ fontSize: "clamp(17px, 1.8vw, 22px)" }}
        >
          {q}
        </span>
        <span className="text-content-secondary shrink-0">
          <ChevronDown open={open} />
        </span>
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows 280ms cubic-bezier(0.2, 0.7, 0.2, 1)",
        }}
      >
        <div className="overflow-hidden">
          <p className="font-sans text-[16px] leading-[1.75] text-content-secondary pb-6 max-w-[72ch]">
            {a}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="border-t border-border-primary">
      <div className="container-page">

        <Reveal className="pt-24 pb-16 text-center">
          <h2
            className="font-display font-semibold capitalize leading-[1.05] tracking-[-0.5px] m-0 text-content-primary"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Frequently asked questions
          </h2>
        </Reveal>

        <div className="pb-24 border-t border-border-primary max-w-[800px] mx-auto">
          {FAQ.map((item, i) => (
            <FaqRow key={item.q} q={item.q} a={item.a} delay={i * 60} />
          ))}
        </div>

      </div>
    </section>
  );
}
