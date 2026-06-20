import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { DashboardOrdersTable } from "@/components/sections/DashboardOrdersTable";
import { PurchasingTabs } from "@/components/ui/PurchasingTabs";
import { purchasingOrders } from "@/data/dashboard";

/** Purchasing page — Figma Purchasing frame (198:2814) */
export function PurchasingContent() {
  return (
    <>
      <DashboardHeader title="Purchasing" />
      <PurchasingTabs />
      <DashboardOrdersTable variant="purchasing" rows={purchasingOrders} />
    </>
  );
}
