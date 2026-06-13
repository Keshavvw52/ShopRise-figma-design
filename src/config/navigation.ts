export const primaryNavLinks = [
  { href: "/listings", label: "All listing ", matchPaths: ["/", "/listings"] },
  { href: "/about", label: "About us", matchPaths: ["/about"] },
  { href: "/faq", label: "FAQ", matchPaths: ["/faq"] },
  { href: "/blog", label: "Blog", matchPaths: ["/blog"] },
] as const;

/** Routes that use the simple navbar (logo + links + Sign In only). */
export const simpleNavbarPaths = ["/about", "/faq", "/blog"] as const;

export function isSimpleNavbarPath(pathname: string): boolean {
  return (simpleNavbarPaths as readonly string[]).includes(pathname);
}

export function isNavLinkActive(
  matchPaths: readonly string[],
  pathname: string,
): boolean {
  return matchPaths.includes(pathname);
}
