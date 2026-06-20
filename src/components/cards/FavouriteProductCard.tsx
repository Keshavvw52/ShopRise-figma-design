import Image from "next/image";
import Link from "next/link";
import { HeartToggle } from "@/components/ui/HeartToggle";
import { formatCondition, formatPrice, type Product } from "@/types";

/** Favourite product card — Figma Frame 18 horizontal layout */
export function FavouriteProductCard({ product }: { product: Product }) {
  return (
    <article className="inline-flex gap-2.5 rounded-[10px] border border-gray-light p-2.5">
      <Link href={`/products/${product.id}`} className="flex gap-2.5">
        <div className="relative h-[125px] w-[170px] overflow-hidden rounded-[10px] bg-surface">
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            className="object-cover"
            sizes="170px"
          />
          <HeartToggle
            variant="product"
            defaultIsFavourite
            className="absolute top-2 right-[9px]"
          />
        </div>
        <div className="flex w-[170px] flex-col gap-0.5 pt-1">
          <h3 className="text-sm font-medium text-coral">{product.title}</h3>
          <div className="flex items-end gap-[5px]">
            <span className="text-xs font-medium text-navy">
              {formatPrice(product.price)}
            </span>
            <span className="text-[11px] text-dark">
              {formatCondition(product.condition)}
            </span>
          </div>
          <p className="text-base text-dark">{product.location}</p>
        </div>
      </Link>
    </article>
  );
}
