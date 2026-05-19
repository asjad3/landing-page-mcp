export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Tools", href: "#tools" },
  { label: "Install", href: "#install" },
];

export const IMAGINE_TOOL_LINKS: NavLink[] = [
  { label: "AI Image Generator", href: "https://www.imagine.art/ai-image-generator" },
  { label: "AI Video Generator", href: "https://www.imagine.art/ai-video-generator" },
  { label: "AI Film Studio", href: "https://www.imagine.art/ai-film-studio" },
  { label: "AI Workflows", href: "https://www.imagine.art/workflow" },
  { label: "AI Audio Studio", href: "https://www.imagine.art/audio-studio/" },
  { label: "AI Text-to-Speech", href: "https://www.imagine.art/audio-studio/ai-text-to-speech/" },
  { label: "AI Music Generator", href: "https://www.imagine.art/audio/music/elevenlabs-music" },
];

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: "Product",
    links: [
      { label: "Tools", href: "#tools" },
      { label: "Install", href: "#install" },
    ],
  },
  {
    heading: "Tools",
    links: IMAGINE_TOOL_LINKS,
  },
  {
    heading: "Company",
    links: [{ label: "imagine.art", href: "https://imagine.art" }],
  },
];
