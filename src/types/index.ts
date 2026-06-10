/** Item condition labels shown on product cards (matches Figma e.g. "(Used)") */
export type ProductCondition = "New" | "Used" | "Like New" | "Refurbished";

/** A single marketplace listing — the core data shape for ProductCard and listing pages */
export interface Product {
  id: string;
  title: string;
  price: number;
  currency: string;
  condition: ProductCondition;
  location: string;
  imageUrl: string;
  isFavourite?: boolean;
}

/** Formats a price for display, e.g. 9.99 → "$9.99" */
export function formatPrice(price: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(price);
}

/** Wraps condition in parentheses to match Figma, e.g. "Used" → "(Used)" */
export function formatCondition(condition: ProductCondition): string {
  return `(${condition})`;
}
