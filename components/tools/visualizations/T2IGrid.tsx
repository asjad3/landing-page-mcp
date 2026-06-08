/* eslint-disable @next/next/no-img-element */
import { ChatMock } from "./ChatMock";

const IMG_1A = "/tool-images/div.png";
const IMG_1B = "/tool-images/div-1.png";
const IMG_2A = "/tool-images/div-2.png";

export function T2IGrid() {
  return (
    <ChatMock
      prompt="Create a storefront campaign for an artisan bakery brand"
      status="Generated · 3 variations"
      badges={["ImagineArt 1.5", "16:9"]}
    >
      <div className="absolute inset-0 rounded-xl overflow-hidden bg-white flex flex-col gap-2.5 p-3">
        <div className="grid flex-1 min-h-0 grid-cols-2 grid-rows-2 gap-2.5">
          <div className="row-span-2 rounded-lg overflow-hidden relative">
            <img src={IMG_1A} alt="Campaign image 1" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden relative">
            <img src={IMG_1B} alt="Campaign image 2" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden relative">
            <img src={IMG_2A} alt="Campaign image 3" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
        <span className="font-sans text-[12px] font-medium text-black/45 shrink-0">
          Generations
        </span>
      </div>
    </ChatMock>
  );
}
