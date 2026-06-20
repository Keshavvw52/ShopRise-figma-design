import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { DashboardOrdersTable } from "@/components/sections/DashboardOrdersTable";
import { SalesTabs } from "@/components/ui/SalesTabs";
import { saleOfferOrders } from "@/data/dashboard";

/** Sale offer tab — Figma Sale offer frame (255:6337) */
export function SalesOffersContent() {
  return (
    <>
      <DashboardHeader title="Sales" />
      <SalesTabs />
      <DashboardOrdersTable variant="saleOffers" rows={saleOfferOrders} />
    </>
  );
}
