import Image from "next/image";
import { cn } from "@/lib/utils";

type HeartVariant = "product" | "accent";

const heartIcons: Record<
  HeartVariant,
  { outline: string; filled: string }
> = {
  product: {
    outline: "/icons/heart-outline.svg",
    filled: "/icons/heart-filled.svg",
  },
  accent: {
    outline: "/icons/heart-outline-coral.svg",
    filled: "/icons/heart-filled-coral.svg",
  },
};

interface HeartToggleProps {
  variant?: HeartVariant;
  defaultIsFavourite?: boolean;
  className?: string;
}

/** Heart icon — static Figma state only (no toggle). */
export function HeartToggle({
  variant = "product",
  defaultIsFavourite = false,
  className,
}: HeartToggleProps) {
  const icons = heartIcons[variant];

  return (
    <span
      className={cn(
        "inline-flex h-6 w-6 shrink-0 items-center justify-center",
        className,
      )}
      aria-hidden
    >
      <Image
        src={defaultIsFavourite ? icons.filled : icons.outline}
        alt=""
        width={24}
        height={24}
      />
    </span>
  );
}
