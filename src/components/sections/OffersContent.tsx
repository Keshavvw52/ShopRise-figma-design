import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { DashboardOrdersTable } from "@/components/sections/DashboardOrdersTable";
import { PurchasingTabs } from "@/components/ui/PurchasingTabs";
import { offersOrders } from "@/data/dashboard";

/** Offers page — Figma Offers frame (198:3007) */
export function OffersContent() {
  return (
    <>
      <DashboardHeader title="Purchasing" />
      <PurchasingTabs />
      <DashboardOrdersTable variant="offers" rows={offersOrders} />
    </>
  );
}
