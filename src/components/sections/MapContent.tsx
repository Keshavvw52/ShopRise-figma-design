import Image from "next/image";
import { Button } from "@/components/ui/Button";

/** Map page — Figma Map frame (10207) */
export function MapContent() {
  return (
    <div className="py-8">
      <h1 className="text-lg font-medium text-navy">Change location</h1>

      <div className="mt-4 flex max-w-[520px] flex-col gap-4">
        <div className="flex flex-col gap-3">
          <div className="h-px bg-gray-light" />
          <p className="flex items-center gap-2 text-sm font-medium text-navy">
            <span className="h-[18px] w-[18px] rounded-full bg-gray-light" />
            Use my currently position
          </p>
          <div className="h-px bg-gray-light" />
        </div>

        <p className="text-sm text-dark">
          Search by city, neighborhood or postal code.
        </p>

        <div className="flex flex-col gap-[5px]">
          <span className="text-base font-medium text-dark">Location</span>
          <div className="flex items-center gap-2 rounded-lg border border-gray-light p-2.5">
            <Image
              src="/icons/location.svg"
              alt=""
              width={18}
              height={18}
              aria-hidden
            />
            <span className="text-sm font-medium text-dark">Los Angeles,CA</span>
          </div>
        </div>

        <div className="relative h-[200px] overflow-hidden rounded-lg border border-gray-light bg-[#D9D9D9]">
          <div className="absolute top-1/2 left-1/2 h-[138px] w-[138px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FF7F5080] bg-coral/10" />
          <Image
            src="/icons/location.svg"
            alt=""
            width={18}
            height={18}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            aria-hidden
          />
        </div>

        <Button type="button" className="w-fit">
          Apply
        </Button>
      </div>
    </div>
  );
}
