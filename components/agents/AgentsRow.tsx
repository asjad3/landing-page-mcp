/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/primitives/Reveal";
import { AGENTS } from "@/lib/data/agents";

export function AgentsRow() {
  return (
    <section className="py-16 pb-10 md:py-24 md:pb-10">
      <div className="container-page">
        <Reveal>
          <div className="font-mono text-[10.5px] font-semibold tracking-[1.8px] uppercase text-content-tertiary text-center mb-7">
            Works with
          </div>
          <div className="flex flex-wrap gap-y-6 gap-x-9 items-center justify-center">
            {AGENTS.map((a) => (
              <div key={a.name} className="group flex items-center gap-2">
                <img
                  src={a.icon}
                  alt=""
                  aria-hidden="true"
                  className="w-auto object-contain shrink-0"
                  style={{ height: "24px" }}
                />
                <span className="font-display text-[20px] font-medium tracking-[-0.01em] text-content-primary transition-colors">
                  {a.name}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-7 font-sans text-[14px] text-content-tertiary text-center">
            Plus any client implementing the Model Context Protocol.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
