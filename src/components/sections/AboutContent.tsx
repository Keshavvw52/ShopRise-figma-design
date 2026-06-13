import Image from "next/image";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import {
  aboutHeroImage,
  aboutIntro,
  aboutSections,
  aboutStats,
  howItWorksText,
  testimonials,
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
      <section className="flex flex-wrap gap-x-[75px] gap-y-[35px] p-5">
        {aboutStats.map((stat) => (
          <div key={stat.id} className="flex items-center gap-2.5">
            <span
              className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-gray-light"
              aria-hidden
            />
            <div>
              <p className="text-[40px] leading-none font-medium text-dark">
                {stat.value}
              </p>
              <p className="text-[17px] text-dark">{stat.label}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="flex w-full flex-col gap-6">
        <h2 className="text-[30px] font-medium text-navy">
          Customers Say About Us
        </h2>
        <div className="flex flex-wrap gap-4">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              name={item.name}
              role={item.role}
              quote={item.quote}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
