export type ClientId =
  | "claude-desktop"
  | "cursor"
  | "cline"
  | "windsurf"
  | "continue"
  | "claude-code"
  | "zed"
  | "codex-cli";

const iconClass =
  "inline-block align-middle relative -top-[0.05em] shrink-0";

export function ClientIcon({ id }: { id: ClientId }) {
  switch (id) {
    case "claude-desktop":
    case "claude-code":
      return <ClaudeIcon />;
    case "cursor":
      return <CursorIcon />;
    case "cline":
      return <ClineIcon />;
    case "windsurf":
      return <WindsurfIcon />;
    case "continue":
      return <ContinueIcon />;
    case "zed":
      return <ZedIcon />;
    case "codex-cli":
      return <CodexIcon />;
  }
}

function ClaudeIcon() {
  return (
    <svg width="0.82em" height="0.82em" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClass}>
      <line x1="12" y1="2.5" x2="12" y2="21.5" stroke="#D4956A" strokeWidth="3.8" strokeLinecap="round" />
      <line x1="12" y1="2.5" x2="12" y2="21.5" stroke="#D4956A" strokeWidth="3.8" strokeLinecap="round" transform="rotate(60 12 12)" />
      <line x1="12" y1="2.5" x2="12" y2="21.5" stroke="#D4956A" strokeWidth="3.8" strokeLinecap="round" transform="rotate(120 12 12)" />
    </svg>
  );
}

function CursorIcon() {
  return (
    <svg width="0.82em" height="0.82em" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClass}>
      <path
        d="M5 3L5 18L9 13.5L12.5 21L14.5 20L11 12.5L17 12.5Z"
        fill="white"
        stroke="rgba(0,0,0,0.2)"
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClineIcon() {
  return (
    <svg width="0.82em" height="0.82em" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClass}>
      <rect x="3" y="3" width="18" height="18" rx="3" fill="#19A0F0" />
      <path d="M7.5 9L5 12L7.5 15" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.5 9L19 12L16.5 15" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="13" y1="7" x2="11" y2="17" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function WindsurfIcon() {
  return (
    <svg width="0.82em" height="0.82em" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClass}>
      <path d="M4 18 Q8 6 20 4 Q18 10 12 13 Q8 15 4 18Z" fill="#5B7FFF" />
      <path d="M4 18 Q8 15 12 13 L12 20 Q8 20 4 18Z" fill="#3D5FD9" />
    </svg>
  );
}

function ContinueIcon() {
  return (
    <svg width="0.82em" height="0.82em" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClass}>
      <circle cx="12" cy="12" r="9" fill="#1DB954" />
      <path d="M9 8.5L16 12L9 15.5V8.5Z" fill="white" />
    </svg>
  );
}

function ZedIcon() {
  return (
    <svg width="0.82em" height="0.82em" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClass}>
      <rect x="3" y="3" width="18" height="18" rx="3.5" fill="white" />
      <path d="M7 8H17L7 16H17" stroke="#0F0F0F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CodexIcon() {
  return (
    <svg width="0.82em" height="0.82em" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClass}>
      <rect x="2" y="4" width="20" height="16" rx="2.5" stroke="white" strokeWidth="1.5" />
      <path d="M6.5 9.5L10 12L6.5 14.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="12.5" y1="15" x2="17" y2="15" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
