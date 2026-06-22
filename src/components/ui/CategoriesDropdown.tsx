import { browseCategories } from "@/data/browseCategories";

/** Categories dropdown — Figma Categories frame (108:972) */
export function CategoriesDropdown() {
  return (
    <div className="absolute top-full left-0 z-50 mt-2 max-h-[400px] w-[280px] overflow-y-auto rounded-[10px] border border-gray-light bg-white shadow-[0_1px_5px_rgba(0,0,0,0.25)]">
      {browseCategories.map((category) => (
        <div
          key={category}
          className="border-b border-gray-light px-4 py-2.5 text-sm text-black last:border-b-0"
        >
          {category}
        </div>
      ))}
    </div>
  );
}
