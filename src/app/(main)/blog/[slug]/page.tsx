import { notFound } from "next/navigation";
import { ArticleContent } from "@/components/sections/ArticleContent";
import { getAllArticleSlugs, getArticleBySlug } from "@/data/blog";

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-[1280px] flex-1 px-[25px]">
      <ArticleContent article={article} />
    </main>
  );
}
