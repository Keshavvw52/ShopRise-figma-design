import { FollowedSellerCard } from "@/components/cards/FollowedSellerCard";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { PurchasingTabs } from "@/components/ui/PurchasingTabs";
import { followedSellers } from "@/data/following";

/** Following tab — Figma Following frame (262:7579) */
export function FollowingContent() {
  return (
    <>
      <DashboardHeader title="Purchasing" />
      <PurchasingTabs />
      <div className="flex flex-col gap-4 px-6 pb-8 pt-6">
        {followedSellers.map((seller) => (
          <FollowedSellerCard key={seller.id} seller={seller} />
        ))}
      </div>
    </>
  );
}
