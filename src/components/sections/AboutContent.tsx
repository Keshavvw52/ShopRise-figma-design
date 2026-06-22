import Image from "next/image";
import { MarketplaceStats } from "@/components/sections/MarketplaceStats";
import { MarketplaceTestimonials } from "@/components/sections/MarketplaceTestimonials";
import {
  aboutHeroImage,
  aboutIntro,
  aboutSections,
  howItWorksText,
} from "@/data/about";

function AboutTextSection({
  title,
  paragraphs,
  bullets,
}: {
  title: string;
  paragraphs: string[];
  bullets?: { label: string; text: string }[];
}) {
  return (
    <section className="flex w-[701px] max-w-full flex-col gap-5">
      <h2 className="text-[22px] leading-7 font-medium text-navy">{title}</h2>
      {paragraphs.map((paragraph) => (
        <p
          key={paragraph}
          className="text-lg leading-6 font-normal text-dark whitespace-pre-line"
        >
          {paragraph}
        </p>
      ))}
      {bullets && (
        <div className="space-y-4 text-lg leading-6 text-dark">
          {bullets.map((bullet) => (
            <p key={bullet.label}>
              <span className="font-medium">{bullet.label}</span>: {bullet.text}
            </p>
          ))}
        </div>
      )}
    </section>
  );
}

/** About page main content — Figma Frame 1046 */
export function AboutContent() {
  const allSections = [aboutIntro, ...aboutSections];

  return (
    <div className="flex flex-col items-center gap-[50px] py-[74px]">
      {/* Intro row: full text column + hero image */}
      <div className="flex flex-col items-center gap-[30px]">
        <div className="flex flex-row gap-5">
          <div className="flex w-[701px] max-w-full flex-col gap-[22px]">
            {allSections.map((section) => (
              <AboutTextSection
                key={section.id}
                title={section.title}
                paragraphs={section.paragraphs}
                bullets={section.bullets}
              />
            ))}
          </div>
          <div className="relative h-[404px] w-[507px] shrink-0 overflow-hidden rounded-[10px]">
            <Image
              src={aboutHeroImage}
              alt=""
              fill
              className="object-cover"
              sizes="507px"
              priority
            />
          </div>
        </div>
      </div>

      {/* How it Works */}
      <section className="w-full max-w-[1283px] bg-surface p-[25px]">
        <h2 className="text-[30px] leading-7 font-medium text-navy">
          How it Works
        </h2>
        <p className="mt-[25px] text-xl leading-[30px] font-normal whitespace-pre-line text-dark">
          {howItWorksText}
        </p>
      </section>

      {/* Stats */}
      <MarketplaceStats />

      {/* Testimonials */}
      <MarketplaceTestimonials />
    </div>
  );
}
