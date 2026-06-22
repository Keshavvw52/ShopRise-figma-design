import { Suspense } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-full flex-col">
      <Suspense fallback={<header className="h-[200px] w-full bg-white" />}>
        <Navbar />
      </Suspense>
      <div className="flex flex-1 flex-col">{children}</div>
      <Footer />
    </div>
  );
}
