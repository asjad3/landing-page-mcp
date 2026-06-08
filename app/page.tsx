import { SiteNav } from "@/components/nav/SiteNav";
import { PageBackdrop } from "@/components/primitives/PageBackdrop";
import { Hero } from "@/components/hero/Hero";
import { AgentsRow } from "@/components/agents/AgentsRow";
import { TrustedBy } from "@/components/trusted/TrustedBy";
import { Differentiator } from "@/components/why/Differentiator";
import { ToolsSection } from "@/components/tools/ToolsSection";
import { TeamsSection } from "@/components/teams/TeamsSection";
import { TrustSecurity } from "@/components/trust/TrustSecurity";
import { FaqSection } from "@/components/faq/FaqSection";
import { CtaBleed } from "@/components/cta/CtaBleed";
import { SiteFooter } from "@/components/footer/SiteFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Imagine MCP",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "macOS, Windows, Linux",
  description:
    "An MCP server for ImagineArt. Six creative endpoints (text-to-image, text-to-video, music, upscaler, background remover, balance) for Claude, Cursor, Cline, Hermes, OpenClaw, and any MCP-compatible client.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  publisher: {
    "@type": "Organization",
    name: "Vyro AI",
    url: "https://imagine.art",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageBackdrop />
      <SiteNav />
      <main>
        <Hero />
        <AgentsRow />
        <TrustedBy />
        <Differentiator />
        <TeamsSection />
        <ToolsSection />
        <TrustSecurity />
        <FaqSection />
        <CtaBleed />
      </main>
      <SiteFooter />
    </>
  );
}
