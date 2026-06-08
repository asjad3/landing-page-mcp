/* eslint-disable @next/next/no-img-element */

// Intrinsic dimensions of /imagine-mcp-logo.svg
const RATIO = 269 / 50;

export function BrandLogo({
  height = 22,
  className = "",
}: {
  height?: number;
  className?: string;
}) {
  return (
    <img
      src="/imagine-mcp-logo.svg"
      alt="Imagine MCP"
      width={Math.round(height * RATIO)}
      height={height}
      style={{ height, width: "auto" }}
      className={`block object-contain ${className}`}
    />
  );
}
