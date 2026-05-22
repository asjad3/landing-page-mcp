/* eslint-disable @next/next/no-img-element */
import { ChatMock } from "./ChatMock";

const CDN = "https://cdn-imagine.vyro.ai/imagine-one/gpt-2-image-assets";
const IMG_1A = `${CDN}/img01_horizon.webp`;
const IMG_1B = `${CDN}/img04_justice.webp`;
const IMG_2A = `${CDN}/img07_darkest.webp`;
const IMG_2B = `${CDN}/img09_tp7.webp`;

export function T2IGrid() {
  return (
    <ChatMock
      prompt="Create a campaign shoot of Grove Cold Brew as the product"
      status="Generated · 4 variations"
      badges={["ImagineArt 1.5", "16:9"]}
    >
      <div className="absolute inset-0 rounded-xl overflow-hidden bg-black/25 flex flex-col gap-2.5 p-3">
        <div className="flex flex-1 min-h-0 gap-2.5">
          <div className="flex-1 rounded-lg overflow-hidden relative">
            <img src={IMG_1A} alt="Campaign image 1" className="absolute inset-0 w-full h-full object-cover" />
            <img src={IMG_1B} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="flex-1 rounded-lg overflow-hidden relative">
            <img src={IMG_2A} alt="Campaign image 2" className="absolute inset-0 w-full h-full object-cover" />
            <img src={IMG_2B} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
        <span className="font-sans text-[12px] font-medium text-white/50 shrink-0">
          Generations
        </span>
      </div>
    </ChatMock>
  );
}
