import type { FollowedSeller } from "@/data/following";

/** Followed seller card — Figma Frame 954 (262:7840) */
export function FollowedSellerCard({ seller }: { seller: FollowedSeller }) {
  return (
    <article className="rounded-[10px] border border-gray-light bg-[#F7F7F7]/50 p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="h-10 w-10 shrink-0 rounded-full border border-coral bg-gray-light" />
          <div>
            <p className="text-sm font-medium text-dark">{seller.name}</p>
            <p className="text-xs text-dark">{seller.joinedAt}</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index} className="text-coral text-xs" aria-hidden>
                ★
              </span>
            ))}
            <span className="text-xs text-dark">({seller.reviewCount})</span>
          </div>
          <button
            type="button"
            className="rounded-[20px] bg-coral px-2.5 py-2 text-base font-medium text-white"
          >
            Unfollow
          </button>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between text-xs text-dark">
        <span>{seller.listingsCount} listings</span>
        <button type="button" className="text-sm text-coral underline">
          View listing
        </button>
      </div>
    </article>
  );
}
