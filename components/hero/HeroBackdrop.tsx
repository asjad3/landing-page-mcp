import { DotWaveCanvas } from "./DotWaveCanvas";

export function HeroBackdrop() {
  return (
    <div
      className="absolute inset-0 overflow-hidden z-0 pointer-events-none bg-background"
      aria-hidden="true"
    >
      <DotWaveCanvas />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgb(15 15 15 / 0.6) 70%, var(--color-background) 100%)",
        }}
      />
    </div>
  );
}
