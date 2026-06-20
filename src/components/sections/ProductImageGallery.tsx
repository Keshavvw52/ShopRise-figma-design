import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductImageGalleryProps {
  images: string[];
  title: string;
}

/** Product image gallery — Figma Frame 47 (first image + thumbnails, static). */
export function ProductImageGallery({ images, title }: ProductImageGalleryProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative h-[348px] w-[380px] overflow-hidden rounded-lg">
        <Image
          src={images[0]}
          alt={title}
          fill
          className="object-cover"
          sizes="380px"
          priority
        />
      </div>

      <div className="flex gap-5">
        {images.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className={cn(
              "relative h-20 w-20 overflow-hidden rounded-lg",
              index === 0
                ? "border-2 border-coral"
                : "border border-gray-light",
            )}
          >
            <Image
              src={image}
              alt=""
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
