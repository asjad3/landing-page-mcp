/* eslint-disable @next/next/no-img-element */
export type ClientId =
  | "claude-desktop"
  | "cursor"
  | "cline"
  | "windsurf"
  | "continue"
  | "claude-code"
  | "zed"
  | "codex-cli";

const BASE = "inline-block align-middle relative -top-[0.05em] shrink-0 w-[0.82em] h-[0.82em] object-contain";

export function ClientIcon({ id }: { id: ClientId }) {
  switch (id) {
    case "claude-desktop":
    case "claude-code":
      return <img src="/agents/claude.svg" alt="" aria-hidden="true" className={BASE} />;
    case "cursor":
      return <img src="/agents/cursor.svg" alt="" aria-hidden="true" className={`${BASE} rounded-[0.12em]`} />;
    case "cline":
      return <img src="/agents/cline.png" alt="" aria-hidden="true" className={`${BASE} rounded-[0.12em]`} />;
    case "windsurf":
      return <img src="/agents/windsurf.svg" alt="" aria-hidden="true" className={BASE} />;
    case "continue":
      return <img src="/agents/continue.png" alt="" aria-hidden="true" className={`${BASE} rounded-full`} />;
    case "zed":
      return <img src="/agents/zed.svg" alt="" aria-hidden="true" className={BASE} style={{ filter: "brightness(0) invert(1)" }} />;
    case "codex-cli":
      return <img src="/agents/openai.svg" alt="" aria-hidden="true" className={BASE} style={{ filter: "brightness(0) invert(1)" }} />;
  }
}
