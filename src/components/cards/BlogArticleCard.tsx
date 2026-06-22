import Image from "next/image";
import Link from "next/link";
import type { BlogArticle } from "@/data/blog";
import { getArticleBySlug } from "@/data/blog";

function ArticleMeta({
  date,
  readTime,
}: {
  date: string;
  readTime?: string;
}) {
  if (!readTime) {
    return <p className="text-sm leading-[25px] text-dark">{date}</p>;
  }

  return (
    <div className="flex items-center gap-3 text-sm leading-[25px] text-dark">
      <span>{date}</span>
      <span aria-hidden>.</span>
      <span>{readTime}</span>
    </div>
  );
}

/**
 * BlogArticleCard — Figma article component (424:4546).
 * 347×511 card: image, category, title, excerpt, author row.
 */
export function BlogArticleCard({
  slug,
  title,
  category,
  excerpt,
  imageSrc,
  avatarSrc,
  author,
  date,
  readTime,
}: BlogArticle) {
  const hasArticlePage = Boolean(getArticleBySlug(slug));

  const card = (
    <article className="flex w-[347px] max-w-full flex-col">
      <div className="relative h-[244px] w-full overflow-hidden rounded-[5px] shadow-[0_1px_5px_rgba(0,0,0,0.25)]">
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-cover"
          sizes="347px"
        />
      </div>

      <div className="mt-3.5 flex flex-col">
        <p className="text-sm font-medium text-dark">{category}</p>
        <h2 className="mt-3 text-xl font-medium text-[#1D3E80]">{title}</h2>
        <p className="mt-3 text-base leading-[25px] font-normal italic whitespace-pre-line text-dark">
          {excerpt}
        </p>
      </div>

      <div className="mt-5 flex items-center gap-5">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
          <Image
            src={avatarSrc}
            alt=""
            fill
            className="object-cover"
            sizes="80px"
          />
        </div>
        <div>
          <p className="text-sm font-medium text-[#1D3E80]">{author}</p>
          <ArticleMeta date={date} readTime={readTime} />
        </div>
      </div>
    </article>
  );

  if (!hasArticlePage) {
    return card;
  }

  return (
    <Link href={`/blog/${slug}`} className="block">
      {card}
    </Link>
  );
}

/**
 * FeaturedBlogArticle — Figma Frame 1034 (column layout, gap 17px).
 */
export function FeaturedBlogArticle({
  title,
  category,
  excerpt,
  imageSrc,
  avatarSrc,
  author,
  date,
  readTime,
}: BlogArticle) {
  return (
    <article className="flex w-[347px] max-w-full flex-col gap-[17px]">
      <div className="flex flex-col gap-3.5">
        <div className="relative h-[244px] w-full overflow-hidden rounded-[5px] shadow-[0_1px_5px_rgba(0,0,0,0.25)]">
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover"
            sizes="347px"
          />
        </div>
        <p className="text-sm font-medium text-dark">{category}</p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-medium text-[#1D3E80]">{title}</h2>
        <p className="w-[290px] max-w-full text-base leading-[25px] font-normal italic whitespace-pre-line text-dark">
          {excerpt}
        </p>
      </div>

      <div className="flex items-center gap-5">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
          <Image
            src={avatarSrc}
            alt=""
            fill
            className="object-cover"
            sizes="80px"
          />
        </div>
        <div>
          <p className="text-sm font-medium text-[#1D3E80]">{author}</p>
          <ArticleMeta date={date} readTime={readTime} />
        </div>
      </div>
    </article>
  );
}
