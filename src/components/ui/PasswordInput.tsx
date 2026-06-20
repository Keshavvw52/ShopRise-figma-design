import Image from "next/image";
import { cn } from "@/lib/utils";

interface PasswordInputProps {
  label: string;
  defaultValue?: string;
  className?: string;
}

/** Password field — Figma password Frame 832 (static display). */
export function PasswordInput({
  label,
  defaultValue = "*********",
  className,
}: PasswordInputProps) {
  const inputId = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={cn("flex w-full max-w-[330px] flex-col gap-[5px]", className)}>
      <label htmlFor={inputId} className="text-sm font-medium text-dark">
        {label}
      </label>
      <div className="relative">
        <input
          id={inputId}
          type="password"
          defaultValue={defaultValue}
          readOnly
          className="w-full rounded-lg border border-gray-light p-2.5 pr-10 text-sm font-medium text-dark outline-none"
        />
        <Image
          src="/icons/view-off.svg"
          alt=""
          width={16}
          height={16}
          className="absolute top-1/2 right-2.5 -translate-y-1/2"
          aria-hidden
        />
      </div>
    </div>
  );
}
