import type { Product } from "@/types";

export const products: Product[] = Array.from({ length: 36 }, (_, i) => ({
  id: String(i + 1),
  title: "Liter trolley sprayer",
  price: 9.99,
  currency: "USD",
  condition: "Used",
  location: "Los Angeles.CA",
  imageUrl: "/images/products/placeholder.jpg",
  isFavourite: false,
}));
