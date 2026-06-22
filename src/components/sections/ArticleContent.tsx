import Image from "next/image";
import Link from "next/link";
import { BlogArticleCard } from "@/components/cards/BlogArticleCard";
import type { ArticleDetail } from "@/data/blog";
import { blogArticles } from "@/data/blog";

/** Article detail page — Figma Articles frame (424:4368) */
export function ArticleContent({ article }: { article: ArticleDetail }) {
  const relatedPosts = blogArticles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);

  return (
    <article className="mx-auto flex w-full max-w-[800px] flex-col gap-8 py-[30px]">
      <nav className="flex items-center gap-2 text-base text-dark">
        <Link href="/blog" className="hover:text-coral">
          Blog
        </Link>
        <span>&gt;</span>
        <span className="font-medium text-coral">{article.breadcrumbCategory}</span>
      </nav>

      <h1 className="text-[32px] font-medium text-coral">{article.title}</h1>

      <div className="relative h-[300px] w-full overflow-hidden rounded-[5px] shadow-[0_1px_5px_rgba(0,0,0,0.25)]">
        <Image
          src={article.imageSrc}
          alt=""
          fill
          className="object-cover"
          sizes="800px"
          priority
        />
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-full">
            <Image
              src={article.avatarSrc}
              alt=""
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-coral">{article.author}</p>
            <p className="text-sm text-dark">{article.role}</p>
          </div>
        </div>
        <p className="text-sm text-dark">
          By {article.author} · {article.date}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-base font-medium text-dark">Share this post</p>
        <div className="flex gap-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <span
              key={index}
              className="h-8 w-8 rounded-full bg-coral"
              aria-hidden
            />
          ))}
        </div>
      </div>

      <section className="flex flex-col gap-4">
        <h2 className="text-[32px] font-medium text-coral">Introduction</h2>
        <p className="whitespace-pre-line text-base text-dark">
          {article.introduction}
        </p>
      </section>

      <p className="text-base text-dark">{article.imageCaption}</p>

      <section className="flex flex-col gap-4">
        <p className="whitespace-pre-line text-base text-coral">{article.body}</p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-[32px] font-medium text-coral">Conclusion</h2>
        <p className="whitespace-pre-line text-base text-dark">
          {article.conclusion}
        </p>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-medium text-coral">Related posts</h2>
        <div className="flex flex-wrap gap-[25px]">
          {relatedPosts.map((post) => (
            <BlogArticleCard key={post.id} {...post} />
          ))}
        </div>
      </section>
    </article>
  );
}
