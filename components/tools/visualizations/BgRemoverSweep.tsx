import { ChatMock } from "./ChatMock";

interface Props {
  src: string;
}

export function BgRemoverSweep({}: Props) {
  return (
    <ChatMock
      prompt="Remove the background from this product photo"
      status="Background removed"
      badges={["Pixel-perfect", "PNG"]}
    >
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <video
          autoPlay muted loop playsInline preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bg-remover.mp4" type="video/mp4" />
        </video>
      </div>
    </ChatMock>
  );
}
