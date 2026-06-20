"use client";

import { useState } from "react";
import { FaqAccordionItem } from "@/components/ui/FaqAccordionItem";
import { faqItems } from "@/data/faq";

/** FAQ accordion list — first item open by default (Figma active state) */
export function FaqAccordion() {
  const [openId, setOpenId] = useState(faqItems[0]?.id ?? "");

  return (
    <div className="flex w-full max-w-[1230px] flex-col gap-[15px]">
      {faqItems.map((item) => (
        <FaqAccordionItem
          key={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openId === item.id}
          onToggle={() =>
            setOpenId((current) => (current === item.id ? "" : item.id))
          }
        />
      ))}
    </div>
  );
}
