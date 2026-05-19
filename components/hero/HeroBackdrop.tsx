import { HERO_VIDEO } from "@/lib/data/tools";

export function HeroBackdrop() {
  return (
    <div
      className="absolute inset-0 overflow-hidden z-0 pointer-events-none bg-background"
      aria-hidden="true"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={HERO_VIDEO.poster}
        src={HERO_VIDEO.src}
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgb(15 15 15 / 0.5) 70%, var(--color-background) 100%)",
        }}
      />
    </div>
  );
}
