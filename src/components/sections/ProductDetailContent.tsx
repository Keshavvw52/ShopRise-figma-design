import Image from "next/image";
import Link from "next/link";
import { MakeOfferPanel } from "@/components/sections/MakeOfferPanel";
import { ProductCheckoutPanel } from "@/components/sections/ProductCheckoutPanel";
import { ProductImageGallery } from "@/components/sections/ProductImageGallery";
import { Button } from "@/components/ui/Button";
import { HeartToggle } from "@/components/ui/HeartToggle";
import type { ProductDetail } from "@/data/productDetail";
import { formatPrice } from "@/types";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-[5px]">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} className="text-coral" aria-hidden>
          ★
        </span>
      ))}
      <span className="text-xs text-dark">({count})</span>
    </div>
  );
}

/** Product detail page — Figma Detail product frame (84:1953) */
export function ProductDetailContent({
  product,
  variant = "checkout",
}: {
  product: ProductDetail;
  variant?: "checkout" | "make-offer";
}) {
  return (
    <div className="flex gap-5 py-2.5 pb-[30px]">
      <div className="flex flex-1 gap-5">
        <ProductImageGallery images={product.images} title={product.title} />

        <div className="flex flex-col gap-[50px] p-2.5">
          <div className="flex flex-col gap-5">
            <div className="flex max-w-[453px] flex-col gap-4">
              <p className="text-lg font-medium text-dark">{product.category}</p>

              <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-semibold text-coral">
                  {product.title}
                </h1>
                <p className="text-sm font-medium leading-[18px] text-dark">
                  Description{" "}
                </p>
                <p className="text-xs leading-[18px] text-dark">
                  {product.description}
                </p>
              </div>

              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col gap-2.5">
                  <div className="flex flex-wrap items-center gap-5">
                    <span className="flex items-center gap-1 text-sm text-dark">
                      <span aria-hidden>🕐</span>
                      {product.postedAt}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-dark">
                      <Image
                        src="/icons/location.svg"
                        alt=""
                        width={18}
                        height={18}
                        aria-hidden
                      />
                      {product.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-dark">
                    <HeartToggle variant="product" defaultIsFavourite={false} />
                    Add to favorites
                  </div>
                </div>

                <div className="flex items-end gap-1">
                  <span className="text-lg font-medium text-coral">
                    {formatPrice(product.price, product.currency)}
                  </span>
                  <span className="text-xs text-dark">
                    {product.conditionLabel}
                  </span>
                </div>
              </div>
            </div>

            <div className="relative h-[222px] w-[453px] overflow-hidden rounded-lg border border-gray-light bg-[#D9D9D9]">
              <Image
                src={product.mapImageUrl}
                alt=""
                fill
                className="object-contain"
                sizes="453px"
              />
              <div className="absolute top-[42px] left-[125px] h-[138px] w-[138px] rounded-full border border-[#FF7F5080] bg-coral/10" />
              <Image
                src="/icons/location.svg"
                alt=""
                width={18}
                height={18}
                className="absolute top-[102px] left-[185px]"
                aria-hidden
              />
            </div>

            <div className="flex max-w-[453px] flex-col gap-1">
              <p className="text-sm font-medium leading-[18px] text-dark">
                Seller
              </p>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="relative h-[55px] w-[55px] overflow-hidden rounded-full border border-coral">
                    <Image
                      src={product.seller.avatarUrl}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="55px"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-[18px] text-dark">
                      {product.seller.name}
                    </p>
                    <p className="text-xs leading-[18px] text-dark">
                      {product.seller.joinedAt}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-0.5">
                  <StarRating count={product.seller.reviewCount} />
                  <span className="rounded-[20px] bg-coral px-2.5 py-2 text-base font-medium text-white">
                    Follow
                  </span>
                </div>
              </div>
            </div>

            <div className="flex max-w-[453px] flex-col gap-2.5">
              <p className="text-base font-medium text-dark">
                Send a message to the seller
              </p>
              <div className="flex items-center justify-between rounded-[25px] border border-gray-light py-0.5 pr-0.5 pl-2.5">
                <span className="text-sm text-dark">
                  Hello, is this article still available?
                </span>
                <Button
                  variant="accent"
                  type="button"
                  className="rounded-[20px] px-2.5 py-2"
                >
                  Send
                </Button>
              </div>
            </div>

            <Link
              href="/dashboard/chat"
              className="inline-flex w-fit rounded-[20px] bg-coral px-6 py-2.5 text-base font-medium text-white"
            >
              Go to chat
            </Link>
          </div>

          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1 text-sm text-dark">
              <span aria-hidden>↗</span>
              Share
            </span>
            <span className="h-8 w-8 rounded-full bg-gray-light" aria-hidden />
            <span className="h-8 w-8 rounded-full bg-gray-light" aria-hidden />
            <span className="h-8 w-8 rounded-full bg-gray-light" aria-hidden />
            <span className="h-8 w-8 rounded-full bg-gray-light" aria-hidden />
            <span className="h-8 w-8 rounded-full bg-gray-light" aria-hidden />
          </div>
        </div>
      </div>

      {variant === "make-offer" ? (
        <MakeOfferPanel
          deliveryFee={product.deliveryFee}
          currency={product.currency}
        />
      ) : (
        <ProductCheckoutPanel product={product} />
      )}
    </div>
  );
}
