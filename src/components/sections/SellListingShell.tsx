import Image from "next/image";
import Link from "next/link";

/** Shared sell-flow header — Back + Go to marketplace from Figma sell frames */
export function SellListingShell({
  children,
  backHref = "/dashboard/listing/new",
}: {
  children: React.ReactNode;
  backHref?: string;
}) {
  return (
    <div className="flex flex-col gap-6 px-6 pb-8 pt-6">
      <div className="flex items-center justify-between">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-lg text-coral"
        >
          <Image
            src="/icons/arrow-back.svg"
            alt=""
            width={24}
            height={24}
            aria-hidden
          />
          Back
        </Link>
        <Link
          href="/listings"
          className="inline-flex items-center gap-1 text-base text-dark"
        >
          Go to marketplace
          <Image
            src="/icons/arrow-up.svg"
            alt=""
            width={16}
            height={16}
            aria-hidden
          />
        </Link>
      </div>
      {children}
    </div>
  );
}
