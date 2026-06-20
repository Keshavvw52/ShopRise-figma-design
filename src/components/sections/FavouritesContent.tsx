import { FavouriteProductCard } from "@/components/cards/FavouriteProductCard";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { products } from "@/data/products";

/** Favourites page — Figma Favourites frame (198:3245) */
export function FavouritesContent() {
  return (
    <>
      <DashboardHeader title="Favourites" />
      <div className="flex flex-wrap justify-center gap-[17px] px-6 pb-8 pt-6">
        {products.map((product) => (
          <FavouriteProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
