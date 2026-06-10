"use client";

import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, className, id, ...props }: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex w-[330px] flex-col gap-[5px]">
      <label htmlFor={inputId} className="text-sm font-medium text-dark">
        {label}
      </label>
      <input
        id={inputId}
        className={cn(
          "w-full rounded-lg border border-gray-light p-2.5",
          "text-sm font-medium text-dark outline-none",
          "placeholder:text-dark",
          className,
        )}
        {...props}
      />
    </div>
  );
}
