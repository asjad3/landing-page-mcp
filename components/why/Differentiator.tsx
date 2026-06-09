import type { ReactNode } from "react";
import { Reveal } from "@/components/primitives/Reveal";
import { ButtonLink } from "@/components/primitives/Button";

// Flat 2D square (cube) tile holding the icon.
function IconCube({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center w-11 h-11 rounded-md bg-primary-10 text-primary-60 mb-5">
      {children}
    </div>
  );
}

function KeyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="4.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 11L19 19M16 19l2-2M19 16l-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StackIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l8 4.5-8 4.5-8-4.5L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M4 12l8 4.5 8-4.5M4 16.5L12 21l8-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="6" width="18" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 9.5h18M16 13.5h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const CARDS = [
  {
    icon: KeyIcon,
    title: "No API key needed",
    body: "Sign in with your imagine.art account. No keys to generate, manage, or rotate.",
  },
  {
    icon: StackIcon,
    title: "Six tools in one connection",
    body: "Image generation, video, music, upscaling, background removal. All from a single MCP server.",
  },
  {
    icon: WalletIcon,
    title: "Uses your current balance",
    body: "Same credits, same plan. Nothing extra to buy or configure.",
  },
];

export function Differentiator() {
  return (
    <section id="why" className="relative border-t border-border-primary py-16 md:py-24 overflow-hidden isolate">
      <div className="container-page">
        <Reveal className="max-w-[720px] mb-10 md:mb-14">
          {/* TODO: finalize headline + description copy */}
          <h2
            className="font-display font-semibold capitalize leading-[1.05] tracking-[-0.5px] m-0 mb-4 text-content-primary text-balance"
            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
          >
            Why Imagine MCP
          </h2>
          <p className="font-sans text-[18px] leading-[1.7] text-content-secondary m-0 max-w-[60ch] tracking-[-0.005em]">
            {/* TODO: section description copy */}
            Connect once and start generating. No keys, no extra billing, no
            setup beyond signing in.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal
                key={card.title}
                delay={i * 80}
                className="rounded-2xl border border-white/60 bg-white/30 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.7)] p-7"
              >
                <IconCube>
                  <Icon />
                </IconCube>
                <h3 className="font-display text-[20px] font-semibold capitalize tracking-[-0.01em] text-content-primary m-0 mb-2">
                  {card.title}
                </h3>
                <p className="font-sans text-[15px] leading-[1.7] text-content-secondary m-0">
                  {card.body}
                </p>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="flex justify-start pt-12">
          <ButtonLink href="#install" variant="muted" size="lg">
            Connect Your Account
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
