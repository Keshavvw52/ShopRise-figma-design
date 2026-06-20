import { cn } from "@/lib/utils";
import { blogCategories } from "@/data/blog";

/** Blog category tabs — Figma Frame 1037, "View all" active by default */
export function BlogCategoryBar() {
  return (
    <nav
      className="flex flex-wrap items-center justify-center gap-[47px]"
      aria-label="Blog categories"
    >
      {blogCategories.map((category) => {
        const isActive = category.id === "all";

        return (
          <span
            key={category.id}
            className={cn(
              isActive
                ? "rounded-[10px] bg-navy px-2.5 py-[5px] text-sm font-medium text-white"
                : "text-base font-normal text-dark",
            )}
          >
            {category.label}
          </span>
        );
      })}
    </nav>
  );
}
