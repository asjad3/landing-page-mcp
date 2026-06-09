import { Reveal } from "@/components/primitives/Reveal";
import { ToolStack } from "./ToolStack";

export function ToolsSection() {
  return (
    <section id="tools" className="relative border-t border-border-primary isolate">
      <div className="container-page">

        {/* Section header */}
        <Reveal className="pt-16 pb-12 md:pt-24 md:pb-20 max-w-[720px]">
          <div className="font-mono text-[10.5px] font-semibold tracking-[1.8px] uppercase text-content-tertiary mb-[18px]">
            Toolset
          </div>
          <h2
            className="font-display font-semibold capitalize leading-[1.05] tracking-[-0.5px] m-0 mb-4 text-content-primary text-balance"
            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
          >
            Six creative tools{" "}
            <span className="text-black/35">inside one MCP server.</span>
          </h2>
          <p className="font-sans text-[18px] leading-[1.7] text-content-secondary m-0 max-w-[60ch] tracking-[-0.005em]">
            Access six creative tools from Claude, Cursor, or any MCP-compatible
            client. Whether you&apos;re designing in Claude, building pipelines
            in Claude Code, or prototyping in Cursor, every tool runs through
            your imagine.art account with your models and your credits.
          </p>
        </Reveal>

        {/* Tool cards — sticky deck that stacks + tilts on scroll */}
        <ToolStack />

        {/* Bottom spacing */}
        <div className="pb-16 md:pb-24" />
      </div>
    </section>
  );
}
