"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export interface RotatingItem {
  icon: string;
  name: string;
}

const FLIP = { duration: 0.7, ease: [0.65, 0, 0.35, 1] } as const;

// Cube geometry: RADIUS is half of FACE_H so the two faces meet at the edge.
const FACE_H = "1.45em";
const RADIUS = "0.725em";
const PAD_X = "0.85em";

function Content({ item }: { item: RotatingItem }) {
  return (
    <>
      <img
        src={item.icon}
        alt=""
        aria-hidden="true"
        className="w-[0.74em] h-[0.74em] object-contain"
      />
      <span>{item.name}</span>
    </>
  );
}

export function RotatingClient({
  items,
  intervalMs = 2200,
}: {
  items: RotatingItem[];
  intervalMs?: number;
}) {
  const [step, setStep] = useState(0);
  const [widths, setWidths] = useState<number[]>([]);
  const measureRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const id = setInterval(() => setStep((s) => s + 1), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  // Measure each label's full pill width once so the morph targets exact sizes.
  useLayoutEffect(() => {
    if (!measureRef.current) return;
    const ws = Array.from(measureRef.current.children).map(
      (c) => (c as HTMLElement).offsetWidth
    );
    setWidths(ws);
  }, [items]);

  const len = items.length;
  const idx = ((step % len) + len) % len;
  const at = (s: number) => items[((s % len) + len) % len];

  // Outgoing (step - 1) + current (step) faces stay mounted through the turn.
  const faces = [step - 1, step];
  const w = widths[idx];

  return (
    <span
      className="normal-case inline-flex align-middle"
      style={{ fontSize: "0.82em", perspective: "700px" }}
    >
      {/* Hidden measurer — one chip per label to capture exact widths */}
      <span
        ref={measureRef}
        aria-hidden="true"
        className="absolute opacity-0 pointer-events-none -z-50 inline-flex"
      >
        {items.map((it, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-[0.25em] whitespace-nowrap"
            style={{ height: FACE_H, paddingLeft: PAD_X, paddingRight: PAD_X }}
          >
            <Content item={it} />
          </span>
        ))}
      </span>

      {/* Morphing pill — animates real width (no scale distortion) */}
      <motion.span
        className="relative inline-block rounded-[0.32em] bg-white/55 backdrop-blur-sm shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
        style={{ height: FACE_H }}
        animate={w != null ? { width: w } : undefined}
        transition={FLIP}
      >
        {/* Tumbling cube of icon + label */}
        <motion.span
          className="absolute inset-0"
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "center center",
            willChange: "transform",
          }}
          animate={{ rotateX: -90 * step }}
          transition={FLIP}
        >
          {faces.map((s) => (
            <span
              key={s}
              className="absolute left-1/2 top-1/2 flex items-center justify-center gap-[0.25em] whitespace-nowrap"
              style={{
                height: FACE_H,
                transform: `translate(-50%, -50%) rotateX(${90 * s}deg) translateZ(${RADIUS})`,
                backfaceVisibility: "hidden",
              }}
            >
              <Content item={at(s)} />
            </span>
          ))}
        </motion.span>
      </motion.span>
    </span>
  );
}
