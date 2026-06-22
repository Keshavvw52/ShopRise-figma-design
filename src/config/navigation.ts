export const primaryNavLinks = [
  { href: "/listings", label: "All listing ", matchPaths: ["/", "/listings"] },
  { href: "/about", label: "About us", matchPaths: ["/about"] },
  { href: "/faq", label: "FAQ", matchPaths: ["/faq"] },
  { href: "/blog", label: "Blog", matchPaths: ["/blog"] },
] as const;

/** Routes that use the simple navbar (logo + links + Sign In only). */
export const simpleNavbarPaths = ["/about", "/faq", "/blog"] as const;

/** Routes that use the logged-in navbar — Figma Home after connect frame. */
export const loggedInNavbarPaths = ["/home-after-connect"] as const;

export function isSimpleNavbarPath(pathname: string): boolean {
  if ((simpleNavbarPaths as readonly string[]).includes(pathname)) {
    return true;
  }

  return pathname.startsWith("/blog/");
}

export function isLoggedInNavbarPath(pathname: string): boolean {
  if ((loggedInNavbarPaths as readonly string[]).includes(pathname)) {
    return true;
  }

  return pathname.endsWith("/make-offer");
}

export function isNavLinkActive(
  matchPaths: readonly string[],
  pathname: string,
): boolean {
  return matchPaths.includes(pathname);
}
