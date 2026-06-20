import Image from "next/image";
import Link from "next/link";

interface AuthShellProps {
  panelImage: string;
  children: React.ReactNode;
}

/**
 * AuthShell — Figma Login / Sign up split layout (442px form + image panel).
 */
export function AuthShell({ panelImage, children }: AuthShellProps) {
  return (
    <div className="flex min-h-screen w-full">
      <div className="flex w-full max-w-[442px] shrink-0 flex-col bg-white">
        <div className="px-[25px] pt-[17px]">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <span
              className="h-10 w-10 shrink-0 rounded-full bg-gray-light"
              aria-hidden
            />
            <span className="text-lg font-semibold text-dark">ShopRise</span>
          </Link>
        </div>

        <div className="flex flex-1 flex-col px-14 pb-12 pt-[79px]">
          {children}
        </div>
      </div>

      <div className="relative hidden min-h-screen flex-1 lg:block">
        <Image
          src={panelImage}
          alt=""
          fill
          className="object-cover"
          sizes="838px"
          priority
        />
        <div className="absolute inset-0 bg-navy/20" aria-hidden />
      </div>
    </div>
  );
}
