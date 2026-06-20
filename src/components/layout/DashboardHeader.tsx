import Image from "next/image";
import Link from "next/link";

interface DashboardHeaderProps {
  title: string;
}

/** Dashboard page header — title + alert + Go to marketplace */
export function DashboardHeader({ title }: DashboardHeaderProps) {
  return (
    <div className="flex items-start justify-between px-6 pt-6">
      <h1 className="text-[22px] font-medium text-navy">{title}</h1>

      <div className="flex items-center gap-6">
        <span className="h-[18px] w-[18px] rounded-full bg-gray-light" aria-hidden />
        <Link
          href="/listings"
          className="inline-flex items-center gap-1 text-base font-normal text-dark"
        >
          Go to marketplace
          <Image
            src="/icons/arrow-up.svg"
            alt=""
            width={16}
            height={16}
            aria-hidden
          />
        </Link>
      </div>
    </div>
  );
}
