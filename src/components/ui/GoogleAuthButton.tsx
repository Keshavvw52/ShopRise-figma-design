import Image from "next/image";

/** Google OAuth button — Figma Frame 831 (static UI, frontend-only). */
export function GoogleAuthButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="flex w-[330px] items-center justify-center gap-[13px] rounded-lg border border-gray-light p-2.5"
    >
      <Image src="/icons/google.svg" alt="" width={16} height={16} aria-hidden />
      <span className="text-sm font-medium text-dark">{label}</span>
    </button>
  );
}
