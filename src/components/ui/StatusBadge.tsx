import { cn } from "@/lib/utils";

const toneStyles = {
  success: "bg-[#34B38A40] text-[#34B38A]",
  warning: "bg-[#F29B4C40] text-[#F29B4C]",
  danger: "bg-[#E94D4D40] text-[#E94D4D]",
} as const;

export function StatusBadge({
  label,
  tone,
}: {
  label: string;
  tone: keyof typeof toneStyles;
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-lg px-2 py-0.5 text-[10px] font-medium",
        toneStyles[tone],
      )}
    >
      {label}
    </span>
  );
}
