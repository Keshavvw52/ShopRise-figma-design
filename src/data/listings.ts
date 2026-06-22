/** Seller listings — Figma Listing frame (261:7261) */
export interface SellerListing {
  id: string;
  title: string;
  description: string;
  price: number;
  condition: string;
  listedOn: string;
  clicks: number;
  imageUrl: string;
}

export const sellerListings: SellerListing[] = [
  {
    id: "1",
    title: "Liter trolley sprayer",
    description:
      "Cart sprayer NEW 120 liters 4 stroke With reel Hose 50m 40Bar Pistol Pneumatic wheels 13% VAT added . We ship nationwide.",
    price: 9.99,
    condition: "(Used)",
    listedOn: "06/19/2021",
    clicks: 0,
    imageUrl: "/images/products/liter-trolley-sprayer.png",
  },
  {
    id: "2",
    title: "Liter trolley sprayer",
    description:
      "Cart sprayer NEW 120 liters 4 stroke With reel Hose 50m 40Bar Pistol Pneumatic wheels 13% VAT added . We ship nationwide.",
    price: 9.99,
    condition: "(Used)",
    listedOn: "06/19/2021",
    clicks: 0,
    imageUrl: "/images/products/liter-trolley-sprayer.png",
  },
];
