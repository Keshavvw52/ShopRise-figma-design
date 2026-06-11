import { ProductCard } from "@/components/cards/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1280px] flex-1 px-[25px] pb-8">
      <div className="flex flex-wrap gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
