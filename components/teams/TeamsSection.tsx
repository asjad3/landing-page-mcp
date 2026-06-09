"use client";

import { useRef } from "react";
import { Reveal } from "@/components/primitives/Reveal";
import { ButtonLink } from "@/components/primitives/Button";

const CARDS = [
  {
    title: "E-Commerce brands",
    desc: "Product shots cleaned, backgrounds stripped, upscaled to print resolution, all inside one conversation.",
    video: "/videos/teams/ecommerce.mp4",
  },
  {
    title: "Content creation & social media",
    desc: "One brief becomes a full week of posts. Same visual language, no rework, no back-and-forth.",
    video: "/videos/teams/content.mp4",
  },
  {
    title: "Performance marketers",
    desc: "One product photo. Twenty ad variants. Sized for every platform, generated in a single agent session.",
    video: "/videos/teams/performance.mp4",
  },
  {
    title: "Filmmaking",
    desc: "From concept to campaign: images, video, and score, all produced by a single agent from a brief.",
    video: "/videos/teams/filmmaking.mp4",
  },
  {
    title: "Agencies",
    desc: "Ten client brands. Ten distinct visual identities. Generated in parallel and delivered on deadline.",
    video: "/videos/teams/agencies.mp4",
  },
];

const CARD_GAP = 24;

function ChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M11 13L7 9L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M7 5L11 9L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TeamsSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    const el = gridRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + CARD_GAP : 360;
    el.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section className="relative border-t border-border-primary py-16 md:py-24 overflow-hidden isolate">
      <div className="container-page">

        {/* Header */}
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-14">
          <div className="max-w-[640px]">
            <h2
              className="font-display font-semibold capitalize leading-[1.05] tracking-[-0.5px] m-0 mb-4 text-content-primary text-balance"
              style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
            >
              From concept to content{" "}
              <span className="text-black/40">in one conversation.</span>
            </h2>
            <p className="font-sans text-[18px] leading-[1.7] text-content-secondary m-0 tracking-[-0.005em]">
              Tell your agent what you're working on. It picks the right tools and delivers production-ready results.
            </p>
          </div>

          {/* Nav buttons */}
          <div className="flex gap-3 shrink-0 pb-1">
            <button
              onClick={() => scroll("prev")}
              aria-label="Previous"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-border-tertiary text-content-secondary hover:border-primary-60 hover:text-primary-60 transition-colors"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => scroll("next")}
              aria-label="Next"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-border-tertiary text-content-secondary hover:border-primary-60 hover:text-primary-60 transition-colors"
            >
              <ChevronRight />
            </button>
          </div>
        </Reveal>
      </div>

      {/* Card grid — full-bleed so cards run to the viewport edge */}
      <div
        ref={gridRef}
        className="flex gap-6 overflow-x-auto overflow-y-hidden no-scrollbar bleed-scroller"
        style={{ scrollSnapType: "x mandatory" }}
      >
          {CARDS.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 80}
              className="team-card-item group shrink-0"
            >
              {/* Media */}
              <div
                className="relative w-full overflow-hidden rounded-2xl border border-border-primary shadow-[0_2px_16px_rgba(0,0,0,0.045)]"
                style={{ height: "clamp(280px, 36vw, 480px)" }}
              >
                <video
                  src={card.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover block transition-transform duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.05]"
                />
                {/* Scrim for title legibility */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent)" }}
                />
                <h3
                  className="absolute left-5 bottom-4 right-5 font-display font-semibold capitalize text-white leading-snug tracking-[-0.3px] drop-shadow-sm"
                  style={{ fontSize: "clamp(17px, 1.6vw, 22px)" }}
                >
                  {card.title}
                </h3>
              </div>

              {/* Body */}
              <div className="pt-4">
                <p className="font-sans text-[15px] leading-[1.7] text-content-secondary">
                  {card.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      <div className="container-page">
        <Reveal className="flex justify-center pt-14">
          <ButtonLink href="#install" variant="muted" size="lg">
            Build Your Workflow
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
