/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/primitives/Reveal";

const BRANDS = [
  "Unilever",
  "Knorr",
  "Kayali",
  "Pega",
  "Ashley",
  "Buzzlab",
  "Crumble",
  "DAP",
  "Framon",
  "Komodo",
  "ROLLEMAN",
  "Smarters",
  "mnsaj",
  "withfeeling",
];

export function TrustedBy() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-page">
        <Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-x-8 gap-y-10 items-center justify-items-center max-w-[1100px] mx-auto">
            {BRANDS.map((name) => (
              <img
                key={name}
                src={`/brand-pngs/${name}.png`}
                alt={name}
                className="h-6 md:h-7 w-auto object-contain brightness-0 opacity-50 transition-opacity duration-300 hover:opacity-90"
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
