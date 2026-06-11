import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { NavLink } from "@/components/ui/NavLink";
import { NewsletterField } from "@/components/ui/NewsletterField";

const mainLinks = [
  { href: "/listings", label: "All listing ", active: true },
  { href: "/about", label: "About us" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
] as const;

const policyLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms and Conditions" },
  { href: "/shipping", label: "Shipping Policy" },
] as const;

const brandDescription =
  "ShopRise is not just a marketplace; it's a commitment. A commitment to uncompromised quality, unparalleled user experience, and unwavering integrity. As we continue to grow and evolve, our core principle remains unchanged: to empower each user to buy and sell with confidence.";

/**
 * Footer — Figma `foot` frame (1280×299, bg #F7F7F7).
 *
 * Columns: brand + CTA | main links | policy links | newsletter | social icons
 * Bottom: copyright line, right-aligned
 */
export function Footer() {
  return (
    <footer className="w-full bg-surface">
      <div className="mx-auto flex min-h-[299px] w-full max-w-[1280px] flex-col px-[25px] pt-[33px] pb-[33px]">
        <div className="flex items-start">
          {/* Brand column */}
          <div className="flex w-[363px] shrink-0 flex-col gap-5">
            <div className="flex flex-col gap-[15px]">
              <Link href="/" className="flex items-center gap-2.5">
                <span
                  className="h-10 w-10 shrink-0 rounded-full bg-gray-light"
                  aria-hidden
                />
                <span className="text-lg font-semibold text-dark">ShopRise</span>
              </Link>
              <p className="text-sm leading-5 text-dark">{brandDescription}</p>
            </div>
            <Button variant="primary" type="button">
              Sell on ShopRise
            </Button>
          </div>

          {/* Main nav column */}
          <nav
            className="ml-[34px] flex flex-col gap-[15px]"
            aria-label="Footer navigation"
          >
            {mainLinks.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                isActive={"active" in item && item.active}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Policy links column */}
          <nav
            className="ml-[123px] flex flex-col gap-[15px]"
            aria-label="Footer policies"
          >
            {policyLinks.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Newsletter column */}
          <div className="ml-[274px] flex flex-col gap-2.5">
            <p className="text-lg font-medium text-dark">
              Suscribe to our newsletter
            </p>
            <NewsletterField />
          </div>

          {/* Social icons */}
          <div className="ml-auto flex flex-col gap-2.5 pt-[81px]">
            <button
              type="button"
              className="flex h-[30px] w-[30px] items-center justify-center"
              aria-label="Social media link 1"
            >
              <Image
                src="/icons/social-1.svg"
                alt=""
                width={30}
                height={30}
                aria-hidden
              />
            </button>
            <button
              type="button"
              className="flex h-[30px] w-[30px] items-center justify-center"
              aria-label="Social media link 2"
            >
              <Image
                src="/icons/social-2.svg"
                alt=""
                width={30}
                height={30}
                aria-hidden
              />
            </button>
          </div>
        </div>

        <p className="mt-auto pt-8 text-right text-lg text-black">
          © All Right Reserved by | ShopRise | Copyright 2023
        </p>
      </div>
    </footer>
  );
}
