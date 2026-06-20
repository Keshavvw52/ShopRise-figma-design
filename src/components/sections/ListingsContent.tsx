import { CategoryFilterBar } from "@/components/sections/CategoryFilterBar";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { products } from "@/data/products";

/** Shared listings grid — same as Home (Figma All listing) */
export function ListingsContent() {
  return (
    <>
      <CategoryFilterBar />
      <ProductGrid products={products} />
    </>
  );
}
