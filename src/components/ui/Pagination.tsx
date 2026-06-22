import Image from "next/image";
import { cn } from "@/lib/utils";

const pages = ["1", "2", "3", "...", "9"] as const;

/** Pagination — Figma Frame 846 (52:567) */
export function Pagination() {
  return (
    <nav
      className="flex items-center justify-center gap-2 py-6"
      aria-label="Pagination"
    >
      <span className="flex h-8 w-8 items-center justify-center">
        <Image
          src="/icons/chevron-bottom.svg"
          alt=""
          width={10}
          height={10}
          className="rotate-90"
          aria-hidden
        />
      </span>

      <div className="flex items-center gap-1">
        {pages.map((page) => (
          <span
            key={page}
            className={cn(
              "flex h-8 min-w-8 items-center justify-center px-2 text-sm text-dark",
              page === "1" && "bg-gray-light",
            )}
          >
            {page}
          </span>
        ))}
      </div>

      <span className="flex h-8 w-8 items-center justify-center">
        <Image
          src="/icons/chevron-bottom.svg"
          alt=""
          width={10}
          height={10}
          className="-rotate-90"
          aria-hidden
        />
      </span>
    </nav>
  );
}
