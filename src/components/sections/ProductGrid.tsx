import { ProductCard } from "@/components/cards/ProductCard";
import type { Product } from "@/types";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <section
      className="grid grid-cols-6 gap-[17px] pb-5"
      aria-label="Product listings"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
