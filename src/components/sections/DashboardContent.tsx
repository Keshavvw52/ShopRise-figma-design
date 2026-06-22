import { DashboardHeader } from "@/components/layout/DashboardHeader";
import {
  listingInsights,
  performanceInsights,
} from "@/data/dashboard";

function InsightStat({
  label,
  value,
  description,
}: {
  label: string;
  value: string;
  description?: string;
}) {
  return (
    <div className="flex gap-2.5">
      <div className="flex flex-col items-center">
        <span className="h-10 w-10 rounded-full bg-[#D9D9D9]" aria-hidden />
        <span className="mt-1 h-8 w-1 bg-navy" aria-hidden />
      </div>
      <div>
        <p className="text-sm text-dark">{label}</p>
        <p className="text-lg font-medium text-dark">{value}</p>
        {description && (
          <p className="mt-1 text-xs whitespace-pre-line text-dark">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

/** Dashboard home — Figma Dashbord frame (142:1872) */
export function DashboardContent() {
  return (
    <>
      <DashboardHeader title="Dashbord" />
      <div className="flex flex-col gap-8 px-6 pb-8 pt-6">
        <section>
          <h2 className="text-lg font-medium text-navy">Marketplace insights</h2>
          <div className="mt-4 flex flex-wrap gap-8">
            {listingInsights.map((item) => (
              <InsightStat
                key={item.label}
                label={item.label}
                value={item.value}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-medium text-navy">Marketplace insights</h2>
          <div className="mt-4 flex flex-wrap gap-8">
            {performanceInsights.map((item) => (
              <InsightStat
                key={item.label}
                label={item.label}
                value={item.value}
                description={item.description}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
