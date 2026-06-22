"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { purchasingTabs } from "@/config/dashboardNavigation";
import { cn } from "@/lib/utils";

/** Purchasing / Offers / Following tabs — Figma Frame 951 */
export function PurchasingTabs() {
  const pathname = usePathname();

  return (
    <div className="mt-4 flex items-center gap-8 px-6">
      {purchasingTabs.map((tab) => {
        const isActive = pathname === tab.href;

        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={cn(
              "flex flex-col gap-1 pb-1",
              isActive
                ? "font-medium text-navy"
                : "font-normal text-dark hover:text-navy/70",
            )}
          >
            <span>{tab.label}</span>
            {isActive && (
              <span className="h-px w-full bg-navy" aria-hidden />
            )}
          </Link>
        );
      })}
    </div>
  );
}
