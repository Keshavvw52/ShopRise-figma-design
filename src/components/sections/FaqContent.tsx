import { AskQuestionForm } from "@/components/sections/AskQuestionForm";
import { FaqAccordion } from "@/components/sections/FaqAccordion";

/** FAQ page content — Figma Frame 1026 */
export function FaqContent() {
  return (
    <div className="flex flex-col items-center gap-[45px] py-16">
      <header className="flex flex-col items-center gap-2.5 text-center">
        <h1 className="text-[32px] font-medium text-navy">
          Frequently Asked Questions
        </h1>
        <p className="text-base font-normal text-black">
          Click on the question to view the corresponding answer.
        </p>
      </header>

      <div className="flex w-full flex-col items-center gap-10">
        <FaqAccordion />
        <AskQuestionForm />
      </div>
    </div>
  );
}
