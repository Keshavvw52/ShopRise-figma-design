import { cn } from "@/lib/utils";

/**
 * FaqAccordionItem — Figma Frame 1016 (component 417:4111).
 */
interface FaqAccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
}

export function FaqAccordionItem({
  question,
  answer,
  isOpen,
}: FaqAccordionItemProps) {
  return (
    <div className="w-full max-w-[1230px]">
      <div
        className={cn(
          "flex w-full items-center gap-2.5 px-5 py-2.5",
          isOpen ? "bg-coral text-white" : "bg-gray-light/50 text-dark",
        )}
      >
        <span className="text-lg font-medium">{question}</span>
      </div>

      {isOpen && (
        <div className="flex w-full items-center px-5 py-2.5">
          <p className="text-base leading-[22px] text-black">{answer}</p>
        </div>
      )}
    </div>
  );
}
