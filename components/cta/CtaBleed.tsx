import { ButtonLink } from "@/components/primitives/Button";
import { Reveal } from "@/components/primitives/Reveal";
import { CTA_VIDEO } from "@/lib/data/tools";

export function CtaBleed() {
  return (
    <section
      id="cta"
      className="relative py-28 md:py-40 overflow-hidden border-y border-border-primary isolate bg-neutral-110"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={CTA_VIDEO.poster}
        className="absolute inset-0 w-full h-full object-cover -z-[2] opacity-[0.22]"
      >
        <source src={CTA_VIDEO.src} type="video/mp4" />
      </video>
      {/* Darkening + vignette for legible text */}
      <div
        className="absolute inset-0 -z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 50% 45%, rgb(15 15 15 / 0.6), rgb(15 15 15 / 0.95))",
        }}
      />
      {/* Subtle brand glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] rounded-full blur-[140px] -z-[1] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(251,86,7,0.22), transparent 70%)" }}
      />
      {/* Edge fades so the dark bleed blends into the white sections */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-24 -z-[1] bg-gradient-to-b from-neutral-110 to-transparent" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-24 -z-[1] bg-gradient-to-t from-neutral-110 to-transparent" />

      <div className="container-page flex flex-col items-center text-center">
        <Reveal>
          <div className="font-mono text-[10.5px] font-semibold tracking-[1.8px] uppercase text-white/45 mb-6">
            Ready when you are
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="font-display font-semibold capitalize leading-[1.08] tracking-[-0.5px] text-white text-balance m-0 max-w-[18ch]"
            style={{ fontSize: "clamp(34px, 4.4vw, 60px)" }}
          >
            Plug in. Start generating.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="font-sans text-[17px] md:text-[18px] leading-[1.7] text-white/65 m-0 mt-6 max-w-[52ch] tracking-[-0.005em]">
            Connect Imagine MCP to your client and create your first asset in
            under a minute. Your account, your models, your output.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="flex items-center gap-4 flex-wrap justify-center mt-10">
            <ButtonLink href="#install" variant="white" size="lg">
              Install The Server
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
