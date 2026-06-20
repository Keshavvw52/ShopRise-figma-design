import Image from "next/image";

/** Remember me checkbox — Figma Frame 835 (static UI). */
export function AuthCheckbox({ label }: { label: string }) {
  return (
    <label className="flex cursor-pointer items-center gap-3.5">
      <Image
        src="/icons/checkbox.svg"
        alt=""
        width={18}
        height={18}
        aria-hidden
      />
      <span className="text-sm font-normal text-dark">{label}</span>
    </label>
  );
}
