interface Props {
  src: string;
}

export function BgRemoverSweep({}: Props) {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/bg-remover.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
