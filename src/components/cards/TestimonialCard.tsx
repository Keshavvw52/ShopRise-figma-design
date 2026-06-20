interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
}


export function TestimonialCard({ name, role, quote }: TestimonialCardProps) {
  return (
    <article className="flex w-[300px] flex-col gap-4 rounded-[10px] bg-surface p-5">
      <div className="flex items-center gap-3">
        <span
          className="h-12 w-12 shrink-0 rounded-full border border-black bg-gray-light"
          aria-hidden
        />
        <div>
          <p className="text-base font-medium text-dark">{name}</p>
          <p className="text-sm text-coral">{role}</p>
        </div>
      </div>
      <div className="h-px w-full bg-gray-light" role="presentation" aria-hidden />
      <p className="text-sm leading-5 text-dark">{quote}</p>
    </article>
  );
}
