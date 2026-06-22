import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  avatarSrc: string;
}

/** Testimonial card — Figma Frame 1040 */
export function TestimonialCard({
  name,
  role,
  quote,
  avatarSrc,
}: TestimonialCardProps) {
  return (
    <article className="flex w-[300px] flex-col items-center gap-5 rounded-[10px] bg-surface p-5">
      <Image
        src={avatarSrc}
        alt=""
        width={70}
        height={70}
        className="h-[70px] w-[70px] rounded-full border border-black object-cover"
      />
      <div className="flex flex-col items-center gap-[5px]">
        <p className="text-center text-[22px] font-semibold text-dark">{name}</p>
        <p className="text-center text-[15px] text-coral">{role}</p>
      </div>
      <div className="h-px w-full bg-gray-light" role="presentation" aria-hidden />
      <p className="w-[253px] text-center text-base leading-normal text-dark">
        {quote}
      </p>
    </article>
  );
}
