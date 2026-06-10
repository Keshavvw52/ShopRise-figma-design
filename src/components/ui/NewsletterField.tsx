import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface NewsletterFieldProps {
  className?: string;
}

export function NewsletterField({ className }: NewsletterFieldProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-[296px]",
        "rounded-[25px] border border-gray-light py-0.5 pr-0.5 pl-2.5",
        className,
      )}
    >
      <span className="text-base font-medium text-dark">Email</span>
      <Button variant="accent" type="button">
        Suscribe
      </Button>
    </div>
  );
}
