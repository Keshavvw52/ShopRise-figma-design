import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { cn } from "@/lib/utils";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-white">
      <DashboardSidebar />
      <div className={cn("flex min-h-screen flex-1 flex-col")}>{children}</div>
    </div>
  );
}
