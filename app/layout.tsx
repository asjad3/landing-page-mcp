import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const googleSans = localFont({
  src: "./fonts/google-sans-flex.ttf",
  variable: "--font-google-sans",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://imagine-mcp.vyro.ai"),
  title: {
    default: "Imagine MCP Server – Generate Images, Video & Music in Any Agent",
    template: "%s | Imagine MCP",
  },
  description:
    "An MCP server with six creative tools for Claude, Cursor, and any MCP client without an API key. Generate images, video, and music using your existing imagine.art credits.",
  applicationName: "Imagine MCP",
  authors: [{ name: "Vyro AI" }],
  keywords: [
    "MCP",
    "Model Context Protocol",
    "ImagineArt",
    "Claude",
    "Cursor",
    "AI agents",
    "text-to-image",
    "text-to-video",
  ],
  openGraph: {
    type: "website",
    siteName: "Imagine MCP",
    title: "Imagine MCP Server – Generate Images, Video & Music in Any Agent",
    description:
      "Six creative tools for Claude, Cursor, and any MCP client without an API key. Generate images, video, and music using your existing imagine.art credits.",
    images: [{ url: "/imagine-logo.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imagine MCP Server – Generate Images, Video & Music in Any Agent",
    description:
      "Six creative tools for any MCP client without an API key. Generate images, video, and music using your existing imagine.art credits.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/imagine-logo.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={googleSans.variable}>
      <head>
        <link
          rel="preconnect"
          href="https://cdn-imagine.vyro.ai"
          crossOrigin=""
        />
      </head>
      <body className="font-sans text-content-primary">
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {children}
      </body>
    </html>
  );
}
