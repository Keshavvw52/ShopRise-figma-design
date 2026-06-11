import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { NavLink } from "@/components/ui/NavLink";
import { SearchBar } from "@/components/ui/SearchBar";

const primaryNav = [
  { href: "/listings", label: "All listing ", active: true },
  { href: "/about", label: "About us" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
] as const;

const secondaryNav = [
  "For you",
  "Local",
  "Selling",
  "Buying",
  "More",
] as const;

export function Navbar() {
  return (
    <header className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-[25px] pt-[17px]">
        {/* Row 1 — Nav bar */}
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <span
              className="h-10 w-10 shrink-0 rounded-full bg-gray-light"
              aria-hidden
            />
            <span className="text-lg font-semibold text-dark">ShopRise</span>
          </Link>

          <nav
            className="flex items-center gap-[50px]"
            aria-label="Primary navigation"
          >
            {primaryNav.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                isActive={"active" in item && item.active}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link href="/login">
            <Button variant="primary" type="button">
              Sign In
            </Button>
          </Link>
        </div>

        {/* Row 2 — Categories + search */}
        <div className="mt-[26px] flex flex-col items-center gap-[9px]">
          <div
            className="h-px w-full bg-gray-light"
            role="presentation"
            aria-hidden
          />
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-[15px]">
              <button
                type="button"
                className="flex items-center gap-[5px] text-base font-medium text-dark"
              >
                <Image
                  src="/icons/list-bold.svg"
                  alt=""
                  width={20}
                  height={20}
                  aria-hidden
                />
                Categories
                <Image
                  src="/icons/chevron-bottom.svg"
                  alt=""
                  width={10}
                  height={10}
                  aria-hidden
                />
              </button>

              <span
                className="h-[25px] w-px bg-dark"
                role="presentation"
                aria-hidden
              />

              <nav
                className="flex items-center gap-[15px]"
                aria-label="Browse filters"
              >
                {secondaryNav.map((item) => (
                  <span key={item} className="flex items-center gap-0.5">
                    <button
                      type="button"
                      className="text-base font-normal text-dark"
                    >
                      {item}
                    </button>
                    {item === "More" && (
                      <Image
                        src="/icons/chevron-bottom.svg"
                        alt=""
                        width={10}
                        height={10}
                        aria-hidden
                      />
                    )}
                  </span>
                ))}
              </nav>
            </div>

            <SearchBar />
          </div>
          <div
            className="h-px w-full bg-gray-light"
            role="presentation"
            aria-hidden
          />
        </div>

        {/* Row 3 — Sort by + location */}
        <div className="mt-[26px] flex items-center justify-between pb-4">
          <div className="flex items-center gap-2.5">
            <span className="text-base font-medium text-dark">Sort by:</span>
            <div className="rounded-md border border-gray-light p-2.5">
              <div className="flex items-center gap-2.5">
                <span className="w-[104px] text-base font-normal text-dark">
                  Less viewed
                </span>
                <Image
                  src="/icons/chevron-bottom.svg"
                  alt=""
                  width={10}
                  height={10}
                  aria-hidden
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            className="flex items-center gap-[3px] text-lg text-navy"
          >
            <Image
              src="/icons/location.svg"
              alt=""
              width={18}
              height={18}
              aria-hidden
            />
            <span className="font-medium">Los Angeles,CA</span>
            <span className="font-normal">-</span>
            <span className="font-normal">10 miles</span>
            <Image
              src="/icons/chevron-bottom.svg"
              alt=""
              width={10}
              height={10}
              aria-hidden
            />
          </button>
        </div>
      </div>
    </header>
  );
}
