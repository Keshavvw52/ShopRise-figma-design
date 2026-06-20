import Image from "next/image";
import Link from "next/link";
import type { SellerListing } from "@/data/listings";
import { formatPrice } from "@/types";

/** Seller listing card — Figma Frame 979 (278:3084) */
export function SellerListingCard({ listing }: { listing: SellerListing }) {
  return (
    <article className="flex gap-3 rounded-[10px] border border-gray-light bg-[#F7F7F7]/50 p-3">
      <div className="relative h-[100px] w-[100px] shrink-0 overflow-hidden rounded-[3px] bg-gray-light">
        <Image
          src={listing.imageUrl}
          alt=""
          fill
          className="object-cover"
          sizes="100px"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <h3 className="text-sm font-medium text-coral">{listing.title}</h3>
        <p className="line-clamp-2 text-xs text-dark">{listing.description}</p>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-coral">
            {formatPrice(listing.price)}
          </span>
          <span className="text-xs text-dark">{listing.condition}</span>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs text-dark">
          <span>Listed on {listing.listedOn}</span>
          <span className="text-sm font-medium text-coral">
            • {listing.clicks} clicks on listing
          </span>
        </div>
        <div className="mt-1 flex items-center justify-between">
          <Link href="/dashboard/sales" className="text-sm text-coral underline">
            View orders
          </Link>
          <button type="button" className="rounded-[3px] bg-gray-light px-2 py-1">
            <span className="sr-only">Options</span>
            <span aria-hidden>⋯</span>
          </button>
        </div>
      </div>
    </article>
  );
}
