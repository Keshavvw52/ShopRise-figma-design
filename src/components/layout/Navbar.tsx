"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  isLoggedInNavbarPath,
  isNavLinkActive,
  isSimpleNavbarPath,
  primaryNavLinks,
} from "@/config/navigation";
import { Button } from "@/components/ui/Button";
import { NavLink } from "@/components/ui/NavLink";
import { SearchBar } from "@/components/ui/SearchBar";

const secondaryNav = [
  "For you",
  "Local",
  "Selling",
  "Buying",
  "More",
] as const;

/** Marketplace navbar — Figma Home / Home after connect (static, route-based variants). */
export function Navbar() {
  const pathname = usePathname();
  const isSimple = isSimpleNavbarPath(pathname);
  const isLoggedIn = isLoggedInNavbarPath(pathname);

  return (
    <header className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-[25px] pt-[17px]">
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
            {primaryNavLinks.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                isActive={isNavLinkActive(item.matchPaths, pathname)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {isLoggedIn ? (
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <Link href="/dashboard/chat" aria-label="Messages">
                  <Image
                    src="/icons/mail-outline.svg"
                    alt=""
                    width={24}
                    height={24}
                    aria-hidden
                  />
                </Link>
                <Image
                  src="/icons/alert.svg"
                  alt=""
                  width={24}
                  height={24}
                  aria-hidden
                />
              </div>
              <Link href="/dashboard" className="flex items-center gap-2">
                <span className="text-base font-normal text-dark">John DOE</span>
                <span className="h-8 w-8 rounded-full border border-coral bg-gray-light" />
              </Link>
            </div>
          ) : (
            <Link href="/login">
              <Button variant="primary" type="button">
                Sign In
              </Button>
            </Link>
          )}
        </div>

        {!isSimple && (
          <>
            <div className="mt-[26px] flex flex-col items-center gap-[9px]">
              <div className="h-px w-full bg-gray-light" aria-hidden />
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-[15px]">
                  <Link
                    href="/categories"
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
                  </Link>

                  <span className="h-[25px] w-px bg-dark" aria-hidden />

                  <nav
                    className="flex items-center gap-[15px]"
                    aria-label="Browse filters"
                  >
                    {secondaryNav.map((item) => (
                      <span key={item} className="flex items-center gap-0.5">
                        <span className="text-base font-normal text-dark">
                          {item}
                        </span>
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
              <div className="h-px w-full bg-gray-light" aria-hidden />
            </div>

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

              <Link
                href="/map"
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
              </Link>
            </div>
          </>
        )}

        {isSimple && <div className="pb-4" />}
      </div>
    </header>
  );
}
