/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/primitives/Reveal";

// Optical sizing per brand: square/dense marks get capped shorter so they
// don't visually dominate; wide wordmarks get a taller cap so they don't
// shrink to a thin line when they hit the cell-width limit.
const BRANDS: { name: string; h: number }[] = [
  { name: "Unilever", h: 30 },
  { name: "Knorr", h: 28 },
  { name: "Kayali", h: 28 },
  { name: "Pega", h: 19 },
  { name: "Ashley", h: 22 },
  { name: "Buzzlab", h: 18 },
  { name: "Crumble", h: 18 },
  { name: "DAP", h: 30 },
  { name: "Framon", h: 18 },
  { name: "Komodo", h: 20 },
  { name: "ROLLEMAN", h: 15 },
  { name: "Smarters", h: 16 },
  { name: "mnsaj", h: 30 },
  { name: "xolour", h: 13 },
];

function Logo({ name, h }: { name: string; h: number }) {
  return (
    <img
      src={`/brand-logos/${name}.svg`}
      alt={name}
      style={{ maxHeight: `${h}px` }}
      className="max-w-[140px] w-auto object-contain transition-[filter,transform] duration-500 ease-out hover:brightness-75 hover:scale-[1.06]"
    />
  );
}

export function TrustedBy() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-page">
        <Reveal>
          {/* Desktop / tablet: static grid */}
          <div className="hidden sm:grid grid-cols-4 lg:grid-cols-7 gap-x-6 gap-y-12 items-center justify-items-center max-w-[1180px] mx-auto">
            {BRANDS.map(({ name, h }) => (
              <div
                key={name}
                className="flex items-center justify-center h-10 w-full"
              >
                <Logo name={name} h={h} />
              </div>
            ))}
          </div>

          {/* Mobile: single horizontal auto-scrolling marquee */}
          <div className="sm:hidden relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
            <div className="flex w-max animate-marquee items-center">
              {[...BRANDS, ...BRANDS].map(({ name, h }, i) => (
                <div
                  key={`${name}-${i}`}
                  className="flex items-center justify-center h-10 px-7 shrink-0"
                >
                  <Logo name={name} h={h} />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
