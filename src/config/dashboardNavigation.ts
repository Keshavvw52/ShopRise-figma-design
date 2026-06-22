export const dashboardNavLinks = [
  {
    href: "/dashboard",
    label: "Dashbord",
    icon: "/icons/dashboard.svg",
    matchPaths: ["/dashboard"],
  },
  {
    href: "/dashboard/purchasing",
    label: "Purchasing",
    icon: "/icons/bag.svg",
    matchPaths: [
      "/dashboard/purchasing",
      "/dashboard/offers",
      "/dashboard/following",
    ],
  },
  {
    href: "/dashboard/sales",
    label: "Sales",
    icon: "/icons/shop.svg",
    matchPaths: [
      "/dashboard/sales",
      "/dashboard/listing",
      "/dashboard/listing/new",
      "/dashboard/listing/simple-item",
      "/dashboard/listing/vehicle",
      "/dashboard/listing/house",
      "/dashboard/sales/offers",
    ],
  },
  {
    href: "/dashboard/favourites",
    label: "Favourites",
    icon: "/icons/heart-sidebar.svg",
    matchPaths: ["/dashboard/favourites"],
  },
  {
    href: "/dashboard/chat",
    label: "Chat",
    icon: "/icons/mail-outline.svg",
    matchPaths: ["/dashboard/chat"],
  },
  {
    href: "/dashboard/settings",
    label: "Setting",
    icon: "/icons/setting.svg",
    matchPaths: ["/dashboard/settings"],
  },
] as const;

export const dashboardFooterLinks = [
  { href: "/faq", label: "Help", icon: "/icons/help.svg" },
  { href: "/login", label: "Logout", icon: "/icons/logout.svg" },
] as const;

export const purchasingTabs = [
  { href: "/dashboard/purchasing", label: "Purchasing" },
  { href: "/dashboard/offers", label: "Offers" },
  { href: "/dashboard/following", label: "Following" },
] as const;

export const salesTabs = [
  { href: "/dashboard/sales", label: "Orders" },
  { href: "/dashboard/listing", label: "Listing" },
  { href: "/dashboard/sales/offers", label: "Offers" },
] as const;

export function isDashboardLinkActive(
  matchPaths: readonly string[],
  pathname: string,
): boolean {
  return matchPaths.includes(pathname);
}
