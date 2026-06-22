import { redirect } from "next/navigation";

/** Redirect legacy categories page to listings with dropdown open. */
export default function CategoriesPage() {
  redirect("/listings?categories=open");
}
