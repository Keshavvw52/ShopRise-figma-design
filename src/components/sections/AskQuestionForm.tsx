import { Button } from "@/components/ui/Button";

/**
 * AskQuestionForm — Figma Frame 1023 (static UI, frontend-only).
 */
export function AskQuestionForm() {
  return (
    <section className="flex w-full max-w-[1230px] flex-col gap-2.5">
      <h2 className="text-lg font-medium text-dark">Ask your question</h2>

      <div className="flex w-full gap-2.5">
        <div className="inline-flex h-[43px] w-[483px] items-center rounded-[25px] border border-gray-light py-0.5 pr-0.5 pl-2.5">
          <span className="text-base font-normal text-dark">Email </span>
        </div>

        <div className="inline-flex flex-1 items-center justify-between rounded-[25px] border border-gray-light py-0.5 pr-0.5 pl-2.5">
          <span className="text-base font-normal text-dark">
            Hello, is this article still available?
          </span>
          <Button
            variant="primary"
            type="button"
            className="rounded-[20px] px-2.5 py-2.5"
          >
            Send
          </Button>
        </div>
      </div>
    </section>
  );
}
