import Image from "next/image";
import { cn } from "@/lib/utils";

interface CategoryTagProps {
  label: string;
  tone?: "dark" | "black";
  className?: string;
}

export function CategoryTag({
  label,
  tone = "black",
  className,
}: CategoryTagProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-[5px]",
        "rounded-[20px] border border-gray-light px-3 py-2.5",
        "text-sm font-medium",
        tone === "dark" ? "text-dark" : "text-black",
        className,
      )}
    >
      {label}
      <Image
        src="/icons/close.svg"
        alt=""
        width={10}
        height={10}
        aria-hidden
      />
    </span>
  );
}
