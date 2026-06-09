import { Reveal } from "@/components/primitives/Reveal";
import { ButtonLink } from "@/components/primitives/Button";

function KeyShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M11 2.5l7 2.5v5c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V5l7-2.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8 11l2.2 2.2L14.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NoStoreIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <ellipse cx="11" cy="6" rx="6.5" ry="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4.5 6v10c0 1.38 2.91 2.5 6.5 2.5s6.5-1.12 6.5-2.5V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4.5 11c0 1.38 2.91 2.5 6.5 2.5s6.5-1.12 6.5-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 3.5l14 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const STATEMENTS = [
  {
    icon: KeyShieldIcon,
    title: "Account-scoped authentication",
    body: "Every request authenticates through your imagine.art account. No shared keys, no separate credentials to manage.",
  },
  {
    icon: NoStoreIcon,
    title: "Nothing is stored",
    body: "We don't retain prompts, outputs, or session data. What you generate stays yours.",
  },
];

export function TrustSecurity() {
  return (
    <section id="security" className="relative border-t border-border-primary bg-surface-primary py-16 md:py-24 overflow-hidden isolate">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,380px)_1fr] gap-x-16 gap-y-12 items-start">

          {/* Intro — TODO: finalize headline + subtext copy */}
          <Reveal>
            <div className="font-mono text-[10.5px] font-semibold tracking-[1.8px] uppercase text-content-tertiary mb-[18px]">
              Security
            </div>
            <h2
              className="font-display font-semibold capitalize leading-[1.05] tracking-[-0.5px] m-0 mb-4 text-content-primary text-balance"
              style={{ fontSize: "clamp(28px, 3.2vw, 44px)" }}
            >
              Built On Your Account, Not Around It.
            </h2>
            <p className="font-sans text-[17px] leading-[1.7] text-content-secondary m-0 max-w-[42ch] tracking-[-0.005em]">
              The MCP server inherits the trust boundary of your imagine.art
              account, so there's nothing new to secure.
            </p>
          </Reveal>

          {/* Statement cards */}
          <Reveal delay={80}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {STATEMENTS.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="rounded-2xl border border-white/60 bg-white/30 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.7)] p-7"
                  >
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary-10 text-primary-60 mb-5">
                      <Icon />
                    </div>
                    <h3 className="font-display text-[18px] font-semibold capitalize tracking-[-0.01em] text-content-primary m-0 mb-2">
                      {s.title}
                    </h3>
                    <p className="font-sans text-[14.5px] leading-[1.65] text-content-secondary m-0">
                      {s.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>

        </div>

        <Reveal className="flex justify-start pt-12">
          <ButtonLink href="#install" variant="muted" size="lg">
            Connect Securely
          </ButtonLink>
        </Reveal>

        {/* TODO: add "Read our privacy policy" link once a privacy page exists */}
      </div>
    </section>
  );
}
