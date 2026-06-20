import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { DashboardOrdersTable } from "@/components/sections/DashboardOrdersTable";
import { SalesTabs } from "@/components/ui/SalesTabs";
import { salesOrders } from "@/data/dashboard";

/** Sales page — Figma Sale frame (198:3422) */
export function SalesContent() {
  return (
    <>
      <DashboardHeader title="Sales" />
      <SalesTabs />
      <DashboardOrdersTable variant="sales" rows={salesOrders} />
    </>
  );
}
