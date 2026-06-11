import Image from "next/image";
import { HeartToggle } from "@/components/ui/HeartToggle";
import { cn } from "@/lib/utils";
import { formatCondition, formatPrice, type Product } from "@/types";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <article
      className={cn(
        "inline-flex flex-col rounded-[10px] border border-gray-light p-2.5",
        className,
      )}
    >
      <div className="relative h-[125px] w-[170px] overflow-hidden rounded-[10px]">
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          sizes="170px"
          className="object-cover"
        />
        <HeartToggle
          variant="product"
          defaultIsFavourite={product.isFavourite}
          className="absolute top-2 right-[9px]"
        />
      </div>

      <div className="mt-[11px] flex w-[170px] flex-col gap-0.5">
        <h3 className="text-sm font-medium text-coral">{product.title}</h3>

        <div className="flex items-end gap-[5px]">
          <span className="text-xs font-medium text-navy">
            {formatPrice(product.price)}
          </span>
          <span className="text-[11px] font-normal text-dark">
            {formatCondition(product.condition)}
          </span>
        </div>

        <p className="text-xs font-normal text-dark">{product.location}</p>
      </div>
    </article>
  );
}
