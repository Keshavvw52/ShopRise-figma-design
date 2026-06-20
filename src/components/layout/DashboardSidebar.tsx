"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  dashboardFooterLinks,
  dashboardNavLinks,
  isDashboardLinkActive,
} from "@/config/dashboardNavigation";
import { cn } from "@/lib/utils";

/** Dashboard sidebar — Figma Frame 943 (252:4772) */
export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex min-h-screen w-[232px] shrink-0 flex-col justify-between bg-gray-light/20 pt-[17px]">
      <div className="flex flex-col gap-[17px]">
        <Link href="/" className="flex items-center gap-2.5 px-[25px]">
          <span
            className="h-10 w-10 shrink-0 rounded-full bg-gray-light"
            aria-hidden
          />
          <span className="text-lg font-semibold text-dark">ShopRise</span>
        </Link>

        <nav className="flex flex-col gap-2.5 px-[25px]" aria-label="Dashboard">
          {dashboardNavLinks.map((item) => {
            const isActive = isDashboardLinkActive(item.matchPaths, pathname);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 rounded-md py-2.5 pr-6 pl-[15px]",
                  isActive
                    ? "bg-white text-coral"
                    : "text-dark hover:bg-white/60",
                )}
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={24}
                  height={24}
                  aria-hidden
                />
                <span
                  className={cn(
                    "text-base",
                    isActive ? "font-medium" : "font-normal",
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      <nav
        className="flex flex-col gap-2.5 px-[25px] pb-6"
        aria-label="Dashboard footer"
      >
        {dashboardFooterLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-2 rounded-md py-2.5 pr-6 pl-[15px] text-base font-normal text-dark hover:bg-white/60"
          >
            <Image
              src={item.icon}
              alt=""
              width={24}
              height={24}
              aria-hidden
            />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
