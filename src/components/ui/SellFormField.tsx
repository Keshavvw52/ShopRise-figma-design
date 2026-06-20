import { cn } from "@/lib/utils";

interface SellFormFieldProps {
  label: string;
  defaultValue?: string;
  multiline?: boolean;
  className?: string;
}

/** Sell flow form field — Figma mail/Frame 832 pattern */
export function SellFormField({
  label,
  defaultValue,
  multiline = false,
  className,
}: SellFormFieldProps) {
  const fieldId = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={cn("flex w-full max-w-[453px] flex-col gap-[5px]", className)}>
      <label htmlFor={fieldId} className="text-sm font-medium text-dark">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={fieldId}
          defaultValue={defaultValue}
          className="min-h-[100px] w-full rounded-lg border border-gray-light p-2.5 text-sm font-medium text-dark outline-none"
        />
      ) : (
        <div className="flex items-center rounded-lg border border-gray-light px-2.5 py-2.5 text-sm font-medium text-dark">
          <span className="flex-1">{defaultValue}</span>
          <span className="text-gray-light" aria-hidden>
            ▾
          </span>
        </div>
      )}
    </div>
  );
}
