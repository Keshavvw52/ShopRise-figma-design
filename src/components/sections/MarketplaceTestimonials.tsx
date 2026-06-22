import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { testimonials } from "@/data/about";

/** Testimonials — Figma Frame 1045 */
export function MarketplaceTestimonials() {
  return (
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
            avatarSrc={item.avatarSrc}
          />
        ))}
      </div>
    </section>
  );
}
