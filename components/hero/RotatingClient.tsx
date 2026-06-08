"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export interface RotatingItem {
  icon: string;
  name: string;
}

const SPRING = { type: "spring", damping: 30, stiffness: 400 } as const;
const STAGGER = 0.025;

export function RotatingClient({
  items,
  intervalMs = 2200,
}: {
  items: RotatingItem[];
  intervalMs?: number;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setI((prev) => (prev + 1) % items.length),
      intervalMs
    );
    return () => clearInterval(id);
  }, [items.length, intervalMs]);

  const item = items[i];
  const letters = [...item.name];

  return (
    <motion.span
      layout
      transition={SPRING}
      className="normal-case inline-flex items-center gap-[0.2em] align-middle rounded-[0.28em] bg-white/40 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.06)] px-[0.4em] py-[0.12em]"
      style={{ fontSize: "0.82em" }}
    >
      {/* Icon */}
      <span className="relative inline-flex items-center justify-center overflow-hidden w-[0.74em] h-[0.92em]">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.img
            key={i}
            src={item.icon}
            alt=""
            aria-hidden="true"
            className="absolute w-[0.74em] h-[0.74em] object-contain"
            initial={{ y: "120%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            transition={SPRING}
          />
        </AnimatePresence>
      </span>

      {/* Name — per-letter staggered slide */}
      <span className="relative inline-flex overflow-hidden whitespace-nowrap py-[0.06em]">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span key={i} className="inline-flex">
            {letters.map((ch, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ y: "120%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                transition={{
                  ...SPRING,
                  delay: (letters.length - 1 - idx) * STAGGER,
                }}
              >
                {ch}
              </motion.span>
            ))}
          </motion.span>
        </AnimatePresence>
      </span>
    </motion.span>
  );
}
