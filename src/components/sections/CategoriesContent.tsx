import { browseCategories } from "@/data/browseCategories";

/** Categories page — Figma Categories frame (10543) */
export function CategoriesContent() {
  return (
    <div className="py-8">
      <h1 className="text-lg font-medium text-navy">Categories</h1>
      <ul className="mt-4 max-w-[280px] rounded-[10px] border border-gray-light bg-white shadow-[0_1px_5px_rgba(0,0,0,0.25)]">
        {browseCategories.map((category) => (
          <li
            key={category}
            className="border-b border-gray-light px-4 py-2.5 text-sm text-black last:border-b-0"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
