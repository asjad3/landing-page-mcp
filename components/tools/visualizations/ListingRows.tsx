/* eslint-disable @next/next/no-img-element */
import type { ListingItem } from "@/lib/data/tools";
import { ChatMock } from "./ChatMock";

interface Props {
  items: ListingItem[];
}

const badgeStyle: Record<string, React.CSSProperties> = {
  vid: { background: "rgba(99,80,210,0.12)", color: "rgba(99,80,210,0.9)" },
  img: { background: "rgba(0,0,0,0.06)", color: "rgba(0,0,0,0.45)" },
  aud: { background: "rgba(0,0,0,0.06)", color: "rgba(0,0,0,0.45)" },
};

function ListRow({ item }: { item: ListingItem }) {
  return (
    <div className="flex items-center gap-3 px-3 py-2.5 last:border-0" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
      <div className="w-9 h-9 rounded-lg overflow-hidden shrink-0" style={{ background: "rgba(0,0,0,0.07)" }}>
        <img src={item.thumb} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-sans text-[12.5px] font-medium truncate" style={{ color: "#111" }}>{item.name}</div>
        <div className="font-sans text-[11px]" style={{ color: "rgba(0,0,0,0.4)" }}>{item.time} ago</div>
      </div>
      <span
        className="font-mono text-[10px] font-medium px-2 py-0.5 rounded-full uppercase tracking-wide"
        style={badgeStyle[item.badge] ?? { background: "rgba(0,0,0,0.06)", color: "rgba(0,0,0,0.45)" }}
      >
        {item.badge}
      </span>
    </div>
  );
}

export function ListingRows({ items }: Props) {
  return (
    <ChatMock prompt="Show my recent generations" status={`${items.length} results`}>
      <div className="absolute inset-0 rounded-xl overflow-hidden flex flex-col" style={{ background: "#fafaf8" }}>
        <div className="flex items-center justify-between px-3 py-2 shrink-0" style={{ background: "#f2f1ee", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <span className="font-mono text-[9px] tracking-[1.4px] uppercase" style={{ color: "rgba(0,0,0,0.35)" }}>generations</span>
          <span className="font-mono text-[9px]" style={{ color: "rgba(0,0,0,0.25)" }}>{items.length} items</span>
        </div>
        <div className="flex-1 overflow-hidden">
          {items.map((it, i) => (
            <ListRow key={i} item={it} />
          ))}
        </div>
      </div>
    </ChatMock>
  );
}
