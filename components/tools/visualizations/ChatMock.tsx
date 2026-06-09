import type { ReactNode } from "react";

interface Props {
  prompt: string;
  status?: string;
  badges?: string[];
  children: ReactNode;
  /** Response-card gradient. Defaults to the peach→orange wash. */
  cardGradient?: string;
}

const DEFAULT_GRADIENT =
  "linear-gradient(52.5deg, rgba(252, 226, 201, 0.55) 5%, rgba(248, 187, 159, 0.55) 35%, rgba(249, 193, 147, 0.55) 98%)";

export function ChatMock({
  prompt,
  status = "Generating ...",
  badges,
  children,
  cardGradient = DEFAULT_GRADIENT,
}: Props) {
  return (
    <div className="w-full h-full flex flex-col gap-2.5 sm:gap-3 p-3 sm:p-5">

      {/* User bubble */}
      <div className="flex justify-end shrink-0">
        <div className="bg-black/[0.04] border border-border-primary rounded-[18px] rounded-tr-[4px] px-4 py-2.5 max-w-[85%]">
          <p className="font-sans text-[13px] leading-[1.55] text-content-primary m-0">{prompt}</p>
        </div>
      </div>

      {/* Response card */}
      <div className="flex-1 relative rounded-2xl overflow-hidden min-h-0">
        <div
          className="absolute inset-0"
          style={{ background: cardGradient }}
        />
        <div className="relative h-full flex flex-col gap-2.5 sm:gap-3 p-3 sm:p-5">

          {/* Header */}
          <div className="flex items-center gap-2 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/imagine-logo.svg" alt="" className="w-6 h-6 shrink-0" />
            <span className="font-sans font-medium text-[14px] text-content-primary">{status}</span>
          </div>

          {badges && badges.length > 0 && (
            <div className="flex items-center gap-2 shrink-0 flex-wrap">
              {badges.map((b) => (
                <div key={b} className="flex items-center h-[22px] px-2 bg-white/60 border border-white/50 rounded-md">
                  <span className="font-sans text-[10.5px] text-black/55 tracking-[0.2px]">{b}</span>
                </div>
              ))}
            </div>
          )}

          {/* Content area */}
          <div className="flex-1 min-h-0 relative">
            {children}
          </div>

        </div>
      </div>

    </div>
  );
}
