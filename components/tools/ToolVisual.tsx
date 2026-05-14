import { BgRemoverSweep } from "./visualizations/BgRemoverSweep";
import { UpscaleTwoPane } from "./visualizations/UpscaleTwoPane";
import { MusicCard } from "./visualizations/MusicCard";
import { ScriptCard } from "./visualizations/ScriptCard";
import { ListingRows } from "./visualizations/ListingRows";
import { BalanceJson } from "./visualizations/BalanceJson";
import { T2IGrid } from "./visualizations/T2IGrid";
import { T2VPlayer } from "./visualizations/T2VPlayer";
import type { Tool } from "@/lib/data/tools";

export function ToolVisual({ tool }: { tool: Tool }) {
  switch (tool.kind) {
    case "image-carousel":
      return <T2IGrid initial={tool.initialTiles} />;
    case "video-timecode":
      return (
        <T2VPlayer
          src={tool.src}
          poster={tool.poster}
          durationLabel={tool.durationLabel}
        />
      );
    case "bg-remove":
      return <BgRemoverSweep src={tool.src} />;
    case "upscale-pair":
      return (
        <UpscaleTwoPane
          src={tool.src}
          sourceLabel={tool.sourceLabel}
          resultLabel={tool.resultLabel}
        />
      );
    case "music":
      return (
        <MusicCard
          src={tool.src}
          poster={tool.poster}
          caption={tool.caption}
          duration={tool.duration}
        />
      );
    case "script":
      return <ScriptCard items={tool.items} />;
    case "listing":
      return <ListingRows items={tool.items} />;
    case "balance":
      return <BalanceJson />;
  }
}
