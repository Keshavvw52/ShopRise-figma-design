import { CategoryFilterBar } from "@/components/sections/CategoryFilterBar";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { products } from "@/data/products";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1280px] flex-1 px-[25px] pb-8">
      <CategoryFilterBar />
      <ProductGrid products={products} />
    </main>
  );
}
