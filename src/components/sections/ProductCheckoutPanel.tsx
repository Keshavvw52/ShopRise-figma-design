import Link from "next/link";
import { Button } from "@/components/ui/Button";
import type { ProductDetail } from "@/data/productDetail";
import { getProductTotal } from "@/data/productDetail";
import { formatPrice } from "@/types";

/** Checkout sidebar — Figma Frame 873 */
export function ProductCheckoutPanel({ product }: { product: ProductDetail }) {
  const total = getProductTotal(product);

  return (
    <aside className="flex w-[335px] shrink-0 flex-col items-center gap-[25px] rounded-[10px] border border-gray-light p-5">
      <h2 className="text-lg font-semibold text-dark">Checkout</h2>

      <div className="flex w-full flex-col gap-5">
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <span className="text-base font-medium text-dark">Price</span>
            <span className="text-lg font-medium text-coral">
              {formatPrice(product.price, product.currency)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-base font-medium text-dark">Delivery fee</span>
            <span className="text-lg font-medium text-coral">
              {formatPrice(product.deliveryFee, product.currency)}
            </span>
          </div>
          <div className="h-px w-full border-t border-dashed border-gray-light" />
          <p className="text-right text-[32px] font-medium leading-none text-dark">
            {formatPrice(total, product.currency)}
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          <div className="flex gap-2.5">
            <span className="flex flex-1 items-center justify-center rounded-[25px] border border-coral px-6 py-2.5 text-base font-medium text-coral">
              Buy now
            </span>
            <Link
              href={`/products/${product.id}/make-offer`}
              className="flex flex-1 items-center justify-center rounded-[25px] bg-dark/50 px-6 py-2.5 text-base font-medium text-white"
            >
              Make offer
            </Link>
          </div>
          <Button type="button" className="w-full">
            Paypal checkout
          </Button>
        </div>
      </div>

      <p className="w-full text-center text-xs text-dark">
        By continuing to checkout, you agree to the{" "}
        <span className="underline">Privacy Policy</span> and{" "}
        <span className="underline">Terms of Service.</span>
      </p>
    </aside>
  );
}
