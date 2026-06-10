import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  className?: string;
}

export function SearchBar({ className }: SearchBarProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-[296px]",
        "rounded-[25px] border border-gray-light py-0.5 pr-0.5 pl-2.5",
        className,
      )}
    >
      <Image
        src="/icons/search.svg"
        alt=""
        width={24}
        height={24}
        aria-hidden
      />
      <Button variant="accent" type="button">
        Search
      </Button>
    </div>
  );
}
