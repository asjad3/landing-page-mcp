"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/lib/hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "article" | "section" | "li";
  from?: "up" | "down" | "left" | "right";
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  from = "up",
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLElement>();
  const Component = Tag as "div";
  const dirClass =
    from === "left"
      ? "reveal-left"
      : from === "right"
        ? "reveal-right"
        : from === "down"
          ? "reveal-down"
          : "";
  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement | null>}
      className={`reveal ${dirClass} ${visible ? "reveal-visible" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Component>
  );
}
