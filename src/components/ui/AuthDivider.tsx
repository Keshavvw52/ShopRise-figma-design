/** Auth divider — Figma Frame 839 ("or" between lines). */
export function AuthDivider() {
  return (
    <div className="flex w-[330px] items-center gap-2.5">
      <span className="h-px flex-1 bg-gray-light" aria-hidden />
      <span className="text-lg font-normal text-dark">or</span>
      <span className="h-px flex-1 bg-gray-light" aria-hidden />
    </div>
  );
}
