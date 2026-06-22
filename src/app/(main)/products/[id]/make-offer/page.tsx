import { notFound } from "next/navigation";
import { ProductDetailContent } from "@/components/sections/ProductDetailContent";
import { getProductDetail } from "@/data/productDetail";

interface ProductMakeOfferPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductMakeOfferPage({
  params,
}: ProductMakeOfferPageProps) {
  const { id } = await params;
  const product = getProductDetail(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-[1280px] flex-1 px-[25px]">
      <ProductDetailContent product={product} variant="make-offer" />
    </main>
  );
}
