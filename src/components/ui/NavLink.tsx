import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * NavLink — Figma Link component set (16:132).
 *  default: Inter Regular 16px, #333
 *  active:  Inter Medium 16px, coral #FF7F50
 */
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
}

export function NavLink({
  href,
  children,
  isActive = false,
  className,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-base transition-colors",
        isActive
          ? "font-medium text-coral"
          : "font-normal text-dark hover:font-medium hover:text-dark/50",
        className,
      )}
    >
      {children}
    </Link>
  );
}
