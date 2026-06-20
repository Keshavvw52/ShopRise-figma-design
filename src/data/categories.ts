export interface Category {
  id: string;
  label: string;
  
  tone: "dark" | "black";
}

export const categories: Category[] = [
  { id: "1", label: "Arts & Crafts", tone: "dark" },
  { id: "2", label: "Antiques & Collectibles ", tone: "black" },
  { id: "3", label: "Auto Parts", tone: "black" },
  { id: "4", label: "Books, Movies & Music", tone: "black" },
  { id: "5", label: "Electronics", tone: "black" },
  { id: "6", label: "Furniture", tone: "black" },
  { id: "7", label: "Home Improvement & Tools", tone: "black" },
];
