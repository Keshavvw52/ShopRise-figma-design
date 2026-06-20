import { Input } from "@/components/ui/Input";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { Button } from "@/components/ui/Button";

/** Settings page — Figma Setting frame (255:7035) */
export function SettingsContent() {
  return (
    <>
      <DashboardHeader title="Setting" />
      <div className="flex flex-col gap-6 px-6 pb-8 pt-6">
        <section className="rounded-[10px] border border-gray-light p-5">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <span className="block h-20 w-20 rounded-full border border-coral bg-gray-light" />
              <span className="absolute right-0 bottom-0 h-8 w-8 rounded-full border border-white bg-coral" />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-dark">John DOE</p>
              <p className="text-xs text-dark">johndoe@gmail.com</p>
            </div>
          </div>

          <div className="mt-4 h-px bg-gray-light" />

          <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm text-dark">
            <p>
              current sales: <span className="font-medium text-navy">12</span>
            </p>
            <p>
              current purchases:{" "}
              <span className="font-medium text-navy">04</span>
            </p>
            <p>
              Note : <span className="text-coral">★★★★★ (10)</span>
            </p>
          </div>

          <div className="mt-4 flex justify-center gap-3">
            <button
              type="button"
              className="rounded-[5px] border border-navy px-4 py-2 text-base font-medium text-navy"
            >
              View profil
            </button>
            <Button variant="primary" type="button" className="rounded-[5px]">
              Share
            </Button>
          </div>
        </section>

        <section className="rounded-[10px] border border-gray-light p-5">
          <h2 className="text-lg font-medium text-navy">Basic informations</h2>
          <div className="mt-4 h-px bg-gray-light" />
          <div className="mt-4 flex flex-col gap-4">
            <Input label="First name" defaultValue="John" />
            <Input label="Last name" defaultValue="DOE" />
            <Input label="Email" defaultValue="johndoe@gmail.com" />
            <Input label="Phone" defaultValue="1234466788" />
            <button type="button" className="text-left text-sm text-navy">
              Reset password
            </button>
          </div>
        </section>

        <section className="rounded-[10px] border border-gray-light p-5">
          <h2 className="text-lg font-medium text-navy">Location</h2>
          <div className="mt-4 h-px bg-gray-light" />
          <div className="mt-4">
            <Input label="City" defaultValue="Los Angeles,CA" />
          </div>
        </section>
      </div>
    </>
  );
}
