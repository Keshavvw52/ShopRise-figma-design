"use client";

import Image from "next/image";
import { useState } from "react";
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
  isFavourite?: boolean;
  defaultIsFavourite?: boolean;
  onToggle?: (isFavourite: boolean) => void;
  className?: string;
}

export function HeartToggle({
  variant = "product",
  isFavourite: isFavouriteProp,
  defaultIsFavourite = false,
  onToggle,
  className,
}: HeartToggleProps) {
  const isControlled = isFavouriteProp !== undefined;
  const [internalFavourite, setInternalFavourite] =
    useState(defaultIsFavourite);
  const isFavourite = isControlled ? isFavouriteProp : internalFavourite;

  const icons = heartIcons[variant];

  function handleClick() {
    const next = !isFavourite;
    if (!isControlled) {
      setInternalFavourite(next);
    }
    onToggle?.(next);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={isFavourite}
      aria-label={
        isFavourite ? "Remove from favourites" : "Add to favourites"
      }
      className={cn(
        "inline-flex h-6 w-6 shrink-0 items-center justify-center",
        className,
      )}
    >
      <Image
        src={isFavourite ? icons.filled : icons.outline}
        alt=""
        width={24}
        height={24}
        aria-hidden
      />
    </button>
  );
}
