import { Button } from "@/components/ui/Button";
import { SellFormField } from "@/components/ui/SellFormField";
import { SellListingShell } from "@/components/sections/SellListingShell";

const marketplaceNotice =
  "The articles are public and can be seen by anyone on or off ShopRise. Items such as animals, drugs and medicines, weapons, counterfeits and other items that do not respect intellectual property are prohibited on Marketplace. Consult the Privacy Policy and Terms of Service.";

/** House sell flow — Figma House creation frame (333:4810) */
export function HouseListingContent() {
  return (
    <SellListingShell>
      <section className="rounded-[10px] border border-gray-light p-5">
        <h2 className="text-2xl font-semibold text-coral">New real estate ad</h2>
        <div className="mt-4 flex flex-col gap-4">
          <div>
            <p className="text-lg text-coral">About this estade (Mandatory)</p>
            <p className="text-sm text-dark">Give as much detail possible</p>
          </div>
          <div className="h-px bg-gray-light" />
          <SellFormField label="Type" defaultValue="House" />
          <SellFormField label="Photos (0/10). You can add up to 10 photos." />
          <SellFormField label="Number of room" defaultValue="5" />
          <SellFormField label="Number of bathroom" defaultValue="3" />
          <SellFormField
            label="Description"
            defaultValue="This meticulously crafted residence offers luxurious comfort and an unparalleled lifestyle."
            multiline
          />
          <SellFormField label="Prices" defaultValue="9.99$" />
          <SellFormField label="Location" defaultValue="Los Angeles,CA" />
          <SellFormField label="Type of air conditioning" defaultValue="None" />
          <SellFormField label="Type of heating" defaultValue="None" />
          <p className="max-w-[453px] text-xs text-dark">{marketplaceNotice}</p>
          <Button type="button" className="w-fit rounded-[25px]">
            Create listing
          </Button>
        </div>
      </section>
    </SellListingShell>
  );
}
