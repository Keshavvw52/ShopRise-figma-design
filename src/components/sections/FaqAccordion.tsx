import { FaqAccordionItem } from "@/components/ui/FaqAccordionItem";
import { faqItems } from "@/data/faq";

/** FAQ list — Figma FAQ frame (first item open, static). */
export function FaqAccordion() {
  return (
    <div className="flex w-full max-w-[1230px] flex-col gap-[15px]">
      {faqItems.map((item, index) => (
        <FaqAccordionItem
          key={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={index === 0}
        />
      ))}
    </div>
  );
}
