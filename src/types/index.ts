export type ProductCondition = "New" | "Used" | "Like New" | "Refurbished";


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

export function formatPrice(price: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(price);
}

export function formatCondition(condition: ProductCondition): string {
  return `(${condition})`;
}
