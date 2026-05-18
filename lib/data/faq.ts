export interface FaqItem {
  q: string;
  a: string;
}

export const FAQ: FaqItem[] = [
  {
    q: "How does Imagine MCP connect to AI agents?",
    a: "Imagine MCP uses the Model Context Protocol, an open standard that gives AI agents access to external tools. Once connected, your agent can generate images, create videos, write scripts, produce music, upscale assets, remove backgrounds, and browse your full generation history — all within a single conversation.",
  },
  {
    q: "Which agents are supported?",
    a: "Imagine MCP works with Claude Desktop, Cursor, Cline, Windsurf, Continue, Claude Code, Zed, and Codex CLI. Any agent or client that speaks MCP can connect — including custom setups running locally or on a server.",
  },
  {
    q: "What tools are available?",
    a: "Eight creative endpoints: text-to-image, text-to-video, image upscaler, background remover, script generation, music generation, generation listing, and balance inquiry. Each is a native MCP tool, callable directly in conversation.",
  },
  {
    q: "What can I create?",
    a: "Images at any resolution, videos up to 10 seconds, production-ready scripts and ad copy, and original music — all from a single prompt. You can chain tools in sequence: generate an image, upscale it, strip its background, and feed it into a video tool, all in one agent session.",
  },
  {
    q: "Do I need an API key?",
    a: "No. Install the server with npx -y @imagine/mcp-server or point your client to mcp.imagine.art, then sign in with your existing imagine.art account. OAuth handles authentication — no keys to generate, store, or rotate.",
  },
  {
    q: "How does pricing work?",
    a: "Imagine MCP uses the same credit system as the imagine.art platform. Each generation costs credits based on the tool and model selected. Your existing plan credits work seamlessly through any connected agent. Use imagine.balance() anytime to check your balance and renewal date.",
  },
  {
    q: "How long does generation take?",
    a: "Images typically complete in a few seconds. Videos take longer depending on duration and model. All generation runs asynchronously — your agent polls for results and delivers them the moment they're ready, so the conversation keeps flowing.",
  },
  {
    q: "Can I use previous generations as input?",
    a: "Yes. Use imagine.list() to browse your full generation history and reference any past image or video as a starting point for new creations. Iterative, multi-step workflows feel natural inside a single agent session.",
  },
];
