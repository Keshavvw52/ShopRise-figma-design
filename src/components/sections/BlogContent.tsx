import {
  BlogArticleCard,
  FeaturedBlogArticle,
} from "@/components/cards/BlogArticleCard";
import { BlogCategoryBar } from "@/components/sections/BlogCategoryBar";
import { blogArticles, featuredBlogArticle } from "@/data/blog";

/** Blog page content — Figma Blog frame (424:4201) */
export function BlogContent() {
  return (
    <div className="flex flex-col items-center gap-[45px] py-[30px]">
      <header className="flex flex-col items-center gap-[15px] text-center">
        <h1 className="text-[32px] leading-tight font-medium whitespace-pre-line text-navy">
          Discover the World of Knowledge{"\n"}with ShopRise
        </h1>
        <p className="text-base font-normal text-dark">
          Join us in this exciting adventure of discovery and learning.
        </p>
      </header>

      <BlogCategoryBar />

      <section className="grid w-full max-w-[1096px] grid-cols-1 gap-x-[25px] gap-y-[47px] md:grid-cols-2 xl:grid-cols-3">
        <FeaturedBlogArticle {...featuredBlogArticle} />
        {blogArticles.map((article) => (
          <BlogArticleCard key={article.id} {...article} />
        ))}
      </section>
    </div>
  );
}
