import { CategoryFilterBar } from "@/components/sections/CategoryFilterBar";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { Pagination } from "@/components/ui/Pagination";
import { products } from "@/data/products";

/** Shared listings grid — Figma Home / All listing */
export function ListingsContent() {
  return (
    <>
      <CategoryFilterBar />
      <ProductGrid products={products} />
      <Pagination />
    </>
  );
}
