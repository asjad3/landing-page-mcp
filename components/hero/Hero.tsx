"use client";

/* eslint-disable @next/next/no-img-element */
import { ButtonLink } from "@/components/primitives/Button";
import { HeroBackdrop } from "./HeroBackdrop";
import { InstallPanel } from "./InstallPanel";
import { RotatingClient } from "./RotatingClient";

const CLIENTS = [
  { name: "Claude",   icon: "/ai-logos/icons/claude.svg" },
  { name: "Cursor",   icon: "/ai-logos/icons/cursor.svg" },
  { name: "Hermes",   icon: "/ai-logos/icons/hermes.svg" },
  { name: "OpenClaw", icon: "/ai-logos/icons/openclaw.svg" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col pt-36 md:pt-44 pb-20 isolate overflow-visible"
    >
      <HeroBackdrop />
      <div className="container-page">
        <div className="flex flex-col items-center text-center">
          <img
            src="/imagine-mcp-logo.svg"
            alt="ImagineMCP"
            width={263}
            height={49}
            className="mb-6"
          />
          <h1
            className="font-display font-medium capitalize leading-[1.04] tracking-[-1.5px] m-0 mb-[22px] text-content-primary"
            style={{ fontSize: "clamp(36px, 4.8vw, 60px)" }}
          >
            Make a creative powerhouse with
            <br />
            <span className="inline-flex mt-[0.18em]">
              <RotatingClient items={CLIENTS} />
            </span>
          </h1>

          <p className="font-sans text-[18px] font-normal leading-[1.7] text-[#0F0F0F] m-0 mb-8 max-w-[56ch] tracking-[-0.005em]">
            An MCP server for ImagineArt. Six creative endpoints for Claude,
            Cursor, and any client that speaks the Model Context Protocol.
          </p>

          <div className="flex gap-[10px] flex-wrap justify-center">
            <ButtonLink href="#install" variant="brand" size="lg">
              Install The Server
            </ButtonLink>
            <ButtonLink href="#tools" variant="white" size="lg">
              See The Tools
            </ButtonLink>
          </div>
        </div>

        <InstallPanel />
      </div>

      {/* Fade dots in smoothly below the hero */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          bottom: -96,
          height: 96,
          background: "linear-gradient(to bottom, var(--color-background), transparent)",
        }}
      />
    </section>
  );
}
