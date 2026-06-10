"use client";

import { HeartToggle } from "@/components/ui/HeartToggle";

export function HeartTogglePreview() {
  return (
    <div className="flex flex-wrap gap-8">
      <div>
        <p className="mb-2 text-sm text-dark">Product card (white)</p>
        <div className="relative h-[125px] w-[170px] rounded-[10px] bg-navy">
          <HeartToggle className="absolute top-2 right-[9px]" />
        </div>
      </div>
      <div>
        <p className="mb-2 text-sm text-dark">Accent (coral)</p>
        <div className="relative h-[125px] w-[170px] rounded-[10px] border border-gray-light bg-white">
          <HeartToggle
            variant="accent"
            defaultIsFavourite
            className="absolute top-2 right-[9px]"
          />
        </div>
      </div>
    </div>
  );
}
