// Single ambient backdrop for the whole page: a faint orange grid plus soft
// blobs, fixed behind all content. Transparent sections reveal it; frosted
// glass cards diffuse it. Nothing section-specific lives here.
const BLOBS: React.CSSProperties[] = [
  { top: "-6%", left: "-4%", width: 540, height: 540, background: "radial-gradient(circle, rgba(251,86,7,0.16), transparent 70%)" },
  { top: "22%", right: "-6%", width: 480, height: 480, background: "radial-gradient(circle, rgba(255,140,66,0.14), transparent 70%)" },
  { top: "54%", left: "-8%", width: 520, height: 520, background: "radial-gradient(circle, rgba(255,140,66,0.13), transparent 70%)" },
  { bottom: "-10%", right: "-4%", width: 560, height: 560, background: "radial-gradient(circle, rgba(251,86,7,0.15), transparent 70%)" },
  { top: "40%", left: "44%", width: 420, height: 420, background: "radial-gradient(circle, rgba(251,86,7,0.09), transparent 70%)" },
];

export function PageBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
    >
      {/* Faint grid, edges faded */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(251,86,7,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(251,86,7,0.05)_1px,transparent_1px)] bg-[size:46px_46px] [mask-image:radial-gradient(ellipse_95%_85%_at_50%_30%,#000_25%,transparent_85%)]" />
      {/* Soft blobs scattered across the viewport */}
      {BLOBS.map((style, i) => (
        <div key={i} className="absolute rounded-full blur-[130px]" style={style} />
      ))}
    </div>
  );
}
