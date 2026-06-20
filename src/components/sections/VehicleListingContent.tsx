import { Button } from "@/components/ui/Button";
import { SellFormField } from "@/components/ui/SellFormField";
import { SellListingShell } from "@/components/sections/SellListingShell";

const marketplaceNotice =
  "The articles are public and can be seen by anyone on or off ShopRise. Items such as animals, drugs and medicines, weapons, counterfeits and other items that do not respect intellectual property are prohibited on Marketplace. Consult the Privacy Policy and Terms of Service.";

/** Vehicle sell flow — Figma Vehicule creation frame (333:4558 area) */
export function VehicleListingContent() {
  return (
    <SellListingShell>
      <section className="rounded-[10px] border border-gray-light p-5">
        <h2 className="text-2xl font-semibold text-coral">Vehicle for sale</h2>
        <div className="mt-4 flex flex-col gap-4">
          <div>
            <p className="text-lg text-coral">Informations (Mandatory)</p>
            <p className="text-sm text-dark">Give as much detail possible</p>
          </div>
          <div className="h-px bg-gray-light" />
          <SellFormField label="Type" defaultValue="Car/truck" />
          <SellFormField label="Photos (0/10). You can add up to 10 photos." />
          <SellFormField label="Location" defaultValue="Los Angeles,CA" />
          <SellFormField label="Year" defaultValue="2015" />
          <SellFormField label="Brand" defaultValue="Toyota" />
          <SellFormField label="Description" multiline />
          <SellFormField label="Prices" defaultValue="9.99$" />
          <SellFormField label="Condition" defaultValue="Used like new" />
          <p className="max-w-[453px] text-xs text-dark">{marketplaceNotice}</p>
          <Button type="button" className="w-fit rounded-[25px]">
            Create listing
          </Button>
        </div>
      </section>
    </SellListingShell>
  );
}
