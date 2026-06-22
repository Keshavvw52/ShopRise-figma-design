import Link from "next/link";
import { DashboardHeader } from "@/components/layout/DashboardHeader";

const adTypes = [
  {
    href: "/dashboard/listing/simple-item",
    title: "Item for sale",
    description: "Create a single ad for one or more items for sale.",
  },
  {
    href: "/dashboard/listing/vehicle",
    title: "Vehicle for sale",
    description: "Sell a car, truck, or other type of vehicle.",
  },
  {
    href: "/dashboard/listing/house",
    title: "Real estate for sale or rent",
    description: "Place an ad for a house or apartment for sale or rent.",
  },
] as const;

/** Category listing — Figma Categorie Listing frame (325:3115) */
export function CategoryListingContent() {
  return (
    <>
      <DashboardHeader title="Sales" />
      <div className="flex flex-col gap-6 px-6 pb-8 pt-6">
        <h2 className="text-2xl font-semibold text-coral">Choose the type of ad</h2>
        <div className="flex flex-wrap gap-[50px]">
          {adTypes.map((type) => (
            <Link
              key={type.href}
              href={type.href}
              className="w-[280px] rounded-[10px] bg-[#F7F7F7]/50 p-5"
            >
              <span className="mb-4 block h-12 w-12 rounded-full bg-[#E8E8E8]" />
              <p className="text-lg font-medium text-coral">{type.title}</p>
              <p className="mt-2 text-sm text-dark">{type.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
