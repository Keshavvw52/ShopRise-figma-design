import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/types";

interface MakeOfferPanelProps {
  deliveryFee: number;
  currency?: string;
}

/** Make offer panel — Figma Detail product with make offer (190:2976) */
export function MakeOfferPanel({
  deliveryFee,
  currency = "USD",
}: MakeOfferPanelProps) {
  const offerAmount = 7.46;
  const total = offerAmount + deliveryFee;

  return (
    <aside className="flex w-[335px] shrink-0 flex-col gap-5 rounded-[10px] border border-gray-light p-5">
      <h2 className="text-base font-medium text-dark">Make offer</h2>

      <div className="flex flex-col gap-4">
        <div>
          <p className="text-xs text-dark">Enter your offer</p>
          <div className="mt-1 rounded-lg border border-gray-light px-3 py-2 text-sm text-dark">
            {formatPrice(offerAmount, currency)}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-base font-medium text-dark">Delivery fee</span>
          <span className="text-lg text-coral">
            {formatPrice(deliveryFee, currency)}
          </span>
        </div>
        <div className="h-px w-full border-t border-dashed border-gray-light" />
        <p className="text-right text-[32px] font-medium leading-none text-dark">
          {formatPrice(total, currency)}
        </p>
      </div>

      <div className="flex flex-col gap-2.5">
        <Button type="button" className="w-full">
          Make offer
        </Button>
        <span className="block w-full rounded-[25px] bg-[#666666] px-6 py-2.5 text-center text-base font-medium text-white">
          Cancel
        </span>
      </div>
    </aside>
  );
}
