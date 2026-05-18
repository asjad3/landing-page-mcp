/* eslint-disable @next/next/no-img-element */

const USED  = 2840;
const TOTAL = 5000;
const PCT   = (USED / TOTAL) * 100;

export function BalanceJson() {
  return (
    <div className="w-full h-full flex flex-col gap-3 p-5">

      {/* User bubble */}
      <div className="flex justify-end shrink-0">
        <div
          className="rounded-[18px] rounded-tr-[4px] px-4 py-2.5 max-w-[85%]"
          style={{ background: "rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.07)" }}
        >
          <p className="font-sans text-[13px] leading-[1.55] m-0" style={{ color: "#111" }}>
            how many imagine.art credits do I have left?
          </p>
        </div>
      </div>

      {/* Response card */}
      <div className="relative rounded-2xl overflow-hidden shrink-0" style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(-44deg, rgba(80,110,210,0.05) 0%, rgba(110,60,180,0.07) 100%)" }}
        />
        <div className="relative flex flex-col gap-5 p-6">

          {/* Header */}
          <div className="flex items-center gap-2">
            <img src="/imagine-logo.svg" alt="" className="w-6 h-6 shrink-0" />
            <span className="font-sans font-medium text-[14px]" style={{ color: "#111" }}>Credit balance</span>
          </div>

          {/* Big number */}
          <div className="flex items-end gap-3">
            <span
              className="font-display font-semibold leading-none tracking-[-0.6px]"
              style={{ fontSize: "clamp(44px, 7vw, 58px)", color: "#111" }}
            >
              {USED.toLocaleString()}
            </span>
            <span className="font-sans text-[14px] pb-1" style={{ color: "rgba(0,0,0,0.4)" }}>
              of {TOTAL.toLocaleString()} credits
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full h-[6px] rounded-full overflow-hidden" style={{ background: "rgba(99,80,210,0.12)" }}>
            <div
              className="h-full rounded-full"
              style={{ width: `${PCT}%`, background: "rgba(99,80,210,0.7)" }}
            />
          </div>

          {/* Badges */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 h-[24px] px-2.5 rounded-md" style={{ background: "rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.07)" }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M6 1L1.5 3V6.5C1.5 9 6 11 6 11C6 11 10.5 9 10.5 6.5V3L6 1Z" stroke="black" strokeWidth="1.2" strokeOpacity="0.35" strokeLinejoin="round" />
              </svg>
              <span className="font-sans text-[11px] tracking-[0.2px]" style={{ color: "rgba(0,0,0,0.4)" }}>Pro plan</span>
            </div>
            <div className="flex items-center gap-1.5 h-[24px] px-2.5 rounded-md" style={{ background: "rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.07)" }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <rect x="1.5" y="2.5" width="9" height="8" rx="1.5" stroke="black" strokeWidth="1.2" strokeOpacity="0.35" />
                <line x1="1.5" y1="5" x2="10.5" y2="5" stroke="black" strokeWidth="1.2" strokeOpacity="0.35" />
                <line x1="4" y1="1" x2="4" y2="4" stroke="black" strokeWidth="1.2" strokeOpacity="0.35" strokeLinecap="round" />
                <line x1="8" y1="1" x2="8" y2="4" stroke="black" strokeWidth="1.2" strokeOpacity="0.35" strokeLinecap="round" />
              </svg>
              <span className="font-sans text-[11px] tracking-[0.2px]" style={{ color: "rgba(0,0,0,0.4)" }}>Renews Jun 4</span>
            </div>
          </div>

        </div>
      </div>

      {/* Follow-up text */}
      <p className="font-sans text-[13px] leading-[1.6] m-0 shrink-0" style={{ color: "rgba(0,0,0,0.45)" }}>
        You've got {USED.toLocaleString()} credits on the Pro plan, refreshing on June 4. Want me to generate something?
      </p>

    </div>
  );
}
