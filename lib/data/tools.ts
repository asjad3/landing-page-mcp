const CDN = "https://cdn-imagine.vyro.ai";
const GPT2 = `${CDN}/imagine-one/gpt-2-image-assets`;
const SEEDANCE_VIDEOS = `${CDN}/imagine-one/home/seedance2/videos`;
const SEEDANCE_FRAMES = `${CDN}/imagine-one/home/seedance2/first_frame`;
const MUSIC = `${CDN}/imagine-one/audio-studio-empty-state/music`;

export type ToolKind =
  | "image-carousel"
  | "video-timecode"
  | "bg-remove"
  | "upscale-pair"
  | "music"
  | "balance";

export type ToolSpan = "hero" | "wide" | "half";

interface ToolBase {
  fn: string;
  tag: string;
  name: string;
  desc: string;
  cta: string;
  span: ToolSpan;
  kind: ToolKind;
}

export interface ImageCarouselTool extends ToolBase {
  kind: "image-carousel";
  initialTiles: string[];
}

export interface VideoTimecodeTool extends ToolBase {
  kind: "video-timecode";
  src: string;
  poster: string;
  durationLabel: string;
}

export interface BgRemoveTool extends ToolBase {
  kind: "bg-remove";
  src: string;
}

export interface UpscalePairTool extends ToolBase {
  kind: "upscale-pair";
  src: string;
  sourceLabel: string;
  resultLabel: string;
}

export interface MusicTool extends ToolBase {
  kind: "music";
  src: string;
  poster: string;
  caption: string;
  duration: string;
}

export interface BalanceTool extends ToolBase {
  kind: "balance";
}

export type Tool =
  | ImageCarouselTool
  | VideoTimecodeTool
  | BgRemoveTool
  | UpscalePairTool
  | MusicTool
  | BalanceTool;

const T2I_INITIAL = [
  "img01_horizon.webp",
  "img04_justice.webp",
  "img07_darkest.webp",
  "img09_tp7.webp",
  "image_8_urban_legends.webp",
  "dragon_awakens.webp",
].map((f) => `${GPT2}/${f}`);

export const TOOLS: Tool[] = [
  {
    kind: "image-carousel",
    span: "hero",
    fn: "imagine.text_to_image()",
    tag: "Text to Image",
    name: "Generate any visual from a single prompt",
    desc: "Turn a product brief into campaign-ready posters, ads, lifestyle shots, and social graphics through leading AI image models, with support for multiple aspect ratios and visual styles.",
    cta: "Generate Your First Image",
    initialTiles: T2I_INITIAL,
  },
  {
    kind: "video-timecode",
    span: "half",
    fn: "imagine.text_to_video()",
    tag: "Text to Video",
    name: "Production-ready video from a text brief",
    desc: "Describe the scene you need and the server returns a finished clip through Seedance 2.0, with support for up to 10 seconds of video in any standard format.",
    cta: "Create A Video",
    src: `${SEEDANCE_VIDEOS}/29s.mp4`,
    poster: `${SEEDANCE_FRAMES}/29s.webp`,
    durationLabel: "00:00 / 00:08",
  },
  {
    kind: "bg-remove",
    span: "half",
    fn: "imagine.remove_bg()",
    tag: "Background Removal",
    name: "Pixel-perfect cutouts on any image",
    desc: "Upload any image and get a clean cutout with full PNG transparency, with pixel-level accuracy on hair, fine edges, and transparent objects so no detail is lost.",
    cta: "Clean Up An Image",
    src: `${GPT2}/img07_darkest.webp`,
  },
  {
    kind: "upscale-pair",
    span: "wide",
    fn: "imagine.upscale()",
    tag: "Image Upscale",
    name: "Scale any image to print resolution",
    desc: "Increase resolution up to 4× without AI smearing or artifacts, using detail-aware diffusion that keeps edges, skin texture, and text sharp at any output size.",
    cta: "Upscale An Image",
    src: `${GPT2}/img04_justice.webp`,
    sourceLabel: "1024 × 640",
    resultLabel: "4096 × 2560",
  },
  {
    kind: "music",
    span: "half",
    fn: "imagine.music()",
    tag: "Music Generation",
    name: "Original audio tracks without a studio",
    desc: "Set the mood, tempo, and instruments in your prompt and get a production-ready track back in seconds, with no composer fees, license costs, or sync rights.",
    cta: "Score Your Content",
    src: `${MUSIC}/videos/1.mp4`,
    poster: `${MUSIC}/images/1.webp`,
    caption: "SYNTH PAD · 110 BPM",
    duration: "0:32",
  },
  {
    kind: "balance",
    span: "half",
    fn: "imagine.balance()",
    tag: "Balance Inquiry",
    name: "Check your credits anytime",
    desc: "Call imagine.balance() from any conversation to see your remaining credits, current plan type, and next renewal date, so you know where you stand before generating.",
    cta: "Check Your Balance",
  },
];

export const HERO_VIDEO = {
  src: `${SEEDANCE_VIDEOS}/13s.mp4`,
  poster: `${SEEDANCE_FRAMES}/13s.webp`,
};

export const CTA_VIDEO = {
  src: `${SEEDANCE_VIDEOS}/47s.mp4`,
  poster: `${SEEDANCE_FRAMES}/47s.webp`,
};
