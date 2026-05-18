/* eslint-disable @next/next/no-img-element */
import type { ListingItem } from "@/lib/data/tools";
import { ChatMock } from "./ChatMock";

interface Props {
  items: ListingItem[];
}

export function ListingRows({}: Props) {
  return (
    <ChatMock
      prompt="Show my recent generations"
      status="3 recent generations"
    >
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <img
          src="/list-generation.jpg"
          alt="List generations"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>
    </ChatMock>
  );
}
