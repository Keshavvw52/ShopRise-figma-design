import { CategoryTag } from "@/components/ui/CategoryTag";
import { categories } from "@/data/categories";

export function CategoryFilterBar() {
  return (
    <section
      className="mb-6 flex w-full items-center gap-5"
      aria-label="Active category filters"
    >
      <div className="flex items-center gap-2.5">
        {categories.map((category) => (
          <CategoryTag
            key={category.id}
            label={category.label}
            tone={category.tone}
          />
        ))}
      </div>

      <button
        type="button"
        className="ml-auto shrink-0 text-base font-semibold text-coral"
      >
        Clear all categorie
      </button>
    </section>
  );
}
