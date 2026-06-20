import Link from "next/link";
import { SellerListingCard } from "@/components/cards/SellerListingCard";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { SalesTabs } from "@/components/ui/SalesTabs";
import { Button } from "@/components/ui/Button";
import { sellerListings } from "@/data/listings";

/** Seller listings — Figma Listing frame (261:7261) */
export function ListingContent() {
  return (
    <>
      <DashboardHeader title="Sales" />
      <SalesTabs />
      <div className="flex flex-col gap-4 px-6 pb-8 pt-6">
        <Link href="/dashboard/listing/new">
          <Button type="button" className="rounded-[25px]">
            Create new listing
          </Button>
        </Link>
        <div className="flex flex-col gap-4">
          {sellerListings.map((listing) => (
            <SellerListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </>
  );
}
