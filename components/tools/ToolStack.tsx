"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "motion/react";
import { ButtonLink } from "@/components/primitives/Button";
import { TOOLS, type Tool } from "@/lib/data/tools";
import { ToolVisual } from "./ToolVisual";

// The pinned-deck interaction needs each card to be shorter than the
// viewport. On phones the stacked text+visual card is taller than the
// screen, so the effect is disabled and cards render in normal flow.
function useMinWidth(query: string) {
  const [match, setMatch] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    setMatch(mq.matches);
    const on = () => setMatch(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, [query]);
  return match;
}

// Base distance the pinned card holds below the fixed nav, plus a per-card
// increment so each card pins slightly lower — that offset reveals the top
// edge of the cards beneath, giving the stacked "deck" look.
const STICKY_TOP = 104;
const STEP = 14;

function StackCard({
  tool,
  i,
  total,
  progress,
  enabled,
}: {
  tool: Tool;
  i: number;
  total: number;
  progress: MotionValue<number>;
  enabled: boolean;
}) {
  const isLast = i === total - 1;
  const depth = total - 1 - i; // how many cards stack on top of this one

  // The current/top card stays full size; each card behind recedes a little
  // more. The shrink for card i runs from when the next card begins covering
  // it (progress (i+1)/total) through the end of the section.
  const start = Math.min((i + 1) / total, 0.999);
  const flat = isLast || !enabled;

  const scale = useTransform(
    progress,
    [start, 1],
    [1, flat ? 1 : 1 - depth * 0.05]
  );
  const rotateX = useTransform(progress, [start, 1], [0, flat ? 0 : 7]);
  const dim = useTransform(
    progress,
    [start, 1],
    [0, flat ? 0 : Math.min(depth * 0.06, 0.26)]
  );

  const isBalance = tool.kind === "balance";

  return (
    <div
      className="mb-5 md:mb-6 md:sticky"
      style={enabled ? { top: STICKY_TOP + i * STEP, perspective: 1400 } : undefined}
    >
      <motion.div
        style={enabled ? { scale, rotateX, transformOrigin: "center top" } : undefined}
        className="relative rounded-3xl border border-black/[0.07] bg-white shadow-[0_-1px_0_rgba(255,255,255,0.9),0_28px_56px_-28px_rgba(0,0,0,0.22)] overflow-hidden p-4 sm:p-6 md:p-10"
      >
        <div className="flex flex-col gap-6 md:gap-10 lg:gap-16 lg:flex-row">
          {/* Text */}
          <div className="lg:w-[320px] shrink-0 flex flex-col justify-center relative">
            <span
              aria-hidden="true"
              className="block font-display font-semibold leading-[0.8] text-content-primary select-none pointer-events-none mb-3"
              style={{ fontSize: "clamp(56px, 7vw, 104px)", opacity: 0.1 }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="font-mono text-[10.5px] font-semibold tracking-[1.8px] uppercase text-content-tertiary mb-3">
              {tool.tag}
            </div>
            <h3
              className="font-display font-semibold capitalize leading-[1.1] tracking-[-0.5px] text-content-primary m-0 mb-3"
              style={{ fontSize: "clamp(20px, 2.2vw, 30px)" }}
            >
              {tool.name}
            </h3>
            <p className="font-sans text-[15px] leading-[1.7] text-content-secondary m-0">
              {tool.desc}
            </p>
            <div className="mt-6">
              <ButtonLink href="#install" variant="muted" size="lg">
                {tool.cta}
              </ButtonLink>
            </div>
          </div>

          {/* Visual */}
          <div className="flex-1 min-w-0 flex items-center">
            {isBalance ? (
              <div className="w-full min-h-[360px] sm:min-h-[400px] flex items-center rounded-2xl border border-black/[0.07] bg-surface-primary overflow-hidden p-2 sm:px-6 sm:py-3">
                <div className="w-full rounded-xl overflow-hidden">
                  <ToolVisual tool={tool} />
                </div>
              </div>
            ) : (
              <div className="w-full rounded-2xl border border-black/[0.07] bg-surface-primary overflow-hidden h-[460px] sm:h-[480px] lg:h-[520px] relative p-2 sm:px-6 sm:py-3">
                <div className="absolute inset-2 sm:inset-x-6 sm:inset-y-3 flex flex-col justify-center rounded-xl overflow-hidden">
                  <ToolVisual tool={tool} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Receding dim — deepens as more cards stack over this one */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 rounded-3xl bg-black pointer-events-none"
          style={{ opacity: dim }}
        />
      </motion.div>
    </div>
  );
}

export function ToolStack() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const isDesktop = useMinWidth("(min-width: 768px)");
  const enabled = isDesktop && !reduce;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={ref} className="relative">
      {TOOLS.map((tool, i) => (
        <StackCard
          key={tool.fn}
          tool={tool}
          i={i}
          total={TOOLS.length}
          progress={scrollYProgress}
          enabled={enabled}
        />
      ))}
    </div>
  );
}
