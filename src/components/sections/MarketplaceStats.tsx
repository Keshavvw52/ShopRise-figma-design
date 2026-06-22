import Image from "next/image";
import { aboutStats } from "@/data/about";

/** Stats row — Figma Frame 923 (Home / About) */
export function MarketplaceStats() {
  return (
    <section
      className="flex flex-wrap gap-x-[75px] gap-y-[35px] p-5"
      aria-label="Marketplace statistics"
    >
      {aboutStats.map((stat) => (
        <div key={stat.id} className="flex items-center gap-2.5">
          <div className="relative h-[100px] w-[100px] shrink-0">
            <span
              className="absolute inset-0 rounded-full bg-[#D9D9D9]"
              aria-hidden
            />
            <Image
              src={stat.iconSrc}
              alt=""
              width={50}
              height={50}
              className="absolute top-[25px] left-[25px]"
              aria-hidden
            />
          </div>
          <div>
            <p className="text-[40px] leading-none font-medium text-dark">
              {stat.value}
            </p>
            <p className="w-[150px] text-[17px] text-dark">{stat.label}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
