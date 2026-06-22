/** Notification items — Figma Notifications frame (134:1423) */
export interface NotificationItem {
  id: string;
  title: string;
  body: string;
  time: string;
  status: "Unread" | "Read";
}

export const notifications: NotificationItem[] = [
  {
    id: "1",
    title: "Sell",
    body: "Your item [Item Name] has been sold to [Buyer's Name]. Please proceed with shipping as soon as possible",
    time: "1 hour ago",
    status: "Unread",
  },
  {
    id: "2",
    title: "Purchase",
    body: "You have purchased the item [Item Name] from [Seller's Name]. Thank you for your purchase!",
    time: "1 hour ago",
    status: "Unread",
  },
  {
    id: "3",
    title: "Sell",
    body: "Your item [Item Name] has been sold to [Buyer's Name]. Please proceed with shipping as soon as possible",
    time: "1 hour ago",
    status: "Read",
  },
  {
    id: "4",
    title: "Message",
    body: "You have received a message from [User's Name]. Check your inbox to respond.",
    time: "1 hour ago",
    status: "Read",
  },
  {
    id: "5",
    title: "Feedback",
    body: "[Buyer's Name] has opened a claim regarding the item [Item Name]. Please review the situation promptly",
    time: "1 hour ago",
    status: "Read",
  },
  {
    id: "6",
    title: "Order",
    body: '[User\'s Name] has reviewed your item [Item Name]. Check out the feedback and respond if necessary."',
    time: "1 hour ago",
    status: "Read",
  },
];

export const unreadNotificationCount = notifications.filter(
  (item) => item.status === "Unread",
).length;
