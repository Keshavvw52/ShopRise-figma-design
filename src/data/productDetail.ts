import type { Product } from "@/types";

export interface ProductDetail extends Product {
  category: string;
  description: string;
  conditionLabel: string;
  postedAt: string;
  images: string[];
  mapImageUrl: string;
  seller: {
    name: string;
    joinedAt: string;
    avatarUrl: string;
    reviewCount: number;
  };
  deliveryFee: number;
}

/** Product detail — Figma Detail product frame (84:1953) */
export const productDetail: ProductDetail = {
  id: "1",
  title: "Trolley sprayer",
  price: 9.99,
  currency: "USD",
  condition: "Used",
  conditionLabel: "(Used like new)",
  location: "Los Angeles.CA",
  imageUrl: "/images/products/trolley-sprayer-main.png",
  isFavourite: false,
  category: "Farming Tools & Machinery",
  description:
    "Cart sprayer NEW 120 liters 4 stroke With reel Hose 50m 40Bar Pistol Pneumatic wheels 13% VAT added . We ship nationwide.",
  postedAt: "3 hours ago",
  images: [
    "/images/products/trolley-sprayer-main.png",
    "/images/products/trolley-sprayer-thumb-2.png",
    "/images/products/trolley-sprayer-main.png",
    "/images/products/trolley-sprayer-thumb-2.png",
  ],
  mapImageUrl: "/images/products/product-map.png",
  seller: {
    name: "Jennifer Garnet",
    joinedAt: "Join oct 2023",
    avatarUrl: "/images/products/seller-jennifer-garnet.png",
    reviewCount: 10,
  },
  deliveryFee: 13.5,
};

export function getProductDetail(id: string): ProductDetail | undefined {
  if (id === productDetail.id) return productDetail;
  return undefined;
}

export function getProductTotal(detail: ProductDetail): number {
  return detail.price + detail.deliveryFee;
}
