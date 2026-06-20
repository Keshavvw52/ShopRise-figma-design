import Image from "next/image";
import { StatusBadge } from "@/components/ui/StatusBadge";
import type { DashboardOrderRow } from "@/data/dashboard";

type TableVariant = "purchasing" | "offers" | "sales" | "saleOffers";

interface DashboardOrdersTableProps {
  variant: TableVariant;
  rows: DashboardOrderRow[];
}

function PersonCell({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-6 w-6 shrink-0 rounded-full bg-gray-light" aria-hidden />
      <span>{name}</span>
    </div>
  );
}

/** Dashboard order table — Figma Frame 925 / 937 / 948 */
export function DashboardOrdersTable({
  variant,
  rows,
}: DashboardOrdersTableProps) {
  const isPurchasingOffers = variant === "offers";
  const isSaleOffers = variant === "saleOffers";
  const isOfferTable = isPurchasingOffers || isSaleOffers;

  return (
    <div className="overflow-x-auto px-6 pb-8">
      <table className="w-full min-w-[900px] border-collapse text-sm text-black">
        <thead>
          <tr className="bg-gray-light/50 text-left">
            <th className="rounded-l-[5px] px-3 py-2 font-normal">Date</th>
            <th className="px-3 py-2 font-normal">Image</th>
            <th className="px-3 py-2 font-normal">Name</th>
            <th className="px-3 py-2 font-normal">
              {variant === "sales"
                ? "Custumer"
                : isSaleOffers
                  ? "Customers"
                  : "Seller"}
            </th>
            <th className="px-3 py-2 font-normal">Contact</th>
            {!isOfferTable && (
              <th className="px-3 py-2 font-normal">Fulfilment</th>
            )}
            {isOfferTable ? (
              <>
                <th className="px-3 py-2 font-normal">Offer</th>
                <th className="px-3 py-2 font-normal">Price</th>
              </>
            ) : (
              <th className="px-3 py-2 font-normal">Total</th>
            )}
            <th className="px-3 py-2 font-normal">Status</th>
            {!isPurchasingOffers && (
              <th className="rounded-r-[5px] px-3 py-2 font-normal">Actions</th>
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-b border-gray-light">
              <td className="px-3 py-3">{row.date}</td>
              <td className="px-3 py-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-[5px]">
                  <Image
                    src={row.imageUrl}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
              </td>
              <td className="px-3 py-3">{row.productName}</td>
              <td className="px-3 py-3">
                <PersonCell name={row.personName} />
              </td>
              <td className="px-3 py-3">
                <button type="button" className="text-navy underline">
                  {row.contactLabel}
                </button>
              </td>
              {!isOfferTable && (
                <td className="px-3 py-3">
                  {row.fulfilment && (
                    <StatusBadge label={row.fulfilment} tone="success" />
                  )}
                </td>
              )}
              {isOfferTable ? (
                <>
                  <td className="px-3 py-3">{row.offer}</td>
                  <td className="px-3 py-3">{row.price}</td>
                </>
              ) : (
                <td className="px-3 py-3">{row.total}</td>
              )}
              <td className="px-3 py-3">
                <StatusBadge label={row.status} tone={row.statusTone} />
              </td>
              {!isPurchasingOffers && (
                <td className="px-3 py-3">{row.actions}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
