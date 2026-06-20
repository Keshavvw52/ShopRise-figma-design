/** Dashboard insight stats — Figma Dashbord frame (142:1872) */
export const listingInsights = [
  { label: "Clicks on listings", value: "0" },
  { label: "Listing saves", value: "0" },
  { label: "Listing shares", value: "0" },
  { label: "Marketplace followers", value: "0" },
] as const;

export const performanceInsights = [
  {
    label: "Cancellation rate",
    value: "0%",
    description: "You have canceled 0% of vour\norders",
  },
  {
    label: "Missed handling rate",
    value: "0%",
    description:
      "You have shipped or canceled 0% of orders after 3 business davs.",
  },
  {
    label: "Claim escalation",
    value: "0%",
    description:
      "0% of vour orders covered by\nDurchase Protection are escalated\nto Facebook",
  },
] as const;

export interface DashboardOrderRow {
  id: string;
  date: string;
  productName: string;
  imageUrl: string;
  personName: string;
  contactLabel: string;
  fulfilment?: string;
  total?: string;
  offer?: string;
  price?: string;
  status: string;
  statusTone: "success" | "warning" | "danger";
  actions?: string;
}

const sharedRow = {
  date: "18 March",
  productName: "Litter troller sprayer",
  imageUrl: "/images/products/liter-trolley-sprayer.png",
  personName: "Jackson Smith",
  contactLabel: "Go to chat",
};

/** Purchasing table rows — Figma Purchasing frame */
export const purchasingOrders: DashboardOrderRow[] = [
  {
    id: "1",
    ...sharedRow,
    fulfilment: "Delivered",
    total: "$300",
    status: "Completed",
    statusTone: "success",
    actions: "...",
  },
  {
    id: "2",
    ...sharedRow,
    fulfilment: "Shipped",
    total: "$300",
    status: "In progress",
    statusTone: "warning",
    actions: "...",
  },
];

/** Offers table rows — Figma Offers frame */
export const offersOrders: DashboardOrderRow[] = [
  {
    id: "1",
    ...sharedRow,
    offer: "$300",
    price: "$300",
    status: "Accepted",
    statusTone: "success",
  },
  {
    id: "2",
    ...sharedRow,
    offer: "$250",
    price: "$300",
    status: "Pending",
    statusTone: "warning",
  },
];

/** Sales table rows — Figma Sale frame */
export const salesOrders: DashboardOrderRow[] = [
  {
    id: "1",
    ...sharedRow,
    fulfilment: "Delivered",
    total: "$300",
    status: "Completed",
    statusTone: "success",
    actions: "...",
  },
];

/** Sale offer rows — Figma Sale offer frame (255:6337) */
export const saleOfferOrders: DashboardOrderRow[] = [
  {
    id: "1",
    ...sharedRow,
    offer: "$300",
    price: "$300",
    status: "Pending",
    statusTone: "warning",
    actions: "...",
  },
  {
    id: "2",
    ...sharedRow,
    offer: "$250",
    price: "$300",
    status: "Accepted",
    statusTone: "success",
    actions: "...",
  },
];
