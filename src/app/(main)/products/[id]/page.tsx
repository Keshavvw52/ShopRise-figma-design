import { notFound } from "next/navigation";
import { ProductDetailContent } from "@/components/sections/ProductDetailContent";
import { getProductDetail } from "@/data/productDetail";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductDetail(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-[1280px] flex-1 px-[25px]">
      <ProductDetailContent product={product} />
    </main>
  );
}
