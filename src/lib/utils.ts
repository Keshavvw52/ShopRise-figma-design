/**
 * Merges class names, filtering out falsy values.
 * Used throughout the project to combine Tailwind utility classes conditionally.
 */
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
