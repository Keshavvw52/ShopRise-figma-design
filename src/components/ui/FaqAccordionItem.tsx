"use client";

import { cn } from "@/lib/utils";

/**
 * FaqAccordionItem — Figma Frame 1016 (component 417:4111).
 *
 * Default: header bg rgba(211,211,211,0.5), question #333, 18px medium
 * Active:  header bg coral, question white, answer panel below
 * Answer:  16px regular, line-height 22px, black
 */
interface FaqAccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function FaqAccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: FaqAccordionItemProps) {
  return (
    <div className="w-full max-w-[1230px]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={cn(
          "flex w-full items-center gap-2.5 px-5 py-2.5 text-left",
          isOpen ? "bg-coral text-white" : "bg-gray-light/50 text-dark",
        )}
      >
        <span className="text-lg font-medium">{question}</span>
      </button>

      {isOpen && (
        <div className="flex w-full items-center px-5 py-2.5">
          <p className="text-base leading-[22px] text-black">{answer}</p>
        </div>
      )}
    </div>
  );
}
